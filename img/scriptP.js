const fs = require('fs');

const axios = require('axios');
//QUE CESAAAAAAAAAAAAA NO LO EXPLIQUEEEEEE
function convertToCSV(objArray) {
    const array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
    let str = "";
    for (let i = 0; i < array.length; i++) {
        let line = "";
        for (let index in array[i]) {
            if (line != "") line += ",";
            string = array[i][index];
            if (string.length > 1) string = string.replace(/\n/g, ' ');
            line += string;
        }
        str += line + "\r\n";
    }
    return str;
}
//QUE CESAAAAAAAAAAAAA NO LO EXPLIQUEEEEEE

//Funcion para buscar la infor segun la tabla
async function search(kind) {

    let url = `https://jsonplaceholder.typicode.com/${kind}`;
    const res = await axios.get(url);
    const comentsJSON = JSON.parse(JSON.stringify(res.data)); //QUE CESAAAAAAAAAAAAA NO LO EXPLIQUEEEEEE
    console.log(comentsJSON)
    return comentsJSON;
}

async function save(kind) {
    let inforJason = await search(kind);
    let csv = await convertToCSV(inforJason);

    fs.writeFile(`./${kind}.csv`, csv, 'utf8', function(err) {
        if (err) {
            console.log(err, 'Some error occured - file either not saved or corrupted file saved.');
        } else {
            console.log('It\'s saved!');
        }
    });

}
/*
save('users')
save('posts')
save('comments')
save('albums')
save('photos')
save('todos')*/

function convertToCSVAddress(objArray) {
    const array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
    let str = "";
    for (let i = 0; i < array.length; i++) {
        let line = "";
        for (let index in array[i]) {
            if (line != "") line += ",";
            string = array[i][index];
            for (let index2 in string) {
                string2 = string[index2];

            }
            string2 += string.id;

            if (string.length > 1) string = string.replace(/\n/g, ' ');
            line += string2;
        }
        str += line + "\r\n";
    }
    return str;
}