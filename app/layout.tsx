import "./globals.css";

export const metadata = {
  title: "Raegan's Portfolio",
  description: "Showcasing projects and skills in web development and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
