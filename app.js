"use strict"

let description = document.getElementById("description");
let completed = document.getElementById("completed");
let priority = document.getElementById("priority");
let addBtn = document.getElementById("addBtn");
let listPara = document.getElementById("listPara");
let orderedList = document.getElementById("orderedList");
let sortBtn = document.getElementById("sortBtn");
let array = [];

/*Event listener that adds items to the To Do List.*/
addBtn.addEventListener("click", function() {

  let listItem = document.createElement("li");

  /*Description value appended to orderedList*/
  let textNode = document.createTextNode(description.value);
  let descriptionPara = document.createElement("p");
  descriptionPara.setAttribute("class", "description2");
  descriptionPara.appendChild(textNode);
  listItem.appendChild(descriptionPara);
  orderedList.appendChild(listItem);

  /*Completed checkbox added to each item created*/
  let span1 = document.createElement("span");
  let label = document.createElement("label");
    label.setAttribute("for", "completed");
  let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", "checkbox")
  let completedText = document.createTextNode("Completed");
  label.appendChild(completedText)
  span1.appendChild(label);
  span1.appendChild(input);
  listItem.appendChild(span1);
  orderedList.appendChild(listItem);

  /*Priority dropdown box added to each item created*/
  let label2 = document.createElement("label");
    label2.setAttribute("for", "priority");
  let span2 = document.createElement("span");
  let priorityText = document.createTextNode("Priority");
  let priorityPara = document.createElement("p");
  let select = document.createElement("select");
    select.setAttribute("name","priority");
  let option1 = document.createElement("option");
    option1.setAttribute("value", 1);
  let option2 = document.createElement("option");
    option2.setAttribute("value", 2);
  let option3 = document.createElement("option");
    option3.setAttribute("value", 3);
  let lowText = document.createTextNode("Low");
  let moderateText = document.createTextNode("Moderate");
  let highText = document.createTextNode("High");
  priorityPara.appendChild(priorityText);

  label2.appendChild(priorityText);
  option1.appendChild(lowText);
  option2.appendChild(moderateText);
  option3.appendChild(highText);
  select.appendChild(option1);
  select.appendChild(option2);
  select.appendChild(option3);
  span2.appendChild(label2);
  span2.appendChild(select);
  listItem.appendChild(span2);

  /*Save button added to each item created.*/
  let saveBtnText = document.createTextNode("save");
  let saveBtn = document.createElement("button");
  saveBtn.setAttribute("data-item", array.length)
  saveBtn.appendChild(saveBtnText);
  listItem.appendChild(saveBtn);

  /*Append all listItems to an orderedList*/
  orderedList.appendChild(listItem);


  /*Push the user's To Do item to the To Do List*/
  array.push({description:description.value,
              completed:input.checked,
              priority:select.value})

  /*Clear out add To Do Input box after user select's add button*/
  description.value = ""

/*Save button event listener: Updates to do item's input fields. */
  saveBtn.addEventListener("click", function(e) {
      let index = parseInt(e.target.getAttribute("data-item"));
         array[index] = ({description:array[index].description,
                          completed:input.checked,
                           priority:select.value
         })
  })

/*Sort button sorts To Do items based on priority.*/
})
 sortBtn.addEventListener("click", function() {
   orderedList.innerHTML = ""
   array.sort(function(a,b) {
     return b.priority - a.priority;
   })
   for(let i = 0; i < array.length; i++) {
     let listItem = document.createElement("li");

     /*Description value appended to orderedList*/
     let textNode = document.createTextNode(array[i].description);
     let descriptionPara = document.createElement("p");
     descriptionPara.setAttribute("class", "description2");

    // descriptionPara.setAttribute("value", "descriptionPara")
     descriptionPara.appendChild(textNode);
     listItem.appendChild(descriptionPara);
     orderedList.appendChild(listItem);

     /*Completed checkbox added to each item created*/
     let span1 = document.createElement("span");
     let label = document.createElement("label");
       label.setAttribute("for", "completed");
     let input = document.createElement("input");
       input.setAttribute("type", "checkbox");
       input.setAttribute("id", "checkbox")
     let completedText = document.createTextNode("Completed");
     label.appendChild(completedText)
     span1.appendChild(label);
     span1.appendChild(input);
     listItem.appendChild(span1);
     orderedList.appendChild(listItem);

     /*Priority dropdown box added to each item created.input fields updated to current values.*/
     let label2 = document.createElement("label");
       label2.setAttribute("for", "priority");
     let span2 = document.createElement("span");
     let priorityText = document.createTextNode("Priority");
     let priorityPara = document.createElement("p");
     let select = document.createElement("select");
       select.setAttribute("name","priority");
       select.setAttribute("value", array[i].priority);
     /* priority value is saved when sorts list.*/
     let option1 = document.createElement("option");
       option1.setAttribute("value", 1);
     let option2 = document.createElement("option");
       option2.setAttribute("value", 2);
     let option3 = document.createElement("option");
       option3.setAttribute("value", 3);

       if(array[i].priority == 1) {
        option1.setAttribute("value",1)
        option1.setAttribute("selected", "selected");
       }
       else if(array[i].priority == 2) {
        option2.setAttribute("value",2)
        option2.setAttribute("selected", "selected");
       }
       else if(array[i].priority == 3) {
        option3.setAttribute("value",3)
        option3.setAttribute("selected", "selected");
       }

     let lowText = document.createTextNode("Low");
     let moderateText = document.createTextNode("Moderate");
     let highText = document.createTextNode("High");
     priorityPara.appendChild(priorityText);

     label2.appendChild(priorityText);
     option1.appendChild(lowText);
     option2.appendChild(moderateText);
     option3.appendChild(highText);
     select.appendChild(option1);
     select.appendChild(option2);
     select.appendChild(option3);
     span2.appendChild(label2);
     span2.appendChild(select);
     listItem.appendChild(span2);

     /*save button*/
     let saveBtnText = document.createTextNode("save");
     let saveBtn = document.createElement("button");
     saveBtn.setAttribute("data-item", array.length)
     saveBtn.appendChild(saveBtnText);
     listItem.appendChild(saveBtn);

     /*Append all listItems to an orderedList*/
     orderedList.appendChild(listItem);

     /*Makes sure after sort list, can save To Do items.*/
     saveBtn.addEventListener("click", function(e) {
            array[i] = ({description:array[i].description,
                             completed:input.checked,
                              priority:select.value
            })
      })

   }

})
