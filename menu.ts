'use stric'

import { Colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { Input } from './src/util/Input';

let operacao: number;

export function main() {

  // Instanciar Objetos da Classe Conta
  const c1 = new Conta(1, 1234, 'Paula', 1, 100000.00);

  c1.visualizar();

  while(true) {

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
  
    operacao = Input.questionInt('Escolha a opcao desejada: ')
  
    if(operacao === 0) {
      sobre();
      process.exit(0);
    };
  
    switch(operacao) {
      case 1: 
        console.log(Colors.fg.whitestrong, '\nCriar Conta', Colors.reset);
        keyPress();
      break;
      case 2: 
        console.log(Colors.fg.whitestrong, '\nContas Cadastradas', Colors.reset);
        keyPress();
      break;
      case 3: 
        console.log(Colors.fg.whitestrong, '\nBuscar Conta', Colors.reset);
        keyPress();
      break;
      case 4: 
        console.log(Colors.fg.whitestrong, '\nAtualizar Dados da Conta', Colors.reset);
        keyPress();
      break;
      case 5: 
        console.log(Colors.fg.whitestrong, '\nApagar Conta', Colors.reset);
        keyPress();
      break;
      case 6: 
        console.log(Colors.fg.whitestrong, '\nSacar', Colors.reset);
        keyPress();
      break;
      case 7: 
        console.log(Colors.fg.whitestrong, '\nDepositar', Colors.reset);
        keyPress();
      break;
      case 8: 
        console.log(Colors.fg.whitestrong, '\nFazer uma Transferência', Colors.reset);
        keyPress();
      break;
      case 9: 
        console.log(Colors.fg.whitestrong, '\nBuscar Conta por Titular', Colors.reset);
        keyPress();
      break;
      default:
        console.log(Colors.fg.red, '\nOperação Inválida!', Colors.reset);
        keyPress();
    };
  };
  
  

};

function sobre(): void{
  console.log(Colors.fg.bluestrong, '\nDesenvolvido por Paula Alcantara - alcantara_paula@outlook.com\nGitHub: github.com/alcantarapaula\nLinkedIn: linkedin.com/in/alcantarapaula', Colors.reset)
};

function keyPress(): void{
  console.log(Colors.reset, '\nPressione enter para continuar:');
  Input.prompt();
}

main();