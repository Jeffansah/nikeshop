import React from "react";
import { star } from "../assets/icons";

export const PopularProductsCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-1 flex-col w-full cursor-pointer">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-urbanist text-xl leading-normal text-slate-gray">
          ({rating})
        </p>
      </div>
      <h3 className="mt-2 text-xl leading-normal font-semibold font-urbanist">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-urbanist text-lg text-coral-red">
        {price}
      </p>
    </div>
  );
};
