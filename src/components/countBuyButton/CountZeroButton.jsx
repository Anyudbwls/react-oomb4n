import React from 'react';
import classes from './CountZeroButton.module.css';

export default function CountZeroButton() {
  return (
    <section className={classes.buyButton}>
      <button>
        <img src="../../assets/type=disabled.png" alt="구매하기" />
        구매하기
      </button>
    </section>
  );
}
