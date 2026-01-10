import express from 'express';
import router from "./routes/memoRoute.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use('/api/memories', router);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server waiting at http://localhost:${PORT}`);
    })
});
// mongodb+srv://gowritharun461_db_user:VLtD8NLi2Na7mPeg@cluster0.xphu4ut.mongodb.net/?appName=Cluster0