import './globals.css';

export const metadata = {
  title: 'File Explorer App',
  description: 'A simple file explorer using Next.js and local storage',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="__next">  
        <header>
          <h1 className=' flex justify-center font-bold text-2xl'>Welcome to the custom File Explorer </h1>
        </header>
        <main>{children}</main>
        <footer>
         
        </footer>
      </body>
    </html>
  );
}