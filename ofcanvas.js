

const $btnOffCanvasCont = document.querySelector('.btnOffCanvasCont');
const $offcanvasCont = document.querySelector('.offcanvasCont');
const $badgeCont = document.querySelector('.badgeCont');
let usersArr = [];

const loadUsers = () => {
    // Obtener los usuarios desde el almacenamiento local
    const users = JSON.parse(localStorage.getItem('nusers')) || [];

    usersArr = [...users];

    const usersNotAccep = usersArr.filter(elem => !elem.isAccepted);
    $badgeCont.textContent = usersNotAccep.length.toString();

    updateOffcanvasContent(usersNotAccep);
};

const updateOffcanvasContent = (usersNotAccep) => {
    $offcanvasCont.innerHTML = "";

    usersNotAccep.forEach(elem => {
        let card = document.createElement('div');
        card.classList.add('cardProd');
        card.setAttribute("onclick", `confirmUser(${elem.id})`);
        card.innerHTML = `
      <div class="nameCont">
        <h1>${elem.name}</h1>
      </div>
    `;
        $offcanvasCont.appendChild(card);
    });
};

$btnOffCanvasCont.addEventListener('click', function () {
    const usersNotAccep = usersArr.filter(elem => !elem.isAccepted);
    updateOffcanvasContent(usersNotAccep);

    const offcanvasElement = document.getElementById("offcanvasRight");
    const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
    offcanvas.show();
});

window.confirmUser = (id) => {
    let userToModif = usersArr.find(elem => elem.id == id);
    let userIsAccepted = confirm(`¿Aceptar al usuario ${userToModif.name} como cliente?`);
    let adminIsAccepted = confirm(`¿Agregar al usuario ${userToModif.name} como administrador?`);

    if (!userIsAccepted) {
        let index = usersArr.findIndex(user => user.id == id);
        usersArr.splice(index, 1);
    } else {
        usersArr.find(elem => elem.id == id).isAccepted = userIsAccepted;
    }

    loadUsers(); // Volver a cargar los usuarios y actualizar el contenido del offcanvas
};

loadUsers();
