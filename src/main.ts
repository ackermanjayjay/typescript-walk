import {Library} from './data'

const dataKu = () => {
    let listItems = Library.map((persons: { id: any; buku: any; price: any })=>
    console.log(persons.id,persons.buku,persons.price)
    )
}
dataKu()