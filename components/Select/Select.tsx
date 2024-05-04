import { ArrowIcon } from "../ui/icon/Icon";

interface SelectorProps {
	label?: string;
	placeholder: string;
	width?: number;
	backgroundColor?: string;
}

export default function Select(props: SelectorProps) {
	console.log("p", props.placeholder);

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
				<div className="relative w-full px-[16px] rounded-[8px] md:border transition-all cursor-pointer border-raisin-10 md:hover:border-raisin-100">
					<div className="w-full h-[38px] md:border-none   md:border-t border-b border-raisin-10">
						<span className="absolute xl:left-[16px] inline-block overflow-hidden text-ellipsis whitespace-nowrap w-[calc(100%-60px)] -translate-y-1/2 transition-all  left-[16px] text-[12px] md:text-[12px] xl:text-[12px] top-1/2 text-raisin-100">
							{props.placeholder}
						</span>

						<span className=" absolute flex items-center justify-center w-[36px] h-[36px] right-[4px] xl:right-[8px] md:hover:bg-grey-100 p-[8px] rounded-full -translate-y-1/2 top-1/2">
							<ArrowIcon />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
