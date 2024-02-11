"use server";

import { db } from "@/lib/db";

export const addSample = async (userId: string) => {
  try {
    const newBar = await db.bars.create({
      data: {
        userId,
        bars: {
          create: [],
        },
      },
    });

    return newBar;
  } catch (err) {
    throw err;
  }
};
