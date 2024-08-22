import { fetchEmployees } from "./lib/EmployeeLibrary";
import { Employee } from "./lib/defination";

export default async function Home() {

  const employees: Employee[] = await fetchEmployees();
  // const employees2: Employee[] = await fetchEmployees();

  return (
    <main >
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
