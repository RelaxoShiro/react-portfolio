import ClientLayout from "./ClientLayout";
import "../styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
