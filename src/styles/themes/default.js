import { createTheme } from '@mui/material/styles';

export const brandColors = {
  blue: {
    main: '#0096D1',
    dark: '#005D9B',
    light: '#4CB7E8',
    soft: '#A7D9F5',
  },
  green: {
    main: '#63B32E',
    light: '#8CC63F',
  },
  orange: {
    main: '#F5A623',
    dark: '#E38B00',
  },
  neutral: {
    white: '#FFFFFF',
    greyLight: '#EAEAEA',
    text: '#1F2933',
    textSecondary: '#52616B',
  },
};

export const palette = {
  mode: 'light',
  primary: {
    main: brandColors.blue.main,
    dark: brandColors.blue.dark,
    light: brandColors.blue.light,
    contrastText: brandColors.neutral.white,
  },
  secondary: {
    main: brandColors.green.main,
    light: brandColors.green.light,
    dark: '#4E8F24',
    contrastText: brandColors.neutral.white,
  },
  info: {
    main: brandColors.blue.light,
    light: brandColors.blue.soft,
    dark: brandColors.blue.dark,
    contrastText: brandColors.neutral.white,
  },
  warning: {
    main: brandColors.orange.main,
    dark: brandColors.orange.dark,
    contrastText: '#2B1A00',
  },
  error: {
    light: '#F26F5B',
    main: '#D94A38',
    dark: '#A93527',
    contrastText: brandColors.neutral.white,
  },
  success: {
    light: brandColors.green.light,
    main: brandColors.green.main,
    dark: '#4E8F24',
    contrastText: brandColors.neutral.white,
  },
  background: {
    default: brandColors.neutral.white,
    paper: brandColors.neutral.white,
  },
  text: {
    primary: brandColors.neutral.text,
    secondary: brandColors.neutral.textSecondary,
  },
  divider: '#D7DDE2',
  grey: {
    50: '#FAFAFA',
    100: brandColors.neutral.greyLight,
    200: '#D7DDE2',
    300: '#C3CBD3',
    400: '#9AA6B2',
    500: '#73808C',
    600: '#52616B',
    700: '#3A4650',
    800: '#28323C',
    900: brandColors.neutral.text,
  },
};

export const shape = {
  borderRadius: 8,
};

export const spacing = 8;

export const customShadows = {
  none: 'none',
  sm: '0 2px 8px rgba(31, 41, 51, 0.06)',
  md: '0 8px 20px rgba(31, 41, 51, 0.08)',
  lg: '0 14px 32px rgba(31, 41, 51, 0.10)',
  xl: '0 20px 48px rgba(31, 41, 51, 0.14)',
};

export const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

export const zIndex = {
  mobileStepper: 1000,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};

export const transitions = {
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  },
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
};

export const typography = {
  fontFamily: [
    '"Pretendard Variable"',
    'Outfit',
    'Pretendard',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'sans-serif',
  ].join(','),
  headingFontFamily: '"Outfit", "Pretendard Variable", Pretendard, sans-serif',
  fontSize: 14,
  htmlFontSize: 16,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontFamily: '"Outfit", "Pretendard Variable", Pretendard, sans-serif',
    fontWeight: 900,
    fontSize: '2.5rem',
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
  },
  h2: {
    fontFamily: '"Outfit", "Pretendard Variable", Pretendard, sans-serif',
    fontWeight: 900,
    fontSize: '2rem',
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
  },
  h3: {
    fontFamily: '"Outfit", "Pretendard Variable", Pretendard, sans-serif',
    fontWeight: 800,
    fontSize: '1.75rem',
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
  },
  h4: {
    fontFamily: '"Outfit", "Pretendard Variable", Pretendard, sans-serif',
    fontWeight: 700,
    fontSize: '1.5rem',
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
  },
  h5: {
    fontFamily: '"Outfit", "Pretendard Variable", Pretendard, sans-serif',
    fontWeight: 700,
    fontSize: '1.25rem',
    lineHeight: 1.4,
    letterSpacing: '0',
  },
  h6: {
    fontFamily: '"Outfit", "Pretendard Variable", Pretendard, sans-serif',
    fontWeight: 600,
    fontSize: '1.125rem',
    lineHeight: 1.4,
    letterSpacing: '0',
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.6,
    letterSpacing: '0',
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.6,
    letterSpacing: '0',
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.01em',
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.01em',
  },
  button: {
    fontSize: '0.875rem',
    textTransform: 'none',
    fontWeight: 700,
    lineHeight: 1.75,
    letterSpacing: '0.02em',
  },
  caption: {
    fontSize: '0.75rem',
    lineHeight: 1.5,
    letterSpacing: '0.02em',
  },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 700,
    lineHeight: 2,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
};

export const components = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        minHeight: 44,
        borderRadius: 8,
        fontWeight: 700,
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: brandColors.blue.dark,
        },
      },
      containedSecondary: {
        '&:hover': {
          backgroundColor: '#4E8F24',
        },
      },
      outlinedPrimary: {
        borderColor: brandColors.blue.main,
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        border: '1px solid #D7DDE2',
        boxShadow: 'none',
      },
    },
  },
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: brandColors.neutral.white,
      },
    },
  },
};

export const defaultTheme = createTheme({
  cssVariables: true,
  palette,
  shape,
  spacing,
  breakpoints,
  zIndex,
  transitions,
  typography,
  components,
});

defaultTheme.customShadows = customShadows;

defaultTheme.dashboard = {
  style: 'smarthub',
  iconStyle: 'outlined',
  iconWeight: 400,
  cardBorderRadius: shape.borderRadius,
  cardColors: [
    `linear-gradient(to bottom, ${brandColors.neutral.white} 0%, ${brandColors.neutral.white} 100%)`,
    `linear-gradient(to bottom, ${brandColors.blue.soft} 0%, ${brandColors.neutral.white} 100%)`,
    `linear-gradient(to bottom, ${brandColors.neutral.greyLight} 0%, ${brandColors.neutral.white} 100%)`,
    `linear-gradient(to bottom, ${brandColors.neutral.white} 0%, ${brandColors.neutral.white} 100%)`,
    `linear-gradient(to bottom, ${brandColors.blue.soft} 0%, ${brandColors.neutral.white} 100%)`,
    `linear-gradient(to bottom, ${brandColors.neutral.greyLight} 0%, ${brandColors.neutral.white} 100%)`,
  ],
  subCardColors: [
    'linear-gradient(to bottom, #FAFAFA 0%, #FAFAFA 100%)',
    `linear-gradient(to bottom, ${brandColors.neutral.greyLight} 0%, ${brandColors.neutral.white} 100%)`,
    `linear-gradient(to bottom, ${brandColors.blue.soft} 0%, ${brandColors.neutral.white} 100%)`,
    'linear-gradient(to bottom, #FAFAFA 0%, #FAFAFA 100%)',
    `linear-gradient(to bottom, ${brandColors.neutral.greyLight} 0%, ${brandColors.neutral.white} 100%)`,
    `linear-gradient(to bottom, ${brandColors.blue.soft} 0%, ${brandColors.neutral.white} 100%)`,
  ],
  textColor: palette.text.primary,
  textSecondary: palette.text.secondary,
  textShadow: '0 0 0 rgba(0, 0, 0, 0)',
  backdropFilter: 'blur(0px)',
  WebkitBackdropFilter: 'blur(0px)',
  border: `1px solid ${palette.divider}`,
  borderColor: palette.divider,
  shadow: customShadows.md,
  subBorder: `1px solid ${palette.divider}`,
  subShadow: '0 0 0 rgba(0, 0, 0, 0)',
  subBackdropFilter: 'blur(0px)',
  subBorderRadius: shape.borderRadius,
  dividerColor: palette.divider,
  progressHeight: 6,
  progressTrackColor: brandColors.neutral.greyLight,
  progressBarColor: palette.primary.main,
  progressGradient: false,
  progressBorderRadius: shape.borderRadius,
  background: brandColors.neutral.white,
  atmosphere: `linear-gradient(to bottom, ${brandColors.neutral.white} 0%, ${brandColors.blue.soft} 100%)`,
  atmosphereOpacity: 0.18,
  accentColor: palette.primary.main,
  accentColors: {
    blue: brandColors.blue.main,
    green: brandColors.green.main,
    lime: brandColors.green.light,
    orange: brandColors.orange.main,
  },
  blobs: null,
};

export default defaultTheme;
