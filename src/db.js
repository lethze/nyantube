import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://thebiwon:4MysMbxu0Dnvc1MF@cluster0.fzlluqj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/nyantube",
);

const db = mongoose.connection;
const handleOpen = () => console.log("✅ Cennected to DB");
const handleError = (error) => console.log("DB Error", error);
db.on("error", handleError);
db.once("open", handleOpen);
