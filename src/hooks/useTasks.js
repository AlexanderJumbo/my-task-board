import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../database/firebaseConfig'

export function useTasks () {
  const [tasks, setTasks] = useState([])
  const [update, setUpdate] = useState(false)

  const getTasks = async () => {
    const taskArray = []
    const querY = query(collection(db, 'tasks'), orderBy('timestamp', 'desc'))
    const querSnapshot = await getDocs(querY)
    querSnapshot.forEach(doc => {
      taskArray.push(doc?.data())
    })
    setTasks(taskArray)
  }

  useEffect(() => {
    getTasks()
    setUpdate(false)
  }, [update])
  return { tasks, setUpdate }
}
