
"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProtectedRoute from "../ProtectedRoute";

export default function MyComponent() {
  
  const [data, setData] = useState(null);
  const [categoryData, setCategoryData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [search, setSearch] = useState("");
  const [sortingOption, setSortingOption] = useState("default"); 

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const fetchData = async () => {
      let apiUrl = "https://fakestoreapi.com/products";
      if (selectedCategory) {
        apiUrl += `/category/${selectedCategory}`;
      }

      const response = await fetch(apiUrl);
      const data = await response.json();
       // Apply sorting based on sortingOption
    if (sortingOption === "price_low") {
      data.sort((a, b) => a.price - b.price);
    } else if (sortingOption === "price_high") {
      data.sort((a, b) => b.price - a.price);
    }

      setData(data);
    };

    fetchData();
  }, [selectedCategory,sortingOption]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("https://fakestoreapi.com/products/categories");
      const categoryData = await response.json();
      setCategoryData(categoryData);
    };

    fetchCategories();
  }, []);

  return (
    <ProtectedRoute>
    <div className="mt-20 flex">
      <div className="w-[15%] border-r p-4">
        <h2 className="text-xl my-6">Categories</h2>
       <button className="uppercase" onClick={() => handleCategoryClick()}> All</button>
        {categoryData !== null ? (
          categoryData.map((curElem, index) => {
            return (
              <div key={index}>
                <button
                  className="text-md mt-2 uppercase"
                  onClick={() => handleCategoryClick(curElem)}
                >
                  
                  {curElem}
                </button>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="w-[85%]">
  
      <div className="flex justify-center">
      <div className=" mb-10 w-1/2">
        <input
          className="outline-none w-2/3 p-3 rounded-lg dark:bg-gray-700 bg-gray-200"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className=" mb-4  ">
  <label htmlFor="sorting">Sort by: </label>
  <select
    id="sorting"
    className="ml-2 dark:bg-gray-700 bg-gray-200 p-1 border rounded"
    value={sortingOption}
    onChange={(e) => setSortingOption(e.target.value)}
  >
    <option value="default">Default</option>
    <option value="price_low">Price: Low to High</option>
    <option value="price_high">Price: High to Low</option>
  </select>
</div>

      
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mx-12">
        {data !== null ? (
          data
            .filter((curElem) => {
              return search.toLowerCase() === "" ? curElem : curElem.title.toLowerCase().includes(search);
            })
            .map((curElem) => {
              return (
                <Link href={`/products/${curElem.id}`} key={curElem.id}>
                  <div>
                    <Image
                      src={curElem.image}
                      alt="product image"
                      width={500}
                      height={500}
                      className="h-80 rounded-2xl"
                    />
                    <h2 className="text-center text-lg mt-2">{curElem.title}</h2>
                  </div>
                </Link>
              );
            })
        ) : (
          <p>Loading...</p>
        )}
      </div>
      </div>
    </div>
    </ProtectedRoute>
  );
}
