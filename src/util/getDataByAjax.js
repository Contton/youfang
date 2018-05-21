import $ from "jquery";

export function doPost(url,doSuccess,doError) {
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