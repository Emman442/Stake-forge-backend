import Activity from "../models/activity.js";
// Get all activities for a user
const getActivity = async (req, res) => {
    try {
        const user = req.params.user;
        console.log("user", user);
        const activities = await Activity.find({ user }).sort({ createdAt: -1 });
        res.json(activities);
    }
    catch (error) {
        console.error("Error fetching activity:", error);
        res.status(500).json({ error: "Server Error" });
    }
};
// Add a new activity (to be called when user stakes/claims/unstakes)
const addActivity = async (req, res) => {
    try {
        const { user, action, amount, lock_time, timestamp, transaction } = req.body;
        const activity = new Activity({ user, action, amount, lock_time, timestamp, transaction });
        await activity.save();
        res.status(201).json(activity);
    }
    catch (error) {
        console.error("Error adding activity:", error);
        res.status(500).json({ error: "Server Error" });
    }
};
export { getActivity, addActivity };
//# sourceMappingURL=activityControllers.js.map