// ! AJAX-----------------------------------------------------------------------------------------------------

// let enteredCountryName = document.getElementById("enteredCountryName")
// let searchBtn = document.getElementById("searchBtn")
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         let countries = JSON.parse(this.responseText)

//         searchBtn.addEventListener("click", () => {
//             for (let country of countries) {
//                 if (country.name.common === enteredCountryName.value) {
//                     document.getElementById('result').innerHTML = `
//                      <div class="flag-content">
//                     <img src="${country.flags.png}" alt="">
//                 <h2>${country.name.common}</h2>
//             </div>

//             <div class="countryDetails">
//                 <ul>
//                     <li><span class="detailTitle">Capital:</span> <span class="detailContent">${country.capital}</span></li>
//                     <li><span class="detailTitle">Continent:</span> <span class="detailContent">${country.continents}</span></li>
//                     <li><span class="detailTitle">Population:</span> <span class="detailContent">${country.population}</span></li>
//                     <li><span class="detailTitle">Currency:</span> <span class="detailContent">${Object.values(country.currencies).map((currency) => currency.name + " " + currency.symbol)}</span></li>
//                     <li><span class="detailTitle">Common Languages:</span> <span class="detailContent">${Object.values(country.languages)}</span>
//                     </li>
//                 </ul>
//                 </div>
// `
//                 }
//             }
//         })

//     }
// };
// xhttp.open("GET", "https://restcountries.com/v3.1/all", true);
// xhttp.send();

// ! Fetch() --------------------------------------------------------------------------------------------------

let enteredCountryName = document.getElementById("enteredCountryName");
let searchBtn = document.getElementById("searchBtn");

const countriesData = fetch("https://restcountries.com/v3.1/all");
countriesData
  .then(
    (response) => response.json(),
    () => console.log("Error")
  )
  .then((data) => {
    let div = document.createElement("div");
    searchBtn.addEventListener("click", () => {
      data.forEach((country) => {
        if (enteredCountryName.value !== "") {
          enteredCountryName.value =
            enteredCountryName.value.charAt(0).toUpperCase() +
            enteredCountryName.value.slice(1);

          if (country.name.common === enteredCountryName.value) {
            div.innerHTML = `  <div class="flag-content">
                    <img src="${country.flags.png}" alt="">
                    <h2>${country.name.common}</h2>
                </div>

                <div class="countryDetails">
                    <ul>
                        <li><span class="detailTitle">Capital:</span> <span class="detailContent">${
                          country.capital
                        }</span></li>
                        <li><span class="detailTitle">Continent:</span> <span class="detailContent">${
                          country.continents
                        }</span></li>
                        <li><span class="detailTitle">Population:</span> <span class="detailContent">${
                          country.population
                        }</span></li>
                        <li><span class="detailTitle">Currency:</span> <span class="detailContent">${Object.values(
                          country.currencies
                        ).map(
                          (currency) => currency.name + ", " + currency.symbol
                        )}</span></li>
                        <li><span class="detailTitle">Common Languages:</span> <span class="detailContent">${Object.values(
                          country.languages
                        )}</span>
                        </li>
                    </ul>
                </div>`;
          }
        } else {
          enteredCountryName.setAttribute(
            "placeholder",
            "Enter Country Name..."
          );
          enteredCountryName.classList.add("error");
        }
      });
      document.getElementById("result").appendChild(div);
    });
  });
