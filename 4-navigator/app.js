// Конечные координаты
const addressLat = Math.random() * 10;
const addressLong = Math.random() * 10;

// Текущая позиция
const positionLat = Math.random();
const positionLong = Math.random();

// Расчет растояния
const distanceLat = addressLat - positionLat;
const distanceLong = addressLong - positionLong;

// Расчет дистанции
if (distanceLat < 0){
    const msg = 'Пользователь Lat ушел дальше конечной точки!';
    console.log(msg);
} else {
    console.log(`Пользователю Lat 
        необходио преодолеть еще ${distanceLat}, до конечной точки.`);
}

if (distanceLong < 0){
    const msg = 'Пользователь Long ушел дальше конечной точки!';
    console.log(msg);
} else {
    console.log(`Пользователю Long
        необходио преодолеть еще ${distanceLong}, до конечной точки.`);
}