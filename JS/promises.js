
const promise = new Promise((resolve, reject) => {
    const a = true
    if (a) {
        resolve("resolved")
    } else {
        reject("rejected")
    }

})

promise.then((a) => console.log(a)).catch((a) => console.log(a))


let apiData = fetch('https://jsonplaceholder.typicode.com/todos/1').then((output) => output.json()).then((output) => console.log(output))

// console.log(apiData)


async function fetchData() {
    try {
        const response = await fetch('https://fakestoreapi.in/api/products'); // Await the fetch Promise
        //   console.log(response);
        const data = await response.json(); // Await the parsing of the JSON response
        console.log(data);

        console.log(data.products.filter((item) => item.title.includes("Sony")).map((e) =>
          {  let title = e.title
let price = e.price
return `title is ${title} and price is ${price}` }
));




    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();