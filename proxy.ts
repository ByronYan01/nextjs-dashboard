import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

// 使用代理完成此任务的优势在于，受保护路由甚至不会开始渲染，直到代理验证认证，这不仅提升了应用的安全性，也提升了性能。
export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
