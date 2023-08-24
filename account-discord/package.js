/* global Package */
Package.describe({
  name: 'storyteller:accounts-discord',
  version: '1.0.1-alpha.11',
  // Brief, one-line summary of the package.
  summary: 'Adds account support for Discord',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/StorytellerCZ/meteor-accounts-discord/',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom(['2.3.6', '2.9.0', '3.0-alpha.11'])
  api.use('ecmascript');
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth', ['client', 'server']);
  api.use('storyteller:discord-oauth@1.0.1-alpha.1');
  api.imply('storyteller:discord-oauth');

  api.use(
    ['accounts-ui', 'storyteller:discord-config-ui@1.0.1-alpha.1'],
    ['client', 'server'],
    { weak: true }
  );
  api.addFiles('notice.js');
  api.addFiles('discord.js');
});
