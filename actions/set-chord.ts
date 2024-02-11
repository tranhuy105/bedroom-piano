"use server";

import { db } from "@/lib/db";

export const setChord = async (
  barId: string,
  chordId: number,
  newRoot: string,
  newTypeOfChord: string,
  newBase: string
) => {
  try {
    // Find the bar with the specified id
    const existingBar = await db.bar.findUnique({
      where: {
        id: barId,
      },
      include: {
        chords: true,
      },
    });

    // Check if the bar exists
    if (existingBar) {
      // Find the chord within the bar based on the chordId
      const existingChord = existingBar.chords.filter(
        (chord) => chord.chordId === chordId
      )[0];

      // console.log(existingChord);
      // return null;

      // Check if the chord exists within the bar
      if (existingChord) {
        // Update the chord within the database
        const updatedChord = await db.chord.update({
          where: {
            id: existingChord.id,
          },
          data: {
            root: newRoot,
            typeOfChord: newTypeOfChord,
            base: newBase !== "" ? newBase : newRoot,
          },
        });

        // console.log(updatedChord);
        // Return or handle the updated chord as needed
        return updatedChord;
      } else {
        // Handle the case where the chord doesn't exist in the bar
        throw new Error(
          `Chord with id ${chordId} not found in bar with id ${barId}.`
        );
      }
    } else {
      // Handle the case where the bar doesn't exist
      throw new Error(`Bar with id ${barId} not found.`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
