import Amplify, {API} from 'aws-amplify';
import awsconfig from './aws-exports';
import * as queries from "./graphql/queries";
import * as mutations from "./graphql/mutations";


const queryButton = document.getElementById('query');
queryButton.addEventListener('click', () => {
  console.log('Run Query!');
  Amplify.configure(awsconfig);
  API.graphql(
    {
      query: queries.getTodo,
      authMode: 'API_KEY',
      variables: {
        title: "hello"
      }
    }
  ).then((data) => {
    console.log(data);
  })
    .catch((e) => {
      console.log('error!');
      console.log(e)
    });
});


const mutationButton = document.getElementById('mutation');
mutationButton.addEventListener('click', () => {
  console.log('Run Mutation!');

  const content = document.getElementById('content').value;
  Amplify.configure(awsconfig);
  API.graphql(
    {
      query: mutations.createTodo,
      authMode: 'API_KEY',
      variables: {
        input: {
          title: "hello",
          content: content
        }
      }
    }
  ).then((data) => {
    console.log(data);
  })
    .catch((e) => {
      console.log('error!');
      console.log(e)
    });
});