import Input from "../Input/Input";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

export default function PriceInput() {
	return (
		<>
			<div className="px-[24px]">
				<div className="flex py-[18px] justify-between items-center">
					<div className="text-[13px]">ფასი</div>
					<ToggleSwitch />
				</div>
				<div className="flex gap-[4px] items-center text-[#8C929B]">
					<Input width={94} placeholder={"დან"} />
					-
					<Input width={94} placeholder={"მდე"} />
				</div>
			</div>
		</>
	);
}
