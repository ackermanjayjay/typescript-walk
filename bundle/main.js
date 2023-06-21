"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const dataKu = () => {
    let listItems = data_1.Library.map((persons) => console.log(persons.id, persons.buku, persons.price));
};
dataKu();
