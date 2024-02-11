import { auth } from "@/auth";
import NewSample from "@/components/actionbutton/new-sample";
import Project from "@/components/piano/Project";
import { getBarsCollectionFromUserId } from "@/data/user";
import { FileWarning } from "lucide-react";

const page = async () => {
  const session = await auth();
  if (!session?.user.id) return null;
  const bars = await getBarsCollectionFromUserId(
    session?.user.id
  );
  // console.log(bars);

  return (
    // <div>current session is {JSON.stringify(session)}</div>
    <div className="min-h-[calc(100vh-64px)] w-full bg-primary text-secondary relative">
      {bars && bars[0] !== undefined ? (
        <div className="px-12">
          <p className=" px-4 py-3 pt-12 text-base font-semibold">
            Recently
          </p>
          <div className="px-4 py-3 grid-cols-4 grid w-full gap-12">
            {bars.map((sample) => (
              <div key={sample.id}>
                <Project sample={sample} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-lg font-semibold mx-auto pt-48 w-1/2 flex items-center justify-center flex-col gap-8 ">
          <FileWarning size={"128"} className="mx-auto" />
          <p className="text-center  w-full">
            Oops, you haven&apos;t had any sample yet, add
            one to your collection right now
          </p>
        </div>
      )}

      <NewSample userId={session.user.id} />
    </div>
  );
};
export default page;
