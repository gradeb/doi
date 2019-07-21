# doi
doi - tiny sticky progress bar functional component in VanillaJS

quick howto >

```javascript
  import doi from "./doi.js";

  const bar = doi({ height: "4px", transition: "height 200ms, width 500ms" });

  bar.go(10); // progress to 10%
  
  bar.hide(); // hide the progress bar
  
  bar.show(); // show the progress bar
```
