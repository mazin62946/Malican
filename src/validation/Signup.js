import validation from 'validate.js' 
export default function validate(fieldName, value) {
    var constraints= {
        email: {
            presence: true,
            email: {
                message: '^Please enter a valid email address'
            }
        },
        password: {
            presence: true,
            // length: {
            //     minimum: 6, message: 'Your password must be at least 6 characters'
            // }
        },
        confirmPassword: {
            presence: true, //equality: 'password'
        },
        phoneNo: {
            presence: true,
        },
    };
    var formValues= {}
    formValues[fieldName]=value 
    var formFields= {}
    formFields[fieldName]=constraints[fieldName] 
    const result=validation(formValues, formFields) 
    if (result) {
        console.log(result) 
        return result[fieldName][0]
    }
    return null
}