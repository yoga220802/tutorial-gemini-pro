"use client";

import { motion } from "framer-motion";

export function Header() {
	return (
		<motion.header
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, ease: "easeInOut" }}
			className='text-center py-12'>
			<h1 className='text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
				Panduan Gemini Pro
			</h1>
			<p className='mt-4 text-lg text-slate-400 max-w-2xl mx-auto'>
				<motion.a
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.92 }}
					href='https://gsaid.short.gy/159'
					target='_blank'
					rel='noopener noreferrer'
					className='inline-block font-semibold text-purple-300 hover:text-pink-300 hover:underline underline-offset-4 transition-colors duration-200'>
					Mulai pendaftaran Gemini Pro sekarang &raquo;
				</motion.a>
			</p>
		</motion.header>
	);
}
