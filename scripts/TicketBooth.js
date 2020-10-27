const eventHub = document.querySelector(".state-fair")

const rideTarget = document.querySelector(".rides")
const foodTarget = document.querySelector(".food")
const gameTarget = document.querySelector(".games")
const sideshowTarget = document.querySelector(".sideshow")


export const RideTickets = () => {
    rideTarget.innerHTML = `
    <div class="ticketBooth">
    <button id="rideTicket">Ride Ticket</button>
    </div>`
}
export const FoodTickets = () => {
    foodTarget.innerHTML = `
    <div class="ticketBooth">
    <button id="foodTicket">Food Ticket</button>
    </div>`
}
export const GameTickets = () => {
    gameTarget.innerHTML = `
    <div class="ticketBooth">
    <button id="gameTicket">Game Ticket</button>
    </div>`
}

export const SideshowTickets = () => {
    sideshowTarget.innerHTML = `
    <div class="ticketBooth">
    <button id="sideshowTicket">Sideshows Ticket</button>
    </div>`
}



eventHub.addEventListener("click", clickEvent => {
    // console.log(clickEvent.target)
    if (clickEvent.target.id === "rideTicket") {
        const selectedTicket = clickEvent.target.value
        const rideTicketEvent = new CustomEvent("rideTicketPurchased", {
            detail: {
                ticketPurchased: selectedTicket
            }
        })
        // console.log(rideTicketEvent);
        eventHub.dispatchEvent(rideTicketEvent)
        }
})

eventHub.addEventListener("click", clickEvent => {
    // console.log(clickEvent.target)
    if (clickEvent.target.id === "foodTicket") {
        const selectedTicket = clickEvent.target.value
        const foodTicketEvent = new CustomEvent("foodTicketPurchased", {
            detail: {
                ticketPurchased: selectedTicket
            }
        })
        // console.log(rideTicketEvent);
        eventHub.dispatchEvent(foodTicketEvent)
        }
})

eventHub.addEventListener("click", clickEvent => {
    // console.log(clickEvent.target)
    if (clickEvent.target.id === "gameTicket") {
        const selectedTicket = clickEvent.target.value
        const gameTicketEvent = new CustomEvent("gameTicketPurchased", {
            detail: {
                ticketPurchased: selectedTicket
            }
        })
        // console.log(rideTicketEvent);
        eventHub.dispatchEvent(gameTicketEvent)
        }
})

eventHub.addEventListener("click", clickEvent => {
    // console.log(clickEvent.target)
    if (clickEvent.target.id === "sideshowTicket") {
        const selectedTicket = clickEvent.target.value
        const sideshowTicketEvent = new CustomEvent("sideshowTicketPurchased", {
            detail: {
                ticketPurchased: selectedTicket
            }
        })
        // console.log(rideTicketEvent);
        eventHub.dispatchEvent(sideshowTicketEvent)
        }
})


// const rideTicket = document.querySelector(".ticketBooth")
// userChoiceElement.innerHTML = customEvent.detail.ticketPurchased


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
