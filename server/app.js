const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const logger = require('morgan');
const mongoose = require('mongoose');

const app = express();

app.use(logger('dev'));

mongoose.connect(
    'mongodb+srv://workbitch:pAsSwOrD123@cluster0.1mmr8.mongodb.net/gql-ninja?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
mongoose.connection.once('open', () => {
    console.log('connected to db');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, ()=> {
    console.log("now listening for requests on Port 4000");
});