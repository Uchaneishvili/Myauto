import { MyAutoIcon } from "../ui/icon/Icon";

export default function Header() {
	return (
		<div style={{ height: "80px", backgroundColor: "#ffffff", width: "100%" }}>
			<div
				style={{
					width: "1050px",
					marginLeft: "auto",
					marginRight: "auto",
					alignItems: "center",
					height: "80px",
					display: "flex",
				}}
			>
				<MyAutoIcon />
			</div>
		</div>
	);
}
