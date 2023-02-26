import React from 'react';
import classes from './CountOneBuyButton.module.css';

export default function CountOneBuyButton() {
  return (
    <section className={classes.buyButton}>
      <button>
        <img src="../../assets/type=normal.png" alt="구매하기" />
        구매하기
      </button>
    </section>
  );
}
