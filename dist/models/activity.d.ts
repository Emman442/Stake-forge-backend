import mongoose, { Document } from "mongoose";
export interface IActivity extends Document {
    user: string;
    action: "stake" | "claim" | "unstake";
    amount: number;
    lock_time?: number | null;
    timestamp: number;
    transaction: string;
    createdAt: Date;
    updatedAt: Date;
    tokenSymbol?: string;
}
declare const _default: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: string;
    action: "stake" | "claim" | "unstake";
    amount: number;
    timestamp: number;
    transaction: string;
    tokenSymbol: string;
    lock_time?: number | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: string;
    action: "stake" | "claim" | "unstake";
    amount: number;
    timestamp: number;
    transaction: string;
    tokenSymbol: string;
    lock_time?: number | null;
}, {}, {
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: string;
    action: "stake" | "claim" | "unstake";
    amount: number;
    timestamp: number;
    transaction: string;
    tokenSymbol: string;
    lock_time?: number | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: string;
    action: "stake" | "claim" | "unstake";
    amount: number;
    timestamp: number;
    transaction: string;
    tokenSymbol: string;
    lock_time?: number | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: string;
    action: "stake" | "claim" | "unstake";
    amount: number;
    timestamp: number;
    transaction: string;
    tokenSymbol: string;
    lock_time?: number | null;
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: string;
    action: "stake" | "claim" | "unstake";
    amount: number;
    timestamp: number;
    transaction: string;
    tokenSymbol: string;
    lock_time?: number | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
//# sourceMappingURL=activity.d.ts.map