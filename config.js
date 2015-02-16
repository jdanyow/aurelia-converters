System.config({
  "paths": {
    "*": "*.js",
    "aurelia-converters/*": "dist/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "moment": "npm:moment@2.9.0",
    "numeral": "npm:numeral@1.5.3",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.0"
    },
    "npm:moment@2.9.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:numeral@1.5.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.1"
    }
  }
});

