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
    "vague-time": "npm:vague-time@1.2.0",
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.0"
    },
    "npm:moment@2.9.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:numeral@1.5.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.1"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:vague-time@1.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

