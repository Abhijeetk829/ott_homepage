export function addressbar(inputFieldId, buttonId) {
    if (inputFieldId && buttonId) {
        const inputField = document.getElementById(inputFieldId);
        document.getElementById(buttonId).addEventListener('click', function() {
            const string = inputField.value;
            var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
            // web address
            if (res) {
                if (string.includes("https")) {
                    location.replace(string)
                }   else    {
                    location.replace(`//${string}`);
                }
            }
            
            // search term
            else
            {
                location.replace(`https://google.com/search?q=${string}`)
            }
        })
    }
}