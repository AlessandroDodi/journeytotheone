import "@mui/material/styles";

type CustomPaletteProps = {
  cardBorder: string;
  chipBg: string;
  chipText: string;
  buttonHover: string;
  inputBackground: string;
  inputBorder: string;
  scrollbarThumb: string;
  scrollbarThumbHover: string;
  chipDefaultBg: string;
  chipDefaultText: string;
  chipPrimaryBg: string;
  chipPrimaryText: string;
  chipSecondaryBg: string;
  chipSecondaryText: string;
  chipErrorBg: string;
  chipErrorText: string;
  chipSuccessBg: string;
  chipSuccessText: string;
  chipInfoBg: string;
  chipInfoText: string;
  chipWarningBg: string;
  chipWarningText: string;
  buttonSecondaryBorderColor: string;
  buttonSecondaryHoverBg: string;
  buttonSecondaryHoverBorderColor: string;
  buttonInfoBg: string;
  buttonInfoBorder: string;
  buttonInfoHoverBg: string;
};

declare module "@mui/material/styles" {
  interface Palette {
    custom: CustomPaletteProps;
  }
  interface PaletteOptions {
    custom?: CustomPaletteProps;
  }
}
