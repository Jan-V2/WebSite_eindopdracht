let textfield = $("input#item_name");
let submit = $("button#submit");
let wl = $("table#wishlist");


function clear_fields() {
    textfield.val("");
}

clear_fields();


$("document").ready(() => {

    wl.click((e) => {
        let id = e.originalEvent.target.id;
        let btn_str = "wl_bnt_";
        if (id.indexOf(btn_str) === 0) {
            let name = $("#guest_name").val();
            if (name === "") {
                alert("You have to fill in your name before you can pledge")
            }else{
                if (confirm("Are you sure you would like pledge this item.")) {
                    let i = + id.replace(btn_str, "");
                    item = $("li#wl_item_" + i).text();

                    let params = (new URL(document.location)).searchParams;
                    let wl_id = params.get("wl_id");

                    let data = {
                        action: "pledge",
                        item: item,
                        name: name,
                        wl_id: wl_id
                    }
                    console.log(data);
                    $.post("/wl_post",
                        data,
                        function (data, status) {
                            if (data === "ok") {
                                location.reload(true);
                            } else {
                                alert(data)
                            }
                        });
                }
            }
        }
    });


});