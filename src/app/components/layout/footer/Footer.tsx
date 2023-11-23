import { Wrapper } from "@/app/components/shared/Wrapper"
import Image from "next/image"
import Logo from "@/../public/logo2.png"
import Link from "next/link"
import facIcon from "@/app/components/assert/images/icons8-facebook-30.png"
import insIcon from "@/app/components/assert/images/icons8-instagram-30.png"
import linIcon from "@/app/components/assert/images/icons8-linkedin-30.png"

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
							<li className="m-2">

								<Link href={"https://www.facebook.com"}><Image width="40" height="40" src={facIcon} alt="facebook-new" /></Link>
							</li>
							<li className="m-2">
								<Link href={"https://www.instagram.com"}> <Image width="40" height="40" src={insIcon} alt="instagram-new" /></Link>
							</li>
							<li className="m-2">
								<Link href={"https://www.linkedin.com/feed/"}> <Image width="40" height="40" src={linIcon} alt="linkedin" /></Link>
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