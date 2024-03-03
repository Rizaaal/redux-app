import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
//importiamo le actions
import { increment, decrement, selectCount, set } from "@/slices/counterSlice";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Redux App</title>
        <meta name="description" content="Redux App for an assignment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>Counter</h1>
        <p>The state of the counter is managed with Redux.</p>
        <section style={counter}>

          <button 
          onClick={() => dispatch(increment(Number(inputRef?.current?.value)))}
          style={{padding: '1em'}}
          >
            +
          </button>

          <p>{count}</p>

          <button 
          onClick={() => dispatch(decrement(Number(inputRef?.current?.value)))}
          style={{padding: '1em'}}
          >
            -
          </button>

        </section>
        <input type="text" ref={inputRef} />
      </main>
    </>
  );
}
