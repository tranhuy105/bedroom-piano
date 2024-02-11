import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  } catch {
    return null;
  }
};

export const getBarsCollectionFromUserId = async (
  id: string
) => {
  try {
    const bars = await db.bars.findMany({
      where: {
        userId: id,
      },
      include: {
        bars: {
          include: {
            chords: true,
          },
        },
      },
    });

    // console.log(bars);

    return bars;
  } catch {
    return null;
  }
};

export const getBarsFromId = async (id: string) => {
  try {
    const bars = await db.bars.findUnique({
      where: {
        id, // replace with actual user id
      },
      include: {
        bars: {
          include: {
            chords: true,
          },
        },
      },
    });
    if (bars) {
      const barsWithoutBarsId = bars.bars.map((bar) => ({
        id: bar.id,
        chords: bar.chords,
      }));

      // console.log(barsWithoutBarsId);
      return barsWithoutBarsId;
    } else {
      throw new Error(
        `Bars not found for user with id ${id}`
      );
    }
  } catch {
    return null;
  }
};
