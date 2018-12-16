function updateList(){

    var coupons_list = document.getElementById('coupons_list');

    console.log(coupons_list)

    // For loops have 3 conditions: a starting condition,termination condition and incrementing condition 

    for(var x = 1; x < 1; x++){

        var itemNode = document.createElement("LI");
        itemNode.innerHTML = 'Item ' + x //Concatenating two elements
        // The above is the same as writing <li>Item 1</li>

        coupons_list.appendChild(itemNode)

    }


}

function saveToList(){
    var user_input = document.getElementById('coupon_title').value;
    console.log(user_input)

    var itemNode = document.createElement("LI");
    itemNode.innerHTML = user_input 
    // The above is the same as writing <li>Item 1</li>

    coupons_list.appendChild(itemNode)
}

window.onload = updateList();

