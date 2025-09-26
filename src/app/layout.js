
import { roboto } from "@/fonts/font";
import "./globals.css"


export const metadata = {
  title: "Area Metropolitana",
  description: "Portal inmobiliario",
}; 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Metropolitana</title>
       </head>
      <body className={`${roboto.className} bg-green-200`}>{children}</body>
    </html>
  );
}


