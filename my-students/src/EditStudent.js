import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StudentForm from "./StudentForm"

function EditStudent({students, onupdate})
{
    const {id} = useParams();
    const navigate = useNavigate();

    const student = students.find((i) => i.id === parseInt(id));

    if(!student) return <p> item not found</p>

    function handleupdate(updateStudent)
    {
        onupdate(updateStudent)
        navigate("/");

    }

    return <StudentForm initialData={student} onSubmit={handleupdate} />

}

export default EditStudent;