//Storage controller
const StorageCtrl = (function () {

    //public methods
    return {
        storeItem: function (item) {
            let items = [];

            //check if any item in local storage
            if (localStorage.getItem('items') === null) {
                items;

                //push item into it
                items.push(item);

                //set items in local storage
                localStorage.setItem('items', JSON.stringify(items));
            } else {
                //get those existing item
                items = JSON.parse(localStorage.getItem('items'));

                //push the new item
                items.push(item);

                //set items in local storage
                localStorage.setItem('items', JSON.stringify(items));
            }

        },

        getItemsFromStorage: function () {
            let items;
            if (localStorage.getItem('items') === null) {
                items = [];

            } else {
                items = JSON.parse(localStorage.getItem('items'));
            }

            return items;
        },

        updateItemStorage: function (updatedItem) {
            let items = JSON.parse(localStorage.getItem('items'));

            items.forEach((item, index) => {
                if (updatedItem.id === item.id) {
                    //splice 1 item from items, and replace with updatedItem 
                    items.splice(index, 1, updatedItem);
                }
            });

            //set items in local storage
            localStorage.setItem('items', JSON.stringify(items));

        },

        deleteItemFromStorage: function (id) {
            let items = JSON.parse(localStorage.getItem('items'))

            items.forEach((item, index) => {
                if (id === item.id) {
                    items.splice(index, 1);
                }
            });

            //set items in local storage
            localStorage.setItem('items', JSON.stringify(items));

        },

        clearAllItemsFromStorage: function () {
            localStorage.removeItem('items')
        }
    }
})();

//Item controller
const ItemCtrl = (function () {
    //Item constructor
    const Item = function (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    };

    //Data structure -> state
    const data = {
        items: StorageCtrl.getItemsFromStorage(),
        currentItem: null,
        totalCalories: 0,
    };

    //public methods
    return {
        getItems: function () {
            return data.items;
        },

        addItem: function (name, calories) {
            let ID;
            //create id
            if (data.items.length > 0) {
                //auto increment
                ID = data.items[data.items.length - 1].id + 1;
            } else {

                ID = 0;
            }

            //calories to number
            calories = parseInt(calories);

            //Create new item
            newItem = new Item(ID, name, calories);

            //add to item array
            data.items.push(newItem);
            return newItem;
        },

        getTotalCalories: function () {
            let total = 0;

            //loop through items and add up calories
            data.items.forEach(function (item) {
                total += item.calories;
            });

            //set total cal in data 
            data.totalCalories = total;

            return data.totalCalories;
        },

        updatedItem: function (name, calories) {
            //Calories to number
            calories = parseInt(calories);

            let found = null;
            data.items.forEach(item => {
                if (item.id === data.currentItem.id) {
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            })
            return found;
        },

        deleteItem: function (id) {
            //get ids
            ids = data.items.map(function (item) {
                return item.id;
            });

            //get index
            const index = ids.indexOf(id);

            //remove item
            data.items.splice(index, 1);
        },

        clearAllItems: function () {
            data.items = [];
        },

        getItemById: function (id) {
            let found = null;
            data.items.forEach(item => {
                if (item.id === id) {
                    found = item
                }
            })
            return found;
        },
        setCurrentItem: function (item) {
            data.currentItem = item;
        },
        getCurrentItem: function () {
            return data.currentItem;
        },
        logData: function () {
            return data;
        },
    };
})();

//UI controller
const UICtrl = (function () {
    const UISelectors = {
        itemlist: "#item-list",
        listItems: '#item-list li',
        addBtn: ".add-btn",
        updateBtn: ".update-btn",
        deleteBtn: ".delete-btn",
        backBtn: ".back-btn",
        clearBtn: ".clear-btn",
        itemNameInput: "#item-name",
        itemcaloriesInput: "#item-calories",
        totalCalories: '.total-calories'

    };

    //public methods
    return {
        populateItemList: function (items) {
            let html = "";
            items.forEach(function (item) {
                html += `
                    <li id = "item-${item.id}" class="collection-item">
                    <strong>${item.name}: </strong> <em>${item.calories} Calories </em>
                    <a href="#" class="secondary-content">i <div class="edit-item fa fa-pencil"></div></a>
                </li>
                `;
            });
            //insert list item to ul
            document.querySelector(UISelectors.itemlist).innerHTML = html;
        },
        getItemInput: function () {
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemcaloriesInput).value,
            };
        },
        addListItem: function (item) {
            //show the ul list
            document.querySelector(UISelectors.itemlist).style.display = "block";

            //create li element
            const li = document.createElement("li");
            li.className = "collection-item";
            li.id = `item-${item.id}`;

            //add HTML
            li.innerHTML = `
            <strong>${item.name}: </strong> <em>${item.calories} Calories </em>
            <a href="#" class="secondary-content">i <div class="edit-item fa fa-pencil"></div></a>
            `;

            //Insert item
            document
                .querySelector(UISelectors.itemlist)
                .insertAdjacentElement("beforeend", li);
        },

        updateListItem: function (item) {

            //this returns node list
            let listItems = document.querySelectorAll(UISelectors.listItems);

            listItems = Array.from(listItems);

            listItems.forEach(listItem => {
                const itemID = listItem.getAttribute('id');

                if (itemID === `item-${item.id}`) {
                    document.querySelector(`#${itemID}`).innerHTML = `
                    <strong>${item.name}: </strong> <em>${item.calories} Calories </em>
                     <a href="#" class="secondary-content">i <div class="edit-item fa fa-pencil"></div></a>
                    `;
                }
            });

        },

        deleteListItem: function (id) {
            const itemId = `#item-${id}`;
            const item = document.querySelector(itemId);
            item.remove();
        },

        removeItems: function () {
            let listItems = document.querySelectorAll(UISelectors.listItems);

            //turn nodelist into array
            listItems = Array.from(listItems);

            listItems.forEach(function (item) {
                item.remove();
            })

        },

        clearInputs: function () {
            document.querySelector(UISelectors.itemNameInput).value = "";
            document.querySelector(UISelectors.itemcaloriesInput).value = "";
        },

        editItemToForm: function () {
            document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemcaloriesInput).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.showedEditState();
        },

        hideULList: function () {
            document.querySelector(UISelectors.itemlist).style.display = "none";
        },
        showTotalCalories: function (total) {
            document.querySelector(UISelectors.totalCalories).textContent = total;
        },

        //clear state
        clearEditState: function () {
            UICtrl.clearInputs();

            document.querySelector(UISelectors.addBtn).style.display = "inline";

            document.querySelector(UISelectors.updateBtn).style.display = "none";

            document.querySelector(UISelectors.deleteBtn).style.display = "none";

            document.querySelector(UISelectors.backBtn).style.display = "none";
        },

        //allow edit state
        showedEditState: function () {
            document.querySelector(UISelectors.addBtn).style.display = "none";

            document.querySelector(UISelectors.updateBtn).style.display = "inline";

            document.querySelector(UISelectors.deleteBtn).style.display = "inline";

            document.querySelector(UISelectors.backBtn).style.display = "inline";
        },

        getSelectors: function () {
            return UISelectors;
        },
    };
})();

//App controller
const App = (function (ItemCtrl, StorageCtrl, UICtrl) {
    //Load event listeners
    const loadEventListeners = function () {
        const UISelectors = UICtrl.getSelectors();

        //add item event
        document
            .querySelector(UISelectors.addBtn)
            .addEventListener("click", itemAddSubmit);

        //Disable submit on enter key
        document.addEventListener('keypress', function (e) {
            if (e.keyCode === 13 || e.which === 13) {
                e.preventDefault();
                return false;
            }
        })

        //edit icon event
        document.querySelector(UISelectors.itemlist).addEventListener('click', itemEditClick);

        //update item event
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

        // back button submit
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

        // back button submit
        document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);

        // clear button submit
        document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemClick);
    };

    //add item submit
    const itemAddSubmit = function (e) {
        //get form input from UI controller for validation
        const input = UICtrl.getItemInput();

        //check name and calories
        if (input.name !== "" && input.calories !== "") {
            //Add items
            const newItem = ItemCtrl.addItem(input.name, input.calories);

            //add newItem to UI list
            UICtrl.addListItem(newItem);

            //get total calories
            const totalCalories = ItemCtrl.getTotalCalories();

            //add totalCalories to UI
            UICtrl.showTotalCalories(totalCalories);

            //Store in local storage
            StorageCtrl.storeItem(newItem);

            //clear input fields
            UICtrl.clearInputs();
        }

        e.preventDefault();
    };

    //click edit item
    const itemEditClick = function (e) {
        if (e.target.classList.contains('edit-item')) {
            //Get list item id
            const listId = e.target.parentNode.parentNode.id;

            //break item-0s into array
            const listIdArray = listId.split('-');

            const id = parseInt(listIdArray[1])

            //Get item
            const itemToEdit = ItemCtrl.getItemById(id);

            //Set current item
            ItemCtrl.setCurrentItem(itemToEdit);

            //edit item to form
            UICtrl.editItemToForm();

            console.log(itemToEdit);
        }
        e.preventDefault();
    }

    //update item submit
    const itemUpdateSubmit = function (e) {
        //Get item input
        const input = UICtrl.getItemInput();

        //update item
        const updatedItem = ItemCtrl.updatedItem(input.name, input.calories);

        //update UI
        UICtrl.updateListItem(updatedItem);

        //get total calories
        const totalCalories = ItemCtrl.getTotalCalories();

        //add totalCalories to UI
        UICtrl.showTotalCalories(totalCalories);

        //update local storage
        StorageCtrl.updateItemStorage(updatedItem);

        UICtrl.clearEditState();

        e.preventDefault();
    }

    //Delete button event
    const itemDeleteSubmit = function (e) {
        //get id from current item
        const currentItem = ItemCtrl.getCurrentItem();

        //Delete from data structure
        ItemCtrl.deleteItem(currentItem.id);

        //remove item from UI
        UICtrl.deleteListItem(currentItem.id);

        //get total calories
        const totalCalories = ItemCtrl.getTotalCalories();

        //add totalCalories to UI
        UICtrl.showTotalCalories(totalCalories);

        //Delete from local storage
        StorageCtrl.deleteItemFromStorage(currentItem.id);

        UICtrl.clearEditState();


        e.preventDefault();
    }

    //Clear items event
    const clearAllItemClick = function () {
        //delete all items from data structure
        ItemCtrl.clearAllItems();


        //get total calories
        const totalCalories = ItemCtrl.getTotalCalories();

        //add totalCalories to UI
        UICtrl.showTotalCalories(totalCalories);

        //remove items from UI
        UICtrl.removeItems();

        //remove all items in local storage
        StorageCtrl.clearAllItemsFromStorage()

        //hide the UI line
        UICtrl.hideULList();
    }

    //public methods
    return {
        init: function () {
            //hide buttons
            UICtrl.clearEditState();

            //fetch items from data structure
            const items = ItemCtrl.getItems();

            //check if any items
            if (items.length === 0) {
                UICtrl.hideULList();
            } else {
                //populate list with items
                UICtrl.populateItemList(items);

            }

            //get total calories
            const totalCalories = ItemCtrl.getTotalCalories();

            //add totalCalories to UI
            UICtrl.showTotalCalories(totalCalories);

            //load event listeners
            loadEventListeners();
        },
    };
})(ItemCtrl, StorageCtrl, UICtrl); //-> this is where it actually invoke

//Initialize app
App.init();