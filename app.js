
const main=document.querySelector('main');


function getHOverCard() {
    const cards=document.querySelectorAll('.card');

    cards.forEach(card => {


        card.addEventListener('mouseenter', function (e) {
            card.querySelector('.footer').style.display='block';

        });

        card.addEventListener('mouseleave', function (e) {
            card.querySelector('.footer').style.display='';

        });


    });
}

let lCard=` <div class="list-card">`;

for (let index=0;index<10;index++) {

    lCard+=` <div class="card">
                <div class="footer description">

                    <span>Titre</span>
                    <span>Date</span>
                    <span>Lieu</span>
                    <span>Description</span>


                </div>
            </div>`;

}

lCard+=`</div>`;

main.innerHTML=lCard;

getHOverCard();