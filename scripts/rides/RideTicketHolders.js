const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector(".state-fair")


export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", incrementBoxes => {
        
        contentTarget.innerHTML += `<div class="person rider"></div>`
        console.log("testing Ride Ticket Holders", )
    })
}


// let ticketCounter = 0

// const  boxHTMLRepresentations = () => {
//     return `<section class="rider">
//     <h2 class="criminal__name">${criminalObj.name}</h2>
//         <div class="criminal__properties">
//             <p>Age: ${criminalObj.age}</p>
//             <p>Crime: ${criminalObj.conviction}</p>
//             <p>Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
//             <p>Term end: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
//         </div>
//     </section>`
// }
// <div class="person rider"></div>

// const render = () => {
//     let boxHTMLRepresentations = "";
//     for (const criminal of criminalsArray) {
//         boxHTMLRepresentations += <div class="person rider"></div>;

//         contentTarget.innerHTML = `
//             <h1>RIDER Tracking</h>
//             <section class="criminalsList">
//                 ${criminalsHTMLRepresentations}
//             </section>
//         `
//     }
// }

// eventHub.addEventListener("crimeSelected", event => {
//     if (event.detail.crimeThatWasChosen !==0) {
//         const criminalsArray = useCriminals();
//         const convictionsArray = useConvictions();
//         const convictionThatWasChosen = convictionsArray.find(convictionObj => {
//             return convictionObj.id === event.detail.crimeThatWasChosen
//         })
//         // console.log(criminalsArray)
//         // console.log(convictionsArray)
//         console.log(convictionThatWasChosen)
//         const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
//             return criminalObj.conviction === convictionThatWasChosen.name
//         })
//         // debugger
        
//         render(filteredCriminalsArray)
//     }
// })