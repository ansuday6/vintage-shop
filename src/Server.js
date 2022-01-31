
const mongoose = require( 'mongoose' )

//  에러방지 옵션설정
mongoose.connect( 'mongodb+srv://ansu:<password>@cluster0.e9jnj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
} ) .then(() => console.log( "MongoDB Connected success !!" ))
    .catch(err => console.log( err ))
