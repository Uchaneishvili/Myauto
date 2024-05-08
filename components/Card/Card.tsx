import {
	CompareIcon,
	DoneIcon,
	FireIcon,
	GearIcon,
	GeoFlag,
	LariIcon,
	MotorIcon,
	NoteIcon,
	Oval,
	SpeedIcon,
	WheelIcon,
} from "../ui/icon/Icon";

export default function Card() {
	return (
		<>
			<div className="mt-[10px] mb-[10px] hidden md:block h-172 bg-white w-[750px] rounded-14 xl:w-780">
				<div className="p-[16px] w-full h-full flex">
					<div className="w-[210px] h-[140px]">
						<img
							className="rounded-[8px]"
							width={178}
							height={140}
							src="https://static.my.ge/myauto/photos/5/4/2/8/8/thumbs/102882455_1.jpg?v=0"
							alt="Car Image"
						/>
					</div>
					<div className="w-[calc(full-210px)}">
						<div className="flex justify-between">
							<div className="text-[14px] text-[#272A37] font-semibold">
								LAND ROVER Range Rover Evoque{" "}
								<span className="text-[#8C929B]">2022 წ</span>
							</div>
							<div className="flex gap-[17px]">
								<div className="text-[11px] text-[#8C929B]">განბაჟებული</div>
								<div className="text-[#6F7383] flex gap-8 text-[12px]">
									<span>
										<GeoFlag />
									</span>
									გზაშია
								</div>
							</div>
						</div>

						<div className="flex justify-between">
							<div className="pt-[20px] pb-[20px] grid text-[#1B1D25] grid-cols-3 grid-rows-3">
								<div className="flex gap-[12px] text-[12px] row-start-1 col-start-1 row-end-2 col-end-2">
									<span>
										<MotorIcon />
									</span>
									1.8 დატ. ჰიბრიდი
								</div>
								<div className="text-[12px] flex gap-[12px] row-start-1 col-start-3 row-end-2 col-end-4">
									<span>
										<SpeedIcon />
									</span>
									200 000 კმ
								</div>
								<div className="row-start-3 col-start-1 row-end-4 col-end-2 flex text-[12px] gap-[12px]">
									<span>
										<GearIcon />
									</span>
									ავტომატიკა
								</div>
								<div className="row-start-3 col-start-3 row-end-4 col-end-4 flex text-[12px] gap-[12px]">
									<span>
										<WheelIcon />
									</span>
									მარჯვენა
								</div>
							</div>
							<div className="flex gap-4 mt-[20px] mb-[20px] text-[20px] text-[#272A37] h-[24px] items-center">
								69,507
								<span>
									<LariIcon />
								</span>
							</div>
						</div>

						<div className="flex items-center gap-4 text-[12px] text-[#6F7383]">
							589 ნახვა <Oval /> 2 დღის წინ
						</div>
					</div>
				</div>
			</div>

			<div className="max-w-[768px] h-[450px] bg-[#ffffff] gap-[8px] md:hidden">
				<div className="pl-[14px] pr-[14px] pt-[16px]">
					<div className="text-[14px] text-[#272A37] gap-[8px] flex">
						<div>LAND ROVER Range Rover Evoque</div>
						<span className="text-[#8C929B]">2022 წ</span>
					</div>
					<div className="flex justify-between items-center">
						<div className="flex gap-[4px] mt-[10px] mb-[10px] text-[20px] text-[#272A37] h-[24px] items-center font-bold">
							69,507
							<span>
								<LariIcon />
							</span>
						</div>

						<div>
							<div className="text-[11px] text-[#26B753] bg-[#EEFBF1] rounded-[6px] pt-[4px] pr-[8px] pb-[8px] pl-[8px] flex items-center gap-[2px]">
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
						<div className="pt-[14px] pb-[14px] grid grod-cols-4 grid-rows-3 text-[#454857] gap-y-[6px]">
							<div className="row-start-1 col-start-1 row-end-2 col-end-2 flex text-[12px] gap-[12px]">
								173 000 კმ
							</div>
							<div className="row-start-2 col-start-1 row-end-3 col-end-2 text-[12px] flex gap-[12px]">
								3.0 ბენზინი
							</div>
							<div className="row-start-3 col-start-1 row-end-4 col-end-2 text-[12px] flex gap-[12px]">
								ავტომატიკა
							</div>
							<div className="row-start-1 col-start-3 row-end-2 col-end-4 flex text-[12px] gap-[12px]">
								სედანი
							</div>
							<div className="row-start-2 col-start-3 row-end-3 col-end-4 text-[12px] flex gap-[12px]">
								საჭე მარცხნივ
							</div>
							<div className="row-start-3 col-start-3 row-end-4 col-end-4 flex gap-[12px] text-[12px]">
								<span>
									<GeoFlag />
								</span>
								თბილისი
							</div>
						</div>
					</div>
				</div>
				<div className="w-full">
					<hr />
				</div>
				<div className="pl-[14px] pr-[14px] pb-[16px]">
					<div className="flex justify-between">
						<div className="flex items-center gap-[8px] text-[11px] text-[#8996AE] pt-[12px] pb-[12px]">
							<FireIcon /> 589 ნახვა <Oval /> 2 დღის წინ
						</div>

						<div className="flex items-center">
							<CompareIcon />
							<NoteIcon />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
