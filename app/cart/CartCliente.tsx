"use client";
import { useCart } from "@/hooks/userCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

const CartClient = () => {
  const { cartProducts } = useCart();
  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl">Seu carrinho de compras.</div>
        <div>
          <Link
            href={"/"}
            className="text-slate-500 flex items-center gap-1 mt-2"
          >
            <MdArrowBack />
            <span>Continuar comprando</span>
          </Link>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default CartClient;
