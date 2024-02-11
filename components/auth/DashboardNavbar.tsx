import { auth, signOut } from "@/auth";
import Logo from "./logo";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut } from "lucide-react";

const DashboardNavbar = async () => {
  const session = await auth();

  return (
    <div className="sticky top-0 left-0 right-0 w-full bg-primary h-16 flex items-center justify-between shadow-sm text-secondary px-6 py-4 border-b z-50 shadow-black">
      <Logo />
      <div className="flex items-center justify-center gap-4">
        <Avatar>
          <AvatarImage
            src={
              session?.user.image
                ? session?.user.image
                : "pictures/avatar.jpg"
            }
          />
        </Avatar>
        <form
          action={async () => {
            "use server";

            await signOut();
          }}
        >
          <button typeof="submit" className="block px-2">
            <div className="cursor-pointer">
              <LogOut className="text-secondary" />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};
export default DashboardNavbar;
