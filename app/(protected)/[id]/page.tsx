import { auth } from "@/auth";
import ChordPlayer from "@/components/piano/ChordPlayer";
import PianoWrapper from "@/components/piano/PianoWrapper";
import { getBarsFromDb } from "@/data/bar";
import { getBarsFromId } from "@/data/user";

export default async function page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}) {
  const session = await auth();
  const { id } = params;
  // console.log(session, id);
  if (!session?.user.id) return null;

  // console.log(id);

  const currentBars = await getBarsFromId(id);
  if (!currentBars)
    return (
      <div className="h-[calc(100vh-64px)] flex w-full text-6xl text-red-500 items-center justify-center">
        There is no sample with id of {id}
      </div>
    );

  const startingBar = await getBarsFromDb(id);
  // console.log(startingBar);

  return (
    <div className="min-h-[calc(100vh-64px)] relative w-full bg-primary">
      {/* CHORD PLAYER */}
      <ChordPlayer
        barsid={id}
        userId={session.user.id}
        currentBars={startingBar}
      />
      {/* PIANO*/}
      {/* TODO: SUA LOI ADD c4 thi k add dc c5 nua */}
      <PianoWrapper />
    </div>
  );
}
