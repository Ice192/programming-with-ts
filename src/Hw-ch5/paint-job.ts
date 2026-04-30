function paint (wall_space: number, harga_galon: number) {
    const total_galon = wall_space / 112
    const hours = total_galon * 8
    const paint_cost = total_galon * harga_galon
    const biaya_tenaga = hours * 35
    const total_biaya = paint_cost + biaya_tenaga

    return {total_galon, hours, paint_cost, biaya_tenaga, total_biaya}
}

const result = paint(200,10)
console.log(`Jumlah Galon yang digunakan: ${result.total_galon}`)
console.log(`Jumlah jam yang diperlukan: ${result.hours}`)
console.log(`Jumlah biaya Galon: $${result.paint_cost}`)
console.log(`Biaya tenaga kerja: $${result.biaya_tenaga}`)
console.log(`---------------------------------------`)
console.log(`Total Biaya pengecatan adalah $${result.total_biaya}`)