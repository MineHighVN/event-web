"use client";

import { useState } from "react";
import { X, Mail, Lock, User } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-[#16161a] border border-gray-800 rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-white">
          <X size={24} />
        </button>

        <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="text-gray-400 mb-8 text-sm italic">
          {isLogin ? "Đăng nhập để tiếp tục hành trình." : "Tham gia Overlix và bắt đầu thử thách."}
        </p>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {/* 1. USERNAME - Chỉ hiện khi Đăng ký */}
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="text" 
                placeholder="Username" 
                className="w-full bg-black/50 border border-gray-800 rounded-xl py-3 pl-12 pr-4 text-white focus:border-blue-500 outline-none transition-all italic" 
              />
            </div>
          )}

          {/* 2. EMAIL - Luôn hiện */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-black/50 border border-gray-800 rounded-xl py-3 pl-12 pr-4 text-white focus:border-blue-500 outline-none transition-all italic" 
            />
          </div>

          {/* 3. MẬT KHẨU - Luôn hiện */}
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="password" 
              placeholder="Mật khẩu" 
              className="w-full bg-black/50 border border-gray-800 rounded-xl py-3 pl-12 pr-4 text-white focus:border-blue-500 outline-none transition-all italic" 
            />
          </div>

          {/* 4. XÁC NHẬN MẬT KHẨU - Chỉ hiện khi Đăng ký */}
          {!isLogin && (
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="password" 
                placeholder="Xác nhận mật khẩu" 
                className="w-full bg-black/50 border border-gray-800 rounded-xl py-3 pl-12 pr-4 text-white focus:border-blue-500 outline-none transition-all italic" 
              />
            </div>
          )}

          <button className="w-full bg-white text-black font-black py-3 rounded-xl hover:bg-gray-200 transition-all active:scale-95 mt-2 uppercase italic tracking-widest">
            {isLogin ? "Đăng nhập" : "Đăng ký"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm italic">
            {isLogin ? "Chưa có mật danh?" : "Đã là thành viên?"}{" "}
            <button 
              onClick={() => setIsLogin(!isLogin)} 
              className="text-white font-black hover:underline uppercase ml-1"
            >
              {isLogin ? "Đăng ký ngay" : "Đăng nhập"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}