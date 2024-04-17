import { Poppins } from "next/font/google";
import "./globals.css";
import "../public/assets/css/custom.css";
const inter = Poppins({ subsets: ["latin"], weight: "400" });
import AnimatedCursor from "react-animated-cursor";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatedCursor />
        {children}
      </body>
    </html>
  );
}
