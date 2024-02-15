
// const mongoose=require('mongoose');
// const mongoUri='mongodb+srv://swamipatil286:Swami@123@cluster0.zvca89b.mongodb.net/Project0?retryWrites=true&w=majority';

// const mongDb=async()=>{
//     await mongoose.connect(mongoUri,{useNewUrlParser:true},{ useUnifiedTopology: true 
//     },).then(()=>{
//         console.log('connected succesfully');
        

//     })
//     .catch((err)=>{console.log(err)})

    
   
   

// }
// module.exports=mongDb;
const mongoose = require('mongoose');
const mongoUri = 'mongodb+srv://chavananushka782:mern123@cluster0.mpurmrx.mongodb.net/goFoodMern?retryWrites=true&w=majority';

const mongDb = async () => {
    await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('connected successfully');
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = mongDb;
