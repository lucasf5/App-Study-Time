import React from "react";
import style from "./style.module.scss";

const Relogio = ({ tempo = 0 }: { tempo: number | undefined }) => {
  const minutos = Math.round(tempo / 60);
  const segundos = Math.round(tempo % 60);

  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, "0");
  const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, "0");

  return (
    <div>
      <span className={style.relogioNumero}>{minutoDezena}</span>
      <span className={style.relogioNumero}>{minutoUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundoDezena}</span>
      <span className={style.relogioNumero}>{segundoUnidade}</span>
    </div>
  );
};

export default Relogio;

  // -------------------------------------
  //! O padStart() e o padEnd() aceita dois parâmetros:
  //   O padLength o comprimento da string resultante depois de preenchida. Se o padLength for menor que o comprimento da string, ela será retornada como está sem preenchimento.
  // O padString é um argumento opcional usado para preencher a string. O valor padrão para esse parâmetro é espaços em branco ' '. Se o padString for maior que o padLength, o padString será truncado e somente a parte mais à esquerda será preenchida.
  // -------------------------------------

  // ("Lu").padStart(5, "0") // 000Lu
  // ("Lu").padEnd(5, "0") // Lu000