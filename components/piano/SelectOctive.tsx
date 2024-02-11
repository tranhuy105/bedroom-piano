"use client";

import { useState } from "react";

const SelectOctive = ({ setOctive, octive }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((open) => !open);
  };
  const handleSelect = (octive: number) => {
    setOctive(octive);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center opacity-80 text-xs -ml-20">
      <div
        className="border border-muted-foreground text-muted-foreground rounded-md hover:bg-muted-foreground/10 cursor-pointer bg-white w-fit relative"
        onClick={handleClick}
      >
        {!isOpen && (
          <p className="px-3 py-2">
            Select Octave (current: {octive})
          </p>
        )}
      </div>
      {isOpen && (
        <div className="sticky flex items-center justify-center w-fit top-8 z-30 rounded-lg">
          {[1, 2, 3, 4, 5, 6].map((octive) => (
            <div
              key={octive}
              onClick={() => handleSelect(octive)}
              className="border rounded-lg px-3 py-2 cursor-pointer hover:bg-muted-foreground/20 transition-all text-muted-foreground"
            >
              {octive}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default SelectOctive;
