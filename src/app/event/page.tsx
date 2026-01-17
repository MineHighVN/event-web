"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ChevronDown,
  Sparkles,
  CheckCircle2,
  Trophy,
  ArrowRight,
  Clock,
  User,
} from "lucide-react";
import Link from "next/link";

// --- CẤU HÌNH NHIỆM VỤ  ---
const TASKS_CONFIG = [
  {
    id: 1,
    title: "Nhiệm vụ #1",
    desc: "Tương tác với bài viết trong nhóm facebook chính thức",
    url: "https://www.facebook.com/share/p/17jLkjxT8m/?mibextid=wwXIfr",
  },
  {
    id: 2,
    title: "Nhiệm vụ #2",
    desc: "Tương tác với bài đăng trên kênh ttktok chính thức",
    url: "https://www.tiktok.com/@overlix24/video/7596301072642231560?_d=secCgYIASAHKAESPgo8mfQZJZisdISwu1%2BTGginYrt0naml1jJVti3jcb%2FBhvZE%2BUvPAIgnofa1dtQxCfZFO%2BF9WOELxDcCvksRGgA%3D&_r=1&_svg=1&checksum=2e05a0bc1efe482713bfc3ceb4473412e868e2b81f6f40c47e9059c551b6e1ca&enable_card_refactor=1&item_author_type=1&link_reflow_popup_iteration_sharer=%7B%22follow_to_play_duration%22%3A-1%2C%22click_empty_to_play%22%3A1%2C%22dynamic_cover%22%3A1%2C%22profile_clickable%22%3A1%7D&mid=7358898427880982545&oa_reverse=v1&preview_pb=0&region=VN&sec_user_id=MS4wLjABAAAAb6Ge-xhz0UW5lZaPPLW-Eu8Q1x-0_94TYn8M0tKEQcCsCtBUtBM26irXWrRBfFKQ&share_app_id=1180&share_item_id=7596301072642231560&share_link_id=04F083CA-FD6A-4DAA-9118-2345EC034642&share_region=VN&share_scene=2&sharer_language=vi&social_share_type=0&source=h5_t&timestamp=1768654853&tt_from=copy&u_code=emkg1lfim4b28l&ug_btm=b8727%2Cb2878&user_id=7558353323515921429&utm_campaign=client_share&utm_medium=ios&utm_source=copy",
  },
  {
    id: 3,
    title: "Nhiệm vụ #3",
    desc: "Tham gia kênh discord chính thức",
    url: "https://discord.com/invite/PKr6fJtNj4",
  },
];

type TaskStatus = "idle" | "checking" | "done";

export default function EventPage() {
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const [completionTime, setCompletionTime] = useState<string>("");
  const [username] = useState("xnxx");

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
  const [errorTask, setErrorTask] = useState<number | null>(null);

  const missionRef = useRef<HTMLDivElement>(null);
  const totalTasks = TASKS_CONFIG.length;
  const progress = (completedTasks.length / totalTasks) * 100;
  const isAllDone = completedTasks.length === totalTasks;

  // 1. Ghi lại thời gian hoàn thành
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

  // 2. Logic ẩn hiện nút nổi
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const missionTop = missionRef.current?.offsetTop || 0;
      const viewportHeight = window.innerHeight;
      const hideThreshold = missionTop - viewportHeight / 2;

      if (scrollY > 300 && scrollY < hideThreshold) {
        setShowFloatingBtn(true);
      } else {
        setShowFloatingBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. Xử lý nhiệm vụ
  const handleStart = (id: number, url: string) => {
    window.open(url, "_blank");
    setStartTimes((prev) => ({ ...prev, [id]: Date.now() }));
    setStatus((prev) => ({ ...prev, [id]: "checking" }));
    setErrorTask(null);
  };

  const handleVerify = (id: number) => {
    const startTime = startTimes[id];
    if (!startTime) return;
    // eslint-disable-next-line react-hooks/purity
    const elapsed = (Date.now() - startTime) / 1000;

    if (elapsed < 3) {
      setErrorTask(id);
      setStatus((prev) => ({ ...prev, [id]: "idle" }));
      setStartTimes((prev) => ({ ...prev, [id]: null }));
      alert("Vui lòng thực hiện lại nhiệm vụ");
    } else {
      setStatus((prev) => ({ ...prev, [id]: "done" }));
      setCompletedTasks((prev) => [...prev, id]);
      setErrorTask(null);
    }
  };

  const scrollToMissions = () => {
    missionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-[#0a0a0c] min-h-screen text-white pb-32 overflow-x-hidden">
      {/* SECTION 1: HERO */}
      <section className="relative h-[70vh] md:h-[75vh] w-full flex flex-col items-center justify-center">
        <Image
          src="/assets/event-banner.png"
          fill
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          alt="Banner"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0c] via-transparent to-transparent" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-9xl font-black italic uppercase tracking-tighter mb-6 md:mb-8 drop-shadow-2xl"
          >
            Nafu Event
          </motion.h1>
          <motion.button
            onClick={scrollToMissions}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="px-8 py-4 md:px-12 md:py-5 bg-yellow-500 text-black font-black rounded-2xl text-lg md:text-xl shadow-[0_0_40px_rgba(234,179,8,0.5)] uppercase italic active:scale-95 transition-transform"
          >
            Tham gia ngay
          </motion.button>
        </div>
      </section>

      {/* SECTION 2: LOREM CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-32 text-gray-500 italic leading-relaxed text-sm md:text-lg">
        <p className="mb-6 border-l-4 border-yellow-500 pl-4 md:pl-6 text-white font-bold italic">
          &quot;Thành công chỉ đến với người kiên nhẫn. Hoàn thành nhiệm vụ để
          mở khóa rương báu Overlix.&quot;
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>

      {/* SECTION 3: PROGRESS BAR (STICKY) */}
      <div className="sticky top-20 md:top-28 z-40 max-w-xl mx-auto px-4 md:px-6 mb-12 md:mb-16">
        <div className="bg-black/80 backdrop-blur-xl p-4 md:p-5 rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl">
          <div className="flex justify-between text-[10px] md:text-xs font-black uppercase mb-2 md:mb-3 italic">
            <span className="flex items-center gap-2 text-yellow-500">
              <Sparkles size={14} /> Tiến độ
            </span>
            <span>
              {completedTasks.length} / {totalTasks}
            </span>
          </div>
          <div className="h-2 md:h-2.5 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div
              animate={{ width: `${progress}%` }}
              className="h-full bg-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.6)]"
            />
          </div>
        </div>
      </div>

      {/* SECTION 4: MISSIONS LIST */}
      <section
        ref={missionRef}
        className="max-w-4xl mx-auto px-4 md:px-6 py-10 relative"
      >
        <div
          className={`space-y-3 md:space-y-4 transition-all duration-1000 ${isAllDone ? "blur-xl opacity-20 pointer-events-none scale-95" : ""}`}
        >
          {TASKS_CONFIG.map((task) => (
            <div
              key={task.id}
              className={`p-4 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border transition-all duration-500 flex flex-col md:flex-row md:items-center md:justify-between gap-4 ${
                status[task.id] === "done"
                  ? "bg-green-500/5 border-green-500/40"
                  : "bg-[#111114] border-white/5"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 md:w-14 md:h-14 shrink-0 rounded-xl flex items-center justify-center font-black text-sm md:text-xl ${
                    status[task.id] === "done"
                      ? "bg-green-500 text-black rotate-[360deg] transition-transform duration-700"
                      : "bg-white/5 text-gray-500"
                  }`}
                >
                  {status[task.id] === "done" ? (
                    <CheckCircle2 size={20} />
                  ) : (
                    task.id
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-base md:text-xl uppercase italic tracking-tight leading-none mb-1">
                    {task.title}
                  </h3>
                  <p className="text-gray-500 text-[10px] md:text-sm italic">
                    {task.desc}
                  </p>
                </div>
              </div>

              <div className="flex justify-end md:block relative">
                {status[task.id] === "idle" && (
                  <button
                    onClick={() => handleStart(task.id, task.url)}
                    className="px-5 py-2 md:px-8 md:py-3 bg-white text-black font-black rounded-xl uppercase italic text-[10px] md:text-sm shadow-md active:scale-95 transition-all"
                  >
                    Làm ngay
                  </button>
                )}
                {status[task.id] === "checking" && (
                  <button
                    onClick={() => handleVerify(task.id)}
                    className="px-5 py-2 md:px-8 md:py-3 bg-yellow-500 text-black font-black rounded-xl uppercase italic text-[10px] md:text-sm animate-pulse shadow-lg"
                  >
                    Kiểm tra
                  </button>
                )}
                {status[task.id] === "done" && (
                  <div className="flex items-center gap-1.5 text-green-500 font-black italic uppercase px-4 py-1.5 bg-green-500/10 rounded-xl border border-green-500/20 text-[10px] md:text-xs">
                    <CheckCircle2 size={14} /> Hoàn thành
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* VICTORY OVERLAY */}
        <AnimatePresence>
          {isAllDone && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 z-50 flex items-center justify-center p-4 min-h-[400px]"
            >
              <div className="bg-yellow-500 text-black p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-[0_0_80px_rgba(234,179,8,0.7)] text-center w-full max-w-lg border-[4px] md:border-[6px] border-black relative">
                <Trophy size={56} className="mx-auto mb-4 animate-bounce" />
                <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-2 leading-none">
                  Victory!
                </h2>
                <p className="font-bold text-xs md:text-base mb-6 md:mb-8 uppercase opacity-90">
                  Sứ mệnh hoàn tất
                </p>

                <div className="bg-black/10 rounded-2xl p-4 md:p-5 mb-8 space-y-3 font-black italic text-xs md:text-sm text-left">
                  <div className="flex justify-between items-center border-b border-black/10 pb-2">
                    <span className="flex items-center gap-2">
                      <User size={16} /> Username:
                    </span>
                    <span className="uppercase text-black/70">{username}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <Clock size={16} /> Thời gian:
                    </span>
                    <span>{completionTime}</span>
                  </div>
                </div>

                <Link href="/order">
                  <button className="w-full py-4 md:py-5 bg-black text-white font-black rounded-2xl md:rounded-[2rem] uppercase italic flex items-center justify-center gap-3 hover:bg-gray-900 transition-all shadow-xl active:scale-95">
                    Nhận thưởng ngay <ArrowRight size={20} />
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* FLOATING ACTION BUTTON */}
      <AnimatePresence>
        {showFloatingBtn && !isAllDone && (
          <motion.button
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            onClick={scrollToMissions}
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex items-center justify-center gap-2 bg-yellow-500 text-black px-5 py-3 md:px-8 md:py-4 rounded-full font-black shadow-[0_10px_30px_rgba(234,179,8,0.5)] uppercase italic text-[10px] md:text-xs active:scale-90 transition-transform"
          >
            <ChevronDown size={18} className="animate-bounce" />
            <span className="hidden sm:inline">Làm nhiệm vụ</span>
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
