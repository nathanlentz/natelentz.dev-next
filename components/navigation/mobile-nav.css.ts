import { style } from "@vanilla-extract/css";
import { sprinkles } from "@/styles/sprinkles.css";

export const mobileNavWrapper = style([
  {
  },
  sprinkles({
    display: {
      'bp3': 'none'
    }
  })
])