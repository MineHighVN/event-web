"use client";
import { useList } from "@refinedev/core";
import { 
  Users, 
  Ticket, 
  MessageSquare, 
  Activity, 
  Clock, 
  ExternalLink 
} from "lucide-react";

export default function Dashboard() {
  // Lấy dữ liệu thực tế từ Refine để hiển thị số lượng
  const { data: users } = useList({ resource: "users" });
  const { data: tickets } = useList({ resource: "posts" }); // Tạm dùng posts làm tickets

  const stats = [
    { label: "Tổng người dùng", value: users?.total || 0, icon: Users, color: "text-blue-600", bg: "bg-blue-100" },
    { label: "Đang online", value: "158", icon: Activity, color: "text-green-600", bg: "bg-green-100" },
    { label: "Ticket chưa xử lý", value: tickets?.total || 0, icon: Ticket, color: "text-orange-600", bg: "bg-orange-100" },
    { label: "Thông báo đã gửi", value: "42", icon: MessageSquare, color: "text-purple-600", bg: "bg-purple-100" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Báo cáo hệ thống</h2>
        <p className="text-sm text-gray-500 italic">Cập nhật mới nhất: {new Date().toLocaleTimeString()}</p>
      </div>

      {/* 1. Grid các thẻ thống kê nhanh */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className={`p-3 rounded-lg ${item.bg} ${item.color}`}>
              <item.icon size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">{item.label}</p>
              <h3 className="text-2xl font-bold text-gray-900">{item.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 2. Danh sách Ticket mới nhất (Chiếm 2/3) */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
              <Clock size={18} className="text-blue-500" /> Ticket cần phản hồi
            </h3>
            <button className="text-blue-600 text-sm font-medium hover:underline">Xem tất cả</button>
          </div>
          <div className="divide-y divide-gray-50">
            {tickets?.data.slice(0, 5).map((ticket: any) => (
              <div key={ticket.id} className="p-4 hover:bg-gray-50 transition flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900 truncate max-w-md">{ticket.title}</p>
                  <p className="text-xs text-gray-400 mt-1">Gửi bởi: User #{ticket.id} • 15 phút trước</p>
                </div>
                <span className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded-md font-bold">Mới</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Tình trạng máy chủ & Bản đồ (Chiếm 1/3) */}
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-4">Trạng thái Server</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>CPU Usage</span>
                <span className="font-bold text-green-600">24%</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full w-[24%]"></div>
              </div>
              <div className="flex justify-between text-sm">
                <span>Memory</span>
                <span className="font-bold text-blue-600">3.2 / 8 GB</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[40%]"></div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-5 rounded-xl text-white shadow-lg">
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <ExternalLink size={18} /> Quản lý Bản đồ
            </h3>
            <p className="text-sm opacity-80 mb-4 text-pretty">Bạn đang có 4 vùng bản đồ cần được cập nhật tọa độ.</p>
            <button className="w-full py-2 bg-white text-blue-700 rounded-lg font-bold text-sm hover:bg-opacity-90">
              Mở Map Editor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}