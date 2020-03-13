import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import PlayersList from './PlayersLIst';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
})

afterEach(() => {
    document.body.removeChild(container);
    container = null;
})

const data = [
    {
        id: 0,
        name: "Alfred",
        country: 'Not sure',
        searches: 0
    }
]

it('renders without crashing', () => {
    render(<PlayersList players={data} />);
})

it('renders table when players are fetched', () => {
    ReactDOM.render(<PlayersList players={data} />, container);

    const row = document.querySelectorAll('tbody th');
    console.log(row[1].textContent);
    expect(row[1].textContent).toEqual('Alfred');
})