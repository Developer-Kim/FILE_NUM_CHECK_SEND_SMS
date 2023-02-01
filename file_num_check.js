const axios = require('axios').default;
const fs = require('fs');
var dir = "";
const pms_arr = ['/home/LLTJEPMS/RCV', '/home/LLTSEPMS/RCV', '/home/LLTSGPMS/RCV', '/home/LLTULPMS/RCV', '/home/LLTSBPMS/RCV', '/home/LLTBUPMS/RCV', '/home/LLTWOPMS/RCV', '/home/LLTGRPMS/RCV', '/home/LLTJCPMS/RCV', '/home/LLTUCPMS/RCV', '/home/LLTDJPMS/RCV', '/home/LLTGAPMS/RCV', '/home/LLTMAPMS/RCV', '/home/LLTMCPMS/RCV', '/home/LLTL7PMS/RCV', '/home/LL7GNPMS/RCV', '/home/LL7HDPMS/RCV'];
const pos_arr = ['/home/LLTSGPOS/RCV', '/home/LLTSBPOS/RCV', '/home/LLTSEPOS/RCV', '/home/LLTWOPOS/RCV', '/home/LLTBUPOS/RCV'];

// PMS CEHCK START
pms_arr.forEach(dir => {
    console.log("경로 : " + dir);
    let filelist = fs.readdirSync(dir);
    var file_count = 0;
    for (var i in filelist) {
        var stats = fs.statSync(dir + '/' + filelist[i]);
        var mtime = stats.mtime;
        var mtime_split = String(mtime).split(" 2023", 1); //파일 날짜 체크
        var today = String(new Date()).split(" 2023", 1); //현재 날짜 체크
        if (mtime_split[0] == today[0]) { //파일 날짜와 현재 날짜 비교
            file_count++;
        }
    }
    console.log("경로 : " + dir);
    console.log("파일개수 : " + file_count);
    if (file_count < 8) {
        var dir_split = [];
        dir_split = dir.split("/", 3);
        axios({
            method: 'post',
            url: 'https://sms.lottehotel.com/api/sms',
            data: [{
                "tran_Phone": "010-2383-7540",
                "tran_CallBack": "02-759-7090",
                "tran_MSG": "파일 개수 체크 필요 [" + dir_split[2] + "]",
                "mms_Subject": "파일 개수 체크 필요",
                "file_Type1": "",
                "file_Name1": ""
            }],
            headers: {
                'APIKey': 'LOTTEHOTELIS2018!',
                'Content-Type': 'application/json'
            }
        }).catch(error => {
            console.log(error);
        });
    }
});


// POS CEHCK START
pos_arr.forEach(dir => {
    console.log("경로 : " + dir);
    let filelist = fs.readdirSync(dir);
    var file_count = 0;
    for (var i in filelist) {
        var stats = fs.statSync(dir + '/' + filelist[i]);
        var mtime = stats.mtime;
        var mtime_split = String(mtime).split(" 2023", 1); //파일 날짜 체크
        var today = String(new Date()).split(" 2023", 1); //현재 날짜 체크
        if (mtime_split[0] == today[0]) { //파일 날짜와 현재 날짜 비교
            file_count++;
        }
    }
    console.log("경로 : " + dir);
    console.log("파일개수 : " + file_count);
    if (file_count < 5) {
        var dir_split = [];
        dir_split = dir.split("/", 3);
        axios({
            method: 'post',
            url: 'https://sms.lottehotel.com/api/sms',
            data: [{
                "tran_Phone": "010-2383-7540",
                "tran_CallBack": "02-759-7090",
                "tran_MSG": "파일 개수 체크 필요 [" + dir_split[2] + "]",
                "mms_Subject": "파일 개수 체크 필요",
                "file_Type1": "",
                "file_Name1": ""
            }],
            headers: {
                'APIKey': 'LOTTEHOTELIS2018!',
                'Content-Type': 'application/json'
            }
        }).catch(error => {
            console.log(error);
        });
    }
});


/*
// 동기식
pms_arr.forEach(dir => {
    console.log("경로 : " + dir);
    let filelist = fs.readdirSync(dir);
    var file_count = 0;
    for (var i in filelist) {
        var stats = fs.statSync(dir + '/' + filelist[i]);
        var mtime = stats.mtime;
        var mtime_split = String(mtime).split(" 2023", 1); //파일 날짜 체크
        var today = String(new Date()).split(" 2023", 1); //현재 날짜 체크
        if (mtime_split[0] == today[0]) { //파일 날짜와 현재 날짜 비교
            file_count++;
        }
    }
    console.log("경로 : " + dir);
    console.log("파일개수 : " + file_count);
    if (file_count < 8) {
        async function sendsms() {
            await axios({
                method: 'post',
                url: 'https://sms.lottehotel.com/api/sms',
                data: [{
                    "tran_Phone": "010-2383-7540",
                    "tran_CallBack": "02-759-7090",
                    "tran_MSG": "파일 개수 체크 필요 [" + dir + "]",
                    "mms_Subject": "파일 개수 체크 필요",
                    "file_Type1": "",
                    "file_Name1": ""
                }],
                headers: {
                    'APIKey': 'LOTTEHOTELIS2018!',
                    'Content-Type': 'application/json'
                }
            }).catch(error => {
                console.log(error);
            });
        }
        sendsms();
    }
});
*/