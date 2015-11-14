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

    configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider', '$translateProvider'];
    /* @ngInject */
    function configure($logProvider, routerHelperProvider, exceptionHandlerProvider, $translateProvider) {
        
        console.log('USER LANGUAGE!!!', navigator.language);
        var english = {
            'TITLE': 'Hello',
            'FOO': 'This is a paragraph',
            'SPLASH_MSG': 'Loading...',
            'MESSAGE_COUNT': '{{messageCount}} Messages'
        };
        var dutch = {
            'TITLE': 'Hallo',
            'FOO': 'Dies ist ein Absatz',
            'SPLASH_MSG': 'Testing . . .',
            'MESSAGE_COUNT': '{{messageCount}} Messages'
        };
        
        $translateProvider.translations('en', english)
        .translations('de', dutch)
        .preferredLanguage('es')
        .fallbackLanguage('en')
        .useSanitizeValueStrategy('sanitize');
        
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);
        routerHelperProvider.configure({docTitle: config.appTitle + ': '});
    }

})();
