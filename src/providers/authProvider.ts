// src/providers/authProvider.ts
import { AuthProvider } from "@refinedev/core";

export const authProvider: AuthProvider = {
  login: async ({ email, password }) => {
    // Giả lập: Cứ nhập đúng admin@gmail.com / 123456 là cho vào
    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("auth", "true");
      return { success: true, redirectTo: "/admin" };
    }
    return { success: false, error: { message: "Sai tài khoản hoặc mật khẩu!", name: "Lỗi" } };
  },
  logout: async () => {
    localStorage.removeItem("auth");
    return { success: true, redirectTo: "/admin/login" };
  },
  check: async () => {
    const auth = localStorage.getItem("auth");
    if (auth) return { authenticated: true };
    return { authenticated: false, redirectTo: "/admin/login" };
  },
  getPermissions: async () => null,
  getIdentity: async () => ({ id: 1, name: "Admin Trình", avatar: "https://i.pravatar.cc/300" }),
  onError: async (error) => ({ error }),
};