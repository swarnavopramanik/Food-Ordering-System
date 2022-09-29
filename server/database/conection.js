import mongoose from "mongoose";

export default async () => {
    return mongoose.connect("mongodb+srv://swarnavopramanik:swarnavopramanik@cluster0.ypx6myg.mongodb.net/?retryWrites=true&w=majority")
}
