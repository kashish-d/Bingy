import { useEffect, useRef, useState } from 'react';
import { Wrapper, Input } from './SearchBar.styles';
import { useNavigate } from 'react-router-dom';

function SearchBar({ setSearchTerm }) {
    const [state, setState] = useState('');
    const initial = useRef(true); //to prevent inital render from useEffect
    let navigate = useNavigate();

    const temp = () => {
        if (state) {
            navigate('/results');
        } else {
            navigate('/');
        }
        setSearchTerm(state);
    };

    /*eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }
        if (!state && window.location.pathname === '/results') {
            navigate(-1);
        }
    }, [state]);

    return (
        <Wrapper>
            <Input
                type='text'
                value={state}
                onChange={(event) => setState(event.target.value)}
                onKeyUp={(event) => {
                    if (event.key === 'Enter') {
                        temp();
                    }
                }}
                onFocus={(event) => {
                    if (!state) {
                        event.target.classList.add('focussed');
                    }
                }}
                onBlur={(event) => {
                    if (!state) {
                        event.target.classList.remove('focussed');
                    }
                }}
            ></Input>
            <span className='label'>Search</span>
            <span className='labelSm'>Search</span>
        </Wrapper>
    );
}

export default SearchBar;
