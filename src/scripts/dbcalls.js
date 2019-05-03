const apiBaseURL = "http://localhost:3000";

const getAllChickens = () => {
    return fetch(`${apiBaseURL}/chicken`)
    .then(response => response.json())
}

const getOneChicken = (chickenId) => {
    fetch(`${apiBaseURL}/chicken/${chickenId}`)
    .then(response => response.json())
    .then(parsedResult => {
        console.log("one Chicken", parsedResult);
    })
}

const updateChicken = (chickenId, chickenObj) => {
    fetch(`${apiBaseURL}/chicken/${chickenId}`,
        {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(chickenObj)
        }
    )
    .then(response => response.json())
    .then(parsedResult => {
        console.log("updated chicken", parsedResult);
    })
}

const makeChicken = (chickenObj) => {
    fetch(`${apiBaseURL}/chicken/`,
        {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(chickenObj)
        }
    )
    .then(response => response.json())
    .then(parsedResult => {
        console.log("new chicken", parsedResult);
    })

}

const deleteChicken = (chickenId) => {
    fetch(`${apiBaseURL}/chicken/${chickenId}`,
        {
            method: "DELETE"
        }
    )
    .then(response => response.json())
    .then(parsedResult => {
        console.log("Delete is done", parsedResult);
    })
}

// getAllChickens();
// getOneChicken(3);

// const testChickenObj = {
//     name: "Joe Thighsmen",
//     color: "red",
//     gender: "male",
//     'spicelevel': "3"
// }
// // updateChicken(1, testChickenObj);

// const newChickenObj = {
//     name: "Cluck Norris",
//     color: "black",
//     gender: "male",
//     'spicelevel': "5"
// }

// // makeChicken(newChickenObj);
// deleteChicken(2);







