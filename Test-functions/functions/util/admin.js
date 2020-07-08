const admin = require('firebase-admin');
const serviceAccount = require('../util/test-e16d0-firebase-adminsdk-7kve4-0ebd4fd392.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://test-e16d0.firebaseio.com',
  storageBucket: 'test-e16d0.appspot.com',
});

const db = admin.firestore();

module.exports = { admin, db };
