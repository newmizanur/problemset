class Resource {
    constructor(notifyRelease) {
        this._notifyRelease = notifyRelease;
        this.lock = false;
        // this.id = Math.random(); //can enable it to see resource reuse
    }
    release() {
        // console.log("RELEASING: ",this.id);  //can enable it to see resource reuse
        this.lock = false;
        this._notifyRelease();
    }
}

module.exports = Resource;