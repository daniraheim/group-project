import React from 'react';
import { useNavigate } from 'react-router-dom';
import StudentForm from './StudentForm';

function AddStudent({ onAdd }) {
  const navigate = useNavigate();

  function handleAdd(newStudent) {
    onAdd(newStudent);
    navigate("/");
  }

  return <StudentForm initialData={{ Name: "", Age: "", Grade: "", Email: "" }} onSubmit={handleAdd} />;
}

export default AddStudent;