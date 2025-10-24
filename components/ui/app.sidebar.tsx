"use client"
import { Button } from "@/components/ui/button"
import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"

export function AppSidebar(props) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <div className="p-2">
          <span className="text-sm font-semibold">K3Chat</span>
        </div>
      </SidebarHeader>
      <Button variant="destructive" ></Button>

      <SidebarContent />
      <SidebarRail />
    </Sidebar>
  )
}