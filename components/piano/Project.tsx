import Link from "next/link";
import DeleteSampleButton from "../actionbutton/delete-sample-button";
import { cn } from "@/lib/utils";

type ChordType = {
  id: string;
  chordId: number;
  barId: string;
  root: string;
  typeOfChord: string;
};

type BarType = {
  id: string;
  barsId: string;
  chords: ChordType[];
};

export type BaseType = {
  id: string;
  userId: string;
  bars: BarType[];
  name: string;
};

interface ProjectProps {
  sample: BaseType;
}

const Project = async ({ sample }: ProjectProps) => {
  const numberOfChord = sample.bars.length * 4;

  return (
    <div className="w-full h-32 border px-3 py-2 rounded-xl shadow-secondary relative bg-slate-800">
      <div className="m-2 w-fit">
        <Link
          href={`${sample.id}`}
          className={cn("space-y-3")}
        >
          <h2 className="font-bold text-3xl">
            {sample.name}
          </h2>
          <div className="text-xs font-semibold text-primary bg-secondary w-fit px-2 py-1 rounded-full">
            {numberOfChord} chords
          </div>
        </Link>
      </div>
      <DeleteSampleButton sample={sample} />
    </div>
  );
};
export default Project;
