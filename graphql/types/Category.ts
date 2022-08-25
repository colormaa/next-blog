import { arg, enumType, extendType, nonNull, objectType, stringArg } from "nexus";
import { Link } from "./Link";
import bcrypt from 'bcrypt';
import {ResponseType} from './ResponseType';
import jsonwebtoken from 'jsonwebtoken';
export const Category= objectType({
    name: 'Category',
    definition(t){
        t.string('id');
        t.string('name');
        t.string('description');
    }
});
export const CreateCategory= extendType({
    type:"Mutation",
    definition(t){
        t.nonNull.field('addCategory', {
            type: ResponseType, 
            args:{
                name:nonNull(stringArg()),
                description: nonNull(stringArg()),
                
            },
            async resolve(_parent, _args, ctx){
                console.log("Category ", _args)
                //check if user exists 
                const catExist =await ctx.prisma.category.findUnique({where:{name:_args.name}});
                if(catExist){
                    throw new  Error("Category already registered.");
                    
                }else{
                const newcat = {
                    name:_args.name,
                    description:_args.name
                };
                    const user= await ctx.prisma.category.create({
                        data: newcat,
                    });
                    return{
                        data: user,
                        message:"Successfully added category"
                    }
                }
                
            }
        })
    }
})