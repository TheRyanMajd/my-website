import "./globals.css";

export const metadata = {
  title: "Ryan Majd",
  description:
    "Portfolio of Ryan Majd — Software Engineer at Lockheed Martin, UGA alum, KTP founder, and TravelByte CTO.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
