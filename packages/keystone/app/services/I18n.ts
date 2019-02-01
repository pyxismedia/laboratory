export enum Code {
  en,
  de,
  fr,
}

export enum Language {
  en = 'English',
  de = 'German',
  fr = 'French',
}

export class I18n {
  public static LANGUAGES = [
    { value: Code.en, label: Language.en },
    { value: Code.de, label: Language.de },
    { value: Code.fr, label: Language.fr },
  ];
}