import Card from "@/components/Card/Card";
import Filter from "@/components/Filter/Filter";
import Select from "@/components/Select/Select";

export default function Home() {
	return (
		<>
			<div className="block lg:flex">
				<Filter />

				<div className="lg:px-5">
					{/* <div style={{ paddingLeft: "20px", paddingRight: "20px" }}> */}
					<div className="hidden lg:flex justify-between">
						<div>176047 განცხადება</div>
						<div style={{ display: "flex", gap: 8 }}>
							<Select placeholder="ბოლო 3 საათი" width={140} />
							<Select placeholder="თარიღი კლებადი" width={164} />
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
