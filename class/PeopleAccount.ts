import { Account } from "./Account"

export class PeopleAccount extends Account {
    private docId: string

    constructor( name: string, accountNumber: number, docId: string ){
        super( name, accountNumber)
        this.docId = docId
    }

    getDocId = () => {
        return this.docId
    }
}