// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
    production: false,
    apiUrl: 'http://skillstracking.motjo.io/api/',
    appUrl: 'http://skillstracking.motjo.io/',
    appImageUrl: 'http://skillstracking.motjo.io/uploads/images/',
    appLogoUrl: 'http://skillstracking.motjo.io/uploads/logos/',
    appCalendarUrl: 'http://skillstracking.motjo.io/uploads/calendars/',

    tableProgressRadiusTeacher: 30,
    tableProgressRadiusStudent: 24,
    tableProgressColorTeacher: '#E689B8',
    tableProgressColorStudent: '#A3A1FB',
    tableProgressStrokeTeacher: 4,
    tableProgressStrokeStudent: 4,

    progressRadiusTeacher: 70,
    progressRadiusStudent: 56,
    progressColorTeacher: '#E689B8',
    progressColorStudent: '#A3A1FB',
    progressStrokeTeacher: 7,
    progressStrokeStudent: 7,

    progressMax: 100
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
