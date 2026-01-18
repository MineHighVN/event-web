"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { Be_Vietnam_Pro, Chakra_Petch } from "next/font/google";
// 1. THÊM IMPORT ICON CAMERA
import {
  ChevronDown,
  Sparkles,
  CheckCircle2,
  Trophy,
  ArrowRight,
  Clock,
  User,
  Flame,
  Scroll,
  Gift,
  Zap,
  Star,
  ShieldCheck,
  Lock,
  Rocket,
  Crown,
  ShieldAlert,
  Camera, // <--- Đã thêm icon này
} from "lucide-react";
import Link from "next/link";

// ... (GIỮ NGUYÊN PHẦN CẤU HÌNH FONT VÀ DATA KHÔNG THAY ĐỔI) ...

const bodyFont = Be_Vietnam_Pro({
  subsets: ["vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const displayFont = Chakra_Petch({
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const STORY_CHAPTERS = [
  {
    id: "chapter-1",
    title: "Chương I: Tàn Tích & Hy Vọng",
    icon: <Scroll className="text-yellow-500" size={32} />,
    content: [
      "Khi mặt trời cuối cùng của năm 2025 lặn xuống, đại lộ silicon của thế giới cũ bắt đầu rạn nứt. Những di sản công nghệ rời rạc, những dòng code lỗi thời dần bị vùi lấp dưới lớp bụi thời gian.",
      "Giữa tâm bão của sự sụp đổ, tại vùng đất kỹ thuật số Overlix, các kiến trúc sư tối cao của Genoract đã thực hiện một cuộc đại phẫu thuật dữ liệu. Họ không tìm thấy vàng, họ tìm thấy thứ quý giá hơn: 'Long Mạch Số' (The Digital Vein).",
      "Đó là một dòng chảy năng lượng thuần khiết, kết tinh từ giấc mơ của hàng triệu người dùng, chỉ phát sáng rực rỡ vào khoảnh khắc giao thoa giữa hai kỷ nguyên. Ai nắm giữ được Long Mạch, người đó sẽ định nghĩa lại trật tự thế giới 2026.",
    ],
  },
  {
    id: "chapter-2",
    title: "Chương II: Đại Tiệc Của Những Kẻ Khát Khao",
    icon: <Zap className="text-red-500" size={32} />,
    content: [
      "Lệnh triệu tập khẩn cấp được phát đi từ trung tâm điều hành Genoract, rung chuyển mọi ngõ ngách của cộng đồng Minecraft. 'Hỡi MineHighVN và những chiến binh mang trái tim thép, cánh cổng dẫn đến kho báu vĩnh cửu đã hé mở!'",
      "Nhưng Long Mạch không dành cho kẻ yếu. Nó được bảo vệ bởi một hệ thống phòng thủ cổ xưa gồm 3 tầng phong ấn: Tâm (Lòng trắc ẩn), Tín (Sự chính trực) và Tốc (Sự quyết đoán).",
      "Bầu trời Overlix chuyển sang màu đỏ rực. Tiếng gầm vang của các máy chủ báo hiệu một cuộc săn lùng vĩ đại bắt đầu. Bạn sẽ là người thợ rèn viết nên trang sử mới, hay chỉ là một dòng log mờ nhạt trong hư không?",
    ],
  },
  {
    id: "chapter-3",
    title: "Chương III: Nghịch Lý Phản Mã (The Paradox)",
    icon: <ShieldAlert className="text-purple-500" size={32} />,
    content: [
      "Khi những ổ khóa đầu tiên bị phá vỡ, một thực thể không xác định trỗi dậy từ các phân vùng dữ liệu bị lãng quên: 'The Null' - bóng ma của những dự án thất bại. Nó tìm cách nuốt chửng Long Mạch Số để biến 2026 thành một vòng lặp vô tận của sự trì trệ.",
      "Đội ngũ Genoract phải đối mặt với một lựa chọn sinh tử: Hy sinh những phần code ổn định nhất để tạo ra 'Vũ khí mã nguồn', trực tiếp đối đầu với thực thể hư không.",
      "Cuộc chiến không chỉ diễn ra bằng sức mạnh, mà bằng sự gắn kết. Mỗi hành động của cộng đồng Overlix lúc này là một byte dữ liệu tiếp sức cho MineHighVN trên chiến trường ảo.",
    ],
  },
  {
    id: "chapter-4",
    title: "Chương IV: Khai mở Thiên niên kỷ",
    icon: <Rocket className="text-blue-400" size={32} />,
    content: [
      "Ánh sáng xanh neon từ Long Mạch Số bùng nổ, xuyên thủng bóng tối của The Null. Những mảnh vỡ của thế giới cũ được tái cấu trúc thành một đế chế mới bền vững hơn, mạnh mẽ hơn.",
      "Phong ấn 'Tâm - Tín - Tốc' giờ đây đã chuyển hóa thành vương miện dành cho những người chiến thắng. Bảng Vàng 2026 không chỉ ghi danh những cái tên, nó ghi lại những huyền thoại đã dám bước qua giới hạn của chính mình.",
      "Hệ thống Overlix nâng cấp hoàn tất. Một chân trời mới mở ra với những tính năng chưa từng có, nơi mỗi cư dân đều mang trong mình một phần năng lượng của Long Mạch.",
    ],
  },
  {
    id: "chapter-5",
    title: "Chương V: Kỷ Nguyên Vĩnh Hằng",
    icon: <Crown className="text-orange-500" size={32} />,
    content: [
      "Tiếng chuông giao thừa vang lên trong không gian đa chiều. Genoract và MineHighVN đứng trên đỉnh tháp truyền dẫn, nhìn xuống vùng đất Overlix đang hồi sinh rực rỡ dưới ánh bình minh 2026.",
      "Hành trình này không có điểm kết thúc, bởi vì mỗi đích đến lại là khởi đầu cho một vạn tượng mới. 'Chúng ta không chỉ xây dựng một ứng dụng, chúng ta đang xây dựng một tương lai nơi sự kết nối là vĩnh cửu.'",
      "Chào mừng bạn đến với kỷ nguyên Overlix. Hãy cầm lấy chìa khóa, vì câu chuyện của riêng bạn... bây giờ mới thực sự bắt đầu.",
    ],
  },
];

const TASKS_CONFIG = [
  {
    id: 1,
    title: "Hỏa Lệnh Bài",
    subtitle: "Kết nối Fanpage",
    desc: "Ngọn lửa nhiệt huyết bắt đầu từ một dấu ấn. Hãy để lại tương tác (Like/Comment) tại thánh địa Facebook để thắp sáng ngọn đuốc đầu tiên.",
    url: "https://www.facebook.com/share/p/17jLkjxT8m/?mibextid=wwXIfr",
    icon: <Flame size={24} />,
    color: "text-orange-500",
    bgGlow: "bg-orange-500/20",
  },
  {
    id: 2,
    title: "Vũ Điệu Ánh Sáng",
    subtitle: "Tương tác TikTok",
    desc: "Bắt nhịp xu hướng, lan tỏa niềm vui. Ghé thăm TikTok Overlix và thả tim cho video mới nhất để kích hoạt năng lượng sáng tạo.",
    url: "https://www.tiktok.com/@overlix24/video/7596301072642231560",
    icon: <Sparkles size={24} />,
    color: "text-purple-400",
    bgGlow: "bg-purple-500/20",
  },
  {
    id: 3,
    title: "Hội Nghị Thượng Đỉnh",
    subtitle: "Gia nhập Discord",
    desc: "Bước vào đại sảnh Discord, nơi các anh tài hội tụ. Đây là bước cuối cùng để mở khóa kho báu và nhận thông báo lì xì độc quyền.",
    url: "https://discord.com/invite/PKr6fJtNj4",
    icon: <User size={24} />,
    color: "text-indigo-400",
    bgGlow: "bg-indigo-500/20",
  },
];

type TaskStatus = "idle" | "checking" | "done";

export default function EventPage() {
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const [completionTime, setCompletionTime] = useState<string>("");
  const [username] = useState("MineHighVN");

  const [status, setStatus] = useState<Record<number, TaskStatus>>({
    1: "idle",
    2: "idle",
    3: "idle",
  });
  const [startTimes, setStartTimes] = useState<Record<number, number | null>>({
    1: null,
    2: null,
    3: null,
  });

  const missionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const totalTasks = TASKS_CONFIG.length;
  const progress = (completedTasks.length / totalTasks) * 100;
  const isAllDone = completedTasks.length === totalTasks;

  useEffect(() => {
    if (isAllDone && !completionTime) {
      const now = new Date();
      setCompletionTime(
        now.toLocaleTimeString("vi-VN", {
          hour: "2-digit",
          minute: "2-digit",
        }) +
          " - " +
          now.toLocaleDateString("vi-VN"),
      );
    }
  }, [isAllDone, completionTime]);

  const handleStart = (id: number, url: string) => {
    window.open(url, "_blank");
    setStartTimes((prev) => ({ ...prev, [id]: Date.now() }));
    setStatus((prev) => ({ ...prev, [id]: "checking" }));
  };

  const handleVerify = (id: number) => {
    const startTime = startTimes[id];
    if (!startTime) return;
    // eslint-disable-next-line react-hooks/purity
    const elapsed = (Date.now() - startTime) / 1000;

    if (elapsed < 3) {
      setStatus((prev) => ({ ...prev, [id]: "idle" }));
      setStartTimes((prev) => ({ ...prev, [id]: null }));
      alert("Hệ thống chưa cảm nhận được sự hiện diện của bạn. Hãy thử lại!");
    } else {
      setStatus((prev) => ({ ...prev, [id]: "done" }));
      setCompletedTasks((prev) => [...prev, id]);
    }
  };

  const scrollToMissions = () => {
    missionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      ref={containerRef}
      className={`${bodyFont.className} bg-[#050505] min-h-screen text-slate-200 selection:bg-red-500/30 selection:text-red-200 overflow-x-hidden relative`}
    >
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#08080a]" />
        <motion.div className="absolute inset-0 opacity-30">
          <Image
            src="/assets/event-banner.jpg"
            fill
            className="object-cover mix-blend-overlay grayscale-[30%]"
            alt="Background"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-[#050505]/80 to-[#050505]" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-600/5 rounded-full blur-[100px]" />
      </div>

      <main className="relative bottom-8 z-10 flex flex-col items-center w-full max-w-6xl mx-auto px-4 pb-32">
        {/* --- HERO SECTION --- */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center w-full pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-6 relative"
          >
            <div className="absolute inset-0 bg-red-500 blur-[50px] opacity-20 animate-pulse" />
            <span
              className={`${displayFont.className} relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 font-bold uppercase tracking-widest text-xs backdrop-blur-md`}
            >
              <Star size={12} className="animate-spin-slow" /> Sự kiện độc quyền
              Overlix
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className={`${displayFont.className} text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 relative z-10`}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-slate-100 to-slate-500 drop-shadow-2xl">
              Truyền Thuyết
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 animate-text-shimmer bg-[length:200%_auto]">
              Khai Xuân 2026
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Một hành trình đi tìm vận may đầu năm dành riêng cho cộng đồng
            Overlix. Bạn đã sẵn sàng mở khóa rương báu chưa?
          </motion.p>

          <motion.button
            onClick={scrollToMissions}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${displayFont.className} group relative px-8 py-4 bg-red-700 text-white font-bold rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(220,38,38,0.4)] tracking-wide`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative flex items-center gap-3">
              Bắt đầu hành trình <ArrowRight size={18} />
            </span>
          </motion.button>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 opacity-50"
          >
            <ChevronDown size={32} />
          </motion.div>
        </section>

        {/* --- STORYTELLING SECTION --- */}
        <section className="w-full max-w-4xl py-20 space-y-16">
          {STORY_CHAPTERS.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500/0 via-red-500/50 to-red-500/0" />

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="hidden md:flex shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 items-center justify-center shadow-lg">
                  {chapter.icon}
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 md:hidden mb-2">
                    {chapter.icon}
                    <h2
                      className={`${displayFont.className} text-xl font-bold text-yellow-500 uppercase tracking-widest`}
                    >
                      {chapter.title}
                    </h2>
                  </div>
                  <h2
                    className={`${displayFont.className} hidden md:block text-2xl font-bold text-yellow-500 uppercase tracking-widest border-b border-white/10 pb-4 mb-4`}
                  >
                    {chapter.title}
                  </h2>

                  {chapter.content.map((p, i) => (
                    <p
                      key={i}
                      className="text-slate-300 leading-relaxed text-base md:text-lg"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* --- MISSION PROGRESS --- */}
        <div className="sticky top-6 z-50 w-full max-w-lg mb-12">
          <div className="bg-[#151518]/90 backdrop-blur-xl border border-white/10 p-4 rounded-full shadow-2xl flex items-center gap-4">
            <div className="bg-red-500/20 p-2 rounded-full text-red-500">
              <Gift size={20} />
            </div>
            <div className="flex-1">
              <div
                className={`${displayFont.className} flex justify-between text-xs font-bold uppercase mb-1.5 text-slate-400`}
              >
                <span>Tiến trình mở khóa</span>
                <span
                  className={isAllDone ? "text-green-500" : "text-yellow-500"}
                >
                  {progress.toFixed(0)}%
                </span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className={`h-full ${isAllDone ? "bg-green-500" : "bg-gradient-to-r from-red-600 to-yellow-500"}`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* --- TASKS TIMELINE --- */}
        <section ref={missionRef} className="w-full max-w-3xl relative py-10">
          <div className="absolute left-[27px] md:left-[39px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-red-500/20 via-red-500/50 to-red-500/20 hidden sm:block" />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 mb-12 flex justify-center md:justify-end md:pr-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-sm">
              <ShieldAlert
                size={16}
                className="text-yellow-500 animate-pulse"
              />
              <span className="text-yellow-500/80 text-xs md:text-sm font-medium italic tracking-wide">
                * Vui lòng chụp màn hình hoàn thành các nhiệm vụ để xác nhận
              </span>
            </div>
          </motion.div>

          <div className="space-y-12">
            {TASKS_CONFIG.map((task, index) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2 }}
                className={`relative pl-0 sm:pl-24 group ${isAllDone ? "opacity-50 blur-[2px] pointer-events-none grayscale" : "opacity-100"}`}
              >
                <div
                  className={`absolute left-0 top-0 w-[54px] h-[54px] md:w-[80px] md:h-[80px] rounded-full border-4 z-10 flex items-center justify-center bg-[#0a0a0c] transition-colors duration-500 hidden sm:flex
                  ${
                    status[task.id] === "done"
                      ? "border-green-500 text-green-500 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                      : "border-[#2a2a2e] text-slate-600 group-hover:border-red-500 group-hover:text-red-500"
                  }`}
                >
                  {status[task.id] === "done" ? (
                    <CheckCircle2 size={32} />
                  ) : (
                    <span
                      className={`${displayFont.className} text-xl font-black`}
                    >
                      {task.id}
                    </span>
                  )}
                </div>

                <div
                  className={`
                    relative p-6 md:p-8 rounded-3xl border transition-all duration-300 overflow-hidden
                    ${
                      status[task.id] === "done"
                        ? "bg-green-900/10 border-green-500/30"
                        : "bg-[#121214] border-white/5 hover:border-white/20 hover:bg-[#18181b] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                    }
                `}
                >
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-40 ${task.bgGlow}`}
                  />

                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div
                        className={`${displayFont.className} inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 text-xs font-bold uppercase mb-3 ${task.color}`}
                      >
                        {task.icon} {task.subtitle}
                      </div>
                      <h3
                        className={`${displayFont.className} text-xl md:text-2xl font-bold uppercase mb-2 ${status[task.id] === "done" ? "text-green-500 line-through decoration-2" : "text-white"}`}
                      >
                        {task.title}
                      </h3>
                      <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                        {task.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-4 border-t border-white/5 pt-6">
                    {status[task.id] === "idle" && (
                      <button
                        onClick={() => handleStart(task.id, task.url)}
                        className={`${displayFont.className} flex-1 py-3 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 uppercase text-sm tracking-wider`}
                      >
                        Thực hiện <ArrowRight size={16} />
                      </button>
                    )}

                    {status[task.id] === "checking" && (
                      <div className="flex-1 flex gap-3">
                        <button
                          className={`${displayFont.className} flex-1 py-3 bg-white/10 text-slate-400 font-bold rounded-xl cursor-not-allowed uppercase text-sm`}
                          disabled
                        >
                          Đang kiểm tra...
                        </button>
                        <button
                          onClick={() => handleVerify(task.id)}
                          className={`${displayFont.className} flex-1 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-xl animate-pulse shadow-[0_0_20px_rgba(234,179,8,0.4)] uppercase text-sm`}
                        >
                          Xác nhận
                        </button>
                      </div>
                    )}

                    {status[task.id] === "done" && (
                      <div
                        className={`${displayFont.className} w-full py-3 bg-green-500/10 text-green-400 font-bold rounded-xl border border-green-500/20 flex items-center justify-center gap-2 uppercase text-sm`}
                      >
                        <ShieldCheck size={18} /> Đã hoàn thành
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-col items-center justify-center text-center opacity-40 grayscale"
          >
            <Lock size={48} className="mb-4 text-slate-600" />
            <p
              className={`${displayFont.className} text-slate-500 uppercase tracking-widest font-bold`}
            >
              Hoàn thành để mở khóa kho báu
            </p>
          </motion.div>
        </section>
      </main>

      {/* --- VICTORY MODAL --- */}
      <AnimatePresence>
        {isAllDone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-ping" />
              <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-yellow-500 rounded-full animate-ping delay-300" />
              <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-purple-500 rounded-full animate-ping delay-700" />
            </div>

            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateX: 90 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              transition={{ type: "spring", damping: 15 }}
              className="relative w-full max-w-lg"
            >
              <div className="bg-gradient-to-b from-[#1a1a1c] to-black border border-yellow-500/50 p-1 rounded-[2.5rem] shadow-[0_0_100px_rgba(234,179,8,0.3)]">
                <div className="bg-[#0a0a0c] rounded-[2.3rem] p-8 md:p-10 text-center relative overflow-hidden">
                  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-yellow-500/40 blur-[80px]" />

                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 mb-6 inline-block"
                  >
                    <Trophy
                      size={80}
                      className="text-yellow-500 drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]"
                    />
                    <Sparkles className="absolute -top-2 -right-4 text-white animate-bounce" />
                  </motion.div>

                  <h2
                    className={`${displayFont.className} text-4xl md:text-5xl font-black uppercase italic mb-2 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text text-transparent`}
                  >
                    Tuyệt Vời!
                  </h2>
                  <p className="text-slate-400 mb-8 font-medium">
                    Bạn đã chính thức chinh phục thử thách Khai Xuân Overlix.
                  </p>

                  <div className="bg-white/5 rounded-2xl p-6 mb-6 border border-white/10 space-y-4">
                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                      <div
                        className={`${displayFont.className} flex items-center gap-2 text-slate-400 text-xs font-bold uppercase`}
                      >
                        <User size={14} /> Người chơi
                      </div>
                      <div className="font-bold text-white text-lg">
                        {username}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div
                        className={`${displayFont.className} flex items-center gap-2 text-slate-400 text-xs font-bold uppercase`}
                      >
                        <Clock size={14} /> Thời gian
                      </div>
                      <div className="text-yellow-500 font-mono text-sm">
                        {completionTime}
                      </div>
                    </div>
                  </div>

                  {/* --- DÒNG CHỮ ĐƯỢC THÊM VÀO --- */}
                  <div className="flex items-center justify-center gap-2 text-yellow-500/80 text-sm font-medium mb-6 animate-pulse">
                    <Camera size={18} />
                    <span>Vui lòng chụp màn hình để xác nhận</span>
                  </div>
                  {/* ---------------------------------- */}

                  <Link href="" className="block w-full">
                    <button
                      className={`${displayFont.className} w-full py-5 bg-gradient-to-r from-yellow-600 to-amber-700 text-white font-black rounded-xl uppercase tracking-wider shadow-lg hover:shadow-yellow-500/20 active:scale-95 transition-all flex items-center justify-center gap-2`}
                    >
                      <Gift size={20} /> Đăng ký trước ngay
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
