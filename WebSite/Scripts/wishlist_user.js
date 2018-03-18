let textfield = $("input#item_name");
let submit = $("button#submit");
let wl = $("table#wishlist");
let copy_btn = $("button#copy_link")


function clear_fields() {
    textfield.val("");
}

clear_fields();


$("document").ready(() => {

    wl.click((e) => {
        let id = e.originalEvent.target.id;
        let btn_str = "wl_bnt_";
        if (id.indexOf(btn_str) === 0) {
            if (confirm("Are you sure you would like to delete this item.")) {
                let i = + id.replace(btn_str, "");
                item = $("li#wl_item_" + i).text();
                console.log(item);
                $.post("/wl_post",
                    {
                        action: "delete_item",
                        item: item
                    },
                    function (data, status) {
                        if (data === "ok") {
                            location.reload(false);
                        } else {
                            alert(data)
                        }
                    });
            }
        }
    });

/*    copy_btn.click((e) => {

        let copyText = document.getElementById("u_link");
        copyText.select();
        document.execCommand("Copy");
        alert("Copied link.")
    });*/


    submit.click(() => {
        let item = textfield.val();
        if (item !== "") {
            $.post("/wl_post",
                {
                    item: item,
                    action: "add_item"
                },
                (data) => {
                    if (data === "ok") {
                        location.reload();
                    } else {
                        alert(data)
                    }
                }
            );
        }
    });
});