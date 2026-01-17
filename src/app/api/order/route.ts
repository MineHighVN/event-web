import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "your-secret-key-123",
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, address, token } = body;

    let verifiedCode = "";
    try {
      const { payload } = await jwtVerify(token, SECRET);
      verifiedCode = payload.code as string;
    } catch {
      return NextResponse.json(
        { error: "Mã giao dịch hết hạn hoặc không hợp lệ" },
        { status: 400 },
      );
    }

    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!discordWebhookUrl)
      return NextResponse.json({ error: "Server error" }, { status: 500 });

    const response = await fetch(discordWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [
          {
            title: "ĐƠN HÀNG MỚI!",
            color: 5763719,
            fields: [
              { name: "Khách hàng", value: name, inline: true },
              { name: "Điện thoại", value: phone, inline: true },
              {
                name: "Nội dung giao dịch",
                value: `**${verifiedCode}**`,
                inline: false,
              },
              { name: "Địa chỉ", value: address },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });

    if (!response.ok) throw new Error("Gửi tới Discord thất bại");
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
