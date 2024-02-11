import { constructChord } from "@/lib/chordconstruct";
import { playNote } from "@/lib/utils";
import {
  Ear,
  EarOff,
  LucideListRestart,
  PauseCircleIcon,
  PlayCircleIcon,
} from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

interface MetronomeProps {
  bars: BarType[];
  setCurrentlyPlayingChord: any;
}

const Metronome = ({
  bars,
  setCurrentlyPlayingChord,
}: MetronomeProps) => {
  const [beat, setBeat] = useState(0);
  const [bpm, setBpm] = useState(160);
  const [beatPerM, setBeatPerM] = useState(4);
  const [running, setRunning] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playAudio, setPlayAudio] = useState(false);

  const [currentPlayingBar, setCurrentPlayingBar] =
    useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const runMetronome = () => {
      return setInterval(() => {
        // RUN THE BARS
        const bar = bars[currentPlayingBar];
        if (bar) {
          const currentChordIndex = beat + 1;
          const currentChord = bar?.chords.filter(
            (chord) => chord.chordId === currentChordIndex
          )[0];
          // console.log(currentChord);
          setCurrentlyPlayingChord(currentChord);

          // ACTION WITH THE CHORD
          if (currentChord) {
            const currentRoot = currentChord.root;
            const currentType = currentChord.typeOfChord;
            const currentBase = currentChord.base;

            let result = constructChord(
              currentRoot,
              currentType,
              4
            );

            if (result[0]) {
              const rootNoteTwoOctavesBelow = {
                note: currentBase,
                octave: 2,
              };
              result.unshift(rootNoteTwoOctavesBelow);

              // console.log(result);
              result.forEach((noteObj) => {
                setTimeout(() => {
                  playNote(
                    noteObj.note + noteObj.octave,
                    true
                  );
                }, 20); // Adjust the delay time as needed
              });
            }
          } else {
            console.log("error");
          }
        } else {
          handleReset();
          return;
        }

        if (beat === beatPerM - 1) {
          if (currentPlayingBar === bars.length - 1) {
            setCurrentPlayingBar(0);
          } else {
            setCurrentPlayingBar((prev) => prev + 1);
          }
        }

        // METRONOME
        if (running && audioRef.current) {
          if (beat === 0) {
            audioRef.current.src =
              "metronome/1_metronome.wav";
          } else {
            audioRef.current.src =
              "metronome/2_metronome.wav";
          }
          if (playAudio) {
            audioRef.current.volume = 0.6;
            audioRef.current.play();
          }
          setBeat((prevBeat) => (prevBeat + 1) % beatPerM);
        }
      }, (60 / bpm) * 1000);
    };

    if (running) {
      intervalId = runMetronome();
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [
    running,
    bpm,
    beat,
    beatPerM,
    playAudio,
    bars,
    currentPlayingBar,
    setCurrentlyPlayingChord,
  ]);

  const handleStart = () => {
    setRunning(true);
  };

  const handlePause = () => {
    setRunning((prevRunning) => !prevRunning);
  };

  const handleReset = () => {
    setCurrentPlayingBar(0);
    setBeat(0);
    setRunning(false);
    setCurrentlyPlayingChord(null);
  };

  const handleBpmChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newBpm = parseInt(e.target.value);

    if (!isNaN(newBpm) && newBpm > 0) {
      setBpm(newBpm);
    }
  };

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !audioRef.current
    ) {
      audioRef.current = new Audio();
    }
  }, []);

  return (
    <div className="flex items-center justify-center  ">
      <div className="flex flex-col items-start justify-center px-4 gap-2">
        <div className="flex gap-3 justify-between items-center w-full ">
          <p>Beat: {beat === 0 ? beatPerM : beat}</p>
          <div
            className="scale-90 hover:bg-slate-600 transition px-2 py-1 cursor-pointer rounded-full"
            onClick={() => setPlayAudio((cur) => !cur)}
          >
            {playAudio ? (
              <div>
                <EarOff />
              </div>
            ) : (
              <div>
                <Ear />
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-2 items-center justify-center ">
          <label>BPM: {bpm}</label>
          <input
            type="range"
            min={"60"}
            max={"240"}
            value={bpm}
            onChange={handleBpmChange}
          />
        </div>
      </div>
      {!running ? (
        <div
          onClick={handleStart}
          className="cursor-pointer opacity-50 p-1 hover:bg-slate-600 transition rounded-full"
        >
          <PlayCircleIcon size={"48"} />
        </div>
      ) : (
        <div
          onClick={handlePause}
          className="cursor-pointer  opacity-50 p-1 hover:bg-slate-600 transition rounded-full"
        >
          <PauseCircleIcon size={"48"} />
        </div>
      )}
      {
        <div
          onClick={handleReset}
          className="cursor-pointer hover:bg-slate-600 transition opacity-50 p-1 rounded-lg"
        >
          <LucideListRestart size={"48"} />
        </div>
      }
    </div>
  );
};

export default Metronome;
