import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter2",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins ",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata = {
  title: "OrderEase",
  description: "OrderEase landing page",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans ">{children}</body>
    </html>
  );
}
