import { useState } from "react"

export const useSignUp = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')

    const onchangeFirstName = (e) => {
        setFirstname(e.target.value)
    }

    const onchangeLastname = (e) => {
        setLastname(e.target.value)
    }

    const onchangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onchangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onchangeNumber = (e) => {
        setNumber(e.target.value)
    }

    const onclickSingUp = (e) => {
        console.log(e)
    }
    return {
        firstname,
        onchangeFirstName,
        lastname,
        onchangeLastname,
        password,
        onchangePassword,
        email,
        onchangeEmail,
        number,
        onchangeNumber,
        onclickSingUp
    }
}