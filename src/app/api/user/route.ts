import { connectDB } from "@/lib/db/db";
import User from "@/lib/models/user.modal";
import { auth } from "@clerk/nextjs/server";
import { NextResponse, NextRequest } from "next/server";

// export async function GET() {
//   await connectDB();
//   const user = await currentUser(); // Fetch current user data

//   const { userId } = await auth();
//   if (!userId) {
//     console.log("No userId found, authentication failed.");
//     return NextResponse.json({ message: "Not Authenticated" }, { status: 401 });
//   }

//   try {
//     const existingUser = await User.findOne({ clerkId: userId });

//     if (!existingUser) {
//       console.log("User not found in database.");
//       return NextResponse.json({ message: "User not found" }, { status: 404 });
//     }

//     console.log("Fetched User from DB:", existingUser);

//     return NextResponse.json(
//       {
//         message: "Authenticated",
//         data: {
//           clerkId: userId,
//           username: user?.username || (user?.firstName && user?.lastName ? `${user.firstName} ${user.lastName}` : user?.firstName || "Guest"), // Fallback to firstName or "Guest"
//           email: user?.emailAddresses?.[0]?.emailAddress || "N/A", // Fallback to "N/A"
//           photo: user?.imageUrl || "N/A", // Fallback to "N/A"
//           guideFormData: existingUser.guideFormData && Object.keys(existingUser.guideFormData).length > 0
//             ? existingUser.guideFormData
//             : "No guideFormData found" // Ensuring it doesn't return an empty object
//         }
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Database Error:", error);
//     return NextResponse.json({ message: "Database Error" }, { status: 500 });
//   }
// };

export async function POST(req: NextRequest) {
  await connectDB();

  const { userId } = await auth();
  if (!userId) {
    console.log("No userId found, authentication failed.");
    return NextResponse.json({ message: "Not Authenticated" }, { status: 401 });
  }

  try {
    const { guideFormData } = await req.json();
    console.log("Received guideFormData:", guideFormData); // Debugging

    if (!guideFormData || Object.keys(guideFormData).length === 0) {
      return NextResponse.json(
        { message: "No guideFormData provided" },
        { status: 400 }
      );
    }

    // Save the data to MongoDB
    const user = await User.findOneAndUpdate(
      { clerkId: userId },
      { $set: { guideFormData } },
      { new: true, upsert: true }
    );

    console.log("Updated user data:", user);

    return NextResponse.json(
      { message: "Guide data saved", data: user },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ message: "Database Error" }, { status: 500 });
  }
}
