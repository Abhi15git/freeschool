import styles from "./paymentDetails.module.css";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "400px",
    fontWeight: "bold",
  },
}));
export const PaymentDetails = () => {
  const [details, setDetails] = useState({});
  console.log("details:", details);
  const classes = useStyles();
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  const confirmBook = (event) => {
    const { name, value } = event;
    setDetails({ ...details, [name]: value });
  };
  return (
    <>
      <h3 className={styles.paymentDetails}>PAYMENT DETAILS</h3>
      <div className={styles.wrapper}>
        <Cards number={number} name={name} expiry={expiry} cvc={cvc} focused={focus} />
        <form className={classes.container}>
          <TextField
            label="Card Number"
            name="number"
            required
            fullWidth
            size="small"
            inputProps={{ maxLength: 16 }}
            erorText="Please enter only 12 digits number"
            onChange={(e) => {
              confirmBook(e.target);
              setNumber(e.target.value);
            }}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <TextField
            label="Name"
            name="name"
            required
            fullWidth
            size="small"
            onChange={(e) => {
              confirmBook(e.target);
              setName(e.target.value);
            }}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <TextField
            label="MM/YY"
            name="expiry"
            required
            fullWidth
            size="small"
            onChange={(e) => {
              confirmBook(e.target);
              setExpiry(e.target.value);
            }}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <TextField
            label="CVV"
            name="cvc"
            required
            fullWidth
            inputProps={{ maxLength: 3 }}
            size="small"
            onChange={(e) => {
              confirmBook(e.target);
              setCvc(e.target.value);
            }}
            onFocus={(e) => setFocus(e.target.name)}
          />
        </form>
      </div>
    </>
  );
};
