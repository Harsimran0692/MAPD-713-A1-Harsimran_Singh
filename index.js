import express from "express";

const app = express();
app.use(express.json())
const PORT = 3000;
const productData = []


app.get('/products', (req, res) => {
    res.json(productData);
})

app.post('/products', (req, res) => {
    const rawData = req.body;
    
    if(!rawData.productId || !rawData.name || !rawData.price || !rawData.quantity){
        return res.status(400).json({"error": "All fields are Required"});
    }
    res.send({
        "productId": rawData.productId, 
        "name":rawData.name, 
        "price":rawData.price,
        "quantity": rawData.quantity
    })
    productData.push(rawData);
})

app.delete('/products/:productId', (req, res) => {
    const {productId} = req.params;
    const productIndex = productData.findIndex(product => product.productId === Number(productId));    
    

    if(productIndex === -1){
        return res.status(404).json({"error": "Product Not Found"});
    }

    productData.splice(productIndex, 1);
    res.send("Product deleted successfully");

})

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
    
})