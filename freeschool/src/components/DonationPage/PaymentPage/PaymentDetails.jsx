import styles from "./paymentDetails.module.css";
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

const useStyles = makeStyles((theme) => ({
    container: {
        display: "grid",
        gridTemplateColumns: "auto auto",
        gridGap: "25px",
        fontWeight: "bold",
        marginBottom: '10px',
        marginTop: "20px",
    }
}));
export const PaymentDetails = ({confirmBook,handleSubmitBook}) => {
    const classes = useStyles();
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')
    const [permission, setpermission] = useState(false);
    return (
        <div className={styles.wrapper}>
            <h3>PAYMENT DETAILS</h3>

            <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
            />
            <form className={classes.container}>
                <TextField
                    label="Card Number"
                    // name='number'
                    required
                    fullWidth
                    variant="filled"
                    size="small"
                    name="CardNumber"
                    inputProps={{ maxLength: 16 }}
                    erorText="Please enter only 12 digits number"
                    onChange={e => { confirmBook(e.target);setNumber(e.target.value) }}
                    onFocus={e=>setFocus(e.target.name)}
                />
                <TextField
                    label="Name"
                    // name='name'
                    required
                    fullWidth
                    variant="filled"
                    size="small"
                    name="CardName"
                    onChange={e => { confirmBook(e.target);setName(e.target.value) }}
                    onFocus={e=>setFocus(e.target.name)}
                />
                <TextField
                    label="MM/YY"
                    // name='expiry'
                    required
                    fullWidth
                    variant="filled"
                    size="small"
                    name="CardExpiryDate"
                    onChange={e => { confirmBook(e.target);setExpiry(e.target.value) }}
                    onFocus={e=>setFocus(e.target.name)}
                />
                <TextField
                    label="CVV"
                    name='cvc'
                    required
                    fullWidth
                    inputProps={{maxLength:3}}
                    variant="filled"
                    size="small"
                    // name="CardCVC"
                    onChange={e => { confirmBook(e.target);setCvc(e.target.value) }}
                    onFocus={e=>setFocus(e.target.name)}
                />
            </form>
            <div className={styles.terms}>
                <Checkbox name="checkedB" color="primary" onClick={ ()=>setpermission(!permission)}/>
                <div>I AGREE TO THE TERMS AND CONDITIONS</div>
            </div>
            <div className={styles.confirm}>
            <button disabled={permission?"":"disabled"} onClick={()=> handleSubmitBook() }>CONFIRM BOOKING</button>
            </div>
        </div>
    )
}
