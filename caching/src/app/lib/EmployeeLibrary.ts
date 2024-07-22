import { Employee } from "./defination";
import { EmployeeModel } from "../model";
import { cache } from 'react'

export const fetchEmployees = async () => {
    try {
        const employees: Employee[] | null = await EmployeeModel.find({});
        console.log(`data fetched from db `);
        return employees;
    } catch (err) {
        console.error(`error fetching article`);
        throw err;
    }
}

// export const fetchEmployees = cache(async () => {
//     try {
//         console.log(`data fetched from db`);
//         const employees: Employee[] | null = await EmployeeModel.find({});
//         return employees;
//     } catch (err) {
//         console.error(`error fetching article`);
//         throw err;
//     }
// })

export const fetchEmployeesById = cache(async (id: string): Promise<Employee> => {
    try {
        const res = await fetch(`http://localhost:3000/api/employee?empId=${id}`);
        const employees: Employee = await res.json();
        console.log(`calling api to fetch data`);
        return employees;
    } catch (err) {
        console.error(`error fetching article`);
        throw err;
    }
})

