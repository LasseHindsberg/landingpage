import './CookieConsent.scss';

export default function CookieConsent() {
return(
<div className="overlay">
    <section className="cookieConsentModal">
        <header className="cookieConsentModal__header">
            <h1>Hvad bruger vi Cookies til?</h1>
        </header>

        <article className="cookieConsentModal__content">
            <table>
                <tr>
                    <td>
                        <input type="checkbox" name="" id="cookie__necessary" disabled checked/>
                        <label className="consentToggle" 
                        htmlFor="cookie__necessary"/>
                    </td>
                    <td>
                        <p>Tillad alle nødvendige cookies. dette er cookies,
                            som er nødvendige for at denne hjemmeside virker korrekt.
                            Der foregår ingen sporing ved hjælp af denne slags cookie.</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="" id="cookie__analytics" />
                        <label className="consentToggle" 
                        htmlFor="cookie__analytics"/>
                    </td>
                    <td>
                        <p>Tillad Analytics. Vi bruger tredjepartcookies
                            fra Google til at spore og lave statistik over
                            vores besøgende. Dette gør vi for hele tiden at
                            kunne forbedre din oplevelse på vores hjemmeside.
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" name="" id="cookie__marketing" />
                        <label className="consentToggle" 
                        htmlFor="cookie__marketing"/>
                    </td>
                    <td>
                        <p>Tillad Marketing. Vi bruger tredjepartscookies fra partnere, til at 
                            holde siden oppe og køre. Og for at være en gigantisk torn i ballen :)
                        </p>
                    </td>
                </tr>
            </table>

            <div className="content__buttons">
                <button className="buttons__button">Tillad valgte</button>
                <button className="buttons__button buttons__button--highlight">Tillad alle</button>
            </div>
        </article>
    </section>
</div>
);
}