"use client";
import { Button, Grid, IconButton } from "@mui/material";
import Image from "next/image";
import React from "react";
import treePot from "./(assets)/tree1.png";
import pot4 from "./(assets)/pot1.png";
import pot2 from "./(assets)/pot2.png";
import pot3 from "./(assets)/pot3.png";
import pot1 from "./(assets)/pot4.png";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";

const CustomPlant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const plants = [
    {
      id: 1,
      name: "Natural Plant",
      price: 50,
      img: treePot,
    },
    {
      id: 2,
      name: "Plant Custom Pot",
      price: 20,
      img: pot2,
    },
  ];
  return (
    <Grid container className="w-screen h-screen relative">
      <Link href="/">
        <button className="absolute w-24 h-10 rounded-xl top-5 bg-[#C1DCDC] left-10 hover:scale-110 transition-all duration-300 ease-in-out">
          Back
        </button>
      </Link>
      <Link href="/checkout">
        <button className="absolute w-24 h-10 rounded-xl top-5 bg-[#15ADB7] right-10 hover:scale-110 transition-all duration-300 ease-in-out">
          Next
        </button>
      </Link>
      <Grid
        item
        xs={5}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image src={treePot} alt="treePot" />
      </Grid>
      <Grid
        item
        container
        xs={7}
        bgcolor={"#C1DCDC"}
        className="rounded-3xl py-10"
        spacing={4}
      >
        <Grid item container xs={12} columnGap={9} rowGap={2}>
          <Grid className="font-semibold text-white" xs={12}>
            Type
          </Grid>
          <Grid
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            className="p-[1px] rounded-2xl bg-[#d9d9d9] hover:scale-110 
            transition-all duration-300 ease-in-out cursor-pointer"
            item
            xs={2}
            width={"20%"}
            onClick={toggleDrawer}
          >
            <Image src={pot1} alt="treePot" />
          </Grid>
          <Grid
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            className="p-[1px] rounded-2xl bg-[#d9d9d9] hover:scale-110 
            transition-all duration-300 ease-in-out cursor-pointer"
            item
            xs={2}
            width={"20%"}
            onClick={toggleDrawer}
          >
            <Image src={pot2} alt="treePot" />
          </Grid>
          <Grid
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            className="p-[1px] rounded-2xl bg-[#d9d9d9] hover:scale-110 
            transition-all duration-300 ease-in-out cursor-pointer"
            item
            xs={2}
            width={"20%"}
            onClick={toggleDrawer}
          >
            <Image src={pot3} alt="treePot" />
          </Grid>
          <Grid
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            className="p-[1px] rounded-2xl bg-[#d9d9d9] hover:scale-110 
            transition-all duration-300 ease-in-out cursor-pointer"
            item
            xs={2}
            width={"20%"}
            onClick={toggleDrawer}
          >
            <Image src={pot4} alt="treePot" />
          </Grid>
        </Grid>

        <Grid item container xs={12} columnGap={9} rowGap={2}>
          <Grid className="font-semibold text-white" xs={12}>
            Type
          </Grid>
          <Grid
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            className="p-[1px] rounded-2xl bg-[#d9d9d9] hover:scale-110 
            transition-all duration-300 ease-in-out cursor-pointer"
            item
            xs={2}
            width={"20%"}
            onClick={toggleDrawer}
          >
            <Image src={pot1} alt="treePot" />
          </Grid>
          <Grid
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            className="p-[1px] rounded-2xl bg-[#d9d9d9] hover:scale-110 
            transition-all duration-300 ease-in-out cursor-pointer"
            item
            xs={2}
            width={"20%"}
            onClick={toggleDrawer}
          >
            <Image src={pot2} alt="treePot" />
          </Grid>
          <Grid
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            className="p-[1px] rounded-2xl bg-[#d9d9d9] hover:scale-110 
            transition-all duration-300 ease-in-out cursor-pointer"
            item
            xs={2}
            width={"20%"}
            onClick={toggleDrawer}
          >
            <Image src={pot3} alt="treePot" />
          </Grid>
          <Grid
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            className="p-[1px] rounded-2xl bg-[#d9d9d9] hover:scale-110 
            transition-all duration-300 ease-in-out cursor-pointer"
            item
            xs={2}
            width={"20%"}
            onClick={toggleDrawer}
          >
            <Image src={pot4} alt="treePot" />
          </Grid>
        </Grid>

        <Grid item container xs={12} columnGap={9} rowGap={2}>
          <Grid className="font-semibold text-white" xs={12}>
            Type
          </Grid>
          <Grid
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            className="p-[1px] rounded-2xl bg-[#d9d9d9] hover:scale-110 
            transition-all duration-300 ease-in-out cursor-pointer"
            item
            xs={2}
            width={"20%"}
            onClick={toggleDrawer}
          >
            <Image src={pot1} alt="treePot" />
          </Grid>
          <Grid
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            className="p-[1px] rounded-2xl bg-[#d9d9d9] hover:scale-110 
            transition-all duration-300 ease-in-out cursor-pointer"
            item
            xs={2}
            width={"20%"}
            onClick={toggleDrawer}
          >
            <Image src={pot2} alt="treePot" />
          </Grid>
          <Grid
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            className="p-[1px] rounded-2xl bg-[#d9d9d9] hover:scale-110 
            transition-all duration-300 ease-in-out cursor-pointer"
            item
            xs={2}
            width={"20%"}
            onClick={toggleDrawer}
          >
            <Image src={pot3} alt="treePot" />
          </Grid>
          <Grid
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            className="p-[1px] rounded-2xl bg-[#d9d9d9] hover:scale-110 
            transition-all duration-300 ease-in-out cursor-pointer"
            item
            xs={2}
            width={"20%"}
            onClick={toggleDrawer}
          >
            <Image src={pot4} alt="treePot" />
          </Grid>
        </Grid>
      </Grid>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        size={"40vw"}
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
          <div className="mt-16 px-10">
            <div className="flex justify-between items-center px-2">
              <div className="text-lg font-bold">Total</div>
              <div className="font-semibold text-gray-500">$60</div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-4">
            <Link href="/checkout">
              <button className="bg-[#479797] text-white rounded-lg p-2 px-5 hover:bg-[#a0c8c8] transition-all">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </Drawer>
    </Grid>
  );
};

export default CustomPlant;
