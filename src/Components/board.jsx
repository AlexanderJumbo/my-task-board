import inProgress from '../assets/alarm.png'
import completed from '../assets/levantamiento-pesas.png'
import noCompleted from '../assets/coffe.png'
import todo from '../assets/todo.png'
import clockStatus from '../assets/time_atack_duotone.svg'
import doneRound from '../assets/done_round_duotone.svg'
import close from '../assets/close_ring_duotone.svg'

export function Board ({ props, setOpen, setTask }) {
  const editTask = (event) => {
    setOpen(true)
    setTask(event.target.id)
  }
  return (
    <>
      {
        props.status === 'in-progress'
          ? (
            <div className='task in-progress' key={props.id}>
              <div className='board-detail-1'>
                <span>{props.name}</span>
                <img className='image-type-task' src={inProgress} alt='' />
              </div>
              <div className='board-detail-2'>
                <img className='image-status' onClick={editTask} id={props.id} src={clockStatus} alt='' />
              </div>
            </div>
            )
          : ''
      }
      {
        props.status === 'completed'
          ? (
            <div className='task completed' key={props.id}>
              <div className='board-detail-1'>
                <span>{props.name}</span>
                <img className='image-type-task' src={completed} alt='' />
              </div>
              <div className='board-detail-2 completed'>
                <img onClick={editTask} id={props.id} className='image-status completed' src={doneRound} alt='' />
              </div>
            </div>
            )
          : ''
      }
      {
        props.status === 'no-maked'
          ? (
            <div className='task no-maked' key={props.id}>
              <div className='board-detail-1'>
                <span>{props.name}</span>
                <img className='image-type-task' src={noCompleted} alt='' />
              </div>
              <div className='board-detail-2 no-maked'>
                <img className='image-status no-maked' onClick={editTask} id={props.id} src={close} alt='' />
              </div>
            </div>
            )
          : ''
      }
      {
        props.status === 'todo'
          ? (
            <div className='task to-do' key={props.id}>
              <div className='board-detail-1'>
                <span>{props.name}</span>
                <img className='image-type-task' src={todo} alt='' />
              </div>
              <div className='description-task'>{props.description}</div>
            </div>
            )
          : ''
      }
    </>
  )
}
