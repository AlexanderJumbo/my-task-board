import closeIcon from '../assets/close_ring_duotone-1.svg'

import clockStatus from '../assets/time_atack_duotone.svg'
import doneRound from '../assets/done_round_duotone.svg'
import close from '../assets/close_ring_duotone.svg'
import trash from '../assets/trash.svg'
import check from '../assets/done_round.svg'

import { useTask } from '../hooks/useTask'
import { addTask } from '../logic/addTask'
import { editTask } from '../logic/editTask'
import { deleteTask } from '../logic/deleteTask'
import { useKeyboardEvent } from '../hooks/useKeyboardEvent'

export function Modal ({ setOpen, task, setUpdate }) {
  const { taskFetch, status, setStatus } = useTask({ task })
  useKeyboardEvent({ setOpen })

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const fields = Object.fromEntries(new window.FormData(event.target))

    if (task === null) {
      await addTask({ fields, setOpen, setUpdate })
    } else {
      await editTask({ fields, task, setOpen, setUpdate })
    }
  }

  const handleDelete = async (event) => {
    event.preventDefault()
    await deleteTask({ task, setOpen, setUpdate })
  }

  const handleCheck = (event) => {
    setStatus(event.target.value)
  }

  return (
    <>
      <div className='container-modal'>
        <header className='header-modal'>
          <h1> {task ? 'Task details' : 'New Task details'}</h1>
          <div className='image-close-modal'> <img onClick={handleClose} src={closeIcon} /></div>
        </header>
        <form action='' className='form-modal' onSubmit={handleSubmit}>
          <label htmlFor='task_name'>
            Task name
          </label>
          <input placeholder='Learn JavaScript' type='text' autoComplete='off' name='task_name' id='task_name' defaultValue={taskFetch?.name} />
          <label htmlFor='description'>Description</label>
          <textarea placeholder='Enter a short description' name='description' id='description' cols='30' rows='10' defaultValue={taskFetch?.description} />
          <label htmlFor='icons' />
          <label htmlFor='status'>
            Status
          </label>
          <section className='wrapper-radios'>
            <div className='container-radio-status'>
              <div className='container-modal-status'>
                <div className='container-img-status in-progress'>
                  <img className='img-status-modal in-progress' src={clockStatus} alt='' />
                </div>
                <label htmlFor='in-progress'> In progress</label>
              </div>
              <input type='radio' name='status' id='in-progress' value='in-progress' checked={status === 'in-progress'} onChange={handleCheck} />
            </div>
            <div className='container-radio-status'>
              <div className='container-modal-status'>
                <div className='container-img-status completed'>
                  <img className='img-status-modal completed' src={doneRound} alt='' />
                </div>
                <label htmlFor='completed'>Completed</label>
              </div>
              <input type='radio' name='status' id='completed' value='completed' checked={status === 'completed'} onChange={handleCheck} />
            </div>
            <div className='container-radio-status'>
              <div className='container-modal-status'>
                <div className='container-img-status no-maked'>
                  <img className='img-status-modal no-maked' src={close} alt='' />
                </div>
                <label htmlFor='no-maked'>Won't do</label>
              </div>
              <input type='radio' name='status' id='no-maked' value='no-maked' checked={status === 'no-maked'} onChange={handleCheck} />
            </div>
          </section>
          <footer>
            <button className='button-modal delete' onClick={handleDelete}>Delete <img src={trash} alt='' /></button>
            <button className='button-modal save'>Save <img src={check} alt='' /></button>
          </footer>
        </form>
      </div>
    </>
  )
}
