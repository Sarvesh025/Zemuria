# showToast Function

The `showToast` function is responsible for displaying a toast message on the webpage. It takes two parameters: `type` and `message`. The `type` parameter determines the style of the toast message, and the `message` parameter contains the text to be displayed.

Here's a breakdown of the function:

1. Retrieve the `toast` element from the DOM using `document.getElementById('toast')`.
2. Create a new `div` element to hold the toast message using `document.createElement('div')`.
3. Set the class of the new `div` element to `toast` and the `type` of the toast message using `toastMsg.className = \`toast ${type} show\``.
4. Set the text content of the new `div` element to the `message` parameter using `toastMsg.textContent = message;`.
5. Append the new `div` element to the `toast` element using `toast.appendChild(toastMsg);`.
6. After 2 seconds, remove the `show` class from the `div` element using `toastMsg.classList.remove('show');`.
7. After an additional 200 milliseconds, remove the `div` element from the `toast` element using `toast.removeChild(toastMsg);`.

This function is designed to display a toast message for a short duration before automatically removing it from the webpage.