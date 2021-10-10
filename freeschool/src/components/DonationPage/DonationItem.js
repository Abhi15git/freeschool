import { useHistory } from "react-router-dom";
import styled from "styled-components";

function DonationItem({ data }) {
    const { image, details, by, city, amount,_id } = data;
    const history = useHistory();
    return (
        <Wrapper>
            <img src={image} alt="" />
            <ContentBox>
                <div>
                    <h3>{details}</h3>

                </div>
                <button onClick={()=>{history.push(`/donation/${_id}`)}}>Help Children</button>
            </ContentBox>
        </Wrapper>
    )
}

export default DonationItem

const Wrapper = styled.div`
    max-width: 400px;
    min-height: 280px;
    border: 1px solid rgba(0,0,0,0.125);
    border-radius: .3rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    overflow: hidden;
    &>img{
        width: 100%;
        border-radius: 4px 4px 0 0;
    }
`;
const ContentBox = styled.div`
text-align: left;
padding: 0 15px;

&>div{
    height: 70px;
}
&>button{
    width: 100%;
    border: none;
    color: white;
    padding: 8px 0;
    border-radius: 4px;
    background-color: #336699;
    cursor: pointer;
    margin-bottom: 20px;
    letter-spacing: 1px;
    &:hover{
        color: #336699;
        border: 1px solid #336699;
        background-color: white;
    }
}
&>div>h3{
    color: #444444;
    font-weight: 400;
    font-size: 15px;
}
&>span{
    color: #999999;
    font-weight: 400;
}
`;


