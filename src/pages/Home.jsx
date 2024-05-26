import React, { useEffect, useState } from "react";
import Banner from "../components/Home/Banner";
import RecipiesCards from "../cards /RecipiesCards";
import CatagoriesCards from "../cards /CatagoriesCards";
/* import Products from '../components/Home/Products';
import Accordion from '../components/Home/Accordion'; */

const Home = () => {
  const [recipies, setRecipies] = useState();
  const [catagroies, setCatagories] = useState();

  useEffect(() => {

    async function load() {
      //get recipies
      const recipieRes = await fetch("http://localhost:3000/recipes");
      const recipiData = await recipieRes.json();
      setRecipies(recipiData);

      //getCatagories

      const catagoryRes = await fetch("http://localhost:3000/categories");
      const catagoryData = await catagoryRes.json();
      setCatagories(catagoryData);
    }
    load();
  }, []);

  return (
    <div>
      <Banner></Banner>

      <div className="container mx-auto">
        <h1 className="text-4xl my-20 text-center ">Our Recipe catagroy</h1>
        <div className="grid grid-cols-5 gap-6">
          {catagroies
            ?.map((catagory) => (
              <CatagoriesCards key={catagory.id} catagory={catagory} />
            ))}
        </div>
      </div>

      <div className="container mx-auto">
        <h1 className="text-4xl my-20 text-center ">Our Newest Recipes </h1>
        <div className="grid grid-cols-4 gap-6 ">
          {recipies
            ?.reverse()
            ?.slice(0, 4)
            ?.map((recipe) => (
              <RecipiesCards key={recipe?.id} recipe={recipe} />
            ))}
        </div>
      </div>

      {/* <Products></Products>
            <Accordion></Accordion> */}
    </div>
  );
};

export default Home;
