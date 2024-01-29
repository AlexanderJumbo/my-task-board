import { useState } from 'react'
import add from '../assets/add_round_duotone.svg'

import { Modal } from './Modal'
import { Board } from './board'
import { useTasks } from '../hooks/useTasks'

export function TasksLists () {
  const [open, setOpen] = useState(false)
  const [task, setTask] = useState(null)
  const { tasks, setUpdate } = useTasks()

  const handleOpen = () => {
    setOpen(!open)
    setTask(null)
  }

  return (
    <>
      {
        tasks.map(task => (
          <Board key={task.id} props={task} setOpen={setOpen} setTask={setTask} />
        ))
      }

      <div className='task add-new'>
        <div className='board-detail-1 add-new'>
          <span>Add new task</span>
          <div className='board-detail-2 add-new'>
            <img className='image-status add-new' onClick={handleOpen} src={add} alt='' />
          </div>
        </div>
      </div>
      {open && <Modal open={open} setOpen={setOpen} task={task} setUpdate={setUpdate} />}
    </>
  )
}
