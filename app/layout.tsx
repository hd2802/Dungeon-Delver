import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header"

export const metadata = {
  title: "Dungeon Delver: a D&D Companion Website"
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
          {children}
          < Footer />
      </body>
    </html>
  )
}