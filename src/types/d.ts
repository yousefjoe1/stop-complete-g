export type Inputs = {
  name: string;
  email: string;
  password: string;
  phone: string
};

export interface Group {
  name: string;
  adminPlayer: string;
  _id: string;
}

export interface Answers  {
  _id: string;
  character:string;
  prophet: string;
  companionMale: string;
  companionFemale: string;
  surah: string;
  ayah: string;
  ghazwa: string;
  playerName: string;
};