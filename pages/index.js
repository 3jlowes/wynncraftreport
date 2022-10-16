import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Search from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {

  const [userValue, setUserValue] = useState("")

  function handleSearch(event){
    console.log(userValue)
  }

  function getInputValue(event){
    setUserValue(event.target.value)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <FormControl variant="standard">
        <Input
          onChange={getInputValue}
          placeholder="Enter a Username"
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <Search/>
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <Link href={`/profile/${userValue}`}>
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  //onClick={handleSearch}
                >
                <SendIcon/>
                </IconButton>
              </Link>
            </InputAdornment>
          }
        />
      </FormControl>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}