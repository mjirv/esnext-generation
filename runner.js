#!/usr/bin/env node
'use strict';

var packageJson = require('./package.json'),
    adventure = require('adventure');

var shop = adventure(packageJson.name),
    lesson;

[
  'traditional-looping'
].forEach(function(lesson, index) {

  lesson = require('./' + lesson);

  shop.add((index + 1) + '. ' + lesson.title, function() {
    return lesson.problem
  });
})

shop.execute(process.argv.slice(2));