const services = [
    {
        name: "Carpet Cleaning",
        price: "KSh 2,000"
    },
    {
        name: "Sofa Cleaning",
        price: "KSh 3,500"
    },
    {
        name: "Duvet and Blanket Cleaning",
        price: "KSh 1,000"
    },
    {
        name: "Shoe Cleaning",
        price: "KSh 800"
    },
    {
        name: "Bag Cleaning",
        price: "KSh 700"
    },
    {
        name: "Curtain Cleaning",
        price: "KSh 2,500"
    },
    {
        name: "Office Cleaning",
        price: "KSh 10,000"
    },
    {
        name: "Drop-off Services",
        price: "Free"
    }
];

const servicesList = document.getElementById("servicesList");
services.forEach(function(service) {

    const article = document.createElement("article");

    article.innerHTML = `
        <h3>${service.name}</h3>
        <p>${service.price}</p>
    `;

    servicesList.appendChild(article);

});
console.log("Script loaded!")