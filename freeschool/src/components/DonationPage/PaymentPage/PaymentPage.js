import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { PaymentDetails } from "./PaymentDetails";
function PaymentPage() {
  const { id } = useParams();
  const [child, setChild] = useState({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    amount: 1,
    number: "",
  });

  const [color, setColor] = useState(1);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`https://schoolfree.herokuapp.com/children/${id}`)
      .then((res) => {
        setChild(res.data.children);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
          <p>Raised ₹ 25</p>
          <div className="progressCon">
            <Progress />
            <p>₹ 200</p>
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
              value={form.amount}
              onChange={handelChange}
            />
          </div>
          <p className="saveChild">
            Your donation will support <span>{Math.ceil(form.amount / 500)} Child</span>
          </p>
          <div className="form">
            <div>
              <TextField id="standard-basic" label="Name" />
            </div>
            <div>
              <TextField id="standard-basic" label="Email" />
            </div>
            <div>
              <TextField id="standard-basic" label="Phone" />
            </div>
          </div>
        </Right>
      </Container>
      <PaymentDetails />
    </Wrapper>
  );
}

export default PaymentPage;

const Progress = styled.div`
  width: ${Number((50 / 200) * 100)}%;
  background: rgb(118 255 160);
  position: absolute;
  height: 100%;
  border-radius: 18px;
`;
const Wrapper = styled.div`
  margin: 80px 0;
  & > h1 {
    color: #444444;
    text-align: center;
    font-weight: 400;
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
  .progressCon p {
    margin-top: 3px;
    position: absolute;
    top: -25px;
    right: 0px;
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
