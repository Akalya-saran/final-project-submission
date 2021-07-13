let cards=[
    {
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/d7/bd/93/d7bd934adc5e5a50da570cb1bc98e946.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/d7/bd/93/d7bd934adc5e5a50da570cb1bc98e946.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://cdn.theatlantic.com/thumbor/cTP7DsiUyI81zFg8c-FDnIoCBhA=/540x0:2340x1800/540x540/media/img/mt/2016/01/superman/original.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://cdn.theatlantic.com/thumbor/cTP7DsiUyI81zFg8c-FDnIoCBhA=/540x0:2340x1800/540x540/media/img/mt/2016/01/superman/original.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpSXOxr-WMn-SPu6g1U-WKLE8VEiffhSaTOW2nI_vQ_KFoIJj3QrPWGolg-qXhFlSXF4k&usqp=CAU",
        value:4,
        status:"closed"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpSXOxr-WMn-SPu6g1U-WKLE8VEiffhSaTOW2nI_vQ_KFoIJj3QrPWGolg-qXhFlSXF4k&usqp=CAU",
        value:4,
        status:"closed"
    },
    {
        image:"https://image.freepik.com/free-vector/comic-style-superhero-illustration_23-2147499987.jpg?1",
        value:5,
        status:"closed"
    },
    {
        image:"https://image.freepik.com/free-vector/comic-style-superhero-illustration_23-2147499987.jpg?1",
        value:5,
        status:"closed"
    }
]
let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardsCopy=cards;

function displayCards(data){
    let cardsString="";
    data.forEach(function(card,index) {
        cardsString+=`

            <div class="card"style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">

                </div>

            </div>
        
        `;
    });
        
    document.getElementById('cards').innerHTML=cardsString;
}
displayCards(cards);

let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){
    console.log(cards);

    cards[index].status="opened";
        if(cardCount===1){
            val1=cards[index].value;
                cardCount++;
        }
        else if(cardCount===2){
            val2=cards[index].value;
                if(val1===val2){
                    score++;
                    
                    document.getElementById('score').innerText=score;
                
                    val1=null;
                    val2=null;
                    cardCount=1;
                }
                else{
                    alert("game over");
                    location.reload();
                }
        }
        displayCards(cards);
}
