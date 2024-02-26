import React from "react";
import Link from "next/link";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

import drinkImg from "./drink.jpg";
import Image from "next/image";

const getSingleDrink = async (id) => {
  // async(id) can name async(bob) or other aliases. doesn't matter.

  const res = await fetch(`${url}${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch a drink...");
  }
  const data = await res.json();
  return data;
};

const SingleDrinkPage = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;
  console.log(params);
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        Go back
      </Link>
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className="w-48 h-48 rounded shadow-lg mb-4"
        priority
        alt={title}
      />
      {/* //The width property represents the rendered width in pixels, so it will
      affect how large the image appears. */}
      {/* <Image src={drinkImg} className="w-48 h-48 rounded" alt="drink" /> */}
      <h1 className="text-4xl">{title}</h1>
    </div>
  );
};

export default SingleDrinkPage;
