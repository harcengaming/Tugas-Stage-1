//===================Global=====================================
function getDataGlobal() {

    fetch('https://covid-19.mathdro.id/api')
    .then(response => response.json())
    .then(data => {
        console.log(data)

        let positif = data.confirmed.value
        let sembuh = data.recovered.value
        let meninggal = data.deaths.value
        
        document.getElementById("data-positif").innerHTML = positif
        document.getElementById("data-sembuh").innerHTML = sembuh
        document.getElementById("data-meninggal").innerHTML = meninggal  
    })
    .catch(err => {
        console.log(err)
    });
}

//===================Indonesia=====================================
function getDataIndonesia() {

    fetch('https://covid-19.mathdro.id/api/countries/indonesia')
    .then(response3 => response3.json())
    .then(data3 => {
        console.log(data3)

        let positif = data3.confirmed.value
        let sembuh = data3.recovered.value
        let meninggal = data3.deaths.value
        
        document.getElementById("data-positif2").innerHTML = positif
        document.getElementById("data-sembuh2").innerHTML = sembuh
        document.getElementById("data-meninggal2").innerHTML = meninggal  
    })
    .catch(err => {
        console.log(err)
    });
}

//=============Cari===============
function getDataNegara() {

    // let button = document.querySelector("cari-kotak");
    // button.addEventListener("click", (dataNegara) => {
    //         let search = document.getElementById("cari-input").value;
    //         console.log(search);

        let dataNegara = "<tr><th>Provinsi</th><th>Positif</th><th>Sembuh</th><th>Meninggal</th></tr>";
        //   let dataNegara = document.querySelector("data-container");

        fetch('https://covid19.mathdro.id/api/confirmed/')
        .then(response2 => response2.json())
        .then(data2 => {
            console.log(data2)
            data2.forEach(function(item) {
                dataNegara += '<tr>'
                dataNegara += '<td id="text-left">'+ item.countryRegion + '</td>'
                dataNegara += '<td>'+ item.confirmed + '</td>'
                dataNegara += '<td>'+ item.recovered + '</td>'
                dataNegara += '<td>'+ item.deaths + '</td>'
                dataNegara += '</tr>'
            })

            document.getElementById("table").innerHTML = dataNegara
        })
        .catch(err => {
            console.log(err)
        });
    }

//============================================================
// function getDataNegara() {
 
//     let dataNegara = "<tr><th>Provinsi</th><th>Positif</th><th>Sembuh</th><th>Meninggal</th></tr>";
 
//     fetch(`https://covid19.mathdro.id/api/countries/${negara}`)
//     .then(response4 => response4.json())
//     .then(data4 => {
//             dataNegara += '<tr>'
//             dataNegara += '<td>'+ negara.data4[0].countryRegion + '</td>'
//             dataNegara += '<td>'+ data4.data4[0].confirmed + '</td>'
//             dataNegara += '<td>'+ data4.data4[0].recovered + '</td>'
//             dataNegara += '<td>'+ data4.data4[0].deaths + '</td>'
//             dataNegara += '</tr>'
 
//         document.getElementById("table").innerHTML = dataNegara
//     })

//     .catch(err => {
//         console.log(err)
//     });
// }