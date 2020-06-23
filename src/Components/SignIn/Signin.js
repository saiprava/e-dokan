import React , { Component }from 'react';
import Input from './Input/Input';
import './Signin.css';

class Signin extends Component{
    constructor(props){
        super(props);
        this.state = {
            OrderForm:{
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeHolder: 'Your Name'
                    },
                    value:'',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                email:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeHolder: 'E-mail'
                    },
                    value: '',
                    validation: {
                        required: true,
                        pattern: true
                    },
                    valid: false,
                    touched: false
                },
                password:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'password',
                        placeHolder: 'Create your password!'
                    },
                    value:'',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                confPassword:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'password',
                        placeHolder: 'Confirm your password!'
                    },
                    value:'',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                }
            },
            formIsValid : false
        }
    }
    /*isValidMail = () => {
        const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (this.state.OrderForm.email.length === 0) return true;
        return this.state.OrderForm.email.match(pattern);
      };*/

checkValidity(value,rules){
    let isValid = true;
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(rules.required){
        isValid = value.trim()!==' '&&isValid;
    }
    
    if(rules.pattern){
        isValid = value.match(pattern)&&isValid;
    }
    
    return isValid;
}

inputChangedHandler = (event , inputIdentifier)=>{
    const updatedOrderForm ={
        ...this.state.OrderForm
    };
    const updatedFormElement = {
        ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value,updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier]=updatedFormElement;

    let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }


    this.setState({OrderForm:updatedOrderForm,formIsValid: formIsValid});
}
submitHandler = (event) =>{
    event.preventDefault();
    let formData = [];
    for(let formElementIdentifier in this.state.OrderForm){
        formData[formElementIdentifier]=this.state.OrderForm[formElementIdentifier];
    }
    console.log(formData);
}

render(){
    const formElementArray = [];
    for(let key in this.state.OrderForm){
        formElementArray.push({
            id: key,
            config: this.state.OrderForm[key]
        });
    }
    let form = (
        <form onSubmit={this.submitHandler}>
            {formElementArray.map(formElement=>(
                <Input 
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
               
                invalid={!formElement.config.valid}
                touched={formElement.config.touched}
                changed={(event)=> this.inputChangedHandler(event,formElement.id)}/>
            ))}
            <button type="submit" disabled={!this.state.formIsValid}>SUBMIT</button>
        </form>
    );
    return(
        <div className="FormD">
            <h1>Do not have an account??Sign-in now!!!</h1>
            {form}
        </div>
    );
}
}

export default Signin;