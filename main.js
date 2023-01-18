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


