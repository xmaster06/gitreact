import classes from './MealsSummary.module.css';

const MealsSummary = () => {
    return <section className={classes.summary}>
        <h1>Lezzetli yemekler, Sizin için!</h1>
        <p>Favori yemeğinizi bizim restoranımızda seçin ve
            lezzetin tadına varın. Kendinizi evinizde
            hissedeceksiniz.
        </p>
        <p>
            Tüm yemeklerimizde %100 dana eti kullanılmaktadır.
            Restoranımız "Temiz Restoran" belgesine sahiptir.
            Aşçılarımız birinci sınıftır.
        </p>
    </section>
}

export default MealsSummary;