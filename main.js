// TODO 6 Filter data of Canada and write data to canada.txt
// TODO 7 Filter data of United States and write data to usa.txt

let fs = require('fs')
let to_be_deleted = ["canada.txt", "usa.txt"]

to_be_deleted.map(file_name => {
        fs.unlink(file_name, (err) => {
            if (err) return err;
            console.log(`Successfully deleted ${file_name}`)
        })
    }
)

function readCsv() {
    const content = fs.readFileSync('./input_countries.csv');
    return content.toString()
}

// turning data from csv to array of strings
let data = readCsv().split("\r\n");
const filter_data = (data, country_name) => data.filter(row => row.toLowerCase().includes(country_name))

let us_data = filter_data(data, "united states")
let canada_data = filter_data(data, "united states")

console.log(canada_data)
console.log(us_data)
