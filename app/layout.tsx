import '@/app/ui/global.css';
import {inter} from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}
      <script 
        type="text/javascript" 
        id="hs-script-loader" 
        async defer 
        src="//js-na1.hs-scripts.com/48580043.js">
      </script>
    </body>
    </html>
  );
}
