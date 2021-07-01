---
page_type: sample
languages:
- javascript
products:
- nodejs
- azure-active-directory
description: "Add authentication to a Node.js web application with the Microsoft Authentication Library for Node.js (MSAL Node)."
urlFragment: "quickstart-v2-nodejs-webapp-msal"
---
# MyNotes
// https://login.microsoftonline.com/0ba83d3d-0644-4916-98c0-d513e10dc917/saml2

Client Secret ID b07d5606-79c6-462a-8c70-eaef53a7d7aa, Name secret20210505

Good overview of all the different types of how to log in with javascript.
https://github.com/Azure/azure-sdk-for-js/blob/hotfix/identity_1.3.0/sdk/identity/identity/samples/AzureIdentityExamples.md#authenticating-a-user-account-with-auth-code-flow


HTTP/1.1 302 Found
X-Powered-By: Express
Location: https://login.microsoftonline.com/0ba83d3d-0644-4916-98c0-d513e10dc917/oauth2/v2.0/authorize?client_id=a9757c24-0199-40a0-bac5-5ed80c87d5c8&scope=user.read%20openid%20profile%20offline_access&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fredirect&client-request-id=7cb5b09b-4685-4378-b811-54215a027e59&response_mode=query&response_type=code&x-client-SKU=msal.js.node&x-client-VER=1.0.0&x-client-OS=win32&x-client-CPU=x64&client_info=1&login_hint=peter.parker@myedge.org
Vary: Accept
Content-Type: text/html; charset=utf-8
Content-Length: 1068
Date: Fri, 07 May 2021 11:10:35 GMT
Connection: keep-alive

https://login.microsoftonline.com/0ba83d3d-0644-4916-98c0-d513e10dc917/oauth2/v2.0/authorize?
client_id=a9757c24-0199-40a0-bac5-5ed80c87d5c8&
scope=user.read%20openid%20profile%20offline_access&
redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fredirect&
client-request-id=7cb5b09b-4685-4378-b811-54215a027e59&
response_mode=query&
response_type=code&
x-client-SKU=msal.js.node&
x-client-VER=1.0.0&
x-client-OS=win32&
x-client-CPU=x64&
client_info=1&
login_hint=peter.parker@myedge.org


POST /0ba83d3d-0644-4916-98c0-d513e10dc917/login HTTP/1.1
Host: login.microsoftonline.com
Upgrade-Insecure-Requests: 1
Cookie: buid=0.AXoAPT2oC0QGFkmYwNUT4Q3JFyR8damZAaBAusVe2AyH1ch6AAA.AQABAAEAAAD--DLA3VO7QrddgJg7WevrlVUc-JVtKRnE9J6EjIfoetvynjJT45toJ2nWO0vTx1HaASWB5wTilnMuCwN69TPn5rPMBUWxpgbHq67sAcr9ieHcxqRcxrjXpe6eJ3BDNSkgAA; fpc=Au4r39qEH5dNnq4c88KJuKPBq1ExAQAAACsXJ9gOAAAA; esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrL5r6c5l3f-fL161sP1hIkIaxQDsWx_C3KBcfbsLvw8oGb-03_iCNRnSRTR6YFuuNG0aADb3iQzLN67xdHct_7gXmb2k_TbonaxAD1y4J0rj0umQTHqDV0j2dHLPwvvCGJDky-a3QMgHr2GLoQUuO6l_wokYG4JFuBQwS64qpl9EgAA; x-ms-gateway-slice=estsfd; stsservicecookie=estsfd; brcap=0; clrc={%2218754%22%3a[%22VIHMo6PR%22%2c%226ErwfSbM%22]}; wlidperf=FR=L&ST=1620386266910

i13=0&
login=peter.parker%40myedge.org&
loginfmt=peter.parker%40myedge.org&
type=11&
LoginOptions=3&
lrt=&
lrtPartition=&
hisRegion=&
hisScaleUnit=&
passwd=Levis502%21&
ps=2&
psRNGCDefaultType=&
psRNGCEntropy=&
psRNGCSLK=&
canary=mrMUXuyvr%2FDfcjkkLLsyM9ktzkzqhfxrp8hz%2F243Qnw%3D3%3A1&
ctx=rQIIAeNiNdQz0DPQYjbSM7BSSbQ0NzVPNjLRNTC0tNQ1MUg00E1KTDbVNU1NsTBItjBPMU22KBLiEpi9YWtNq1uF8w7BEMUoprrIVYxyGSUlBVb6-jn5yYk5GfnFJVamBgYG-kWpKZlFqcklOxgZLzAyvmBknMQkXpBaklqkV5BYlJ1a5JBbmZqSnqqXX5R-i4nf37G0JMMIROQXZValfmJiLSxNLapcxaxiAAHGuiASQiTDWDCwCagsKdHCOMU4RdfAzMRE18TS0EzX0iLZQDfF1NA41dAgJdnS0PwUs3ppMdABRamJKQr5Bal5mSkKBUX5aZk5qQr5aWk5mXmp8YnJyanFxTeYGS-wML5iEeNgFGCQYFBg0FAxYLbi4OCC8H6wMC5iBQaG6DORc45aGu7bL9j8nXRHheEUq35ukW9oRGllWZG-S1pyVna2j09xpa9ldklVdlVhRlpFUYFFRpW-kYlxYF65rbGV4QQ2xglswqfYeHKLE3P0sor18vJTUj-wMXawM-ziJBCyM7gYD_AyAAA1&hpgrequestid=ce14e615-2a41-4728-b7d0-3cfd92dc2400&flowToken=AQABAAEAAAD--DLA3VO7QrddgJg7WevrZweeWP4q9n7SaBhYMvCHm5S1mdpC2AiSQAvULFncewGGSMFotbx0MyT7qWFXknqvfv9ICi1hukWqB4aW4uWahe2jmptJ35WX6EBLJFwWtiHrkCHNTI9Cbi21dxoI2gdNiUpFpahqOoz2TLJB2S9f7mwoY_z1Wu1v2Ntl9GTWH1XQdAtEYlENvaDuebfbnfd9UQmVxDnuKCiLneCFlYLvRQuPhxGiOVsKGYr9idvFQALaq8Z8-A1-JcfTd99VzCti0OInHGLaA_npdpErIfbINVujR7kJIrmgSZTIxcD_VzBYONINvtw4LrTcQrHus_czraYSJzfiXrbUaQTAUELTz3Kr8sX5oI1_324CvekP9rsIR0wtnRUOLyUHsrz8Nibt199dqhOz-M3ZNmuo2fG3IsY6UWOLYePNbwQbOcEGPQhQa-C3gSKZnXF7uCmg4tkpWgkR7rrOrkUWQ3jEWx8t8j2bRt0D28Msp-ULAyYi8wMExRKPBDr9p8Zj7hwdYnmmIAA&PPSX=&
NewUser=1&
FoundMSAs=&
fspost=0&
i21=0&
CookieDisclosure=0&
IsFidoSupported=1&
isSignupPost=0&
i2=1&
i17=&
i18=&
i19=431033


http://localhost:5000/redirect?
code=0.AXoAPT2oC0QGFkmYwNUT4Q3JFyR8damZAaBAusVe2AyH1ch6AAA.AQABAAIAAAD--DLA3VO7QrddgJg7Wevrb9enRgmpCMI9J9oFmgxn3WolsMTYLnctLWl9M6Y3Bchs6FbqOTDRLBfYcSjOgtdGkpdAWg3Jo3msAfmy-y-mLixPYMdVfLxUbhSwvPOXQ2390CQyzpajpwRagSDRPhHFaMPZF-d5DN4VtyOazdVNQYKtcZJ-PTjd5R8TDM0gsbrVTQDH_G5GKEWRyx8QwupxklhTDsmxEi-euT6eAqptDuMz27gqbRgKfmSq4uZT61uxLFoVmc0po-brv59SAZetEoC1fMWPWW19FRlsqK0g72oFuWbxuuyyOtQRhTzUYVuRQ41B3zC20Yd_Tw5nYhzPYJ7TE66IZTKfH73cp6MFyWvW93HghoJ2Fi0xC1Uxpkz5rF0vDv1VxSCtL4H9uhZ9JAVCCmHyu1SrRWDmD3Z8Eg4A73RFiv4DEZJNH6Lz3KT4vcsNP1-i367GLPkSXwif9ZQ6SwFsjZaV5Uob8OBAkvUqvH2nE7gucXeaBMWklYpXTH7mBeInJ5R_BGnyM2kcKNZIMJj_QnusZS4ukm3PGlCt6Np7TKk8uaZujcXfpNMvWnOZgPZi4Tpo3PSNS16U3URv743pP0rlMTDlCRVpuLq2MHZH-n0GI-CJskV6UnFPpWiY364olFVc6kt9q-J8qMjd-83dqjkEX6pByTt5CiAA&
client_info=eyJ1aWQiOiI3NTkzOTljZi03YmQ4LTQ4ZjctODgyMC1iMGFiMDNkZGJlNWUiLCJ1dGlkIjoiMGJhODNkM2QtMDY0NC00OTE2LTk4YzAtZDUxM2UxMGRjOTE3In0&
session_state=19cca67c-3438-403c-ba14-3a5ed2d8920e#


# Add user authentication to a Node web app with MSAL

This sample Node.js web application uses the Microsoft Authentication Library for Node.js (MSAL Node.js) to sign in users by using the OAuth 2.0 authorization code flow.

You can find additional information about supporting user sign-in in your web apps by using the Microsoft identity platform on docs.microsoft.com: [Scenario: Web app that signs in users](https://docs.microsoft.com/azure/active-directory/develop/scenario-web-app-sign-user-overview?tabs=aspnetcore).

## Prerequisites

- [Node.js](https://nodejs.org/en/)

## Register the application

First, complete the steps in [Register an application with the Microsoft identity platform](https://docs.microsoft.com/azure/active-directory/develop/quickstart-register-app) to register the app.

Use the following settings for your app registration:

- Name: `MSAL Node Sample` (suggested)
- Supported account types: **Accounts in any organizational directory and personal Microsoft accounts**
- Platform type: **Web**
- Redirect URI: `http://localhost:3000/redirect`
- Client secret: `*********` (record this value after creation - it's shown only once)

## Clone the repository

Next, get the files included in this code sample.

SSH:

```bash
$ git clone git@github.com:AzureAD/ms-identity-node.git
```

HTTP:

```bash
$ git clone https://github.com/AzureAD/ms-identity-node.git
```

You can also download the repository by selecting **Download ZIP** from the repository's dropdown menu. You can decompress it locally and explore the code.

## Install the package

To install the MSAL Node package:

```bash
npm install @azure/msal-node
```

If you are customizing MSAL Node or building locally:

```bash
npm run build:package
```

## Configure the sample code

Open the *index.js* file and find the `config` object. Modify the `config` object with values from your [app's registration in the Azure portal](https://docs.microsoft.com/azure/active-directory/develop/quickstart-register-app).

Find your app's registration in the [Azure portal](https://portal.azure.com) and populate the `config` object with the following values:

* `clientId`: **Application (client) ID**
* `authority`: `https://login.microsoftonline.com/common`
* `clientSecret`: `********` (recorded during app registration - see [Prerequisites](#))

You have finished the basic configuration!

> TIP: You can support different account types by specifying other [authority options](https://docs.microsoft.com/azure/active-directory/develop/msal-client-application-configuration). Unless you have a need to restrict users of your app to a single organization, we suggest you use the default authority shown here. User restrictions can be placed later in the application flow if needed.

## Run the sample app

1. From the command line, let npm install any needed dependencies.  This only needs to be done once.

    ```bash
    $ npm install
    ```

1. Once the dependencies are installed, you can run the sample application by using the following command:

    ```bash
    $ npm start
    ```

1. Navigate to http://localhost:3000 (or whatever port number specified) with the browser of your choice.

#### Customize application start

To customize the start script, modify the *package.json* file.

## Add authentication to an existing application

### Import the Configuration Object

If you set up the sample with your app registration, you may be able to copy this object directly into your application.

```js
const config = {
    auth: {
        clientId: "12d77c73-d09d-406a-3asd-3d4e576f7d9b",
        authority: "https://login.microsoftonline.com/common",
        clientSecret: ""
    },
    system: {
        loggerOptions: {
            loggerCallback(loglevel, message, containsPii) {
                console.log(message);
            },
            piiLoggingEnabled: false,
            logLevel: msal.LogLevel.Verbose,
        }
    }
};
```

### Configure Dependencies

Add the dependency on MSAL Node to your Node app.

```js
const msal = require('@azure/msal-node');
```

### Initialize MSAL Node at runtime

Initialize the app object within your web app.

```js
const pca = new msal.ConfidentialClientApplication(config);
```

### Configure sign-in request

Choose the route that requires sign-in. Within that route, set up permissions and direct the MSAL Node app object to attempt sign-in.

In this code sample, the user is immediately signed-in. If you want all users to be logged in before they view anything, then you can use the same process. Add the sign-in code to the default route:

```js
app.get('/', (req, res) => {
```

Next, pick the `scopes` related to the user. If you're logging in a user, you must at minimum request access to basic user information. The default scope of `user.read` grants that basic access. To learn more, see the [Microsoft Graph permissions reference](https://docs.microsoft.com/graph/permissions-reference).

```js
    const authCodeUrlParameters = {
        scopes: ["user.read"],
        redirectUri: "http://localhost:3000/redirect",
    };
```

The `redirectUri` is the return route. After logging in a user, they'll hit this route. Your application logic will take over here. You'll want to customize the `redirectUri` for your application.

Next, direct the user to authenticate. The following code block directs the user based on the `authority` you set in the config and directs the user as needed.

```js
    pca.getAuthCodeUrl(authCodeUrlParameters).then((response) => {
        res.redirect(response);
    }).catch((error) => console.log(JSON.stringify(error)));
```

Putting together the routing and all the logic for starting the sign-in yields the following code:

```js
app.get('/', (req, res) => {
    const authCodeUrlParameters = {
        scopes: ["user.read"],
        redirectUri: "http://localhost:3000/redirect",
    };

    pca.getAuthCodeUrl(authCodeUrlParameters).then((response) => {
        res.redirect(response);
    }).catch((error) => console.log(JSON.stringify(error)));
});
```

### Configure sign-in response

The next step occurs after the redirect. Your application must first *complete* the sign-in flow by processing the code and validating the incoming request.

First, configure the route where your app should receive the response. This must match your app registration's configuration in the Azure portal.

```js
app.get('/redirect', (req, res) => {
```

Next, your app logic validates the scopes and route. The `scopes` must match the request and the `redirectUri` must match the **Redirect URI** you configured in the app registration in the Azure portal, as well the route.

```js
    const tokenRequest = {
        code: req.query.code,
        scopes: ["user.read"],
        redirectUri: "http://localhost:3000/redirect",
    };
```

The above code is the *configuration* for validating the response. The following code *validates* the response and completes the sign-in.

```js
    pca.acquireTokenByCode(tokenRequest).then((response) => {
        console.log("\nResponse: \n:", response);
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.status(500).send(error);
    });
```

Putting together the routing and all the logic for completing the sign-in yields the following code:

```js
app.get('/redirect', (req, res) => {
    const tokenRequest = {
        code: req.query.code,
        scopes: ["user.read"],
        redirectUri: "http://localhost:3000/redirect",
    };

    pca.acquireTokenByCode(tokenRequest).then((response) => {
        console.log("\nResponse: \n:", response);
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.status(500).send(error);
    });
});
```

## The user experience

What happens if the user logs in, closes the window, returns to the site, and logs in again?

Microsoft supports several complex scenarios with several forms of authentication: certificates, hardware keys, federated experiences, and even biometrics in some cases. Let our the Microsoft Authentication Library (MSAL) handle the complexity of deciding the simplest way of logging in the user.

> NOTE: Silent flows are not used with this scenario. See [Authentication flows](https://docs.microsoft.com/azure/active-directory/develop/msal-authentication-flows) for a discussion of the interaction between flows.
