import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-black">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-3xl font-semibold text-white drop-shadow-lg",
            font.className
          )}
        >
          🔐 Authentication
        </h1>
        <p className="text-white text-lg">login to use the to do app </p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
