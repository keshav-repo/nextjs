

import { Employee } from '@/app/lib/defination';
import { connectDB } from '@/app/lib/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { EmployeeModel } from '@/app/model';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectDB();
    if (req.method === 'POST') {
        try {
            const { id, name, address, department }: Employee = req.body;

            const employee = new EmployeeModel({
                id: id,
                name: name,
                address: address,
                department: department
            });

            await employee.save();
            res.status(201).json({ message: 'Employee Created', data: employee });
        } catch (error) {
            console.error('Error creating post:', error);
            console.log('corresponding request body');
            console.error(req.body);
            res.status(400).json({ message: 'Failed to create post' });
        }
    }
    else if (req.method === 'GET') {
        try {
            const empId = req.query.empId;
            const employees = await EmployeeModel.findOne({ id: empId });
            res.status(200).json(employees);
        } catch (error) {
            console.error('Error fetching posts:', error);
            res.status(500).json({ message: 'Failed to fetch posts' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
