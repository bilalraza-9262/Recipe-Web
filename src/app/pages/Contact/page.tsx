import { Wrapper } from "@/app/components/shared/Wrapper"
import Link from "next/link"
import { MyButton } from "@/app/components/shared/Button"

import Image from "next/image"
import image1 from "./facebook1.png"
import image2 from "./instaIcon.png"
import image3 from "./linkdin.png"


export const metadata = {
	title: "Contact Us"
}
const Contact = () => {
	return (
		<Wrapper>
			<main className="">
				<section className="flex justify-around flex-col sm:flex-row items-stretch">
					<div className="animate-fade-right flex flex-col items-center">
						<Link href={"https://www.facebook.com"}><Image width="110" height="110" src={image1} alt="facebook-new" /></Link>
						<label className="font-semibold text-lg mt-3" htmlFor="facbook">Facebook</label>
					</div>
					<div className="animate-fade-right flex flex-col items-center">
						<Link href={"https://www.facebook.com"}><Image width="110" height="110" src={image2} alt="facebook-new" /></Link>
						<label className="font-semibold text-lg mt-3" htmlFor="insta">Instagram</label>
					</div>
					<div className="animate-fade-right flex flex-col items-center">
						<Link href={"https://www.facebook.com"}><Image width="110" height="100" src={image3} alt="facebook-new" /></Link>
						<label className="font-semibold text-lg mt-3" htmlFor="linkdin">Linkdin</label>
					</div>
				</section>
				<section className="flex">
					<div className="border w-screen m-11 p-6 rounded-md shadow-[inset_-12px_-8px_40px_#46464620]">
						<h2 className="text-center font-semibold text-4xl mt-4">Contact US</h2>
						<form className="flex flex-col items-center mb-4 gap-y-6 mt-6" action="">
							<input className="border w-full sm:w-1/3 p-3" placeholder="Enter Your beautifull name!" type="text" name="userName" id="" />
							<input className="border w-full sm:w-1/3 p-3" placeholder="Enter Your fantastic email!" type="email" name="userEmail" id="" />
							<input className="border w-full sm:w-1/3 p-3" placeholder="Enter Your gratefull subject!" type="text" name="Message" id="" />
							<textarea className="border w-full sm:w-1/3 p-3" placeholder="Enter message here!" name="userMessage" id="" cols={37} rows={2}></textarea>
							<MyButton><Link href={"mailto:success9262@gmail.com"}>Email Us</Link></MyButton>
						</form>
					</div>
				</section>
			</main>
		</Wrapper>
	)
}
export default Contact