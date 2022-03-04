import React, {useState} from "react";

export const Signup =() =>{
    const [empolyeeName, setempolyeeName] = useState('')
    const [empolyeeEmail, setempolyeeEmail] = useState('')
    const [empolyeePassword, setempolyeePassword] = useState('')
    const [empolyeeAge, setempolyeeAge] = useState('')
    
    const empolyeeNameHandler = (e) => {
        setempolyeeName(e.target.value)
    }
    const empolyeeEmailHandler = (e) => {
        setempolyeeEmail(e.target.value)
    }
    
    const empolyeePasswordHandler = (e) => {
        setempolyeePassword(e.target.value)
    }
    const empolyeeAgeHandler = (e) => {
        setempolyeeAge(e.target.value)
    }

    const submit = (e) => {
        //it will prevent action of from 
        e.preventDefault()
        alert(`Name: ${empolyeeName}\nEmail:${empolyeeEmail} \nPassword:${empolyeePassword} \nAge:${empolyeeAge}`)
    }
    
    return(
        <div>
            <h1>
                EmployeeRegistration
            </h1>
            <form onSubmit={submit}>
                <table>
                    <tr>
                        <td>Employee Name</td>
                        <td><input type="text" name="employeename" placeholder="enter emplyee Name" onChange={(e) => {empolyeeNameHandler(e)}}></input></td>
                    </tr>
                    <tr>
                    <td>Employee Email</td>
                        <td><input type="text" name="employeeemail" placeholder="enter emplyee Email" onChange={(e) => {empolyeeEmailHandler(e)}}></input></td>
                    </tr>
                    <tr>
                    <td>Employee Password</td>
                        <td><input type="text" name="employeepassword" placeholder="enter emplyee Password" onChange={(e) => {empolyeePasswordHandler(e)}}></input></td>
                    </tr>
                    <tr>
                    <td>Employee Age</td>
                        <td><input type="text" name="employeeage" placeholder="enter emplyee Age" onChange={(e) => {empolyeeAgeHandler(e)}}></input></td>
                    </tr>
                    <tr>
                        <button type=" submit ">Submit</button>
                    </tr>
                </table>
            </form>
        </div>
    )
}