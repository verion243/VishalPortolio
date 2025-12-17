import "./globals.css";


export const metadata = {
  title: "Vishal Kumar",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        {children}
      </body>
    </html>
  );
}
