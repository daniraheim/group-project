import React, { useState } from 'react';

function StudentForm({ initialData , onSubmit})
{

    const [formData, setFormData] = useState(initialData)

    function handleChange(event)
    {
        setFormData({...formData , [event.target.name]: event.target.value})
    }
    function handleSubmit(event)
    {
        event.preventDefault();
        onSubmit(formData);
    }
    return (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="Name"
              className="form-control"
              value={formData.Name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="text"
              name="Age"
              className="form-control"
              value={formData.Age}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Grade</label>
            <input
              type="text"
              name="Grade"
              className="form-control"
              value={formData.Grade}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              name="Email"
              className="form-control"
              value={formData.Email}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      );
}

export default StudentForm;