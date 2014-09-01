Derby Locale Browser
====================

A [derby-locale](https://github.com/psirenny/derby-locale) strategy that selects locales from the browser's `Accept-Language` request header.

[![Build Status](https://travis-ci.org/psirenny/derby-locale-browser.png?branch=master)](https://travis-ci.org/psirenny/derby-locale-browser)

Installation
------------

    $ npm install derby-locale-browser --save

Usage
-----

In your server file, add the middleware *before* derby-locale:

    var localeBrowser = require('derby-locale-browser');

    expressApp
      // ...
      // ...
      .use(localeBrowser())
      .use(locale())

Options
-------

**name** – The name of the strategy. Defaults to `browser`.

**order** – The order of the strategy. Blank by default.

**path** – The path to the locale object. Defaults to ``$locale`.
