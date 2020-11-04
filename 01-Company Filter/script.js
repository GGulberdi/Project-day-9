const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

for(let key in companies){
 if(companies.hasOwnProperty(key)){
console.log(`${key} : ${companies[key]}`)
}
}

companies.forEach(x=> console.log(x.name))
companies.push({
  name: "Company ten",
  category:"developers",
   start: 2020, 
   end:2027
})
console.log(companies)

let retails = companies.filter(company => company.category ==='Retail')
console.log(retails)

let eigths = companies.filter(company => company.start >= 1980 && company.start < 1990)
console.log(eigths)

let tenyears = companies.filter(company => company.end - company.start >= 10)
console.log(tenyears)

let companynames = companies.map(function(company){
  return company.name;
})
console.log(companynames);

let dates = companies.map(function(company){
  return `${company.name}[${company.start} - ${company.end}]`;
})
console.log(dates)

let sort = companies.sort((a,b)=> a.start-b.start)
console.log(sort)

let sum = companies.reduce(function(total, years){
return total + (years.end - years.start)
},0)

console.log(sum)





