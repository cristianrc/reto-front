export class Movie implements Deserializable {
  id?: number;
  title?: string;
  popularity?: number;
  vote_average?: number;
  vote_count?: number;
  poster_path?: string;
  overview?: string;
  original_language?: string;
  release_date?: string;
  genre_ids?: Array<any>;
  genres?: any;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}

export interface Deserializable {
  deserialize(input: any): this;
}