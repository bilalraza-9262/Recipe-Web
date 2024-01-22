"use client"

import Image from "next/image";
import { Wrapper } from "@/app/components/shared/Wrapper";
import { WriteRecipe } from "./recipe";

import { useState } from "react"
import f_Image_1 from "./foodImages/fastFood/Burger.jpg";
import f_image_2 from "./foodImages/fastFood/friedChicken.jpg";
import f_image_3 from "./foodImages/fastFood/burrito.webp";
import f_image_4 from "./foodImages/bbq/DhagaKabab.webp";
import f_image_5 from "./foodImages/bbq/BeefTikka.jpg";
import f_image_6 from "./foodImages/bbq/MalaiBoti.jpg";
import f_image_7 from "./foodImages/sweets/MulledWineCake.jpg";
import f_image_8 from "./foodImages/sweets/SweetPotatoBrownies.jpeg";
import f_image_9 from "./foodImages/sweets/Chocolate Snack Cake.jpg";
import f_image_10 from "./foodImages/chinness/Chow Mein.jpeg";
import f_image_11 from "./foodImages/chinness/PorkDumplings.jpg";
import f_image_12 from "./foodImages/chinness/Chinese Spareribs.jpeg";
import Link from "next/link";


const images = [
	{
		head: "Bacon Stuffed Burgers",
		image: f_Image_1
	},
	{
		head: "Fried Chicken",
		image: f_image_2
	},
	{
		head: "Burrito",
		image: f_image_3
	},
	{
		head: "Dhaga Kabab",
		image: f_image_4
	},
	{
		head: "Beef Tikka",
		image: f_image_5
	},
	{
		head: "Malai Boti",
		image: f_image_6
	},
	{
		head: "Mulled Wine Cake",
		image: f_image_7
	},
	{
		head: "Sweet Potato Brownies",
		image: f_image_8
	},
	{
		head: "Chocolate Snack Cake",
		image: f_image_9
	},
	{
		head: "Chow Mein",
		image: f_image_10
	},
	{
		head: "Pork Dumplings",
		image: f_image_11
	},
	{
		head: "Chinese Spareribs",
		image: f_image_12
	}
]

const Recipe = () => {
	const [itemSelected, setItemSelected] = useState("")
	return (
		<Wrapper>
			<section >
				<div id="top">{itemSelected && <WriteRecipe itemSelected={itemSelected} />}</div>
				<div className="flex flex-wrap gap-10 justify-center m-8 border p-4">{images.map((img, i) => {
					return (
						<div className="flex items-center flex-col" key={i} onClick={() => {
							setItemSelected(img.head);
						}} ><Link href={`#${img.head}`}>
								<Image className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:cursor-pointer duration-300   w-80 h-60 object-cover hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-lg" src={img.image} alt="Burger" /></Link>
							<label className=" font-semibold text-xl" htmlFor="">{img.head}</label>
						</div>)
				}
				)}
				</div>

			</section>
		</Wrapper>
	)
}
export default Recipe