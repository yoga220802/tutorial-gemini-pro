"use client";

import { useState } from "react";
import { Clipboard, Check } from "lucide-react";
import { motion } from "framer-motion";

export function CodeBlock({ codeString }: { codeString: string }) {
	const [isCopied, setIsCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(codeString);
			setIsCopied(true);
			setTimeout(() => setIsCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy text: ", err);
		}
	};

	return (
		<motion.div
			className='relative group'
			initial={{ opacity: 0, y: 15 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.45, ease: "easeOut" }}>
			<motion.pre
				initial={false}
				animate={{ backgroundColor: isCopied ? "rgba(34,197,94,0.08)" : "rgba(15,23,42,0.7)" }}
				transition={{ duration: 0.4 }}
				className='bg-slate-900/70 border border-slate-700 rounded-lg p-4 text-sm text-slate-300 overflow-x-auto'>
				<code>{codeString}</code>
			</motion.pre>
			<motion.button
				onClick={handleCopy}
				initial={{ opacity: 0, y: -4 }}
				animate={{ opacity: 1, y: 0 }}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.9 }}
				className='absolute top-3 right-3 p-2 bg-slate-700/50 rounded-md text-slate-400 hover:bg-slate-600/50 hover:text-slate-200 transition-all duration-200'
				aria-label='Copy code to clipboard'>
				{isCopied ? (
					<Check className='w-4 h-4 text-green-400' />
				) : (
					<Clipboard className='w-4 h-4' />
				)}
			</motion.button>
		</motion.div>
	);
}
