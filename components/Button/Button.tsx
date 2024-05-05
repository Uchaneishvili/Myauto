import { sign } from "crypto";

const Button = () => {
	return (
		<div>
			<button
				style={{
					width: "100%",
					height: "32px",
					backgroundColor: "#FD4100",
					color: "#FFFFFF",
					fontWeight: "700",
					fontSize: "14px",
					borderRadius: "6px",
					display: "flex",
					textAlign: "center",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				ძებნა 197,963
			</button>
		</div>
	);
};

export default Button;
