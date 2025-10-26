"use client"

import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarRail,
} from "@/components/ui/sidebar"

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <div className="p-2 flex items-center">
          <span className="text-2xl gap-6 font-bold px-15">K3Chat</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <Button variant="default" size="default" className="w-full text-lg ">
          New Chat
        </Button>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}
