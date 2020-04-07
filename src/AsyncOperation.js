const asyncOp = require('../lib/lib').asyncOp;
//es7
// const doAsync = async items => {
//     for (const currentItem of items) {
//         if (Array.isArray(currentItem)) {
//             await Promise.all(currentItem.map(element => asyncOp(element)));
//         } else if(typeof currentItem) {
//             await asyncOp(currentItem);
//         }else {
//             throw new Error('Invalid data type');
//         }
//     }
// };

// promise
const doAsync = items => {
    items.reduce((promise, currentItem)=>{
            if (Array.isArray(currentItem)) {
                return promise.then(()=>{
                    return Promise.all(currentItem.map(element => asyncOp(element)));
                });
            } else if(typeof currentItem == 'string') {
                return promise.then(()=>{
                    return asyncOp(currentItem);
                });
            }else {
                throw new Error('Invalid data type');
            }
    },Promise.resolve())
};

module.exports = doAsync;