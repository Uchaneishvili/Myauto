"use client";

import Card from "@/components/Card/Card";
import Filter from "@/components/Filter/Filter";
import Modal from "@/components/Modal/Modal";
import Select from "@/components/Select/Select";
import { useState } from "react";

export default function Home() {
	const [sortModal, setSortModal] = useState(false);
	const [filterModal, setFilterModal] = useState(false);
	const [sortValue, setSortValue] = useState(0);
	const [filterValue, setFilterValue] = useState(1);

	const sortOptions = [
		{ label: "თარიღი კლებადი", value: 0 },
		{ label: "თარიღი ზრდადი", value: 1 },
		{ label: "ფასი კლებადი", value: 2 },
		{ label: "ფასი ზრდადი", value: 3 },
		{ label: "გარბენი კლებადი", value: 4 },
		{ label: "გარბენი ზრდადი", value: 5 },
	];

	const filterOptions = [
		{ label: "ბოლო 1 საათი", value: 0 },
		{ label: "ბოლო 3 საათი", value: 1 },
		{ label: "ბოლო 6 საათი", value: 2 },
		{ label: "ბოლო 12 საათი", value: 3 },
		{ label: "ბოლო 24 საათი", value: 4 },
	];

	const getFilterTitle = (val: number) => {
		switch (val) {
			case 0:
				return "ბოლო 1 საათი";
			case 1:
				return "ბოლო 3 საათი";
			case 2:
				return "ბოლო 6 საათი";
			case 3:
				return "ბოლო 12 საათი";
			case 4:
				return "ბოლო 24 საათი";
			default:
				return "-";
		}
	};

	const getSortTitle = (val: number) => {
		switch (val) {
			case 0:
				return "თარიღი კლებადი";
			case 1:
				return "თარიღი ზრდადი";
			case 2:
				return "ფასი კლებადი";
			case 3:
				return "ფასი ზრდადი";
			case 4:
				return "გარბენი კლებადი";
			case 5:
				return "გარბენი ზრდადი";
			default:
				return "-";
		}
	};
	return (
		<>
			<div className="block lg:flex">
				<Filter />

				<div className="lg:px-5">
					<div className="hidden lg:flex justify-between">
						<div>176047 განცხადება</div>
						<div style={{ display: "flex", gap: 8 }}>
							<div style={{ width: "140px" }}>
								<Select
									placeholder={getFilterTitle(filterValue)}
									width={140}
									onClick={() => setFilterModal(!filterModal)}
									value={sortValue}
								/>

								{filterModal && (
									<Modal
										options={filterOptions}
										onClose={() => setFilterModal(false)}
										onClick={setFilterValue}
									/>
								)}
							</div>

							<div>
								<Select
									placeholder={getSortTitle(sortValue)}
									width={164}
									onClick={() => setSortModal(!sortModal)}
									value={filterValue}
								/>

								{sortModal && (
									<Modal
										options={sortOptions}
										onClose={() => setSortModal(false)}
										onClick={(e: any) => setSortValue(e)}
									/>
								)}
							</div>
						</div>
					</div>

					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	);
}
