"use client";
import React, { useState } from "react";
import { LariToggleSwitch, USDToggleSwitch } from "../ui/icon/Icon";

const ToggleSwitch = () => {
	const [isChecked, setIsChecked] = useState(false);

	const toggleSwitch = () => {
		setIsChecked(!isChecked);
	};

	return (
		<div>
			<button
				className={`relative inline-flex h-[24px] w-[46px] cursor-default items-center rounded-full border border-[#E2E5EB] lg:cursor-pointer bg-white `}
				aria-checked={isChecked}
				onClick={toggleSwitch}
				type="button"
			>
				<div style={{ display: "flex", alignItems: "center" }}>
					<div className={"absolute left-[6px] z-10"}>
						<LariToggleSwitch fill={isChecked ? "#8C929B" : "#ffffff"} />
					</div>
					<div
						className={`absolute right-[6px] z-10   ${
							!isChecked ? "text-black" : "text-white"
						}`}
					>
						<USDToggleSwitch fill={!isChecked ? "#8C929B" : "#ffffff"} />
					</div>
				</div>

				<span
					className={`inline-block h-[24px] w-[24px] transform rounded-full bg-black transition-all duration-300 ${
						isChecked ? "translate-x-[21px]" : "translate-x-[-1px]"
					}`}
				></span>
			</button>
		</div>
	);
};

export default ToggleSwitch;
