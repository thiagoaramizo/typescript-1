import { Account } from "./Account"

export class DioAccount extends Account {
    
    private depositOriginal = this.deposit
    
    deposit = ( value: number ) => {
        this.depositOriginal( value + 10 )
        return true
    }
}