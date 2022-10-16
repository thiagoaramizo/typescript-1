import { Account } from "./Account"

export class CompanyAccount extends Account {

    private loan: number = 0

    constructor( name: string, accountNumber: number ){
        super( name, accountNumber)
    }

    getLoan = ( value: number ): boolean => {
        this.validateStatus()
        console.log(`Empréstimo de ${value} realizado para a conta ${this.getAccountNumber()}.`)
        this.deposit( value )
        this.loan =+ value
        return true
    }
}