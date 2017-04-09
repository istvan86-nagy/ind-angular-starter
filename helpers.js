var path = require('path');

const EVENT = process.env.npm_lifecycle_event || '';

// Helper functions

function hasProcessFlag(flag) {
  return process.argv.join('').indexOf(flag) > -1;
}

function hasNpmFlag(flag) {
  return EVENT.includes(flag);
}

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

function createTsConfigPathAliases(tsConfig) {
  var alias = {};
  var tsPaths = tsConfig.compilerOptions.paths;
  for (var prop in tsPaths) {
    alias[prop] = root(tsPaths[prop][0]);

    console.log('ALIAS: ' + prop + '=' + alias[prop]);
  }

  return alias;
}

exports.hasProcessFlag = hasProcessFlag;
exports.hasNpmFlag = hasNpmFlag;
exports.root = root;
exports.createTsConfigPathAliases = createTsConfigPathAliases;
