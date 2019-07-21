const addStyles = ( a, b ) => (Object.entries( a ).forEach(c => Reflect.set(b.style, ...c)), b);

const createStyledDiv = ( a = {} ) => addStyles(a, document.createElement("div"));

export default ({ background = "#000", height = "10px", ...styles } = { }) => {

  const b = createStyledDiv({ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 9999 });

  const c = createStyledDiv({ background, height, width: 0, ...styles });

  b.appendChild( c );

  document.body.appendChild( b );

  return {

    go: k => c.style.width = (k <= 100 ? k : 100) + "%",

    hide: () => c.style.height = 0,

    show: () => c.style.height = height

  };

};
