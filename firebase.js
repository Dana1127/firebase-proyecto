        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
        import { getFirestore, collection, addDoc, getDocs} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js"
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyA0zk9UtcESSCmXhPPUbqb_VqRNaqQfdw8",
          authDomain: "fir-prog-web.firebaseapp.com",
          projectId: "fir-prog-web",
          storageBucket: "fir-prog-web.appspot.com",
          messagingSenderId: "886358910534",
          appId: "1:886358910534:web:03e36396fe22f4452d8c47"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);

        const db = getFirestore(app);

        export async function addTask(title,description){
          try {
            const docRef = await addDoc(collection(db, "task"), { //funcion asincrona para que mande los datos a la colección "task"
              title,
              description,
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          
        }

        export async function getAllTasks(){
          const querySnapshot = await getDocs(collection(db, "task"));
          const mappedArrray = []
          querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            mappedArrray.push(doc.data())
          });

          return mappedArrray
        }
