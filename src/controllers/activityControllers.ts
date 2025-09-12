import type { Request } from "express";
import type { Response } from "express";
import Activity from "../models/activity.js";
import type { IActivity } from "../models/activity.js";


const getActivity = async (req: Request, res: Response) => {
    try {
        const { user } = req.params;
        const { tokenSymbol } = req.query;

        // Build the filter dynamically
        const query: any = { user };
        if (tokenSymbol) {
            query.tokenSymbol = tokenSymbol;
        }
        const activities: IActivity[] = await Activity.find(query).sort({ createdAt: -1 }).limit(10).exec();
        res.json(activities);
    } catch (error) {
        console.error("Error fetching activity:", error);
        res.status(500).json({ error: "Server Error" });
    }
};


// Add a new activity (to be called when user stakes/claims/unstakes)
const addActivity = async (req: Request, res: Response) => {
    try {
        const { user, action, amount, lock_time, timestamp, transaction, tokenSymbol } = req.body;
        const activity = new Activity({ user, action, amount, lock_time, timestamp, transaction, tokenSymbol });
        await activity.save();
        res.status(201).json(activity);
    } catch (error) {
        console.error("Error adding activity:", error);
        res.status(500).json({ error: "Server Error" });
    }
};


export { getActivity, addActivity };