import mongoose from "mongoose";

export async function connectDB() {
  try {
    mongoose.connect(process.env.MONGODB_URI!); // Exclamation restricts typesafety and ensure varaible's valid presence
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB Connected");
    });
    connection.on("error", (err) => {
      console.log("Error in connecting MongoDB ", err);
      process.exit(0);
    });
  } catch (error) {
    console.log("Error Ocuured in connecting Database ", error);
  }
}
