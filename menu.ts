import readlinesync = require('readline-sync');


 export function main (){

    let opcao: number;

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



