"use client";
import { Refine } from "@refinedev/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Thêm dòng này
import dataProvider from "@refinedev/simple-rest";
import { authProvider } from "@/providers/authProvider";
import Sidebar from "@/components/admin/Sidebar";

// 1. Khởi tạo Query Client
const queryClient = new QueryClient();

const manualRouterProvider = {
    go: () => () => {},
    back: () => () => {},
    parse: () => () => ({ resource: undefined, action: undefined, id: undefined }),
    Link: ({ children, to, ...props }: any) => <a href={to} {...props}>{children}</a>,
    useLocation: () => ({ pathname: typeof window !== 'undefined' ? window.location.pathname : "/admin" }),
    useNavigate: () => () => {},
    useParams: () => ({}),
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    // 2. Bọc toàn bộ trong QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <Refine
        routerProvider={manualRouterProvider as any}
        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
        authProvider={authProvider}
        resources={[
          { name: "users", list: "/admin/users" },
          { name: "posts", list: "/admin/tickets" }
        ]}
      >
        <div className="flex min-h-screen bg-gray-50">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <header className="h-16 bg-white border-b px-8 flex items-center shadow-sm">
              <span className="font-bold text-gray-700">HỆ THỐNG QUẢN TRỊ</span>
            </header>
            <main className="p-8">
              {children} {/* Các trang con như Users, Tickets sẽ hiển thị ở đây */}
            </main>
          </div>
        </div>
      </Refine>
    </QueryClientProvider>
  );
}