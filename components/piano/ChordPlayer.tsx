"use client";

import { useEffect, useRef, useState } from "react";
import Bar from "./Bar";
import PlayerNavigation from "./PlayerNavigation";
import { addBar } from "@/actions/add-bar";
import { cn } from "@/lib/utils";

const ChordPlayer = ({
  userId,
  barsid,
  currentBars,
}: {
  userId: string;
  barsid: string;
  currentBars: BarType[];
}) => {
  const [bars, setBars] = useState<BarType[]>(currentBars);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentlyPlayingChord, setCurrentlyPlayingChord] =
    useState<ChordType>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (bars.length) {
      scrollRef.current?.scrollIntoView({
        behavior: "instant",
        block: "end",
      });
    }
  }, [bars.length]);

  const handleAddBar = async () => {
    setIsLoading(true);
    const newBar = await addBar(barsid);
    setIsLoading(false);
    // console.log(newBar);
    // console.log(newBar);
    setBars((cur) => [...cur, newBar]);
  };

  const findNextChord = () => {
    const allChords = bars.flatMap((bar) =>
      bar.chords.sort((a, b) => a.chordId - b.chordId)
    );

    const currentIndex = allChords.findIndex(
      (chord) => chord === currentlyPlayingChord
    );

    let nextChordIndex;
    if (currentIndex === -1) {
      nextChordIndex = 0;
    } else {
      nextChordIndex = allChords.findIndex(
        (chord, index) =>
          index > currentIndex &&
          chord.root !== "" &&
          chord.typeOfChord !== ""
      );
    }

    if (nextChordIndex !== -1) {
      const nextChord = allChords[nextChordIndex];
      return nextChord;
    } else {
      return allChords[0];
    }
  };

  const nextChord = findNextChord();

  return (
    <div
      className={cn(
        " w-full flex flex-col justify-between items-center cursor-default",
        isLoading ? "cursor-progress" : ""
      )}
    >
      {/* bars component */}
      <div className="px-10 py-6 space-y-6 w-full pb-40">
        {bars.map((bar, index) => (
          <Bar
            key={index}
            bar={bar}
            setBars={setBars}
            bars={bars}
            currentlyPlayingChord={currentlyPlayingChord}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        ))}
      </div>

      {/* navigation*/}
      <PlayerNavigation
        isLoading={isLoading}
        handleAddBar={handleAddBar}
        bars={bars}
        setCurrentlyPlayingChord={setCurrentlyPlayingChord}
        nextChord={nextChord}
      />

      {/* scroll ref */}
      <div ref={scrollRef} />
    </div>
  );
};
export default ChordPlayer;
