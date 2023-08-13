/* global Package */
Package.describe({
    name: 'storyteller:discord-config-ui',
    summary: 'Blaze configuration templates for Discord OAuth.',
    version: '1.0.0',
    git: 'https://github.com/StorytellerCZ/meteor-accounts-discord/'
});

Package.onUse(api => {
    api.versionsFrom('2.3.6')
    api.use('ecmascript', 'client');
    api.use('templating@1.4.2', 'client');
    api.addFiles('discord_login_button.css', 'client');
    api.addFiles(
        ['discord_configure.html', 'discord_configure.js'],
        'client'
    );
});
