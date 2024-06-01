import NavBackground from "../components/layout/Header/NavBackground";
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <main>
          <NavBackground />
          {children}
        </main>
      </body>
    </html>
  );
}
