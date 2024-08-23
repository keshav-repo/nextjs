import { fetchEmployeesById } from "@/app/lib/EmployeeLibrary";
import { Employee } from "@/app/lib/defination";
import { revalidatePath } from "next/cache";

export default async function EmployeePage({
    params,
}: {
    params: { empId: string };
}) {

    revalidatePath('/api/employee')

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
