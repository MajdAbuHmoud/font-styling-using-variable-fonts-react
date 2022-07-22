import { CustomFontFamilyType, KeyValuePair } from "../types";

/* -------------------------------------------------------------
These options will be added to the Font family select element. 
In this example I added Raleway and Nunito as FontFamilyOptions
 -------------------------------------------------------------- */

export const FontFamilyOptions: KeyValuePair[] = [
  {
    key: "Raleway",
    value: "Raleway"
  },
  {
    key: "Nunito",
    value: "Nunito"
  }
];

/* ----------------------------------------------------------
Font families have weights, so to select a specific weight 
for a selected font family you will need to add font family
weights based on the font family option.

These weight options will be added to the font weight select element.
 --------------------------------------------------------------------- */
export const FontFamilyWeights: CustomFontFamilyType[] = [
  {
    key: "Raleway",
    weightOptions: [
      {
        key: "100",
        value: "Thin"
      },
      {
        key: "200",
        value: "ExtraLight"
      },
      {
        key: "300",
        value: "Light"
      },
      {
        key: "400",
        value: "Regular"
      },
      {
        key: "500",
        value: "Medium"
      },
      {
        key: "600",
        value: "SemiBold"
      },
      {
        key: "700",
        value: "Bold"
      },
      {
        key: "800",
        value: "ExtraBold"
      },
      {
        key: "900",
        value: "Black"
      }
    ]
  },
  {
    key: "Nunito",
    weightOptions: [
      {
        key: "200",
        value: "ExtraLight"
      },
      {
        key: "300",
        value: "Light"
      },
      {
        key: "400",
        value: "Regular"
      },
      {
        key: "500",
        value: "Medium"
      },
      {
        key: "600",
        value: "SemiBold"
      },
      {
        key: "700",
        value: "Bold"
      },
      {
        key: "800",
        value: "ExtraBold"
      },
      {
        key: "900",
        value: "Black"
      }
    ]
  },
  {
    key: "Roboto",
    weightOptions: [
      {
        key: "100",
        value: "Thin"
      },
      {
        key: "200",
        value: "ExtraLight"
      },
      {
        key: "300",
        value: "Light"
      },
      {
        key: "400",
        value: "Regular"
      },
      {
        key: "500",
        value: "Medium"
      },
      {
        key: "600",
        value: "SemiBold"
      },
      {
        key: "700",
        value: "Bold"
      },
      {
        key: "800",
        value: "ExtraBold"
      },
      {
        key: "900",
        value: "Black"
      }
    ]
  }
];
