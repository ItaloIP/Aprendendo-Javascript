const { EventEmitter, on } = require('events')
const ev = new EventEmitter()
ev.on('Say something')

ev.emit('Say something')