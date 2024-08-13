import { fetchEmployeesById } from "@/app/lib/EmployeeLibrary";
import { Employee } from "@/app/lib/defination";

export default async function Home() {

    const employee: Employee = await fetchEmployeesById('1');
    const employee2: Employee = await fetchEmployeesById('1');
    const employee3: Employee = await fetchEmployeesById('1');

    return (
        <main >
            <table>
                <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Address</th>
                </tr>
                <tr >
                    <td>{employee.name}</td>
                    <td>{employee.department}</td>
                    <td>{employee.address}</td>
                </tr>

            </table>
        </main>
    );
}
