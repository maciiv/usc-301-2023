import { FunctionComponent } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const signinFormValidation = z.object({
    name: z.string()
        .min(1, { message: "Name is required" })
        .max(30, { message: "Name cannot be longer than 30 characters" }),
    email: z.string()
        .min(1, { message: "Email is required" })
        .email({ message: "Must be a valid email" }),
    password: z.string()
        .min(1, { message: "Password is required" })
        .min(6, { message: "Password must be 6 characters minimum"}),
    confirmPassword: z
        .string()
        .min(1, { message: "Confirm Password is required" })
}).refine(data => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match"
})

type SigninForm = z.infer<typeof signinFormValidation>

const Signin: FunctionComponent = function () {
    const { register, handleSubmit, formState: { errors } } = useForm<SigninForm>({ resolver: zodResolver(signinFormValidation)})

    const signin = (signinForm: SigninForm) => {
        console.log(signinForm)
    }

    return (
        <Row className="mt-5">
            <Col lg="4" md="6" sm="12" className="mx-auto">
                <h4>Signin</h4>
                <p>Signin will allow you to store your history</p>
                <Form onSubmit={handleSubmit(signin)}>
                    <Form.Group className="mb-2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" {...register("name")} />
                        {errors.name && (
                            <p className="text-danger mt-2">
                            {errors.name?.message}
                            </p>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder="Email" {...register("email")} />
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
                    <Form.Group className="mb-2">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type="password" placeholder="password" {...register("confirmPassword")} />
                        {errors.confirmPassword && (
                            <p className="text-danger mt-2">
                            {errors.confirmPassword?.message}
                            </p>
                        )}
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit" variant="primary">Register</Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    )
}

export default Signin