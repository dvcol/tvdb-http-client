import type { TvdbClientSettings } from '~/models/tvdb-client.model';

import { Config } from '~/config';

export const tvdbClientSettings: TvdbClientSettings = {
  tokenTTL: Config.tokenTTL,
  endpoint: Config.endpoint,

  apiKey: 'my-api-key',
  version: 'v4',

  useragent: 'my-user-agent',
};
