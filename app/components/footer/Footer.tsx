import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Categorias de Produtos</h3>
            <Link href="#">Cameras de Segurança</Link>
            <Link href="#">Cercas Elétricas</Link>
            <Link href="#">Portão Eletrônico</Link>
            <Link href="#">Sistema de Energia Fotovoltaico</Link>
            <Link href="#">Serviços</Link>
            <Link href="#">Outros</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Trabalhos Finalizados</h3>
            <Link href="#">Exemplo 1</Link>
            <Link href="#">Exemplo 2</Link>
            <Link href="#">Exemplo 3</Link>
            <Link href="#">Exemplo 4</Link>
            <Link href="#">Exemplo 5</Link>
          </FooterList>
          <div className="w-full md:w-1/3 md-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">Quem Somos!</h3>
            <p className="mb-2">
              Bem-vindo à Inovatech Sistemas Técnologicos, sua parceira dedicada
              em soluções de segurança avançadas. Com uma sólida reputação
              construída ao longo de 10 anos, somos líderes no fornecimento de
              sistemas de segurança inovadores, com foco especial em cercas
              elétricas, portões eletrônicos e tecnologias afins.
            </p>
            <p>
              &copy; {new Date().getFullYear()} Inovatech. Todos os Direitos
              Reservados
            </p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Contatos</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="#">
                <ImWhatsapp size={24} />
              </Link>
              <Link href="#">
                <AiFillYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
