import BarBottomRightIcon from "@/components/icon/BarBottomRightIcon";
import ShoppingCartIcon from "@/components/icon/ShoppingCartIcon";
import UserIcon from "@/components/icon/UserIcon";
import React from "react";
import StraightLineIcon from "./icon/StraightLineIcon";

const Header = () => {
  return (
    <nav class="bg-white border-gray-200 w-full h-10">
      <div class="max-w-screen-xl mx-auto flex h-10">
        <div class="w-1/2 flex items-center justify-start">
          <div className="w-1/3 text-xl font-semibold">GREENMIND</div>
          <ul className="flex items-center w-1/2 justify-between">
            <li className="flex-none">
              <a className="btn btn-ghost normal-case">Home</a>
            </li>
            <li>
              <a className="btn btn-ghost normal-case">Product</a>
            </li>
            <li>
              <a className="btn btn-ghost normal-case">Contact</a>
            </li>
          </ul>
        </div>

        <div class="w-1/2 flex items-center justify-end space-x-8 h-10">
          <button className="btn btn-ghost normal-case">
            <ShoppingCartIcon />
          </button>
          <a className="btn btn-ghost normal-case">
            <UserIcon />
          </a>
          <StraightLineIcon />
          <a className="btn btn-ghost normal-case">
            <BarBottomRightIcon />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
