const Events = require('events');

//es6
class RandStringSource extends Events.EventEmitter {
    constructor(stream) {
        super();
        this._remainder = ''; //store payload unwrapped tail
        this._stream = stream;
        this._listen();
    }

    _listen() {
        this._stream.on('data', this._emitAfterWrappedFilter.bind(this)); //Can share context by arrow function also
    }
    _emitAfterWrappedFilter(chunk){
        this._remainder  = `${this._remainder}${chunk}`;
        let newChunks = this._remainder.split('.'); //checking wrapped string
        this._remainder = newChunks.pop(); //storing tail string

        //emitting chuck if available to emit
        newChunks.forEach(newChunk => {
            if(!newChunk) return;

            this.emit('data',newChunk)
        });
    }
}

module.exports = RandStringSource;