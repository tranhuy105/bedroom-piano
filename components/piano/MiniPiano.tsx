"use client";
import { constructChord } from "@/lib/chordconstruct";
import MiniKey from "./MiniKey";

type ChordNote = string;

const MiniPiano = ({
  root,
  type,
}: {
  root: string;
  type: string;
}) => {
  const adjustOctaves = (
    inputArray: ChordNote[]
  ): ChordNote[] => {
    const adjustedArray: ChordNote[] = inputArray.map(
      (chordNote) => {
        const [note, octaveString] =
          chordNote.split(/(\d+)/);
        const octave = parseInt(octaveString, 10);

        // Change the octave from 2 to 1
        const adjustedOctave = octave === 2 ? 1 : octave;

        return `${note}${adjustedOctave}`;
      }
    );

    return adjustedArray;
  };

  const playingNoteBefore = constructChord(
    root,
    type,
    1
  ).map((note) => note.note + note.octave);

  const playingNote = adjustOctaves(playingNoteBefore);

  return (
    <ul className="relative w-full flex items-start justify-center p-2">
      <MiniKey
        color={"white"}
        k={"C1"}
        playingNote={playingNote}
      />
      <MiniKey
        color={"black"}
        k={"Db1"}
        playingNote={playingNote}
      />
      <MiniKey
        color={"white"}
        k={"D1"}
        playingNote={playingNote}
      />
      <MiniKey
        color={"black"}
        k={"Eb1"}
        playingNote={playingNote}
      />
      <MiniKey
        color={"white"}
        k={"E1"}
        playingNote={playingNote}
      />
      <MiniKey
        color={"white"}
        k={"F1"}
        playingNote={playingNote}
      />
      <MiniKey
        color={"black"}
        k={"Gb1"}
        playingNote={playingNote}
      />
      <MiniKey
        color={"white"}
        k={"G1"}
        playingNote={playingNote}
      />
      <MiniKey
        color={"black"}
        k={"Ab1"}
        playingNote={playingNote}
      />
      <MiniKey
        color={"white"}
        k={"A1"}
        playingNote={playingNote}
      />
      <MiniKey
        color={"black"}
        k={"Bb1"}
        playingNote={playingNote}
      />
      <MiniKey
        color={"white"}
        k={"B1"}
        playingNote={playingNote}
      />
      <MiniKey
        color={"white"}
        k={"C2"}
        playingNote={playingNote}
      />
      <MiniKey
        color={"black"}
        k={"Db2"}
        playingNote={playingNote}
      />
      <MiniKey
        color={"white"}
        k={"D2"}
        playingNote={playingNote}
      />
      <MiniKey
        color={"black"}
        k={"Eb2"}
        playingNote={playingNote}
      />
      <MiniKey
        color={"white"}
        k={"E2"}
        playingNote={playingNote}
      />
    </ul>
  );
};
export default MiniPiano;
