import { db } from "@/lib/db";

export const getAllChordsInBar = async (barId: string) => {
  try {
    // Find the bar with the specified barId and include its chords
    const barWithChords = await db.bar.findUnique({
      where: {
        id: barId,
      },
      include: {
        chords: true,
      },
    });

    // Check if the bar exists
    if (barWithChords) {
      // Return the array of chords directly
      console.log(barWithChords.chords);
      // return barWithChords.chords;
    } else {
      // Handle the case where the bar with the specified id doesn't exist
      throw new Error(`Bar with id ${barId} not found.`);
    }
  } catch (err) {
    throw err;
  }
};
