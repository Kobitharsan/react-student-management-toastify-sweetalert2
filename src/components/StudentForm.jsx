import { useState } from "react";
import "./StudentForm.css";
import {
  successToast,
  warningToast,
} from "../services/notificationService";

function StudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !course) {
      warningToast("Please Fill All Required Fields");
      return;
    }

    addStudent({
      id: Date.now(),
      name,
      course,
    });

    successToast("Student Added Successfully!");

    setName("");
    setCourse("");
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;