"use client";
import { cn, playNote } from "@/lib/utils";

interface KeyProps {
  color: "white" | "black";
  k: string;
  currentPlay: string;
}

const Key = ({ color, k, currentPlay }: KeyProps) => {
  const handlePlayNote = (k: string) => {
    playNote(k);
  };

  // console.log(k, currentPlay, k === currentPlay);

  return (
    <li
      onClick={() => handlePlayNote(k)}
      className={`${cn(
        `${k[0]}
        relative float-left block text-center transition-all`,
        color === "white"
          ? "white active:white-active"
          : "black active:black-active"
      )} ${
        k === currentPlay && color === "white"
          ? "shadow-inner shadow-black"
          : ""
      } ${
        k === currentPlay && color === "black"
          ? "shadow-inner shadow-white"
          : ""
      }`}
    ></li>
  );
};
export default Key;
