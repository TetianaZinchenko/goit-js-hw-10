const BASE_URL = 'https://restcountries.com/v3.1/name/';

const fields = 'fields=name,capital,population,flags,languages';

// export function fetchCountries(name) {
//   return fetch(`${BASE_URL}${name}?${fields}`)
//     .then(response => response.json())
//     .catch(error => console.log(error));
// }

export async function fetchCountries(name) {
  const response = await fetch(`${BASE_URL}${name}?${fields}`);
  return await response.json();
}
