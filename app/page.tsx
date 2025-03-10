import LoginPage from "./auth/login/page";
import Floatingnavbar from "@/components/ui/FloatingNavbar";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginPage />
        <Floatingnavbar />
      </div>
    </div>
  );
}
