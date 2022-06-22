import React, { useState } from "react";
// MUI Components
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TextField } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// Util imports
import axios from "axios";

import CardInput from "./StripeInput";
function StripePage() {
  // State
  const [email, setEmail] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handelSubmitPay = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const res = await axios.post("http://localhost:8000/payment/stripePay", {
      email: email
    });

    const clientSecret = res.data["client_secret"];
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          email: email,
        },
      },
    });
    if (result.error) {
      console.log("error");
    } else {
      if (result.paymentIntent.status === "succeeded") {
        console.log("money sent");
      }
    }
  };

  return (
    <Card sx={{ width: 275, height: 225 }}>
      <CardContent>
        <TextField
          label="Email"
          id="outlined-email-input"
          helperText={`Email you'll recive updates and receipts on`}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        >
          email
        </TextField>
        <CardInput />
        <div>
          <Button variant="contained" color="primary" onClick={handelSubmitPay}>
            Pay
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default StripePage;
