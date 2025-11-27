import React, { useContext } from 'react'
import { Themecontext } from './Themecontext'

const Themecomponent = () => {
    const{theme,toggleTheme}=useContext(Themecontext);
  return (
    <div className={theme}>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Change theme</button>
    </div>
  )
}

export default Themecomponent

