module.exports = {
  require: [
    "node_modules/reflect-metadata/Reflect.js",
    "ts-node/register"
  ],
  mochaHooks: {
    beforeAll: function() {
      require('reflect-metadata');
    }
  },
  exit: true
};
