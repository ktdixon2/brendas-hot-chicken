console.log("main.js");

// <div>
//     <section>
//         <h3>Name:</h3>
//         <h4>Spice Level:</h4>
//         <p>puchased</p>
//         <p>Color:</p>
//         <button>Edit</button>
//         <button>Delete</button>
//     </section>
// </div>

function populatePage(chickenArray){
    let newDiv = document.createElement("div");
    newDiv.innerHTML = chickenArray.map(makeGrid).join("");
    document.querySelector("#chicken-cards").append(newDiv);
}

const makeGrid = (item, index) => {
    let sold = `<p class="buy"><strong>Eat more Chicken</strong></p>`;
    if (item.purchased){
        sold = `<p class="buy"><strong>All Sold Out</strong></p>`;
    }

    let block = `
        <section id="card--${index}" style="border: 2px solid ${item.color}">
            <h3>#${index+1} Name: ${item.name}</h3>
            <h4>Spice Level: ${item.spicelevel}</h4>
            ${sold}
            <p>Color: ${item.color}</p>
            <button data-edit-id="${item.id}" onClick="handleEdit(this)">Edit</button>
            <button data-delete-id="${item.id}" onClick="handleDelete(this)">Delete</button>
    `
    return block;
}

getAllChickens()
    .then(
        (inventoryFromGetAllChickens) => {
            console.log("the chickens", inventoryFromGetAllChickens);
            populatePage(inventoryFromGetAllChickens);
        }
    )

function handleEdit(chicken){
    let whichChicken = chicken.getAttribute("data-edit-id");
    console.log("Let's Edit ", whichChicken);
    //call updateChicken
    //be sure to add the return to the updateChicken function
}

function handleDelete(chicken) {
    let whichChicken = chicken.getAttribute("data-delete-id");
    console.log("Let's Delete ", whichChicken);
    //call deleteChicken
    //be sure to add the return to the updateChicken function
}














