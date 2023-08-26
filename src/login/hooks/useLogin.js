import { useState } from "react"

export const useLogin = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const onchangeUser = (e) => {
        setUser(e.target.value)
    }

    const onchangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onclickLogin = (e) => {
        console.log(e)
    }
    return {
        user,
        onchangeUser,
        password,
        onchangePassword,
        onclickLogin
    }
}