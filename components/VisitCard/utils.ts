import { ICardContext } from './interfaces/ICardContext';

const localStorageVisitCard = 'visitCards';

export const visitCardShareLink = (
  vCard: ICardContext,
  basePath: string = 'null'
) => {
  const urlParam = new URLSearchParams();
  const serializedVCard = serializeVisitCard(vCard);
  const compressedVCard = btoa(serializedVCard);

  urlParam.set('visitCard', compressedVCard);
  urlParam.set('share', '1');

  return `${basePath}/?${urlParam.toString()}`;
};

export const openSharedVisitCard = (
  vCard: string,
  visitCardCtx: ICardContext
) => {
  try {
    const uncompressedVCard = atob(vCard);
    const deserializedVCard = JSON.parse(uncompressedVCard);
    loadedVisitCardToContext(deserializedVCard, visitCardCtx);
  } catch (e) {
    return 'Cannot open shared visit card. Please check the link.';
  }
};

export const serializeVisitCard = ({
  isGradient,
  gradientAngle,
  data,
  style,
  fontStyles,
  logo,
}: ICardContext) => {
  return JSON.stringify({
    isGradient,
    gradientAngle,
    data,
    style,
    fontStyles,
    logo,
  });
};

export const saveVisitCard = (
  visitCardName: string,
  { isGradient, gradientAngle, data, style, fontStyles, logo }: ICardContext
) => {
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
  localStorage.setItem(localStorageVisitCard, JSON.stringify(visitCards));
};

const loadedVisitCardToContext = (visitCard: any, context: ICardContext) => {
  context.updateStyle(visitCard.style);
  context.updateData(visitCard.data);
  context.setFontStyles(visitCard.fontStyles);
  context.setIsGradient(visitCard.isGradient);
  context.setGradientAngle(visitCard.gradientAngle);
  context.setLogo(visitCard.logo);
};

export const loadVisitCard = (visitCardName: string, context: ICardContext) => {
  console.log(`Try loading ${visitCardName}`);
  const vCard = localStorage.getItem(localStorageVisitCard);
  if (!vCard) {
    throw new Error('Unable to find specified visitCard');
  }
  const visitCards = JSON.parse(vCard);
  if (visitCards[visitCardName]) {
    const visitCard = visitCards[visitCardName];
    loadedVisitCardToContext(visitCard, context);
  } else {
    throw new Error(`Unable to find specified visitCard "${visitCardName}"`);
  }
};

export const listVisitCards = () => {
  const visitCards = localStorage.getItem(localStorageVisitCard);
  if (visitCards) {
    const visitCardsObj = JSON.parse(visitCards);
    if (visitCardsObj && typeof visitCardsObj === 'object') {
      return Object.keys(visitCardsObj).filter((s) => s !== 'visitCard_last');
    }
  }
  return [];
};
