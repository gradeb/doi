# doi
doi - tiny sticky progress bar functional component in VanillaJS

quick howto >

```javascript
  import createProgressBar from "./sudobar.js";

  const bar = createProgressBar("#ecf0f1", "#3498db", "4px", "500ms"); // bgColor, fgColor, height of the bar, transition
   
  bar.move(10); // progress to 10%
  
  bar.hide(); // hide the progress bar
```
