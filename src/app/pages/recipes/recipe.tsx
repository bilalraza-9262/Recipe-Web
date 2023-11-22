import { recipeData } from "./recipesData";

export const WriteRecipe = ({ itemSelected }: { itemSelected: string }) => {
	const resData = recipeData.find((data) => data.slug === itemSelected);
	return (
		<div className="border m-4 p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
			<h2 className="font-bold text-2xl text-center">{resData?.heading}</h2>
			<h2 className="font-semibold text-xl">Ingredients</h2>
			<p className="font-light text-md leading-relaxed m-3">{resData?.ingredients}</p>
			<h2 className="font-semibold text-xl">Instruction</h2>
			<p className="font-light text-md leading-relaxed m-3">{resData?.instruction}</p>
		</div>
	)
}