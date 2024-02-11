"use client";

import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  const handleGoToHomepage = () => {
    router.push("/dashboard");
    router.refresh();
  };
  return (
    <p
      className="text-3xl font-semibold cursor-pointer"
      onClick={handleGoToHomepage}
    >
      Bedroom Piano
    </p>
  );
};
export default Logo;
