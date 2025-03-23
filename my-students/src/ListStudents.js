import React from 'react';
import {Link} from 'react-router-dom';


function ListStudents({students, onDelete})
{
    return (
        <div className="table-responsive mt-4">
          <table className="table table-bordered">
            <thead className="table-info">
              <tr>
                <th className="table-danger">Name</th>
                <th>Age</th>
                <th className="table-warning">Grade</th>
                <th className="table-success">Email</th>
                <th className="table-primary">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.Name}</td>
                  <td>{student.Age}</td>
                  <td>{student.Grade}</td>
                  <td>{student.Email}</td>
                  <td>
                    <Link className="btn btn-warning btn-sm me-2" to={`/edit/${student.id}`}>Edit</Link>
                    <button className="btn btn-danger btn-sm" onClick={() => onDelete(student.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default ListStudents;