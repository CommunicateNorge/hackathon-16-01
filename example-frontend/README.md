# example-frontend

## Before starting
Install [Node.JS](https://nodejs.org/en/download/) if you do not already have it
- This can be checked by opening a CMD tool and running "npm --version"

If you are using Visual Studio code (highly recommended), install these extensions:
- Vue Language Features (Volar)
- TypeScript Vue Plugin (Volar)

This will give you intellisense for Vue files

## Running the project
Before the first time you run the project, make sure to run this command from the folder where you have the "package.json" file:
```
npm install
```
This is only necessary the first time you run the project, or if you reset your packages
Then, from the same folder, run this command:

```
npm run serve
```

## Resetting your packages
Some errors are caused by problems with package downloads and versions. The easiest way to fix this is by deleting the "node-modules" folder, as well as the "package-lock.json" file.
After these files have been deleted, run this command from the folder where "package.json" exists again:
```
npm install
```
Now your packages should be ok, or if not, you should at least get a more accurate error message

## Other

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Vue file structure
A Vue file contains all the parts needed to render out a component. A component can be anything from the entire website Vue down to a small button or visual icon.

In this project, we have also set up the project to use the "class structure" for the logic part of the code, which means that the syntax is a lot more similar to other languages, like C# or Angular.

A Vue file consists of 3 sections, indicated by html tags. These sections are "template", "script" and "style".

## Template
This is where your HTML code lives. It is important that the template tag has ONLY 1 root tag. That means you need to make a new tag (i.e. a div) and have all your HTML within that tag.

## Script
This is where your TypeScript (logic) lives. The script tag should ALWAYS have the property lang="ts", to indicate that the code is written in typescript. If not, you can encounter issues when compiling the code.

## Style
This is where your CSS classes live. 