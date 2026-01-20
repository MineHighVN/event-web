import { Download } from "lucide-react";

const DownloadButton = () => {
  return (
    <button
      onClick={() => {
        window.open(
          "https://play.google.com/store/apps/details?id=net.overlix",
          "_blank",
        );
      }}
      className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-xl font-bold text-lg hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
    >
      <Download size={20} />
      Download App
    </button>
  );
};

export default DownloadButton;
