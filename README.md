# Hothouse Inc Culture Site

Made with [GatsbyJS](https://www.gatsbyjs.org/) + [Netlify](https://www.netlify.com/) + [NetlifyCMS](https://www.netlifycms.org/)

This project uses the following starter:
[Gatsby + Tailwind Starter](https://github.com/taylorbryant/gatsby-starter-tailwind)

## Getting started

Install Gatsby CLI:

```sh
npm install --global gatsby-cli
```

Install NVM:
Follow this [link](https://github.com/creationix/nvm) to install it. NVM is important for any Node project. Check out [AVN](https://github.com/wbyoung/avn) as well to have your local setup switch automatically to the correct version whenever there is a `.nvmrc` file with the project's node version.

Once you're in the project directory:

```sh
npm install
```

The following two commands are important. The above GatsbyJS CLI ships with a custom `gatsby develop / gatsby build` command. Since we are processing TailwindCSS, we have a custom start/build script below. Take a look at the `package.json` and the `build` + `develop` commands.

Starting the Project (locally):

```sh
npm run develop
```

Building the Project:

```sh
npm run build
```

## Deploy

_ANY_ and _EVERY_ push to the `master` branch is live. Any edit in the CMS also pushes changes (in the form of markdown files) to the `master` branch.

Whenever you work on the project, make sure you have pulled the latest `master` even if you haven't edited the site. Any change from the CMS needs to be pulled down as well. This is a static-site. Everything is connected to a file.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/taylorbryant/gatsby-starter-tailwind)

## GraphQL

## Netlify

## Netlify CMS

## Netlify CMS Users

_note on git gateway being enabled in your Netlify settings_

1.  Sign up on the site `/admin`
2.  Approve User in Netlify Identity tab
3.  User should be able to Login

- Current issue is that when a user logs into the site, it does not redirect, but displays a "You're logged in" state. Just refresh the page and you're in.

- issue where initial post needs to be created locally. ex: create an example post/page/etc in yaml. Weird error that happens when creating it initially from the dashboard.

![Netlify Identity User commit](https://i.imgur.com/4Hz0t0d.png)

## Resources

- [Gatsby documentation](https://www.gatsbyjs.org/docs/)
- [Tailwind documentation](https://tailwindcss.com/docs/what-is-tailwind/)

## License

[MIT](https://github.com/taylorbryant/gatsby-starter-tailwind/blob/master/LICENSE.md)

## Analytics

Looks to add Google Analytics or Google Tag Manager?
Check out [this link](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/?=google)

Please don't just inject a script at the top.

Check your speed [here](https://developers.google.com/speed/pagespeed/insights/) to make sure you're caching the analytics file properly and not changing the site's speed dramatically.
