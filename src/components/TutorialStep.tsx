"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface TutorialStepProps {
	icon: LucideIcon;
	number: number;
	title: string;
	description: string;
}

export function TutorialStep({
	icon: Icon,
	number,
	title,
	description,
}: TutorialStepProps) {
	const itemVariants: Variants = {
		hidden: { opacity: 0, x: -50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.5, ease: [0.17, 0.55, 0.55, 1] },
		},
	};

	return (
		<motion.div
			variants={itemVariants}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.4 }}
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.97 }}
			className='relative flex items-start space-x-6 p-4 rounded-lg border border-transparent hover:border-slate-700 transition-colors bg-slate-900/30'>
			<div className='flex-shrink-0 flex flex-col items-center'>
				<span className='flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 border border-slate-700 text-purple-400 shadow-md'>
					<Icon className='w-6 h-6' />
				</span>
				<span className='mt-2 text-xs font-semibold text-slate-500'>
					STEP {number}
				</span>
			</div>
			<div className='flex-grow pt-2'>
				<h3 className='text-xl font-semibold text-slate-100'>{title}</h3>
				<p className='mt-1 text-slate-400'>{description}</p>
			</div>
		</motion.div>
	);
}
