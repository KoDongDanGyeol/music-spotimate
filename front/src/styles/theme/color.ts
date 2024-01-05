// https://spectrum.adobe.com/page/color-palette/
export type Color = typeof colorLight | typeof colorDark
export type ColorKey = keyof Color

export const colorLight = {
  gray50: "0, 0%, 100%", // #ffffff // 1.06
  gray75: "0, 0%, 99.22%", // #fdfdfd // 1.04
  gray100: "0, 0%, 97.25%", // #f8f8f8 // 1.00
  gray200: "0, 0%, 90.2%", // #e6e6e6 // 1.18
  gray300: "0, 0%, 83.53%", // #d5d5d5 // 1.38
  gray400: "0, 0%, 69.41%", // #b1b1b1 // 2.02
  gray500: "0, 0%, 56.47%", // #909090 // 3.01
  gray600: "0, 0%, 42.75%", // #6d6d6d // 4.87
  gray700: "0, 0%, 27.45%", // #464646 // 8.89
  gray800: "0, 0%, 13.33%", // #222222 // 14.98
  gray900: "0, 0%, 0%", // #000000 // 19.77
  red400: "9.77, 100%, 83.14%", // #ffb7a9 // 1.57
  red500: "9.58, 100%, 76.67%", // #ff9b88 // 1.92
  red600: "8.96, 100%, 69.8%", // #ff7c65 // 2.38
  red700: "7.46, 91.71%, 62.16%", // #f75c46 // 3.01
  red800: "7.46, 91.71%, 62.16%", // #ea3829 // 3.88
  red900: "1.54, 85.9%, 44.51%", // #d31510 // 5.09
  red1000: "0, 100%, 35.29%", // #b40000 // 6.72
  orange400: "33.85, 100%, 69.41%", // #ffbb63 // 1.58
  orange500: "31.5, 100%, 60.78%", // #ffa037// 1.91
  orange600: "30.39, 92.71%, 51.57%", // #f68511// 2.39
  orange700: "29.21, 100%, 44.71%", // #e46f00// 3.01
  orange800: "27.49, 100%, 39.8%", // #cb5d00// 3.87
  orange900: "25.76, 100%, 34.71%", // #b14c00// 5.07
  orange1000: "24.56, 100%, 29.22%", // #953d00 // 6.71
  blue400: "207.38, 96.26%, 79.02%", // #96cefd // 1.58
  blue500: "209.08, 92.86%, 72.55%", // #78bbfa // 1.92
  blue600: "210.19, 89.71%, 65.69%", // #59a7f6 // 2.39
  blue700: "211.12, 88.63%, 58.63%", // #3892f3 // 3.01
  blue800: "212.56, 90.28%, 51.57%", // #147af3 // 3.87
  blue900: "212.75, 98.2%, 43.53%", // #0265dc // 5.07
  blue1000: "212.31, 100%, 35.69%", // #0054b6 // 6.72
  green400: "152.77, 64.32%, 63.73%", // #67dea8 // 1.57
  green500: "153.89, 56.22%, 54.31%", // #49cc93 // 1.91
  green600: "155.47, 59.31%, 45.29%", // #2fb880 // 2.39
  green700: "157.34, 77.3%, 36.27%", // #15a46e // 3.01
  green800: "159.02, 100%, 28.04%", // #008f5d // 3.89
  green900: "157.87, 100%, 23.92%", // #007a4d // 5.08
  green1000: "156.83, 100%, 19.8%", // #00653e // 6.75
}

export const colorDark = {
  gray50: "0, 0%, 0%", // #000000 // 1.25
  gray75: "0, 0%, 5.49%", // #0e0e0e // 1.15
  gray100: "0, 0%, 11.37%", // #1d1d1d // 1.00
  gray200: "0, 0%, 18.82%", // #303030 // 1.28
  gray300: "0, 0%, 29.41%", // #4b4b4b // 1.93
  gray400: "0, 0%, 41.57%", // #6a6a6a // 3.12
  gray500: "0, 0%, 55.29%", // #8d8d8d // 5.08
  gray600: "0, 0%, 69.02%", // #b0b0b0 // 7.77
  gray700: "0, 0%, 81.57%", // #d0d0d0 // 10.93
  gray800: "0, 0%, 92.16%", // #ebebeb // 14.14
  gray900: "0, 0%, 100%", // #ffffff // 16.86
  red400: "0.32, 96.89%, 37.84%", // #be0403 // 1.96
  red500: "0.32, 94.06%, 39.61%", // #c40706 // 2.71
  red600: "2.74, 80.41%, 48.04%", // #dd2118 // 3.46
  red700: "5.71, 84.75%, 56.27%", // #ee4331 // 4.40
  red800: "7.98, 93.51%, 63.73%", // #f9634c // 5.55
  red900: "8.92, 100%, 70.98%", // #ff816b // 6.91
  red1000: "9.57, 100%, 81.57%", // #ffb0a1 // 7.31
  orange400: "25.06, 100%, 30.98%", // #9e4200 // 1.97
  orange500: "25.19, 100%, 31.76%", // #a24400// 2.70
  orange600: "26.45, 100%, 36.47%", // #ba5200// 3.45
  orange700: "28, 100%, 41.18%", // #d26200// 4.40
  orange800: "30, 100%, 45.49%", // #e87400// 5.56
  orange900: "30.27, 94.96%, 53.33%", // #f98917// 6.92
  orange1000: "33.41, 100%, 67.25%", // #ffb558 // 7.33
  blue400: "212.47, 100%, 38.04%", // #0059c2 // 1.96
  blue500: "212.4, 100%, 39.22%", // #005cc8 // 2.70
  blue600: "212.8, 94.94%, 46.47%", // #066ce7 // 3.46
  blue700: "212.5, 91.53%, 53.73%", // #1d80f5 // 4.38
  blue800: "211.17, 88.18%, 60.2%", // #4096f3 // 5.52
  blue900: "210.2, 90.53%, 66.86%", // #5eaaf7 // 6.88
  blue1000: "207.52, 94.78%, 77.45%", // #8fcafc // 7.34
  green400: "157.22, 100%, 21.18%", // #006c43 // 1.97
  green500: "157.3, 100%, 21.76%", // #006f45 // 2.70
  green600: "157.85, 100%, 25.49%", // #008252 // 3.46
  green700: "159.46, 100%, 29.22%", // #009562 // 4.40
  green800: "156.86, 71.43%, 38.43%", // #1ca872 // 5.53
  green900: "155.56, 56.49%, 46.86%", // #34bb84 // 6.89
  green1000: "153.17, 61.81%, 60.98%", // #5ed9a2 // 7.28
}