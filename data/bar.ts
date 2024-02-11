import { db } from "@/lib/db";

export const getBarsFromDb = async (barsId: string) => {
  try {
    const res = await db.bar.findMany({
      where: {
        barsId,
      },
      include: {
        chords: true,
      },
    });

    // console.log(res);

    const ManipulatabelBars = res.map((item) => ({
      id: item.id,
      chords: item.chords,
    }));

    // console.log(ManipulatabelBars[0]);

    return ManipulatabelBars;
  } catch (err) {
    throw err;
  }
};
