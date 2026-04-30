import { Topbar } from '@/components/topbar';
import { Sidebar } from '@/components/sidebar';
import { MainContent } from '@/components/main-content';
import { RightPanel } from '@/components/right-panel';
import { BottomNav } from '@/components/bottom-nav';

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-background text-foreground overflow-hidden">
      {/* Topbar */}
      <Topbar />
      
      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden gap-px">
        {/* Left Sidebar */}
        <Sidebar />
        
        {/* Center Content */}
        <MainContent />
        
        {/* Right Panel */}
        <RightPanel />
      </div>
      
      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
