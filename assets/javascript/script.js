const topics = ["animals", "food", "marijuana"]


for (let i = 0; i < topics.length; i++ ) {
    $("<input/>").attr({type: "button", value: topics[i]}).appendTo("#btndiv");
}