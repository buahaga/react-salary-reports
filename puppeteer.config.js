module.exports = {
  globalSetup: './test/test_env/setup.js',
  globalTeardown: './test/test_env/teardown.js',
  testEnvironment: './test/test_env/puppeteer_environment.js',
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
};
