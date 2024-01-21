import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const TypeWriter = ({text}) => {
  return (
    <div className=''>
      <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }} className='font-BankGothic'>
        {text}{' '}
        <span style={{ color: '#c7febe', }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["WORLD.", "TECHNOLOGY."]}
            loop={true}
            cursor
            cursorStyle='|'
            cursorColor='#c7febe'
            typeSpeed={130}
            deleteSpeed={130}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  )
}

export default TypeWriter
