//!!! Too doo list
//!! Quest log and narration
// 1. Create a quest log, that display a summary of each quest you have done
// 2. implement a next/previous quest button that goes through quest array with objects
// 3. make The last quest you slay Fyrebreath with the item you discovered
// 4. Use DOM manipulation to update the quest log and display the narration dynamically

//!! status of quest log and narration
// 1. have made quest log with name description still need to fill in some info
// 2. made button need to fix function but still not done working on them
// 3. still have to do this
// 4. work in progress

//!! Inventory Management
//! 1.implement the inventory system.
//! 2.display the inventory on webpage.
//! 3.allow adding and removing item using button and event listeners.

//!! status of inventory management:
//! 1. done implementing inventory system | done
//! 2. inventory is displaying on webpage | done
//! 3. have added function to add and remove item from inventory with text field | done

//!! Misty Locations of Tael'arun
//! 1. Create an array of locations from the story (e.g., "Whispering Forest", "Echoing Caves", "Dragon's Lair").
// 2. Use a loop to generate buttons for each location.
//! 3. Display a description of each location when pressed.

//!! status of Misty Locations of Tael'arun
//! 1. have made the array of location | done
// 2. have plans for using a whie-do loop for location
//! 3. have the descripton displayed on the quest log | done

//!!! Dark Souls Challenge (optional)
//!! Design and layout the webpage so it looks good and fits the theme
// will see if i don it when iam done and everyting eles is done

//!!--------------------------------------------------------------------------------------------------

//! Arrays and objects
const quests = [
    {
        name:"The call for a hero",
        description:"The once-thriving village of Tael'arun lies in ruins, shrouded in an unnatural mist. As the lone survivor, you must prepare for a journey to uncover the truth behind this calamity.",
        story:"",
        item:"",
    },
    {
        name:"Echoes of the Past",
        description:"Guided by the spirit of the quest, you explore the misty outskirts of Tael'arun. Each location holds secrets of a forgotten past, but rumors speak of an Ancient Tome hidden in the Echos.",
        summary:"",
        item:"Ancient Tome",
    },
    {
        name:"The Ghoul",
        description:"A fearsome ghoul blocks your path! Defeat this monster to progress",
        summary:"",
        item:"",
    },
    {
        name:"Deciphering the Ancient Tome",
        description:"The Ancient Tome you discovered pulses with hidden knowledge. Deciphering it may reveal crucial information for your quest",
        summary:"",
        item:"The Light bringer ring",
    },
    {
        name:"Preparing for the Unknown",
        description:"With the knowledge from the ancient tome, you must now prepare your inventory for the upcoming battle.",
        summary:"",
        item:"",
    },
    {
        name:"The Mists of Tael'arun - Final Confrontation",
        description:"As the lone survivor of Tael'arun, you've discovered an Ancient Tome, deciphered its message, and navigated the misty ruins. Now, you realize the true source of the calamity: the ancient dragon Fyrebreath. Armed with knowledge and courage, you must confront the dragon to save what remains of your home.",
        summary:"",
        item:"",
    },
]

let location = ["village of tael'arun", "Echoing Caves", "Whispering Forest", "Shimmering Riverside", "Crumbling Tower", "Dragon's Lair"]
let inventory = ["Health Potion", "Leather Armor", "Iron Spear", "Map"]
//!-------------------------------------------------------------------------------------------------- 

//!  variables
let questName = document.getElementById("quest name")
let questDescription = document.getElementById ("quest description")
let currentLocation = document.getElementById("current location")
let addNewItem = document.getElementById('addButton')
let removeOldItem = document.getElementById('removeButton')
let removeItem = inventory.splice();
let inventoryIndex = inventory.indexOf();
//!-------------------------------------------------------------------------------------------------- 

//! info assignment
questName.textContent = quests[0].name
questDescription.textContent = quests[0].description
currentLocation.textContent = "Current location: " + location[0]
//!-------------------------------------------------------------------------------------------------- 

//! functions
function questNext() {
questName.textContent = quests[0].name ++
questDescription.textContent = quests[0].description ++
}

function questPrevious() {
    questName.textContent = quests[0].name --
    questDescription.textContent = quests[0].description --
}

function addItem(Item) {
    inventory.push(Item);
    console.log(`Added: ${Item} `)
}

function throwTrash(Item, Index) {
    Index = inventory.indexOf(Item)
    removeItem = inventory.splice(Index, 1)
    console.log(`Item removed from inventory: ${removeItem}`)
}

function displayArray(array, divId) {
    // Get the container element
    let divContainer = document.getElementById(divId);
    
    // Clear previous content
    divContainer.innerHTML = '';
    
    // Loop through the array
    for (let i = 0; i < array.length; i++) {
        // Create a new div for each array element
        let itemDiv = document.createElement('div');
        
        // Set the text content of the div
        itemDiv.textContent = array[i];
        
        // Add the div to the container
        divContainer.appendChild(itemDiv);
    }
}
//!----------------------------------------------------------------------------------- 

//! eventlisteners
document.addEventListener('DOMContentLoaded', function() {
    displayArray(inventory, 'display inventory')
    });

    addNewItem.addEventListener('click', function() {
        let addItemInput = document.getElementById('input')
        let itemToAdd = addItemInput.value;
        addItem(itemToAdd)
        displayArray(inventory, 'display inventory')
        addItemInput.value = "";
    })

    removeOldItem.addEventListener('click', function() {
        let removeItemInput = document.getElementById('input')
        let itemToRemove = removeItemInput.value;
        throwTrash(itemToRemove)
        displayArray(inventory, 'display inventory')
        removeItemInput.value = "";
    })

    document.getElementById("next quest").addEventListener('click', function() {
        questNext()
    })

    document.getElementById("next quest").addEventListener('click', function() {
        questPrevious()
    })
//!------------------------------------------------------------------------------ 

//! statments (if-else, do-when)

//!------------------------------------------------------------------------------