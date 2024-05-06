"use client";
import React, { useEffect, useRef } from "react";

interface ModalProps {
	options: { label: string; value: number }[];
	onClose: () => void;
	onClick: any;
}

const Modal: React.FC<ModalProps> = ({ options, onClose, onClick }) => {
	const modalRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
			onClose();
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div
			ref={modalRef}
			className="bg-white absolute border border-gray-300 rounded-lg shadow-lg pt-[5px] pb-[5px] mt-[3px]"
		>
			{options.map((option, index) => (
				<div
					onClick={() => onClick(option.value)}
					key={index}
					className={`h-8 w-full flex p-[16px] text-[14px] items-center cursor-pointer hover:bg-[#F2F3F6] text-[#272A37]`}
				>
					{option.label}
				</div>
			))}
		</div>
	);
};

export default Modal;
