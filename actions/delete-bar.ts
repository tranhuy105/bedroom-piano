"use server";

import { db } from "@/lib/db";

export const DeleteBar = async (id: string) => {
  try {
    const barIdToDelete = id;

    const existingBar = await db.bar.findUnique({
      where: {
        id: barIdToDelete,
      },
      include: {
        chords: true,
      },
    });
    if (existingBar) {
      const deletedBar = await db.bar.delete({
        where: {
          id: barIdToDelete,
        },
        include: {
          chords: true,
        },
      });

      console.log(deletedBar);
      const returnBar = {
        id: deletedBar.id,
        chords: deletedBar.chords,
      };

      return returnBar;
    } else {
      throw new Error(
        `Bar with id ${barIdToDelete} not found.`
      );
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
