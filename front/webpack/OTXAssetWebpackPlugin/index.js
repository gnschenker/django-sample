// OTXAssetWebpackPlugin.js

var fs = require('fs');
var _ = require('lodash');
var path = require('path');

function OTXAssetWebpackPlugin(options) {
  // Default options
  this.options = _.extend({
    template: false,
    filename: false,
    path: false,
    replace: []
  }, options);
}

OTXAssetWebpackPlugin.prototype.apply = function(compiler) {
  var self = this;

  compiler.plugin('emit', function(compilation, callback) {
    Object.keys(self.options.replace).forEach(function (obj) {
      if ( self.options.replace[obj].indexOf('[hash]') >= 0 ) {
        self.options.replace[obj] = self.options.replace[obj].replace('[hash]', compilation.hash);
      }
    });

    if ( !isPathAbsolute(self.options.template) ) {
      self.options.template = path.resolve(compiler.context, self.options.template);
    }

    fs.readFile( self.options.template, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }

      Object.keys(self.options.replace).forEach(function (obj) {
        if ( data.indexOf(obj) >= 0 ) {
          data = data.replace( obj, self.options.replace[obj]);
        }
      });

      if ( !isPathAbsolute(self.options.path) ) {
        self.options.path = path.resolve(compiler.context, self.options.path);
      }

      checkDirectory(self.options.path, function(error) {
        if(error) {
          console.log(error);
        } else {
          fs.writeFile(self.options.path + '/' + self.options.filename, data, function(err) {
            if(err) {
              return console.log(err);
            }
          });
        }
      });

    });

    callback();
  });
};

function isPathAbsolute(path) {
  return /^(?:\/|[a-z]+:\/\/)/.test(path);
}

function checkDirectory(directory, callback) {
  fs.mkdir(directory, function(err) {
    if(err && err.code != 'EEXIST') {
      console.log(err);
    }
    callback();
  });
}

module.exports = OTXAssetWebpackPlugin;