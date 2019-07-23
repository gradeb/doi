// doi.js | Harsh Rajput | India | MIT License

const createStyledDiv = ( style ) => {

  const div = document.createElement("div");

  Object.entries( style ).forEach(c => Reflect.set( div.style, ...c ));

  return div;

};

export default ({ height = "5px", ...rest } = {}) => {

  const a = createStyledDiv({ position: "fixed", top: 0, zIndex: 9999, width: "100%" }),

        b = createStyledDiv({ width: 0, background: "#000", ...rest });

  a.appendChild( b );

  document.body.appendChild( a );

  return {

    go: v => b.style.width = (v <= 100 ? v : 100) + "%",

    hide: () => b.style.height = 0,

    show: () => b.style.height = height

  };

};
