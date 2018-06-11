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

  /*Priority dropdown box added to each item created*/
  let label2 = document.createElement("label");
    label2.setAttribute("for", "priority");
  let span2 = document.createElement("span");
  let priorityText = document.createTextNode("Priority");
  let priorityPara = document.createElement("p");
  let select = document.createElement("select");
    select.setAttribute("name","priority");
  let option1 = document.createElement("option");
    option1.setAttribute("value", "Low");
  let option2 = document.createElement("option");
    option2.setAttribute("value", "Moderate");
  let option3 = document.createElement("option");
    option3.setAttribute("value", "High");
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
  saveBtn.setAttribute("data-item", array.length) /*b/c this happens first, the button will be 0, b/c before we push the item.*/
  saveBtn.appendChild(saveBtnText);
  listItem.appendChild(saveBtn);

  /*Append all listItems to an orderedList*/
  orderedList.appendChild(listItem);


  /*Push the user's input to the To Do List*/
  array.push({description:description.value,
              completed:input.checked,
              priority:select.value})
 console.log(orderedList);

  /*clear out items box after select add button*/
  description.value = ""


  saveBtn.addEventListener("click", function(e) {
      let index = parseInt(e.target.getAttribute("data-item"));
       console.log(index);
         array[index] = ({description:array[index].description,
                          completed:input.checked,
                           priority:select.value
         })
         console.log(array);
   })

 })
  /*sort button*/
  sortBtn.addEventListener("click", function() {
     for(let i = 0;array.length; i++) {
       if(array[i].priority == "Low") {
         array[i].priority = 1;
       }
       else if (array[i].priority == "Moderate") {
          array[i].priority = 2;
       }
       else if(array[i].priority == "High") {
          array[i].priority = 3;
       }
       console.log(array[i].priority);
     }
    array.sort(function(a,b) {
      return b-a
    })
     orderedList.innerHTML = array;
     console.log(array);
   })

     /*sort, sort all items in array, destroy whatever dom(or list) is there, destroy list, and reremnder list in new order.To show up in. webStorage and localStorage.*/
     /*a and b are just comparing any two items. a.priority = 1

 })*/

/*Sort Button EventListener*/
