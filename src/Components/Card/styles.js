import { css } from 'glamor';

export default css({
    width: 275,
    height: 200,
    margin: '25px 15px',
    border: '1px solid rgb(209, 208, 208)',
    boxShadow: '2px 2px rgba(101,110,116,0.1)',
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#212121',
    transition: '1s',
    ':hover': {
        transform: 'scale(1.1)',
        cursor: 'pointer',
    },
    ' .Card__head': {
        padding: '15px 10px',
        borderBottom: '1px solid #eeeeee',
        backgroundColor: '#fafafa',
        ' h1': {
            margin: '5px auto',
            fontSize: '1.3em',
            
        },
        ' span': {
            padding: '0px 8px',
            backgroundColor: '#ff8f31',
            borderRadius: 25,
            fontSize: 12,
            color: '#fff'
        },   
    },
    ' .Card__body': {
        margin: '25px auto',
        fontWeight: 300
    },
    ' .Card__body__description': {
        fontSize: '.8em',
        marginBottom: '30px'
    },
    ' .Card__body__responsible': {
        fontWeight: 500
    },
});