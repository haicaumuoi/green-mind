import { Delete } from '@mui/icons-material';
import Image from 'next/image';
import React from 'react'
import treepot from '../(assets)/tree1.png';
import pot2 from '../(assets)/pot2.png';

const CheckoutSuccess = () => {
  const plants = [
    {
      id: 1,
      name: 'Natural Plant',
      price: 50,
      img: treepot,
    },
    {
      id: 2,
      name: 'Plant Custom Pot',
      price: 20,
      img: pot2,
    },
  ];



  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <div className="flex justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Receipt</h1>
            <p className="text-gray-500">Order #123456</p>
          </div>
          <div className="w-1/3 text-xl font-semibold mr-6">GREENMIND</div>
        </div>
        {plants.map((plant) => (
          <div key={plant.id} className="flex mb-4">
            <div className="flex-shrink-0">
              <Image src={plant.img} alt="plant" className="w-24 h-24" />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-bold">{plant.name}</h2>
              <p className="font-semibold text-gray-500">${plant.price}</p>
              <p>Quantity: 3</p>
            </div>

          </div>
        ))}
        <div className="flex justify-between">
          <div>
            <p className="font-semibold">Subtotal</p>
            <p className="font-semibold">Tax</p>
            <p className="font-semibold">Total</p>
          </div>
          <div>
            <p>$70.00</p>
            <p>$7.00</p>
            <p className="font-bold">$77.00</p>
          </div>
        </div>
      </div>
    </div>
  );

}

export default CheckoutSuccess