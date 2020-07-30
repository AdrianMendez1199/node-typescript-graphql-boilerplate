import { ApolloServer } from 'apollo-server';
import 'module-alias/register';
import { typeDefs, resolvers } from '@api/graphql';
import AuthDirective from '@api/graphql/directives/Authentication';


const server = new ApolloServer({
  typeDefs, 
  resolvers,
  schemaDirectives: { AuthDirective }
});


server.listen().then(({ url }): void => {
  console.log(`Server runing on ${url}`);
})