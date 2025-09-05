import mongoose,{Schema, Document } from "mongoose";

export interface IActivity extends Document {
  user: string;           // wallet address
  action: "stake" | "claim" | "unstake";
  amount: number;
  lock_time?: number|null;      // in seconds
  timestamp: number;      // UNIX timestamp
  transaction: string;
  createdAt: Date;
  updatedAt: Date;
}

const activitySchema = new Schema({
  user: { type: String, required: true },
  action: { type: String, enum: ["stake", "claim", "unstake"], required: true },
  amount: { type: Number, required: true },
  lock_time: { type: Number},
  timestamp: { type: Number, required: true },
  transaction: { type: String, required: true },
}, {timestamps: true});
export default mongoose.model("Activity", activitySchema);
