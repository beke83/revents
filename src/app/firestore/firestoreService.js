//this file stores firebase and firestore queries
import cuid from "cuid";
import firebase from "../config/firebase";

const db = firebase.firestore(); //gives us access to the firebase db

export function dataFromSnapshot(snapshot) {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data();

  // loops over all the properties inside an object
  for (const prop in data) {
    //check if data hasOwnProperty
    if (data.hasOwnProperty(prop)) {
      //check if data and prop is an instanceOf Firebase
      if (data[prop] instanceof firebase.firestore.Timestamp) {
        data[prop] = data[prop].toDate();
      }
    }
  }

  return {
    ...data,
    id: snapshot.id,
  };
}

export function listenToEventsFromFirestore() {
  return db.collection("events").orderBy('date');
}

export function listenToEventFromFirestore(eventId) {
  return db.collection("events").doc(eventId);
}
export function addEventToFirestore(event) {
  return db.collection("events").add({
    ...event,
    hostedBy: "Diana",
    hostPhotoURL: "https://randomuser.me/api/portraits/women/22.jpg",
    attendees: firebase.firestore.FieldValue.arrayUnion({
      id: cuid(),
      displayName: "Diana",
      photoURL: "https://randomuser.me/api/portraits/women/22.jpg",
    }),
  });
}

export function updateEventInFirestore(event){
  return db.collection('events').doc(event.id).update(event)
}  

export function deleteEventInFirestore(eventId){
  return db.collection('events').doc(eventId).delete();
}

export function cancelEventToggle(event){
  return db.collection('events').doc(event.id).update({
    isCancelled: !event.isCancelled
  })
}
