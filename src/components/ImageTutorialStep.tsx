"use client";

import { motion, type Variants, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ImageTutorialStepProps {
	number: number;
	title: string;
	description: string;
	imageUrl: string;
}

export function ImageTutorialStep({
	number,
	title,
	description,
	imageUrl,
}: ImageTutorialStepProps) {
	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: "easeOut" },
		},
	};

	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);

	return (
		<>
			<motion.div
				variants={itemVariants}
				whileHover={{
					scale: 1.015,
					transition: { type: "spring", stiffness: 220, damping: 18 },
				}}
				className='bg-slate-900/50 border border-slate-800 hover:border-slate-700 rounded-xl overflow-hidden mb-8 shadow-sm hover:shadow-lg transition-shadow cursor-default'>
				<div className='p-6'>
					<span className='inline-block bg-purple-600/20 text-purple-300 text-sm font-bold px-3 py-1 rounded-full mb-3'>
						Langkah {number}
					</span>
					<h3 className='text-2xl font-bold text-slate-100'>{title}</h3>
					<p className='mt-2 text-slate-400 max-w-2xl'>{description}</p>
				</div>
				<div
					className='bg-black/20 p-4 md:p-6 cursor-zoom-in group'
					onClick={() => setOpen(true)}
					aria-label='Perbesar gambar langkah'>
					<Image
						src={imageUrl}
						alt={`Langkah ${number}: ${title}`}
						width={1200}
						height={700}
						className='rounded-lg shadow-lg border border-slate-700 group-hover:border-slate-600 transition-colors'
						onError={(e) => {
							e.currentTarget.src =
								"https://placehold.co/1200x700/0A0A0A/4A5568?text=Gagal+memuat+gambar";
						}}
					/>
					<p className='mt-2 text-xs text-slate-500 text-center'>
						Klik untuk melihat penuh
					</p>
				</div>
			</motion.div>

			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4'
						onClick={() => setOpen(false)}
						aria-modal='true'
						role='dialog'>
						<motion.div
							initial={{ scale: 0.92, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							onClick={(e) => e.stopPropagation()}
							className='relative max-w-6xl w-full'>
							<button
								onClick={() => setOpen(false)}
								className='absolute -top-10 right-0 text-slate-300 hover:text-white text-sm px-3 py-1 rounded border border-slate-600 hover:border-slate-400 transition-colors'
								aria-label='Tutup gambar penuh'>
								Tutup (Esc)
							</button>
							<Image
								src={imageUrl}
								alt={`Langkah ${number}: ${title} (Tampilan penuh)`}
								width={1920}
								height={1080}
								className='w-full h-auto rounded-lg shadow-2xl'
								priority
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
