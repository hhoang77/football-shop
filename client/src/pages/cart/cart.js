import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RiCoupon3Line } from "react-icons/ri";
import styles from "./cart.module.scss";
import Button from "../../components/button";

function cart() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1050px] mx-auto text-center justify-center">
        <div
          className={`${styles.title_cart_destop} flex font-bold gap-2 text-2xl justify-center my-8 `}
        >
          <span className="text-black cursor-pointer">SHOPPING CART</span>
          <MdOutlineKeyboardArrowRight className="text-orange-500 opacity-60 text-3xl mt-[2px]  " />
          <span className="text-gray-300 cursor-pointer hover:text-black">
            CHECKOUT DETAILS
          </span>
          <MdOutlineKeyboardArrowRight className="text-orange-500 opacity-60 text-3xl mt-[2px] " />
          <span className="text-gray-300">ORDER COMPLETE</span>
        </div>
        <div className={styles.title_cart_mobile}>
          <span className="text-black cursor-pointer text-xl font-semibold">
            SHOPPING CART
          </span>
        </div>
        <div className={`${styles.cart} py-[30px]`}>
          <div
            className={`${styles.detail_product}  mx-1 px-[10px] border-r-2 border-solid border-gray-200`}
          >
            <div className="mb-4">
              <table className="w-full mb-1 border-solid border-gray-100 ">
                <thead>
                  <tr>
                    <th colSpan="3">PRODUCT</th>
                    <th className={styles.th_price}>PRICE</th>
                    <th>QUANTITY</th>
                    <th className={styles.th_subtotal}>SUBTOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="/">
                        <IoIosCloseCircleOutline className="text-3xl opacity-50 hover:opacity-100" />
                      </a>
                    </td>
                    <td>
                      <a href="/">
                        <img
                          className="max-w-[100%] h-auto inline-block align-middle w-[200px]"
                          src="https://www.sporter.vn/wp-content/uploads/2017/06/Ao-manchester-city-san-khach-2023-1-300x400.png"
                          alt="thumnail"
                        />
                      </a>
                    </td>
                    <td>
                      <a href="/">
                        <span className="text-orange-400 hover:opacity-60">
                          Áo bóng đá Man city sân khách 23/24 hàng thái lan
                        </span>
                        <p className={styles.price_one_product}>
                          1 x <span className="font-semibold">280,000đ</span>
                        </p>
                      </a>
                    </td>
                    <td className={styles.td_price}>
                      <span>
                        <strong>280,000đ</strong>
                      </span>
                    </td>
                    <td>
                      <div className="flex">
                        <button className="border-[1px] border-solid border-gray-300 px-2 py-2">
                          -
                        </button>
                        <input
                          type="text"
                          className="border-solid border-[1px] border-gray-300 text-center w-[40px] focus:outline-none"
                          value="1"
                        />
                        <button className="border-[1px] border-solid border-gray-300 px-2 py-2">
                          +
                        </button>
                      </div>
                    </td>
                    <td className={styles.td_subtotal}>
                      <span>
                        <strong>280,000đ</strong>
                      </span>
                    </td>
                  </tr>
                  <tr></tr>
                </tbody>
              </table>
              <div className="flex my-4 text-white gap-2 font-medium">
                <Button className="border-solid border-2  bg-orange-500 hover:opacity-80">
                  CONTINUE SHOPPING
                </Button>
                <Button className="border-solid border-2  bg-green-500 hover:opacity-80">
                  UPDATE CART
                </Button>
              </div>
            </div>
          </div>
          <div className={`${styles.priceTotal}  mx-1 px-[10px]`}>
            <div className=" mt-2">
              <p className="w-full text-left font-medium text-lg border-solid border-4 border-black border-b-[1px] ">
                Cart Totals
              </p>
              <div className="flex mt-4 justify-between border-b-[1px] border-gray-200 mb-2">
                <span>subtotal</span>
                <span className="font-semibold">280,000đ</span>
              </div>
              <div className="flex  justify-between border-b-[3px] border-gray-200 mb-2">
                <span>Total</span>
                <span className="font-semibold">280,000đ</span>
              </div>
              <Button className="text-white font-semibold bg-orange-500 hover:opacity-70 text-lg w-full my-4">
                PROCEED TO CHECKOUT
              </Button>
              <div className="flex text-orange-500 gap-1 my-2 border-b-[3px] border-gray-200 ">
                <RiCoupon3Line className="text-xl mt-1" />
                <p className="font-bold text-lg mb-2">Coupon</p>
              </div>
              <input
                type="text"
                placeholder="Coupon code"
                className="px-2 py-2 border-2 border-gray-300 border-solid w-full focus:outline-none my-1"
              />
              <Button className="border-2 border-solid border-gray-300 w-full text-gray-500 hover:bg-gray-300 my-2">
                Apply counpon
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cart;
