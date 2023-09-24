const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/react-login-tut")
//mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("mongodb connected login");
}) 
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const newcartSchema=new mongoose.Schema({
    email:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    phoneNo:{
        type:Number,
        required: true
    },
    message:{
        type:String,
        required: true
    }
})

const cartItemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
    status:Number
    // Other item-related fields
  });
  

const userSchema = new mongoose.Schema({
    email: String,
    totalPrice: Number,
    statusP: Number,
    address:String,
    // Other user-related fields
    carts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CartItem',
      },
    ]
  });

const custMessge= mongoose.model("custMessge",newcartSchema)
const CartItem = mongoose.model('CartItem', cartItemSchema);
const collection = mongoose.model("collection",newSchema)
const User = mongoose.model('User', userSchema);
module.exports={custMessge,collection,CartItem,User}
 


 