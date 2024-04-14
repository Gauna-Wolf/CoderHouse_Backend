//DESAFIO Nº1

class TicketManager {
    #priceBaseGain = 0.15;
    constructor(){
        this.products = [];
    }

    addEvent(name, site, capacity, price = 50, date = new Date()){
        const event = {
            id: this.#getMaxId() + 1,
            name,
            site,
            capacity,
            price: price + this.#priceBaseGain,
            date,
            participants: []
        };
        this.products.push(event);
    }

    #getMaxId(){
        let maxId = 0;
        this.products.map((event) => {
        if (event.id > maxId) maxId = event.id;
        });
        return maxId;
    }

    getEvent() {
        return this.products;
    }

    addUser(idEvent, idUser){
        const event = this.#getEvent(idEvent);
        if(event) {
            if(!event.participants.includes(idUser)) {event.participants.push(idUser);
            } else {
                return 'this event not exists';
            }
        }
    }

    #getEvent(idEvent){
        return this.products.find((event) => event.id === idEvent); 
    }

    eventTour(idEvent, newSite, newDate) {
        const event = this.#getEvent(idEvent);
        if(event) {
            const newEvent = {
                ...event,
                id: this.#getEvent() + 1,
                site: newSite,
                date: newDate,
                participants: []
            };
            this.products.push(newEvent);
        } else return 'this event not exists';
    }
}

const ticketManager = new TicketManager();

ticketManager.addEvent('La Rural', 'Buenos Aires', 15000, 200);
ticketManager.addEvent('Expocicion de Autos', 'Tigre',20000, 600);
ticketManager.addUser(1, 'Leo')
ticketManager.addUser(1, 'Ezequiel')
ticketManager.addUser(6, 'Luca')
ticketManager.eventTour(2, 'Merlo', new Date('2024-05-20T19:14:50.839Z'))
console.log(ticketManager.getEvent());

