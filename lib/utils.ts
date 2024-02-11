import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fromNoteToKey = (
  k: string,
  octave: number
) => {
  if (k[1] !== "b") {
    if (k[0] === "C") return "a";
    if (k[0] === "D") return "s";
    if (k[0] === "E") return "d";
    if (k[0] === "F") return "f";
    if (k[0] === "G") return "g";
    if (k[0] === "A") return "h";
    if (k[0] === "B") return "j";
  } else if (k[1] === "b") {
    if (k[0] === "D") return "w";
    if (k[0] === "E") return "e";
    if (k[0] === "G") return "t";
    if (k[0] === "A") return "y";
    if (k[0] === "B") return "u";
  } else return "";
};

export const fromNoteToKey2 = (
  k: string,
  octave: number
) => {
  if (k[1] !== "b") {
    if (k[0] === "C") return "0";
    if (k[0] === "D") return "1";
    if (k[0] === "E") return "3";
    if (k[0] === "F") return `4`;
    if (k[0] === "G") return "6";
    if (k[0] === "A") return "7";
    if (k[0] === "B") return "9";
  } else if (k[1] === "b") {
    if (k[0] === "D") return ".";
    if (k[0] === "E") return "2";
    if (k[0] === "G") return "5";
    if (k[0] === "A") return "\\";
    if (k[0] === "B") return "8";
  } else return "";
};

export const fromKeyToNote2 = (key: string): string => {
  switch (key) {
    case "0":
      return "C";
    case "1":
      return "D";
    case "3":
      return "E";
    case "4":
      return "F";
    case "6":
      return "G";
    case "7":
      return "A";
    case "9":
      return "B";
    case ".":
      return "Db";
    case "2":
      return "Eb";
    case "5":
      return "Gb";
    case "\\":
      return "Ab";
    case "8":
      return "Bb";
    default:
      return "";
  }
};

export const fromKeyToNote = (key: string): string => {
  switch (key) {
    case "a":
      return "C";
    case "s":
      return "D";
    case "d":
      return "E";
    case "f":
      return "F";
    case "g":
      return "G";
    case "h":
      return "A";
    case "j":
      return "B";
    case "w":
      return "Db";
    case "e":
      return "Eb";
    case "t":
      return "Gb";
    case "y":
      return "Ab";
    case "u":
      return "Bb";
    default:
      return "";
  }
};

export const playNote = (key: string, lower?: boolean) => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  // console.log(key);
  const audio = new Audio(`piano-mp3/${key}.mp3`);
  if (lower) audio.volume = 0.5;

  audio.addEventListener("ended", () => {
    audio.pause();
    audio.currentTime = 0;
    if (container.contains(audio)) {
      container.removeChild(audio);
    }
    document.body.removeChild(container);
  });

  container.appendChild(audio);

  // Start playing the audio
  audio.play();
};
