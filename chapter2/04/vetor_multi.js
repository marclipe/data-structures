// DECLARAR UM VETOR PARA CADA DIA
var tarefas_segunda = ["Tarefa A", "Tarefa B", "Tarefa C"];
var tarefas_terca = ["Tarefa D", "Tarefa E", "Tarefa F"];
var tarefas_quarta = ["Tarefa G", "Tarefa H", "Tarefa I"];

// DECLARAR VETOR COM OS DIAS
var dias_tarefas = [tarefas_segunda, tarefas_terca, tarefas_quarta];

// PEGAR O DIA DO VETOR
tarefas_terca = dias_tarefas[1];
// PEGAR TAREFAR DO DIA
primeira_tarefa_terca = tarefas_terca[0];

// DECLARAÇÃO ALTERNATIVA
dias_tarefas = [
  ["Tarefa A", "Tarefa B", "Tarefa C"],
  ["Tarefa D", "Tarefa E", "Tarefa F"],
  ["Tarefa G", "Tarefa H", "Tarefa I"],
];

// PEGAR A TAREFA DO DIA DO VETOR
primeira_tarefa_terca = dias_tarefas[1][0];

console.log(primeira_tarefa_terca);
