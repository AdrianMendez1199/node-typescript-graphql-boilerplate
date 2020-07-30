import { AuthenticationError, SchemaDirectiveVisitor } from 'apollo-server';
import { defaultFieldResolver, GraphQLField } from 'graphql';


export default class AuthDirective extends SchemaDirectiveVisitor {

  /**
   * 
   * @param {GraphQLField<CallableFunction, CallableFunction>} field 
   */
  public visitFieldDefinition(field: GraphQLField<CallableFunction, CallableFunction>):
    GraphQLField<CallableFunction, CallableFunction> | void {

    const originalResolve = field.resolve || defaultFieldResolver;

    field.resolve = async function (...args: any): Promise<CallableFunction> {
      const context = args[2];

      if (!context.request.req.headers.authorization) {
        throw new AuthenticationError('Not authenticate');
      }
      return await originalResolve.apply(this, args);
    };
  }


}
