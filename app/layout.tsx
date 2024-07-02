import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import SessionProvider from "./components/SessionProvider";
const inter = Kanit({ subsets: ["latin"], weight: "400" });
import { getServerSession } from "next-auth";
export const metadata: Metadata = {
  title: "ระบบลงนามถวายพระพร",
  description: "ลงนามถวายพระพรเพื่อชั้นมัธยมศึกษาปีที่ 6",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session  = await getServerSession()
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
