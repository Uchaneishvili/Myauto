import { GeoFlag, MyAutoIcon } from "../ui/icon/Icon";

export default function Card() {
	return (
		<div
			className="h-172 bg-white w-780 rounded-14"
			style={{ marginTop: "10px", marginBottom: "10px" }}
		>
			<div
				style={{
					padding: "16px",
					width: "100%",
					height: "100%",
					display: "flex",
				}}
			>
				<div style={{ width: "210px", height: "140px" }}>
					<img
						style={{ borderRadius: "8px" }}
						width={178}
						height={140}
						src="https://static.my.ge/myauto/photos/5/4/2/8/8/thumbs/102882455_1.jpg?v=0"
						alt="Car Image"
					/>
				</div>
				<div
					style={{
						width: `calc(100% - 210px)`,
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<div style={{ fontSize: "14px", color: "#272A37" }}>
						LAND ROVER Range Rover Evoque{" "}
						<span style={{ color: "#8C929B" }}>2022 წ</span>
					</div>
					<div style={{ display: "flex", gap: "17px" }}>
						<div style={{ fontSize: "11px", color: "#26B753" }}>
							განბაჟებული
						</div>
						<div
							style={{
								color: "#6F7383",
								display: "flex",
								gap: 8,
								fontSize: "12px",
							}}
						>
							<span>
								<GeoFlag />
							</span>
							გზაშია
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
