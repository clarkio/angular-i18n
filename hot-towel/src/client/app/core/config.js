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

    core.config(configure);

    configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider'];
    /* @ngInject */
    function configure($logProvider, routerHelperProvider, exceptionHandlerProvider) {

        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);
        routerHelperProvider.configure({docTitle: config.appTitle + ': '});
    }
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
        //     'Dashboard': 'Tablero',
        //     'Admin': 'Administración',
        //     'Greeting': '{{name}} se registra en',
        //     'Admin_Message': 'El zorro marrón rápido saltó sobre el perro perezoso'
        // };