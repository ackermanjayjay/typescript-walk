"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const dataKu = () => {
    console.log("\n==================Daftar buku=====================");
    let listItems = data_1.Library.map((persons) => console.log("\n||", persons.id, "||", persons.buku, "||", persons.price));
};
const borrowBook = () => {
    const pinjam = 7;
    const pinjamBuku = "SDA";
    let hasilSewa;
    const denda = 100;
    data_1.Library.map((book) => {
        if (pinjam >= 7) {
            console.log("\nlebih dari 7 hari");
            console.log("Maka didenda 100 rupiah");
            if (pinjamBuku == book.buku) {
                hasilSewa = book.price;
                console.log("Harga sewa: ", hasilSewa);
                console.log("Denda: ", denda);
                console.log("Total bayar anda + Denda: ", hasilSewa * denda);
            }
        }
        else {
            console.log("kurang dari 7");
        }
    });
};
dataKu();
borrowBook();
