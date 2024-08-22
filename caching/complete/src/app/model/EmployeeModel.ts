import mongoose, { Schema, Model } from "mongoose";
import { Employee } from "../lib/defination";

const EmployeeSchema: Schema<Employee> = new Schema(
    {
        id: {
            type: Number,
            required: true,
        },
        address: {
            type: String,
            required: true
        },
        department: {
            type: String
        },
        name: {
            type: String,
            required: true
        }
    }
);

const EmployeeModel: Model<Employee> = mongoose.models.Employee || mongoose.model<Employee>("Employee", EmployeeSchema);

export default EmployeeModel;
