function validation(values)
{
    let error={}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.name==="")
    {
        error.name="Name should not be Empty"
    }
    else{
        error.name=""
    }

    if(values.email==="")
    {
        error.email="Email should not be Empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email="Email Did'nt Match"
    }
    else{
        error.email=""
    }

    if(values.password===""){
        error.password="Password should not be Empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password="Password Did'nt Match"
    }
    else{
        error.password=""
    }

    let pass=values.password.toString()
    let cpass=values.confirmpassword.toString()
    if(values.confirmpassword==="")
    {
        error.confirmpassword="Confirm The Password"
    }
    else if(pass!==cpass){
        error.confirmpassword="Password Not Matching"
    }
    else{
        error.confirmpassword=""
    }

    return error
}

export default validation