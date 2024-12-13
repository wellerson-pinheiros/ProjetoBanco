import { Conta } from "../model/Conta";

export interface ContaRepository{


        //métodos do CRUD (Creat, Read, Update e Delete)

    procurarPorNumero(numero:number):void;
    listarTodas():void;
    cadastrar(conta: Conta):void;
    atualizar(conta: Conta): void;
    deletar (numero: number): void;

    //métodos Bancário


    sacar(numero:number, valor: number): void;
    depositar(numero:number, valor: number):void;
    trasferir(numeroOrigem: number, numeroDestino: number, valor : number): void;
}