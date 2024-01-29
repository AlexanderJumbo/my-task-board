import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../database/firebaseConfig'

export async function deleteTask ({ task, setOpen, setUpdate }) {
  await deleteDoc(doc(db, 'tasks', task))
  setOpen(false)
  setUpdate(true)
}
