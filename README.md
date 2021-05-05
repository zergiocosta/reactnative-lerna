# React Native - Lerna

This is a POC for handling a multi-module React Native project with Lerna. The main goal is to work better and fast with multiple squads

> **IMPORTANT:** It was built on top of expo in order to speed up this POC development

## [Requirements](#requirements)

To fully run the project on both iOS and Android you must have the following installed:

- [Expo](https://docs.expo.io/get-started/installation/)
- [Yarn](https://yarnpkg.com/getting-started/install)
- [Xcode](https://apps.apple.com/br/app/xcode/id497799835)
- [CocoaPods](https://cocoapods.org/)
- [Android Studio](https://developer.android.com/studio)
- [NodeJS](https://nodejs.org/en/download/)
- [Watchman](https://facebook.github.io/watchman/docs/install.html)

It is extremely recomended that you take a look at the [React Native's official docs](https://reactnative.dev/docs/environment-setup) in the `Setting up the development environment` section.

React Native's `geting started` guide can be found [here](https://reactnative.dev/docs/getting-started/).


## [First steps](#init)

The first step is to clone the repo from GitHub:

- **Clone it**: `$ git clone https://github.com/zergiocosta/reactnative-lerna`
- **cd into it:** `$ cd reactnative-lerna`

Now it's time to install the dependencies:

- **Installing dependencies**: `$ yarn`

Everything setup. Enjoy!

## [Running](#runnning)

In project folder terminal with emulator or real device plugged, just run:

```sh
# Runs expo web client
$ yarn start

# Runs on iOS
$ yarn ios

# Runs on Android
$ yarn android
```

## [Project sctructure](#project-structure)

```
.
│── App.js
└── src/
    ├── app1/
    │   │── components.js
    │   │── index.js
    │   └── package.json
    ├── app2/
    │   │── components.js
    │   │── index.js
    │   └── package.json
    ├── navigation/
    │   │── index.js
    │   └── package.json
    └── shared/
        │── index.js
        └── package.json
```

- `.App.js` is the shell module which imports the main navigator module and starts the app;
- `.src/` folder is where the modules are;
- `.src/navigation/index.js` is the main navigator module that navigate between the other modules;
- `.src/app1/index.js` and `.src/app2/index.js` handles the independent navigator for their own modules;
- `.src/app1/components.js` and `.src/app2/components.js` are pure components to visually show the navigation.
- `.src/shared/` folder is where the shared components and utils are