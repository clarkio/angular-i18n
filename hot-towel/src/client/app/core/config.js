(function () {
    'use strict';

    var core = angular.module('app.core');

    core.config(toastrConfig);

    toastrConfig.$inject = ['toastr'];
    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    var config = {
        appErrorPrefix: '[hot-towel Error] ',
        appTitle: 'hot-towel'
    };

    core.value('config', config);

    core.value('LANG', 'en');

    core.config(configure);

    configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider', '$translateProvider', '$translatePartialLoaderProvider'];
    /* @ngInject */
    function configure($logProvider, routerHelperProvider, exceptionHandlerProvider, $translateProvider, $translatePartialLoaderProvider) {
        var storedLang = window.localStorage.getItem('LANG');
        if (!storedLang) {
            window.localStorage.setItem('LANG', 'en');
            storedLang = 'en';
        }

        $translatePartialLoaderProvider.addPart('core');
        $translatePartialLoaderProvider.addPart('dashboard');

        $translateProvider
            .addInterpolation('$translateMessageFormatInterpolation')
            .useMissingTranslationHandlerLog()
            // .translations('en', english)
            // .translations('es', spanish)
            .preferredLanguage(storedLang)
            .fallbackLanguage('en')
            // .useStaticFilesLoader({
            //     prefix: '/app/i18n/',
            //     suffix: '.json'
            // })
            .useLoader('$translatePartialLoader', {
                urlTemplate: 'app/{part}/i18n/{lang}.json'
            })
            .useSanitizeValueStrategy('sanitize');

        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);
        routerHelperProvider.configure({docTitle: config.appTitle + ': '});
    }

    /* @ngInject */
    core.run(function ($rootScope, $translate) {
        $rootScope.$on('$translatePartialLoaderStructureChanged', function () {
            console.log('Partial Structure Changed!');
            // var lang = window.localStorage.getItem('LANG');
            // console.log('Current locale is: ', lang);
            // $translate.refresh(lang);
        });
        $rootScope.$on('$translateChangeSuccess', function () {
            console.log('Translation Change Success!');
        });
        $rootScope.$on('$translateChangeError', function () {
            console.log('Translation Change ERROR!');
        });
    });

})();


// var english = {
        //     'Title': 'Internationalization',
        //     'Splash_Msg': 'Loading . . .',
        //     'Message_Count': '{messageCount, plural, =0{No Messages} one{1 Message} other{# Messages}}',
        //     'Language': 'Language',
        //     'Languages': {
        //         'English': 'English',
        //         'Spanish': 'Spanish',
        //         'French': 'French'
        //     },
        //     'Created_By': 'Created by John Papa',
        //     'First_Name': 'First Name',
        //     'Last_Name': 'Last Name',
        //     'Age': 'Age',
        //     'Location': 'Location',
        //     'Conference_Date': 'May 18 - 19, 2015',
        //     'Dashboard': 'Dashboard',
        //     'Admin': 'Admin',
        //     'Greeting': '{{name}} is logged in',
        //     'Admin_Message': 'The quick brown fox jumped over the lazy dog'
        // };
        // var spanish = {
        //     'Title': 'Internacionalización',
        //     'Splash_Msg': 'Cargando . . .',
        //     'Message_Count': '{messageCount, plural, =0{No Hay Mensajes} one{1 Mensaje} other{# Mensajes}}',
        //     'Language': 'Idioma',
        //     'Languages': {
        //         'English': 'Inglés',
        //         'Spanish': 'Español',
        //         'French': 'Francés'
        //     },
        //     'Created_By': 'Creado por Juan Padre',
        //     'First_Name': 'Nombre De Pila',
        //     'Last_Name': 'Apellido',
        //     'Age': 'Edad',
        //     'Location': 'Ubicación',
        //     'Dashboard': 'Salpicadero',
        //     'Admin': 'Administración',
        //     'Greeting': '{{name}} se registra en',
        //     'Admin_Message': 'El zorro marrón rápido saltó sobre el perro perezoso'
        // };