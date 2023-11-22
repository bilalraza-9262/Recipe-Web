
import Image from "next/image";
import ShefImage from "./cheif image.jpg"
import { Wrapper } from "@/app/components/shared/Wrapper";

function About() {

	return (
		<Wrapper>
			<section className="border m-3 mb-10 mt-7 rounded-lg shadow-[rgba(131,_191,_111,_0.4)_0px_30px_90px] bg-gray-100 p-4">
				<div className="">
					<h3 className="font-semibold text-3xl ml-0 m-2 text-center">Who We Are?</h3>
					<p className="font-light text-lg mt-3 mx-auto mb-7 leading-8">Simply Recipes is here to help you cook delicious meals with less stress and more joy. We offer recipes and cooking advice for home cooks, by home cooks. Helping create “kitchen wins” is what we’re all about.

						Simply Recipes was founded in 2003 by Elise Bauer as a home cooking blog to record her favorite family recipes. Today, Simply Recipes has grown into a trusted resource for home cooks with more than 3,000 tested recipes, guides, and meal plans, drawing over 15 million readers each month from around the world. We’re supported by a diverse group of recipe developers, food writers, recipe and product testers, photographers, and other creative professionals.</p>
				</div>
				<div>
					<h3 className="font-semibold text-3xl ml-0 m-2 mt-4  text-center">Our History</h3>
					<p className="font-light text-lg mt-3 mx-auto mb-7 leading-8">Elise Bauer was a busy Silicon Valley executive when she became sick with a flu that wouldn’t go away in 2001. In 2003, Elise moved home with her parents and lived with them for several years, recovering from chronic fatigue and documenting her parents’ cooking on Simply Recipes. (Here’s more of that story.) Over the years, what started as a small blog grew to reach millions of readers every month! In 2020, Simply Recipes was acquired by Dotdash Meredith, a New York-based media company.</p>
				</div>
				<div>
					<h3 className="font-semibold text-3xl ml-0 m-2 mt-6 text-center">Our Mission</h3>
					<div>

						<p className="font-light text-lg mt-3 mx-auto mb-7 leading-8">
							<strong>Inspire and Empower:</strong>  Your mission statement could focus on inspiring and empowering people to cook and eat healthy, delicious meals at home. You could emphasize the importance of using fresh, locally sourced ingredients and provide tips and tricks for cooking on a budget.
						</p>
						<p className="font-light text-lg mt-2 mx-auto mb-7 leading-8">
							<strong>Community Building:</strong> You could also focus on building a community of food lovers who share a passion for cooking and eating. Your mission statement could emphasize the importance of sharing recipes, tips, and stories with others and creating a welcoming space for people to connect.
						</p>
						<p className="font-light text-lg mt-2 mx-auto mb-7 leading-8"> 
							<strong>Education and Learning:</strong> Another approach is to focus on education and learning. Your mission statement could emphasize the importance of teaching people how to cook and providing them with the knowledge and skills they need to create healthy, delicious meals at home.
						</p>
					</div>
				</div>

			</section>
		</Wrapper>

	)
}
export default About
// Timer()

