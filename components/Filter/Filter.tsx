import Select from "../Select/Select";
import { CarIcon, Divider, MotoIcon, TractorIcon } from "../ui/icon/Icon";

export default function Filter() {
	return (
		<div className="hidden lg:block w-64 h-[520px]">
			<div
				style={{
					height: "48px",
					width: "100%",
					display: "flex",
					backgroundColor: "#F9F9FB",
				}}
			>
				<div
					style={{
						width: "84px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<CarIcon />
				</div>
				<div
					style={{
						width: "84px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<TractorIcon />
				</div>
				<div
					style={{
						width: "84px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<MotoIcon />
				</div>
			</div>

			<div
				style={{
					backgroundColor: "#ffffff",
					width: "100%",
					height: "100%",
				}}
			>
				<div
					style={{
						padding: "22px",
						rowGap: "20px",
						display: "grid",
					}}
				>
					<Select placeholder="იყიდება" label="გარიგების ტიპი" />
					<Select placeholder="იყიდება" label="გარიგების ტიპი" />
					<Select placeholder="იყიდება" label="გარიგების ტიპი" />
				</div>

				<Divider />
			</div>
		</div>
	);
}
