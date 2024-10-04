/*
Name: Harsimran Singh
Student ID: 301500536
Course: MAPD 713
*/

// importing the the express module
import express from "express";

const app = express();

// parsing incoming JSON data to a JavaScript object
app.use(express.json())
const PORT = 3000;
const productData = []

// get operation to get all products
app.get('/products', (req, res) => {
    res.json(productData);
})

// post operation to add a new product
app.post('/products', (req, res) => {
    const rawData = req.body;
    
    // checking if all the fields are entered
    if(!rawData.productId || !rawData.name || !rawData.price || !rawData.quantity){
        return res.status(400).json({"error": "All fields are Required"});
    }

    // here adding the product
    res.send({
        "productId": rawData.productId, 
        "name":rawData.name, 
        "price":rawData.price,
        "quantity": rawData.quantity
    })

    // pusing the product into the an array
    productData.push(rawData);
})

// delete operation to delete a product by productId
app.delete('/products/:productId', (req, res) => {
    const {productId} = req.params;

    // finding index value in an array
    const productIndex = productData.findIndex(product => product.productId === Number(productId));    
    

    if(productIndex === -1){
        return res.status(404).json({"error": "Product Not Found"});
    }

    // deleting the product from the array using splice method
    productData.splice(productIndex, 1);
    res.send("Product deleted successfully");

})

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
})