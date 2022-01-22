const {initializeApp} = require("firebase/app");
const { getFirestore, collection, setDoc, doc } = require('firebase/firestore/lite');

// Initialize Cloud Firestore through Firebase
const app = initializeApp({
  // Your firebase config
});

const db = getFirestore(app);

const data-list = [
  /**
   * Place your data here...
   * Example:
   * { name: 'Muhammad },
   * { name: 'Sulton }
   */
];

data-list.forEach(function(obj) {
  const data = {
    /**
     * data-list mapping
     * name: obj.name
     */
  }

  const newRef = doc(collection(db, 'colection_name'))
  setDoc(newRef, data)
});
