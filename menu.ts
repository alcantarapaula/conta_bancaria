'use stric'

import leia from 'readline-sync';
import { colors } from './src/util/Colors';

let option: number;

console.log(colors.fg.blue,'\n***************************************');
console.log('                                       ');
console.log('               DIGIBANK                ');
console.log('                                       ');
console.log('***************************************');
console.log('                                       ');
console.log('  1 - Criar Conta                      ');
console.log('  2 - Listar todas as Contas           ');
console.log('  3 - Buscar Conta por Número          ');
console.log('  4 - Atualizar Dados da Conta         ');
console.log('  5 - Apagar Conta                     ');
console.log('  6 - Sacar                            ');
console.log('  7 - Depositar                        ');
console.log('  8 - Transferir valores entre Contas  ');
console.log('  9 - Buscar Conta por Titular         ');
console.log('  0 - Finalizar                        ');
console.log('                                       ');
console.log('***************************************');
console.log('                                       ', colors.reset);

do {
  option = leia.questionInt('Escolha a opcao desejada: ')

  if(option === 0) {
    credits();
    process.exit(0);
  };

  switch(option) {
    case 1: 
      console.log(colors.fg.whitestrong, 'Criar Conta', colors.reset);
    break;
    case 2: 
      console.log(colors.fg.whitestrong, 'Contas Cadastradas', colors.reset);
    break;
    case 3: 
      console.log(colors.fg.whitestrong, 'Buscar Conta', colors.reset);
    break;
    case 4: 
      console.log(colors.fg.whitestrong, 'Atualizar Dados da Conta', colors.reset);
    break;
    case 5: 
      console.log(colors.fg.whitestrong, 'Apagar Conta', colors.reset);
    break;
    case 6: 
      console.log(colors.fg.whitestrong, 'Sacar', colors.reset);
    break;
    case 7: 
      console.log(colors.fg.whitestrong, 'Depositar', colors.reset);
    break;
    case 8: 
      console.log(colors.fg.whitestrong, 'Fazer uma Transferência', colors.reset);
    break;
    case 9: 
      console.log(colors.fg.whitestrong, 'Buscar Conta por Titular', colors.reset);
    break;
    default:
      console.log('Operação Inválida!');
  }
  

} while(true);

function credits(): void{
  console.log(colors.fg.bluestrong, '\nDesenvolvido por Paula Alcantara - alcantara_paula@outlook.com\nGitHub: github.com/alcantarapaula\nLinkedIn: linkedin.com/in/alcantarapaula', colors.reset)
};
