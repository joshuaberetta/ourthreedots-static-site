import React, { useContext, useEffect } from "react";
import { Grid, Typography, Button } from "@material-ui/core";

import { LocationContext } from "../shared/context/form-context";

import PaymentForm from "./payment/index";
import Breadcrumbs from "../components/Breadcrumbs";

// import { COLOURS } from "../shared/Colours";
import { INSIGHTFUL_PAYMENT_CRUMBS } from "../shared/Crumbs";

// interface PaymentButtonProps {
//   onClick: (event: any) => void;
// }

// const PaymentButton: React.FC<PaymentButtonProps> = (props) => {
//   return (
//     <Button
//       variant="outlined"
//       style={{ border: `2px solid ${COLOURS.blue}`, width: 300 }}
//       disableRipple
//       onClick={props.onClick}
//     >
//       <Typography variant="h3">
//         <span role="img" aria-label="emoji">
//           🎉 🎉 🎉
//         </span>
//       </Typography>
//     </Button>
//   );
// };

const Payment: React.FC = () => {
  const locationContext = useContext(LocationContext);

  useEffect(() => {
    locationContext.updateLocation("/payment");
  });

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ marginTop: 70, minHeight: "40rem" }}
      spacing={5}
    >
      <Grid item style={{ position: "absolute", top: 10 }}>
        <Breadcrumbs crumbs={INSIGHTFUL_PAYMENT_CRUMBS} />
      </Grid>
      <Grid item>
        <PaymentForm />
      </Grid>
    </Grid>
  );
};

export default Payment;
