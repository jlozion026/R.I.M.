import { AccType } from '@/generated/graphql';
import { FC, createContext, useState } from 'react'

import { AuthContextType, Props } from './model'

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider: FC<Props> = ({ children }) => {
  const [auth, setAuth] = useState<boolean>(false);
  const [accType, setAccType] = useState<AccType|undefined>();

  const setAccToken = () => {
    setAuth(true);
  }

  const signOut = () => {
    setAuth(false);
  }
  return (
    <AuthContext.Provider value={{
      auth,
      accType,
      setAccType,
      setAccToken,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}
