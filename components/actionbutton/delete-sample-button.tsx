"use client";

import { Trash } from "lucide-react";
import { BaseType } from "../piano/Project";
import { useState } from "react";
import { deleteSample } from "@/actions/delete-sample";
import { useRouter } from "next/navigation";
interface Props {
  sample: BaseType;
}

const DeleteSampleButton = ({ sample }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleDeleteSample = async () => {
    setIsLoading(true);
    await deleteSample(sample.id);
    setIsLoading(false);
    router.refresh();
  };

  return (
    <button
      className="absolute right-3 top-3 text-slate-200 opacity-20 hover:opacity-100 hover:scale-105 transition duration-500 cursor-pointer disabled:cursor-progress"
      onClick={handleDeleteSample}
      disabled={isLoading}
    >
      <Trash />
    </button>
  );
};
export default DeleteSampleButton;
