import React from 'react';
import classes from './ProductsCardUI.module.css';
import productImg from '../../assets/레피젠.png';
import CountButton from '../countButton/CountButton';
import CountZeroButton from '../countBuyButton/CountZeroButton';
import CountOneBuyButton from '../countBuyButton/CountOneBuyButton';

export default function ProductsCardUI() {
  const [amount, setAmount] = React.useState(0);
  const totalPrice = amount * 6370;
  const unitTotalPrice = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <>
      <article className={classes.productsCard}>
        <section>
          <img src={productImg} className={classes.viewport} alt=".." />
          <div>
            <h2> 레피젠 코로나 자가 검사 키트 </h2>
            <h2> 2개입X1박스 </h2>
          </div>
        </section>

        <section className={classes.detail}>
          <span className={classes.discountPercent}>88%</span>
          <div className={classes.price}>
            <div className={classes.discountPrice}>56,760원</div>
            <div className={classes.originalPrice}>6,370원</div>
          </div>
        </section>

        <section className={classes.deliveryPrice}>
          <div className={classes.info}>
            <span>택배배송</span>
            <span className={classes.deco}>|</span>
            <span>3,000원</span>
            <span className={classes.infoSecondary}>(주문시 결제)</span>
          </div>
          <div>
            <span>10개마다 부과</span>
          </div>
        </section>

        <CountButton amount={amount} setAmount={setAmount} />

        <section className={classes.total}>
          <div className={classes.totalInfo}>
            <span>총 상품 금액</span>
            <button>?</button>
          </div>
          <div className={classes.totalResult}>
            <span>총 수량 {amount}개 </span>
            <span className={classes.deco}> | </span>
            <div className={classes.resultSecondary}>
              <span>{unitTotalPrice}</span>
              <span>원</span>
            </div>
          </div>
        </section>
        {amount === 0 ? <CountZeroButton /> : true && <CountOneBuyButton />}
      </article>
    </>
  );
}
