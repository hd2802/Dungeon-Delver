import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header"

require("dotenv").config();

export const metadata = {
  title: "Dungeon Delver: a D&D Companion Website",
  icons: {
    icon: "/favicon-32x32.ico",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        < Header />
        <div className="topcover"></div>
        {children}
        < Footer />
      </body>
    </html>
  )
}
