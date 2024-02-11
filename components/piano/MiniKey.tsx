"use client";
import { cn } from "@/lib/utils";

interface KeyProps {
  color: "white" | "black";
  k: string;
  playingNote: string[];
}

const MiniKey = ({ color, k, playingNote }: KeyProps) => {
  const isThisNotePlayed = playingNote.includes(k);

  const cl = () => {
    if (
      k[0] === "A" ||
      k[0] === "G" ||
      k[0] === "B" ||
      k[0] === "D" ||
      k[0] === "E"
    ) {
      return "-ml-[6px]";
    } else {
      return "";
    }
  };

  const c = cl();

  return (
    <li
      className={cn(
        `${c}
        relative float-left block text-center`,
        color === "white"
          ? "mini-white  bg-white"
          : "mini-black  bg-black ",
        isThisNotePlayed
          ? "bg-red-600 border shadow-inner border-red-700"
          : ""
      )}
    ></li>
  );
};
export default MiniKey;
