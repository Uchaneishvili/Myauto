import Select from "../Select/Select";
import { CarIcon, MotoIcon, TractorIcon } from "../ui/icon/Icon";

export default function Filter() {
	return (
		<div style={{ width: "250px", height: "520px" }}>
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
						paddingTop: "22px",
						paddingLeft: "24px",
						paddingRight: "24px",
					}}
				>
					<div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
						<Select placeholder="იყიდება" label="გარიგების ტიპი" />
					</div>
					<div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
						<Select placeholder="იყიდება" label="გარიგების ტიპი" />
					</div>
					<div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
						<Select placeholder="იყიდება" label="გარიგების ტიპი" />
					</div>
				</div>
			</div>
		</div>
	);
}
