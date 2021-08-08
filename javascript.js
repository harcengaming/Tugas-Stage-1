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
function getDataCari() {

    let dataCari = "<tr><th>Negara</th><th>Positif</th><th>Sembuh</th><th>Meninggal</th></tr>";


    fetch('https://covid-19.mathdro.id/api/confirmed')
    .then(response2 => response2.json())
    .then(data2 => {
        console.log(data2)
        data2.forEach(function(item) {
            dataCari += '<tr>'
            dataCari += '<td>'+  item.countryRegion + '</td>'
            dataCari += '<td>'+  item.confirmed  + '</td>'
            dataCari += '<td>'+  item.recovered  + '</td>'
            dataCari += '<td>'+  item.deaths  + '</td>'
            dataCari += '</tr>'

            // document.getElementById(".data-container").innerHTML = `${response2[0].item.uid.value}`
          
        })

        document.getElementById("table-cari").innerHTML += dataCari
        // document.getElementById("table-cari").innerHTML += `${response2.deaths}`

        // document.querySelector(".display-negara").innerHTML = dataCari += '<td>'+ confirmed.countryRegion + '</td>'
        // document.querySelector(".display-negara-sembuh").innerHTML = `${confirmed.recovered}`
        // document.querySelector(".display-negara-meninggal").innerHTML = `${confirmed[0].deaths}`
        
    })
    .catch(err2 => {
        console.log(err2)
    });
}

//=============cari==============
// const searchCountry = () => {
//     search = document.querySelector(".input-cari").dataCari;
//     console.log(" ", search);

//     document.querySelector(".display-negara").innerHTML = search;

//     fetch(`https://covid-19.mathdro.id/api/confirmed/${search}`)
//     .then((response2) => response2.json())
//     .then((data2) =>  (document.querySelector(".display-negara-sembuh").innerHTML = data2.recovered.value)
    
//     );
// };

// searchCountry();