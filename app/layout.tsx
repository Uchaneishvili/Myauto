import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import "../public/fonts/stylesheet.css";
import { BreadCrumbsArrowIcon } from "@/components/ui/icon/Icon";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Header />

				<div className="w-full h-full bg-[#F2F3F6]">
					<div className="max-w-full mx-auto w-full flex flex-col">
						<div className="hidden  lg:flex mx-auto w-[1050px] max-w-full items-start mt-8 mb-5 text-sm gap-1 items-center text-custom-gray px-4  lg:px-0 ">
							მთავარი <BreadCrumbsArrowIcon /> ძიება <BreadCrumbsArrowIcon />{" "}
							<span className="text-custom-orange">იყიდება</span>
						</div>
						<div className="m-0 w-full lg:max-w-full mx-auto w-[1050px] flex flex-col items-center">
							<div className="text-center">{children}</div>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
