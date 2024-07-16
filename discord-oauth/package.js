/* global Package */
Package.describe({
    name: 'storyteller:discord-oauth',
    summary: 'Discord OAuth flow',
    version: '1.0.1',
    git: 'https://github.com/StorytellerCZ/meteor-accounts-discord/'
});

Package.onUse(api => {
    api.versionsFrom(['2.9.0', '3.0']);
    api.use('ecmascript', ['client', 'server']);
    api.use('oauth2', ['client', 'server']);
    api.use('oauth', ['client', 'server']);
    api.use(['fetch', 'url'], 'server');
    api.use('random', 'client');
    api.use('service-configuration', ['client', 'server']);

    api.addFiles('discord_client.js', 'client');
    api.addFiles('discord_server.js', 'server');

    api.mainModule('namespace.js');

    api.export('Discord');
});
