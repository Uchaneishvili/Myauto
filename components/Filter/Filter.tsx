import Select from "../Select/Select";
import { CarIcon, Divider, MotoIcon, TractorIcon } from "../ui/icon/Icon";

export default function Filter() {
	return (
		<div>
			<div className="hidden lg:block w-64 h-[520px]">
				<div
					style={{
						height: "48px",
						width: "100%",
						display: "flex",
						backgroundColor: "#F9F9FB",
					}}
				>
					<div
						style={{
							width: "84px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<CarIcon />
					</div>
					<div
						style={{
							width: "84px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<TractorIcon />
					</div>
					<div
						style={{
							width: "84px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<MotoIcon />
					</div>
				</div>

				<div
					style={{
						backgroundColor: "#ffffff",
						width: "100%",
						height: "100%",
					}}
				>
					<div
						style={{
							padding: "22px",
							rowGap: "20px",
							display: "grid",
							textAlign: "start",
						}}
					>
						<Select placeholder="იყიდება" label="გარიგების ტიპი" />
						<Select placeholder="იყიდება" label="გარიგების ტიპი" />
						<Select placeholder="იყიდება" label="გარიგების ტიპი" />
					</div>
				</div>
				<hr />
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
