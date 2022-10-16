export abstract class Account {

    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    getName = (): string => {
        return this.name
    }

    getAccountNumber = () => {
        return this.accountNumber
    }

    getBalance = (): number => {
        return this.balance
    }

    deposit = ( value: number ): boolean => {
        this.validateStatus()
        this.balance += value
        console.log(`Deposito de ${value} realizado na conta ${this.accountNumber}.`)
        return true
    }

    withdraw = ( value: number ): boolean => {
        this.validateStatus()
        if( this.balance >= value ) {
            this.balance -= value
            console.log(`Saque de ${value} realizado na conta ${this.accountNumber}.`)
            return true
        } else {
            console.log(`Não foi possível realizar o saque.`)
            return false
        }
    }

    validateStatus = (): boolean => {
        if ( !this.status ) {
            throw new Error(`Conta ${this.accountNumber} etá inativa.`)
        }
        return this.status
    }

}