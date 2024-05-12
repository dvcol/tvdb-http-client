import type { TvdbCharacter } from '~/models/tvdb-character.model';
import type { TvdbEpisode } from '~/models/tvdb-episode.model';
import type { TvdbMovie } from '~/models/tvdb-movie.model';
import type { TvdbSeries } from '~/models/tvdb-series.model';

export type TvdbNomination = {
  id: number;
  isWinner: boolean;
  details: string;
  year: string;
  category: string;
  name: string;
  character: TvdbCharacter;
  episode: TvdbEpisode;
  movie: TvdbMovie;
  series: TvdbSeries;
};
