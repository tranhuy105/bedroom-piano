import { X } from "lucide-react";
import Beat from "./Beat";
import { DeleteBar } from "@/actions/delete-bar";
import { setChord } from "@/actions/set-chord";

interface BarProps {
  bar: BarType;
  bars: BarType[];
  setBars: any;
  isLoading: boolean;
  setIsLoading: any;
  currentlyPlayingChord?: ChordType;
}

const Bar = ({
  bar,
  setBars,
  bars,
  isLoading,
  setIsLoading,
  currentlyPlayingChord,
}: BarProps) => {
  // Find the next Chord in all bar

  const handleDeleteBar = async (id: string) => {
    // console.log(id);
    setIsLoading(true);
    const deletedBar = await DeleteBar(id);
    setIsLoading(false);
    setBars((current: BarType[]) =>
      current.filter((b) => b.id !== deletedBar.id)
    );
  };

  const findChordInBarBasedOnChordId = (
    chordId: 1 | 2 | 3 | 4
  ) => {
    const foundChord = bar.chords.find(
      (chord) => chord.chordId === chordId
    );

    if (foundChord) return foundChord;
    else
      return {
        chordId: chordId,
        root: "",
        typeOfChord: "",
        base: "",
      };
  };

  const handleSetChord = async (
    barid: string,
    chordnumber: 1 | 2 | 3 | 4,
    newRoot: string,
    newTypeOfChord: string,
    base: string
  ) => {
    // Find the index of the bar with the specified barid
    setIsLoading(true);
    const newChord = await setChord(
      barid,
      chordnumber,
      newRoot,
      newTypeOfChord,
      base
    );
    setIsLoading(false);

    const barIndex = bars.findIndex(
      (bar: BarType) => bar.id === barid
    );

    if (barIndex !== -1) {
      const chordIndex = bars[barIndex].chords.findIndex(
        (chord) => chord.chordId === chordnumber
      );

      if (chordIndex !== -1) {
        const updatedBars = [...bars];
        updatedBars[barIndex].chords[chordIndex] = newChord;
        setBars(updatedBars);
      }
    }
  };

  return (
    <div className="h-28 w-[70%] mx-auto flex gap-1 relative">
      <button
        className="absolute right-0 text-red-500 opacity-20 hover:opacity-100 hover:scale-105 transition duration-500 cursor-pointer disabled:cursor-progress"
        onClick={() => handleDeleteBar(bar.id)}
        disabled={isLoading}
      >
        <X />
      </button>
      <Beat
        chord={findChordInBarBasedOnChordId(1)}
        barid={bar.id}
        handleSetChord={handleSetChord}
        currentlyPlayingChord={currentlyPlayingChord}
        isLoading={isLoading}
      />
      <Beat
        chord={findChordInBarBasedOnChordId(2)}
        barid={bar.id}
        handleSetChord={handleSetChord}
        currentlyPlayingChord={currentlyPlayingChord}
        isLoading={isLoading}
      />
      <Beat
        chord={findChordInBarBasedOnChordId(3)}
        barid={bar.id}
        handleSetChord={handleSetChord}
        currentlyPlayingChord={currentlyPlayingChord}
        isLoading={isLoading}
      />
      <Beat
        chord={findChordInBarBasedOnChordId(4)}
        barid={bar.id}
        handleSetChord={handleSetChord}
        currentlyPlayingChord={currentlyPlayingChord}
        isLoading={isLoading}
      />

      {/* {bar.id} */}
    </div>
  );
};
export default Bar;
