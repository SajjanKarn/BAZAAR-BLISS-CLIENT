import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Cart from "@/components/Cart/Cart";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import "./Navbar.scss";

export default function Navbar() {
  const cartItemLength = useSelector((state) => state.cart.products.length);
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/images/logo.png" alt="site logo" className="logo" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link font-light font-md" to="/product/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link font-light font-md" to="/product/1">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link font-light font-md" to="/product/1">
              Kids
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link font-bold" to="/">
            BAZAAR BLISS
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link font-light font-md" to="/product/1">
              HomePage
            </Link>
          </div>
          <div className="item">
            <Link className="link font-light font-md" to="/product/1">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link font-light font-md" to="/product/1">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link font-light font-md" to="/product/1">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{cartItemLength}</span>
            </div>
          </div>
        </div>
      </div>

      {open && <Cart />}
    </div>
  );
}
