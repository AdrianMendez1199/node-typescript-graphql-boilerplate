import { ApolloServer } from 'apollo-server';
import { createConnection } from 'typeorm';
import 'reflect-metadata';
import 'module-alias/register';
import { typeDefs, resolvers } from '@api/graphql';
import AuthDirective from '@api/graphql/directives/Authentication';


// Db Connection on start server
(async (): Promise<void> => {
  try {
    await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'typeorm2',
      synchronize: true,
      logging: true,
      entities: [__dirname + '/entity/*{.js,.ts}'],
      extra: { max: 10, min: 1 },
    })
  } catch (error) {
    process.exit(0);
  }
})();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives: { AuthDirective }
});


server.listen().then(({ url }): void => {
  console.log(`Server runing on ${url}`);
})