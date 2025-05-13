import toast from "react-hot-toast";
import { supabase } from "./supabase"

export const registerUser = async (fullname,email, password,gender,department,role,phone) => {

    const { data: existingUser, error: fetchError } = await supabase
    .from('users') 
    .select('*')
    .eq('email', email)
    .single();
    if(existingUser){
        return {existingUser, message : "User Already Exist!"}
    }
    const {data, error}  = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/`,
      },
        
    });



    return {data,error}
  };

export const login = async (email,password) => {

    const {data,error} = await supabase.auth.signInWithPassword(
     { 
         email, 
       password
    }
    )

    return {data,error}
};

export const getSession = async () => {
    const {data , error} = await supabase.auth.getSession();

    return {data, error}
}

export const logout = async () => {
    await supabase.auth.signOut()
}

