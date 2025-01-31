import countries from '../data/countries.json'

export function ajaxFindCountry (query) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const results = countries.filter((element, index, array) => {
        return element.name.toLowerCase().includes(query.toLowerCase())
      })
      resolve(results)
    }, 100)
  })
}

export function getCountries () {
    return new Promise(resolve => {
        setTimeout(() => {
            const results = countries;
            resolve(results)
          })
      })
  }



  