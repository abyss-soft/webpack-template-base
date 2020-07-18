"use strict";

const smartgrid = require("smart-grid");

{
  smartgrid("./src/assets/scss/utils", {
    outputStyle: "scss",
    filename: "_smart-grid",
    columns: 12, // number of grid columns
    offset: "1.5rem", // gutter width - 24px
    mobileFirst: true,
    mixinNames: {
      container: "container"
    },
    container: {
      maxWidth: "1284px",
      fields: "0.9375rem" // side fields - 15px
    },
    breakPoints: {
      xs: {
        width: "20rem" // 320px
      },
      sm: {
        width: "36rem" // 576px
      },
      md: {
        width: "48rem" // 768px
      },
      lg: {
        width: "62rem" // 992px
      },
      xl: {
        width: "75rem" // 1200px
      }
    }
  });

}
;
