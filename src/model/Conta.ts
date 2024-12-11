export class Conta{


    // modelo de dados
    private _numero:number;
    private _agencia:number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;


 constructor(numero: number, agencia: number, tipo:number, titular: string, saldo:number ){
    this._numero = numero;
    this._agencia = agencia;
    this._tipo = tipo;
    this._titular = titular;
    this._saldo = saldo;
 }

// gerar os métodos getter's e setter's



	public get numero(): number {
		return this._numero;
	}

   
	public get agencia(): number {
		return this._agencia;
	}

   
	public get tipo(): number {
		return this._tipo;
	}

   
	public get titular(): string {
		return this._titular;
	}

	public get saldo(): number {
		return this._saldo;
	}

    
	public set numero(value: number) {
		this._numero = value;
	}

   
	public set agencia(value: number) {
		this._agencia = value;
	}

    
	public set tipo(value: number) {
		this._tipo = value;
	}

  
	public set titular(value: string) {
		this._titular = value;
	}

   
	public set saldo(value: number) {
		this._saldo = value;
	}


    public sacar(valor: number): boolean{
        if(valor >= this._saldo){
            console.log("saldo insulficiente")
            return false;
            }else{
                this._saldo -= valor;
                return true;
            }
    }

    public depositar (valor: number): void{
        this._saldo += valor;
    }



    public visualizar(){

        let tipo:string;
        switch(this._tipo){
            case 1:
                tipo = "Conta corrente";
            break;

            case 2:
                tipo = "Conta poupança"
            break;
            default:
                tipo = "Conta invalida"   
        }

        console.log('**********************************')
        console.log('DADOS DA CONTA')
        console.log('**********************************')
        console.log(`Número da Conta: ${this._numero}`)
        console.log(`Número da Agência ${this._agencia}`)
        console.log(`Tipo da Conta: ${tipo}`)
        console.log(`Nome do Titular da Conta ${this._titular}`)
        console.log(`Saldo da Conta: ${this.saldo}`)
    }

}