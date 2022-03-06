import { fireStore } from "./../../../services/firebase";
import "firebase/firestore";
{
  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                            List all document from firestore(Comment)
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
}

async function listAll(collection_name, Rout) {
  let data = [];
  try {
    const doc = await fireStore
      .collection(collection_name)
      .where("idRout", "==", Rout)
      .get();
    doc.docs.forEach((item) => {
      if (item.exists) {
        data.push({ id: item.id, ...item.data() });
      } else {
        console.log("no such document");
      }
    });
  } catch (err) {
    console.error(err);
  }
  return data;
}

{
  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                            Delete a document specified my ID
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
}

function deleteItem(collection_name, _id) {
  fireStore
    .collection(collection_name)
    .doc(_id)
    .delete()
    .then((res) => {
      console.log("delete");
    })
    .catch((err) => {
      console.err(err);
    });
}

{
  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                            Update the document 
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
}

function updateItem(collection_name, document) {
  fireStore
    .collection(collection_name)
    .add(document)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
}
{
  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                           Create A Document  
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
}

function createDocument(collectionName, document) {
  fireStore
    .collection(collectionName)
    .add(document)
    .then((res) => {
      e.target.reset();
    })
    .catch((err) => {
      console.error(err.message);
    });
}
{
  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                           List All Document  
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
}
async function listAllDocument(collection_name) {
  let data = [];
  try {
    const doc = await fireStore.collection(collection_name).get();
    doc.docs.forEach((item) => {
      if (item.exists) {
        data.push({ id: item.id, ...item.data() });
      } else {
        console.log("Document does not exist!");
      }
    });
  } catch (err) {
    console.log(err);
  }
  return data;
}

export { listAll, deleteItem, updateItem, createDocument, listAllDocument };
