import { Topbar } from "@/components/topbar";
import { MainContent } from "@/components/main-content";
import { RightPanel } from "@/components/right-panel";
import { BottomNav } from "@/components/bottom-nav";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-background text-foreground overflow-hidden">
      <Topbar />
      <div className="flex flex-1 overflow-hidden gap-px">
        <MainContent />

        <RightPanel />
      </div>

      <BottomNav />
    </div>
  );
}
