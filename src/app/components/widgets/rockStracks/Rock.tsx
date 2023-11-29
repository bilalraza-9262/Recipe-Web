import { Wrapper } from "@/app/components/shared/Wrapper"
import Image from "next/image"

// fast food images
import Link from "next/link"
import RockImage1 from "@/app/pages/recipes/foodImages/fastFood/Burger.jpg"
import RockImage2 from "@/app/pages/recipes/foodImages/fastFood/burrito.webp"
import RockImage3 from "@/app/pages/recipes/foodImages/fastFood/friedChicken.jpg"

import RockImage4 from "@/app/pages/recipes/foodImages/bbq/BeefTikka.jpg"
import RockImage5 from "@/app/pages/recipes/foodImages/bbq/MalaiBoti.jpg"
import RockImage6 from "@/app/pages/recipes/foodImages/bbq/DhagaKabab.webp"

export const Rocker = () => {
	const rockImages = [{
		imageName: RockImage1,
		capTionName: "Burger"
	}, {
		imageName: RockImage2,
		capTionName: "Burrito"
	}, {
		imageName: RockImage3,
		capTionName: "Fried Chicken"
	},
	{
		imageName: RockImage4,
		capTionName: "Beef Tikka"
	}, {
		imageName: RockImage5,
		capTionName: "Malai Boti"
	}, {
		imageName: RockImage6,
		capTionName: "Dhaga Kabab"
	}
	];
	const journeyData = [
		{
			heading: "Discovering the Magic:",
			para: "From my early days watching my grandmother weave culinary magic in her rustic kitchen, the love for cooking took root within me. Those childhood memories ignited my curiosity, laying the foundation for a lifelong passion."

		},
		{
			heading: "Engaging the Senses:",
			para: "Cooking, for me, is a multi-sensory experience. The sizzling sound of onions hitting a hot pan, the aromatic dance of spices in the air, and the vibrant colors of fresh produce – each moment in the kitchen captivates my senses, making the process as enjoyable as the end result."
		},
		{
			heading: "A Fusion of Tradition and Innovation:",
			para: "I find joy in the balance of tradition and innovation. Mastering classic recipes with a modern twist allows me to infuse unexpected flavors and experiment with inventive cooking techniques. It's a delightful journey of pushing culinary boundaries."
		}
	]

	return (
		<Wrapper>
			<section className="mt-7 mb-11">
				<div>
					<div>
						<h2 className="font-semibold text-3xl font-serif ml-0 m-5 mt-10">Popular Dishes </h2>
					</div>
					<div className="flex justify-center flex-wrap ">
						{rockImages.map((item, i) => (
							<figure key={i} className="hover:text-green-300">
								<Link href={"../../../pages/recipes"}><Image className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:cursor-pointer hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  rounded-2xl w-96 h-64 m-3 " src={item.imageName} alt="image1" /></Link>
								<figcaption><h3 className=" font-serif text-2xl text-center font-black">{item.capTionName} </h3></figcaption>
							</figure>
						))}
					</div>
				</div>
				<div className="border mt-16 p-6 rounded-md bg-slate-50 shadow-[5px_5px_rgba(65,_117,_5,_1),_10px_10px_rgba(65,_117,_5,_0.6),_15px_15px_rgba(65,_117,_5,_0.4),_20px_20px_rgba(65,_117,_5,_0.2),_25px_25px_rgba(65,_117,_5,_0.1)]">
					<h2 className="font-semibold text-2xl text-center m-6 drop-shadow-lg underline">A Flavorful Journey with Bilal Raza!</h2>
					<p className="text-lg font-light leading-relaxed m-5">Hi I am Bilal Raza, and let me take you on a journey through my culinary adventures. Cooking for me is more than just preparing meals; it is a delightful fusion of creativity passion and a dash of experimentation</p>
					{journeyData.map((data, i) => (
						<div key={i}>
							<h3 className="text-xl mb-2 font-medium font-sans m-4">{data.heading}</h3>
							<p className="text-lg font-light mt-3 leading-relaxed m-5">{data.para}</p>
						</div>
					))}
					<div className="underline w-32 m-3 p-4 border-blue-500">
						<h5 className=" font-sans">Thank You!</h5>
						<h2 className=" font-sans">Bilal Raza</h2>
					</div>
				</div>
			</section>
		</Wrapper>
	)
}