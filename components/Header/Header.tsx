import { MyAutoIcon } from "../ui/icon/Icon";

export default function Header() {
	return (
		<header className="h-20 bg-white w-full">
			<div className="w-full px-4 lg:mx-auto w-[1050px] flex items-center h-20">
				<MyAutoIcon />
			</div>
		</header>
	);
}
