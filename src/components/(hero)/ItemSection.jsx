"use client";
import { Grid, IconButton } from "@mui/material";
import React from "react";
import tree1 from "./itemImg/tree1.png";
import tree2 from "./itemImg/tree2.png";
import tree3 from "./itemImg/tree3.png";
import tree4 from "./itemImg/tree4.png";
import tree5 from "./itemImg/tree5.png";
import tree6 from "./itemImg/tree6.png";
import Image from "next/image";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";

const ItemSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const plants = [
    {
      id: 1,
      name: "Natural Plant",
      price: 20,
      img: tree1,
    },
    {
      id: 2,
      name: "Natural Plant",
      price: 20,
      img: tree2,
    },
    {
      id: 3,
      name: "Natural Plant",
      price: 20,
      img: tree3,
    },
    {
      id: 4,
      name: "Natural Plant",
      price: 20,
      img: tree4,
    },
    {
      id: 5,
      name: "Natural Plant",
      price: 20,
      img: tree5,
    },
    {
      id: 6,
      name: "Natural Plant",
      price: 20,
      img: tree6,
    },
  ];

  return (
    <Grid container spacing={6}>
      <Grid item xs={2} className="grid-cols-2 xs:col-span-2 space-y-5">
        <div className="font-black text-6xl">
          Best selling <br />
          plant
        </div>
        <div className="text-gray-400">
          Easiest way to <br />
          live a healthy life by buying <br />
          your favorite plant
        </div>
        <div>
          <button className="bg-[#479797] text-white rounded-lg p-2 px-5 hover:bg-[#a0c8c8] transition-all">
            See more
          </button>
        </div>
      </Grid>

      <Grid item xs={1}></Grid>

      <Grid item xs={9} container className="grid-cols-10 xs:col-span-10">
        {plants.map((plant) => (
          <Grid xs={3} width={"90%"} m={4} key={plant.id}>
            <Link href={`/customPlant`}>
              <div className="flex flex-col items-start space-y-2 border border-gray-300 p-4 rounded-xl">
                <div>
                  <Image src={plant.img} alt="tree1" />
                </div>
                <div className="text-2xl font-bold">{plant.name}</div>
                <div className="font-semibold text-gray-500">
                  ${plant.price}
                </div>
                <div>
                  <button className="bg-[#479797] text-white rounded-lg p-2 px-5 hover:bg-[#a0c8c8] transition-all">
                    Custom Plant
                  </button>
                </div>
              </div>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="w-[40rem]"
      >
        <div>
          <div className="w-full h-12 mb-4 flex justify-center items-center text-white bg-[#479797] font-bold text-2xl">
            Cart List
          </div>
          <div className="flex flex-col items-center space-y-3">
            {plants.map((plant) => (
              <Grid
                container
                key={plant.id}
                className="w-full px-2"
                spacing={2}
              >
                <Grid item xs={3}>
                  <Image src={plant.img} alt="tree1" />
                </Grid>
                <Grid item xs={7}>
                  <div className="text-lg font-bold">{plant.name}</div>
                  <div className="font-semibold text-gray-500">
                    ${plant.price}
                  </div>
                  <div>Quantity: 3</div>
                </Grid>
                <Grid item xs={2}>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
          </div>
          <div>
            <div className="flex justify-between items-center px-2">
              <div className="text-lg font-bold">Total</div>
              <div className="font-semibold text-gray-500">$60</div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-4">
            <button className="bg-[#479797] text-white rounded-lg p-2 px-5 hover:bg-[#a0c8c8] transition-all">
              Checkout
            </button>
          </div>
        </div>
      </Drawer>
    </Grid>
  );
};

export default ItemSection;
