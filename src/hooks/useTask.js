import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../database/firebaseConfig'

export function useTask ({ task }) {
  const [taskFetch, setTaskFetch] = useState({})
  const [status, setStatus] = useState('')

  const getTaskInfo = async () => {
    const document = doc(db, 'tasks', task)
    const result = await getDoc(document)
    if (result.exists()) {
      setTaskFetch(result.data())
      setStatus(result?.data()?.status)
    } else {
      console.log('No hay datos')
    }
  }

  useEffect(() => {
    if (!task) return
    getTaskInfo()
  }, [])

  return { taskFetch, status, setStatus }
}
