import {
	Divider,
	DoneIcon,
	FireIcon,
	GearIcon,
	GeoFlag,
	LariIcon,
	MotorIcon,
	Oval,
	SpeedIcon,
	WheelIcon,
} from "../ui/icon/Icon";

export default function Card() {
	return (
		<>
			<div
				className=" hidden md:block h-172 bg-white w-[750px] rounded-14 xl:w-780"
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
						}}
					>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
							}}
						>
							<div
								style={{ fontSize: "14px", color: "#272A37", fontWeight: 600 }}
							>
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

						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<div
								style={{
									paddingTop: "20px",
									paddingBottom: "20px",
									display: "grid",
									gridTemplateColumns: "repeat(3, 1fr) ",
									gridTemplateRows: "repeat(3, 1fr)",
									color: "#1B1D25",
								}}
							>
								<div
									style={{
										gridArea: "1 / 1 / 2 / 2",
										fontSize: "12px",
										display: "flex",
										gap: 12,
									}}
								>
									<span>
										<MotorIcon />
									</span>
									1.8 დატ. ჰიბრიდი
								</div>
								<div
									style={{
										gridArea: "1 / 3 / 2 / 4",
										fontSize: "12px",
										display: "flex",
										gap: 12,
									}}
								>
									<span>
										<SpeedIcon />
									</span>
									200 000 კმ
								</div>
								<div
									style={{
										gridArea: "3 / 1 / 4 / 2",
										fontSize: "12px",
										display: "flex",
										gap: 12,
									}}
								>
									<span>
										<GearIcon />
									</span>
									ავტომატიკა
								</div>
								<div
									style={{
										gridArea: "3 / 3 / 4 / 4",
										fontSize: "12px",
										display: "flex",
										gap: 12,
									}}
								>
									<span>
										<WheelIcon />
									</span>
									მარჯვენა
								</div>
							</div>
							<div
								style={{
									display: "flex",
									gap: 4,
									marginTop: "20px",
									marginBottom: "20px",
									fontSize: "20px",
									color: "#272A37",
									height: "24px",
									alignItems: "center",
								}}
							>
								69,507
								<span>
									<LariIcon />
								</span>
							</div>
						</div>

						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: 4,
								fontSize: "12px",
								color: "#6F7383",
							}}
						>
							589 ნახვა <Oval /> 2 დღის წინ
						</div>
					</div>
				</div>
			</div>

			<div
				className="md:hidden"
				style={{
					maxWidth: "768px",
					// width: "375px",
					height: "450px",
					backgroundColor: "#ffffff",
					gap: 8,
				}}
			>
				<div style={{ padding: "14px 16px" }}>
					<div
						style={{
							fontSize: "14px",
							color: "#272A37",
							fontWeight: 400,
							gap: 8,
							display: "flex",
						}}
					>
						<div>LAND ROVER Range Rover Evoque</div>
						<span style={{ color: "#8C929B" }}>2022 წ</span>
					</div>
					<div className="flex justify-between items-center">
						<div
							style={{
								display: "flex",
								gap: 4,
								marginTop: "10px",
								marginBottom: "10px",
								fontSize: "20px",
								color: "#272A37",
								height: "24px",
								alignItems: "center",
								fontWeight: 700,
							}}
						>
							69,507
							<span>
								<LariIcon />
							</span>
						</div>

						<div>
							<div
								style={{
									fontSize: "11px",
									color: "#26B753",
									backgroundColor: "#EEFBF1",
									borderRadius: "6px",
									padding: "4px 8px 4px 4px",
									display: "flex",
									alignItems: "center",
									gap: 2,
								}}
							>
								<DoneIcon />
								განბაჟებული
							</div>
						</div>
					</div>
					<div className="h-[238px] max-w-[736px]">
						<img
							className="rounded-lg object-cover h-full w-full"
							src="https://static.my.ge/myauto/photos/5/6/6/0/9/large/101906651_1.jpg?v=1"
							alt="Car Image"
						/>
					</div>
					<div>
						<div
							style={{
								paddingTop: "14px",
								paddingBottom: "14px",
								display: "grid",
								gridTemplateColumns: "repeat(4, 1fr) ",
								gridTemplateRows: "repeat(3, 1fr)",
								color: "#454857",
								rowGap: 6,
							}}
						>
							<div
								style={{
									gridArea: "1 / 1 / 2 / 2",
									fontSize: "12px",
									display: "flex",
									gap: 12,
								}}
							>
								173 000 კმ
							</div>
							<div
								style={{
									gridArea: "2 / 1 / 3 / 2",
									fontSize: "12px",
									display: "flex",
									gap: 12,
								}}
							>
								3.0 ბენზინი
							</div>
							<div
								style={{
									gridArea: "3 / 1 / 4 / 2",
									fontSize: "12px",
									display: "flex",
									gap: 12,
								}}
							>
								ავტომატიკა
							</div>
							<div
								style={{
									gridArea: "1 / 3 / 2 / 4",
									fontSize: "12px",
									display: "flex",
									gap: 12,
								}}
							>
								სედანი
							</div>
							<div
								style={{
									gridArea: "2 / 3 / 3 / 4",
									fontSize: "12px",
									display: "flex",
									gap: 12,
								}}
							>
								საჭე მარცხნივ
							</div>
							<div
								style={{
									gridArea: "3 / 3 / 4 / 4",
									fontSize: "12px",
									display: "flex",
									gap: 12,
								}}
							>
								<span>
									<GeoFlag />
								</span>
								თბილისი
							</div>
						</div>
					</div>
					<div style={{ width: "100%" }}>
						<Divider />
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 8,
							fontSize: "11px",
							color: "#8996AE",
							paddingTop: "12px",
							paddingBottom: "12px",
						}}
					>
						<FireIcon /> 589 ნახვა <Oval /> 2 დღის წინ
					</div>
				</div>
			</div>
		</>
	);
}
