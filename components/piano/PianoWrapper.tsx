"use client";

import {
  ChevronDown,
  LucidePiano,
  PianoIcon,
} from "lucide-react";
import Piano from "./Piano";
import PianoSolo from "./PianoSolo";
import { useState } from "react";
import { cn } from "@/lib/utils";

const PianoWrapper = () => {
  const [pianoCount, setPianoCount] = useState(1);
  const [isFull, setIsFull] = useState(false);

  return (
    <div className="fixed left-0 right-0 bottom-0 border">
      {!isFull && (
        <div className="flex items-center justify-center w-full">
          <div
            className="bg-zinc-100 p-3 border border-zinc-600 rounded-full opacity-20 hover:opacity-100 transition-all cursor-pointer shadow-md fixed top-[20%] right-[24px] "
            onClick={() => {
              setIsFull(true);
              setPianoCount(1);
            }}
          >
            <LucidePiano size={"36"} />
          </div>
        </div>
      )}
      <div
        className={cn(
          "justify-center items-center relative bg-zinc-50 w-full",
          !isFull ? "hidden" : "flex"
        )}
      >
        <div className="absolute -top-6 left-0 right-0 w-full flex justify-center rounded-full z-10">
          <div
            className="bg-zinc-300 rounded-full opacity-50 hover:opacity-100 transition-all cursor-pointer shadow-md"
            onClick={() => {
              setIsFull(false);
              setPianoCount(1);
            }}
          >
            <ChevronDown size={"36"} />
          </div>
        </div>
        <div className="gap-y-4 h-full">
          <div
            className={cn(
              "h-full hover:bg-muted-foreground/20 transition-all rounded-lg px-2 py-3 cursor-pointer flex items-center justify-center text-2xl gap-5",
              pianoCount === 1
                ? "bg-muted-foreground/20"
                : ""
            )}
            onClick={() => setPianoCount(1)}
          >
            <h1 className="font-bold">1</h1>
            <PianoIcon size={"48"} />
          </div>
          <div
            className={cn(
              "h-full hover:bg-muted-foreground/20 transition-all rounded-lg px-2 py-3 cursor-pointer flex items-center justify-center text-2xl gap-5",
              pianoCount === 2
                ? "bg-muted-foreground/20"
                : ""
            )}
            onClick={() => setPianoCount(2)}
          >
            <h1 className="font-bold">2</h1>
            <PianoIcon size={"48"} />
          </div>
        </div>
        {pianoCount === 2 && <PianoSolo />}
        {(pianoCount === 1 || pianoCount === 2) && (
          <Piano />
        )}
      </div>
    </div>
  );
};
export default PianoWrapper;
