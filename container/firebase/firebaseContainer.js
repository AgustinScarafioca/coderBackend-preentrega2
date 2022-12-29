const admin = require ('firebase-admin')

const serviceAccount = require('../../db/backend-1-83d55-firebase-adminsdk-1mzv6-a031ef24b5.json')

var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

class FireBaseContainer {
    constructor(){
        this.db = admin.firestore()
    }

    async get(colec, id){
        if(!id){
            const query = await this.db.collection(colec). get()
            const docs = query.docs
            const res = docs.map(doc => ({ id:doc.id, ...doc.data() }))
            return res
        }

        const doc = await this.id.collection(colec).doc(id).get()
        const res = { id: doc.i, ...doc.data() }
        return res
    }

    async add(colec, data, id){
        if(!id){
            const doc = await this.db.collection(colec).add(data)
            const res = { id: doc.id, ...data }
            return res
        }
        await this.db.collection(colec).doc(id).set(data)
        const res = { id, ...data }
        return res
    }

    async update(colec, id, data){
        await this.db.collection(colec).doc(id).update(data)
        const res = {id, ...data }
        return res 
    }

    async delete(colec, id){
        await this.db.collection(colec).doc(id).delete()
        return { id }
    }

}

module.exports = FireBaseContainer