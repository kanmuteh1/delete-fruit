let fruits_obj = {
    1: "Apple",
    2: "Watermelon",
    3: "Orange",
    4: "Strawberry",
    5: "Grape",
    6: "Mango",
    7: "Plum",
    8: "Banana",
    9: "Papaya",
    10: "Pineapple",
    11: "Lime",
    12: "Lemon",
    13: "Grapefruit",
    14: "Coconut",
    15: "Avocado"
}

function displayFruits(){
    let fruits = Object.keys(fruits_obj);
    document.querySelector("tbody").innerHTML = "";

    for(let i = 0; i < fruits.length; i++){
        let html = `<tr>
            <td>${i + 1}.</td>
            <td>${fruits_obj[fruits[i]]}</td>
            <td>
                <button onclick="getFruitID(event)" id="${fruits[i]}">Delete</button>
            </td>
        </tr>`;
        document.querySelector("tbody").insertAdjacentHTML("beforeend", html)
    }
}

// TODO
function getFruitID(e){
    // get fruit ID
    let fruit_id = e.target.id;
    fruit_id = parseInt(fruit_id);
    // delete fruit
    deleteFruit(fruit_id, (data)=> {
        if(data === 0){
            showSuccess()
            displayFruits()
        }
        else{
            showError();
        }
    }) 
        
    /**
     * Get the id for the element that was clicked. (1)
     * 
     * Call the deleteFruit() function and pass the id and a callback function. (2)
     * 
     * In the callback function, if the item was deleted, call the showSuccess() function
     *     for three seconds andfruit than call the displayFre.targetuits() function. (5)
     * 
     * In the callback function, if the item was not deleted, call the showError() function
     *     for five seconds. (6)
     * 
     * NOTE: The id you are passing is the key for the fruit in the fruits_obj object.
    */
}

// TOD0
function deleteFruit(id, callback){
    console.log(id, Object.keys(fruits_obj).length)
    let deleted_fruit = delete fruits_obj[id];
    console.log(deleted_fruit,Object.keys(fruits_obj).length)

    if (deleted_fruit){
        return callback(0);
    }
    else{
        return callback(1);
    }
    
    /** 
     * Delete the item from the fruits_obj object based on the id that is passed. (3)
     * 
     * Return 0 if the item was deleted and 1 if the item was not deleted. (4)
     * 
     */
}

function showError(){
    let message_ele =  document.getElementById("message");
    message_ele.innerHTML = "Failed to delete!";
    message_ele.style = "background: #ff5c33; visibility: visible";

    let showErrorTimeout = setTimeout(function(){
        message_ele.style = "visibility: hidden";
        clearTimeout(showErrorTimeout);
    }, 5000); 
}

function showSuccess(){
    let message_ele = document.getElementById("message");
    message_ele.innerHTML = "Deleted!";
    message_ele.style = "background: #00b300; visibility: visible";

    let showSuccessTimeout = setTimeout(function(){
        message_ele.style = "visibility: hidden";
        clearTimeout(showSuccessTimeout)
    }, 3000);
}

displayFruits()