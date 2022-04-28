import React from "react";
import style from "./botao.module.scss";

const Botao = ({
  botao,
  type,
  onClick,
}: {
  botao: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}) => {
  return (
    <button type={type} className={style.botao} onClick={onClick}>
      {botao}
    </button>
  );
};

export default Botao;
