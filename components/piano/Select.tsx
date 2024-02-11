import { useState } from "react";

interface SelectProps {
  label: "chord" | "chord types" | "root";
  onChange: any;
}

const availableChord = [
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
];

const availableType = [
  "major",
  "minor",
  "Δ7",
  "m7",
  "7",
  "sus4",
  "dim",
  "dim7",
  "9th",
  "13th",
];

const Select = ({ label, onChange }: SelectProps) => {
  const available =
    label === "chord" || label === "root"
      ? availableChord
      : availableType;

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    // Update the state when the select value changes
    onChange(event.target.value);
  };

  return (
    <div className="text-zinc-100 bg-transparent space-y-3 mt-12  w-24">
      <label className="block my-1 text-base font-semibold  text-slate-300 text-center ">
        {label}
      </label>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus-within:outline-none focus:outline-none h-16"
        onChange={handleSelectChange}
      >
        <option value={label} className="hidden" />
        <option value="" className="">
          null
        </option>
        {available.map((select, index) => (
          <option key={index} value={select}>
            {select}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
