#!/usr/bin/env node
"use strict";

const path = require('path');
const paskageJson = require(path.resolve(process.cwd(), './package.json'));

const exec = require('child_process').exec;
(paskageJson.linkDependencies ? Object.keys(paskageJson.linkDependencies) : []).forEach(function(link) {
  exec('npm link ' + link, function (error, stdout, stderr) {
    console.log(stdout);
    if (error !== null) {
      console.error(stderr);
    }
  });
});
