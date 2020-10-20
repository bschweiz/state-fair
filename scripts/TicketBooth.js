const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("rideTicketGenerated", customEvent => {
    const rideTicket = document.querySelector(".flowerSelection")
    userChoiceElement.innerHTML = customEvent.detail.selectedFlower
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}

const rideEvent = new CustomEvent("rideTicketPurchased")



/*FROM STEVEB's FriendList.js example: 

import { useFriends } from "./FriendProvider.js"
import { Friend } from "./Friend.js"

// DOM element where friends will be rendered
const contentTarget = document.querySelector(".friends--list")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.classList.contains("friend")) {
        
        const friendName = changeEvent.target.value
        
        const customEvent = new CustomEvent("friendChosen", {
            detail: {
                nameOfChosenFriend: friendName
            }
        })
        
        eventHub.dispatchEvent(customEvent)
    }
})

// Function that renders a collection of friends
const render = friendCollection => {
    contentTarget.innerHTML = `
        <fieldset>
            <legend>FriendList Component</legend>
            ${ friendCollection.map(Friend).join("") }
        </fieldset>
    `
}

/* COMPONENT FUNCTION 
export const FriendList = () => {
    const appStateFriends = useFriends()
    render(appStateFriends)
}
*/
