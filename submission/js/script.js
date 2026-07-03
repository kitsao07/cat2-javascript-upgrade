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
        message.textContent = "Please enter a service name.";
        message.style.color = "blue";
        return;
    }

    services.push({
        name: newService,
        price: "Price Not Set"
        
    });
    message.textContent = "Service added successfully!";
    message.style.color = "green";
    
    saveServices();
    displayServices();

    serviceInput.value = "";
    setTimeout(function(){
        message.textContent = "";
    },3000);

});
servicesList.addEventListener("click", function (event) {

    if (event.target.classList.contains("deleteBtn")) {

        const index = event.target.dataset.index;

        services.splice(index, 1);

        displayServices();

    }

});

function saveServices(){
    localStorage.setItem("services", JSON.stringify(services));
}
const savedServices = localStorage.getItem("services");

if(savedServices) {
    service.length =0;
    service.push(...JSON.parse(savedServices));
}