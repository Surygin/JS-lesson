// Конечные координаты
const addressLat = Math.random() * 10;
const addressLong = Math.random() * 10;

// Текущая позиция
const positionLat = Math.random();
const positionLong = Math.random();

// Расчет растояния
const distanceLat = addressLat - positionLat;
const distanceLatReverse = positionLat - addressLat;
const distanceLong = addressLong - positionLong;
const distanceLongReverse =  positionLong - addressLong;

// Расчет дистанции
if (distanceLat < 0){
    console.log(`Пользователю Lat 
        необходио вернутся на ${distanceLatReverse}, к конечной точке.`);
} else {
    console.log(`Пользователю Lat 
        необходио преодолеть еще ${distanceLat}, до конечной точки.`);
}

if (distanceLong < 0){
    console.log(`Пользователю Long 
        необходио вернутся на ${distanceLongReverse}, к конечной точке.`);
} else {
    console.log(`Пользователю Long
        необходио преодолеть еще ${distanceLong}, до конечной точки.`);
}