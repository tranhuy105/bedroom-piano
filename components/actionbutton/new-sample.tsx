"use client";

import { FilePlus2 } from "lucide-react";
import { Button } from "../ui/button";
import { addSample } from "@/actions/add-sample";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { cn } from "@/lib/utils";

interface Props {
  userId: string;
}

const NewSample = ({ userId }: Props) => {
  const [name, setName] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleAddNewSample = async () => {
    if (!name) return;
    try {
      setIsLoading(true);
      const newBar = await addSample(userId, name);
      if (!newBar)
        throw new Error(
          "Something went wrong in the server, cant create new bar"
        );
      router.push(`${newBar.id}`);
    } catch {
      return null;
    }
  };

  return (
    <Dialog>
      <DialogTrigger
        className={cn("mt-12 w-full sticky bottom-0")}
      >
        <Button asChild>
          <div
            className="space-x-3 cursor-pointer hover:scale-100 scale-90 transition-transform duration-500 my-5"
            // onClick={() => {}}
          >
            <FilePlus2 />
            <p className="text-secondary/90">
              Add New Sample
            </p>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent
        className={cn(
          "sm:max-w-[425px]",
          isLoading && "cursor-progress"
        )}
      >
        <DialogHeader>
          <DialogTitle>Give your sample a name</DialogTitle>
          <DialogDescription>
            Make changes to your sample here. A easy name
            can save you in the far future. Click save when
            you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <input
          value={name}
          onChange={(e: any) => setName(e.target.value)}
          className="bg-secondary focus:outline-none px-4 py-3 rounded-lg text-sm disabled:cursor-progress"
          disabled={isLoading}
        />
        <DialogFooter>
          <Button
            type="submit"
            onClick={handleAddNewSample}
            disabled={isLoading}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default NewSample;
