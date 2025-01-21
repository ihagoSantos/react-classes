import style from './Card.module.css'
const Card = ({brand, km, color, image_url}) => {
    return (
        <div className= {style.card}>
            <div className={style.card_title}>
                <img src={image_url} alt="carro" />
            </div>
            <div className={style.card_body}>
                <ul>
                    <li><b>Marca:</b> {brand}</li>
                    <li><b>KM:</b> {km}</li>
                    <li><b>Cor:</b> {color}</li>
                </ul>
            </div>
        </div>
    )
}
export default Card