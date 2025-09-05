import { Document } from "mongoose";
export interface IActivity extends Document {
    user: string;
    action: "stake" | "claim" | "unstake";
    amount: number;
    lock_time: number;
    timestamp: number;
    transaction: string;
}
declare const _default: any;
export default _default;
//# sourceMappingURL=activity.d.ts.map