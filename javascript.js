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
// function getDataCari() {

//     let dataCari = document.querySelector("cari");
//     if(submit){
//             submit.addEventListener("click", swapper, false);
//         }

//     let cari = document.getElementById("cari-input");
//     console.log(cari);
        


//     fetch('https://covid-19.mathdro.id/api/confirmed')
//     .then(response2 => response2.json())
//     .then(data2 => {
//         console.log(data2)

//         data2.forEach(function(item) {
//             `<div class="negara">

//                 <h2 class="judul"> Negara : ${item.countryRegion.value}</h2>

//                 <div class="data-covid"> 

//                     <div class="kolom">
//                         <div class="red"> 
//                         <div class="cardheading"> 
//                             Positif : <br>
//                             <span> ${item.confirmed} </span> <br>
//                         </div></div>
//                     </div>
            
//                     <div class="kolom">
//                         <div class="green"> 
//                             Sembuh : <br>
//                             <span> ${item.recovered} </span>
//                         </div>
//                     </div>
            
//                     <div class= "kolom">
//                         <div class="ungu"> 
//                             Meninggal : <br>
//                             <span> ${item.deaths} </span>
//                         </div>
//                     </div>       
//                 </div>
//             </div>`;
//             // document.getElementById(".data-container").innerHTML = `${response2[0].item.uid.value}`
          
//         })

//         document.getElementById("data-container").innerHTML = dataCari
//     })
//     .catch(err2 => {
//         console.log(err2)
//     });
// }

//=============cari==============
