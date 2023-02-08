import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { _saveQuestion, _saveQuestionAnswer } from './_DATA';
import { Loading } from './components';
import { NewPoll, Login } from './pages';
import { MemoryRouter } from 'react-router-dom';
import { sortUsers, sortPolls } from './utils';

describe('_saveQuestion', () => {
  it('will return an object that has these properties: id, author, optionOne, optionTwo, timestamp', async () => {
    const poll = {
      author: 'Youssef',
      optionOneText: 'Java',
      optionTwoText: 'Python',
    };
    const response = await _saveQuestion(poll);
    expect(response.author).toEqual('Youssef');
    expect(response.optionOne).toEqual({ text: 'Java', votes: [] });
    expect(response.optionTwo).toEqual({ text: 'Python', votes: [] });
    expect(response.id).not.toBeNull();
    expect(response.timestamp).not.toBeNull();
  });

  it('will throw an error if one of the paramters is missing', async () => {
    const poll = { optionOneText: 'Java', optionTwoText: 'Python' };
    await expect(_saveQuestion(poll)).rejects.toEqual(
      'Please provide optionOneText, optionTwoText, and author'
    );
  });
});

describe('_saveQuestionAnswer', () => {
  it('will return true if proper object is passed to it', async () => {
    const response = await _saveQuestionAnswer({
      authedUser: 'zoshikanlu',
      qid: '8xf0y6ziyjabvozdd253nd',
      answer: 'optionOne',
    });
    expect(response).toBeTruthy();
  });

  it('will throw an error if one of the paramters of the object is missing', async () => {
    const answer = {
      qid: '8xf0y6ziyjabvozdd253nd',
      answer: 'optionOne',
    };
    await expect(_saveQuestionAnswer(answer)).rejects.toEqual(
      'Please provide authedUser, qid, and answer'
    );
  });
});

describe('Loading component', () => {
  it('matches the snapshot when text is passed', () => {
    const view = render(<Loading text='Loading' />);
    expect(view).toMatchSnapshot();
  });

  it('matches the snapshot when no props are passed', () => {
    const view = render(<Loading />);
    expect(view).toMatchSnapshot();
  });
});

describe('New Poll', () => {
  it('will show an error if option one and option two are not entered', () => {
    const view = render(
      <MemoryRouter>
        <Provider store={store}>
          <NewPoll />
        </Provider>
      </MemoryRouter>
    );
    const createPollButton = view.getByTestId('new-poll-btn');
    fireEvent.click(createPollButton);
    expect(view.getByTestId('error-msg')).toBeInTheDocument();
  });
});

describe('Login', () => {
  it('will  show error message if username or password is invalid', () => {
    const view = render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );

    const loginButton = view.getByTestId('login-btn');
    const usernameInput = view.getByTestId('username-input');
    const passwordInput = view.getByTestId('password-input');

    fireEvent.change(usernameInput, { target: { value: 'username' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(loginButton);
    expect(view.queryByTestId('invalid')).toBeInTheDocument();
  });

  it('will show error message if username and password are blanks', () => {
    const view = render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );

    const loginButton = view.getByTestId('login-btn');
    fireEvent.click(loginButton);
    expect(view.queryByTestId('invalid')).toBeInTheDocument();
  });
});

describe('sortUser', () => {
  it('will return the same size array and and user mtsamis will be at index 0', () => {
    const polls = [
      {
        id: '8xf0y6ziyjabvozdd253nd',
        author: 'sarahedo',
        timestamp: 1467166872634,
        optionOne: {
          votes: ['sarahedo'],
          text: 'Build our new application with Javascript',
        },
        optionTwo: {
          votes: [],
          text: 'Build our new application with Typescript',
        },
      },
      {
        id: '6ni6ok3ym7mf1p33lnez',
        author: 'mtsamis',
        timestamp: 1468479767190,
        optionOne: {
          votes: ['sarahedo'],
          text: 'hire more frontend developers',
        },
        optionTwo: {
          votes: ['mtsamis'],
          text: 'hire more backend developers',
        },
      },
    ];
    const result = sortPolls(polls);
    expect(result.length).toEqual(2);
    expect(result[0].author).toEqual('mtsamis');
  });
});
