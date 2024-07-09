---
sidebar_label: 'Themes'
sidebar_position: 1
---

# Themes
Themes are a way to customize the look and feel of OpenBullet.

## Web client
The web client supports themes. You can change the theme by going to the `Settings` tab, in the `Customization` section, and selecting a theme from the dropdown menu. By default, there is no theme available, but you can add more by clicking on the `+` button. Themes are `.css` files that you can create or download from the internet.

![Themes](/img/customization/web-customization.png)

### Creating a theme
To create a theme, you can create a `.css` file with the following structure:
```css title="hacker.css"
:root {
    /* Override the colors as you please */
    --fg-primary: #1a9d1a !important;
    --fg-light: #31d907 !important;
    --fg-inactive: #16620d !important;
    --fg-inactive-light: #22b120 !important;
    --bg-primary: #0f160e !important;
    --bg-variable: #202a5e !important;
    --bg-interpolated: #1f4d2f !important;
    --fg-accent: #225607 !important;
    --fg-accent-light: #225607 !important;
    --bg-secondary: #131e12 !important;
    --bg-tertiary: #33373a !important;
    --bg-accent: #090e25 !important;
    --fg-good: yellowgreen !important;
    --fg-bad: tomato !important;
    --fg-custom: darkorange !important;
    --fg-tocheck: #7fe5ff !important;
    --fg-banned: #DDA0DD !important;
    --fg-retry: #FFFF00 !important;
    --fg-error: rgb(240, 23, 60) !important;
    --bg-bad: rgb(131, 36, 19) !important;
    --fg-gold: gold !important;
    --fg-silver: silver !important;
    --fg-bronze: rgb(228, 151, 63) !important;
    --fg-variable: #2a3a8b !important;
    --fg-interpolated: #287443 !important;
}

/* Override any other style as you please */
* {
    font-family: 'Chivo Mono', sans-serif !important;
}
```

Then, save the file with a `.css` extension and upload it to the web client by clicking on the `+` button in the `Customization` section of the `Settings` tab. The theme will be saved in the `UserData/Themes` folder, so if you need to edit it later, you can do so directly from there.

If you apply the theme above, the interface will look like this:

![Hacker theme](/img/customization/hacker-theme.png)

## Native client
The native client also supports some level of customization. You can change the colors of the interface through the `Customization` section of the `OB Settings` tab. You can also set a background image for the main window, and change its opacity.

![Customization](/img/customization/native-customization.png)
