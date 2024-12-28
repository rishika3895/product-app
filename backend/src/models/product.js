import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    productId: { type: String, required: true, unique: true }, // User-defined ID
    name: { type: String, required: true },
    description: { type: String, required: true },
});


const Product = mongoose.model('Product', productSchema);

export default Product;
