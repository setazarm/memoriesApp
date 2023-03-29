import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import postRouter from "./routes/postsRouter.js"

const app = express()

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());
app.use("/posts",postRouter)
const CONNECTION_URL = "mongodb+srv://setazarm:herates66@dcicluster.y9yfftm.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() =>app.listen(PORT,()=>{console.log(`server running on port:${PORT}`)}))
.catch((err)=>console.log(err.message));
