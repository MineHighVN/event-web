import Image from 'next/image';

export default function Hero() {
  return (
<section className="relative min-h-screen bg-black flex items-center px-6 md:px-20 pt-32 md:pt-48 overflow-hidden">      {}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/30 blur-[180px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        
        {/* 2. PHẦN CHỮ (BÊN TRÁI) */}
        <div className="flex-1 text-left">
          <h1 className="text-5xl md:text-[80px] font-bold text-white leading-[1.05] mb-8 tracking-tight">
            Mở rộng mạng lưới kết <br /> nối toàn cầu
          </h1>
          <p className="text-[#8a8a8e] text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-medium">
            Khám phá và kết nối những người bạn mới. Bắt đầu hành trình của bạn 
            và tìm kiếm những mối quan hệ ý nghĩa trên khắp thế giới.
          </p>
          <button className="bg-white text-black px-12 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all active:scale-95">
            Download
          </button>
        </div>

        {/* 3. PHẦN ẢNH HERO (BÊN PHẢI) */}
        <div className="flex-1 w-full flex justify-end items-center">
          <div className="relative w-full max-w-[700px] aspect-square">
            <Image 
              src="/assets/minecraft-chars.png" 
              alt="Overlix Minecraft Characters" 
              fill // Tự động lấp đầy khung
              priority // Ưu tiên tải ảnh này đầu tiên (LCP)
              className="object-contain" // Giữ nguyên tỷ lệ ảnh
              sizes="(max-width: 768px) 100vw, 50vw" // Tối ưu kích thước cho Mobile/Desktop
            />
          </div>
        </div>

      </div>
    </section>
  );
}