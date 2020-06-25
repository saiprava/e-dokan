import React,{ Component } from 'react';
import Input from '../SignIn/Input/Input';
import './Login.css';
import { auth,signInWithGoogle } from '../../Firebase/Firebase.utils';
import google from '../../assets/images/google-icon.svg';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            OrderForm : {
                email:{
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'E-mail'
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
                        placeholder: 'Enter your password!'
                    },
                    value:'',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                }
            }
        }
    }

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

    inputChangedHandler =  (event , inputIdentifier)=>{
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
    submitHandler = async (event) =>{
        event.preventDefault();
        let formData = [];
        for(let formElementIdentifier in this.state.OrderForm){
            formData[formElementIdentifier]=this.state.OrderForm[formElementIdentifier];
        }
        const email = formData.email.value;
        const password = formData.password.value;

        try {
            await auth.signInWithEmailAndPassword(email,password);
        }catch(error){
            console.error(error);
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
            <button type="button" onClick={signInWithGoogle}>{' '}<img src={google} className="Google" alt=" "></img>{' '}SIGN-IN WITH GOOGLE!{' '}</button>
        </form>
        );
        return(
            <div className="Login">
            <div className="FormD">
                <h1>Login here to shop ahead!!!</h1>
                {form}
            </div>
            </div>
        );
    }
}

export default Login;