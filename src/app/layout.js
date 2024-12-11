import localFont from "next/font/local";
import "./globals.css";
import Header from "@/componentes/Header";

const chomsky = localFont({
  src: "./fonts/chomsky.woff2",
  variable: "--font-family-logo",
  weight: "100 900",
});
const crimsonPro = localFont({
  src: "./fonts/crimson-pro.woff2",
  variable: "--font-family-serif",
  weight: "100 900",
});
const crimsonProItalic = localFont({
  src: "./fonts/crimson-pro-italic.woff2",
  variable: "--font-family-sans-serif",
  weight: "100 900",
});

export const metadata = {
  title: "New Grid Times",
  description: "The latest news from the world of CSS Grid Layout.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${crimsonPro.variable} ${chomsky.variable} ${crimsonProItalic.variable}`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
