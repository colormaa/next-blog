import { arg, enumType, extendType, nonNull, objectType, stringArg } from "nexus";
import { Link } from "./Link";
import bcrypt from 'bcrypt';
import {ResponseType} from './ResponseType';
import jsonwebtoken from 'jsonwebtoken';
export const User= objectType({
    name: 'User',
    definition(t){
        t.string('id');
        t.string('name');
        t.string('email');
        t.string('image');
        t.string('password');
        t.string('description');
        t.field('role', {type:Role});
        t.list.field('bookmarks', {
            type: Link,
            async resolve(_parent, _args, ctx){
                return await ctx.prisma.user
                .findUnique({
                    where:{
                        id: _parent.id
                    }
                }).bookmarks();
            }
        });
    }
});
const Role=enumType({
    name: 'Role',
    members:["USER", "ADMIN"]
});

export const CreateUser= extendType({
    type:"Mutation",
    definition(t){
        t.nonNull.field('createUser', {
            type: ResponseType, 
            args:{
                name:nonNull(stringArg()),
                email: nonNull(stringArg()),
                
                password: nonNull(stringArg()),
                
            },
            async resolve(_parent, _args, ctx){
                console.log("Register ", _args)
                //check if user exists 
                const userExist =await ctx.prisma.user.findUnique({where:{email:_args.email}});
                if(userExist){
                    throw new  Error("Email already registered.");
                    
                }else{
                const hash = await bcrypt.hash(_args.password, 10);
                const newuser = {
                     name:_args.name,
                     email:_args.email,
                     role:"USER",
                     password:hash,
                     description: ""
                    };
                    const user= await ctx.prisma.user.create({
                        data: newuser,
                    });
                    var token = jsonwebtoken.sign({ id: user.id, email: user.email, name:user.name }, process.env.SECRET);
                    return{
                        data: token,
                        message:"Successfully logged in"
                    }
                }
                
            }
        })
    }
})

export const LoginUser= extendType({
    type:"Mutation",
    definition(t){
        t.nonNull.field('loginUser', {
            type: ResponseType, 
            args:{
               
                email: nonNull(stringArg()),
                
                password: nonNull(stringArg()),
                
            },
            async resolve(_parent, _args, ctx){
                //check if user exists 
                const userExist =await ctx.prisma.user.findUnique({where:{email:_args.email}});
                if(!userExist){
                    throw new  Error("User and password not match.");
                    
                }else{
                const hash = await bcrypt.hash(_args.password, 10);
                    
                    const valid = await bcrypt.compare(_args.password, userExist.password);
                    if(!valid){
                        throw new  Error("User and password not match.");
                    }
                    var token = jsonwebtoken.sign({ id: userExist.id, email: userExist.email, name:userExist.name }, process.env.SECRET);
                    return{
                        data: token,
                        message:"Successfully logged in"
                    }
                }
                
            }
        })
    }
})

