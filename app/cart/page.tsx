import Container from "../../app/components/products/Container";
import CartClient from "./CartCliente";

const Cart = () => {
  return <div className="pt-8">
    <Container>
      <CartClient/>
    </Container>
  </div>;
};

export default Cart;
