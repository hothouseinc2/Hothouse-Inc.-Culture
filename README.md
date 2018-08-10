# Hothouse Inc Culture Site

Made with [GatsbyJS](https://www.gatsbyjs.org/) + [Netlify](https://www.netlify.com/) + [NetlifyCMS](https://www.netlifycms.org/)

This project uses the following starter:
[Gatsby + Tailwind Starter](https://github.com/taylorbryant/gatsby-starter-tailwind)

## What is GatsbyJS?

GatsbyJS is a static-site generator that you write in React. It generates static HTML and then progressively loads React in the background.

So if Javascript is disabled, the site still loads and functions as a static site. Of course, functionality that is Javascript specific (the Carousel and the Benefit tiles) will not work.

Please don't use this README as a "tell-all" for everything about GatsbyJS. Instead, you should read the [documentation](https://www.gatsbyjs.org/docs/).

### Why did we use GatsbyJS?

Why not?

I wanted to use use this static-site generator because of it has a bunch of optimizations that makes performance easier. Plus, the developer experience is nicer as it has a bunch of modern tools setup in the background (code-splitting, webpack, ES6, etc) without you having to manage it. Any additions like SASS, Google Analytics, and etc can be added on as a [plugin](https://www.gatsbyjs.org/plugins/).

## Getting started

Install Gatsby CLI:

```sh
npm install --global gatsby-cli
```

Install NVM:
Follow this [link](https://github.com/creationix/nvm) to install it. NVM is a "nice-to-have" for any Node project. Check out [AVN](https://github.com/wbyoung/avn) as well to have your local setup switch automatically to the correct version of node whenever there is a `.nvmrc` file with the project's node version.

Once you're in the project directory:

If you have NVM, not needed if you also installed AVM:
```sh
nvm use
```

Then...

```sh
npm install
```

The following two commands are important. The above GatsbyJS CLI ships with a custom `gatsby develop / gatsby build` command. Since we are processing TailwindCSS (more info later), we have a custom start/build script below. Take a look at the `package.json` and the `build` + `develop` commands.

Starting the Project (locally):

```sh
npm run develop
```

Building the Project (you don't need to do this as Netlify does this on their platform whenever you push to their repo or make an edit in the CMS):

```sh
npm run build
```

## Deploy

_ANY_ and _EVERY_ push to the `master` branch is live. Any edit in the CMS also pushes changes (in the form of markdown files) to the `master` branch in this [**Github** repository](https://github.com/hothouseinc2/Hothouse-Inc.-Culture).

Markdown files in the `/src/sections` path are essentially a basic "database" for the site. You can edit the content by editing the files and pushing them up to the `master` or editing them in the CMS which in turn pushes edits to the repository via webhooks.

Whenever you work on the project, make sure you have pulled the latest `master` even if you haven't edited the site. Any change from the CMS needs to be pulled down as well. This is a static-site. Everything is connected to a file.

The repository is under Hothouse's developer account (`hothouseinc2`). Check the #tech channel for login details. It should be pinned to the top of the channel.

## GraphQL

GraphQL is an alternative to the typical REST API architecture. Instead of connecting to multiple endpoints and traversing lots of nodes until you find the right data you need, you can think of GraphQL as one endpoint where you specify what you need and only get what you specify.

This is found on the bottom of the `index.js` in `/src/pages/`
```jsx

export const layoutQuery = graphql`
  query layoutQuery {
    allImageSharp {
      edges {
        node {
          id
          sizes {
            srcWebp
            srcSet
            srcSetWebp
            originalName
            src
          }
        }
      }
    }
  }
`
```

Here we are grabbing the data generated from GatsbyJS plugin that gives you alternate image files you use in your project.

## Netlify
Netlify is where the site is hosted.

It's a static-site host that lets you host your site for free. It has some paid team plans and some paid features, but you should never need to use any of them.

Netlify let's you use production/branch deploys. Currently, the `master` branch is treated as the "production" branch. Any push here is live. Any push to a separate branch also generates "preview" link in the Netlify dashboard, letting you have multiple links for distinct features/branches of your site's build.

At the time of writing this, no domain has been added to the site. You can do this from the dashboard from `Site Settings -> Domain Management`.

Interesting things to note about Netlify is the ability to add Lambda functions from their interface, add users to the CMS (important for creating accounts), and split testing based on `git` branches.

Netlify login was under `bmodayil`'s hothouse account. Should be found pinned in the tech channel.


## Netlify CMS

Netlify CMS is an open-sourced CMS. It does not need to be used with Netlify, but it works perfectly with this workflow. If you look at the `package.json` file, you'll noticed that the CMS is locked into a specific version. There is a bug on their end that makes it incompatible with GatsbyJS in newer versions. Hopefully, this gets fixed soon, but for now, keep the locked in version.

### Netlify CMS Users

_Important for any future Netlify projects that have users:_
Make sure you have `git-gateway` enabled under the `services` section in your settings.

1.  Sign up on the site path `/admin` 📔
2.  Approve User (or invite user) in Netlify Identity tab 🆔
3.  User should be able to Login ✅

- Current issue is that when a user logs into the CMS, it does not redirect, but displays a "You're logged in" state. Just refresh the page and you're in.

Need to figure out who posted something on the site that they shouldn't have? Check your `git` history. Whenever an edit is made to the site, you can see who did it via `.git`

![User commit](https://i.imgur.com/4Hz0t0d.png)

### Creating new content/sections for your CMS
There is an issue where an initial post/section needs to be created locally. You'll get a weird error when trying to create an initial post via the CMS dashboard.

**Solution:** create an example post/page/etc in `.yml` based on your `/static/admin/config.yml` collection. 
- ex: after writing out the collection schema in your `config.yml` file then create the initial file corresponding to the paths/details you setup in your `config.yml` like so `/src/sections/benefits/our-agency-culture-is.md`. You don't need to write out this much of the content, but you should have something for each input. Again, this hopefully gets solved soon and you don't need to add an initial file at the start of this process.


## TailwindCSS
The CSS/classnames for this site are being generated via the `tailwind.config.js` file in the project base's directory.

[TailwindCSS](https://tailwindcss.com/) is a utility-class framework.

It approaches a bootstrap-naming convention, but doesn't dictate HOW things are to look like bootstrap does. Essentially, the config file gives you the vocabulary needed to dictate how something should look. It doesn't tell how something looks at the outset. The config file also allows you to generate new classes, responsive variants, and etc. that you might need for the project.

There is also a CSS file for the more manual edits that can't be solved by a utility-css framework.
_ex: CSS gradients, custom positionings, and etc._

## Resources

- [Gatsby documentation](https://www.gatsbyjs.org/docs/)
- [Tailwind documentation](https://tailwindcss.com/docs/what-is-tailwind/)

## Analytics

Looks to add Google Analytics or Google Tag Manager?
Check out [this link](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/?=google)

Please don't just inject a script at the top.

Check the site's speed again [here](https://developers.google.com/speed/pagespeed/insights/) to make sure you're caching the analytics file properly and not changing the site's speed dramatically.

## License

Something about all rights to HothouseInc. Do not steal. Please.