"use client";
import { IOptions } from "@/Types/Options";
import { DropdownIcon } from "../ui/icon/Icon";
import { useEffect, useRef } from "react";

interface SelectorProps {
	placeholder?: string;
	label?: string;
	width?: number;
	onClick: () => void;
	value: IOptions | undefined;
	onClose: any;
	onSelect: any;
	state: boolean;
	options: IOptions[];
}

export default function Select(props: SelectorProps) {
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node)
			) {
				props.onClose();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	return (
		<div>
			<div
				className={`w-${props.width} bg-[#ffffff] grid rowGap-8 rounded-[8px]`}
			>
				{props.label && (
					<label className="color-[#272A37] text-[12px]">{props.label}</label>
				)}
				<div className="relative" onClick={props.onClick}>
					<div className=" bg-white relative w-full rounded-[8px] md:border transition-all cursor-pointer border-raisin-10 md:hover:border-raisin-100">
						<div className="w-full h-[38px] md:border-none   md:border-t border-b border-raisin-10">
							<span className="absolute xl:left-[16px] inline-block overflow-hidden text-ellipsis whitespace-nowrap w-[calc(100%-50px)] -translate-y-1/2 transition-all  left-[16px] text-[12px] md:text-[12px] xl:text-[12px] top-1/2 text-raisin-100">
								{props.value ? props.value.label : props.placeholder}
							</span>

							<span className=" absolute flex items-center justify-center w-[36px] h-[36px] right-[0px] xl:right-[8px] md:hover:bg-grey-100	 rounded-full -translate-y-1/2 top-1/2">
								<DropdownIcon />
							</span>
						</div>
					</div>
				</div>
			</div>

			{props.state && (
				<div
					ref={modalRef}
					className="z-10 w-[182px] bg-white absolute border border-gray-300 rounded-lg shadow-lg pt-[5px] pb-[5px] mt-[3px] shadow-[0_4px_20px_rgba(164, 174, 193, 0.4)]"
					style={{}}
				>
					{props.options.map((option, index) => (
						<div
							onClick={() => {
								props.onSelect(option);
							}}
							key={index}
							className={`h-8 w-full flex p-[16px] text-[14px] items-center cursor-pointer hover:bg-[#F2F3F6] text-[#272A37]`}
						>
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	);
}
