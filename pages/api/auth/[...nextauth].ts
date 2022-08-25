import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import apolloClient from '../../../lib/apollo';
const { GraphQLClient } = require('graphql-request');
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
export default NextAuth({
    providers:[
        Credentials({
            name: "credentials",
            credentials:{
                username:{
                    label:"Email", 
                    type:"email",
                    placeholder:"email@gmail.com"
                },
                password:{
                    label:"Password",
                    type:"password"
                }
            },
            authorize: async (credentials)=>{
                //database calls 
                console.log("authorize ",credentials);
                const endpoint = 'http://localhost:3000/api/graphql';
                const client = new GraphQLClient(endpoint, {
                    credentials: 'include',
                    mode: 'cors'
                });

                const response = await client.request(`mutation loginUser($email: String!, $password: String!) {
                    loginUser(email: $email, password: $password) {
                      data
                      message
                    }
                  }`, {email: credentials?.username, name:"", password: credentials?.password})
                
                  const tokenfull = jsonwebtoken.decode(response.loginUser.data);
                  
                return{
                        id: tokenfull?.id,
                        email: tokenfull?.email,
                        name:tokenfull?.name
                    };
            }
        }),
    ],
    callbacks:{
        jwt: async({token, user})=>{
            if(user){
                token.id = user.id;
            }
            //console.log("token ", token)
            return token;
        },
        session:({session, token})=>{
            if(token){
                session.id=token.id
            }
            //console.log("session ", session)
            return session;
        }
    },
    secret:process.env.SECRET,
    jwt:{
        secret: process.env.SECRET,
        encryption: true
    }, 
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
      }
});