import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hazem Yahea portfolio",
  description: "my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} class=" container mx-auto">
        <Nav />
        {children}
      </body>
    </html>
  );
}
