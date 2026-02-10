import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const lora = Lora({
	subsets: ["latin"],
	variable: "--font-lora",
});

export const metadata: Metadata = {
	title: "SoloPay - Bookkeeping for South African Freelancers",
	description:
		"Simple, affordable bookkeeping software built for South African freelancers and solopreneurs. Invoicing, expense tracking, VAT returns, and SARS compliance made easy.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${inter.variable} ${lora.variable}`}>
			<body className="font-sans antialiased">{children}</body>
		</html>
	);
}
