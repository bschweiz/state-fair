

// Import and invoke the ticket booth component function 
import { RideTickets, FoodTickets, GameTickets, SideshowTickets, FullTickets, Counter } from "./TicketBooth.js" 
import { RideTicketHolders } from "./rides/RideTicketHolders.js"
import { FoodTicketHolders } from "./food/FoodTicketHolders.js"
import { GameTicketHolders } from "./games/GameTicketHolders.js"
import { SideshowTicketHolders } from "./sideshows/SideshowTicketHolders.js"
import { FullTicketHolders } from "./FullTicketHolders.js"


RideTickets();
FoodTickets();
GameTickets();
SideshowTickets();
FullTickets();
RideTicketHolders();
FoodTicketHolders();
GameTicketHolders();
SideshowTicketHolders();
FullTicketHolders();
// Counter();