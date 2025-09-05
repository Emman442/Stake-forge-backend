import mongoose, { Schema, Document } from "mongoose";
const activitySchema = new Schema({
    user: { type: String, required: true },
    action: { type: String, enum: ["stake", "claim", "unstake"], required: true },
    amount: { type: Number, required: true },
    lock_time: { type: Number },
    timestamp: { type: Number, required: true },
    transaction: { type: String, required: true },
}, { timestamps: true });
export default mongoose.model("Activity", activitySchema);
//# sourceMappingURL=activity.js.map