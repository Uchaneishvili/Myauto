interface SelectorProps {
	label?: string;
	placeholder: string;
	width?: number;
	backgroundColor?: string;
}
export default function Input(props: SelectorProps) {
	return (
		<div
			style={{
				width: props.width,
				backgroundColor: props.backgroundColor,
				display: "grid",
				rowGap: 8,
			}}
		>
			{props.label && (
				<label style={{ color: "#272A37", fontSize: "12px" }}>
					{props.label}
				</label>
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
