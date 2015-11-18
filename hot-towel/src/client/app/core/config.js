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
            'MESSAGE_COUNT': '{{messageCount}} Messages',
            Language: 'Language',
            Languages: {
                English: 'English',
                Spanish: 'Spanish',
                French: 'French'
            }
        };
        var dutch = {
            'TITLE': 'Hallo',
            'FOO': 'Dies ist ein Absatz',
            'SPLASH_MSG': 'Testing . . .',
            'MESSAGE_COUNT': '{{messageCount}} Messages',
            Language: 'Language',
            Languages: {
                English: 'English',
                Spanish: 'Spanish',
                French: 'French'
            }
        };
        
        $translateProvider
            .translations('en', english)
            .preferredLanguage('en')
            .fallbackLanguage('en')
            .useStaticFilesLoader({
                prefix: '/app/i18n/',
                suffix: '.json'
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
            // $translate.refresh('en');
        });
        $rootScope.$on('$translateChangeSuccess', function () {
            console.log('Translation Change Success!');
        });
        $rootScope.$on('$translateChangeError', function () {
            console.log('Translation Change ERROR!!!!');
        });
    });

})();
