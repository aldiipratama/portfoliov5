'use client'

import { ReactTyped } from "react-typed"

export const Typed1 = () => {
  return <ReactTyped strings={["Frontend Developer", "Student", "Photographer"]} loop typeSpeed={100} backSpeed={50} backDelay={100} /> 
}

export const Typed2 = () => {
  return <ReactTyped strings={["❤️", "<a href='https://react.dev' class='hover:underline'>ReactJS</a>", "<a href='https://nextjs.org' class='hover:underline'>NextJS</a>"]} loop typeSpeed={100} backSpeed={100} backDelay={100} /> 
}