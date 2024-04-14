const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51OxZH6SGsAgxdsk9uMgLYfGvhuGChbZvcEJxT0UQbkDxRf6tajf2GDbn37rfn0bw6TcjPcy2vXhV2U69WPsixf2b00Q1vZIEvQ');


router.post('/create-checkout-session', async (req, res) => {
    const { order_data, email } = req.body;
    console.log(order_data)
   
    
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: order_data.map(item => {
              
            return {
              price_data: {
                currency: 'INR',
                product_data: {
                  name: item.name,
                },
                unit_amount: Math.round(item.price * 100),  // converting price to cents
              },
              quantity: item.quantity,
            };
          }),
      mode: 'payment',
      success_url: 'https://food-delivery-frontend-rosy.vercel.app/success', // URL to redirect to after successful payment
      cancel_url: 'https://food-delivery-frontend-rosy.vercel.app/cancel',  // URL to redirect to if the payment is canceled
      customer_email: email, // Optionally, prefill customer email
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
