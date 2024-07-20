<h1 align="center">@dvcol/tvdb-http-client</h1>
<p>
  <img src="https://img.shields.io/badge/pnpm-%3E%3D9.0.0-blue.svg" />
  <img src="https://img.shields.io/badge/node-%3E%3D20.0.0-blue.svg" />
  <a href="https://paypal.me/dvcol/5" target="_blank">
    <img alt="donate" src="https://img.shields.io/badge/Donate%20€-PayPal-brightgreen.svg" />
  </a>
</p>

> Simple fetch based http client for TVDB API with full typescript support (request and response).

## Prerequisites

- pnpm >=9.0.0
- node >=20.0.0

## Install

```sh
pnpm install
```

## Usage

```sh
pnpm add @dvcol/tvdb-http-client
```

### Modular endpoint bundling

Tvdb-http-client is designed to be modular and flexible. Although it uses static classes, endpoints are instantiated at runtime and can be easily omitted, extended or overridden.
If your bundler does not support tree-shaking, you can omit unused endpoints by only importing the ones you need.

By default we provide a [full api](https://github.com/dvcol/tvdb-http-client/blob/main/lib/api/tvdb-api.endpoints.ts) object with all supported endpoints, as well as a [minimal api](https://github.com/dvcol/tvdb-http-client/blob/main/lib/api/tvdb-minimal-api.endpoints.ts) object with only the essential authentication endpoints.
You can also import any [endpoint by common scope](https://github.com/dvcol/tvdb-http-client/tree/main/lib/api/endpoints).

```ts
import { TvdbClient } from '@dvcol/tvdb-http-client';

import { minimalTvdbApi } from '@dvcol/tvdb-http-client/api/minimal';

import { movies } from '@dvcol/tvdb-http-client/api/movies';
import { series } from '@dvcol/tvdb-http-client/api/series';
import { Config } from '@dvcol/tvdb-http-client/config';

import type { TvdbClientSettings } from '@dvcol/tvdb-http-client/models';

export const api = {
  ...minimalTvdbApi,
  movies,
  series
};

export const settings: TvdbClientSettings = {
  apiKey:'<Your api ID>',
  tokenTTL: Config.tokenTTL,
  endpoint: Config.endpoint,
  version: 'v4',

  useragent: '<Your user Agent>',
  corsProxy: '<Optional cors Proxy>',
  corsPrefix: '<Optional cors Proxy prefix>'
};

const authenticaiton = {}

const client = new TvdbClient(settings, authenticaiton, api);
```

### Features

* [Built-in cache support](https://github.com/dvcol/base-http-client/blob/ed17c369f3cdf93656568373fc2dba841050e427/lib/client/base-client.test.ts#L235-L484) (per client, endpoint, or query)
* [Extensible cache store](https://github.com/dvcol/base-http-client/blob/ed17c369f3cdf93656568373fc2dba841050e427/lib/client/base-client.test.ts#L186-L194) (in-memory, local storage, etc.)
* [Event observer](https://github.com/dvcol/base-http-client/blob/ed17c369f3cdf93656568373fc2dba841050e427/lib/client/base-client.test.ts#L486-L575) (request, query, auth)
* [Built-in cancellation support](https://github.com/dvcol/base-http-client/blob/ed17c369f3cdf93656568373fc2dba841050e427/lib/client/base-client.test.ts#L691-L758)
* [Built-in cors proxy support](https://github.com/dvcol/base-http-client/blob/ed17c369f3cdf93656568373fc2dba841050e427/lib/models/base-client.model.ts#L14)

### Documentation

See [Tvdb API documentation](https://github.com/thetvdb/v4-api) for more information.

## Author

* Github: [@dvcol](https://github.com/dvcol)

## 📝 License

This project is [MIT](https://github.com/dvcol/tvdb-http-client/blob/master/LICENSE) licensed.
