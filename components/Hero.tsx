import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import BorderCirlces from './BorderCirlces'

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, This is Dushyanth",
            "I am an Automation Engineer asgshjgsfhgsfhjgsfjhahjfgjasjf"
        ],
        loop: true,
        delaySpeed: 2000
    })
  return (
    <div className='h-screen flex flex-col items-center justify-center text-center overflow-hidden'>
        <BorderCirlces/>
        <h1>
          < span>{text}</span>
          <Cursor cursorColor='#F7AB0A'/>
        </h1>
    </div>
  )
}

export default Hero