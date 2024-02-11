import { PlusCircleIcon, SaveIcon } from "lucide-react";
import Metronome from "./Metronome";
import NextChord from "./NextChord";

interface PlayerNavigationProps {
  handleAddBar: any;
  bars: BarType[];
  setCurrentlyPlayingChord: any;
  isLoading: boolean;
  nextChord: ChordType;
}

const PlayerNavigation = ({
  isLoading,
  handleAddBar,
  bars,
  setCurrentlyPlayingChord,
  nextChord,
}: PlayerNavigationProps) => {
  return (
    <div className="flex gap-4 fixed bottom-0 bg-primary w-full border-t-2 items-center justify-between text-slate-200">
      {/* metronome */}
      <Metronome
        bars={bars}
        setCurrentlyPlayingChord={setCurrentlyPlayingChord}
      />

      {/* the next chord */}
      <NextChord nextChord={nextChord} />

      {/* add new bar */}
      <button
        className=" flex justify-center gap-3 font-bold opacity-70 hover:opacity-100 transition cursor-pointer items-center rounded-full px-5 py-3  disabled:cursor-progress"
        onClick={handleAddBar}
        disabled={isLoading}
      >
        <PlusCircleIcon size={"64"} />
        <p>Add new bar</p>
      </button>
    </div>
  );
};
export default PlayerNavigation;
