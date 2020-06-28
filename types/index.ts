// TODO will be used somehow
export type AssetsSourcesType = {
  [key in CardDeckName]: AssetsSources;
};

export type RedAssetsSources = {
  [key in RedCardName]: number;
};

export type OrangeAssetsSources = {
  [key in OrangeCardName]: number;
};

export type GreenAssetsSources = {
  [key in GreenCardName]: number;
};

export type AssetsSources = {
  [key in CardName]?: number;
};

export type AssetsSources2 =
  | RedAssetsSources
  | OrangeAssetsSources
  | GreenAssetsSources;

export type AssetsSources3 =
  | {
      [key in RedCardName]: number;
    }
  | {
      [key in OrangeCardName]: number;
    }
  | {
      [key in GreenCardName]: number;
    };

export type SelectedCards = {
  [key in CardDeckName]: CardName | '';
};

export type RedCardName =
  | 'abandonment'
  | 'anger'
  | 'disgust'
  | 'doubt'
  | 'threat'
  | 'fear'
  | 'sadness'
  | 'violence'
  | 'joker-red';

export type OrangeCardName =
  | 'action'
  | 'courage'
  | 'movement'
  | 'patience'
  | 'preparation'
  | 'prevention'
  | 'protection'
  | 'unity'
  | 'joker-orange';

export type GreenCardName =
  | 'love'
  | 'calm'
  | 'confidence'
  | 'energy'
  | 'self-esteem'
  | 'strength'
  | 'joy'
  | 'peace'
  | 'joker-green';

export type CardName = RedCardName | OrangeCardName | GreenCardName;

export type CardDeckName = 'red' | 'orange' | 'green';
