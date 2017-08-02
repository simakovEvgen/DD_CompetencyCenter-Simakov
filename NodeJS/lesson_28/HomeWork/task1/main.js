/*
 * #HomeWork
 *
 * ###Задача 1
 *
 * Создайте EventEmitter, который каждую секунду будет генерировать событие 'tick'.
 * Создайте функцию-обработчик события 'tick', которая будет выводить в консоль количество секунд,
 * прошедшее со времени генерации первого события 'Tick'.
 */

'use strict';

const events = require('events');

const emitter = new events.EventEmitter;

var i = 0;

emitter.on('tick', () => {
    console.log(i);
    i++;
});

function tick() {
    emitter.emit('tick');
}
// генерация события 'event'
setInterval(tick,1000);