import { PaletteOptions, Palette } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomPalette {
    custom: {
      subtitle: string;
      fontColor: string;
      skyBlue: string;
      postBorder: string;
    };
  }

  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}
