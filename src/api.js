import { db, auth } from './firebase';

export function signInWithGoogle() {
    const google = new auth.GoogleAuthProvider(); 
    return auth().signInWithRedirect(google).then((res) => {
        console.log(res.user);
      }).catch((error) => {
        console.log(error.message);
      });
}


export function get(collectionName) {
    const collection = db.collection(collectionName);
    return (query = () => collection) => {
        return query(collection)
            .get()
            .then(snapshot => {
                const items = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                return items;
            })
            .catch(error => {
                console.log("Error getting documents: ", error);
            });
    }

}

export function getCategories() {
    return db.collection('categories')
        .get()
        .then(snapshot => {
            const items = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            
            return items;
        });        
}

export function getWishes() {
    return db.collection('wishes')
        // .where('categoryId', '==', '')
        .get()

        .then(snapshot => {
            const items = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            return items;
        });
}

// export function getWishes() {
//     return db.collection('wishes')
//         // .where('categoryId', '==', '')
//         .onSnapshot(snapshot => {
//             const items = snapshot.docs.map(doc => ({
//                 id: doc.id,
//                 ...doc.data()
//             }));
//             console.log(items);
//             return items;
//           });
// }

export function getCategoryWishes(listId) {
    return db.collection('wishes')
        .where('categoryId', 'array-contains', listId)
        .get()
        .then(snapshot => {
            const items = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            
            return items;
        });          
}

export function createWish(data) {
    return db.collection('wishes').add({
        ...data
        // completed: false
    })
        .then(docRef => docRef.get())
        .then(doc => ({
            id: doc.id,
            ...doc.data()
        }));
}

export function deleteWish(wishId) {
    return db.collection('wishes').doc(wishId).delete()
        .then(() => wishId);
}

// export function updateWish(wishId, data) {
//     //   console.log(wishId, data);
//     return db.collection('wishes').doc(wishId).update(data)
//     .then(() => ({
//         id: wishId,
//         ...data
//     }));
// }

export function updateWish(wishId, data) {
    //   console.log(wishId, data);
    return db.collection('wishes').doc(wishId).update({'title': data});
}