import { Schema, model, models } from "mongoose";
import { Document } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  email: string;
  username: string;
  photo: string;
  firstName?: string;
  lastName?: string;
  guideFormData?: Record<string, object | string>; // Flexible object for storing guide form data
}

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  guideFormData: {
    type: Object,
  },
});

const User = models?.User || model("User", UserSchema);

export default User;
