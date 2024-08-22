import { fetchEmployeesById } from "@/app/lib/EmployeeLibrary";
import { Employee } from "@/app/lib/defination";

export default async function EmployeePage({
    params,
}: {
    params: { empId: string };
}) {

    console.log(`empid is ${params.empId}`)
    const employee: Employee = await fetchEmployeesById(params.empId);

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
