
import {Formik, Form,Field,ErrorMessage} from "formik";
import * as Yup from "yup";

const Login = () => {
    return (
        <div className="mt-40 mb-52 outline outline-gray-400 w-1/3 p-5 mx-96 shadow-lg">
            <Formik
                initialValues={{email: '' , password: ''}}
                validationSchema={Yup.object({
                    email:Yup.string().email('Invalid email address').required('Required'),
                    password:Yup.string().required('Required'),
                })}
                onSubmit = {values => {
                    console.log("Form date",values)
                }}
            >
                <Form >
                    <div className="m-5">
                        <label htmlFor="email">Email Address : </label>
                        <Field name="email" type="email" placeholder=" Email Address" className="bg-gray-200" />
                        <ErrorMessage name="email"  />
                    </div>
                    <div className="m-5">
                        <label htmlFor="password">Password : </label>
                        <Field name="password" type="password" placeholder=" Password" className="bg-gray-200 mx-8" />
                        <ErrorMessage name="password" />
                    </div>
                    <button type="submit" className="bg-blue-400 px-3 rounded-md mx-24 my-2 ">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

export default Login;