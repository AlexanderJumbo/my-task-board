import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../database/firebaseConfig'

export async function editTask ({ fields, task, setOpen, setUpdate }) {
  const reference = doc(db, 'tasks', task)
  try {
    await updateDoc(reference, {
      name: fields.task_name.toUpperCase(),
      description: fields.description,
      icon: '',
      status: fields.status
    })
    setOpen(false)
    setUpdate(true)
  } catch (error) {
    console.log(error)
    setOpen(false)
  } finally {
    setOpen(false)
  }
}
