import Discord from './namespace.js';
import { Random } from 'meteor/random';
import { ServiceConfiguration } from 'meteor/service-configuration';
import { OAuth } from 'meteor/oauth';

Discord.requestCredential = (options, credentialRequestCompleteCallback) => {
    if (!credentialRequestCompleteCallback && typeof options === 'function') {
        credentialRequestCompleteCallback = options;
        options = {};
    } else if (!options) {
        options = {};
    }

    const config = ServiceConfiguration.configurations.findOne({service: 'discord'});
    if (!config) {
        credentialRequestCompleteCallback && credentialRequestCompleteCallback(new ServiceConfiguration.ConfigError());
        return;
    }

    const credentialToken = Random.secret();

    const scope = (options?.requestPermissions) || ['identify', 'email'];
    const flatScope = scope.map(encodeURIComponent).join('+');

    const loginStyle = OAuth._loginStyle('discord', config, options);

    const loginUrl =
        'https://discord.com/api/oauth2/authorize' +
        '?client_id=' + config.clientId +
        '&response_type=code' +
        '&scope=' + flatScope +
        '&redirect_uri=' + OAuth._redirectUri('discord', config) +
        '&state=' + OAuth._stateParam(loginStyle, credentialToken, options?.redirectUrl);

    OAuth.launchLogin({
        loginService: 'discord',
        loginStyle,
        loginUrl,
        credentialRequestCompleteCallback,
        credentialToken,
        popupOptions: {width: 500, height: 750}
    });
};
