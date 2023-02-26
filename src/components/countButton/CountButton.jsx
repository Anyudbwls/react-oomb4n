import React from 'react';
import classes from './CountButton.module.css';

const MinusBtn = ({ onClick }) => {
  return (
    <button className={classes.minus} onClick={onClick}>
      -
    </button>
  );
};

const PlusBtn = ({ onClick }) => {
  return (
    <button className={classes.plus} onClick={onClick}>
      +
    </button>
  );
};

const Viewer = (props) => {
  return <span className={classes.counterInput}>{props.children}</span>;
};

export default function CountButton(props) {
  const { amount, setAmount } = props;
  const minus = () => setAmount(props.amount - 1);
  const plus = () => setAmount(props.amount + 1);

  return (
    <>
      <section className={classes.counterButton}>
        <MinusBtn onClick={minus}>-</MinusBtn>
        <Viewer onClick={amount >= 0 ? amount : setAmount(0)}>{amount}</Viewer>
        <PlusBtn onClick={plus}>+</PlusBtn>
      </section>
    </>
  );
}
