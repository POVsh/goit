'use strict';

function calculateEngravingPrice(massage, pricePerWorld) {
    const massageArray = massage.split(' ');
    console.log(massageArray);

    const price = massageArray.length * pricePerWorld;

    return price;
}
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10, ));
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20, ));
console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40));
console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20));