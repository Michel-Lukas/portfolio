import './globals.css'
import Topbar from "@/app/components/Topbar/Topbar";
import Navbar from "@/app/components/Navbar/Navbar";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        <Navbar />
        <div className="content">
            {children}
        </div>
      </body>
    </html>
  )
}
