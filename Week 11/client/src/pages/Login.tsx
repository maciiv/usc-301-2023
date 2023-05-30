import { FunctionComponent } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom";

const loginFormValidation = z.object({
    email: z.string()
        .min(1, { message: "Email is required" })
        .email({ message: "Must be a valid email" }),
    password: z.string()
        .min(1, { message: "Password is required" })
        .min(6, { message: "Password must be 6 characters minimum"}),
})

type LoginForm = z.infer<typeof loginFormValidation>

const Login: FunctionComponent = function () {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({ resolver: zodResolver(loginFormValidation)})
    const navigate = useNavigate()

    const login = async (loginForm: LoginForm) => {
        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(loginForm)
        })
        if (response.status === 200) navigate("/")
    }

    return (
        <Row className="mt-5">
            <Col lg="4" md="6" sm="12" className="mx-auto">
                <h4>Login</h4>
                <p>Login to see your stored your history</p>
                <Form onSubmit={handleSubmit(login)}>
                    <Form.Group className="mb-2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" {...register("email")} />
                        {errors.email && (
                            <p className="text-danger mt-2">
                            {errors.email?.message}
                            </p>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="password" {...register("password")} />
                        {errors.password && (
                            <p className="text-danger mt-2">
                            {errors.password?.message}
                            </p>
                        )}
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit" variant="primary">Login</Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    )
}

export default Login