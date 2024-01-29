import './App.css'
import { TasksLists } from './Components/TasksList'
import { Header } from './Components/header'

function App () {
  return (
    <main>
      <Header />
      <section className='tasks'>
        <TasksLists />
      </section>
    </main>
  )
}

export default App
