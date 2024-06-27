function inputValue(value: string | number) {
    console.log(value);
}

inputValue(102)

function checkButton(element: "enable" | "disable") {
    if (element === "enable") {
        console.log("your element is enable");
    } else if (element === "disable") {
        console.log("your element is disable");
    }

}

checkButton("enable")