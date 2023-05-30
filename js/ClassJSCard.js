export class Cards {
    constructor(id, name, ranking, price, disc, discPer, img, descrip, tpd, fav, type,stock) {
        this.id = id;
        this.name = name;
        this.ranking = ranking;
        this.price = price;
        this.disc = disc;
        this.discPer = discPer;
        this.img = img;
        this.descrip = descrip;
        this.tpd = tpd;
        this.fav = fav;
        this.type = type;
        this.stock = stock
    }
    createCard(cont){
        let card = document.createElement('div');
        card.classList.add('cardProd')
        card.setAttribute("onclick", `addCart(${this.id})`)
        card.innerHTML = `
            <div class="imgCardCont">
                <img src="${this.img}" alt="">
            </div>
            <div class="priceCardCont">
                <h1>${this.name}</h1>
                <div class="priceCont">
                    ${this.disc ? `<span class="disc"> -${this.discPer}%</span>
                    <del class="PrevPrice">$${this.price}ARS</del>
                    <span>$${Math.floor((this.price * (100-this.discPer))/100)}ARS</span>`: `<span>$${this.price}ARS</span>`}
                    
                </div>
            </div>
        `
        cont.appendChild(card)
    }
    createCardCart(cont) { // No se utilizo pero puede servir para realizar el carrito de la pagina principal
        let card = document.createElement('div');
        card.classList.add('cardCart');
        card.innerHTML = `
            <div class="priceCardCart">
                <h1>${this.name}</h1>
                <div class="priceCartCardCont">
                    ${this.disc ? `
                    <span>$${Math.floor((this.price * (100-this.discPer))/100)}ARS</span>`: `<span>$${this.price}ARS</span>`}
                </div>
            </div>
        `
        cont.appendChild(card)
    }
    // createCardCartEmpty (cont) {
    //     let card = document.createElement('div');
    //     card.classList.add('cardCart');
    //     card.innerHTML = `
    //         <div class="priceCardCart">
    //             <h1>No queres nada de esta seccion</h1>
    //         </div>
    //     `
    //     cont.appendChild(card)
    // }
}

class Options {
    constructor (id, img) {
        this.id = id,
        this.img = img
    }
    createOptions (cont) {
        let card = document.createElement('div');
        card.setAttribute('id', `${this.id}`)
        card.setAttribute("onclick", `selType('${this.id}')`)
        card.classList.add('typeCont');
        card.innerHTML = `
        <img class="imgOpc" src="${this.img}" alt="" >
        <span class="prodSelected" >Todavia no seleccionaste nada!</span>
        `
        cont.appendChild(card)
    }
}