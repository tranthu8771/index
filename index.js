$(document).ready(function () {
    "use strict";
    console.log("Hello, World!");
    let data = new Object();

    function buttonSelectTicketClick(nutSo) {
        if (nutSo === 1) {
            //  data.ticketType = "Standard";
            data.MerchType = "Rose"
            data.price = "300.000";
        } else if (nutSo === 2) {
            data.MerchType = "Lili"
            data.price = "300.000";
        } else if (nutSo === 3) {
            data.MerchType = "Tulip"
            data.price = "300.000";
        }
        console.log(data)
    }



    $("#buton1").on("click", function () {
        console.log("Button 1 clicked!");
        $(this).css({
            "background-color": "#FFCC99",
            color: "black",
        });
        $("#buton2").removeAttr("style");
        $("#buton3").removeAttr("style");
        buttonSelectTicketClick(1)
    });
    $("#buton2").on("click", function () {
        console.log("Button 2 clicked!");
        $(this).css({
            "background-color": "#FFCC99",
            color: "black",
        });
        $("#buton1").removeAttr("style");
        $("#buton3").removeAttr("style");
        buttonSelectTicketClick(2)
    });
    $("#buton3").on("click", function () {
        console.log("Button 3 clicked!");
        $(this).css({
            "background-color": "#FFCC99",
            color: "black",
        });
        $("#buton2").removeAttr("style");
        $("#buton1").removeAttr("style");
        buttonSelectTicketClick(3)
    });
    $("#buttonsubmit").on("click", function (event) {
        event.preventDefault();
        data.name = $("#inpfullname").val();
        data.email = $("#inpemail").val();
        data.count = $("inpsl").val();
        console.log(data);
        callAPISendata(data);
    });
    function callAPISendata(data) {
        let formData = new FormData();
        formData.append("email", data.email);
        formData.append("fullName", data.fullName);
        formData.append("ticketType", data.ticketType);
        formData.append("price", data.price);
        formData.append("count", data.count);

        const scriptURL =
            "https://script.google.com/macros/s/AKfycby37fnqsFQ-GL8kH9f4ezzufWVM22fd4ehauYcQ1YgExrS_BeyVnf4lr76IuapS1AGw/exec";
        $.ajax({
            url: scriptURL,
            type: "POST",
            data: formData,
            processData: false, // Important: prevent jQuery from converting formData to query string
            contentType: false, // Important: let browser set content type (multipart/form-data)
            success: function (response) {
                alert(
                    "Cảm ơn bạn đã đăng ký vé tham gia sự kiện của chúng tôi. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất."
                );
                // responseMessage
                $("form").trigger("reset");
                $("#button1").removeAttr("style");
                $("#button2").removeAttr("style");
                $("#button3").removeAttr("style");
            },
            error: function (xhr, status, error) {
                console.error("Error:", error);
            },
        });
    }
});