/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

// Web Site Framework
const express = require("express");

//The Microsoft Authentication Library for JavaScript enables client-side JavaScript web applications to authenticate users using Azure AD.
const msal = require('@azure/msal-node');


//Azure Blob Storage Library for JavaScript
const {
    BlobServiceClient,
    BlobClient
} = require('@azure/storage-blob');

//The Azure Identity library provides Azure Active Directory token authentication support across the Azure SDK. 
//It provides a set of TokenCredential implementations which can be used to construct Azure SDK clients which support AAD token authentication.
const {
    AuthorizationCodeCredential
} = require('@azure/identity');
require('dotenv').config()

const SERVER_PORT = process.env.PORT || 5000;

// Before running the sample, you will need to update the .env file

/**
 * Configuration object to be passed to MSAL instance on creation. 
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
 */
const msalConfig = {
    auth: {
        clientId: process.env.clientId,
        authority: process.env.authority,
        clientSecret: process.env.clientSecret, 
        redirectUri: process.env.redirectUri
    },
    cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback(loglevel, message, containsPii) {
                console.log(message);
            },
            piiLoggingEnabled: false,
            logLevel: msal.LogLevel.Verbose,
        }
    }
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit: 
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 * For more information about /authorize query parameter visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow#request-an-authorization-code
 */
const loginRequest = {
    scopes: ["user.read", 'https://storage.azure.com/user_impersonation'],
    redirectUri: msalConfig.auth.redirectUri,
    extraQueryParameters: {
        login_hint: 'peter.parker@myedge.org'
    },
    response_mode: 'query'
};

// Create msal application object
const msalClient = new msal.ConfidentialClientApplication(msalConfig);

// Create Express App and Routes
const app = express();

app.get('/', (req, res) => {
    // Request an authorization code
    // Request to /oaut2/v2.0/authorize Endpoint
    // get url to sign user in and consent to scopes needed for application
    msalClient.getAuthCodeUrl(loginRequest).then((authorizeURL) => {
        console.log('Endpoint /authorize: ' + authorizeURL);
        //send redirect url "/oaut2/v2.0/authorize" to user:
        res.redirect(authorizeURL);
    }).catch((error) => console.log(JSON.stringify(error)));
});

app.get('/redirect', async (req, res) => {
    const credential = new AuthorizationCodeCredential(
        process.env.tenantId,
        process.env.clientId,
        process.env.clientSecret,
        req.query.code,
        msalConfig.auth.redirectUri
    );
    try {
        const blobServiceClient = new BlobServiceClient(
            `https://${process.env.storageAccountName}.blob.core.windows.net`,
            credential
        );
        let containerClient = blobServiceClient.getContainerClient(process.env.containerName)
        let blobNameArray = [];
        let i = 1;
        let iter = containerClient.listBlobsFlat();
        let blobItem = await iter.next();
        while (!blobItem.done) {
            console.log(`Blob ${i++}: ${blobItem.value.name}`);
            blobNameArray.push(blobItem.value.name);
            blobItem = await iter.next();
        }
        res.send(JSON.stringify(blobNameArray, null, '\t'));
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

// Receive Authorization Code
app.get('/redirect_', (req, res) => {
    /**
     * Request an access token with a client_secret
     * Scopes you add here will be used to request a token from Azure AD to be used for accessing a protected resource.
     * To learn more about how to work with scopes and resources, see: 
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
     * For more information about /token query parameter visit:
     * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow#request-an-access-token-with-a-client_secret
     */
    const tokenRequest = {
        code: req.query.code, //The authorization_code that you acquired in the first leg of the flow (/authorize).
        scopes: ['https://storage.azure.com/user_impersonation'],
        redirectUri: msalConfig.auth.redirectUri
    };
    // Request Access Token via /oaut2/v2.0/token
    msalClient.acquireTokenByCode(tokenRequest).then(async (response) => {
        console.log("\authorization_code: \n:", req.query.code);
        console.log("\nresponse /token: \n:", response);
        res.send(JSON.stringify(response, null, '\t'));
    }).catch((error) => {
        console.log(error);
        res.status(500).send(error);
    });
});



app.listen(SERVER_PORT, () => console.log(`Msal Node Auth Code Sample app listening on port ${SERVER_PORT}!`))