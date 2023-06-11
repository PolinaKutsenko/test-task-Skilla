const apiPath = 'https://api.skilla.ru/mango';

export default {
  getListPath: () => [apiPath, 'getList'].join('/'),
  getRecordPath: () => [apiPath, 'getRecord'].join('/'),
  mainPagePath: () => '/',
  callsPagePath: () => '/calls',
};
