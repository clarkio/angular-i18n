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

        $translateProvider
            .addInterpolation('$translateMessageFormatInterpolation')
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

    core.run(function ($rootScope) {
        $rootScope.$on('$translateChangeSuccess', function () {
            console.log('Translation Change Success!');
        });
        $rootScope.$on('$translateChangeError', function () {
            console.log('Translation Change Error!');
        });
    });

})();
