"use client";
import { useList } from "@refinedev/core";
import { useState } from "react";

export default function TicketPage() {
  const { data } = useList({ resource: "posts" });
  const [selected, setSelected] = useState<any>(null);

  return (
    <div className="flex gap-6 h-[500px]">
      <div className="w-1/3 bg-white border rounded-lg overflow-y-auto">
        <div className="p-4 font-bold border-b">Tickets mới</div>
        {data?.data.map((t: any) => (
          <div key={t.id} onClick={() => setSelected(t)} className={`p-4 border-b cursor-pointer ${selected?.id === t.id ? 'bg-blue-50' : ''}`}>
            <p className="font-medium truncate">{t.title}</p>
          </div>
        ))}
      </div>
      <div className="flex-1 bg-white border rounded-lg p-6 flex flex-col">
        {selected ? (
          <>
            <h3 className="font-bold text-lg mb-4">{selected.title}</h3>
            <div className="flex-1 bg-gray-50 p-4 rounded mb-4">Nội dung ticket...</div>
            <textarea className="border p-2 w-full rounded" placeholder="Nhập câu trả lời..." />
            <button className="bg-blue-600 text-white p-2 mt-2 rounded">Gửi phản hồi</button>
          </>
        ) : <p className="text-gray-400">Chọn ticket để trả lời</p>}
      </div>
    </div>
  );
}