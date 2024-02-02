import React, {useState} from "react";

function Components() {
   const [name, setName] = useState("");
   const [quantity, setQuantity] = useState(0);
   const [comment, setComment] = useState("");
   const [payment, setPayment] = useState("");
   const [delivery, setDelivery] = useState("");
 
   function hanldeName(event) {
        setName(event.target.value);
   }

   function handleQuantity(event) {
        setQuantity(event.target.value);
   }

   function handleComment(event) {
        setComment(event.target.value);
   }

   function handlePayment(event) {
        setPayment(event.target.value);
   }

   function handleDelivery(event){
        setDelivery(event.target.value);
   }

   return (<div>
            <p>Name: {name}</p>
            <input type="text" value={name} onChange={hanldeName} placeholder="Type Name" />

            <p>Quantity:{quantity}</p>
            <input type="number" value={quantity} onChange={handleQuantity} />

            <p>Comment:{comment}</p>
            <textarea type="text" value={comment} onChange={handleComment} /> 

            <p>Select: {payment}</p>
            <select value={payment} onChange={handlePayment}>
                <option value="">Select Option</option>
                <option value="Gcash">Gcash</option>
                <option value="Debit Card">Debit Card</option>
                <option value="Credit Card">Credit Card</option>
            </select>
            <p>Delivery: {delivery}</p>
            <label>
                <input type="radio" value="Deliver" checked={delivery === "Deliver"} onChange={handleDelivery}/>
                    Deliver
            </label>

            <label>
                <input type="radio" value="Pick Up" checked={delivery === "Pick Up"} onChange={handleDelivery}/>
                    Pick Up
            </label><br/>
            <br/>
            <button>Sumbit</button>  
        </div>)
}

export default Components;