import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { AUTH_TOKEN } from '../constants';

const Header = () => {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const history = useHistory();

  const buttonOnClick = useCallback(() => {
    localStorage.removeItem(AUTH_TOKEN);
    history.push(`/`);
  }, [history]);

  return (
    <div className='flex pa1 justify-between nowrap orange'>
      <div className='flex flex-fixed black'>
        <div className='fw7 mr1'>Hacker News</div>
        <Link to='/' className='ml1 no-underline black'>
          new
        </Link>
        <div className='ml1'>|</div>
        <Link to='/search' className='ml1 no-underline black'>
          search
        </Link>
        {authToken && (
          <div className='flex'>
            <div className='ml1'>|</div>
            <Link to='/create' className='ml1 no-underline black'>
              submit
            </Link>
          </div>
        )}
      </div>
      <div className='flex flex-fixed'>
        {authToken ? (
          <div className='ml1 pointer black' onClick={buttonOnClick}>
            logout
          </div>
        ) : (
          <Link to='/login' className='ml1 no-underline black'>
            login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
