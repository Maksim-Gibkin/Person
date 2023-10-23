export type Attributes = {
  [key: string]: number;
};
export type Indicator = {
  [key: string]: number;
};
export type Skill = {
  value: number;
  name: string;
  view: string;
  branch: string;
  id: number;
};

export enum IndicatorsFields {
  strength = "Сила",
  agility = "Ловкость",
  intelligence = "Интелект",
  charisma = "Харизма",
}

export enum IndicatorsFields {
  lifeForce = "Жизненная сила",
  evasion = "Уклонение",
  energy = "Энергичность",
}
