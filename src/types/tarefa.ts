export interface Itarefa{
  tarefa: string,
  tempo: string,
  selecionado: boolean,
  completado: boolean,
  id: string
}

interface Props{
  tarefas: Itarefa[],
  selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}