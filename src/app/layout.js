import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Abdul ahad - Portfolio",
  description: "Hi this is abdul ahad",
  icons: {
    icon: "https://th.bing.com/th/id/OIP.15WuJhgPPZGNlSgTwZ_rLAHaEp?w=276&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", // or "/icon.png" or "/icon.svg"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
