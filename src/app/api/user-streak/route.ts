// Example using date-fns-tz
import { startOfDay, differenceInDays } from "date-fns";
// import { utcToZonedTime } from 'date-fns-tz';
import User from "@/lib/models/user.model";
import { auth } from "@clerk/nextjs/server";
import { connectDB } from "@/lib/db/db";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const { userId } = await auth();
  if (!userId) {
    console.log("No userId found, authentication failed.");
    return NextResponse.json({ message: "Not Authenticated" }, { status: 401 });
  }

  try {
    const streak = await updateUserStreak(userId);
    return NextResponse.json(
      { message: "Streak updated", streak },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating streak:", error);
    return NextResponse.json(
      { message: "Error updating streak" },
      { status: 500 }
    );
  }
}

async function updateUserStreak(userId: string): Promise<number> {
  const user = await User.findOne({ clerkId: userId });
  if (!user) {
    throw new Error("User not found");
  }

  const now = new Date();
  const todayStart = startOfDay(now);
  const lastLoginStart = startOfDay(user.lastLogin);

  const daysDifference = differenceInDays(todayStart, lastLoginStart);

  if (daysDifference === 0) {
    // User already logged in today, do nothing
  } else if (daysDifference === 1) {
    // User logged in yesterday, increment streak
    user.loginStreak += 1;
  } else {
    // User missed a day, reset streak
    user.loginStreak = 1;
  }

  user.lastLogin = now;
  await user.save();
  return user.loginStreak;
}

// // Example of displaying date in user's timezone
// function displayInUserTimezone(date, timezone) {
//     const zonedDate = utcToZonedTime(date, timezone);
//     return format(zonedDate, 'yyyy-MM-dd HH:mm:ss', { timeZone: timezone });
// }
