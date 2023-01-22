import { FC, useContext } from 'react';

import { BiLogOut } from 'react-icons/bi';
import { TiUserAdd } from 'react-icons/ti';

import { AuthContext } from '@/setup/context-manager/authContext';
import { AuthContextType } from '@/setup/context-manager/model';

import { setToken } from '@/lib/auth'

import { LogoutMutation, useLogoutMutation } from '@/generated/graphql'

import './style.css'
import graphqlRequestClient from '@/lib/client/graphqlRequestClient';

const DropDown: FC = () => {
  const { signOut } = useContext(AuthContext) as AuthContextType;

  const { mutate } = useLogoutMutation<Error>(graphqlRequestClient, {
    onSuccess: (data: LogoutMutation) => {
      console.log(data);
      if (data) {
        setToken("");
        signOut();
      }
    },

    onError: (error: Error) => {
      console.log(error);
    },
  });
  return (
    <ul className='dropdown'>
      <li className='menu-item' >
        <p className='drop-icon'>
          <TiUserAdd />
        </p>
        <p>
          Create User
        </p>
      </li>
      <li className='menu-item' onClick={() => mutate({})}>
        <p className='drop-icon'>
          <BiLogOut />
        </p>
        <p>Logout</p>
      </li>

    </ul>
  )
}
export default DropDown;
