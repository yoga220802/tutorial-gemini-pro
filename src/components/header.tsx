"use client";

import { motion } from "framer-motion";

export function Header() {
	const encodedUrl = "aHR0cHM6Ly9nc2FpZC5zaG9ydC5neS8xNTk="; // base64

	return (
		<motion.header
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, ease: "easeInOut" }}
			className='text-center py-12'>
			<h1 className='text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
				Panduan Gemini Pro
			</h1>
			<p className='mt-6 text-lg text-slate-400 max-w-2xl mx-auto'>
				<motion.button
					type='button'
					role='link'
					whileHover={{ scale: 1.06, y: -2 }}
					whileTap={{ scale: 0.95 }}
					onClick={() =>
						window.open(atob(encodedUrl), "_blank", "noopener,noreferrer")
					}
					onContextMenu={(e) => e.preventDefault()}
					draggable={false}
					className='group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold tracking-wide text-sm md:text-base uppercase
						bg-gradient-to-r from-purple-600/30 via-pink-500/20 to-red-500/30
						text-purple-100 ring-1 ring-purple-500/40 hover:ring-pink-400/60
						shadow-[0_0_0_0_rgba(236,72,153,0.35)] hover:shadow-[0_0_22px_4px_rgba(236,72,153,0.25)]
						transition-all duration-300 backdrop-blur-sm select-none cursor-pointer'>
					<span className='absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-pink-500/20 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
					<span className='relative'>Mulai Pendaftaran Gemini Pro</span>
					<span
						aria-hidden='true'
						className='relative text-pink-300 group-hover:translate-x-1 transition-transform duration-300 animate-pulse'>
						→
					</span>
					<span className='absolute -inset-px rounded-xl border border-pink-400/20 group-hover:border-pink-300/50 pointer-events-none' />
				</motion.button>
			</p>
		</motion.header>
	);
}
