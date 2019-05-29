import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
// Import Cordova APIs
import cordovaApp from './cordova-app.js';
// Import Routes
import routes from './routes.js';

var app = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.drinkIT', // App bundle ID
  name: 'drinkIT', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      // user: {
      //   firstName: 'John',
      //   lastName: 'Doe',
      // },

    };
  },
  // App root methods
  methods: {
    // helloWorld: function () {
    //   app.dialog.alert('Hello World!');
    // },
  },
  // App routes
  routes: routes,


  // Register service worker
  serviceWorker: Framework7.device.cordova ? {} : {
    path: '/service-worker.js',
  },
  // Input settings
  input: {
    scrollIntoViewOnFocus: Framework7.device.cordova && !Framework7.device.electron,
    scrollIntoViewCentered: Framework7.device.cordova && !Framework7.device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    overlay: Framework7.device.cordova && Framework7.device.ios || 'auto',
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
      this.popup.open('#warnhinweis');
      window.addEventListener('load', function () {
        window.history.pushState({
          noBackExitsApp: true
        }, '')
      })

      window.addEventListener('popstate', function (event) {
        if (event.state && event.state.noBackExitsApp) {
          window.history.pushState({
            noBackExitsApp: true
          }, '')
        }
      })

    },
  },
});