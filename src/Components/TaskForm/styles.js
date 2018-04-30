import { css } from 'glamor';

export default css({
    width: 275,
    height: 335,
    margin: '10px 20px',
    border: '1px solid rgb(209, 208, 208)',
    boxShadow: '2px 2px rgba(101,110,116,0.1)',
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#212121',
    ' .TaskForm__head': {
        padding: '20px 10px',
        borderBottom: '1px solid #eeeeee',
        fontSize: '1.3em',
        fontWeight: 500,
        backgroundColor: '#fafafa',
    },
    ' .TaskForm__body': {
        margin: '15px auto',
    },
    ' .TaskForm__body__input': {
        width: 180,
        margin: '8px auto',
        padding: 8,
        fontSize: '.8em'
    },
    ' .TaskForm__body__select': {
        width: 200,
        margin: '8px auto',
        padding: 8,
        border: '1px solid rgb(209, 208, 208)',
        borderRadius: 0,
        fontSize: '.8em',
        overflow: 'hidden',
        appearance: 'button',
        backgroundColor: '#fff',
    },
    // ':before': {
    //     content: '',
    //     position: 'absolute',
    //     right: 5,
    //     top: 7,
    //     width: 0,
    //     height: 0,
    //     borderStyle: 'solid',
    //     borderWidth: '7px 5px 0 5px',
    //     borderColor: '#000000 transparent transparent transparent',
    //     zIndex: 5,
    //     pointerEvents: 'none',
    //     color: '#000'
    // }
    ' .TaskForm__body__button': {
        margin: '5px auto',
        padding: '10px 20px',
        borderRadius: 20,
        textTransform: 'uppercase',
        backgroundColor: '#ff8f31',
        color: '#fff',
        ':focus': {
            outline: 'none'
        }
    }
});