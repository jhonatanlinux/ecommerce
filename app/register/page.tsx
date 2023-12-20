import FormWrap from "../components/FormWrap";
import Container from "../components/products/Container";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <Container>
      <FormWrap>
        <RegisterForm />
      </FormWrap>
    </Container>
  );
};

export default Register;
