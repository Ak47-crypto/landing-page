import mongoose, { Schema, Document } from 'mongoose';



export interface User extends Document {
  
  email: string;
  password: string;
  
}

// Updated User schema
const UserSchema: Schema<User> = new mongoose.Schema({

  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/.+\@.+\..+/, 'Please use a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
 
  
  
  
 
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>('User', UserSchema);

export default UserModel;