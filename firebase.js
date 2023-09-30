import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
import { collection, doc, getDoc, query, where, getDocs, initializeFirestore, persistentLocalCache, persistentMultipleTabManager, orderBy } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.fb_api_key,
  authDomain: process.env.fb_auth_domain,
  projectId: process.env.fb_project_id,
  storageBucket: process.env.fb_storage_bucket,
  messagingSenderId: process.env.fb_messaging_sender_id,
  appId: process.env.fb_app_id,
  measurementId: process.env.fb_measurement_id
};

const app = initializeApp(firebaseConfig);

const db = initializeFirestore(app,
  {
    localCache:
      persistentLocalCache(/*settings*/{ tabManager: persistentMultipleTabManager() }),
  });

const analytics = getAnalytics(app);
// const db = getFirestore(app);
const perf = getPerformance(app);
const auth = getAuth(app)

const signInCheck = () => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      console.log("サインイン id:" + user.uid)
    } else {
      console.log("匿名アカウントを作成")
      await signInAnonymously(auth)
    }
  });
}

const onSignIn = (play) => {
  onAuthStateChanged(auth, (user) => {
    play(user)
  })
}

const get_book_id = async (id) => {

  const docRef = doc(db, "Books", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    return "ERR"
  }
}

const get_mybooks = async () => {
  const q = query(collection(db, "Books"), where("public", "==", true), where("creator", "==", auth.currentUser.uid), orderBy("now", "desc"));
  const querySnapshot = await getDocs(q);

  return querySnapshot

}

export {
  get_book_id,
  get_mybooks,
  signInCheck,
  onSignIn
}