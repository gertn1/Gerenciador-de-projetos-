// import styles from './Input.module.css'


// function Input({type, text , name , placeholder , handleOnChange , value }){
//     return (
//         <div className={styles.form_control}>
//             <label htmlFor={name}>{text}:</label>
//             <input 
//             type ={type}
//             name={name}
//             id={name} 
//             placeholder={placeholder}
//             onChange= {handleOnChange}
//             value ={value}
//             /> 
//         </div>


//     )
// }

// export default Input 

import styles from './Input.module.css';

function Input({ type, text, name, placeholder, handleOnChange, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={`input_${name}`}>{text}:</label>
            <input 
                type={type}
                name={name}
                id={`input_${name}`}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
            /> 
        </div>
    );
}

export default Input;
