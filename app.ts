import { CompanyAccount } from './class/CompanyAccount'
import { DioAccount } from './class/DioAccount'
import { PeopleAccount } from './class/PeopleAccount'

const contaTeste = new CompanyAccount('T A Ribeiro Ltda', 1)
contaTeste.getLoan( 100 )
contaTeste.deposit( 50 )
contaTeste.withdraw( 10 )
console.log( contaTeste )

const contaPessoal = new PeopleAccount( 'Thiago', 2, '000.000.000-00')
contaPessoal.deposit(100)
contaPessoal.withdraw(100)
console.log(  contaPessoal )

const contaDio = new DioAccount('DIO', 3)
contaDio.deposit( 100 )
contaDio.withdraw ( 5 )
console.log( contaDio )



