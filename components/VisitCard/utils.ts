import { ICardContext } from "./interfaces/ICardContext";

const localStorageVisitCard = 'visitCards';

export const visitCardShareLink = (vCard: ICardContext) => {
    const urlParam = new URLSearchParams();
    const serializedVCard = serializeVisitCard(vCard);
    const compressedVCard = btoa(serializedVCard);

    urlParam.set('visitCard', compressedVCard);
    urlParam.set('share', '1');

    return `http://localhost:3000/?${urlParam.toString()}`;
};

export const openSharedVisitCard = (vCard: string, visitCardCtx: ICardContext) => {
    const uncompressedVCard = atob(vCard);
    const deserializedVCard = JSON.parse(uncompressedVCard);
    loadedVisitCardToContext(deserializedVCard, visitCardCtx);
};

export const serializeVisitCard = ({ isGradient, gradientAngle, data, style, fontStyles, logo }: ICardContext) => {
    return JSON.stringify({
        isGradient,
        gradientAngle,
        data,
        style,
        fontStyles,
        logo,
    });
};

export const saveVisitCard = (visitCardName: string, { isGradient, gradientAngle, data, style, fontStyles, logo }: ICardContext) => {
    const vCards = localStorage.getItem(localStorageVisitCard);
    const visitCards = vCards ? JSON.parse(vCards) : {};
    delete visitCards[visitCardName];
    visitCards[visitCardName] = {
        isGradient,
        gradientAngle,
        data,
        style,
        fontStyles,
        logo,
    };
    console.info(`Save visit card "${visitCardName}"`);
    localStorage.setItem(localStorageVisitCard, JSON.stringify(visitCards));
};

// export const savePersistentVisitCard = ({ isGradient, gradientAngle, data, style, fontStyles }: ICardContext) => {
//     const visitCard = {
//         isGradient,
//         gradientAngle,
//         data,
//         style,
//         fontStyles,
//     };
//     console.log('Autosave visit card')
//     sessionStorage.setItem(localStorageVisitCard, JSON.stringify(visitCard));
// }

const loadedVisitCardToContext = (visitCard: any, context: ICardContext) => {
    context.updateStyle(visitCard.style);
    context.updateData(visitCard.data);
    context.setFontStyles(visitCard.fontStyles);
    context.setIsGradient(visitCard.isGradient);
    context.setGradientAngle(visitCard.gradientAngle);
    context.setLogo(visitCard.logo);
};

// export const loadPersistentVisitCard = (context: ICardContext) => {
//     console.log('Try loading session visit card');
//     const vCard = localStorage.getItem(localStorageVisitCard);
//     if (vCard) {
//         console.log('Found session visit card, loading...');
//         loadedVisitCardToContext(JSON.parse(vCard), context);
//     }
// };

export const loadVisitCard = (visitCardName: string, context: ICardContext) => {
    console.log(`Try loading ${visitCardName}`);
    const vCard = localStorage.getItem(localStorageVisitCard);
    if (!vCard) {
        console.log('Unable to find specified visitCard');
        return;
    }
    const visitCards = JSON.parse(vCard);
    if (visitCards[visitCardName]) {
        const visitCard = visitCards[visitCardName];
        loadedVisitCardToContext(visitCard, context)
    }
};

export const listVisitCards = () => {
    const visitCards = localStorage.getItem(localStorageVisitCard);
    if (visitCards) {
        const visitCardsObj = JSON.parse(visitCards);
        if (visitCardsObj && typeof visitCardsObj === "object") {
            return Object.keys(visitCardsObj).filter(s => s !== 'visitCard_last');
        } 
    }
    return [];
};