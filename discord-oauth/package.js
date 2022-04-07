Package.describe({
    name: 'jorgenvatle:discord-oauth',
    summary: 'Discord OAuth flow',
    version: '1.0.0',
    git: 'https://github.com/Lichthagel/meteor-accounts-discord/tree/master/discord-oauth'
});

Package.onUse(api => {
    api.use('ecmascript@0.12.4', ['client', 'server']);
    api.use('oauth2@1.2.1', ['client', 'server']);
    api.use('oauth@2.1.2', ['client', 'server']);
    api.use('http@1.4.2 || 2.0.0', 'server');
    api.use('random@1.1.0', 'client');
    api.use('service-configuration@1.3.0', ['client', 'server']);

    api.addFiles('discord_client.js', 'client');
    api.addFiles('discord_server.js', 'server');

    api.mainModule('namespace.js');

    api.export('Discord');
});