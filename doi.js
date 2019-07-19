const addStyle = ( a, b ) => Object.entries( a ).forEach(c => Reflect.set(b.style, ...c)) || b;

const createStyledDiv = ( a = {} ) => addStyle(a, document.createElement("div"));

const createProgressBar = ( bgColor = "#ccc", fgColor = "#000", height = "10px", transition = "0ms" ) => {

  const b = createStyledDiv({ background: bgColor, position: "fixed", top: 0, left: 0, width: "100%", zIndex: 9999 });

  const c = createStyledDiv({ background: fgColor, height, width: 0, transition });

  b.appendChild( c );

  document.body.appendChild( b );

  return {

    move: d => c.style.width = (d <= 100 ? d : 100) + "%",

    hide: () => b.style.opacity = 0

  };

};

export default createProgressBar;
