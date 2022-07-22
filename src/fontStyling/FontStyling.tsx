import { Box, FormControlLabel, Grid, Switch, Typography } from "@mui/material";
import { useState } from "react";
import AutocompleteBox from "./AutoCompleteBox/AutoCompleteBox";
import { FontFamilyOptions, FontFamilyWeights } from "./utils";
import { KeyValuePair } from "./types";

const FontStyling: React.FC = () => {
  /* --------------------------------------------------------------------
  These states will be used to manage the font styling in our component
   --------------------------------------------------------------------- */
  const [
    customHeadingFontFamily,
    setCustomHeadingFontFamily
  ] = useState<KeyValuePair | null>(null);

  const [
    customHeadingFontItalicChecked,
    setCustomHeadingFontItalicChecked
  ] = useState<boolean>(false);

  const [
    customHeadingFontWeight,
    setCustomHeadingFontWeight
  ] = useState<KeyValuePair | null>(null);

  /* -----------------------------------------------
  So to get the updated state for the font styling, 
  you need to handle it when its changed.
  -------------------------------------------------- */
  const handleCustomHeadingFontFamilyOnChange = (selectedOption: any) => {
    setCustomHeadingFontFamily(selectedOption);
  };

  const handleCustomHeadingFontItalicCheckedOnChange = (
    _event: any,
    checked: boolean
  ) => {
    setCustomHeadingFontItalicChecked(checked);
  };

  const handleCustomHeadingFontWeightOnChange = (selectedOption: any) => {
    setCustomHeadingFontWeight(selectedOption);
  };

  return (
    <>
      {/* -------------------------------------------------------------------
         This style tag will receive the selected font family and modify
         the font face and if there was no font family selection, the style
         tag will removed
      ----------------------------------------------------------------------- */}
      {customHeadingFontFamily && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @font-face {
            font-family: ${customHeadingFontFamily?.key}${
              customHeadingFontItalicChecked ? "-Italic" : ""
            };
            src: url("../fonts/${customHeadingFontFamily?.key}${
              customHeadingFontItalicChecked ? "-Italic" : ""
            }.ttf") format("truetype");
          }
          `
          }}
        />
      )}

      {/* -------------------------------------------------------------------
         This style tag will receive the selected font family, font weight 
         and italic check 
      ----------------------------------------------------------------------- */}

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .h1{
            font-family: ${customHeadingFontFamily?.key || "Roboto"}${
            customHeadingFontFamily?.key && customHeadingFontItalicChecked
              ? "-Italic"
              : ""
          };
          font-style: ${customHeadingFontItalicChecked ? "italic" : "normal"};
          font-variation-settings:"wght" ${
            customHeadingFontWeight?.key || "normal"
          };
          ${
            customHeadingFontFamily?.key === undefined
              ? `font-weight:${customHeadingFontWeight?.key}`
              : ""
          }
          }
          `
        }}
      />
      {/*---------------------------------------------------
         font styling management section will manage the 
         font family, font weight, and apply italic or not.
       ------------------------------------------------------*/}
      <Grid container mt={5}>
        <Grid item xs={12}>
          <Typography variant="h6">Heading Style</Typography>
          <Grid container mt={2}>
            <Grid item xs={6} px={3}>
              <AutocompleteBox
                fullWidth
                label="Font Family"
                options={FontFamilyOptions}
                onChange={handleCustomHeadingFontFamilyOnChange}
              />
            </Grid>
            <Grid xs={6} px={3}>
              <AutocompleteBox
                fullWidth
                label="Font Weight"
                options={
                  FontFamilyWeights.find(
                    (font) => font.key === customHeadingFontFamily?.value
                  )?.weightOptions ||
                  FontFamilyWeights.find((font) => font.key === "Roboto")
                    ?.weightOptions
                }
                onChange={handleCustomHeadingFontWeightOnChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container mt={3}>
          <Grid item pl={1} xs={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={customHeadingFontItalicChecked}
                  onChange={handleCustomHeadingFontItalicCheckedOnChange}
                />
              }
              label="Italic"
              labelPlacement="start"
            />
          </Grid>
        </Grid>
      </Grid>
      {/* The text that will be displayed with the selected font styling */}
      <Box mt={5} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h1" className="h1">
          Hello world
        </Typography>
      </Box>
    </>
  );
};

export default FontStyling;
