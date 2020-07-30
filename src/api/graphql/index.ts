import path from 'path';
import { mergeResolvers, mergeTypeDefs, loadFilesSync } from 'graphql-tools';
import { DocumentNode } from 'graphql';

let ext = 'js';

if (process.env.NODE_ENV === 'test') {
  ext = 'ts';
}

const types: string[] = loadFilesSync(path.join(__dirname, '/**/*.graphql'));
const resolvePath:  any[] = loadFilesSync(path.join(__dirname, `/resolvers/*.${ext}`));

// Export graphql file and resolvers
export const typeDefs: DocumentNode = mergeTypeDefs(types);
export const resolvers: any = mergeResolvers(resolvePath);
