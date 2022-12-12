import { FC, createContext, useState } from 'react'
import { AuthContextType, Props } from './model'

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider: FC<Props> = ({ children }) => {
  const [auth, setAuth] = useState<boolean>(false);

  const setAccToken = () => {
    setAuth(true);
  }
  return (
    <AuthContext.Provider value={{ auth, setAccToken }}>
      {children}
    </AuthContext.Provider>
  )
}
