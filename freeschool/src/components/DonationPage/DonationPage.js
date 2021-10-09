import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import styled from "styled-components"
import DonationItem from "./DonationItem"

export default function DonationPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://schoolfree.herokuapp.com/children")
            .then((res) => {
            setData(res.data.children)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);
    return (
        <Wrapper>
            {data.map((el) => (
                <DonationItem key={el._id} data={el} />
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: grid;
grid-template-columns: 31% 31% 31%;
justify-content: space-evenly;
grid-gap: 20px;
max-width: 1200px;
width: 90%;
margin: 30px auto;
`
