import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { Itarefa } from "../../types/tarefa";
import Botao from "../Botao";
import style from "./forms.module.scss";
import {v4 as uuidv4} from 'uuid';

const Form = ({setTarefas}:{setTarefas:Dispatch<SetStateAction<Itarefa[]>>}) => {
  const estadoInicial = {
    tarefa: "",
    tempo: "00:00:00"
  }

  const [estado, setEstado] = useState(estadoInicial);

  const adicionarTarefa = (event: FormEvent) =>{
    event.preventDefault();
    setTarefas((tarefasAntigas)=>[...tarefasAntigas, {...estado,
      selecionado: false,
      completado: false,
      id: uuidv4()
    }
    ]
    );
    setEstado(estadoInicial)
  }

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">
            Tarefa
        </label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar"
          value={estado.tarefa}
          onChange={(evento)=>setEstado({...estado, tarefa: evento.target.value})}
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">
            Tempo
        </label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          value={estado.tempo}
          onChange={(evento)=>setEstado({...estado, tempo: evento.target.value})}
          required
        />
      </div>
      <div>
        <Botao botao="Enviar" type="submit"/>
      </div>
    </form>
  );
};

export default Form;
