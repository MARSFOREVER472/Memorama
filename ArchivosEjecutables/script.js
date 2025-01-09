let icons = [];
let select = [];

generarTablero();

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

function generarTablero()
{
    loadIcons();
    select = [];
    let board = document.getElementById("tablero");
    let cards = [];

    for (let i = 0; i < 24; i++)
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
            backward1.style.transform = "plum";
            backward2.style.transform = "plum";
        }
    }, 1000);
}