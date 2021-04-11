/**
 * Created by Administrator on 2017/5/17.
 */

$(function(){
    // index();
    $(".index_nav ul li").each(function(index){
        $(this).click(function(){
            $(this).addClass("nav_active").siblings().removeClass("nav_active");
            $(".index_tabs .inner").eq(index).fadeIn().siblings("div").stop().hide();
            if(index==1){
                yingXiao();
            }else if(index==2){
                shouRu();
            }else if(index==3){
                AnQuan();
            }else if(index==4){
                user();
            }else if(index==5){
                manage();
            }
        })
    });
    $(".tabs ul li").each(function(index){
       $(this).click(function(){
           $(".tabs ul li div .div").removeClass("tabs_active");
           $(this).find("div .div").addClass("tabs_active");
           $(".tabs_map>div").eq(index).fadeIn().siblings("div").stop().hide();
       })
   });
    $(".middle_top_bot ul li").each(function(){
        $(this).click(function(){
            $(".middle_top_bot ul li").removeClass("middle_top_bot_active");
            $(this).addClass("middle_top_bot_active");
        })
    });

});

function user(){
    //游客来源分析
    $(function(){
        var myChart = echarts.init($("#container1")[0]);
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                x: 'center',
                y:"16",
                data: [],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            series : [
                {
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    name: '',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {
                            value:324,
                            name:'省内游客',
                            itemStyle:{
                                normal:{
                                    color:"#2864ab"
                                }
                            }
                        },
                        {
                            value:186,
                            name:'北上广游客',
                            itemStyle:{
                                normal:{
                                    color:"#1afffd"
                                }
                            }
                        },
                        {
                            value:99,
                            name:'西南片区',
                            itemStyle:{
                                normal:{
                                    color:"#2e7cff"
                                }
                            }
                        }
                        ,
                        {
                            value:39,
                            name:'海外游客',
                            itemStyle:{
                                normal:{
                                    color:"#ffcb89"
                                }
                            }
                        }
                        ,
                        {
                            value:78,
                            name:'其他地区',
                            itemStyle:{
                                normal:{
                                    color:"#005ea1"
                                }
                            }
                        }

                    ]
                    //data:[
                    //    {value:90, name:'男性'},
                    //    {value:10, name:'女性',
                    //        itemStyle:{
                    //            normal:{
                    //                color:"#ff81cb"
                    //            }
                    //        }}
                    //]
                }
            ]
        };



        myChart.setOption(option);
    });

//游客性别分析
    $(function(){
        var myChart = echarts.init($("#container2")[0]);
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                y:"16",
                data: ['男性','女性'],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            series : [
                {
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    name: '',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:90, name:'男性',
                            itemStyle:{
                                normal:{
                                    color:"#2865aa"
                                }
                            }},
                        {value:10, name:'女性',
                            itemStyle:{
                                normal:{
                                    color:"#ff81cb"
                                }
                            }}
                    ]
                }
            ]
        };



        myChart.setOption(option);
    });

//游客年龄分析
    $(function(){
        var myChart = echarts.init($("#container3")[0]);
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                y:"16",
                data: ['少年','青年','中年','老年','其他'],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            series : [
                {
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    name: '',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:90, name:'少年',
                            itemStyle:{
                                normal:{
                                    color:"#45c0ff"
                                }
                            }},
                        {value:254, name:'青年',
                            itemStyle:{
                                normal:{
                                    color:"#e15828"
                                }
                            }},
                        {value:362, name:'中年',
                            itemStyle:{
                                normal:{
                                    color:"#005ea1"
                                }
                            }},
                        {value:152, name:'老年',
                            itemStyle:{
                                normal:{
                                    color:"#ff81cb"
                                }
                            }},
                        {value:86, name:'其他',
                            itemStyle:{
                                normal:{
                                    color:"#2e7cff"
                                }
                            }}
                    ]
                }
            ]
        };


        myChart.setOption(option);
    });

//散客——团队分析
    $(function(){
        var myChart = echarts.init(document.getElementById('container4'));
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            //legend: {
            //    data:['散客（万人）','团队（万人）'],
            //    y:'20',
            //    textStyle: { fontWeight: 'bold', color: '#a4a7ab' }
            //},
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }
            ],
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'散客（万人）',
                    type:'bar',
                    stack: '广告',
                    barWidth:'30',
                    data:[320, 332, 301, 334, 390, 330, 320, 332, 301, 334, 390, 330],
                    itemStyle:{
                        normal:{
                            color:"#1afffd"
                        }
                    }
                },
                {
                    name:'团队（万人）',
                    type:'bar',
                    stack: '广告',
                    data:[120, 132, 101, 134, 90, 230, 210,220, 182, 191, 234, 290],
                    itemStyle:{
                        normal:{
                            color:"#2e7cff"
                        }
                    }
                }
            ]
        };


        myChart.setOption(option);
    });

//天气游客数据分析
    $(function(){
        var myChart = echarts.init(document.getElementById('container5'));
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            //legend: {
            //    data:['散客人数（万人）','团队人数（万人）'],
            //    textStyle: { fontWeight: 'bold', color: '#a4a7ab' }
            //},
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['炎热', '晴朗', '阴天', '多风', '大雾', '雨天','雨雪'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'散客人数（万人）',
                    type:'bar',
                    data:[20, 15, 15, 16, 18, 15, 10,26,30],
                    itemStyle:{
                        normal:{
                            color:"#2e7cff"
                        }
                    }
                },
                {
                    name:'团队人数（万人）',
                    type:'bar',
                    stack: '广告',
                    data:[20, 35, 50, 66, 84, 99, 109,80,70],
                    itemStyle:{
                        normal:{
                            color:"#0ad5ff"
                        }
                    }
                }
            ]
        };


        myChart.setOption(option);
    });

//游客出行交通方式分析
    $(function(){
        var myChart = echarts.init($("#container6")[0]);
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data:['汽车','火车','飞机','自驾游','公共交通','其他'],

                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'游客数量（万人）',
                    type:'bar',
                    barWidth:'30',
                    data:[5, 9, 10, 7, 6, 3, 8, 4,6, 7, 3, 3, 1],
                    itemStyle: {
                        normal: {
                            color:"#0aff6c"
                        }
                    }

                }
            ]
        };
        myChart.setOption(option);
    });

    //不同时间段入园情况
    $(function(){
        var myChart = echarts.init($("#container9")[0]);
        var option = {
            tooltip: {   //提示框，鼠标悬浮交互时的信息提示
                show: true,
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            legend: {
                data: [],
                orient: 'vertical',
                textStyle: { fontWeight: 'bold', color: '#a4a7ab' }
            },

            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['8:00-10:00', '10:00-12:00', '12:00-14:00', '14:00-16:00', '16:00-18:00', '18:00-20:00'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        //rotate:20,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }

            ],
            yAxis: [
                {
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '客流量（人）',
                    type: 'line',
                    stack: '客流量',
                    data: [1200, 1322, 1401, 1046, 1499, 820],
                    itemStyle: {
                        normal: {
                            color: '#02bcbc'
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
    });

//不同月份游客数量情况
    $(function(){
        var myChart = echarts.init($("#container10")[0]);
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],

                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'游客数量（万人）',
                    type:'bar',
                    barWidth:'30',
                    data:[5, 9, 10, 7, 6, 3, 8, 4,6, 7, 3, 3, 1],
                    itemStyle: {
                        normal: {
                            color:"#269fec"
                        }
                    }

                }
            ]
        };
        myChart.setOption(option);
    });

//不同月份游客走势情况
    $(function(){
        var myChart = echarts.init(document.getElementById('container11'));
        var option = {
            tooltip : {
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }

                }
            ],
            series : [
                {
                    name:'散客',
                    type:'line',
                    stack: '人',
                    data:[120, 132, 101, 134, 90, 230, 210,230,245,256,278,300],
                    itemStyle: {
                        normal: {
                            color:"#e15828"
                        }
                    }
                },
                {
                    name:'团队',
                    type:'line',
                    stack: '人',
                    data:[220, 182, 191, 234, 290, 330, 310,230,245,256,278,300],
                    itemStyle: {
                        normal: {
                            color:"#2e7cff"
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });

//出行方式排行
    $(function(){
        var myChart = echarts.init($("#container12")[0]);
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            xAxis:  {
                type: 'value',
                x:'180',
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab'
                    }
                }
            },
            yAxis: {
                type: 'category',
                data: ['其他','飞机','火车','自驾游','长途皮车'],
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab'
                    }
                }
            },
            series: [
                {
                    name: '出行人数（人）',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [9900, 12350, 42563, 52364, 63524, 78224, 89254],
                    itemStyle: {
                        normal: {
                            color:"#ff7d0a"
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });

}
function manage(){

//工作人员性别分析
    $(function(){
        var myChart = echarts.init($("#userContainerSex")[0]);
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                y:"16",
                data: ['男性','女性'],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            series : [
                {
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    name: '',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:90, name:'男性',
                            itemStyle:{
                                normal:{
                                    color:"#2865aa"
                                }
                            }},
                        {value:10, name:'女性',
                            itemStyle:{
                                normal:{
                                    color:"#ff81cb"
                                }
                            }}
                    ]
                }
            ]
        };



        myChart.setOption(option);
    });

//工作人员来源分析
    $(function(){
        var myChart = echarts.init($("#userContainerManage")[0]);
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                x: 'center',
                y:"16",
                data:['安保部', '售票部', '保洁部', '后勤部', '指导部', '急救部'],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            series : [
                {
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    name: '',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {
                            value:324,
                            name:'安保部',
                            itemStyle:{
                                normal:{
                                    color:"#1afffd"
                                }
                            }
                        },
                        {
                            value:186,
                            name:'售票部',
                            itemStyle:{
                                normal:{
                                    color:"#2e7cff"
                                }
                            }
                        },
                        {
                            value:99,
                            name:'保洁部',
                            itemStyle:{
                                normal:{
                                    color:"#ffcb89"
                                }
                            }
                        }
                        ,
                        {
                            value:39,
                            name:'后勤部',
                            itemStyle:{
                                normal:{
                                    color:"#005ea1"
                                }
                            }
                        }
                        ,
                        {
                            value:78,
                            name:'指导部',
                            itemStyle:{
                                normal:{
                                    color:"#0ad5ff"
                                }
                            }
                        },
                        {
                            value:78,
                            name:'急救部',
                            itemStyle:{
                                normal:{
                                    color:"#feb602"
                                }
                            }
                        }

                    ]
                    //data:[
                    //    {value:90, name:'男性',
                    //        itemStyle:{
                    //            normal:{
                    //                color:"#2865aa"
                    //            }
                    //        }},
                    //    {value:10, name:'女性',
                    //        itemStyle:{
                    //            normal:{
                    //                color:"#ff81cb"
                    //            }
                    //        }}
                    //]
                }
            ]
        };



        myChart.setOption(option);
    });

//工作人员年龄分析
    $(function(){
        var myChart = echarts.init($("#userContainerAge")[0]);
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                y:"16",
                data: ['少年','青年','中年','老年','其他'],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            series : [
                {
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    name: '',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:90, name:'少年',
                            itemStyle:{
                                normal:{
                                    color:"#0ad5ff"
                                }
                            }},
                        {value:254, name:'青年',
                            itemStyle:{
                                normal:{
                                    color:"#005ea1"
                                }
                            }},
                        {value:362, name:'中年',
                            itemStyle:{
                                normal:{
                                    color:"#ffcb89"
                                }
                            }},
                        {value:152, name:'老年',
                            itemStyle:{
                                normal:{
                                    color:"#2e7cff"
                                }
                            }},
                        {value:86, name:'其他',
                            itemStyle:{
                                normal:{
                                    color:"#1afffd"
                                }
                            }}
                    ]
                }
            ]
        };


        myChart.setOption(option);
    });


//景区个部门出勤情况分析
    $(function(){
        var myChart = echarts.init($("#userContainerAttendance")[0]);
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data:['安保部', '售票部', '保洁部', '后勤部', '指导部', '急救部'],

                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'出勤率（%）',
                    type:'bar',
                    barWidth:'30',
                    data:[76, 56, 39, 77, 86, 95, 58, 4,6, 7, 3, 3, 1],
                    itemStyle: {
                        normal: {
                            color:"#1afffd"
                        }
                    }

                }
            ]
        };
        myChart.setOption(option);
    });

//个人出勤率排行
    $(function(){
        var myChart = echarts.init($("#userContainerPersonal")[0]);
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            xAxis:  {
                type: 'value',
                x:'180',
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab'
                    }
                }
            },
            yAxis: {
                type: 'category',
                data: ['陈杰','李进','张佳倩','孙林','李杰'],
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab'
                    }
                }
            },
            series: [
                {
                    name: '出勤率（%）',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [60, 72, 85, 96, 99],
                    itemStyle: {
                        normal: {
                            color:"#45c0ff"
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });

//不同月份人员流动情况
    $(function(){
        var myChart = echarts.init(document.getElementById('userContainerFlow'));
        var option = {
            tooltip : {
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }

                }
            ],
            series : [
                {
                    name:'景区工作人员',
                    type:'line',
                    stack: '人',
                    data:[120, 132, 101, 134, 90, 230, 210,230,245,256,278,300],
                    itemStyle: {
                        normal: {
                            color:"#1afffd"
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });

//景区个部门违规操作分析
    $(function(){
        var myChart = echarts.init($("#userContainerIllegal")[0]);
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data:['安保部', '售票部', '保洁部', '后勤部', '指导部', '急救部'],

                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'违规次数（次）',
                    type:'bar',
                    barWidth:'30',
                    data:[124, 522, 235, 365, 214, 265, 58, 4,6, 7, 3, 3, 1],
                    itemStyle: {
                        normal: {
                            color:"#269fec"
                        }
                    }

                }
            ]
        };
        myChart.setOption(option);
    });

//不同月份各部门被投诉分析
    $(function(){
        var myChart = echarts.init(document.getElementById('userContainerComplaint'));
        var option = {
            tooltip : {
                trigger: 'axis'
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }

                }
            ],
            series : [
                {
                    name:'安保部',
                    type:'line',
                    stack: '人',
                    data:[120, 132, 101, 134, 90, 230, 210,230,245,256,278,300],
                    itemStyle: {
                        normal: {
                            color:"#45c0ff"
                        }
                    }
                },
                {
                    name:'售票部',
                    type:'line',
                    stack: '人',
                    data:[220, 182, 191, 234, 290, 330, 310,230,245,256,278,300],
                    itemStyle: {
                        normal: {
                            color:"#0ad5ff"
                        }
                    }
                },
                {
                    name:'保洁部',
                    type:'line',
                    stack: '人',
                    data:[220, 182, 191, 234, 290, 330, 310,230,245,256,278,300],
                    itemStyle: {
                        normal: {
                            color:"#005ea1"
                        }
                    }
                },
                {
                    name:'后勤部',
                    type:'line',
                    stack: '人',
                    data:[220, 182, 191, 234, 290, 330, 310,230,245,256,278,300],
                    itemStyle: {
                        normal: {
                            color:"#ffcb89"
                        }
                    }
                },
                {
                    name:'指导部',
                    type:'line',
                    stack: '人',
                    data:[220, 182, 191, 234, 290, 330, 310,230,245,256,278,300],
                    itemStyle: {
                        normal: {
                            color:"#2e7cff"
                        }
                    }
                },
                {
                    name:'急救部',
                    type:'line',
                    stack: '人',
                    data:[220, 182, 191, 234, 290, 330, 310,230,245,256,278,300],
                    itemStyle: {
                        normal: {
                            color:"#1afffd"
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });

//员工奖惩分析
    $(function(){
        var myChart = echarts.init(document.getElementById('userContainerPrize'));
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            //legend: {
            //    data:['散客人数（万人）','团队人数（万人）'],
            //    textStyle: { fontWeight: 'bold', color: '#a4a7ab' }
            //},
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['李杰', '赵一鸣', '陈爽', '李焕', '周伟', '张杰','王维'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'center'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#a4a7ab'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'奖励次数（次）',
                    type:'bar',
                    data:[5, 7, 4, 1, 2, 9, 6,5,7],
                    itemStyle:{
                        normal:{
                            color:"#1afffd"
                        }
                    }
                },
                {
                    name:'惩罚次数（次）',
                    type:'bar',
                    stack: '广告',
                    data:[2, 1, 4, 9, 7, 5, 2,7,6],
                    itemStyle:{
                        normal:{
                            color:"#2e7cff"
                        }
                    }
                }
            ]
        };


        myChart.setOption(option);
    });

//设备故障原因分析
    $(function(){
        var myChart = echarts.init(document.getElementById('userContainerReason'));
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['人为破坏','年久失修','自然因素','设备过期','其他'],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            series : [
                {
                    name: '故障原因',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'人为破坏',
                            itemStyle:{
                                normal:{
                                    color:"#1afffd"
                                }
                            }},
                        {value:310, name:'年久失修',
                            itemStyle:{
                                normal:{
                                    color:"#2e7cff"
                                }
                            }},
                        {value:234, name:'自然因素',
                            itemStyle:{
                                normal:{
                                    color:"#ffcb89"
                                }
                            }},
                        {value:135, name:'设备过期',
                            itemStyle:{
                                normal:{
                                    color:"#005ea1"
                                }
                            }},
                        {value:148, name:'其他',
                            itemStyle:{
                                normal:{
                                    color:"#45c0ff"
                                }
                            }}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });

//故障处理情况分析
    $(function(){
        var myChart = echarts.init(document.getElementById('userContainerHandle'));
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                data: ['已处理','未处理','超期未处理','其他'],
                textStyle:{
                    color:"#e9ebee"
                }
            },
            series : [
                {
                    name: '处理情况',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'已处理',
                            itemStyle:{
                                normal:{
                                    color:"#2e7cff"
                                }
                            }},
                        {value:310, name:'未处理',
                            itemStyle:{
                                normal:{
                                    color:"#ffcb89"
                                }
                            }},
                        {value:234, name:'超期未处理',
                            itemStyle:{
                                normal:{
                                    color:"#2864ab"
                                }
                            }},
                        {value:148, name:'其他',
                            itemStyle:{
                                normal:{
                                    color:"#e15828"
                                }
                            }}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });
}

function yingXiao(){
// 第二页数据
// 24小时购买时间分析
    $(function(){
        var myChart = echarts.init($("#orientation")[0]);
        $.get('/orientationGroupCount').done(function (data) {
            myChart.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: []
                },
                series: [
                    {
                        name: '房屋朝向',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data:data,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            });
        });
    });

    $(function(){
        var myChart = echarts.init($("#renovation")[0]);
        $.get('/renovationGroupCount').done(function (data) {
            myChart.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: []
                },
                series: [
                    {
                        name: '房屋朝向',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data:data,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            });
        });
    });

    $(function(){
        var myChart = echarts.init($("#parking")[0]);
        $.get('/parkingGroupCount').done(function (data) {
            myChart.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: []
                },
                series: [
                    {
                        name: '房屋朝向',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data:data,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            });
        });
    });

    $(function(){
        var myChart = echarts.init($("#floor")[0]);
        $.get('/floorGroupCount').done(function (data) {
            myChart.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: []
                },
                series: [
                    {
                        name: '房屋朝向',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data:data,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            });
        });
    });

    $(function(){
        var myChart = echarts.init($("#lift")[0]);
        $.get('/liftGroupCount').done(function (data) {
            myChart.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: []
                },
                series: [
                    {
                        name: '房屋朝向',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data:data,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            });
        });
    });
}

function shouRu(){

    $(function(){
        var myChart = echarts.init($("#water")[0]);
        $.get('/waterGroupCount').done(function (data) {
            myChart.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 10,
                    data: []
                },
                series: [
                    {
                        name: '房屋数量',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data:data,
                    }
                ]
            });
        });
    });

    $(function(){
        var myChart = echarts.init($("#kwh")[0]);
        $.get('/kwhGroupCount').done(function (data) {
            myChart.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 10,
                    data: []
                },
                series: [
                    {
                        name: '房屋数量',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data:data,
                    }
                ]
            });
        });
    });

    $(function(){
        var myChart = echarts.init($("#gas")[0]);
        $.get('/gasGroupCount').done(function (data) {
            myChart.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 10,
                    data: []
                },
                series: [
                    {
                        name: '房屋数量',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data:data,
                    }
                ]
            });
        });
    });

    $(function(){
        var myChart = echarts.init($("#heating")[0]);
        $.get('/heatingGroupCount').done(function (data) {
            myChart.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 10,
                    data: []
                },
                series: [
                    {
                        name: '房屋数量',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data:data,
                    }
                ]
            });
        });
    });
}

function AnQuan(){
    // 安全分析
// 事件趋势分析
    $(function(){
        var myChart = echarts.init($("#shijian01")[0]);
        option = {

            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c}"
            },
            legend: {
                x: 'center',
                data: ["案件趋势分析"],
                textStyle:{
                    color:"#e9ebee"

                }
            },
            xAxis: [
                {
                    type: "category",
                    name: "x",
                    splitLine:{show: false},
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                }
            ],
            grid:{
                borderWidth:0
            },
            yAxis: [
                {
                    type: "log",
                    name: "y",
                    splitLine:{show: false},
                    data : ['10','30','50','70','90','110','120','130','150','170','190','210','250'],
                    axisLabel : {

                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                }
            ],

            calculable: false,
            series: [
                {
                    name: "案件趋势分析",
                    type: "line",
                    data:[26, 59, 90, 26, 28, 70, 175, 182, 48, 188, 60, 23],
                    itemStyle: {
                        normal: {
                            color:"#0aabff"
                        }
                    }

                }

            ]
        };


        myChart.setOption(option);
    });
// 事件级别分析
    $(function(){
        var myChart = echarts.init($("#shijian02")[0]);
        var placeHoledStyle = {
            normal:{
                barBorderColor:'rgba(0,0,0,0)',
                color:'rgba(0,0,0,0)'
            },
            emphasis:{
                barBorderColor:'rgba(0,0,0,0)',
                color:'rgba(0,0,0,0)'
            }
        };
        var dataStyle = {
            normal: {
                label : {
                    show: true,
                    position: 'insideLeft',
                    formatter: '{c}%'
                }
            }
        };
        option = {

            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter : '{b}<br/>{a0}:{c0}%<br/>{a2}:{c2}%<br/>{a4}:{c4}%<br/>{a6}:{c6}%'
            },
            legend: {
                y: 55,
                data:['极重', '严重','一般', '轻微'],
                textStyle:{
                    color:"#fff"

                }
            },

            grid: {
                y: 80,
                y2: 30
            },
            xAxis : [
                {
                    type : 'value',
                    position: 'top',
                    splitLine: {show: false},
                    axisLabel: {show: false}
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    splitLine: {show: false},
                    axisLabel : {

                        textStyle: {
                            color: '#fff',
                            align: 'right'
                        }
                    },
                    data : ['医疗事件', '消防事件', '民事事件', '刑事事件']
                }
            ],
            series : [
                {
                    name:'极重',
                    type:'bar',
                    stack: '总量',
                    data:[38, 50, 33, 72],
                    itemStyle: {
                        normal: {
                            color:"#1afffd"
                        }
                    }
                },
                {
                    name:'极重',
                    type:'bar',
                    stack: '总量',
                    itemStyle: placeHoledStyle,
                    data:[62, 50, 67, 28],
                    itemStyle: {
                        normal: {
                            color:"#2e7cff"
                        }
                    }
                },
                {
                    name:'严重',
                    type:'bar',
                    stack: '总量',
                    itemStyle : dataStyle,
                    data:[61, 41, 42, 30],
                    itemStyle: {
                        normal: {
                            color:"#ffcb89"
                        }
                    }
                },
                {
                    name:'严重',
                    type:'bar',
                    stack: '总量',
                    itemStyle: placeHoledStyle,
                    data:[39, 59, 58, 70],
                    itemStyle: {
                        normal: {
                            color:"#005ea1"
                        }
                    }
                },
                {
                    name:'一般',
                    type:'bar',
                    stack: '总量',
                    itemStyle : dataStyle,
                    data:[37, 35, 44, 60],
                    itemStyle: {
                        normal: {
                            color:"#0ad5ff"
                        }
                    }
                },
                {
                    name:'一般',
                    type:'bar',
                    stack: '总量',
                    itemStyle: placeHoledStyle,
                    data:[63, 65, 56, 40],
                    itemStyle: {
                        normal: {
                            color:"#e15828"
                        }
                    }
                },
                {
                    name:'轻微',
                    type:'bar',
                    stack: '总量',
                    itemStyle : dataStyle,
                    data:[71, 50, 31, 39],
                    itemStyle: {
                        normal: {
                            color:"#ff81cb"
                        }
                    }
                },
                {
                    name:'轻微',
                    type:'bar',
                    stack: '总量',
                    itemStyle: placeHoledStyle,
                    data:[29, 50, 69, 61],
                    itemStyle: {
                        normal: {
                            color:"#feb602"
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });
// 事件类型分析
    $(function(){
        var myChart = echarts.init($("#shijian03")[0]);
        var labelTop = {
            normal : {
                label : {
                    show : true,
                    position : 'center',
                    formatter : '{b}',
                    textStyle: {
                        baseline : 'bottom'
                    }
                },
                labelLine : {
                    show : false
                }
            }
        };
        var labelFromatter = {
            normal : {
                label : {
                    formatter : function (params){
                        return 100 - params.value + '%'
                    },
                    textStyle: {
                        baseline : 'top'
                    }
                }
            },
        }
        var labelBottom = {
            normal : {
                color: '#111b21',
                label : {
                    show : true,
                    position : 'center'
                },
                labelLine : {
                    show : false
                }
            },
            emphasis: {
                color: 'rgba(0,0,0,0)'
            }
        };
        var radius = [40, 55];
        option = {
            legend: {
                x : 'center',

                textStyle:{
                    color:"#fff"

                },
                data:[
                    '医疗','消防','民事','刑事','其它'

                ]
            },


            series : [
                {
                    type : 'pie',
                    center : ['10%', '30%'],
                    radius : radius,
                    x: '0%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'解决', value:46, itemStyle : labelBottom},
                        {name:'医疗', value:54,itemStyle : labelTop}
                    ],
                    itemStyle: {
                        normal: {
                            color:"#0ad5ff"
                        }
                    }
                },
                {
                    type : 'pie',
                    center : ['30%', '30%'],
                    radius : radius,
                    x:'20%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'解决', value:56, itemStyle : labelBottom},
                        {name:'消防', value:44,itemStyle : labelTop}
                    ],
                    itemStyle: {
                        normal: {
                            color:"#ffcb89"
                        }
                    }
                },
                {
                    type : 'pie',
                    center : ['50%', '30%'],
                    radius : radius,
                    x:'40%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'解决', value:65, itemStyle : labelBottom},
                        {name:'民事', value:35,itemStyle : labelTop}
                    ],
                    itemStyle: {
                        normal: {
                            color:"#2e7cff"
                        }
                    }
                },
                {
                    type : 'pie',
                    center : ['70%', '30%'],
                    radius : radius,
                    x:'60%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'解决', value:70, itemStyle : labelBottom},
                        {name:'刑事', value:30,itemStyle : labelTop}

                    ],
                    itemStyle: {
                        normal: {
                            color:"#4cffd3"
                        }
                    }
                },


                {
                    type : 'pie',
                    center : ['90%', '30%'],
                    radius : radius,
                    // for funnel
                    x:'80%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'解决', value:70, itemStyle : labelBottom},
                        {name:'其它', value:11,itemStyle : labelTop}
                    ],
                    itemStyle: {
                        normal: {
                            color:"#feb602"
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
    });
// 事发时间特征分析
    $(function(){
        var myChart = echarts.init($("#shijian04")[0]);
        option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['医疗事件', '消防事件','刑事','民事','其它'],
                textStyle:{
                    color:"#fff"

                },
            },

            calculable : false,
            xAxis : [
                {
                    type : 'value',
                    splitLine: {show: false},
                    axisLabel : {

                        textStyle: {
                            color: '#fff',
                            align: 'right'
                        }
                    },
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    splitLine: {show: false},
                    axisLabel : {

                        textStyle: {
                            color: '#fff',
                            align: 'right'
                        }
                    },
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
                }
            ],
            series : [
                {
                    name:'医疗事件',
                    type:'bar',
                    stack: '总量',
                    itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                    data: [12, 13, 10, 16, 19, 23, 21, 23, 20, 26, 27, 30,12, 12, 11, 14, 19, 23, 21, 20, 20, 25, 28, 30]
                    ,
                    itemStyle: {
                        normal: {
                            color:"#0ad5ff"
                        }
                    }
                },
                {
                    name:'消防事件',
                    type:'bar',
                    stack: '总量',
                    itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                    data: [1, 13, 0, 16, 19, 23, 21, 23, 20, 26, 27, 30,12, 12, 11, 14, 19, 23, 21, 20, 0, 25, 8, 30]
                    ,
                    itemStyle: {
                        normal: {
                            color:"#005ea1"
                        }
                    }
                },
                {
                    name:'刑事',
                    type:'bar',
                    stack: '总量',
                    itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                    data: [12, 13, 10, 16, 19, 3, 2, 3, 0, 6, 9, 30,12, 12, 11, 14, 1, 3, 1, 2, 0, 5, 2, 0]
                    ,
                    itemStyle: {
                        normal: {
                            color:"#ffcb89"
                        }
                    }
                },
                {
                    name:'民事',
                    type:'bar',
                    stack: '总量',
                    itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                    data: [2, 13, 10, 6, 19, 23, 21, 3, 20, 6, 7, 30,12, 12, 11, 14, 19, 3, 21, 0, 20, 5, 8, 0]
                    ,
                    itemStyle: {
                        normal: {
                            color:"#2e7cff"
                        }
                    }
                },
                {
                    name:'其它',
                    type:'bar',
                    stack: '总量',
                    itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                    data: [1, 3, 10, 6, 9, 3, 11, 3, 0, 6, 7, 0,2, 2, 1, 4, 9, 3, 1, 0, 0, 5, 8, 3]
                    ,
                    itemStyle: {
                        normal: {
                            color:"#1afffd"
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
    });
}


