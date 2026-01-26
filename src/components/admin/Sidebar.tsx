"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, Ticket, Ban, Bell, LayoutDashboard } from "lucide-react";

const menuItems = [
  { name: "Tổng quan", path: "/admin", icon: LayoutDashboard },
  { name: "Người dùng", path: "/admin/users", icon: Users },
  { name: "Tickets", path: "/admin/tickets", icon: Ticket },
  { name: "Gửi thông báo", path: "/admin/notifications", icon: Bell },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen sticky top-0 flex flex-col">
      <div className="p-6 border-b font-bold text-xl text-blue-600">ADMIN PANEL</div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Link key={item.path} href={item.path} 
            className={`flex items-center gap-3 p-3 rounded-lg ${pathname === item.path ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"}`}>
            <item.icon size={20} />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}