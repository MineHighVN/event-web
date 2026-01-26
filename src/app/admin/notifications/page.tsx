"use client";
import { useState } from "react";
import { useList, useCreate } from "@refinedev/core";
import { Send, Users, Globe, CheckCircle2 } from "lucide-react";

export default function NotificationPage() {
  const [isGlobal, setIsGlobal] = useState(true);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [message, setMessage] = useState({ title: "", content: "" });

  // Lấy danh sách người dùng để chọn (nếu không gửi toàn server)
  const { data: userData } = useList({ resource: "users" });
  const { mutate: sendNotification, isLoading } = useCreate();

  const handleToggleUser = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleSend = () => {
    if (!message.title || !message.content) return alert("Vui lòng nhập đầy đủ nội dung!");
    
    sendNotification({
      resource: "notifications",
      values: {
        ...message,
        type: isGlobal ? "all" : "specific",
        recipients: isGlobal ? "everyone" : selectedIds,
        sentAt: new Date(),
      }
    }, {
      onSuccess: () => {
        alert(`Đã gửi thông báo ${isGlobal ? "cho toàn server" : "cho " + selectedIds.length + " người"} thành công!`);
        setMessage({ title: "", content: "" });
        setSelectedIds([]);
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Trung tâm Thông báo</h2>
        <div className="flex bg-gray-200 p-1 rounded-lg">
          <button 
            onClick={() => setIsGlobal(true)}
            className={`px-4 py-2 rounded-md flex items-center gap-2 transition ${isGlobal ? "bg-white shadow text-blue-600" : "text-gray-500"}`}
          >
            <Globe size={18} /> Toàn Server
          </button>
          <button 
            onClick={() => setIsGlobal(false)}
            className={`px-4 py-2 rounded-md flex items-center gap-2 transition ${!isGlobal ? "bg-white shadow text-blue-600" : "text-gray-500"}`}
          >
            <Users size={18} /> Chọn người dùng
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cột trái: Soạn nội dung */}
        <div className="md:col-span-2 space-y-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tiêu đề thông báo</label>
            <input 
              type="text" 
              className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ví dụ: Bảo trì hệ thống..."
              value={message.title}
              onChange={(e) => setMessage({...message, title: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nội dung chi tiết</label>
            <textarea 
              rows={6}
              className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập nội dung thông báo tại đây..."
              value={message.content}
              onChange={(e) => setMessage({...message, content: e.target.value})}
            />
          </div>
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-blue-700 disabled:bg-gray-400"
          >
            <Send size={20} /> {isLoading ? "Đang gửi..." : "Phát hành thông báo"}
          </button>
        </div>

        {/* Cột phải: Danh sách chọn (nếu không phải gửi Global) */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-fit">
          <h3 className="font-bold mb-4 flex items-center gap-2">
            {isGlobal ? <Globe className="text-green-500" /> : <Users className="text-blue-500" />}
            {isGlobal ? "Đối tượng: Tất cả" : "Chọn người nhận"}
          </h3>
          
          {isGlobal ? (
            <div className="p-4 bg-green-50 text-green-700 rounded-lg text-sm italic">
              Thông báo này sẽ được gửi tới tất cả người dùng trên hệ thống hiện tại.
            </div>
          ) : (
            <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
              {userData?.data.map((user: any) => (
                <div 
                  key={user.id} 
                  onClick={() => handleToggleUser(user.id)}
                  className={`flex items-center justify-between p-2 rounded-md cursor-pointer border transition ${selectedIds.includes(user.id) ? "border-blue-500 bg-blue-50" : "border-gray-100 hover:bg-gray-50"}`}
                >
                  <span className="text-sm">{user.firstName} {user.lastName}</span>
                  {selectedIds.includes(user.id) && <CheckCircle2 size={16} className="text-blue-500" />}
                </div>
              ))}
            </div>
          )}
          {!isGlobal && (
            <p className="mt-4 text-xs text-gray-500 font-medium">
              Đã chọn: <span className="text-blue-600">{selectedIds.length}</span> người dùng
            </p>
          )}
        </div>
      </div>
    </div>
  );
}