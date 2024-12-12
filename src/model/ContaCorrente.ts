import { Conta } from "./Conta";



export class ContaCorrent extends Conta{

    private _limite : number;


	constructor(numero: number, agencia: number, tipo:number, titular: string, saldo:number , limite: number ) 
    {

        super(numero, agencia,tipo,titular,saldo)
		this._limite = limite;
	}


  
	public get limite(): number {
		return this._limite;
	}

    
	public set limite(value: number) {
		this._limite = value;
	}
    
    public sacar(valor: number): boolean{
        if(valor >= (this.saldo + this.limite)){
            console.log("saldo insulficiente")
            return false;
            }else{
                this.saldo -= valor;
                return true;
            }
    }





    public visualizar(){
        super.visualizar()
        console.log(`Limite da conta ${this.limite}`);
    }

}