"use server";

import { db } from "@/lib/db";

export const addSample = async (
  userId: string,
  name: string
) => {
  if (!userId) return;
  try {
    const newBar = await db.bars.create({
      data: {
        userId,
        name,
        bars: {
          create: [
            {
              chords: {
                createMany: {
                  data: [
                    {
                      chordId: 1,
                      base: "",
                      root: "",
                      typeOfChord: "",
                    },
                    {
                      base: "",
                      chordId: 2,
                      root: "",
                      typeOfChord: "",
                    },
                    {
                      base: "",
                      chordId: 3,
                      root: "",
                      typeOfChord: "",
                    },
                    {
                      base: "",
                      chordId: 4,
                      root: "",
                      typeOfChord: "",
                    },
                  ], // Empty array for Chords
                },
              },
            },
            // Add more "bars" entries if needed
          ],
        },
      },
      include: {
        bars: {
          include: {
            chords: true,
          },
        },
      },
    });

    return newBar;
  } catch (err) {
    throw err;
  }
};
