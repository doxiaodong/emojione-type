interface Emojione {
  (toShort: string): string;
  (shortnameToImage: string): string;
  (unicodeToImage: string): string;
  (toImage: string): string;
}

declare module "emojione" {
    export = emojione;
}

declare var emojione: Emojione;
