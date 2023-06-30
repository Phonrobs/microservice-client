import * as msal from "@azure/msal-browser"

export default {
    msalConfig: {
        auth: {
            clientId: "8f6ef38f-bbbe-43a5-b2cc-ac9665549344",
            authority: "https://login.microsoftonline.com/d7cbbb08-47a3-4bd7-8347-5018f2744cfb",
            redirectUri: "http://localhost:8080",
        },
        cache: {
            cacheLocation: "sessionStorage",
            storeAuthStateInCookie: false,
        },
        system: {
            loggerOptions: {
                loggerCallback: (level, message, containsPii) => {
                    if (containsPii) {
                        return;
                    }
                    switch (level) {
                        case msal.LogLevel.Error:
                            console.error(message);
                            return;
                        case msal.LogLevel.Info:
                            console.info(message);
                            return;
                        case msal.LogLevel.Verbose:
                            console.debug(message);
                            return;
                        case msal.LogLevel.Warning:
                            console.warn(message);
                            return;
                    }
                }
            }
        }
    },

    loginRequest: {
        scopes: ["User.Read"]
    },

    tokenRequest: {
        scopes: ["api://1d8cd1b1-7d74-47ac-8c79-dedfafc37a86/access_as_user"],
        forceRefresh: false
    }
}