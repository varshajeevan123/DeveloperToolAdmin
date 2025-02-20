import {
    createBaseThemeOptions,
    createUnifiedTheme,
    genPageTheme,
    palettes,
    shapes,
} from '@backstage/theme';

export const myTheme = createUnifiedTheme({
    ...createBaseThemeOptions({
        palette: {
            ...palettes.light,
            primary: {
                main: '#343b58', // This is the primary color for the theme
            },
            secondary: {
                main: '#565a6e', // Secondary color for accents
            },
            error: {
                main: '#8c4351',
            },
            warning: {
                main: '#8f5e15',
            },
            info: {
                main: '#34548a',
            },
            success: {
                main: '#485e30',
            },
            background: {
                default: '#fffff',
                paper: '#fffff',
            },
            banner: {
                info: '#70c1e7', // Light blue for hospital theme
                error: '#e57373', // Light red for error messages
                text: '#343b58', // Dark text color for readability
                link: '#565a6e', // Soft gray-blue for links
            },
            errorBackground: '#e57373', // Light red for error background
            warningBackground: '#8f5e15',
            infoBackground: '#70c1e7', // Light blue for info background
            navigation: {
                background: '#005A9C', // Black background for the side menu
                indicator: '#8f5e15', // Orange indicator color
                color: '#ffffff', // White text color for navigation items
                selectedColor: '#d5d6db', // Light gray color for selected navigation items
            },
        },
    }),
    defaultPageTheme: 'home',
    fontFamily: 'sans-serif',
    // below drives the header colors
    pageTheme: {
        home: genPageTheme({ colors: ['#808080', '#000000', '#f8f8f8'], shape: shapes.wave }),
        documentation: genPageTheme({
            colors: ['#808080', '#000000', '#f8f8f8'],
            shape: shapes.wave2,
        }),
        tool: genPageTheme({ colors: ['#808080', '#000000', '#f8f8f8'], shape: shapes.round }),
        service: genPageTheme({
            colors: ['#808080', '#000000', '#f8f8f8'],
            shape: shapes.wave,
        }),
        website: genPageTheme({
            colors: ['#808080', '#000000', '#f8f8f8'],
            shape: shapes.wave,
        }),
        library: genPageTheme({
            colors: ['#808080', '#000000', '#f8f8f8'],
            shape: shapes.wave,
        }),
        other: genPageTheme({ colors: ['#808080', '#000000', '#f8f8f8'], shape: shapes.wave }),
        app: genPageTheme({ colors: ['#808080', '#000000', '#f8f8f8'], shape: shapes.wave }),
        apis: genPageTheme({ colors: ['#808080', '#000000', '#f8f8f8'], shape: shapes.wave }),
    },
});
 