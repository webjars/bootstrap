/*global requirejs */

// Ensure any request for this webjar brings in jQuery.
requirejs.config({
    paths: { "bootstrap": webjars.path("bootstrap", "js/bootstrap") },
    shim: { "bootstrap": [ "jquery", "webjars!jquery.js" ] }
});
