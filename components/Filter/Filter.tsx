"use client";
import { useState } from "react";
import Button from "../Button/Button";
import PriceInput from "../PriceInput/PriceInput";
import Select from "../Select/Select";
import { CarIcon, MotoIcon, TractorIcon } from "../ui/icon/Icon";
import { IOptions } from "@/Types/Options";

enum IType {
	CAR = 1,
	TRACTOR = 2,
	MOTO = 3,
}

export default function Filter() {
	const [type, setType] = useState<IType>(1);
	const [manufacturer, setManufacturer] = useState<IOptions>({
		label: "ყველა მწარმოებელი",
		value: 0,
	});
	const [manufacturerModal, setManufacturerModal] = useState(false);
	const [offerType, setOfferType] = useState<IOptions>({
		label: "იყიდება",
		value: 0,
	});
	const [offerTypeModal, setOfferTypeModal] = useState(false);
	const [category, setCategory] = useState<IOptions>({
		label: "ყველა კატეგორია",
		value: 0,
	});
	const [categoryModal, setCategoryModal] = useState(false);

	const manufacturerOptions = [
		{ label: "ყველა მწარმოებელი", value: 0 },
		{ label: "Lexus", value: 1 },
		{ label: "BMW", value: 2 },
		{ label: "Honda", value: 3 },
		{ label: "Nissan", value: 4 },
		{ label: "Volkswagen", value: 5 },
	];

	const offerTypeOptions = [
		{ label: "იყიდება", value: 0 },
		{ label: "ქირავდება", value: 1 },
	];

	const categoryOptions = [
		{ label: "ყველა კატეგორია", value: 0 },
		{ label: "ჯიპი", value: 1 },
		{ label: "სედანი", value: 2 },
		{ label: "კუპე", value: 3 },
		{ label: "უნივერსალი", value: 4 },
	];

	return (
		<div>
			<div className="hidden lg:block w-[250px] h-[452px]">
				<div className="h-[48px] w-full flex bg-[#F9F9FB] rounded-t-[11px] border border-solid border-[#E9E9F0] border-b-0">
					<div
						className={`w-[84px] h-12 rounded-tl-[12px] flex items-center justify-center cursor-pointer ${
							type === 1 ? "bg-white border-b border-[#FD4100]" : ""
						}`}
						onClick={() => setType(1)}
					>
						<CarIcon />
					</div>
					<div
						className={`w-[84px] h-12 flex items-center border-r border-b border-l border-[#E9E9F0] justify-center cursor-pointer ${
							type === 2 ? "bg-white border-b-[#FD4100]" : ""
						}`}
						onClick={() => setType(2)}
					>
						<TractorIcon />
					</div>
					<div
						className={`w-[84px] h-12 rounded-tr-[12px] flex items-center justify-center cursor-pointer ${
							type === 3 ? "bg-white border-b border-[#FD4100]" : ""
						}`}
						onClick={() => setType(3)}
					>
						<MotoIcon />
					</div>
				</div>
				<div className="bg-white w-full flex flex-col justify-between h-full border border-solid border-b-0 border-[#E9E9F0]">
					<div>
						<div className="px-[22px] py-[24px] gap-y-[20px] grid text-start">
							<Select
								label="გარიგების ტიპი"
								value={offerType}
								onSelect={setOfferType}
								onClose={() => setOfferTypeModal(false)}
								onClick={() => setOfferTypeModal(!offerTypeModal)}
								state={offerTypeModal}
								options={offerTypeOptions}
							/>

							<Select
								label="მწარმოებელი"
								value={manufacturer}
								onSelect={setManufacturer}
								onClose={() => setManufacturerModal(false)}
								onClick={() => setManufacturerModal(!manufacturerModal)}
								state={manufacturerModal}
								options={manufacturerOptions}
							/>

							<Select
								label="კატეგორია"
								value={category}
								onSelect={setCategory}
								onClose={() => setCategoryModal(false)}
								onClick={() => setCategoryModal(!categoryModal)}
								state={categoryModal}
								options={categoryOptions}
							/>
						</div>

						<hr />
						<div className="gap-y-[20px] grid text-start">
							<PriceInput />
						</div>
					</div>
				</div>
				<div className="px-[22px] py-[24px] bg-[#ffffff] shadow-[0_2px_16px_rgba(39,42,55,0.13)] border-r border-l border-[#E9E9F0]">
					<Button />
				</div>
			</div>
			<div className="flex gap-2 pl-[14px] py-3 max-w-[415px] overflow-scroll lg:hidden md:max-w-[750px]">
				<div className="rounded-[100px] bg-[#ffffff] h-[32px] p-[12px] flex items-center whitespace-nowrap text-[12px] text-[#454857]">
					განბაჟება
				</div>
				<div className="rounded-[100px] bg-[#ffffff] h-[32px] p-[12px] flex items-center whitespace-nowrap text-[12px] text-[#454857]">
					განბაჟება
				</div>
				<div className="rounded-[100px] bg-[#ffffff] h-[32px] p-[12px] flex items-center whitespace-nowrap text-[12px] text-[#454857]">
					განბაჟება
				</div>
				<div className="rounded-[100px] bg-[#ffffff] h-[32px] p-[12px] flex items-center whitespace-nowrap text-[12px] text-[#454857]">
					განბაჟება
				</div>
			</div>
		</div>
	);
}
