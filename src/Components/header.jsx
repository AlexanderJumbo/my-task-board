import logo from '../assets/logo.svg'
import done from '../assets/edit_duotone.svg'

export function Header () {
  return (
    <>
      <header className='header-container'>
        <img className='img-header-left' src={logo} alt='' />
        <span>
          <h1>My Task Board</h1>
          <h4>Task to keep organised</h4>
        </span>
        <img className='img-header-right' src={done} alt='' />
      </header>
    </>
  )
}
