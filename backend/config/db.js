import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("DB Connected"))
    .catch((error) => console.log("DB Connection Error:", error));
};
