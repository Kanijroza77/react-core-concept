const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountry()


const displayCountries = (countries) => {
    console.log(countries);
    const countriesHtml = countries.map(country => getCountryHtml(country))
    const container = document.getElementById('countries');
    container.innerHTML = countriesHtml.join(' ')

}

const getCountryHtml = ({ name, area, region, flags }) => {
    // console.log(country);
    // const { name, flags, area, region } = country;
    return `
<div class="country">
    <h2>${name.common}</h2>
    <p>Area:${area}</p>
    <p>Area:${region}</p>
    <img src="${flags.png}" alt="">
</div>
`
}









