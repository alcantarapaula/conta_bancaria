'use stric'

import leia from 'readline-sync';
import { Colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';

let option: number;


do {
  // Instanciar Objetos da Classe Conta

  const c1 = new Conta(1, 1234, 'Paula', 1, 100000.00);

  c1.visualizar();
  
  console.log(Colors.fg.blue, '\n***************************************');
  console.log('                                       ');
  console.log(Colors.fg.bluestrong, '               DIGIBANK                ', Colors.reset);
  console.log(Colors.fg.blue, '                                       ');
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
  console.log('                                       ', Colors.reset);

  option = leia.questionInt('Escolha a opcao desejada: ')

  if(option === 0) {
    credits();
    process.exit(0);
  };

  switch(option) {
    case 1: 
      console.log(Colors.fg.whitestrong, 'Criar Conta', Colors.reset);
    break;
    case 2: 
      console.log(Colors.fg.whitestrong, 'Contas Cadastradas', Colors.reset);
    break;
    case 3: 
      console.log(Colors.fg.whitestrong, 'Buscar Conta', Colors.reset);
    break;
    case 4: 
      console.log(Colors.fg.whitestrong, 'Atualizar Dados da Conta', Colors.reset);
    break;
    case 5: 
      console.log(Colors.fg.whitestrong, 'Apagar Conta', Colors.reset);
    break;
    case 6: 
      console.log(Colors.fg.whitestrong, 'Sacar', Colors.reset);
    break;
    case 7: 
      console.log(Colors.fg.whitestrong, 'Depositar', Colors.reset);
    break;
    case 8: 
      console.log(Colors.fg.whitestrong, 'Fazer uma Transferência', Colors.reset);
    break;
    case 9: 
      console.log(Colors.fg.whitestrong, 'Buscar Conta por Titular', Colors.reset);
    break;
    default:
      console.log('Operação Inválida!');
  }
  

} while(true);

function credits(): void{
  console.log(Colors.fg.bluestrong, '\nDesenvolvido por Paula Alcantara - alcantara_paula@outlook.com\nGitHub: github.com/alcantarapaula\nLinkedIn: linkedin.com/in/alcantarapaula', Colors.reset)
};
