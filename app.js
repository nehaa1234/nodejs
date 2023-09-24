const express = require("express")
const {collection }= require("./mongo")
const {custMessge}= require("./mongo")
const {User }=  require("./mongo")
const {CartItem} = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check && check.password==password){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})
app.post("/contact",async(req,res)=>{
    const{name,phoneNo,email,message}=req.body

    const data1={
        email:email,
        name:name,
        phoneNo:phoneNo,
        message:message
        
    }
    await custMessge.insertMany([data1])

})
// app.post("/cart",async(req,res)=>{
//     const{email,totalPrice,cart}=req.body

//     const data1={
//         email:email,
//         totalPrice:totalPrice 
//     }
//      const rel = await User.insertMany([data1])
//     const product=[];
//     cart.map((item) =>(product.push(item)))
//     for (const itemData of product) {
//         const data2={
//             name: itemData.name,
//             price: itemData.price*itemData.quantity,
//            quantity: itemData.quantity,
//         }
//         await CartItem.insertMany([data2])
//       }
//     rel.carts= CartItem.map((item) => item._id);
// })
app.post("/cart", async (req, res) => {
    const { email, totalPrice, cart } = req.body;

    const data1 = {
        email: email,
        totalPrice: totalPrice,
        statusP:0,
        address:'NA'
    }

    try {
        const rel = await User.insertMany([data1]);

        const product = [];
        cart.map((item) => (product.push(item)))

        for (const itemData of product) {
            const data2 = {
                name: itemData.name,
                price: itemData.price * itemData.quantity,
                quantity: itemData.quantity,
                status:0
            }
            await CartItem.insertMany([data2]);
        }

        // Assuming you want to associate the cart items with the user, you can do this
        const cartItemDocs = await CartItem.find({status:0}); // Fetch all cart items (you might want to refine this query)
        const cartItemIds = cartItemDocs.map((item) => item._id);
        rel[0].carts = cartItemIds; // Assuming the first user in the result is the one you want to associate with
        await rel[0].save();
        await CartItem.updateMany({ status: 0 }, { $set: { status: 1 } });

        res.status(200).json({ message: 'Cart items and user associated successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});
app.post("/payment", async (req, res) => {
    const { email,address,totalPrice } = req.body;
  
    const conditions = {
        $and: [
            {email:email} ,
            { totalPrice: totalPrice},
         
          { statusP: 0 }, // Condition 1: status is 'pending'
          { address: 'NA' }   // Condition 2: priority is 'high'
        ]
        
      };
      const update = { $set: { statusP: 1 } };
      await User.updateMany(conditions, update)
       
      const conditions2 = {
        $and: [
            {email:email} ,
            { totalPrice: totalPrice},
         
          { statusP: 1 }, // Condition 1: status is 'pending'
          { address: 'NA' }   // Condition 2: priority is 'high'
        ]
        
      };
      const update2 = { $set: { address:address } };
      await User.updateMany(conditions2, update2)

});

app.listen(8000,()=>{
    console.log("port connected");
})


