import type { TvdbCharacter } from '~/models/tvdb-character.model';
import type { TvdbCompany } from '~/models/tvdb-company.model';
import type { Entity, EntityTypes, Extended, Short, TvdbRemoteId, TvdbTagOption } from '~/models/tvdb-entity.model';
import type { TvdbNomination } from '~/models/tvdb-nomination.model';
import type { TvdbRating } from '~/models/tvdb-rating.model';
import type { TvdbSeason } from '~/models/tvdb-season.model';
import type { TvdbTrailer } from '~/models/tvdb-trailer.model';
import type { TvdbTranslation } from '~/models/tvdb-translation.model';

export type TvdbEpisodeShort = {
  id: number;
  name: string;
  number: number;
  overview?: string;
  runtime: number;
  year?: string;
  aired: string;
  airsAfterSeason?: number;
  airsBeforeEpisode?: number;
  airsBeforeSeason?: number;
  lastUpdated: string;
  finaleType: string;
  image: string;
  imageType: number;
  isMovie: number;
  linkedMovie?: number;
  seriesId: number;
  seasonNumber: number;
  seasonName?: string;
  seasons?: TvdbSeason[];
  nameTranslations: string[];
  overviewTranslations?: string[];
};

export type TvdbEpisodeExtended = TvdbEpisodeShort & {
  awards: Entity[];
  characters: TvdbCharacter[];
  companies: TvdbCompany[];
  contentRatings: TvdbRating[];
  networks: TvdbCompany[];
  nominations: TvdbNomination[];
  productionCode: string;
  remoteIds: TvdbRemoteId[];
  seasons: TvdbSeason[];
  studios: TvdbCompany[];
  tagOptions: TvdbTagOption[];
  trailers: TvdbTrailer[];
  translations: {
    nameTranslations: TvdbTranslation[];
    overviewTranslations: TvdbTranslation[];
    alias: string[];
  };
};

export type TvdbEpisode<T extends EntityTypes = Short> = T extends Short
  ? TvdbEpisodeShort
  : T extends Extended
    ? TvdbEpisodeExtended
    : TvdbEpisodeShort | TvdbEpisodeExtended;
