# drinkIT

## Framework7 CLI Options

Framework7 app created with following options:

```
{
  "cwd": "C:\\Users\\Jonathan Maier\\Desktop\\drinkIT",
  "type": [
    "web",
    "pwa",
    "cordova"
  ],
  "name": "drinkIT",
  "pkg": "io.framework7.drinkIT",
  "framework": "core",
  "template": "single-view",
  "bundler": "webpack",
  "cssPreProcessor": false,
  "cordova": {
    "folder": "cordova",
    "platforms": [
      "ios",
      "android"
    ],
    "plugins": [
      "cordova-plugin-statusbar",
      "cordova-plugin-keyboard",
      "cordova-plugin-splashscreen",
      "cordova-plugin-wkwebview-engine"
    ]
  },
  "webpack": {
    "developmentSourceMap": true,
    "productionSourceMap": true,
    "hashAssets": false,
    "preserveAssetsPaths": false,
    "inlineAssets": true
  },
  "theming": {
    "customColor": true,
    "color": "#ff5733",
    "darkTheme": false,
    "iconFonts": true,
    "fillBars": false
  },
  "customBuild": false
}
```

## NPM Scripts

* `npm start` - run development server
* `npm run build-prod` - build web app for production
* `npm run build-dev` - build web app using development mode (faster build without minification and optimization)
* `npm run build-cordova-prod` - build cordova's `www` folder from and build cordova app
* `npm run build-cordova-dev` - build cordova's `www` folder from and build cordova app using development mode (faster build without minification and optimization)
* `npm run build-cordova-ios-prod` - build cordova's `www` folder from and build cordova iOS app
* `npm run build-cordova-ios-dev` - build cordova's `www` folder from and build cordova iOS app using development mode (faster build without minification and optimization)
* `npm run build-cordova-android-prod` - build cordova's `www` folder from and build cordova Android app
* `npm run build-cordova-android-dev` - build cordova's `www` folder from and build cordova Android app using development mode (faster build without minification and optimization)

## WebPack

There is a webpack bundler setup. It compiles and bundles all "front-end" resources. You should work only with files located in `/src` folder. Webpack config located in `build/webpack.config.js`.

Webpack has specific way of handling static assets (CSS files, images, audios). You can learn more about correct way of doing things on [official webpack documentation](https://webpack.js.org/guides/asset-management/).

## PWA

This is a PWA. Don't forget to check what is inside of your `service-worker.js`. It is also recommended that you disable service worker (or enable "Update on reload") in browser dev tools during development.

## Cordova

Cordova project located in `cordova` folder. You shouldn't modify content of `cordova/www` folder. Its content will be correctly generated when you call `npm run cordova-build-prod`.
## Assets

Assets (icons, splash screens) source images located in `assets-src` folder. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:

```
framework7 generate-assets
```

Or launch UI where you will be able to change icons and splash screens:

```
framework7 generate-assets --ui
```

## Documentation & Resources

* [Framework7 Core Documentation](https://framework7.io/docs/)


* [Framework7 Icons Reference](https://framework7.io/icons/)
* [Community Forum](https://forum.framework7.io)

## Support Framework7

Love Framework7? Support project by donating or pledging on patreon:
https://patreon.com/vladimirkharlampidi