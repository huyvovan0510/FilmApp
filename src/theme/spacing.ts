import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

export const SPACING = {
  XSMALL: 4,
  SMALL: 8,
  MEDIUM: 16,
  LARGE: 24,
  EXTRA_LARGE: 32,
};

export const SCREEN_WITH = width;
export const SCREEN_HEIGHT = height;

export const CAROUSEL_WIDTH = 370;
export const CAROUSEL_HEIGHT = SCREEN_HEIGHT * 0.7;

export const THUMBNAIL_WIDTH = 200;
export const THUMBNAIL_HEIGHT = 280;

export const FAVORITE_ITEM_HEIGHT = 180;
