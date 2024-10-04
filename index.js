import express from "express";

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Homeee");
})

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
    
})