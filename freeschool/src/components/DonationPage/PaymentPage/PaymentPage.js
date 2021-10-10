import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
function PaymentPage() {
  const { id } = useParams();
  const [child, setChild] = useState({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    amount: 500,
    phone: "",
    children: id,
  });

  const [color, setColor] = useState(1);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const donor = async () => {
    let donator = await axios.post(`https://schoolfree.herokuapp.com/donator`, form);
  };

  const amountUpdate = async () => {
    let update = await axios
      .patch(`https://schoolfree.herokuapp.com/children/${id}/add/${form.amount}`)
      .then((res) => {
        getChild();
      })
      .catch((e) => {
        console.log(e, "error");
      });
  };

  const handelSubmit = () => {
    console.log(form);
    if (form.amount < 10) {
      alert("Please increase the amount");
      return;
    }

    if (form.name === "" || form.email === "" || form.phone === "") {
      alert("Please fill the form");
      return;
    }
    donor();
    amountUpdate();
  };

  const getChild = () => {
    axios
      .get(`https://schoolfree.herokuapp.com/children/${id}`)
      .then((res) => {
        setChild(res.data.children);
        console.log(res.data.children);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getChild();
  }, []);

  const Progress = styled.div`
    width: ${Number((child?.current_amt / child?.target_amt) * 100)}%;
    background: rgb(118 255 160);
    position: absolute;
    height: 100%;
    border-radius: 18px;
  `;

  const loadScript = (src) => {
    return new Promise((res) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        res(true);
      };
      script.onerror = () => {
        res(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    try {
      const res = loadScript("https://checkout.razorpay.com/v1/checkout.js");
      if (!res) {
        alert("network error");
        return;
      }
      const { data } = await axios.post(
        `https://schoolfree.herokuapp.com/payment/order/${form.amount}`
      );
      console.log("data:", data);
      if (!data) {
        alert("network error");
        return;
      }
      const { amount, id: order_id, currency } = data;
      const options = {
        key: process.env.RAZORPAY_KEY,
        amount: amount.toString(),
        currency,
        name: "Free School",
        description: "help children",
        image: "",
        order_id,
        handler: async function (response) {
          const data = {
            orderCreationId: order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_singnature,
            amount: amount.toString(),
            currency,
          };
          handelSubmit();
          const result = await axios.post("https://schoolfree.herokuapp.com/payment/success", data);
          console.log(result.data);
        },
        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone,
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Wrapper>
      <h1>{child.details}</h1>
      <Container>
        <Left>
          <img src={child.image} alt="" />
          <h4>Every monthly donation helps the education of more children like Mamta</h4>
          <p>
            Mamta lives in Aamwal Dhani village. Her father, Gopal, is a laborer and does not earn
            enough to educate his children. In the family of 6, Mamta was considered to be a burden.
            Due to limited income and poverty, Mamta's education was discontinued.
          </p>
        </Left>
        <Right>
          <h3>Make an Impact</h3>
          <p>Raised ₹ {child?.current_amt}</p>
          <div className="progressCon">
            <p>{Math.ceil((child?.current_amt / child?.target_amt) * 100) || 0} %</p>
            <Progress />
            <p>₹ {child?.target_amt}</p>
          </div>
          <div className="amount">
            <div
              onClick={() => {
                setForm({ ...form, amount: 500 });
                setColor(1);
              }}
              className={color === 1 ? "color" : "normal"}
            >
              ₹ 500
            </div>
            <div
              onClick={() => {
                setForm({ ...form, amount: 1000 });
                setColor(2);
              }}
              className={color === 2 ? "color" : "normal"}
            >
              ₹ 1000
            </div>
            <div
              onClick={() => {
                setForm({ ...form, amount: 1500 });
                setColor(3);
              }}
              className={color === 3 ? "color" : "normal"}
            >
              ₹ 1500
            </div>
            <div
              onClick={() => {
                setForm({ ...form, amount: 2000 });
                setColor(4);
              }}
              className={color === 4 ? "color" : "normal"}
            >
              ₹ 2000
            </div>

            <TextField
              id="standard-basic"
              type="number"
              label="Amount"
              name="amount"
              value={form.amount}
              onChange={handelChange}
            />
          </div>
          <p className="saveChild">
            Your donation will support <span>{Math.floor(form.amount / 500)} Child</span>
          </p>
          <div className="form">
            <div>
              <TextField
                onChange={handelChange}
                defaultValue={form.name}
                id="standard-basic"
                label="Name"
                name="name"
              />
            </div>
            <div>
              <TextField
                onChange={handelChange}
                defaultValue={form.email}
                id="standard-basic"
                label="Email"
                name="email"
              />
            </div>
            <div>
              <TextField
                onChange={handelChange}
                defaultValue={form.phone}
                id="standard-basic"
                label="Phone"
                name="phone"
              />
            </div>
          </div>
          <Button onClick={displayRazorpay} variant="contained" color="primary">
            Donate
          </Button>
        </Right>
      </Container>
    </Wrapper>
  );
}

export default PaymentPage;

const Wrapper = styled.div`
  margin: 80px 0;
  & > h1 {
    color: #444444;
    text-align: center;
    font-weight: 400;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .MuiButton-containedPrimary {
    background: #ff5050;
    width: 200px;
    height: 50px;
    font-weight: 700;
    font-size: 16px;
    margin-top: 15px;
  }
  .MuiButton-containedPrimary:hover {
    background: #cf4242;
  }
`;
const Container = styled.div`
  height: max-content;
  padding-bottom: 20px;
  width: 80%;
  margin: 50px auto;
  display: flex;
  max-width: 1250px;
  min-width: 600px;
  box-sizing: border-box;
  /* border: solid; */
`;
const Left = styled.div`
  flex: 0.6;
  /* border: solid red; */
  box-shadow: 0 5px 15px 1px rgb(0 0 0 / 20%);
  border-radius: 18px;
  border: solid 1px #ccc;
  background: #f7f7f7;
  padding: 0 20px;
  & > h4 {
    color: #444444;
    font-size: 24px;
    font-weight: 400;
  }
  & > p {
    color: #444444;
    font-size: 16px;
    font-weight: 400;
  }
  & > img {
    width: 100%;
  }
`;
const Right = styled.div`
  flex: 0.4;
  border: solid 1px #ccc;
  background: #f7f7f7;
  border-radius: 15px;
  box-shadow: 0 5px 15px 1px rgb(0 0 0 / 20%);
  text-align: center;
  height: max-content;
  box-sizing: border-box;
  padding-bottom: 30px;
  .progressCon {
    position: relative;
    height: 10px;
    width: 90%;
    background: rgb(218, 229, 235);
    box-sizing: border-box;
    border-radius: 18px;
    text-align: right;
    color: rgb(93 99 109);
    padding-right: 10px;
    font-weight: 700;
    margin: auto;
    margin-top: 30px;
  }
  .progressCon p:nth-child(3) {
    margin-top: 3px;
    position: absolute;
    top: -25px;
    right: 0px;
  }
  .progressCon p:nth-child(1) {
    margin-top: 3px;
    position: absolute;
    top: -25px;
    left: 0px;
  }
  & > div {
    margin-top: 15px;
  }
  .form > div {
    margin-top: 15px;
    width: 80%;

    .MuiFormControl-root {
      width: 80%;
    }
  }
  .amount {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 5%;
    box-sizing: border-box;
    justify-content: space-between;

    & > div {
      margin-right: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.75rem;
      min-width: 30%;
      padding: 15px;
      padding-right: 8px;
      padding-left: 5px;
      height: 40px;
      -webkit-box-flex: 1;
      flex-grow: 1;
      font-size: 16px;
      border-radius: 0.3rem;
      line-height: 1.5 !important;
      cursor: pointer;
      box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
    }

    .normal {
      background: #efefef;
    }
    .color {
      background: #ff5050;
      color: white;
    }
    .normal:hover {
      background: #ff7373;
    }
    .MuiInput-underline::before {
      border-bottom: 0px !important;
    }
    .MuiInput-underline::after {
      border-bottom: 0px !important;
    }
    .MuiFormControl-root label {
      margin-left: 20px;
    }
  }

  .saveChild {
    color: grey;

    span {
      font-weight: 700;
    }
  }
`;
