export default {
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },
    listItem: {
      backgroundColor: 'rgb(249 253 255)',
      width: '100%',
      padding: 10
    },
    title: {
      fontSize: 12,
    },
    thumb: {
      height: 200,
      width: '100%',
      padding: 10,
      position: 'relative'
    },
    imgTrumb: {
      width: '100%',
      height: '100%'
    },
    info: {
      width: '100%',
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 10
    },
    infoText: {
      fontSize: '14px',
      color: '#333',
      textShadowColor: 'rgba(165, 165, 165, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10
    },
    plus: {
      fontSize: '80px',
      position: 'absolute',
      display: 'block',
      top: '50%',
      right: 0,
      bottom: 0,
      left: '50%',
      transform: 'translate(-50%,-50%)',
      textAlign: 'center',
      lineHeight: '100%',
      zIndex: 1,
      opacity: 0.7,
      color: '#ffffff',
      textShadowColor: 'rgba(70, 70, 70, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10
    }
};