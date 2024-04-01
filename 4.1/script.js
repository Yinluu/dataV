var chart1 = echarts.init(document.getElementById('chart1'));

var option1 = {
    title: {
        text: '不同学科学生活跃度对比',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    toolbox:{
        feature:{
            saveAsImage:{},//导出图片
            dataView:{},//数据视图
            restore:{},//重置
            dataZoom:{},//区域缩放
            magicType:{
                type:['bar','line']
            }//动态图表切换
        }
    },
    xAxis: {
        type: 'category',
        data: ['哲学', '经济学', '法学', '教育学', '文学', '历史学', '理学', '工学', '农学', '医学', '管理学']
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    series: [{
        name: '活跃度',
        type: 'bar',
        markPoint:{
            data:[
                {
                    type:'max',name:'最大值'
                },{
                    type:'min',name:'最小值'
                }
            ]
        },
        markLine:{
            data:[
                {
                    type:'average',name:'平均值'
                }
            ]
        },
        label:{
            show:true,
            rotate:60,
            position:'inside'
        },
        barWidth:'80%',
        data: [68, 85, 75, 80, 65, 70, 95, 88, 78, 92, 83],
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = [
                      '#43978F','#9EC4BE','#ABD0F1','#DCE9F4','#E3EDE0',
                       '#92B4C8','#F6C957','#FFB77F','#FBE8D5','#EEA599',
                       '#F19685'
                    ];
                    return colorList[params.dataIndex];
                },
            }
        },
    }]
};
chart1.setOption(option1);
var chart2 = echarts.init(document.getElementById('chart2'));
var option2 = {
    title: {
        text: '每周学习时长分布',
        left: 'center',
        textStyle: {
            color: '#333',
            fontSize: 20
        }
    },
    tooltip: {
        trigger: 'item',
        // 使用formatter属性自定义提示框的内容格式
        formatter: function(params) {
            // params是一个包含当前数据信息的对象
            var total = 0;
            option2.series[0].data.forEach(function(value) {
                total += value.value;
            });
            var percent = (params.value / total * 100).toFixed(2); // 计算百分比并保留两位小数
            return params.name + ': '  + percent + '%';
        }
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        textStyle: {
            color: '#666'
        }
    },
    series: [
        {
            name: '学习时长',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 235, name: '0-2小时'},
                {value: 274, name: '2-4小时'},
                {value: 310, name: '4-6小时'},
                {value: 335, name: '6-8小时'},
                {value: 400, name: '8小时以上'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
chart2.setOption(option2);

var chart3 = echarts.init(document.getElementById('chart3'));

var option3 = {
    title: {
        text: '不同时间段学习的人数对比'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['学习人数']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['早晨', '上午', '下午', '晚上', '深夜']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '学习人数',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [104, 196, 242, 317, 141]
        }
    ]
};

chart3.setOption(option3);



var chart4 = echarts.init(document.getElementById('chart4'));
var option4 = {
    title: {
        text: '讨论区活跃度对比'
    },
    tooltip: {},
    legend: {
        data: ['经济学', '理学', '工学',  '医学', '管理学']
    },
    radar: {
        // shape: 'circle',
        indicator: [
            { name: '提问', max: 100},
            { name: '回答', max: 100},
            { name: '点赞', max: 100},
            { name: '分享', max: 100},
            { name: '收藏', max: 100}
        ]
    },
    series: [{
        name: '讨论区活跃度',
        type: 'radar',
        data : [
            {
                value : [60, 73, 85, 40, 60],
                name : '理学'
            },
            {
                value : [66, 76, 86, 90, 70],
                name : '工学'
            },
            {
                value : [40, 53, 65, 70, 80],
                name : '医学'
            },
            {
                value : [70, 83, 95, 50, 70],
                name : '管理学'
            },
            {
                value : [61, 71, 81, 41, 61],
                name : '经济学'
            }
        ]
    }]
};
chart4.setOption(option4);
