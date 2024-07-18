import React from "react";
import "./art.css";
import { dataportfolio, socialprofils } from "../../content_option";
import pallet from "../../assets/images/pallete.jpg";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Artwork() {
  return (
    <div className="mx-4">
      <h1 className="text-center p-4 text-3xl">Art Works</h1>

      <div className="mb-5 po_items_ho pt-4">
        {dataportfolio.map((data, i) => {
          return (
            <div key={i} className="po_item relative">
              <img src={data.img} alt="" />
              <div className="mx-2 leading-[12px]">
                <p className="text-base text-black">{data.name}</p>
                <p className="price text-green-600 pb-1">
                  
                  <strong className="text-black">price:</strong>${data.price}
                </p>
              </div>
              <Link
                to={socialprofils.whatsapp}
                className="add-to-cart flex items-center justify-center bg-black text-white p-2 rounded"
              >
                Add To Cart <FaCartShopping className="ml-2" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
