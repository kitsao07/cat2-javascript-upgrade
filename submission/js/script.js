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
function displayServices() {
    servicesList.innerHTML = "";
    services.forEach(function(service, index) {

        const article = document.createElement("article");

        article.innerHTML = `
            <h3>${service.name}</h3>
            <p>${service.price}</p>
            <button class="deleteBtn" data-index="${index}">
                Delete
            </button>
        `;

        servicesList.appendChild(article);
    });
}
displayServices();
const serviceInput = document.getElementById("serviceInput");
const addServiceBtn = document.getElementById("addServiceBtn");

addServiceBtn.addEventListener("click", function () {

    const newService = serviceInput.value.trim();

    if (newService === "") {
        alert("Please enter a service name.");
        return;
    }

    services.push({
        name: newService,
        price: "Price Not Set"
    });

    displayServices();

    serviceInput.value = "";

});
servicesList.addEventListener("click", function (event) {

    if (event.target.classList.contains("deleteBtn")) {

        const index = event.target.dataset.index;

        services.splice(index, 1);

        displayServices();

    }

});