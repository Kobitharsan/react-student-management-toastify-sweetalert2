import { useEffect, useState } from "react";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";
import SearchBar from "../components/SearchBar";

function Dashboard() {
  const [students, setStudents] = useState(() => {
    const data = localStorage.getItem("students");
    return data ? JSON.parse(data) : [];
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <h1>🎓 Student Management System</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <StudentForm addStudent={addStudent} />

      <StudentTable
        students={filteredStudents}
        deleteStudent={deleteStudent}
      />

    </div>
  );
}

export default Dashboard;