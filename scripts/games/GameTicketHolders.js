const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector(".state-fair")


export const GameTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchased", incrementBoxes => {
        
        contentTarget.innerHTML += `<div class="person player"></div>`
        console.log("testing GAME Ticket Holders")
    })
}