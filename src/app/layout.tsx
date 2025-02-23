import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import {ThemeProvider} from "@/components/theme-provider/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Data Analyst Portfolio",
    description: "Portfolio showcasing data analysis projects and experience",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
        <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
        <Navbar />
        <main className="min-h-screen">
            {children}
        </main>
        </ThemeProvider>
        </body>
        </html>
    );
}