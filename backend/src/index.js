import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import mongoose from 'mongoose';
import productSchema from './schema/productSchema.js';
import productResolvers from './resolvers/productResolvers.js';
import cors from 'cors';

const MONGO_URI = 'mongodb://mongo:27017/graphql_demo';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const app = express();
app.use(cors());


app.use('/graphql', graphqlHTTP({
    schema: productSchema,
    rootValue: productResolvers,
    graphiql: true,
}));

app.listen(4000, () => console.log('Server running on http://localhost:4000/graphql'));
