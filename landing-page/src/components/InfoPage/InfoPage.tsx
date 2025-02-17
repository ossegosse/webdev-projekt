import "./InfoPage.scss"
import { InfoCard } from "../InfoCard/InfoCard"

export const InfoPage = () => {
    return (
        <div className="info__page__container">
            <section className="info__section">
            <h2 className="info__page__title">Why choose Easybank?</h2>
            <p className="info__page__description">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            </section>
       < InfoCard />
       </div>
    )
}