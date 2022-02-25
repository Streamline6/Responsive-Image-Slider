import { AiTwotoneHeart } from "react-icons/ai";

function Footer() {
	return (
		<div className="w-full h-16 bg-gray-50 flex justify-center items-center p-10">
			<h1 className="text-base text-blue-900 mr-2">Made by</h1>
			<AiTwotoneHeart className="text-black" />
			<h1 className="text-base ml-2">
				Created by{" "}
				<a
					href="#"
					className="cursor-pointer font-semibold text-indigo-600 hover:text-black"
				>
					Streamline
				</a>
			</h1>
		</div>
	);
}

export default Footer;
