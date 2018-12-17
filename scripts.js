
function saveToList(){
    var user_input = document.getElementById('coupon_title');

    //Create list item
    var itemNode = document.createElement("LI");
    var textNode = document.createElement('span')
    textNode.innerHTML = user_input.value
    itemNode.appendChild(textNode)
    // The above is the same as writing <li>Item 1</li>

    //Create a button to edit item
    var editButtonNode = document.createElement('button');
    editButtonNode.innerHTML = 'Edit'
    //Add a click event handler
    editButtonNode.addEventListener('click', function(e){
        editItem(textNode)
        e.stopPropagation()
    })

    //Create a button to delete item
    var deleteNode = document.createElement('button');
    deleteNode.innerHTML = 'Delete'
    deleteNode.addEventListener('click',function(e){
        removeItem(itemNode)
        e.stopPropagation()
      })
    itemNode.appendChild(deleteNode);

    //Add to the list
    coupons_list.appendChild(itemNode)
    
    //Clear input field
    user_input.value = ''
}

var editItem = function(node){

    var result = prompt("Please enter your name", node.innerHTML);
    if(result){
        node.innerHTML = result
    }
    
}

function removeItem(node){

    var lis = document.getElementById('coupons_list');
    if (confirm("Are you sure?")) {
        lis.removeChild(node);
    } 

}


