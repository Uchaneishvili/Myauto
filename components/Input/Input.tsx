import { MyAutoIcon } from "../ui/icon/Icon";

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
				<div className=" bg-white relative w-full px-[16px] rounded-[8px] md:border transition-all cursor-pointer border-raisin-10 md:hover:border-raisin-100">
					<div className="w-full h-[38px] md:border-none   md:border-t border-b border-raisin-10">
						<input
							className="absolute xl:inline-block overflow-hidden text-ellipsis whitespace-nowrap w-[60px] -translate-y-1/2 transition-all  text-[12px] md:text-[12px] xl:text-[12px] top-1/2 text-raisin-100"
							placeholder={props.placeholder}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
