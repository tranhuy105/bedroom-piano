"use client";

import { useEffect, useState } from "react";
import Key from "./Key";
import {
  fromKeyToNote2,
  fromNoteToKey2,
  playNote,
} from "@/lib/utils";
import SelectOctive from "./SelectOctive";

const PianoSolo = () => {
  const [keyheld, setHeldKeys] = useState<string[]>([]);
  const [octive, setOctive] = useState<number>(4);
  const [currentPlay, setCurrentPlay] = useState("");

  useEffect(() => {
    function handleKeyUp(e: globalThis.KeyboardEvent) {
      const releasedKey = fromKeyToNote2(e.key);
      setCurrentPlay("");
      setHeldKeys((prevHeldKeys) =>
        prevHeldKeys.filter((key) => key !== releasedKey)
      );
    }

    function handlePlayNoteFromKeyBoard(
      e: globalThis.KeyboardEvent
    ) {
      // console.log(e.key);
      const pressedKey = fromKeyToNote2(e.key);

      if (!keyheld.includes(pressedKey)) {
        if (e.key !== "+") setCurrentPlay(pressedKey);
        // if (e.key === "+") {
        //   playNote("C" + (octive + 1));
        //   setCurrentPlay("C" + (octive + 1));
        // }
        if (e.key === fromNoteToKey2("C", octive))
          playNote("C" + octive);
        if (e.key === fromNoteToKey2("Db", octive))
          playNote("Db" + octive);
        if (e.key === fromNoteToKey2("D", octive))
          playNote("D" + octive);
        if (e.key === fromNoteToKey2("Eb", octive))
          playNote("Eb" + octive);
        if (e.key === fromNoteToKey2("E", octive))
          playNote("E" + octive);
        if (e.key === fromNoteToKey2("F", octive))
          playNote("F" + octive);
        if (e.key === fromNoteToKey2("Gb", octive))
          playNote("Gb" + octive);
        if (e.key === fromNoteToKey2("G", octive))
          playNote("G" + octive);
        if (e.key === fromNoteToKey2("Ab", octive))
          playNote("Ab" + octive);
        if (e.key === fromNoteToKey2("A", octive))
          playNote("A" + octive);
        if (e.key === fromNoteToKey2("Bb", octive))
          playNote("Bb" + octive);
        if (e.key === fromNoteToKey2("B", octive))
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
        {/* <Key
          color={"white"}
          k={"C" + (octive + 1)}
          currentPlay={currentPlay}
        /> */}
      </ul>
    </div>
  );
};
export default PianoSolo;
