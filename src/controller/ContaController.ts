import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { Colors } from "../util/Colors";

export class ContaController implements ContaRepository {
  private listaContas = new Array<Conta>;
  
  public numero = 0;
  
  procurarPorNumero(numero: number): void {
    const buscaConta = this.buscarNoArray(numero);
    if(buscaConta !== null)
      buscaConta.visualizar();
    else
      console.log(Colors.fg.red, '\nConta não encontrada', Colors.reset)
  }

  
  listarTodas(): void {
    for(let conta of this.listaContas){
      conta.visualizar();
    }
  }
  
  procurarPorTitular(titular: string): void {
    const buscaPorTiturlar = this.listaContas.filter(conta => conta.titular.toUpperCase().includes(titular.toUpperCase()));

    if(buscaPorTiturlar.length > 0) {
      buscaPorTiturlar.forEach(conta => conta.visualizar());
    } else console.log(Colors.fg.red, 'Nenhuma conta foi encontrada', Colors.reset)
  }

  cadastrar(conta: Conta): void {
    this.listaContas.push(conta);
    console.log(`A Conta número ${conta.numero} foi cadastrada com sucesso!`)
  }
  
  atualizar(conta: Conta): void {
    const buscaConta = this.buscarNoArray(conta.numero);
    if(buscaConta !== null){
      this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
      console.log(Colors.fg.green, `\nConta número ${conta.numero} foi atualizada com sucesso!`, Colors.reset);
    }
    else
      console.log(Colors.fg.red, '\nConta não encontrada', Colors.reset);
  }

  deletar(numero: number): void {
    const buscaConta = this.buscarNoArray(numero);
    if(buscaConta !== null) {
      this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
      console.log(Colors.fg.green, `\nConta número ${numero} deletada com sucesso`, Colors.reset)
    }
    else
      console.log(Colors.fg.red, '\nConta não encontrada', Colors.reset)
  }
  
  
  sacar(numero: number, valor: number): void {
    const buscaConta = this.buscarNoArray(numero);
    if(buscaConta !== null){
      if(buscaConta.sacar(valor) === true) console.log(Colors.fg.green, `\nO saque no valor de ${valor} na conta número ${numero} foi realizado com sucesso`, Colors.reset)
      }
    else
      console.log(Colors.fg.red, '\nConta não encontrada', Colors.reset);
  }
  depositar(numero: number, valor: number): void {
    const buscaConta = this.buscarNoArray(numero);
    if(buscaConta !== null){
      buscaConta.depositar(valor);
      console.log(Colors.fg.green, `\nO depósito no valor de ${valor} na conta número ${numero} foi realizado com sucesso`, Colors.reset);
    }
    else
      console.log(Colors.fg.red, '\nConta não encontrada', Colors.reset)
  }
  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    const buscaContaOrigem = this.buscarNoArray(numeroOrigem);
    const buscaContaDestino = this.buscarNoArray(numeroDestino);
    if(buscaContaOrigem !== null && buscaContaDestino !== null){
      if(buscaContaOrigem.sacar(valor) === true) {
        buscaContaDestino.depositar(valor);
        console.log(Colors.fg.green, `\nA transderencia no valor de ${valor} na conta número ${numeroOrigem} para a conta número ${numeroDestino} foi realizada com sucesso`, Colors.reset)

      }
    }
    else
      console.log(Colors.fg.red, '\nConta de origem e/ou destino não foram encontradas', Colors.reset);
  }
  
  gerarNumero(): number{
    return ++ this.numero;
  }
  
  public buscarNoArray(numero:number): Conta | null {
    for(let conta of this.listaContas) {
      if(conta.numero === numero)
        return conta;
    }
    
    return null;
  }
  
}