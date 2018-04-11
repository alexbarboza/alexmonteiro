// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBZDRQiPTlVf6tovI2kjmcWAL8jZXESVgo",
    authDomain: "alexmonteiro-com-br.firebaseapp.com",
    databaseURL: "https://alexmonteiro-com-br.firebaseio.com",
    projectId: "alexmonteiro-com-br",
    storageBucket: "alexmonteiro-com-br.appspot.com",
    messagingSenderId: "311216067404"
  }
};
