import MiniPiano from "./MiniPiano";

interface NextChordProps {
  nextChord: ChordType;
}

const NextChord = ({ nextChord }: NextChordProps) => {
  const cT = () => {
    if (nextChord.typeOfChord === "major") {
      return "";
    } else if (nextChord.typeOfChord === "minor") {
      return "m";
    } else {
      return nextChord.typeOfChord;
    }
  };

  return (
    <div className="flex items-center justify-center -ml-16 gap-4">
      {/* <p className="w-12">Next Chord!</p> */}
      <p className="font-semibold text-muted-foreground w-full align-bottom text-xs">
        Next Chord: <br />
        <span className="text-lg font-extrabold text-slate-200 animate-pulse">
          →{" "}
          {nextChord.root +
            cT() +
            (nextChord.base !== nextChord.root
              ? `/${nextChord.base}`
              : "")}
        </span>
      </p>
      <MiniPiano
        root={nextChord.root}
        type={nextChord.typeOfChord}
      />
    </div>
  );
};
export default NextChord;
