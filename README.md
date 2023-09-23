# Gutenberg Theme.JSON to Tailwind.Config

This will convert gutenberg variables to taiwlind configuration using css variable names. 

## Example

```CSS
body {
    --wp--preset--color--black: #000000;
    --wp--preset--color--cyan-bluish-gray: #abb8c3;
    --wp--preset--color--white: #ffffff;
    --wp--preset--color--pale-pink: #f78da7;
    --wp--preset--color--vivid-red: #cf2e2e;
    --wp--preset--color--luminous-vivid-orange: #ff6900;
    --wp--preset--color--luminous-vivid-amber: #fcb900;
    --wp--preset--color--light-green-cyan: #7bdcb5;
    --wp--preset--color--vivid-green-cyan: #00d084;
    --wp--preset--color--pale-cyan-blue: #8ed1fc;
    --wp--preset--color--vivid-cyan-blue: #0693e3;
    --wp--preset--color--vivid-purple: #9b51e0;
    --wp--preset--color--neutral-1: #f6f6f6;
    --wp--preset--color--neutral-2: #d3d3d3;
    --wp--preset--color--neutral-3: #b0b0b0;
    --wp--preset--color--neutral-4: #8d8d8d;
    --wp--preset--color--neutral-5: #6a6a6a;
    --wp--preset--color--neutral-6: #474747;
    --wp--preset--color--neutral-7: #323232;
    --wp--preset--color--neutral-8: #1c1c1c;
    --wp--preset--color--neutral-9: #070707;
    --wp--preset--color--neutral-10: #000000;
    --wp--preset--color--purple-1: #8d57fd;
    --wp--preset--color--purple-2: #ac84fe;
    --wp--preset--color--purple-3: #4c11c9;
    --wp--preset--color--blue-1: #63b8ff;
    --wp--preset--color--blue-2: #94ceff;
    --wp--preset--color--blue-3: #1588e8;
    --wp--preset--color--green: #00973d;
    --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);
    --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);
    --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);
    --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);
    --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);
    --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);
    --wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);
    --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);
    --wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);
    --wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);
    --wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);
    --wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);
    --wp--preset--font-size--small: 13px;
    --wp--preset--font-size--medium: 20px;
    --wp--preset--font-size--large: 36px;
    --wp--preset--font-size--x-large: 42px;
    --wp--preset--font-size--sm: clamp(16.0000px, 0.1667vw + 15.3333px, 18.0000px);
    --wp--preset--font-size--base: clamp(19.2000px, 0.5000vw + 17.2000px, 25.2000px);
    --wp--preset--font-size--md: clamp(23.0400px, 1.0200vw + 18.9600px, 35.2800px);
    --wp--preset--font-size--lg: clamp(27.6480px, 1.8120vw + 20.4000px, 49.3920px);
    --wp--preset--font-size--xl: clamp(33.1776px, 2.9976vw + 21.1872px, 69.1488px);
    --wp--preset--font-size--xxl: clamp(39.8131px, 4.7496vw + 20.8147px, 96.8083px);
    --wp--preset--font-family--system-font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    --wp--preset--spacing--sm: clamp(10.0000px, 0.5000vw + 7.0000px, 15.0000px);
    --wp--preset--spacing--md: clamp(12.0000px, 0.9000vw + 6.6000px, 21.0000px);
    --wp--preset--spacing--base: clamp(14.4000px, 1.5000vw + 5.4000px, 29.4000px);
    --wp--preset--spacing--lg: clamp(17.2800px, 2.3880vw + 2.9520px, 41.1600px);
    --wp--preset--spacing--xl: clamp(20.7360px, 3.6888vw + -1.3968px, 57.6240px);
    --wp--preset--spacing--xxl: clamp(24.8832px, 5.5790vw + -8.5910px, 80.6736px);
    --wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
    --wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
    --wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
    --wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);
    --wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);
}
```

```
gradient: {
  'vividCyanBlueToVividPurple': 'var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple)',
  'lightGreenCyanToVividGreenCyan': 'var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan)',
  'luminousVividAmberToLuminousVividOrange': 'var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange)',
  'luminousVividOrangeToVividRed': 'var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red)',
  'veryLightGrayToCyanBluishGray': 'var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray)',
  'coolToWarmSpectrum': 'var(--wp--preset--gradient--cool-to-warm-spectrum)',
  'blushLightPurple': 'var(--wp--preset--gradient--blush-light-purple)',
  'blushBordeaux': 'var(--wp--preset--gradient--blush-bordeaux)',
  'luminousDusk': 'var(--wp--preset--gradient--luminous-dusk)',
  'paleOcean': 'var(--wp--preset--gradient--pale-ocean)',
  'electricGrass': 'var(--wp--preset--gradient--electric-grass)',
  'midnight': 'var(--wp--preset--gradient--midnight)',
},
font-size: {
  'small': 'var(--wp--preset--font-size--small)',
  'medium': 'var(--wp--preset--font-size--medium)',
  'large': 'var(--wp--preset--font-size--large)',
  'xLarge': 'var(--wp--preset--font-size--x-large)',
  'sm': 'var(--wp--preset--font-size--sm)',
  'base': 'var(--wp--preset--font-size--base)',
  'md': 'var(--wp--preset--font-size--md)',
  'lg': 'var(--wp--preset--font-size--lg)',
  'xl': 'var(--wp--preset--font-size--xl)',
  'xxl': 'var(--wp--preset--font-size--xxl)',
},
font-family: {
  'systemFont': 'var(--wp--preset--font-family--system-font)',
},
spacing: {
  'sm': 'var(--wp--preset--spacing--sm)',
  'md': 'var(--wp--preset--spacing--md)',
  'base': 'var(--wp--preset--spacing--base)',
  'lg': 'var(--wp--preset--spacing--lg)',
  'xl': 'var(--wp--preset--spacing--xl)',
  'xxl': 'var(--wp--preset--spacing--xxl)',
},
shadow: {
  'natural': 'var(--wp--preset--shadow--natural)',
  'deep': 'var(--wp--preset--shadow--deep)',
  'sharp': 'var(--wp--preset--shadow--sharp)',
  'outlined': 'var(--wp--preset--shadow--outlined)',
  'crisp': 'var(--wp--preset--shadow--crisp)',
},
colors: {
  'cyanBluishGray': 'var(--wp--preset--color--cyan-bluish-gray)',
  'white': 'var(--wp--preset--color--white)',
  'palePink': 'var(--wp--preset--color--pale-pink)',
  'vividRed': 'var(--wp--preset--color--vivid-red)',
  'luminousVividOrange': 'var(--wp--preset--color--luminous-vivid-orange)',
  'luminousVividAmber': 'var(--wp--preset--color--luminous-vivid-amber)',
  'lightGreenCyan': 'var(--wp--preset--color--light-green-cyan)',
  'vividGreenCyan': 'var(--wp--preset--color--vivid-green-cyan)',
  'paleCyanBlue': 'var(--wp--preset--color--pale-cyan-blue)',
  'vividCyanBlue': 'var(--wp--preset--color--vivid-cyan-blue)',
  'vividPurple': 'var(--wp--preset--color--vivid-purple)',
  'neutral-1': 'var(--wp--preset--color--neutral-1)',
  'neutral-2': 'var(--wp--preset--color--neutral-2)',
  'neutral-3': 'var(--wp--preset--color--neutral-3)',
  'neutral-4': 'var(--wp--preset--color--neutral-4)',
  'neutral-5': 'var(--wp--preset--color--neutral-5)',
  'neutral-6': 'var(--wp--preset--color--neutral-6)',
  'neutral-7': 'var(--wp--preset--color--neutral-7)',
  'neutral-8': 'var(--wp--preset--color--neutral-8)',
  'neutral-9': 'var(--wp--preset--color--neutral-9)',
  'neutral-10': 'var(--wp--preset--color--neutral-10)',
  'purple-1': 'var(--wp--preset--color--purple-1)',
  'purple-2': 'var(--wp--preset--color--purple-2)',
  'purple-3': 'var(--wp--preset--color--purple-3)',
  'blue-1': 'var(--wp--preset--color--blue-1)',
  'blue-2': 'var(--wp--preset--color--blue-2)',
  'blue-3': 'var(--wp--preset--color--blue-3)',
  'green': 'var(--wp--preset--color--green)',
}

```
