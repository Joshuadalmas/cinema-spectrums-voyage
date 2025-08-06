//PayPalButton.tsx
import React, { useEffect, useRef } from "react";

type PayPalButtonProps = {
  amount: number;
  onSuccess: (details: any) => void;
};

const PayPalButton: React.FC<PayPalButtonProps> = ({ amount, onSuccess }) => {
  const paypalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ((window as any).paypal && paypalRef.current) {
      (window as any).paypal.Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount.toFixed(2),
                },
              },
            ],
          });
        },
        onApprove: async (data: any, actions: any) => {
          const details = await actions.order.capture();
          onSuccess(details);
        },
        onError: (err: any) => {
          console.error("PayPal Checkout onError:", err);
        },
      }).render(paypalRef.current);
    }
  }, [amount, onSuccess]);

  return <div ref={paypalRef} />;
};

export default PayPalButton;
