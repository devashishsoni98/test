import React from "react";
import clothingData from "../Data/clothingData";
import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";

const ProductItem = () => {
  return (
    <div className="product-container balh">
      {clothingData.map((item) => (
        // <div key={item.id} className="card">
        //   <img src={item.image} alt={item.title} className="product-image" />
        //   <div className="product-details">
        //     <h2>{item.title}</h2>
        //     <p>{item.description}</p>
        //     <p>Size: {item.size.join(', ')}</p>
        //     <p>Color: {item.color}</p>
        //     <ul>
        //       {item.keyFeatures.map(feature => (
        //         <li key={feature}>{feature}</li>
        //       ))}
        //     </ul>
        //   </div>
        // </div>

        <div key={item.id}  className="w-full relative group">
      <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
        <div>
          <img className="w-full h-full" src={item.image} />
        </div>
        <div className="w-full absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700 h-auto">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
            {/* <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              Compare
              <span>
                <GiReturnArrow />
              </span>
            </li> */}
            <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              Add to Cart
              <span>
                <FaShoppingCart />
              </span>
            </li>
            <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              View Details
              <span className="text-lg">
                <MdOutlineLabelImportant />
              </span>
            </li>
            {/* <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              Add to Wish List
              <span>
                <BsSuitHeartFill />
              </span>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">
            {item.title}
          </h2>
          <p className="text-[#767676] text-[14px]">"45$"</p>
        </div>
        <div>
          <p className="text-[#767676] text-[14px]">{item.description}</p>
        </div>
      </div>
        </div>
    
      ))}
    </div>
  );
};

export default ProductItem;