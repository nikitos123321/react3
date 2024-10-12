import style from './Card.module.css'
import card_img from '/src/assets/Rectangle 3.png'

export function Card() {
    return (
        <>
            <div className={style.card}>
                <img src={card_img} alt="" />
                <p className={style.card_name}>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</p>
                <div className={style.card_bottom}>
                    <p className={style.card_price}>335 ₽</p>
                    <button className={style.card_btn}>Добавить в корзину</button>
                </div>
            </div>
        </>
    )
}