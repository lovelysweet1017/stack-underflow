import { makeStyles } from '@material-ui/core/styles';

export const useBodyStyles = makeStyles(
  (theme) => ({
    root: {
      width: '100vW',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      minHeight: '100vH',
    },
  }),
  { index: 1 }
);

export const useNavStyles = makeStyles(
  (theme) => ({
    leftPortion: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
    },
    logoWrapper: {
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
        alignItems: 'center',
      },
    },
    logo: {
      fontFamily: 'Montserrat',
      textTransform: 'none',
      fontSize: '1.3em',
      padding: '0.1em',
      marginRight: '0.3em',
    },
    contentContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    myLink: {},
    appBar: {
      borderTop: '4px solid #f4649f',
    },
  }),
  { index: 1 }
);

export const useMainLayoutStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
    },
  }),
  { index: 1 }
);

export const useMenuStyles = makeStyles(
  (theme) => ({
    menuIcon: {
      marginRight: '6px',
      fontSize: '20px',
    },
    rootPanel: {
      position: 'sticky',
      display: 'flex',
      minHeight: '94.5vh',
    },
    list: {
      marginTop: '1em',
    },
  }),
  { index: 1 }
);

export const useQuesListStyles = makeStyles(
  (theme) => ({
    root: {
      width: '60%',
      marginTop: '1em',
      padding: '0.4em 0.7em',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    topBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    btnGroupWrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '1em',
      marginBottom: '1em',
      [theme.breakpoints.down('xs')]: {
        justifyContent: 'center',
      },
    },
  }),
  { index: 1 }
);

export const useTagsPanelStyles = makeStyles(
  (theme) => ({
    rootPanel: {
      position: 'sticky',
      display: 'flex',
      minHeight: '94.5vh',
    },
    content: {
      padding: '0.8em',
      paddingTop: 0,
      marginTop: '1em',
    },
    tagsWrapper: {
      marginTop: '1em',
      display: 'grid',
      width: '100%',
      gridTemplateColumns: '1fr 1fr',
      gridGap: '12px',
    },
    tag: {
      backgroundColor: '#f7ebff',
    },
  }),
  { index: 1 }
);
