import axios from "axios";
import styled from "styled-components"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

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
                </Left>
                <Right>

                </Right>
            </Container>
        </Wrapper>
    )
}

export default PaymentPage
const Wrapper = styled.div`

&>h1{
    color: #444444;
    font-weight: 400;
}
`;
const Container = styled.div`
width: 90%;
margin: 50px auto;
display: flex;
max-width: 1250px;
min-width: 600px;
border: solid;
`;
const Left = styled.div`
flex: 0.5;
border: solid red;
padding: 20px;
&>img{
    width: 100%;
}
`;
const Right = styled.div`
flex: 0.5;
border: solid blue;
`;

