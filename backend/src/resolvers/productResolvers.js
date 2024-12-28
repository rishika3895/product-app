import Product from '../models/product.js';

const productResolvers = {
    createProduct: async ({ productId, name, description }) => {
        const newProduct = new Product({ productId, name, description });
        await newProduct.save();
        return newProduct;
    },
    updateProduct: async ({ id, name, description }) => {
        const product = await Product.findOne({ productId: id });
        if (!product) {
            throw new Error(`Product with ID ${id} not found`);
        }
        if (name) product.name = name;
        if (description) product.description = description;
        await product.save();
        return product;
    },
    product: async ({ id }) => {
        const product = await Product.findOne({ productId: id });
        if (!product) {
            throw new Error(`Product with ID ${id} not found`);
        }
        return product;
    },
    deleteProduct: async ({ id }) => {
        const product = await Product.findOneAndDelete({ productId: id });
        if (!product) {
            throw new Error(`Product with ID ${id} not found`);
        }
        return `Product with ID ${id} deleted`;
    },
    deleteAllProducts: async () => {
        await Product.deleteMany({});
        return 'All products deleted successfully';
    },
    products: async ({ limit = 10, offset = 0 }) => {
        return await Product.find().skip(offset).limit(limit);
    },
    totalCount: async () => {
        return await Product.countDocuments();
    },
};

export default productResolvers;
