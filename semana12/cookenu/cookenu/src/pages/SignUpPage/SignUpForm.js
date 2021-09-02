import React from "react"
import { TextField } from "@material-ui/core"
import { Button } from "@material-ui/core"
import { InputsContainer, SignUpFormContainer } from "./styled"
import { useHistory } from "react-router-dom"
import useForm from "../../hooks/useForm"
import {signUp} from "../../services/user"

const SignUpForm = ({setRightButtonText}) => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ name: "", email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history, setRightButtonText)
    }

    return (
        <form onSubmit={onSubmitForm}>
            <SignUpFormContainer>
                <InputsContainer>
                    <TextField
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        label={"Nome"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        autoFocus
                        
                    />
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"Email"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                    />
                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}

                    >
                        Fazer Cadastro
                    </Button>
                </InputsContainer>
            </SignUpFormContainer>

        </form>

    )
}

export default SignUpForm