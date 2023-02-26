import React from 'react';
import classes from './CountOneBuyButton.module.css';
import buttonImg from '../../assets/type=normal.png';

export default function CountOneBuyButton() {
  return (
    <section className={classes.buyButton}>
      <button>
        <img src={buttonImg} alt="구매하기" />
        구매하기
      </button>
    </section>
  );
}
