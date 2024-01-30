import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from '../database/firebaseConfig'

export async function addTask ({ fields, setOpen, setUpdate, inputsEmpty }) {
  if (inputsEmpty) {
    window.alert('You should fill the name and status fields')
    return
  }

  const newTask = {
    id: window.crypto.randomUUID(),
    name: fields.task_name.toUpperCase(),
    description: fields.description,
    icon: '',
    status: fields.status,
    timestamp: serverTimestamp()
  }

  try {
    await setDoc(doc(db, 'tasks', newTask.id), {
      ...newTask
    })
    setOpen(false)
    setUpdate(true)
  } catch (error) {
    setOpen(false)
  } finally {
    setOpen(false)
  }
}
