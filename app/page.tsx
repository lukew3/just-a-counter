"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { SourceTextModule } from "vm";

export default function Home() {
  return (
    <div>
      <h2>Just A Counter</h2>
      <Counters />
    </div>
  );
}

function Counters() {
  return <div className={styles.counters}>
    <Counter 
      name="Pushups"
    />
  </div>
}

function Counter(props: any) {
  const [count, setCount] = useState(0);

  const decCounter = () => {
    const decVal : number = Number(window.prompt("Decrement by:"));
    console.log(decVal);
    setCount((prevCount) => prevCount - decVal);
  }

  const incCounter = () => {
    const incVal : number = Number(window.prompt("Increment by:"));
    console.log(incVal);
    console.log(count + incVal)
    setCount((prevCount) => prevCount + incVal);
  }

  return <div>
    <h4>{props.name} (daily)</h4>
    <div className={styles.counterBody}>
      <div className={styles.counterButton} onClick={decCounter}>-n</div>
      <p className={styles.counterVal} onClick={() => setCount((prevCount) => prevCount + 1)}>{count}</p>
      <div className={styles.counterButton} onClick={incCounter}>+n</div>
    </div>
  </div>
}