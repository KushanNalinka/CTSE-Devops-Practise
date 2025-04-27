import express from "express";
import cors from "cors";
import proxy from "express-http-proxy";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Proxy each path to its service's public IP + port
app.use("/s1", proxy("http://<IP_OF_it21310546>:5000"));
app.use("/s2", proxy("http://<IP_OF_it21311772>:5000"));
app.use("/s3", proxy("http://<IP_OF_it21467448>:5000"));
app.use("/s4", proxy("http://<IP_OF_it21894510>:5000"));
// Optional root health-check
app.get("/", (req, res) => res.send("Gateway is up"));


app.listen(PORT, () => {
  console.log(`Gateway is Listening to Port ${PORT}`);
});
