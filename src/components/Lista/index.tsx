import React, { useState } from "react";
import { Itarefa } from "../../types/tarefa";
import Item from "./item";
import style from "./lista.module.scss"


const Lista = ({
  tarefas,
  selecionaTarefa}:{
  tarefas: Itarefa[],
  selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}) => {

  return (
    <aside className={style.AppStyle}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} selecionaTarefa={selecionaTarefa} {...item} />
        ))}
      </ul>
    </aside>
  );
};

export default Lista;
