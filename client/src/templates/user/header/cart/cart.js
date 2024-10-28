import React, { useEffect, useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import styles from "./cart.module.scss";
import Button from "../../../../components/button";
import { toast } from "react-toastify";
import { cartStore } from "../../../../store/cartStore";
import { formatPrice } from "../../../../utils/forrmatPriceVn";

function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    data: cart,
    fetchCart,
    deleteProduct,
  } = cartStore((state) => ({
    data: state.data,
    fetchCart: state.fetchCart,
    deleteProduct: state.deleteProduct,
  }));
  const [checkCart, setCheckCart] = useState(false);
  useEffect(() => {
    if (cart && cart.length > 0) {
      setCheckCart(true);
    } else {
      setCheckCart(false);
    }
  }, [cart]);
  useEffect(() => {
    fetchCart();
  }, []);
  const quantity = cart?.map((item) => item.quantity);
  const totalQuantity = quantity.reduce(
    (value, curentValue) => value + curentValue,
    0
  );
  const priceOneProduct = cart?.map(
    (item) => item.quantity * item.productId.price
  );
  const totalPrice = priceOneProduct.reduce(
    (value, currentValue) => value + currentValue,
    0
  );
  const handleIconCartHover = () => {
    setIsOpen(true);
  };

  const handleIconCartLeave = () => {
    setIsOpen(false);
  };

  const handleDelete = async (productId, quantity) => {
    try {
      await deleteProduct(productId);
      toast.success("Xóa sản phẩm thành công");
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    } catch (error) {
      toast.error("Thất bại");
    }
  };

  return (
    <div
      onMouseEnter={handleIconCartHover}
      onMouseLeave={handleIconCartLeave}
      className={styles.wrapperCart}
    >
      <a href="/cart">
        <BsCart2 className="text-2xl cursor-pointer hover:opacity-60 " />
      </a>
      {isOpen && (
        <div className={styles.fill}>
          <div className={styles.cart}>
            <div className="mx-4">
              <div className="max-h-[400px] overflow-y-auto">
                {cart &&
                  cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex mt-4 border-b-[1px] border-gray-400 border-solid mb-2 "
                    >
                      <a
                        className="flex"
                        href={`/product/${item.productId.slug}`}
                      >
                        <img
                          className="w-16 object-cover ml-1 h-[70px]"
                          src={item.productId.image[0]}
                          alt={item.slug}
                        />
                        <div className="mx-4 w-[100px] ">
                          <p className="text-orange-500 font-medium hover:text-white cursor-pointer uppercase">
                            {item.productId.name}
                          </p>
                          <p className="text-gray-300 font-medium mb-1">
                            {formatPrice(item.productId.price)} *{" "}
                            {item.quantity}
                          </p>
                        </div>
                      </a>
                      <IoIosCloseCircleOutline
                        onClick={() =>
                          handleDelete(item.productId._id, item.quantity)
                        }
                        className={styles.icon_close}
                      />
                    </div>
                  ))}
              </div>
              {cart && checkCart === true ? (
                <>
                  <div className="text-center mx-auto border-b-[1px] border-t-[1px] border-gray-400">
                    <p className="font-bold text-gray-500 my-2">
                      <span className="">Subtotal: </span>
                      <span className="">{formatPrice(totalPrice)}</span>
                    </p>
                  </div>
                  <div className="mt-2 pb-8">
                    <a href="/cart">
                      <Button className="bg-gray-400 text-white font-bold block w-full hover:opacity-80 my-1">
                        VIEW CART
                      </Button>
                    </a>
                    <a href="/checkout">
                      <Button className="bg-orange-500 text-white font-bold block w-full hover:opacity-80 my-1">
                        CHECK OUT
                      </Button>
                    </a>
                  </div>
                </>
              ) : (
                <div className="py-8">
                  <p className="text-gray-400 text-center text-lg">
                    No products in the cart
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="absolute">
        <div className={styles.quantity}>{totalQuantity}</div>
      </div>
    </div>
  );
}

export default Cart;
