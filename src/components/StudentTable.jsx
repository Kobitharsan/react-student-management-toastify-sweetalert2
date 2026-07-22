import { deleteAlert } from "../utils/alerts";
import { successToast } from "../services/notificationService";
import "./StudentTable.css";

function StudentTable({ students, deleteStudent }) {
  const handleDelete = async (id) => {
    const confirmed = await deleteAlert();

    if (confirmed) {
      deleteStudent(id);
      successToast("Student Deleted Successfully!");
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Course</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.course}</td>

            <td>
              <button
                className="delete-btn"
                onClick={() => handleDelete(student.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;