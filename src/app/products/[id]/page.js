"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import Image from 'next/image';
export default async function DynamicId({params: {id}}) {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
     

console.log("data",data)
  return (
    <div class=" lg:m-20 mt-20">
         <div
                class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                <div
                  class="shrink-1  mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-4/12 xl:w-6/12">
                                 <Image src={data.image} alt={data.title} width={500} height={500} class="w-full h-96 rounded-lg " />

                </div>
          
                
                <div class="mb-12  lg:p-12 p-4 rounded-lg md:mb-0 md:w-8/12 lg:w-7/12 xl:w-5/12">
                <div class="px-4 py-2 mt-2">
                {/* <h1 class="font-bold text-2xl uppercase py-2"  >Type : {data.type} </h1> */}
                    <h1 class=" pb-2 mr-1 text-xl text-center">
                   Title : {data.title}
                    </h1>
                 
                    <p class=" pb-2 mr-1">
                   Price : {data.price}
                    </p>
                    <p class=" pb-2 mr-1">
                   Category : {data.category}
                    </p>
                    <p class=" pb-2 mr-1">
                   Rate : {data.rating.rate}
                    </p>
                    <p class=" pb-2 mr-1">
                   Count : {data.rating.count}
                    </p>
                  <p class=" pb-2 mr-1">
                   Description : {data.description}
                    </p>
            </div>
            <button
  onClick={() => addToCart(curElem)}
  className="bg-blue-500 text-white px-3 py-1 rounded-md mt-2"
>
  Add to Cart
</button>

                </div>
              </div>
            
    </div>
  )
}
