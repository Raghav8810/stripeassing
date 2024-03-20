
const Home = () => {
    
  const Moviename = "Batman"
  const MoviePrice = 1000
  const quantity = 1

  const PaymentCheckout = async()=>{
      try{
          const res = await fetch("https://stripeassing.vercel.app",{
            method: "POST",
            headers:{
              "Content-Type":"application/json",
            },
            mode:"cors",
            body:JSON.stringify({
                items:[
                  {
                    id: 1,
                    name:Moviename,
                    price:MoviePrice,
                    quantity:quantity,

                  },

                ]
            })
          });

          const data = await res.json();
          window.location = data.url;

      }catch(error){
             console.log(error);
      }
  }
  

  return (
      <div className="moviecom">
          <img src="../public/The.jpg" alt="" />
          <div className="innertext">
              <h3 className="title">Batman</h3>
          </div>
          <div className="pricing">
             <p>₹1000</p>
             <button className="btn" onClick={PaymentCheckout} >BUY</button>
          </div>
      </div>
  )
}

export default Home
