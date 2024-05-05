import Input from "../Input/Input";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { MyAutoIcon } from "../ui/icon/Icon";

export default function PriceInput() {
	return (
		<>
			<div style={{ paddingLeft: "24px", paddingRight: "24px" }}>
				<div
					style={{
						display: "flex",
						paddingTop: "18px",
						paddingBottom: "18px",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<div style={{ fontSize: "13px" }}>ფასი</div>
					<ToggleSwitch />
				</div>
				<div
					style={{
						display: "flex",
						gap: 4,
						alignItems: "center",
						color: "#8C929B",
					}}
				>
					<Input width={94} placeholder={"დან"} />
					-
					<Input width={94} placeholder={"მდე"} />
				</div>
			</div>
		</>
	);
}
