import $ from "jquery";

export function doGet(url,doSuccess,doError) {
    $.ajax({
            url: url,
            type:'get',
            dataType:'json',
            async: false,
            xhrFields: {
                //携带cookies
                withCredentials: true
            },
            crossDomain: true,
            success:(data)=>{
                doSuccess(data);
            },
            error:()=>{
                doError();
            }
        }
    );
}

export function doPost(url,data,doSuccess,doError) {
    $.ajax({
            url: url,
            type:'post',
            dataType:'json',
            data:data,
            async: false,
            xhrFields: {
                //携带cookies
                withCredentials: true
            },
            crossDomain: true,
            success:(data)=>{
                doSuccess(data);
            },
            error:()=>{
                doError();
            }
        }
    );
}