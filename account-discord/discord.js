import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

Accounts.oauth.registerService('discord');

if (Meteor.isClient) {
    const loginWithDiscord = (options, callback) => {
        // support a callback without options
        if (!callback && typeof options === "function") {
            callback = options;
            options = null;
        }

        const credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
        Discord.requestCredential(options, credentialRequestCompleteCallback);
    };

    Accounts.registerClientLoginFunction('discord', loginWithDiscord);
    Meteor.loginWithDiscord = (...args) => Accounts.applyLoginFunction('discord', args);
} else {
    Accounts.addAutopublishFields({
        forLoggedInUser: ['services.discord'],
        forOtherUsers: ['services.discord.username']
    });
}
