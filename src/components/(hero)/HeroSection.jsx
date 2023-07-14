'use client'

import React from "react";
import ShoppingCartIcon from "../icon/ShoppingCartIcon";
import Image from "next/image";
import arrow1 from "./heroImg/arrow1.png";
import arrow2 from "./heroImg/arrow2.png";
import chatZone from "./heroImg/chatZone.png";
import treePot from "./heroImg/treePot.png";
import axios from "axios";

const HeroSection = () => {

  const url = 'https://d31w5oj2o0nlp6.cloudfront.net/images/bluetooth-device-type/image/08a9bdf6-d280-42f6-aeb8-2c2fb851e969.png';

  const cookie = `CloudFront-Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjg5NjA2NzQxfX19XX0_; CloudFront-Signature=dFgzjqp81SaKCRbIeVE8ym9YUmKNLhCehphHThtICdwWcZ4o6cC09oEPmWNJoAOxbp-SG9L1auQKx3kCHM9yNd97YUU4Sx9KMcNPLLyss5PkbS2tdaqAOAMMkyrdf5evLkyT~3rp2YbdjAY9FtVSaGnfduZXoaTnkdVVu5ZobYjdNHr0dtDbhYtSn67jm5fp5X1rk65kbJCqf2s~GT9065uPl5kCfN658g53ORUVJTWtEfoMMJ7CQ0N5X-vRgAauziowxO-8jzhArOX2M8W9S~dMrCaYDEDbyiE~hMRZTk~XZGnxvZ6IkeopuoHhlNjKu9lGsqRO51mCJh4vrVQ5CA__; CloudFront-Key-Pair-Id=K1R22U7UX4WVU8`;

  const callApiWithCookie = () => {
    axios.get(url, { headers: { Cookie: cookie } })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }


  return (
    <div className="bg-[#C1DCDC] w-full h-[30rem] rounded-3xl p-10 flex">
      <div className="w-2/5 flex flex-col space-y-14 pl-4">
        <div className="font-black text-6xl">
          Buy your <br />
          dream plant
        </div>

        <div className="flex items-center space-x-10">
          <div>
            <div className="text-3xl font-bold text-gray-800">50+</div>
            <div className="text-lg text-gray-800 font-semibold">
              Plant Species
            </div>
          </div>
          <div class="flex items-center">
            <hr class="flex-grow border-[1px] border-gray-900 h-14" />
          </div>

          <div>
            <div className="text-3xl font-bold text-gray-800">100+</div>
            <div className="text-lg text-gray-800 font-semibold">Customers</div>
          </div>
        </div>

        <div class="relative w-11/12 ">
          <input
            type="text"
            id="voice-search"
            class="bg-white border text-xl  border-gray-300 text-gray-900 rounded-2xl block w-full pl-5 p-4 "
            placeholder="What are you looking for?"
          />
          <button
            type="button"
            class="absolute inset-y-0 right-5 top-2 flex items-center h-5/6 rounded-xl justify-center "
          >
            <ShoppingCartIcon />
          </button>
        </div>
      </div>
      <div className="w-3/5 relative">
        <div className="absolute bottom-14">
          <Image src={arrow1} alt="arrow1" />
        </div>
        <div className="absolute right-0 -top-9">
          <Image src={arrow2} alt="arrow2" />
        </div>
        <div className="absolute -bottom-10 left-56 z-10 cursor-pointer" onClick={callApiWithCookie} >
          <Image src={treePot} alt="treePot" />
        </div>
        <div className="absolute -bottom-10 left-56">
          <Image src={chatZone} alt="chatZone" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
