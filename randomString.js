function generateRandomString(length) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|:;<>,.?/';
    var result = '';
    for (var i = 0; i < length; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}

// Generate a random string of approximately the right length
var randomString = generateRandomString(1450);  // Adjust this number as needed

// Get the element you want to fill with the string
var element = document.getElementById('magicText');

// Create a text node with the random string
var textNode = document.createTextNode(randomString);

// Append the text node to the element
element.appendChild(textNode);
