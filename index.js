import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from "url";
import apirouter from './routes/api.js'




const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use('/api', apirouter)
app.use(express.static(path.join(__dirname, "public")));






// HOME
app.get("/", async (req, res) => {
res.sendFile(path.join(__dirname, "public/index.html"));
});


// connected
app.listen(3000, () => {
console.log("CONNECTED TO http://localhost:3000");
});
