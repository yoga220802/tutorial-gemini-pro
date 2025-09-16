"use client";

import { motion, type Variants } from "framer-motion";
import { AlertTriangle, Info } from "lucide-react";

export function ImportantNote() {
	const container: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.18 },
		},
	};
	const card: Variants = {
		hidden: { opacity: 0, y: 25, scale: 0.97 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] },
		},
	};

	return (
		<motion.div
			variants={container}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.35 }}>
			<motion.div
				variants={card}
				whileHover={{ y: -4, scale: 1.01 }}
				transition={{ type: "spring", stiffness: 260, damping: 18 }}
				className='bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 my-10 flex items-start space-x-4'>
				<AlertTriangle className='w-8 h-8 text-yellow-400 flex-shrink-0 mt-1' />
				<div>
					<h3 className='text-xl font-bold text-yellow-300'>
						PERHATIAN: Langganan Berulang!
					</h3>
					<p className='mt-2 text-yellow-200/80'>
						Meskipun gratis selama 1 tahun, kamu tetap harus memasukkan metode
						pembayaran. Langganan akan diperpanjang otomatis dengan harga normal
						setelah masa gratis berakhir. Pasang pengingat untuk membatalkannya jika
						tidak ingin melanjutkan.
					</p>
				</div>
			</motion.div>

			<motion.div
				variants={card}
				whileHover={{ y: -4, scale: 1.01 }}
				transition={{ type: "spring", stiffness: 260, damping: 18 }}
				className='bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 my-10 flex items-start space-x-4'>
				<Info className='w-8 h-8 text-blue-400 flex-shrink-0 mt-1' />
				<div>
					<h3 className='text-xl font-bold text-blue-300'>
						Sudah Terlanjur Berlangganan?
					</h3>
					<p className='mt-2 text-blue-200/80'>
						Jika kamu sudah memiliki langganan Google One yang aktif, kamu mungkin
						perlu membatalkan paket tersebut terlebih dahulu untuk bisa mengklaim
						penawaran khusus mahasiswa ini.
					</p>
				</div>
			</motion.div>
		</motion.div>
	);
}
