import { Component, OnDestroy } from '@angular/core';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import * as subscriptions from '../graphql/subscriptions';

const client = generateClient();

Amplify.configure({
  API: {
    GraphQL: {
      endpoint: 'https://hvgm6mripfhg5poxhrsxjjblaa.appsync-api.us-east-1.amazonaws.com/graphql',
      region: 'us-east-1',
      defaultAuthMode: 'apiKey',
      apiKey: 'apiKey'
    }
  }
});
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  title = 'appsync-example-ui';
  public response: any = [];
  sub = client.graphql({ query: subscriptions.onCreatePost }).subscribe({
    next: ({ data }) => {
      this.response.push(data);
      console.log(data)
    },
    error: (error) => console.warn(error)
  });

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
