import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import girlChef from '../assets/Images/girlChef.jpg'

const RecipeDetail = () => {
  const { id } = useParams();

  const [recipeDetail, setRecipeDetail] = useState({});

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch recipe details. Status: ${response.status}`);
        }
        const data = await response.json();
        setRecipeDetail(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  return (
    <div className="p-6 bg-gray-50 ">
      <div className=" bg-white text-amber-950 shadow-md rounded-lg p-6 text-xl relative">
        <img src={girlChef} alt="" className='absolute top-10 right-0'/>
        <h1 className="text-2xl font-bold text-center mb-6">{recipeDetail.title}</h1>
        
        <img
          src={recipeDetail.image}
          alt="Recipe"
          className="w-[450px] h-64 object-cover rounded-md mb-6"
        />
        
        <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc pl-6 mb-6">
          {recipeDetail.extendedIngredients &&
            recipeDetail.extendedIngredients.map((data) => (
              <li key={data.id} className="text-gray-700">
                {data.original}
              </li>
            ))}
        </ul>
        
        <h2 className="text-xl font-semibold mb-4">Instructions</h2>
        <div
          className="text-gray-700 leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: recipeDetail.instructions }}
        ></div>
        
        <h2 className="text-xl font-semibold mb-4">Summary</h2>
        <div
          className="text-gray-700 leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: recipeDetail.summary }}
        ></div>
        
        <div className="text-sm text-gray-500">
          <p>Source: {recipeDetail.sourceName}</p>
          <a
            href={recipeDetail.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Original Recipe Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
