import React from 'react';
import classes from './CountZeroButton.module.css';
import buttonImg from '../../assets/type=disabled.png';

export default function CountZeroButton() {
  return (
    <section className={classes.buyButton}>
      <button>
        <img src={buttonImg} alt="구매하기" />
        구매하기
      </button>
    </section>
  );
}
