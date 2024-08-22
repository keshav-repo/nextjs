import { connectDB } from '@/app/lib/mongodb'

export async function register() {
    await connectDB();
}
