import { MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function ChatWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end cursor-pointer group">
      {/* Label "We Are Here!" */}
      <div className="relative mb-2">
         {/* Bạn có thể thay bằng ảnh cái nhãn cong nếu có assets, 
             đây là code giả lập vị trí của nó */}
         <div className="bg-transparent text-white font-bold text-sm transform -rotate-12 translate-y-2">
            We Are Here! 👋
         </div>
      </div>
      
      {/* Nút hình tròn xanh */}
      <div className="w-16 h-16 bg-[#00c853] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
        <MessageCircle size={32} color="white" fill="white" />
      </div>
    </div>
  );
}