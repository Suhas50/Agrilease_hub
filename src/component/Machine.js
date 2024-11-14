import React from 'react';

function Machine({ data, onAddToCart }) {
  const { "vehicle-name": vehiclename, "vehicle-price": vehicleprice, "img-url": img } = data;

  return (
    <> 
    <div className="border border-solid border-black rounded p-2 my-8 h-[400px] w-1/5 bg-slate-300 hover:bg-slate-200">
      <img src={img} alt={vehiclename} className="w-64 h-64 mx-auto rounded-md transition-all duration-100" />
      <h3 className="text-center mt-2 font-bold">{vehiclename}</h3>
      <p className="text-center">Price: {vehicleprice}</p>
      <button
        onClick={() => onAddToCart(data)}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 w-full"
      >
        Add to Cart
      </button>
    </div>
    </>
   
  );
}

export default Machine;
