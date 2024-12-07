import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ReciepeCard = () => {
  const query = useSelector((state) => state.recipeData.searchQuery);
  console.log(query);
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&maxFat=25&number=12&apiKey=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();
        setRecipeList(data.results);
        // console.log(data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchRecipes();
  }, [query]);

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-amber-800">
        Recipe Results for "{query}"
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {recipeList &&
          recipeList.length > 0 &&
          recipeList.map((item) => (
            <Link
              key={item.id}
              className="flex flex-col justify-between gap-3 rounded-md shadow-lg border border-gray-200 bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out"
              to={`/recipe/${item.id}`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={"Image not available"}
                className="w-full h-40 object-cover rounded-t-md"
              />

              {/* Title */}
              <div className="p-4">
                <p
                  className="text-lg font-semibold text-gray-800 truncate"
                  title={item.title}
                >
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ReciepeCard;
