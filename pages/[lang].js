import fetch from 'isomorphic-unfetch';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const Index = (props) => {
    const { translation, url } = props;
    const { lang } = url.query;

    i18n
        .use(initReactI18next) // passes i18n down to react-i18next
        .init({
            resources: {
                [lang]: {
                    translation
                }
            },
            lng: lang,
            fallbackLng: "en",

            interpolation: {
                escapeValue: false
            }
        });


    const { t } = useTranslation();

    return <div>{t('hello')}</div>
}

Index.getInitialProps = (ctx) => {
    const { lang } = ctx.query;

    return fetch(`http://localhost:3000/api/lang/${lang}`).then((response) => response.json()).then((translation) => {
        return { translation };
    });

}

export default Index;