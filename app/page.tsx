import Card from "@/components/Card/Card";
import Filter from "@/components/Filter/Filter";
import Select from "@/components/Select/Select";

export default function Home() {
	return (
		<>
			<div
				style={{
					display: "flex",
				}}
			>
				<Filter />

				<div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<div>176047 განცხადება</div>
						<div style={{ display: "flex", gap: 8 }}>
							<Select
								placeholder="ბოლო 3 საათი"
								width={140}
								backgroundColor={"#ffffff"}
							/>
							<Select
								placeholder="თარიღი კლებადი"
								width={164}
								backgroundColor={"#ffffff"}
							/>
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
