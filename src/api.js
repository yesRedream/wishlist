import { db } from './firebase';

export function get(collection) {
    return db.collection(collection)
        .get()
        .then(collection => {
            const items = collection.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            return items;
        })
        .catch(error => {
            console.log("Error getting documents: ", error);
        });
}