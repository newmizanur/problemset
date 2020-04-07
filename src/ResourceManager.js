const Resource = require('./Resource');

class ResourceManager {
    constructor(count) {
        this.queued = [];
        this.resources = [];
        this._createResources(count)
    }

    borrow(callback){
        if(typeof  callback != "function") throw new Error('Invalid argument!');

        this.queued.push(callback); //pushing all to queue
        let resource = this._getAvailableResource(); //pulling available resource
        if(!resource) return;

        this._allocateResource(resource); //assigning resource to borrower
    }
    _createResources (count){
        //resources initialization
        for (let index = 0; index < count; index++) {
            this.resources.push(new Resource(this._notifyRelease.bind(this))); //release loop kind of recursive
        }
    }

    _notifyRelease (){
        let resource = this._getAvailableResource();
        if(!resource) return;

        // reassigning resource to new borrower at queue
        this._allocateResource(resource);
    }
    _getAvailableResource(){
        return this.resources.find((resource)=> !resource.lock);
    }
    _allocateResource(resource){
        const resourceClient = this.queued.shift();
        if(!resourceClient) return;

        resource.lock = true;
        resourceClient(resource); //assigning here, should be transactional
    }
}

module.exports = ResourceManager;