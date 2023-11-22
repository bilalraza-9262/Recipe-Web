import { Wrapper } from "@/app/components/shared/Wrapper"
import Image from "next/image"
import tipsImage from "@/app/components/assert/images/tips2.jpg"

const data = [
	{
		heading: "Break Fast",
		para: " The breakfast shift typically begins at around 7 am and involves cooking and serving breakfasts for guests. Chefs should turn on all the ovens, hobs, and fryers they need and prepare some of the food the evening before, such as cutting up the mushrooms and tomatoes. In a small hotel, breakfasts will be cooked to order, whereas in a larger one, it may be a buffet style. The breakfast chef will also often be responsible for getting the bread started so that it has time to prove and be baked before the split shift break",
		tips: [{
			tipsHeading: "Balance Nutrients:",
			tipsPara: "Include a mix of carbohydrates, proteins, and healthy fats to provide sustained energy throughout the morning."
		}, {
			tipsHeading: "Incorporate Fresh Ingredients:",
			tipsPara: "Use fresh fruits and vegetables to add flavor and nutrition."
		}, {
			tipsHeading: "Presentation Matters:",
			tipsPara: "Pay attention to the visual appeal of the breakfast dishes. A visually pleasing plate can enhance the overall dining experience."
		}]
	},
	{
		heading: "Lunch",
		para: "After breakfast, chefs move on to preparing dishes for the lunch service. Chefs must keep a close eye on time during the day. Lunch service typically takes place between 12 pm and 2 pm, and chefs must ensure that the food is ready to be served on time. Chefs should also continue to prepare for the evening guests during this time  ",
		tips: [{
			tipsHeading: "Variety of Textures:",
			tipsPara: "Create dishes that have a variety of textures to make the meal more interesting. This could include a crunchy salad with a creamy dressing or a sandwich with a crispy crust."
		}, {
			tipsHeading: "Mindful Portion Sizes:",
			tipsPara: "Pay attention to portion sizes to ensure that the meal is satisfying without being overly heavy."
		}, {
			tipsHeading: "Protein Options:",
			tipsPara: "Offer a range of protein sources, including lean meats, plant-based proteins, and seafood."
		}]
	},
	{
		heading: "Dinner",
		para: "After lunch, chefs typically take a break of 2-3 hours before returning for the dinner rush. Chefs should use this time to rest and recharge before the busy evening ahead. They should return to work at around 5 pm and set up the kitchen ready for the dinner guests. Chefs should do any final prep work and ensure that everything is in place before the dinner service begins at around 7 pm. Dinner service typically ends at around 10:30 pm, after which chefs must clean down knives and the kitchen before finishing for the day.",
		tips: [{
			tipsHeading: "Balanced Plate:",
			tipsPara: "Create a balanced plate with a mix of proteins, vegetables, and carbohydrates."
		}, {
			tipsHeading: "Flavor Layering:",
			tipsPara: "Build flavors by layering ingredients and using herbs, spices, and sauces thoughtfully."
		}, {
			tipsHeading: "Cooking Techniques:",
			tipsPara: "Use a variety of cooking techniques (grilling, roasting, sautéing) to add depth and variety to the meal."
		}]
	}
]


const Tips = () => {
	return (
		<section className="relative">
			<Image className="w-full object-cover" src={tipsImage} alt="Tips and Tricks" />
			<Wrapper>
				<div className="tipsWaterMark  bg-[#BEB9B9CA] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] max-w-6xl h-5/6 overflow-auto absolute top-0 border rounded-md  text-black m-7 p-7">
					<h2 className="text-center font-bold text-4xl ">TIPS & TRICKS</h2>

					{data.map((item, i) => (
						<div key={i} className="m-3 mt-6 ">
							<h3 className="font-semibold text-2xl">{item.heading}</h3>
							<p className="leading-relaxed font-light text-lg mt-2">{item.para}</p>
							<div>
								{item.tips.map((tips, i) => (
									<div key={i}>

										<p className="leading-relaxed font-light text-lg m-3"><span className="font-semibold text-lg">{tips.tipsHeading}</span> {tips.tipsPara}</p>
									</div>
								))}
							</div>
						</div>
					))}

				</div>
			</Wrapper>
		</section>


	)
}
export default Tips 