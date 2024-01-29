import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../database/firebaseConfig'

export function useTasks () {
  const [tasks, setTasks] = useState([])
  const [update, setUpdate] = useState(false)
  console.log('🚀 ~ useTasks ~ update:', update)

  const getTasks = async () => {
    const taskArray = []
    // const querSnapshot = getDocs(collection(db, 'tasks'))
    const querY = query(collection(db, 'tasks'), orderBy('timestamp', 'desc'))
    const querSnapshot = await getDocs(querY)
    querSnapshot.forEach(doc => {
      taskArray.push(doc?.data())
    })
    setTasks(taskArray)
    console.log(tasks)
    console.log('🚀 ~ getTasks ~ taskArray:', taskArray)
  }

  useEffect(() => {
    getTasks()
    setUpdate(false)
  }, [update])
  return { tasks, setUpdate }
}
