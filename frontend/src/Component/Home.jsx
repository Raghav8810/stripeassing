
const Home = () => {
    
  const Moviename = "Batman"
  const MoviePrice = 1000
  const quantity = 1
  const imageUrl = "https://m.economictimes.com/thumb/msid-106423144,width-1600,height-900,resizemode-4,imgsize-40242/batman-2.jpg"

  const PaymentCheckout = async()=>{
      try{

          const res = await fetch("http://localhost:8000/checkout",{
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
                    image:imageUrl,
                    quantity:quantity,
                   
                  },
                 

                ]
            })
          });

          const data = await res.json();
          window.location.href = data.url;

      }catch(error){
             console.log(error);
      }
  }
  

  return (
      <div className="moviecom">
          <img src="https://m.economictimes.com/thumb/msid-106423144,width-1600,height-900,resizemode-4,imgsize-40242/batman-2.jpg" alt="" />
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
