"use client";
import { useState } from "react";
import { useTable, useUpdate } from "@refinedev/core";
import { Search, ShieldAlert, CheckSquare, Square } from "lucide-react";

export default function UserListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  
  // Sử dụng filters của Refine để tìm kiếm
  const { tableQuery, setFilters } = useTable({ 
    resource: "users",
    filters: {
      initial: [{ field: "firstName", operator: "contains", value: "" }]
    }
  });
  
  const { mutate } = useUpdate();
  const users = tableQuery?.data?.data ?? [];

  // Xử lý tìm kiếm khi người dùng nhập
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilters([{ field: "firstName", operator: "contains", value }]);
  };

  // Chọn/Bỏ chọn từng người
  const toggleSelect = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Chọn tất cả
  const toggleSelectAll = () => {
    if (selectedIds.length === users.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(users.map((u: any) => u.id));
    }
  };

  // Xử lý Ban hàng loạt
  const handleBulkBan = () => {
    if (selectedIds.length === 0) return alert("Vui lòng chọn ít nhất một người dùng!");
    if (confirm(`Bạn có chắc muốn BAN ${selectedIds.length} tài khoản đã chọn?`)) {
      // Trong thực tế sẽ dùng useUpdateMany, ở đây mình giả lập loop
      selectedIds.forEach(id => {
        mutate({ resource: "users", id, values: { status: "banned" } });
      });
      alert("Đã áp dụng lệnh BAN cho các tài khoản được chọn!");
      setSelectedIds([]);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Thanh công cụ: Tìm kiếm & Áp dụng */}
      <div className="p-4 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gray-50/50">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text"
            placeholder="Tìm kiếm theo tên..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">Đã chọn: <b>{selectedIds.length}</b></span>
          <button 
            onClick={handleBulkBan}
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition font-medium"
          >
            <ShieldAlert size={18} /> Áp dụng Ban
          </button>
        </div>
      </div>

      {/* Bảng dữ liệu */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
            <tr>
              <th className="p-4 w-12">
                <button onClick={toggleSelectAll} className="text-gray-400 hover:text-blue-600">
                  {selectedIds.length === users.length && users.length > 0 ? <CheckSquare size={20} /> : <Square size={20} />}
                </button>
              </th>
              <th className="p-4 font-semibold">Tên</th>
              <th className="p-4 font-semibold">Email</th>
              <th className="p-4 font-semibold">Trạng thái</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((user: any) => (
              <tr 
                key={user.id} 
                className={`hover:bg-blue-50/30 transition ${selectedIds.includes(user.id) ? "bg-blue-50/50" : ""}`}
              >
                <td className="p-4">
                  <button onClick={() => toggleSelect(user.id)} className={selectedIds.includes(user.id) ? "text-blue-600" : "text-gray-300"}>
                    {selectedIds.includes(user.id) ? <CheckSquare size={20} /> : <Square size={20} />}
                  </button>
                </td>
                <td className="p-4 font-medium text-gray-900">{user.firstName} {user.lastName}</td>
                <td className="p-4 text-gray-600">{user.email}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${user.status === 'banned' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                    {user.status === 'banned' ? 'BANNED' : 'ACTIVE'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}