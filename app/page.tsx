import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex gap-8 h-full flex-col items-center justify-center bg-[url('/pictures/playing-keyboard.jpg')] bg-cover bg-opacity-90">
      <div className="space-y-6 text-center transition-all cursor-alias">
        <h1 className="text-8xl font-semibold text-white drop-shadow-md">
          🎹 Bedroom Piano
        </h1>
        <p className="text-white text-2xl">
          A simple midi right in your bedroom.
          <br />
          <span className="text-2xl text-white/80 animate-pulse">
            Creating music on the way without any trouble!
          </span>
        </p>
        <div>
          <LoginButton>
            <Button variant={"secondary"} size={"lg"}>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
