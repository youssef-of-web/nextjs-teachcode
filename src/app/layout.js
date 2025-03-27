import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Provider from "@/components/Provider";
import {Inter} from "next/font/google";


const inter = Inter( {subsets: ['latin']})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
        <Navbar/>
        <Provider>
          {children}
        </Provider>
      </ThemeProvider>
      </body>
    </html>
  );
}
