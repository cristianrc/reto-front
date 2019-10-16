export class Genres implements Deserializable {
  id?: number;
  name?: string;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}

export interface Deserializable {
  deserialize(input: any): this;
}