exports.config = {
  tests: './*_tests.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://192.168.227.139',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_test'
  },
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  },
  bootstrap: null,
  mocha: {},
  name: 'RCI_assinaturaDigital'
}