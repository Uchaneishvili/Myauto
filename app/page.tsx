"use client";

import { IOptions } from "@/Types/Options";
import Card from "@/components/Card/Card";
import Filter from "@/components/Filter/Filter";
import Select from "@/components/Select/Select";
import { useState } from "react";

export default function Home() {
	const [sortModal, setSortModal] = useState(false);
	const [filterModal, setFilterModal] = useState(false);
	const [sortValue, setSortValue] = useState<IOptions>({
		label: "თარიღი კლებადი",
		value: 0,
	});
	const [filterValue, setFilterValue] = useState<IOptions>({
		label: "ბოლო 3 საათი",
		value: 1,
	});

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
									width={140}
									onClick={() => setFilterModal(!filterModal)}
									value={filterValue}
									onClose={() => setSortModal(false)}
									onSelect={setFilterValue}
									state={filterModal}
									options={filterOptions}
								/>
							</div>

							<div style={{ width: "164px" }}>
								<Select
									width={164}
									onClick={() => setSortModal(!sortModal)}
									value={sortValue}
									onClose={() => setSortModal(false)}
									onSelect={setSortValue}
									state={sortModal}
									options={sortOptions}
								/>
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
