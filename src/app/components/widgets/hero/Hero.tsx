import { Wrapper } from "@/app/components/shared/Wrapper"
import Link from "next/link"
import Image from "next/image"
import HeroRecipee from "@/app/components/assert/images/heroImage.jpg"
import { MyButton } from "../../shared/Button"
import "./hero.css"
import Tips from "../../../pages/tipsPage/page"
// import Timer from "@/components/about/About"

const Hero = () => {
	return (


		<Wrapper>
			<section className="animate-fade-right  flex  mt-7 items-center lg:h-[70vh]  md:items-stretch md:flex-row flex-col">

				<Image className="w-full object-cover rounded-sm object- md:rounded-l-xl md:w-2/4" src={HeroRecipee} alt="Family Kitchen" />

				<div className="md:w-2/4 w-full rounded-r-xl bg-lime-100 flex text-center flex-row items-center">
					<div>
						<p className="font-light m-3 text-teal-500">85% would visit this again</p>
						<h1 className="lg:font-bold  font-semibold font-serif text-xl lg:text-4xl m-4  ">Welcome To Family Kitchen </h1>
    						<h3 className="font-light text-sm sm:text-lg m-4">

							We welcome you to a delicious feast of exquisite dishes in Foodcom. With a wide range of world cuisines to choose from, we guarantee you a sumptuous feast experience in our restaurant!
						</h3>
						<div className="mt-5">
							<MyButton><Link  href={"../../../pages/tipsPage"} >Tips</Link></MyButton>
						</div>
					</div>
				</div>

			</section>
		</Wrapper >

	)
}

export default Hero

{/* <h1 className="">Fresh, flavorful and (mostly) healthy recipes made for real, actual, every day life. Helping you celebrate the joy of food in a totally non-intimidating</h1> */ }

// text-slate-200 font-sans shadow-[-30px_30px_90px_rgba(60,_30,_30,_0.7)] border  p-4 max-w-2xl -2xl   mt-20 rounded-3xl text-sm md:text-5xl md:leading-relaxed absolute top-0