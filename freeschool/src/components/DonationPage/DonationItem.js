import styled from "styled-components";
import Button from '@material-ui/core/Button';


function DonationItem({ data }) {
    console.log('data:', data)
    const { image, details, by, city, amount } = data;
    return (
        <Wrapper>
                <img src={image} alt="" />
            <ContentBox>
                <h3>{details}</h3>
                <h5>{amount} <span>per month</span></h5>
            </ContentBox>
        </Wrapper>
    )
}

export default DonationItem

const Wrapper = styled.div`
    max-width: 400px; 
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
&>h3{
    color: #444444;
    font-weight: 400;
    font-size: 15px;
}
&>h5{
color: #336699;
&>span{
    color: #999999;
    font-weight: 400;
}
}
`;


