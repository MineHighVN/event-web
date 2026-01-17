"use client";

import { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  User,
  Package,
  ChevronRight,
  Loader2,
} from "lucide-react";
import { motion } from "framer-motion";

interface Location {
  code: number;
  name: string;
}

export default function OrderPage() {
  const [provinces, setProvinces] = useState<Location[]>([]);
  const [districts, setDistricts] = useState<Location[]>([]);
  const [wards, setWards] = useState<Location[]>([]);

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [loading, setLoading] = useState(false);

  const [transactionCode, setTransactionCode] = useState("");
  const [serverToken, setServerToken] = useState("");

  useEffect(() => {
    fetch("https://provinces.open-api.vn/api/p/")
      .then((res) => res.json())
      .then((data) => setProvinces(data));
  }, []);

  useEffect(() => {
    if (!selectedProvince) return;
    fetch(`https://provinces.open-api.vn/api/p/${selectedProvince}?depth=2`)
      .then((res) => res.json())
      .then((data) => {
        setDistricts(data.districts);
        setWards([]);
        setSelectedDistrict("");
        setSelectedWard("");
      });
  }, [selectedProvince]);

  useEffect(() => {
    if (!selectedDistrict) return;
    fetch(`https://provinces.open-api.vn/api/d/${selectedDistrict}?depth=2`)
      .then((res) => res.json())
      .then((data) => setWards(data.wards));
  }, [selectedDistrict]);

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const res = await fetch("/api/transaction");
        const data = await res.json();
        setTransactionCode(data.transactionCode);
        setServerToken(data.token);
      } catch {
        console.error("Không thể lấy mã giao dịch");
      }
    };
    fetchCode();
  }, []);

  const handleOrder = async () => {
    if (
      !name ||
      !phone ||
      !selectedProvince ||
      !selectedDistrict ||
      !selectedWard ||
      !addressDetail
    ) {
      alert("Vui lòng điền đầy đủ thông tin giao hàng!");
      return;
    }

    setLoading(true);

    const pName = provinces.find(
      (p) => p.code === Number(selectedProvince),
    )?.name;
    const dName = districts.find(
      (d) => d.code === Number(selectedDistrict),
    )?.name;
    const wName = wards.find((w) => w.code === Number(selectedWard))?.name;
    const fullAddress = `${addressDetail}, ${wName}, ${dName}, ${pName}`;

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          address: fullAddress,
          token: serverToken,
        }),
      });

      if (response.ok) {
        alert("🎉 Đặt hàng thành công! Chúng tôi sẽ sớm liên hệ.");
      } else {
        alert((await response.json())["error"]);
      }
    } catch {
      alert("Lỗi kết nối server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0c] text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-green-500 rounded-2xl text-black shadow-[0_0_20px_rgba(34,197,94,0.4)]">
            <Package size={28} />
          </div>
          <div>
            <h1 className="text-4xl font-black uppercase italic tracking-tighter">
              Xác nhận phần thưởng
            </h1>
            <p className="text-gray-500 italic">
              Nhập địa chỉ để chúng tôi gửi quà đến bạn
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="bg-[#111114] border border-white/5 p-8 rounded-[2.5rem] space-y-5 shadow-2xl">
              <div className="space-y-4">
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Họ và tên người nhận"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-green-500 transition-all italic"
                  />
                </div>
                <div className="relative">
                  <Phone
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Số điện thoại"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-green-500 transition-all italic"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <MapPin
                    className="absolute left-4 top-4 text-gray-500"
                    size={18}
                  />
                  <div className="space-y-3 pl-12">
                    <select
                      className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 outline-none focus:border-green-500 italic"
                      value={selectedProvince}
                      onChange={(e) => setSelectedProvince(e.target.value)}
                    >
                      <option value="">Chọn Tỉnh / Thành phố</option>
                      {provinces.map((p) => (
                        <option key={p.code} value={p.code}>
                          {p.name}
                        </option>
                      ))}
                    </select>

                    <select
                      disabled={!selectedProvince}
                      className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 outline-none focus:border-green-500 italic disabled:opacity-30"
                      value={selectedDistrict}
                      onChange={(e) => setSelectedDistrict(e.target.value)}
                    >
                      <option value="">Chọn Quận / Huyện</option>
                      {districts.map((d) => (
                        <option key={d.code} value={d.code}>
                          {d.name}
                        </option>
                      ))}
                    </select>

                    <select
                      disabled={!selectedDistrict}
                      className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 outline-none focus:border-green-500 italic disabled:opacity-30"
                      value={selectedWard}
                      onChange={(e) => setSelectedWard(e.target.value)}
                    >
                      <option value="">Chọn Phường / Xã</option>
                      {wards.map((w) => (
                        <option key={w.code} value={w.code}>
                          {w.name}
                        </option>
                      ))}
                    </select>

                    <input
                      type="text"
                      placeholder="Số nhà, tên đường..."
                      value={addressDetail}
                      onChange={(e) => setAddressDetail(e.target.value)}
                      className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 outline-none focus:border-green-500 italic"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#111114] to-[#0a0a0c] border border-green-500/20 p-8 rounded-[2.5rem] sticky top-32">
              <h3 className="text-xl font-black uppercase italic mb-6 text-green-500">
                Phần thưởng của bạn
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                  <span className="text-gray-400 italic">
                    genoreact Special Box
                  </span>
                  <span className="font-bold text-yellow-500">x1</span>
                </div>
                <div className="flex justify-between items-center text-sm px-2">
                  <span className="text-gray-500 italic">Phí vận chuyển</span>
                  <span className="text-green-500 font-bold uppercase">
                    Miễn phí
                  </span>
                </div>
              </div>

              <button
                onClick={handleOrder}
                disabled={loading}
                className="w-full py-5 bg-green-500 text-black font-black rounded-[1.5rem] uppercase italic flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all active:scale-95 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    Xác nhận đặt hàng
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
