import "./globals.css";

export const metadata = {
  title: "Sirve-te | Cafetería",
  description: "Sistema de gestión para restaurante",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}