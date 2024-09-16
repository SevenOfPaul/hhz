import axios from "../../../request/index.js"

export default async (req, res) => {
    const text=await axios.get("/games");
    res.status(200).json({ text })
  }