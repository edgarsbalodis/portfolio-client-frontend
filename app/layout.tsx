import React from "react";
import './globals.css';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Oxanium } from '@next/font/google';
import localFont from '@next/font/local';


// If loading a variable font, you don't need to specify the font weight
const font = Oxanium({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

const myFont = localFont({
    variable: '--font-sequel-sans',
    display: 'swap',
    src: [
        {
            path: "../public/fonts/SequelSansOTF/SequelSansMediumHead.otf",
            weight: "400",
            style: "normal",
        },
    ]
});

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        // <html lang="en" className={font.className}>
        <html lang="en" className={`${font.className} ${myFont.variable}`}>
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        <body>
            {/*<div className="customCursor"></div>*/}
            <Header />
            {children}
            <Footer />
        </body>
        </html>
    )
}
