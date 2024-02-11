import { useState } from "react";
import Popup from "./Popup";
import { cn } from "@/lib/utils";

interface BeatProps {
  chord: ChordType;
  handleSetChord: any;
  barid: string;
  currentlyPlayingChord?: ChordType;
  isLoading: boolean;
}

const Beat = ({
  chord,
  handleSetChord,
  barid,
  currentlyPlayingChord,
  isLoading,
}: BeatProps) => {
  const [isEdit, setIsEdit] = useState(false);

  const cT = () => {
    if (chord.typeOfChord === "major") {
      return "";
    } else if (chord.typeOfChord === "minor") {
      return "m";
    } else {
      return chord.typeOfChord;
    }
  };

  return (
    <>
      <div
        className={cn(
          "flex-1 border flex items-center justify-center text-3xl font-medium cursor-pointer border-secondary bg-slate-800  rounded-lg transition-colors duration-300 text-secondary",
          currentlyPlayingChord?.id === chord?.id &&
            currentlyPlayingChord?.chordId ===
              chord?.chordId
            ? "bg-slate-900 font-medium"
            : ""
        )}
        onClick={() => setIsEdit(true)}
      >
        {chord?.root}
        {cT()}
        {chord?.base !== chord?.root
          ? `/${chord?.base}`
          : ""}
      </div>
      {isEdit && (
        <Popup
          isLoading={isLoading}
          setIsEdit={setIsEdit}
          chord={chord}
          handleSetChord={handleSetChord}
          barid={barid}
        />
      )}
    </>
  );
};
export default Beat;
