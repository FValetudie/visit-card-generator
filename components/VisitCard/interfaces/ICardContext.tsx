import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { ICardPersonalData } from "./ICardPersonalData";
import { ICardStyle } from "./ICardStyle";

export interface IFontStyles {
  fname?: CSSProperties;
  lname?: CSSProperties;
  position?: CSSProperties;
  company?: CSSProperties;
  email?: CSSProperties;
  phone?: CSSProperties;
  twitter?: CSSProperties;
}

export interface ICardContext {
  data: ICardPersonalData;
  style: ICardStyle;
  computedStyle: CSSProperties;
  fontStyles?: IFontStyles;
  logo: string;

  gradientAngle: number;
  isGradient: boolean;
  isSettingsOpen: boolean;
  toggleIsSettingOpen: () => void;

  updateData: (val: Partial<ICardPersonalData>) => void;

  updateStyle: (val: Partial<ICardStyle>) => void;
  setFontStyles: (val: IFontStyles) => void;
  setIsGradient: (val: boolean) => void;
  setGradientAngle: (val: number) => void;
  setLogo: (val: string) => void;
}
