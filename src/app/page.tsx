"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Header } from "../components/header";
import { ImportantNote } from "../components/ImportantNote";
import { ImageTutorialStep } from "../components/ImageTutorialStep";

// NOTE: Ganti URL placeholder ini dengan path ke gambar yang sudah diunggah di folder /public
const tutorialSteps = [
	{
		title: "Mulai Proses Verifikasi",
		description:
			"Kunjungi halaman penawaran Gemini untuk mahasiswa, lalu klik tombol 'Verifikasi kelayakan' untuk memulai.",
		imageUrl: "/images/satu.jpg",
	},
	{
		title: "Isi Data Diri",
		description:
			"Lengkapi formulir verifikasi dengan data yang valid, seperti negara, nama universitas, nama lengkap, tanggal lahir dan email domain kampus sesuai dengan data akademik kamu.",
		imageUrl: "/images/dua.jpg",
	},
	{
		title: "Verifikasi Melalui Portal Akademik",
		description:
			"Kamu akan diarahkan ke halaman verifikasi SheerID. Klik 'Masuk ke lembaga akademik saya' dan login menggunakan akun email kampusmu.",
		imageUrl: "/images/empat.jpg",
	},
	{
		title: "Tunggu Konfirmasi",
		description:
			"Setelah login, status verifikasimu mungkin akan 'Pending' untuk beberapa saat. Tunggu hingga prosesnya selesai dan kamu mendapatkan konfirmasi.",
		imageUrl: "/images/enam.jpg",
	},
	{
		title: "Klaim Penawaran Google AI Pro",
		description:
			"Setelah berhasil diverifikasi, klik tombol 'Dapatkan Google AI Pro' untuk melanjutkan ke tahap berlangganan.",
		imageUrl: "/images/tujuh.jpg",
	},
	{
		title: "Tambahkan Metode Pembayaran",
		description:
			"Pilih metode pembayaran yang akan digunakan. Ini diperlukan untuk aktivasi dan perpanjangan otomatis setelah masa gratis berakhir.",
		imageUrl: "/images/sembilan.jpg",
	},
	{
		title: "Berhasil Berlangganan!",
		description:
			"Selamat! Kamu sekarang sudah berlangganan Google One AI Pro. Kamu bisa mengelola langgananmu melalui pengaturan akun Google Play.",
		imageUrl: "/images/sebelas.jpg",
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
		},
	},
};

export default function Home() {
	// Progress bar logic
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 140,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6 }}
				style={{ scaleX }}
				aria-label='Progress membaca halaman'
				className='fixed top-0 left-0 right-0 h-1 origin-left z-50 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500' />

			<main className='min-h-screen p-4 sm:p-8'>
				<div className='max-w-4xl mx-auto'>
					<Header />

					<motion.div
						variants={containerVariants}
						initial='hidden'
						animate='visible'
						className='mt-4'>
						{tutorialSteps.map((step, index) => (
							<ImageTutorialStep
								key={index}
								number={index + 1}
								title={step.title}
								description={step.description}
								imageUrl={step.imageUrl}
							/>
						))}
					</motion.div>

					<ImportantNote />

					<motion.footer
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						className='text-center py-8 text-slate-500'>
						<p>Dibuat Oleh Orang Ganteng Intelek &copy; 2025</p>
					</motion.footer>
				</div>
			</main>
		</>
	);
}
