/*************************************
项目名称：
下载地址：
更新日期：2024-01-07
脚本作者：@agui
使用声明：⚠️仅供参考，🈲转载与售卖！
**************************************

[rewrite_local]
^https:\/\/id\.captureone\.com\/api\/vip\/detail url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/qf.js

[mitm]
hostname = id.captureone.com
*************************************/


var anye = JSON.parse($response.body);
    anye.body.vipType = "VIP";
    anye.body.isVip = true;
$done({body: JSON.stringify(anye)});