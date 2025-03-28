"use server";

import User, { IUser } from "@/lib/models/user.modal";
import { auth } from "@clerk/nextjs/server";
import { connectDB } from "../db/db";

// ✅ Fetch current user from MongoDB
export const getUser = async () => {
  await connectDB();

  const { userId } = await auth();
  if (!userId) return { error: "Not Authenticated" };

  try {
    const user = await User.findOne({ clerkId: userId });
    if (!user) return { error: "User not found" };

    return { success: true, data: user };
  } catch (error) {
    console.error("Database Error:", error);
    return { error: "Database Error" };
  }
};

// ✅ Create a new user (only if needed)
export const createUser = async (userData: IUser) => {
  await connectDB();

  try {
    const existingUser = await User.findOne({ clerkId: userData.clerkId });
    if (existingUser) return { error: "User already exists" };

    const newUser = await User.create(userData);
    return { success: true, data: newUser };
  } catch (error) {
    console.error("Database Error:", error);
    return { error: "Database Error" };
  }
};
