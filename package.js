Package.describe({
  name: 'jorgenvatle:accounts-discord',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Adds account support for Discord',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/JorgenVatle/meteor-accounts-discord',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.use('ecmascript@0.12.4');
  api.use('accounts-base@1.4.3', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth@1.1.16', ['client', 'server']);
  api.use('jorgenvatle:discord-oauth@1.0.0');
  api.imply('jorgenvatle:discord-oauth');

  api.use(
    ['accounts-ui@1.3.1', 'jorgenvatle:discord-config-ui@0.1.0'],
    ['client', 'server'],
    { weak: true }
  );
  api.addFiles('notice.js');
  api.addFiles('discord.js');
});