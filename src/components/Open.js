import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';

function Open() {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:'#323C58',
                height: '932px', // Adjust the height as needed
                gap: 30,
            }}
        >
            <FindOpen />
        </div>
    );
}

function FindOpen() {
    const [selectedButton, setSelectedButton] = useState([]);

    const buttons = ['Arts & Culture', 'Community Service', 'Environment', 'Food', 'Photography',
        'Sports', 'Enterntainment', 'Music', 'Technology', 'Health & Wellness', 'Education'];

    const handleButtonClick = (index) => {
        if (selectedButton.includes(index)) {
            setSelectedButton(selectedButton.filter((button) => button !== index));
        } else {
            setSelectedButton([...selectedButton, index]);
        }
    }

    return (
        <div>
            <StyledFindOpen>Open to roles in...</StyledFindOpen>
            <ButtonContainer>
                {buttons.map((button, index) => (
                    <Button
                        key={index}
                        variant={selectedButton.includes(index) ? 'contained' : 'outlined'}
                        onClick={() => handleButtonClick(index)}
                        style={{
                            marginRight: '0px',
                            color: '#E9E9E9',
                            borderRadius: '15px'
                        }}
                        size="small"
                    >
                        {button}
                    </Button>
                ))}
            </ButtonContainer>
            <ContinueButton variant="contained" color="primary" LinkComponent={Link} to="/open" endIcon={<ArrowRightAltIcon />}>
                Continue
            </ContinueButton>
            
        </div>
    );
}

const StyledFindOpen = styled.h1`
color: #E9E9E9;
font-family: Lexend;
font-size: 40.218px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

const ButtonContainer = styled.div`
margin-top: 20px;
margin-right: 16px;
display: flex;
flex-wrap: wrap;
gap: 8px;
margin-left: 50px
`;

const ContinueButton = styled(Button)`
margin-top: 10px;
display: inline-block;
`;

export default Open;