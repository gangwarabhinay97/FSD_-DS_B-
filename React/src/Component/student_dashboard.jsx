function StudentTable() {

  const students = [
    {
      id: 1,
      name: "Abhinay Gangwar",
      rollNo: "101",
      course: "B.Tech",
      branch: "CSE"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      rollNo: "102",
      course: "B.Tech",
      branch: "CSE"
    },
    {
      id: 3,
      name: "Aman Sharma",
      rollNo: "103",
      course: "B.Tech",
      branch: "Data Science"
    },
    {
      id: 4,
      name: "Priya Singh",
      rollNo: "104",
      course: "B.Tech",
      branch: "IT"
    }
  ];

  return (
    <div>
      <h2>Student Table</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Course</th>
            <th>Branch</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.rollNo}</td>
              <td>{student.course}</td>
              <td>{student.branch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
}

export default StudentTable;