(function (content) {
    let FullName = document.getElementById("FullName");
    let ContactNumber = document.getElementById("ContactNumber");
    let EmailAddress = document.getElementById("EmailAddress");
    let Message = document.getElementById("Message");


    function OutputFormDataToConsole() {
        console.log(`%c ---------------------------------------`, "color: black;");
        console.log(`%c Form Data`, "font-weight:bold; font-size: 16px; color: black;");
        console.log(`%c ---------------------------------------`, "color: black;");
        console.log(`%c Full Name     : ${FullName.value}`, "color: black;");
        console.log(`%c Contact Number: ${ContactNumber.value}`, "color: black;");
        console.log(`%c Email Address : ${EmailAddress.value}`, "color: black;");
        console.log(`%c Your Message  : ${Message.value}`, "color: black;");
        console.log(`%c ---------------------------------------`, "color: black;");

        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Form Properties`, "font-weight:bold; font-size: 16px; color: black;");
        console.log(`%c ---------------------------------------`, "color: black;");
        console.log(`%c Form Length     : ${document.forms[0].length}`, "color: black;");

        for (let index = 0; index < document.forms[0].length; index++) {
            console.log(`%c Form Element ${index}: ${document.forms[0].elements[index].value}`, "color: black;");

        }

    }

    function clearValidationMessages() {
        FullName.setCustomValidity("");
        ContactNumber.setCustomValidity("");
        EmailAddress.setCustomValidity("");
        Message.setCustomValidity("");
    }

    function setEventHandlersForFormElements() {

        for (const element of document.forms[0].elements) {
            if ((element.tagName === "INPUT") || (element.tagName === "TEXTAREA")) {
                element.addEventListener("input", function () {
                    element.setCustomValidity("");
                });
                element.addEventListener("invalid", function () {
                    switch(element.id) {
                        case "FullName":
                        element.setCustomValidity("You must enter an appropriate Full Name with at least 2 characters");
                        break;
                        case "ContactNumber":
                        element.setCustomValidity("You must enter a phone number with the pattern (###) ###-####");
                        break;
                        case "EmailAddress":
                        element.setCustomValidity("Your email address is not valid");
                        break;
                        case "Message":
                        element.setCustomValidity("You must enter a message");
                        break;
                        default:
                        element.setCustomValidity("This Field is Required");
                        break;
                    }
                    
                });
            }

        }
    }

    function ValidateForm() {
        setEventHandlersForFormElements();
    }


    function ContactContent() {
        clearValidationMessages();

        console.log("%c Contact Content Accessed...", "font-weight:bold; font-size: 20px;");


        let SendButton = document.getElementById("SendButton");
        SendButton.addEventListener("click", (event) => {

            if (!document.forms[0].checkValidity()) {
                OutputFormDataToConsole();
                ValidateForm();
            }


        });

    }
    content.ContactContent = ContactContent;

})(content || (content = {}))