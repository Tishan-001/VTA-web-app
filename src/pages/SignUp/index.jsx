import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Img, Text } from "components";
import { Heading } from "components/Heading1";
import image2 from "../../../src/assets/images/eye2.png";
import useInterSection from '../SignIn/userInterSection';
import { message } from "antd";


export default function SignUpPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [role, setRole] = React.useState('');

  const [contentRef, isContentVisible] = useInterSection({ threshold: 0.1 });

  React.useEffect(() => {
    if (location.state && location.state.role) {
      setRole(location.state.role);
    } else {
      setRole("USER");
    }
  }, [location.state]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      name: Yup.string().required('Required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch("http://localhost:5000/auth/register/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: values.email,
            name: values.name,
            password: values.password,
            role: role
          })
        });

        const data = await response.json();
        if (response.ok) {
          console.log("Signup successful", data);
          message.success("Signup successful")
          navigate('/emailConformation', { state: { email: values.email } });
        } else {
          console.error("Signup failed:", data);
          message.error("Signup failed: " + data.errorMessage)
          //alert(data.error || "An error occurred during signup.");
        }
      } catch (error) {
        console.error("Error during signup:", error);
        alert("An error occurred, please check your network and try again.");
      }
    },
  });

  return (
    <>
      <div className="flex flex-row md:flex-col justify-center bg-white-A700_01 items-center h-[700px] sm:h-[800px]  w-[70%] sm:w-[95%] md:w-[90%] md:mt-[20px] gap-[33px] left-0 bottom-0 right-0 top-0 m-auto md:gap-5 shadow-bs absolute rounded-[10px]">
        <div className="relative w-[52%] h-[700px] md:w-full md:h-[544px] md:rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-opacity-50 bg-[#854a9bcc]"></div>
          <Img
            src="images/img_signup_1.png"
            alt="signupone_one"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col items-center justify-start w-[50%] md:w-full">
          <Heading size="xl" as="h1" className="tracking-[3.00px]">
            Sign Up Now
          </Heading>

          <form onSubmit={formik.handleSubmit} className="flex flex-col items-center justify-start w-[90%] md:w-full mt-[20px] gap-5" autoComplete="off">
            <label className='relative cursor-pointer mt-[50px]'>
              <input
                type="text1"
                placeholder="Input"
                {...formik.getFieldProps('name')}
                className={`h-14 w-[600px] sm:w-[350px] md:w-[500px] px-6 !text-[20px] text-white bg-black border-black-900 border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200 ${formik.touched.name && formik.errors.name ? 'border-red-500' : ''}`}
                autoComplete="new-name"
              />
              <span className=' !text-[20px] text-white text-opacity-10 text-black-900_b2 absolute left-5 top-4 px-1 transition duration-200 input-text'>Name</span>
              {formik.touched.name && formik.errors.name ? <div className="text-red-500 text-sm">{formik.errors.name}</div> : null}
            </label>

            <label className='relative cursor-pointer mt-[20px]'>
              <input
                type="text1"
                placeholder="Input"
                {...formik.getFieldProps('email')}
                className={`h-14 w-[600px] sm:w-[350px] md:w-[500px] px-6 !text-[20px] text-white bg-black border-black-900 border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200 ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                autoComplete="new-email"
              />
              <span className=' !text-[20px] text-white text-opacity-10 text-black-900_b2 absolute left-5 top-4 px-1 transition duration-200 input-text'>Email</span>
              {formik.touched.email && formik.errors.email ? <div className="text-red-500 text-sm">{formik.errors.email}</div> : null}
            </label>

            <label className='relative cursor-pointer'>
              <input
                type={passwordVisible ? 'text1' : 'password'}
                placeholder="Input"
                {...formik.getFieldProps('password')}
                className={`h-14 w-[600px] sm:w-[350px] md:w-[500px]  px-6 !text-[20px] text-white bg-black border-black-900 border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200 ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`}
                autoComplete="new-password"
              />
              <span className=' !text-[20px] text-white text-opacity-10 text-black-900_b2 absolute left-5 top-4 px-1 transition duration-200 input-text'>Password</span>
              {formik.touched.password && formik.errors.password ? <div className="text-red-500 text-sm">{formik.errors.password}</div> : null}

              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-5 top-4 text-white"
              >
                {passwordVisible ? <Img src={image2} alt="hide" className="w-8 h-8" /> : '👁️'}
              </button>
            </label>

            <label className='relative cursor-pointer'>
              <input
                type={passwordVisible ? 'text1' : 'password'}
                placeholder="Input"
                {...formik.getFieldProps('confirmPassword')}
                className={`h-14 w-[600px] sm:w-[350px] md:w-[500px]  px-6 !text-[20px] text-white bg-black border-black-900 border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200 ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-500' : ''}`}
                autoComplete="new-password"
              />
              <span className=' !text-[20px] text-white text-opacity-10 text-black-900_b2 absolute left-5 top-4 px-1 transition duration-200 input-text'>Confirm Password</span>
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div> : null}

              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-5 top-4 text-white"
              >
                {passwordVisible ? <Img src={image2} alt="hide" className="w-8 h-8" /> : '👁️'}
              </button>
            </label>

            <a
              href="#"
              className="flex justify-center items-center w-[200px] h-[38px] pt-2.5 pb-[5px] px-3.5 bg-deep_purple-400 text-shadow-ts rounded-[5px]"
            >
              <Button type="submit" size="xl" color="bg-deep_purple-400" as="h2" className="!text-white-A700 w-[150px] hover:bg-[#854a9bcc] bg-gray-500 p-3 rounded-[5px] tracking-[3.60px]">
                Sign Up
              </Button>
            </a>
          </form>

          <div className="flex flex-row sm:flex-col justify-center items-center w-full mt-[1px] sm:gap-5">
            <div className="h-px w-[48%] bg-black-900_66" />
            <Heading as="h3" className="ml-1.5 sm:ml-0 mt-5 md:mt-[1px] mb-5 !text-black-900_66">
              or
            </Heading>
            <div className="h-px w-[48%] ml-[3px] sm:ml-0 bg-black-900_66" />
          </div>

          <Text size="lg" as="p" className="mt-[-8px] sm:mt-[-30px] md:mb-[20px] sm:mb-[20px] !text-black-900 md:!text-[15px]">
            <span className="text-black-900_66">Already have an Account ?</span>{" "}
            <span className="text-black-900">
              <a onClick={() => navigate("/login")} className="text-[#854a9bcc] cursor-pointer">
                Sign In
              </a>
            </span>
          </Text>
        </div>
      </div>

      <div className="w-[80%] h-[250px] md:hidden">
        <div className="flex flex-col items-center justify-start w-[36%] h-max left-[15%] bottom-0 top-0 p-[31px] m-auto sm:p-5 rounded-tl-[10px] rounded-bl-[10px] absolute">
          <Text size="2xl" as="p" className="!text-white-A700">
            Virtual Travel Assistant
          </Text>
          <div className="h-[5px] w-[13%] mt-3.5 bg-white-A700" />
          <div className="flex flex-col items-start justify-start w-full mt-[42px] mb-[38px] gap-[45px] md:px-5 max-w-[420px]">
            <div ref={contentRef} className={`flex flex-row sm:flex-col justify-start items-start gap-5 sm:gap-5 ${isContentVisible ? 'animate-moveLeftToRight' : ''}`}>
              <Img src="images/img_check_mark_1.png" alt="checkmarkone" className="w-[51px] md:h-auto object-cover" />
              <Text size="xl" as="p" className="!text-white-A700 ">
                Customize Your Journey with our Travel Plan.
              </Text>
            </div>
            <div ref={contentRef} className={`flex flex-row sm:flex-col justify-start items-start gap-5 sm:gap-5 ${isContentVisible ? 'animate-moveLeftToRight1' : ''}`}>
              <Img src="images/img_check_mark_1.png" alt="checkmarkone" className="w-[51px] md:h-auto object-cover" />
              <Text size="xl" as="p" className="mt-[3px] sm:mt-0 !text-white-A700">
                Stay with best view location with our hotels
              </Text>
            </div>
            <div className={`flex flex-row justify-start items-start gap-5 ${isContentVisible ? 'animate-moveLeftToRight2' : ''}`}>
              <Img src="images/img_check_mark_1.png" alt="checkmarkone" className="w-[51px] md:h-auto object-cover" />
              <Text size="xl" as="p" className="!text-white-A700">
                Get best experience with our Guiders
              </Text>
            </div>
            <div className={`flex flex-row justify-start items-start gap-5 ${isContentVisible ? 'animate-moveLeftToRight3' : ''}`}>
              <Img src="images/img_check_mark_1.png" alt="checkmarkone" className="w-[51px] md:h-auto object-cover" />
              <Text size="xl" as="p" className="mt-[3px] !text-white-A700">
                Comfortable journey with Our Vehicles
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
