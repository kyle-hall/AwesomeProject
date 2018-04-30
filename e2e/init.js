const detox = require('detox');
const config = require('../package.json').detox;

// Set the default test timeout of 120s
jest.setTimeout(120000);

if (process.argv[2].includes('e2e')) {
  beforeAll(async () => {
    await detox.init(config);
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  afterAll(async () => {
    await detox.cleanup();
  });
}
