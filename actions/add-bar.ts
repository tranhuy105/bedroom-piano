"use server";

import { db } from "@/lib/db";

export const addBar = async (barsId: string) => {
  try {
    const existingBars = await db.bars.findUnique({
      where: {
        id: barsId,
      },
      include: {
        bars: true,
      },
    });

    if (existingBars) {
      // If Bars with the specified barsId exists, add new Bar records
      const updatedBars = await db.bars.update({
        where: {
          id: barsId,
        },
        data: {
          bars: {
            create: {
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
                      chordId: 2,
                      base: "",
                      root: "",
                      typeOfChord: "",
                    },
                    {
                      chordId: 3,
                      base: "",
                      root: "",
                      typeOfChord: "",
                    },
                    {
                      chordId: 4,
                      base: "",
                      root: "",
                      typeOfChord: "",
                    },
                  ],
                },
              },
            },
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
      const prefinalbar = updatedBars.bars.slice(-1)[0];

      const returningNewlyAddedBarForClient = {
        id: prefinalbar.id,
        chords: prefinalbar.chords,
      };

      return returningNewlyAddedBarForClient;
    } else {
      // If Bars with the specified barsId doesn't exist, handle accordingly
      throw new Error(`Bars with id ${barsId} not found.`);
    }
  } catch (err) {
    throw err;
  }
};
