"use client";
import { useState } from "react";
import Button from "../Button/Button";
import PriceInput from "../PriceInput/PriceInput";
import Select from "../Select/Select";
import { CarIcon, MotoIcon, TractorIcon } from "../ui/icon/Icon";

enum IType {
	CAR = 1,
	TRACTOR = 2,
	MOTO = 3,
}

export default function Filter() {
	const [type, setType] = useState<IType>(1);
	return (
		<div>
			<div className="hidden lg:block w-[250px] h-[452px]">
				<div
					style={{
						height: "48px",
						width: "100%",
						display: "flex",
						backgroundColor: "#F9F9FB",
						borderRadius: "11px 11px 0 0",
						border: "1px solid #E9E9F0",
						borderBottom: 0,
					}}
				>
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
				<div
					className="bg-white w-full flex flex-col justify-between"
					style={{
						height: "100%",
						border: "1px solid #E9E9F0",
						borderBottom: 0,
					}}
				>
					<div>
						<div
							style={{
								padding: "22px 24px",
								rowGap: "20px",
								display: "grid",
								textAlign: "start",
							}}
						>
							<Select placeholder="იყიდება" label="გარიგების ტიპი" />
							<Select placeholder="ყველა მწარმოებელი" label="მწარმოებელი" />
							<Select placeholder="ყველა კატეგორია" label="კატეგორია" />
						</div>
						<hr />
						<div
							style={{
								rowGap: "20px",
								display: "grid",
								textAlign: "start",
							}}
						>
							<PriceInput />
						</div>
					</div>
				</div>
				<div
					style={{
						padding: "22px 24px",
						backgroundColor: "#ffffff",
						boxShadow: "0 2px 16px rgba(39, 42, 55, 0.13) ",
						borderRight: "1px solid #E9E9F0",
						borderLeft: "1px solid #E9E9F0",
					}}
				>
					<Button />
				</div>
			</div>
			<div className="flex gap-2 pl-[14px] py-3 max-w-[415px] overflow-scroll lg:hidden md:max-w-[750px]">
				<div
					style={{
						borderRadius: "100px",
						backgroundColor: "#ffffff",
						height: "32px",
						padding: "12px",
						display: "flex",
						alignItems: "center",
						width: "min-content",
						fontSize: "12px",
						color: "#454857",
					}}
				>
					განბაჟება
				</div>
				<div
					style={{
						borderRadius: "100px",
						backgroundColor: "#ffffff",
						height: "32px",
						padding: "12px",
						display: "flex",
						alignItems: "center",
						width: "min-content",
						fontSize: "12px",
						color: "#454857",
					}}
				>
					განბაჟება
				</div>
				<div
					style={{
						borderRadius: "100px",
						backgroundColor: "#ffffff",
						height: "32px",
						padding: "12px",
						display: "flex",
						alignItems: "center",
						width: "min-content",
						fontSize: "12px",
						color: "#454857",
					}}
				>
					განბაჟება
				</div>
				<div
					style={{
						borderRadius: "100px",
						backgroundColor: "#ffffff",
						height: "32px",
						padding: "12px",
						display: "flex",
						alignItems: "center",
						width: "min-content",
						fontSize: "12px",
						color: "#454857",
					}}
				>
					განბაჟება
				</div>
				<div
					style={{
						borderRadius: "100px",
						backgroundColor: "#ffffff",
						height: "32px",
						padding: "12px",
						display: "flex",
						alignItems: "center",
						width: "min-content",
						fontSize: "12px",
						color: "#454857",
					}}
				>
					განბაჟება
				</div>
				<div
					style={{
						borderRadius: "100px",
						backgroundColor: "#ffffff",
						height: "32px",
						padding: "12px",
						display: "flex",
						alignItems: "center",
						width: "min-content",
						fontSize: "12px",
						color: "#454857",
					}}
				>
					იყიდება
				</div>
				<div
					style={{
						borderRadius: "100px",
						backgroundColor: "#ffffff",
						height: "32px",
						padding: "12px",
						display: "flex",
						alignItems: "center",
						width: "min-content",
						fontSize: "12px",
						color: "#454857",
					}}
				>
					საქართველო
				</div>
				<div
					style={{
						borderRadius: "100px",
						backgroundColor: "#ffffff",
						height: "32px",
						padding: "12px",
						display: "flex",
						alignItems: "center",
						width: "min-content",
						fontSize: "12px",
						color: "#454857",
					}}
				>
					2012
				</div>
				<div
					style={{
						borderRadius: "100px",
						backgroundColor: "#ffffff",
						height: "32px",
						padding: "12px",
						display: "flex",
						alignItems: "center",
						width: "min-content",
						fontSize: "12px",
						color: "#454857",
					}}
				>
					განბაჟება
				</div>
				<div
					style={{
						borderRadius: "100px",
						backgroundColor: "#ffffff",
						height: "32px",
						padding: "12px",
						display: "flex",
						alignItems: "center",
						width: "min-content",
						fontSize: "12px",
						color: "#454857",
					}}
				>
					განბაჟება
				</div>

				<div
					style={{
						borderRadius: "100px",
						backgroundColor: "#ffffff",
						height: "32px",
						padding: "12px",
						display: "flex",
						alignItems: "center",
						width: "min-content",
						fontSize: "12px",
						color: "#454857",
					}}
				>
					განბაჟება
				</div>
			</div>
		</div>
	);
}
