import { NextResponse } from "next/server";
import { SignJWT } from "jose";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

const generateUniqueCode = () => {
  const timePart = Date.now().toString(36).slice(-6).toUpperCase();

  const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();

  return `GENO-${timePart}${randomPart}`;
};

export async function GET() {
  const transactionCode = generateUniqueCode();

  const token = await new SignJWT({ code: transactionCode })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30m")
    .sign(SECRET);

  return NextResponse.json({ transactionCode, token });
}
