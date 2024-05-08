interface SelectorProps {
	label?: string;
	placeholder: string;
	width?: number;
	backgroundColor?: string;
}
export default function Input(props: SelectorProps) {
	return (
		<div
			className={`w-${props.width} bg-${props.backgroundColor} grid gap-y-[8px]`}
		>
			{props.label && (
				<label className="text-[#272A37] text-[#12px]">{props.label}</label>
			)}
			<div className="mt-[-1px] relative">
				<div className=" bg-white relative w-full rounded-[8px] md:border transition-all cursor-pointer border-raisin-10 md:hover:border-raisin-100 ">
					<input
						className="w-full rounded-[8px] h-[38px] md:border-none p-[10px] md:border-t border-b border-raisin-10 bg-transparent"
						placeholder={props.placeholder}
					/>
				</div>
			</div>
		</div>
	);
}
