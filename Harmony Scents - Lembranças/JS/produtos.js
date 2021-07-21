const items = [
    {
        id:0,
        nome:'Caneca Stech',
        img: './img/caneca_stech.jpg',
    },
    {
        id:1,
        nome:'Biscuit Harry Potter',
        img: './img/harry-potter-biscuit.jpg',
    },
    {
        id:2,
        nome:'Harry Potter em feltro',
        img: './img/harry-potter.jpg',
    },
    {
        id:3,
        nome:'Kit de sabonetes',
        img: './img/kit-sabonete.jpg',
    },
    {
        id:4,
        nome:'Enfeites de natal',
        img: './img/enfeites-de-natal-de-feltro.jpg',
    },
    {
        id:5,
        nome:'ToyStory',
        img: './img/toy-story.jpg',
    },
]

inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val) => {
        containerProdutos.innerHTML+= `
        
                <div class="produtos-single">
                    <img src="`+val.img+`">
                    <p>`+val.nome+`</p>
                    <a key="`+val.id+`" href="#" class="btn btn-outline-dark">
                        <i class="fas fa-cart-plus"></i>
                    </a>
                </div>
        `;
    })
}

inicializarLoja();

atualizarCarrinho = () => {

}

var links = document.getElementsByTagName('a');

for(var i = 0; i< links.length; i++){
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
}

