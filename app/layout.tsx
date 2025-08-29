import '@/app/ui/global.css';
import { interMilan,Lusitana } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={`${interMilan.className} antialiased`}>{children}</body>
    </html>
  );
}
