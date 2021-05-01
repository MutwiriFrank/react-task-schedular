import React,  {useState} from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Doctors appointment',
          day: 'feb 5th at 3:30pm',
          reminder: true,

      },
      {
          id: 2,
          text: 'plumber appointment ',
          day: 'feb 5th at 3:30pm',
          reminder: true,

      },

      {
          id: 3,
          text: 'Doctors appointment',
          day: 'feb 5th at 3:30pm',
          reminder: false,

      }

          ])
  const addTask = (task) =>{
  const id = Math.floor(Math.random()*10000)+1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])

    }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  const toggleReminder = (id) =>{
  
    setTasks(tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder} :task))
  }

  return (
    <div className="App">
      <div className='container'>
        <Header onAdd={() =>setShowAddTask(!showAddTask) } showadd={showAddTask} title='Tasksheduler'/>
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length >0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />: 'No tasks available'}
      </div>
    </div>
  );
}

export default App;
