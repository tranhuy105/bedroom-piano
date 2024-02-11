type Chord = string;
type TypeOfAChord = string;

interface ChordNote {
  note: Chord;
  octave: number;
}

const availableChord: Chord[] = [
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
];
const availableType: TypeOfAChord[] = [
  "major",
  "minor",
  "Δ7",
  "m7",
  "7",
  "sus4",
  "dim",
  "dim7",
  "9th",
  "13th",
];

export const constructChord = (
  chord: Chord,
  type: TypeOfAChord,
  octave: number = 3
): ChordNote[] => {
  if (!chord || !type) {
    return [];
  }

  const index = availableChord.indexOf(chord);
  const intervalMap: Record<TypeOfAChord, number[]> = {
    major: [0, 4, 7],
    minor: [0, 3, 7],
    Δ7: [0, 4, 7, 11],
    m7: [0, 3, 7, 10],
    "7": [0, 4, 7, 10],
    sus4: [0, 5, 7],
    dim: [0, 3, 6],
    dim7: [0, 3, 6, 9],
    "9th": [0, 4, 7, 10, 14],
    "13th": [0, 4, 7, 10, 14, 21],
  };

  const intervals = intervalMap[type];
  if (intervals) {
    return intervals.map((interval) => {
      const noteIndex = (index + interval) % 12;
      const note: Chord = availableChord[noteIndex];
      const adjustedOctave =
        octave + Math.floor((index + interval) / 12);
      return { note, octave: adjustedOctave };
    });
  } else {
    throw new Error("Invalid chord type");
  }
};
