import "./globals.css";
import Footer from "./components/Footer";

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
          {children}
          < Footer />
          
      </body>
    </html>
  )
}
