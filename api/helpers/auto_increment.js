import db from '../../connection/conect.js'

export default async function autoIncrementar (categoria, id){
    use("incidents_system");
    let data = db[categoria]
        .find()
        .sort({[id]: -1})
        .toArray();
    if(data.length < 1) return 1; 
    
    let lastNumber = data[0][id];
    return lastNumber + 1;
};