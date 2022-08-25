import React from 'react'
import { gql, useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
const createUserMutation = gql`
  mutation CreateUser($name: String!, $password: String!, $email: String!) {
        createUser(name: $name, password: $password, email: $email) {
          data
          message
        }
      }
  `;

const Register= () => {
  const router = useRouter()
    const {register , handleSubmit, formState:{errors}, reset} = useForm()
    const [createUser,{loading, error} ] = useMutation(createUserMutation, {
        onCompleted: ()=>reset() , 
        
        
    });
    const onSubmit = async (data:any )=> {
        const { username, email, password} = data;
        const variables = { name:username, email, password};
        console.log("variables ", variables)
        try {
          toast.promise(createUser({ variables }), {
            loading: 'Creating new link..',
            success: 'Link successfully created!🎉',
            error: `Something went wrong 😥 Please try again -  ${error}`,
          });
          router.push("/auth/signin")

    
        } catch (error) {
          console.error(error)
        }
    }
    return (
        <div className="bg-no-repeat bg-cover bg-center relative" 
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80)"
        }}
        >
        <div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
      <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
        <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
            <div className="self-start hidden lg:flex flex-col  text-white">
              <img src="" className="mb-3"/>
              <h1 className="mb-3 font-bold text-5xl">Hi ? Welcome Back Aji </h1>
              <p className="pr-3">Lorem ipsum is placeholder text commonly used in the graphic, print,
                and publishing industries for previewing layouts and visual mockups</p>
            </div>
        </div>
          <div className="flex justify-center self-center  z-10">
          <form onSubmit={handleSubmit(onSubmit)} className="p-12 bg-white  mx-auto rounded-2xl w-100 ">
                <div className="mb-4">
                  <h3 className="font-semibold text-2xl text-gray-800">Register </h3>
                  <p className="text-gray-500">Please sign up to your account.</p>
                </div>
                <div className="space-y-5">
                    <div className="space-y-2">
                        <label htmlFor="username" className="text-sm font-medium text-gray-700 tracking-wide">Username</label>
                        <input  className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="text" {...register("username", {required: true})} placeholder="Username"/>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                        <input className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="email" {...register("email", {required: true})} placeholder="mail@gmail.com"/>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                            Password
                        </label>
                        <input {...register("password", {required:true})} className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="password" placeholder="Enter your password"/>
                    </div>
                  
                    <div>
                      <button type="submit" className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                        Sign up
                      </button>
                    </div>
                </div>
                <div className="pt-5 max-w-[300px] text-left text-gray-400 text-xs">
                  <span>
                    By signing up, you agree to our communications and usage terms. Already have an account? 
                    <a href="/auth/signin" rel="" title="Ajimon" className="text-green-500 hover:text-green-500 "> Sign In</a></span>
                </div> 
            </form>
          </div>
      </div>
      <Toaster />
    </div>
    );
}
//<Toaster/>
  
export default Register