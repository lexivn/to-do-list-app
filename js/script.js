
// function newItem() {

//   //javascript
//   //1. Adding a new item to the list of items: 
//   let li = document.createElement("li");
//   let inputValue = document.getElementById("input").value;
//   let text = document.createTextNode(inputValue);
//   li.appendChild(text);

//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     let list = document.querySelector('#list');
//     list.appendChild(li);
//   }

//   //2. Crossing out an item from the list of items:
//   function crossOut() {
//     li.classList.toggle("strike");
//   }

//   li.addEventListener("dblclick", crossOut);

//   //3(i). Adding the delete button "X": 
//   let crossOutButton = document.createElement("crossOutButton");
//   crossOutButton.appendChild(document.createTextNode("X"));
//   li.appendChild(crossOutButton);

//   crossOutButton.addEventListener("click", deleteListItem);
//   //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
//   function deleteListItem() {
//     li.classList.add("delete")
//   }
//   // 4. Reordering the items: 
//   $('#list').sortable();

// }


let input = document.getElementById("input");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("button").click();
  }
});

// let input = $('#input');
// input.keyup( (e) => {  
//   if ( e.which === 13) {
//     $("#button").click();
//     //alert("Pressed Enter");        
//   }  
// });


function newItem() {

  //jQuery
  //1. Adding a new item to the list of items:
  let li = $('<li></li>');                // Creating the li item to append to the list
  let inputValue = $('#input').val();     // Getting the input value
  li.append(inputValue);                  // Appending the input value into the li element
  let list = $('#list');                  // Getting the list element


  if (inputValue === '') {
    alert('You must enter something!');
  }
  else {
    list.append(li);                        // Appending the li item with its value to the List
  }

  //2. Crossing out an item from the list of items:
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
  });

  //3. Adding the delete button "X": 
  let crossOutButton = $('<crossOut class="crossButtn"></crossOut>');
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);
  
  function deleteListItem() {
    li.addClass("delete")
  }

  $('#list').sortable();

}





