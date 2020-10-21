
const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector(".state-fair")


export const TicketBooth = () => {
    contentTarget.innerHTML = `
    <div class="ticketBooth">
    <button id="rideTicket">Ride Ticket</button>
    </div>`
}



eventHub.addEventListener("click", clickEvent => {
    console.log(clickEvent.target)
    if (clickEvent.target.id === "rideTicket") {
        console.log("test");}
    else {console.log(test2)}

    //     const selectedTicket = clickEvent.target.value
        
    //     const rideTicketEvent = new CustomEvent("rideTicketPurchased", {
    //         detail: {
    //             ticketPurchased: selectedTicket
    //         }
    //     })
    //     console.log(rideTicketEvent);
    //     eventHub.dispatchEvent(rideTicketEvent)
    // }
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
