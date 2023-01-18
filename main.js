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

const write_data_to_file = (file_name, data) => {
    let str = data.map(row => row + "\n").join("")
    fs.writeFile(file_name, str, (err ) => {
        if (err) return console.error(err)
    })
}

let us_data = filter_data(data, "united states")
let canada_data = filter_data(data, "canada")

write_data_to_file("canada.txt", canada_data)
write_data_to_file("usa.txt", us_data)
