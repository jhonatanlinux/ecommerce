"use client";

import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    console.log("Enviando dados para registro:", data);

    axios
      .post("/api/register", data)
      .then(() => {
        console.log("Conta Criada!");
        toast.success("Conta Criada!");

        signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        }).then((callback) => {
          console.log("Callback do signIn:", callback);

          if (callback?.ok) {
            console.log("Usuário autenticado com sucesso!");
            router.push("/cart");
            router.refresh();
            toast.success("Você está Logado!");
          }

          if (callback?.error) {
            console.error("Erro durante a autenticação:", callback.error);
            toast.error(callback.error);
          }
        });
      })
      .catch((error) => {
        console.error("Erro durante o registro:", error);
        toast.error("Tente mais tarde!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Heading title="Faça o seu cadastro!" />
      <Button
        outline
        label="Logar com Google"
        icon={AiOutlineGoogle}
        onClick={() => {}}
      />
      <hr className="bg-slate-300 w-full h-px" />
      <Input
        id="name"
        label="Nome"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="email"
        label="E-mail"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Senha"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
      <Button
        label={isLoading ? "Aguarde" : "Criar conta!"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm">
        Voltar para tela de{" "}
        <Link className="underline" href="/login">
          Login!
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
