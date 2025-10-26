"use client"

import { AppSidebar } from "@/components/ui/app.sidebar";
import { ModeToggle } from "@/components/ui/ThemeToggle";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <div>
      {/* Fixed top-right theme toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>

      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-2 items-center gap-2 px-4">
            <SidebarTrigger />
          </header>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
