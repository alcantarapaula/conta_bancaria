'use stric'

import { Colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { Input } from './src/util/Input';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from './src/controller/ContaController';

// Criar um Objeto Global da Classe ContaController
const contas = new ContaController();

// Criar um array contendo os tipos de conta
const tipoContas = ['Conta Corrente', 'Conta Poupança'];

let operacao: number;

criarContasTeste();

export function main() {

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
        criarConta();
        keyPress();
      break;
      case 2: 
        console.log(Colors.fg.whitestrong, '\nContas Cadastradas', Colors.reset);
        contas.listarTodas();
        keyPress();
      break;
      case 3: 
        console.log(Colors.fg.whitestrong, '\nBuscar Conta', Colors.reset);
        buscarContaPorNumero();
        keyPress();
      break;
      case 4: 
        console.log(Colors.fg.whitestrong, '\nAtualizar Dados da Conta', Colors.reset);
        atualizarConta();
        keyPress();
      break;
      case 5: 
        console.log(Colors.fg.whitestrong, '\nApagar Conta', Colors.reset);
        deletarContaPorNumero();
        keyPress();
      break;
      case 6: 
        console.log(Colors.fg.whitestrong, '\nSacar', Colors.reset);
        sacar();
        keyPress();
      break;
      case 7: 
        console.log(Colors.fg.whitestrong, '\nDepositar', Colors.reset);
        depositar();
        keyPress();
      break;
      case 8: 
        console.log(Colors.fg.whitestrong, '\nFazer uma Transferência', Colors.reset);
        transferir();
        keyPress();
      break;
      case 9: 
        console.log(Colors.fg.whitestrong, '\nBuscar Conta por Titular', Colors.reset);
        procurarPorTitular();
        keyPress();
      break;
      default:
        console.log(Colors.fg.red, '\nOperação Inválida!', Colors.reset);
        keyPress();
    };
  };
  
  

};


// Opção 1: Criar uma nova Conta

function criarConta(){

  console.log('Digite o número da agência: ');
  const agencia = Input.questionInt('');
  
  console.log('Digite o nome do titular: ');
  const titular = Input.question('');

  console.log('Selecione o tipo da conta: ');
  const tipo = Input.keyInSelect(tipoContas, '', {cancel:false}) + 1;
  
  console.log('Digite o saldo da conta: ');
  const saldo = Input.questionFloat('');

  switch(tipo){
    case 1: // Conta Corrente
      console.log('Digite o limite da conta: ');
      const limite = Input.questionFloat('');
      contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, titular, tipo, saldo, limite));
    break;
    case 2: // Conta Poupança
      console.log('Digite o dia do aniversário da conta: ');
      const aniversario = Input.questionInt('');
      contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, titular, tipo, saldo, aniversario));
    break;
  }


}

// Opção 3: Procurar uma Conta pelo Número

function buscarContaPorNumero(): void {
  console.log('Digite o número da conta: ');
  const  numero = Input.questionInt('');

  contas.procurarPorNumero(numero);
}

// Opção 4: Atualizar os dados de uma Conta

function atualizarConta(): void {
  console.log('Digite o número da conta: ');
  const  numero = Input.questionInt('');

  const conta = contas.buscarNoArray(numero);

  if(conta !== null) {

    // Guarda os valores atuais da conta
    let agencia: number = conta.agencia;
    let titular: string = conta.titular;
    const tipo: number = conta.tipo;
    let saldo: number = conta.saldo;

    // Atualização da Agência
    console.log(`\nAgência Atual: ${agencia}`);
    console.log('Digite o número da nova Agência \n(Pressione ENTER para manter o número atual');

    agencia = Input.questionInt('', {default: agencia});

    // Atualização do titular
    console.log(`\nTitular Atual: ${titular}`);
    console.log('Digite o o novo nome do titular \n(Pressione ENTER para manter o nome atual');

    titular = Input.question('', {default: titular});

    // Atualização do Saldo
    console.log(`\nSaldo Atual: ${saldo}`);
    console.log('Digite o o valor do novo saldo \n(Pressione ENTER para manter o valor atual');

    saldo = Input.questionFloat('', {default: saldo});
    // Atualização do Tipo
    switch(tipo){
    case 1: { // Conta Corrente
      let limite: number = (conta as ContaCorrente).limite;
      
      // Atualização do Limite
      console.log(`\nLimite Atual: ${limite}`);
      console.log('Digite o o valor do novo limite \n(Pressione ENTER para manter o valor atual');

      limite = Input.questionFloat('', {default: limite});

      contas.atualizar(new ContaCorrente(numero, agencia, titular, tipo, saldo, limite));
    }break;
    case 2: {// Conta Poupança
      let aniversario: number = (conta as ContaPoupanca).aniversario;

      // Atualização do aniverário
      console.log(`\nAniversário Atual: ${aniversario}`);
      console.log('Digite o valor do novo limite \n(Pressione ENTER para manter o valor atual');

      aniversario = Input.questionInt('', {default: aniversario});
      
      contas.atualizar(new ContaPoupanca(numero, agencia, titular, tipo, saldo, aniversario));
    }break;
  }



  } else {
    console.log(Colors.fg.red, `A conta número ${numero} não existe`, Colors.reset);
  }
}


// Opção 5: Deletar uma Conta pelo número

function deletarContaPorNumero(): void {
  console.log('Digite o número da conta: ');
  const  numero = Input.questionInt('');

  console.log('Tem certeza de que deseja deletar sua conta?');
  const confirma = Input.keyInSelect(['SIM', 'NÃO'], '', {cancel:false});
  if(confirma === 0) contas.deletar(numero);
  return;
}

// Opção 6: sacar

function sacar(): void {
  console.log('Digite o número da conta: ');
  const numero = Input.questionInt('');

  const conta = contas.buscarNoArray(numero);

  if(conta !== null) {
    console.log( 'Digite o valor do saque: ');
    const valor = Input.questionFloat('');

    contas.sacar(numero, valor);
  } else console.log(Colors.fg.red, `A conta número ${numero} não foi encontrada`);
}

function depositar(): void {
  console.log('Digite o número da conta: ');
  const numero = Input.questionInt('');

  const conta = contas.buscarNoArray(numero);

  if(conta !== null) {
    console.log( 'Digite o valor do depósito: ');
    const valor = Input.questionFloat('');

    contas.depositar(numero, valor);
  } else console.log(Colors.fg.red, `A conta número ${numero} não foi encontrada`);
}
function transferir(): void {
  console.log('Digite o número da conta de origem: ');
  const numeroOrigem = Input.questionInt('');
  console.log('Digite o número da conta de destino: ');
  const numeroDestino = Input.questionInt('');

  const contaOrigem = contas.buscarNoArray(numeroOrigem);
  const contaDestino = contas.buscarNoArray(numeroDestino);

  if(contaOrigem === null) {
    console.log(Colors.fg.red, `A conta de origem número ${numeroOrigem} não foi encontrada`);
  } else if(contaDestino === null) {
    console.log(Colors.fg.red, `A conta de destino número ${numeroDestino} não foi encontrada`);
  } else {

    console.log( 'Digite o valor da transferência: ');
    const valor = Input.questionFloat('');
  
    contas.transferir(numeroOrigem, numeroDestino, valor);
  }
}

function procurarPorTitular(): void {
  console.log('Digite o Nome do Titular: ');
  const titular = Input.question('');

  contas.procurarPorTitular(titular);
}

function sobre(): void{
  console.log(Colors.fg.bluestrong, '\nDesenvolvido por Paula Alcantara - alcantara_paula@outlook.com\nGitHub: github.com/alcantarapaula\nLinkedIn: linkedin.com/in/alcantarapaula', Colors.reset)
};

function keyPress(): void{
  console.log(Colors.reset, '\nPressione enter para continuar:');
  Input.prompt();
}

function criarContasTeste(): void{
   
    // Instâncias da Classe ContaCorrente
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 'Amanda Magro', 1, 1000000.00, 100000.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 'João da Silva', 1,  1000.00, 100.00));
 
    // Instâncias da Classe ContaPoupança
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, "Geana Almeida", 2, 10000, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5698, "Jean Lima", 2, 15000, 15));
 
}

main();