// DECLARACIÓN DE VARIABLES...

let points;
let totalCards = 4;
let icons = [];
let select = [];

// LLAMADO A LA FUNCIÓN PARA GENERAR EL TABLERO...

generarTablero();

// FUNCIÓN PARA CARGAR LAS IMÁGENES DE CADA FICHA...

function loadIcons()
{
    icons = [
        '<i class="fas fa-star"></i>',
        '<i class="far fa-star"></i>',
        '<i class="fas fa-eye"></i>',
        '<i class="fas fa-truck"></i>',
        '<i class="fas fa-users"></i>',
        '<i class="far fa-compass"></i>',
        '<i class="fas fa-fire"></i>',
        '<i class="fas fa-dice"></i>',
        '<i class="fas fa-unlock"></i>',
        '<i class="fas fa-star-and-crescent"></i>',
        '<i class="fas fa-bomb"></i>',
        '<i class="fas fa-om"></i>',
    ]
}

// FUNCIÓN PARA REALIZAR UN TABLERO DEL JUEGO CON 24 FICHAS EN TOTAL...

function generarTablero()
{
    points = 0;
    loadIcons();
    select = [];
    let board = document.getElementById("tablero");
    let cards = [];

    for (let i = 0; i < totalCards; i++)
    {
        cards.push(`
            <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
                    <div class="tarjeta" id="tarjeta${i}">
                        <div class="cara trasera" id="trasera${i}">
                            ${icons[0]}
                        </div>
                    <div class="cara superior">
                        <i class="far fa-question-circle"></i>
                    </div>
                </div>
            </div>        
        `);

        if (i % 2 == 1)
        {
            icons.splice(0, 1);
        } 
    }

    cards.sort(() => Math.random() - 0.5);
    board.innerHTML = cards.join(" ");
}

// FUNCIÓN PARA SELECCIONAR UNA FICHA DEL TABLERO...

function seleccionarTarjeta(i)
{
    let card = document.getElementById("tarjeta" + i);

    if (card.style.transform != "rotateY(180deg)")
    {
        card.style.transform = "rotateY(180deg)";
        select.push[i];
    }

    if (select.length == 2)
    {
        unselect(select);
        select = [];
    }
}

// FUNCIÓN PARA DEJAR DE SELECCIONAR UNA FICHA DEL TABLERO...

function unselect(select)
{
    setTimeout(() => {
        let backward1 = document.getElementById("trasera" + select[0]);
        let backward2 = document.getElementById("trasera" + select[1]);

        if (backward1.innerHTML != backward2.innerHTML)
        {
            let card1 = document.getElementById("tarjeta" + select[0]);
            let card2 = document.getElementById("tarjeta" + select[1]);

            card1.style.transform = "rotateY(0deg)";
            card2.style.transform = "rotateY(0deg)";
        }

        else
        {
            backward1.style.background = "plum";
            backward2.style.background = "plum";
            points++;
            document.getElementById("puntos").innerHTML = "Points: " + points;
        }

        if (verificarFin())
        {
            alert("EL JUEGO HA TERMINADO!");
            
        }
        
    }, 1000);
}

// FUNCIÓN PARA TERMINAR UNA PARTIDA MEDIANTE UN MENSAJE DE ALERTA...

function verificarFin()
{
    for (let i = 0; i < totalCards; i++)
    {
        let backward = document.getElementById("trasera" + i);


        if (backward.style.background != "plum")
        {
            return false;
        }
    }

    return true;
}