import { extendType, intArg, objectType, stringArg } from "nexus";
import { User } from "./User";

export const Link=objectType({
    name:"Link",
    definition(t){
        t.string('id');
        t.string('title');
        t.string('url');
        t.string('description');
        t.string('imageUrl');
        t.string('category');
        t.list.field('users',{
            type: User,
            async resolve(parent,_args,ctx){
                return await ctx.prisma.link.findUnique({where:{
                    id: parent.id
                }}).users()
            }
        })
    }
})
// export const LinksQuery =extendType({
//     type: "Query",
//     definition(t){
//         t.nonNull.list.field('links',{
//             type: "Link",
//             resolve(_parent, args, ctx){
//                 return ctx.prisma.link.findMany();
//             }
//         });
//     }
// });
export const LinksQuery = extendType({
    type:"Query",
    definition(t){
        t.field('links', {
            type: "Response",
            args:{
                first:intArg(),
                after: stringArg()
            },
            async resolve(_parent, args, ctx){
                let queryResult = null;
                if(args.after){
                    queryResult = await ctx.prisma.link.findMany({
                        take: args.first, 
                        skip:1, 
                        cursor:{
                            id: args.after
                        }
                    });
                }else{
                    queryResult = await ctx.prisma.link.findMany({
                        take: args.first
                    })
                }
                
                if(queryResult.length>0){
                    const lastLinkInResult = queryResult[queryResult.length-1];
                    const myCursor = lastLinkInResult.id;
                    const secondQueryResult = await ctx.prisma.link.findMany({
                        take: args.first,
                        cursor:{
                            id: myCursor
                        },
                        orderBy:{
                            id:'asc'
                        }
                    });
                    const result = {
                        pageInfo: {
                          endCursor: myCursor,
                          hasNextPage: secondQueryResult.length >= args.first,
                        },
                        edges:queryResult.map((link:any) => ({
                            cursor: link.id,
                            node: link,
                          })),
                        
                      }
            
                    return result
                   
                }
                
                return {
                    pageInfo: {
                      endCursor: null,
                      hasNextPage: false,
                    },
                    edges: [],
                  };
            }
        });
    }
});
//secondQueryResult.length >= args.first,
/* 
                        */
export const Edge = objectType({
    name: "Edge",
    definition(t){
        t.string('cursor');
        t.field('node', {
            type: Link
        });
    }
});
export const PageInfo=objectType({
    name:"PageInfo",
    definition(t){
        t.string('endCursor');
        t.boolean('hasNextPage');
    }
});
export const Response = objectType({
    name:"Response",
    definition(t) {
        t.field('pageInfo', {type: PageInfo});
        t.list.field('edges', {type:Edge})
    },
})