import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Github, Instagram, Linkedin } from 'lucide-react'
import { Typed1, Typed2 } from './ui/Typed'

export const Footer = () => {
  const mediaList = [
    {
      icon: Github,
      link: "https://github.com/aldiipratama"
    },
    {
      icon: Instagram,
      link: "https://instagram.com/alx.dyy"
    },
    {
      icon: Linkedin,
      link: "https://linkedin.com/in/aldi-pratama-a21b61295"
    },
  ]

  return (
    <footer className='border-t-2 dark:border-white border-black mt-10'>
      <div className='container flex justify-between mt-5 max-[512px]:flex-col max-[512px]:gap-10'>
        <div className='max-[512px]:text-center'>
          <Link href='/'>
            <Button variant={'link'} className='p-0'>Aldipratama</Button>
            <p className="text-base max-sm:text-sm"><Typed1 /></p>
          </Link>
        </div>
        <div className='space-y-2 max-[512px]:text-center'>
          <span className='font-bold text-2xl className="text-base max-sm:text-sm"'>Media</span>
          <div className='flex gap-4 max-[512px]:justify-center'>
            {
              mediaList.map((media, i) => {
                const Icon = media.icon
                return (
                  <Link key={i} href={media.link}>
                    <Button variant={'outline'} className='px-2'>
                      <Icon />
                    </Button>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>
      <p className='text-center my-5 max-[512px]:flex max-[512px]:flex-col text-base max-sm:text-sm'>
        <span>©Copyright 2024.</span> <span>Made with <span className='font-bold dark:text-indigo-500 text-green-500'><Typed2 /></span> by Aldipratama</span>
      </p>
    </footer>
  )
}