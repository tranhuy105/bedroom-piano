// type Bar = {
//   id: string;
//   chord1?: ChordType;
//   chord2?: ChordType;
//   chord3?: ChordType;
//   chord4?: ChordType;
// };

type BarsType = BarType[];

type BarType = {
  id: string;
  // barsId?: string;
  chords: ChordType[];
};

type ChordType = {
  id?: string;
  chordId: number;
  barId?: string;
  root: string;
  base: string;
  typeOfChord: string;
};

type PlayingChord = {
  id: string;
  root: string;
  chordId: number;
  typeOfChord: string;
  parent: string;
} | null;
