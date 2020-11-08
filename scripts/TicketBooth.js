const eventHub = document.querySelector(".state-fair")

const rideTarget = document.querySelector(".rides")
const foodTarget = document.querySelector(".food")
const gameTarget = document.querySelector(".games")
const sideshowTarget = document.querySelector(".sideshow")
const fullTarget = document.querySelector(".entry")
const countTarget = document.querySelector(".customers")

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

export const FullTickets = () => {
    fullTarget.innerHTML = `
    <div class="ticketBooth">
    <button id="fullTicket">Full Package Ticket</button>
    </div>`
}

let stateVar = 0

export const Counter = () => {
        countTarget.innerHTML = `
        Total tickets purchased: ${stateVar}`
        return stateVar     
    
}



eventHub.addEventListener("click", clickEvent => {
    stateVar++;
    Counter();
    if (clickEvent.target.id === "rideTicket") {
        const selectedTicket = clickEvent.target.value
        const rideTicketEvent = new CustomEvent("rideTicketPurchased", {
            detail: {
                ticketPurchased: selectedTicket
            }
        })
        eventHub.dispatchEvent(rideTicketEvent)
        }
    else if (clickEvent.target.id === "foodTicket") {
        const selectedTicket = clickEvent.target.value
        const foodTicketEvent = new CustomEvent("foodTicketPurchased", {
            detail: {
                ticketPurchased: selectedTicket
            }
        })
        eventHub.dispatchEvent(foodTicketEvent)
        }
    else if (clickEvent.target.id === "gameTicket") {
        const selectedTicket = clickEvent.target.value
        const gameTicketEvent = new CustomEvent("gameTicketPurchased", {
            detail: {
                ticketPurchased: selectedTicket
            }
        })
        eventHub.dispatchEvent(gameTicketEvent)
        }
    else if (clickEvent.target.id === "sideshowTicket") {
        const selectedTicket = clickEvent.target.value
        const sideshowTicketEvent = new CustomEvent("sideshowTicketPurchased", {
            detail: {
                ticketPurchased: selectedTicket
            }
        })
        eventHub.dispatchEvent(sideshowTicketEvent)
    }
    else if (clickEvent.target.id === "fullTicket") {
        const selectedTicket = clickEvent.target.value
        const fullTicketEvent = new CustomEvent("fullTicketPurchased", {
            detail: {
                ticketPurchased: selectedTicket
            }
        })
        eventHub.dispatchEvent(fullTicketEvent)
        }
})


