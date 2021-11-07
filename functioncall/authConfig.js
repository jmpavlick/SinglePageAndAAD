// Config object to be passed to Msal on creation.
// For a full list of msal.js configuration parameters, 
// visit https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md

const msalConfig = {
    auth: {

        // Replace with your app/client ID on AAD Portal.
        clientId: "181592f0-ff49-4d77-b317-717ef9dc94c7`",

        // Replace with "https://login.microsoftonline.com/common/" 
        // Note: This is for multi-tenant applications located on the global Azure cloud. 
        // For more information, see the documentation 
        // https://docs.microsoft.com/azure/active-directory/develop/quickstart-v2-javascript-auth-code.
        authority: "https://login.microsoftonline.com/61f0b886-8759-40ba-9987-299b74240718",
        
        // Replace with the redirect uri you setup on AAD Portal.
        // example redirectUri: "https://core.jannehansen.com/spa/plainlogin"
        redirectUri: "https://brave-bush-0fa615610.azurestaticapps.net/functioncall"

    },
    cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                console.log(message);	
            }
        }
    }
};

// Add here the scopes that you would like the user to consent during sign-in
const loginRequest = {
    scopes: ["User.Read"]
};
