"use client";

import { useEffect, useState } from "react";
import Key from "./Key";
import {
  fromKeyToNote,
  fromNoteToKey,
  playNote,
} from "@/lib/utils";
import SelectOctive from "./SelectOctive";

const Piano = () => {
  const [keyheld, setHeldKeys] = useState<string[]>([]);
  const [octive, setOctive] = useState<number>(4);
  const [currentPlay, setCurrentPlay] = useState("");

  useEffect(() => {
    function handleKeyUp(e: globalThis.KeyboardEvent) {
      let releasedKey = fromKeyToNote(e.key);
      if (!releasedKey) {
        if (e.key === "k") releasedKey = "C" + (octive + 1);
        if (e.key === "o")
          releasedKey = "Db" + (octive + 1);
        if (e.key === "l") releasedKey = "D" + (octive + 1);
        if (e.key === "p")
          releasedKey = "Eb" + (octive + 1);
        if (e.key === ";") releasedKey = "E" + (octive + 1);
        if (e.key === "'") releasedKey = "F" + (octive + 1);
      }
      // console.log(releasedKey);
      setCurrentPlay("");
      setHeldKeys((prevHeldKeys) =>
        prevHeldKeys.filter((key) => key !== releasedKey)
      );
    }

    function handlePlayNoteFromKeyBoard(
      e: globalThis.KeyboardEvent
    ) {
      let pressedKey = fromKeyToNote(e.key);
      if (!pressedKey) {
        if (e.key === "k") pressedKey = "C" + (octive + 1);
        if (e.key === "o") pressedKey = "Db" + (octive + 1);
        if (e.key === "l") pressedKey = "D" + (octive + 1);
        if (e.key === "p") pressedKey = "Eb" + (octive + 1);
        if (e.key === ";") pressedKey = "E" + (octive + 1);
        if (e.key === "'") pressedKey = "F" + (octive + 1);
      }
      // console.log(pressedKey);

      if (!keyheld.includes(pressedKey)) {
        // console.log(e.key);
        if (e.key === "k") {
          playNote("C" + (octive + 1));
          setCurrentPlay("C" + (octive + 1));
        } else if (e.key === "l") {
          playNote("D" + (octive + 1));
          setCurrentPlay("D" + (octive + 1));
        } else if (e.key === ";") {
          playNote("E" + (octive + 1));
          setCurrentPlay("E" + (octive + 1));
        } else if (e.key === "'") {
          playNote("F" + (octive + 1));
          setCurrentPlay("F" + (octive + 1));
        } else if (e.key === "o") {
          playNote("Db" + (octive + 1));
          setCurrentPlay("Db" + (octive + 1));
        } else if (e.key === "p") {
          playNote("Eb" + (octive + 1));
          setCurrentPlay("Eb" + (octive + 1));
        } else {
          setCurrentPlay(pressedKey);
        }

        // octive chuan
        if (e.key === fromNoteToKey("C", octive))
          playNote("C" + octive);
        if (e.key === fromNoteToKey("Db", octive))
          playNote("Db" + octive);
        if (e.key === fromNoteToKey("D", octive))
          playNote("D" + octive);
        if (e.key === fromNoteToKey("Eb", octive))
          playNote("Eb" + octive);
        if (e.key === fromNoteToKey("E", octive))
          playNote("E" + octive);
        if (e.key === fromNoteToKey("F", octive))
          playNote("F" + octive);
        if (e.key === fromNoteToKey("Gb", octive))
          playNote("Gb" + octive);
        if (e.key === fromNoteToKey("G", octive))
          playNote("G" + octive);
        if (e.key === fromNoteToKey("Ab", octive))
          playNote("Ab" + octive);
        if (e.key === fromNoteToKey("A", octive))
          playNote("A" + octive);
        if (e.key === fromNoteToKey("Bb", octive))
          playNote("Bb" + octive);
        if (e.key === fromNoteToKey("B", octive))
          playNote("B" + octive);

        setHeldKeys((prevHeldKeys) => [
          ...prevHeldKeys,
          pressedKey,
        ]);
      }
    }

    document.addEventListener(
      "keydown",
      handlePlayNoteFromKeyBoard
    );

    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener(
        "keydown",
        handlePlayNoteFromKeyBoard
      );
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [octive, currentPlay, keyheld]);

  return (
    <div className="space-y-3 p-3">
      <SelectOctive setOctive={setOctive} octive={octive} />
      <ul className="relative w-full flex items-start justify-center p-2">
        <Key
          color={"white"}
          k={"C" + octive}
          currentPlay={currentPlay + octive}
        />
        <Key
          color={"black"}
          k={"Db" + octive}
          currentPlay={currentPlay + octive}
        />
        <Key
          color={"white"}
          k={"D" + octive}
          currentPlay={currentPlay + octive}
        />
        <Key
          color={"black"}
          k={"Eb" + octive}
          currentPlay={currentPlay + octive}
        />
        <Key
          color={"white"}
          k={"E" + octive}
          currentPlay={currentPlay + octive}
        />
        <Key
          color={"white"}
          k={"F" + octive}
          currentPlay={currentPlay + octive}
        />
        <Key
          color={"black"}
          k={"Gb" + octive}
          currentPlay={currentPlay + octive}
        />
        <Key
          color={"white"}
          k={"G" + octive}
          currentPlay={currentPlay + octive}
        />
        <Key
          color={"black"}
          k={"Ab" + octive}
          currentPlay={currentPlay + octive}
        />
        <Key
          color={"white"}
          k={"A" + octive}
          currentPlay={currentPlay + octive}
        />
        <Key
          color={"black"}
          k={"Bb" + octive}
          currentPlay={currentPlay + octive}
        />
        <Key
          color={"white"}
          k={"B" + octive}
          currentPlay={currentPlay + octive}
        />
        {/* new octive */}
        <Key
          color={"white"}
          k={"C" + (octive + 1)}
          currentPlay={currentPlay}
        />
        <Key
          color={"black"}
          k={"Db" + (octive + 1)}
          currentPlay={currentPlay}
        />
        <Key
          color={"white"}
          k={"D" + (octive + 1)}
          currentPlay={currentPlay}
        />
        <Key
          color={"black"}
          k={"Eb" + (octive + 1)}
          currentPlay={currentPlay}
        />
        <Key
          color={"white"}
          k={"E" + (octive + 1)}
          currentPlay={currentPlay}
        />
        <Key
          color={"white"}
          k={"F" + (octive + 1)}
          currentPlay={currentPlay}
        />
      </ul>
    </div>
  );
};
export default Piano;
