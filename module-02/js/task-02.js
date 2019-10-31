'use strict';

function calculateEngravingPrice(massage, pricePerWorld) {
    const massageArray = massage.split(' ');
    console.log(massageArray);

    const price = massageArray.length * pricePerWorld;

    return console.log(price);
}
calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10, );
calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20, );
calculateEngravingPrice('Donec orci lectus aliquam est', 40);
calculateEngravingPrice('Donec orci lectus aliquam est', 20);