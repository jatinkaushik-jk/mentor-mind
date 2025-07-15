import User from "@/lib/models/user.model";
import { auth } from "@clerk/nextjs/server";
import { connectDB } from "@/lib/db/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const user = await getUser();
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Streak fetched", streak: user.loginStreak },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching streak:", error);
    return NextResponse.json(
      { message: "Error fetching streak" },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    const user = await getUser();
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const today = new Date().setHours(0, 0, 0, 0);
    const yesterday = new Date(today - 86400000);
    const last = user.lastLogin?.setHours(0, 0, 0, 0);

    if (!last || last < yesterday) user.loginStreak.currentStreak = 1;
    else if (last === yesterday) user.loginStreak.currentStreak += 1;

    if (user.loginStreak.currentStreak > user.loginStreak.highestStreak) {
      user.loginStreak.highestStreak = user.loginStreak.currentStreak;
    }

    user.lastLogin = new Date();
    await user.save();

    return NextResponse.json({
      currentStreak: user.loginStreak.currentStreak,
      highestStreak: user.loginStreak.highestStreak,
    });

  } catch (error) {
    console.error("Error updating streak:", error);
    return NextResponse.json(
      { message: "Error updating streak" },
      { status: 500 }
    );
  }
}

async function getUser() {
  await connectDB();
  const { userId } = await auth();
  if (!userId) {
    console.log("No userId found, authentication failed.");
    return NextResponse.json({ message: "Not Authenticated" }, { status: 401 });
  }
  const user = await User.findOne({ clerkId: userId });
  if (!user) {
    throw new Error("User not found");
  }
  return user;
}
