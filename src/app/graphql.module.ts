import { async } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { take } from 'rxjs/operators';
import { ApolloLink } from 'apollo-link';

const authCtx = (auth: AngularFireAuth) =>
  setContext(async () => {
    const token = await auth.idToken.pipe(take(1)).toPromise();
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  });

const uri = 'http://localhost:8081/v1/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink, auth: AngularFireAuth) {
  return {
    link: ApolloLink.from([authCtx(auth), httpLink.create({ uri })]),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, AngularFireAuth],
    },
  ],
})
export class GraphQLModule {}
