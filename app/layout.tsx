import "./globals.css";
import Footer from "./components/Footer";

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
          {children}
          < Footer />
      </body>
    </html>
  )
}