# Visit Card Generator

Author: Floris VALETUDIE
Date: 2021-02-10

## How to launch the project

### Clone the repository
```
git clone git@github.com:FValetudie/visit-card-generator.git
```

### Launch Visit Card Generator
```
cd visit-card-generator
yarn install
yarn dev
```

### Test it
Go to http://localhost:3000

To create a visit card, you'll need to type in your information in the settings tab.

The settings also include ways to save a visit card, or load a previously save one.

Finally, the "Share" button will allow to to share the visit card.

## Improvements

### URL shortener for sharing
First improvement I would like to implement would be a prettier share URL.
To do that, some URL shortener provide APIs to automatically create a short link.
My choice would probably be google's [Firebase Dynamic Link](https://firebase.google.com/docs/dynamic-links/rest) which provides a rich API and monitoring.

## Other ideas
I would also like to finish my failed attempt to have an automatic save of the current visit card

## What I would do differently is I started over

## Libraries and shortcuts

### classnames
I use this library to simplify the use of classs for my styles. Used with nextJS's style, it allows to activate or deactivate a class easily.

### material icons
Typical icon library

### react-color
NPM package (react-color)[https://github.com/casesandberg/react-color] is an easy way to add a color picker to a project.

### localStorage
Browser API allowing to save data directly on the browser and retrieve it.
It is used to save the visit cards.
