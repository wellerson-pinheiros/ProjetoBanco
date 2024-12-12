import readlinesync = require('readline-sync');
import { Conta } from './src/model/Conta';
import { ContaCorrent } from './src/model/ContaCorrente';
import { contaPoupanca } from './src/model/ContaPoupança';

 export function main (){

    let opcao: number;


    // CRIA NOVOS OBJETOS DA CLASSE CONTA
    const c1 = new Conta(1,123,1,"Jonas",100000)
    c1.visualizar();

    //sacar
    console.log(c1.sacar(100.00));
    c1.visualizar();

    //depositar conta corrente

    
    
    const c2 = new Conta(2,142,2,"Aline",100000)
    c2.visualizar();

    //depositar
    c2.depositar(100.00);
    c2.visualizar()

    // Conta correntes
    const cc1 = new ContaCorrent(3,789,1,"Andressa",100000,1000);
    //sacando conta corrente

    cc1.sacar(100500)
    cc1.visualizar();

    cc1.depositar(2000)
    cc1.visualizar();

    // CONTA POUPANÇA DEPOSITP
    const cp2 = new contaPoupanca(351,452,2,"Wellerson",50000, 27 );
    cp2.visualizar();

    while (true) {

    console.log('*************************************************')
    console.log('             Banco do BraZil com Z               ')
    console.log('*************************************************')
    console.log('      1 - Criar conta')
    console.log('      2 - Listar todas as contas')
    console.log('      3 - Buscar conta por numero ')
    console.log('      4 - Atualizar dados da conta')
    console.log('      5 - Apagar Conta')
    console.log('      6 - sacar')
    console.log('      7 - depositar')
    console.log('      8 - Trasferir Valores entre Contas ')
    console.log('      9 - Sair')

    console.log('entre com a opcao desejada')

    opcao = readlinesync.questionInt('Entre com o numero desejado!')
    
    if(opcao === 9 ){
        console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            process.exit(0);

    }

    switch(opcao){

        case 1:
            console.log("\n\nCriar Conta\n\n");
            break;
        case 2:
            console.log("\n\nListar todas as Contas\n\n");
            break;
        case 3:
            console.log("\n\nConsultar dados da Conta - por número\n\n");
            break;   
        case 4:
            console.log("\n\nAtualizar dados da Conta\n\n");
            break;
        case 5:
            console.log("\n\nApagar uma Conta\n\n");
            break;
        case 6:
            console.log("\n\nSaque\n\n");   
            break;
        case 7:
            console.log("\nOpção Inválida!\n") 
            break;
        case 8:
            console.log("\n\nTransferência entre Contas\n\n");
            break;
        default:
            console.log('\nopcao invalida\n')        
            break;
        }

    }
 
}


/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
console.log("\n*****************************************************");
console.log("Projeto Desenvolvido por:Wellerson pinheiros ");
console.log("Generation Brasil - generation@generation.org");
console.log("https://github.com/wellerson-pinheiros");
console.log("*****************************************************");
}


main();



