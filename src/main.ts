import { Library } from './data'

const dataKu = () => {
    console.log("\n==================Daftar buku=====================")
    let listItems = Library.map((persons: { id: any; buku: any; price: any }) =>
        console.log("\n||",persons.id,"||", persons.buku,"||", persons.price)
    )
}
const borrowBook = () => {
    const pinjam: number = 7
    const pinjamBuku: string = "SDA"
    let hasilSewa: number;
    const denda: number = 100

    Library.map((book: { id: number; buku: String; price: number }) => {
        if (pinjam >= 7) {
            console.log("\nlebih dari 7 hari")
            console.log("Maka didenda 100 rupiah")
            if (pinjamBuku == book.buku) {
                hasilSewa = book.price
                console.log("Harga sewa: ", hasilSewa)
                console.log("Denda: ", denda)
                console.log("Total bayar anda + Denda: ", hasilSewa * denda)
            }
        } else {
            console.log("kurang dari 7")
        }
    })

}
dataKu()
borrowBook()