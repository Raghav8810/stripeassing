const express = require("express")
const app= express()
require("dotenv").config()
const stripe = require("stripe")(process.env.SECRET_STRIPE_KEY)
const cors = require("cors");

app.use(express.json())
app.use(cors());
//{origin:"http://localhost:5173"}
app.listen(8000)
//a

//routes
app.post("/checkout",async(req,res)=>{
    try{
        
        console.log(req.body.items);
        
        const session = await stripe.checkout.sessions.create({
            payment_method_types:["card"],
            mode:"payment",
            line_items:req.body.items.map(item=>{
                return{
                    price_data:{
                        currency:"inr",
                        product_data:{
                            name:item.name,
                            images:[item.image]
                           
                        },
                        unit_amount:(item.price)*100,


                    },
                    quantity:item.quantity
                  
                }
            }),
            
            success_url:"http://localhost:5173/success",
            cancel_url:"http://localhost:5173/cancel"

        })
        // console.log(req.body.items);
        //console.log(session.url);
        res.json({url:session.url})
       
    }catch(error){
           res.status(500).json({error:error.message})
           console.log(error);

    }
})
