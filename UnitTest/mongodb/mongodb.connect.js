const moongoose = require('mongoose');

async function connect() {
    try {
        await moongoose.connect('mongodb+srv://Supertest:123@cluster0-ru2sv.mongodb.net/test?retryWrites=true&w=majority',
            { useNewUrlParser: true });
        console.log("success");
    } catch (e) {
        console.error(e);
        console.error("error connecting to mongodb");
    }
}

module.exports = { connect };
//mongodb+srv://Supertest:<password>@cluster0-ru2sv.mongodb.net/<dbname>?retryWrites=true&w=majority