import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { ApolloModule } from 'apollo-angular';
// import { HttpLinkModule } from 'apollo-angular-link-http';

import { AppComponent } from './app.component';
import { EmployeeCountComponent } from './employeeCount.component';
// import { GraphQLModule } from './graphql.module';
@NgModule({
  declarations: [
    AppComponent,EmployeeCountComponent
  ],
  imports: [
    BrowserModule,FormsModule
    // ,
    // HttpClientModule, // provides HttpClient for HttpLink
    // ApolloModule,
    // HttpLinkModule,GraphQLModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 //  constructor(
 //   apollo: Apollo,
 //   httpLink: HttpLink
 // ) {
 //   apollo.create({
 //     link: httpLink.create({ uri: 'http://0.0.0.0:3000/employees/graphql' }),
 //     cache: new InMemoryCache()
 //   });
 // }

 }
