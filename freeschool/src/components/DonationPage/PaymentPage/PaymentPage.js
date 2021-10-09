import axios from "axios";
import styled from "styled-components"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { PaymentDetails } from "./PaymentDetails";
function PaymentPage() {
    const { id } = useParams();
    const [child, setChild] = useState({})

    useEffect(() => {
        axios.get(`https://schoolfree.herokuapp.com/children/${id}`)
            .then((res) => {
                setChild(res.data.children);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <Wrapper>
            <h1>{child.details}</h1>
            <Container>
                <Left>
                    <img src={child.image} alt="" />
                    <h4>Every monthly donation helps the education of more children like Mamta</h4>
                    <p>Mamta lives in Aamwal Dhani village. Her father, Gopal, is a laborer and does not earn enough to educate his children. In the family of 6, Mamta was considered to be a burden. Due to limited income and poverty, Mamta's education was discontinued.</p>
                </Left>
                <Right>
                </Right>
            </Container>
            <PaymentDetails />
        </Wrapper>
    )
}

export default PaymentPage
const Wrapper = styled.div`
margin:80px 0;
&>h1{
    color: #444444;
    text-align: center;
    font-weight: 400;
}
`;
const Container = styled.div`
width: 80%;
margin: 50px auto;
display: flex;
max-width: 1250px;
min-width: 600px;
border: solid;
`;
const Left = styled.div`
flex: 0.6;
/* border: solid red; */
padding: 0 20px;
&>h4{
    color: #444444;
    font-size: 24px;
    font-weight: 400;
}
&>p{
    color: #444444;
    font-size: 16px;
    font-weight: 400;
}
&>img{
    width: 100%;
}
`;
const Right = styled.div`
flex: 0.4;
border: solid 1px #ccc;
`;

