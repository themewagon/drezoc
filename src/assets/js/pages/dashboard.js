/**
* Theme: Drezoc - Tailwind CSS 3 Admin Layout & UI Kit Template
* Author: Unifato
* Module/App: dashboard js
*/


"use strict";


// first chart
var options = {
    series: [{
        name: "Total Order",
        data: [4, 10, 25, 12, 25, 18, 40, 22, 7]
    }],
    chart: {
        height: 65,
        type: 'area',
        sparkline: {
            enabled: true
        },
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2,
        curve: 'smooth'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            gradientToColors: ['#2e7ce4'],
            shadeIntensity: 1,
            type: 'vertical',
            opacityFrom: 0.75,
            opacityTo: 0.1,
        }
    },
    colors: ["#2e7ce4"],
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function () {
                    return "";
                }
            }
        },
        marker: {
            show: false
        }
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    }
};

var chart = new ApexCharts(document.querySelector("#total-order"), options);
chart.render();



//  second chart
var options = {
    series: [{
        name: "Total Sale",
        data: [35, 65, 47, 35, 44, 32, 27, 54, 44, 61]
    }],
    chart: {
        //width:150,
        height: 65,
        type: 'area',
        sparkline: {
            enabled: !0
        },
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 1.5,
        curve: "smooth"
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            gradientToColors: ['#627898'],
            shadeIntensity: 1,
            type: 'vertical',
            opacityFrom: 0.75,
            opacityTo: 0.1,
        }
    },
    colors: ["#627898"],
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 3,
            columnWidth: '48%',
        }
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (e) {
                    return ""
                }
            }
        },
        marker: {
            show: false
        }
    },

    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
};

var chart = new ApexCharts(document.querySelector("#total-sale"), options);
chart.render();


// 

var options = {
    series: [{
        name: "Total Visits",
        data: [4, 10, 25, 12, 25, 18, 40, 22, 7]
    }],
    chart: {
        height: 65,
        type: 'area',
        sparkline: {
            enabled: true
        },
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2,
        curve: 'smooth'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            gradientToColors: ['#f1bf43'],
            shadeIntensity: 1,
            type: 'vertical',
            opacityFrom: 0.75,
            opacityTo: 0.1,
        }
    },
    colors: ["#f1bf43"],
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function () {
                    return "";
                }
            }
        },
        marker: {
            show: false
        }
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    }
};

var chart = new ApexCharts(document.querySelector("#total-visits"), options);
chart.render();


var options = {
    series: [{
        name: "Total Visits",
        data: [4, 10, 25, 12, 25, 18, 40, 22, 7]
    }],
    chart: {
        height: 65,
        type: 'area',
        sparkline: {
            enabled: true
        },
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2,
        curve: 'smooth'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            gradientToColors: ['#df3554'],
            shadeIntensity: 1,
            type: 'vertical',
            opacityFrom: 0.75,
            opacityTo: 0.1,
        }
    },
    colors: ["#df3554"],
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function () {
                    return "";
                }
            }
        },
        marker: {
            show: false
        }
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    }
};

var chart = new ApexCharts(document.querySelector("#chart4"), options);
chart.render();

$(function () {
    'use strict';
    if ($("#morris-bar-example").length) {
        Morris.Bar({
            element: 'morris-bar-example',
            barColors: ['#2e7ce4', '#00c2b2'],
            data: [
                {
                    y: '2010',
                    a: 80,
                    b: 100
                },
                {
                    y: '2011',
                    a: 110,
                    b: 130
                },
                {
                    y: '2012',
                    a: 90,
                    b: 110
                },
                {
                    y: '2013',
                    a: 80,
                    b: 100
                },
                {
                    y: '2014',
                    a: 110,
                    b: 130
                },
                {
                    y: '2015',
                    a: 90,
                    b: 110
                },
                {
                    y: '2016',
                    a: 120,
                    b: 140
                },
                {
                    y: '2017',
                    a: 110,
                    b: 125
                },
                {
                    y: '2018',
                    a: 170,
                    b: 190
                },
                {
                    y: '2019',
                    a: 120,
                    b: 140
                }
            ],
            xkey: 'y',
            ykeys: ['a', 'b'],
            hideHover: 'auto',
            gridLineColor: '#eef0f2',
            resize: true,
            barSizeRatio: 0.4,
            labels: ['iPhone 8', 'Samsung Gallexy']
        });
    }
    if ($("#morris-donut-example").length) {
        Morris.Donut({
            element: 'morris-donut-example',
            resize: true,
            colors: ['#2e7ce4', '#00c2b2', '#df3554'],
            data: [{
                label: "Samsung Company",
                value: 12
            },
            {
                label: "Apple Company",
                value: 30
            },
            {
                label: "Vivo Mobiles",
                value: 20
            }
            ]
        });
    }
});
