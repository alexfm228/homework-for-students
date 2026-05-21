import React from 'react'
import './App.css'

function App() {

  
  
  const [task, setTask] = React.useState(null);
  

  const [error, setError] = React.useState('');
  

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {

        if (!response.ok) {
          throw new Error('Не вдалося отримати дані');
        }

        return response.json();
      })
      .then((data) => {
   
        setTask(data); 
        setLoading(false); 
      })
      .catch((err) => {
        
        setError(err.message); 
        setLoading(false); 
      });
      
  }, []); 

  
  return (
    <div className='container'>
      <h1>React Homework</h1>

      
      {loading && <p>Завантаження даних...</p>}

      
      {error && <p style={{ color: 'red' }}>Помилка: {error}</p>}

      
      {task && !loading && (
        <div>
          <h3>Інформація про завдання:</h3>
          <p><strong>Номер (ID):</strong> {task.id}</p>
          <p><strong>Назва:</strong> {task.title}</p>
          <p><strong>Статус:</strong> {task.completed ? '✅ Виконано' : '❌ Не виконано'}</p>
        </div>
      )}
    </div>
  )
}

export default App;

