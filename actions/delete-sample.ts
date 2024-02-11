"use server";

import { db } from "@/lib/db";

export const deleteSample = async (sampleId: string) => {
  try {
    const deletedBar = await db.bars.delete({
      where: {
        id: sampleId,
      },
    });

    return deletedBar;
  } catch (err) {
    throw err;
  }
};
