'use client';
import { useFormStatus } from "react-dom"

export const SigninButton = () => {
  const {pending} = useFormStatus();
  
      return (
          <button
          type="submit"
          disabled={pending}
          className="w-full text-white bg-blue-700 font-medium rounded-lg px-5 py-2 text-center uppercase hover:bg-blue-800"
        >
          {pending? "Loading..." : "Signin"}
        </button>
      )
  }

export const SignupButton = () => {
const {pending} = useFormStatus();

    return (
        <button
        type="submit"
        disabled={pending}
        className="w-full text-white bg-blue-700 font-medium rounded-lg px-5 py-2 text-center uppercase hover:bg-blue-800"
      >
        {pending? "Loading..." : "Signup"}
      </button>
    )
}