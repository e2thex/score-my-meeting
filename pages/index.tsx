import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import React, {  } from 'react';
import 'rc-slider/assets/index.css';
import copyToClipBoard from 'copy-to-clipboard';
import Scoring from '../components/Scoring';
import MeetingSelector from '../components/MeetingSelector';
import { NextPage } from 'next';
import ShareIcon from '../components/ShareIcon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home: NextPage = () => {

  const router = useRouter();
  const id = Array.isArray(router.query.id) ? router.query.id[0] : router.query.id;
  const copyUrl = () => {
    copyToClipBoard(window.location.href)
    toast.success('Copy url to clipboard',{autoClose: 2000, hideProgressBar: true})
  }
  const MeetingBody = id ? Scoring : MeetingSelector
    return (
    <div className="container max-w-2xl mx-auto">
      <Head>
        <title>Rate Your Meeting!</title>
        <meta name="description" content="generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="text-5xl text-center m-10">
          { id ? <>Rate meeting <em>{id}</em> <ShareIcon  className="inline cursor-pointer" xlinkTitle="Copy share url to clipboard" onClick={copyUrl}/></> : <>Rate your Meeting</> }
        </h1>
          <MeetingBody id={id || ''}/>
      </main>
      <ToastContainer />

      <footer className="text-center m-12"> 
        Created by <a href="http://www.e2thex.org">e2thex</a>
      </footer>
    </div>
  )
}

export default Home
