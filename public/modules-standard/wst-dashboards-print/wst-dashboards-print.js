console.log('loading dashboards print');
app.config(function($stateProvider)
{
        $stateProvider.state('/print/:dashboardID', {
            url: '/print/:dashboardID',
            templateUrl: 'wst-dashboards-print/views/view.html',
            controller: 'dashboardsPrintCtrl',
            resolve: {
                        home: function($ocLazyLoad) {
                            return $ocLazyLoad.load(
                                {
                                    name: "dashboardPrint",
                                    files: [
                                      'wst-dashboards/views/style.css',
                                      'wst-dashboards/directives/dashWidgetBand/dashWidgetBand.js',
                                      'wst-dashboards/directives/dashWidget/dashWidget.js',
                                      'wst-dashboards/directives/dashWidgetContainer/dashWidgetContainer.js',
                                      'wst-dashboards-print/views/dashboardPrint.css',
                                      'wst-dashboards-print/controllers/dashboards-print.js'
                                    ],
                                    serie: true
                                }
                            );
                        }
                    }
        });

});
