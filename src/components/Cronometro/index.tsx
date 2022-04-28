import React, { useEffect, useState } from 'react'
import { tempoParaSegundos } from '../../common/utils/date'
import { Itarefa } from '../../types/tarefa'
import Botao from "../Botao"
import Relogio from './Relogio'
import style from "./style.module.scss"

interface Props {
  // é undefined pois não foi selecionado nada ainda. Depois que selecionar ele se torna um tipo Itarefa com todos os elementos passados na interface Itarefa
  selecionado: Itarefa | undefined;
  finalizarTarefa: () => void
}

const Cronometro = ({ selecionado, finalizarTarefa }: Props) => {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado?.tempo));
    }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000);
  }
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao botao="Iniciar" onClick={() => regressiva(tempo)} />
    </div>
  );
};

export default Cronometro