import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Tutorial Gemini Pro Modern",
	description:
		"Panduan interaktif mendaftar Gemini Pro dengan tampilan modern dibuat dengan Next.js 15.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='id'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
