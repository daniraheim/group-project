import './App.css';
import { useState } from 'react';
import Layout from './Layout';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddStudent from './AddStudent'
import EditStudent from './EditStudent';
import ListStudents from './ListStudents';

function App() {

  const [students , setStudents] = useState([
    {id : 1, Name: "Ben" , Age: 18 , Grade: 12, Email: "yep@gmail.com" }
  ])

  function deleteStudent(id)
  {
    setStudents(students.filter((student) => student.id !== id));
  }

  function addStudent(student) {
    const newStudent = { ...student, id: Date.now() };
    setStudents([...students, newStudent]);
  }

  function updateStudent(updated)
  {
    setStudents(students.map((student) => student.id === updated.id ? updated : student));
  }

  return(
    <Router>
        <Layout>
            <Routes>
               <Route path="/" element={ <ListStudents students={students} onDelete={deleteStudent} /> }    />

               <Route path="/add" element={ <AddStudent onAdd={addStudent} /> }    />
               
               <Route path="/edit/:id" element={ <EditStudent students={students} onupdate={updateStudent} /> } />
            </Routes>
        </Layout>
    </Router>
  );
}

export default App;
