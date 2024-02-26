import React from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
import DrinksList from "@/components/DrinksList";

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // is a mechanism used to introduce a delay of 1000 milliseconds (1 second) before executing the subsequent code.
  //Overall, the line await new Promise((resolve) => setTimeout(resolve, 1000));
  //introduces a 1-second delay in the execution of the fetchDrinks function before proceeding to fetch data from the specified URL.
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("failed to fetch the drinks");
  }
  const data = await response.json();
  return data;
};

const DrinksPage = async () => {
  const data = await fetchDrinks();

  return (
    <div>
      <DrinksList drinks={data.drinks} />
    </div>
  );
};

export default DrinksPage;
