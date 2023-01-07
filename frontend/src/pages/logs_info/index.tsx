import { FC } from 'react'
import { useLocation } from 'react-router-dom';

const LogInfo: FC = () => {
  const { state } = useLocation();
  return (
    <div className='logsInfo' > {state.type} </div >
  )
}
export default LogInfo
