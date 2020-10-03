window.addEventListener('load', function(){
    //Elemento donde queremos agregar el carousel y la opcion como queres tener visualmente el carousel
    new Glider(document.querySelector('.carousel-lista'), {
        //Cuantos slides se muestran
        slidesToShow: 4,
        //Al presionar la flecha cuandos slides avanzar
        slidesToScroll: 4,
        //Si se activa que se puede mover con el dedo (celular)
        draggable: true,
        //Indicadores (carousel-indicadores)
        dots: '.carousel-indicadores',
        arrows: {
            prev: '.carousel-anterior',
            next: '.carousel-siguiente'
        }
    });
});