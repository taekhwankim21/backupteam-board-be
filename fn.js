// const priceKrw = new Intl.NumberFormat('kr-KO', { style: 'currency', currency: 'KRW' }).format(price) + "원"
// let tax = price / 11 * 10
// tax = Math.round(tax)
// tax = new Intl.NumberFormat('kr-KO', { style: 'currency', currency: 'KRW' }).format(tax)
// tax = tax + "원"
// let originalPrice = price / 11
// originalPrice =  Math.round(originalPrice)
// originalPrice = new Intl.NumberFormat('kr-KO', { style: 'currency', currency: 'KRW' }).format(originalPrice)
// originalPrice = originalPrice + "원"

const currencyBuCountry = {
  en: {
    format:"en-US",
    currency:"USD"
  },
  kr:{
    format:"kr-KO",
    currency:"KRW"
  }
}

const priceToKrwFormat = (price, country) => {
  let countryCode = country || "kr"
  const cur = currencyBuCountry[countryCode]
  const priceKrw = new Intl.NumberFormat(cur.format,{style:'currency', currency: cur.currency}).format(price)

  let tax = price / 11 * 10
  tax = Math.round(tax)
  tax = new Intl.NumberFormat(cur.format, { style: 'currency', currency: cur.currency }).format(tax)

  let originalPrice = price / 11
  originalPrice =  Math.round(originalPrice)
  originalPrice = new Intl.NumberFormat(cur.format, { style: 'currency', currency: cur.currency }).format(originalPrice)
  return {
    priceKrw,
    tax,
    originalPrice,
  }
}

const price = 100000
console.log(priceToKrwFormat(price))
console.log(priceToKrwFormat(25000))
console.log(priceToKrwFormat(1000))
console.log(priceToKrwFormat(700000))