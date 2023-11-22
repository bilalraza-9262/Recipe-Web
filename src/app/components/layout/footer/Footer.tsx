import { Wrapper } from "@/app/components/shared/Wrapper"
import Image from "next/image"
import Logo from "@/../public/logo2.png"
import Link from "next/link"

export const Footer = () => {
	return (

		<footer className="bg-green-100  ">
			<Wrapper>
				<div className="flex  flex-col justify-center sm:flex-row sm:justify-between  pt-4">
					<div className=" m-4">
						<Image className="w-28 rounded-3xl" src={Logo} alt="Food Studio" />
						<p className="font-light text-lg mt-7 mb-4"><q>Cooking is all about people. Food is maybe the only universal thing that really has the power to bring everyone together. No matter what culture, everywhere around the world, people get together to eat. I also passionate about working with fresh produce, creating innovative dishes and improving my skills. An excellent communicator, leader and problem solver, skilled in managing and developing staff.</q></p>

					</div>

					<div>
						<ul className="m-5 ml-0 font-light text-lg">
							<li className="m-4">
								<Link className="hover:text-green-500  " href={"/"}>Home </Link>
							</li>
							<li className="m-4">
								<Link className="hover:text-green-500 " href={"../../../pages/recipes"}> Recipees</Link>
							</li>
							<li className="m-4">
								<Link className="hover:text-green-500" href={"../../../pages/tipsPage"}> Tips</Link>
							</li>
							<li className="m-4">
								<Link className="hover:text-green-500 " href={"../../../pages/About"}> About</Link>
							</li>
							<li className="m-4">
								<Link className="hover:text-green-500" href={"../../../pages/Contact"}> Contact</Link>
							</li>

						</ul>
					</div>
					<div className=" mt-5">
						<h3 className="font-medium w-28 text-lg">Social Media </h3>
						<ul>
							<li  className="m-2">

								<Link href={"https://www.facebook.com"}><img width="40" height="40" src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="facebook-new" /></Link>
							</li>
							<li  className="m-2">
								<Link href={"https://www.instagram.com"}> <img width="40" height="40" src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png" alt="instagram-new" /></Link>
							</li>
							<li  className="m-2">
								<Link href={"https://www.linkedin.com/feed/"}> <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="linkedin" /></Link>
							</li>
						</ul>
					</div>
				</div>
				<hr className="h-0.5 bg-black" />
				<p className="mt-4 pb-4">© 2023 Family Kitchen - All right reserved</p>
			</Wrapper>
		</footer>
	)
}