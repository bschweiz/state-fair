const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector(".state-fair")


export const SideshowTicketHolders = () => {
    eventHub.addEventListener("sideshowTicketPurchased", incrementBoxes => {
        
        contentTarget.innerHTML += `<div class="person gawker"></div>`
        console.log("testing sideShow Ticket Holders")
    })
}