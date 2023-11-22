import { Wrapper } from "@/app/components/shared/Wrapper"
import Link from "next/link"
import Logo from "/public/logo2.png"
import Image from "next/image"

// shadow-[inset_-12px_-8px_40px_#6b483b]
// import Timer from "@/components/about/About"
const Header = () => {
	return (
		<header className="bg-white sticky top-0 z-10 ">

			<Wrapper>
				<div className="flex sm:justify-between py-4 ">

					<div>
						<Image className="w-20 hidden sm:block" src={Logo} alt="Recipee Web" />

					</div>

					<div className="flex space-x-4 sm:space-x-7 pt-3  mx-auto ">

						<Link className="hover:text-green-300 focus:text-green-300" href={"/"}>Home </Link>


						<Link className="hover:text-green-300 focus:text-green-300" href={"../../../pages/recipes"}> Recipes</Link>


						<Link className="hover:text-green-300 focus:text-green-300" href={"../../../pages/tipsPage"}> Tips</Link>


						<Link className="hover:text-green-300 focus:text-green-300" href={"../../../pages/About"}> About</Link>


						<Link className="hover:text-green-300 focus:text-green-300" href={"../../../pages/Contact"}> Contact</Link>


					</div>
				</div>

			</Wrapper>

		</header>
	)
}
export default Header
