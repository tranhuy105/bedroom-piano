import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { X } from "lucide-react";
import { useRef, useState } from "react";
import Select from "./Select";
import { Button } from ".././ui/button";

interface PopupProps {
  setIsEdit: any;
  chord?: ChordType;
  handleSetChord: any;
  barid: any;
  isLoading: boolean;
}

const Popup = ({
  setIsEdit,
  chord,
  handleSetChord,
  isLoading,
  barid,
}: PopupProps) => {
  const htmlref = useRef<HTMLDivElement>(null);
  useOnClickOutside(htmlref, () => setIsEdit(false));

  const [root, setRoot] = useState(chord?.root);
  const [typeOfChord, setTypeOfChord] = useState(
    chord?.typeOfChord
  );
  const [base, setBase] = useState("");

  // console.log(chord);

  const handleSaveChord = async () => {
    if ((!root && typeOfChord) || (!typeOfChord && root))
      return;
    await handleSetChord(
      barid,
      chord?.chordId,
      root,
      typeOfChord,
      base
    );
    setIsEdit(false);
  };

  return (
    <div className="w-screen h-screen bg-black/80 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-50 text-zinc-100 ">
      <div
        className="w-[800px] h-[400px] bg-zinc-900 relative flex items-center justify-start flex-col pt-16 pb-6 px-24 rounded-lg"
        ref={htmlref}
      >
        <div
          className="absolute right-0 top-0 text-red-50 opacity-50 hover:opacity-100 hover:scale-105 transition duration-500 cursor-pointer"
          onClick={() => setIsEdit(false)}
        >
          <X />
        </div>

        <div className="text-xl">
          Current chord:{" "}
          <span className="font-extrabold text-2xl">
            {root}
            {typeOfChord}
            {base && `/${base}`}
          </span>
        </div>

        {/* EDIT CHORD */}
        <div className="flex items-center justify-center gap-6">
          <Select label="chord" onChange={setRoot} />
          <Select
            label="chord types"
            onChange={setTypeOfChord}
          />
          <Select label="root" onChange={setBase} />
        </div>

        <Button
          className="mt-auto text-zinc-900 w-full disabled:cursor-progress"
          variant={"outline"}
          onClick={handleSaveChord}
          disabled={isLoading}
        >
          Save
        </Button>
      </div>
    </div>
  );
};
export default Popup;
