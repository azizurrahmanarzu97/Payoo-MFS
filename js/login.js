// Login button functionality

document.getElementById('loginButton').addEventListener('click', function (e) {
    e.preventDefault();
    const mobileNumber = 123456789;
    const pinNumber = 1234;

    // get mobile number input
    const mobileNumberValue = document.getElementById('mobile-number').value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue);

    // get pin number input
    const pinNumberValue = document.getElementById('pin-number').value;
    const pinNumberValueConverted = parseInt(pinNumberValue);

    console.log('Mobile Number:', mobileNumberValueConverted);
    console.log('Pin Number:', pinNumberValueConverted);


    // Login information validation logic
    if (mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber) {
        // redirect to home page
        window.location.href = "./home.html";
    } 
    else if (mobileNumberValueConverted !== mobileNumber) {

        alert('Write Your Mobile Number');
    } 
    else if (pinNumberValueConverted !== pinNumber) {

        alert('Write your Pin Number');
    } 
    else {

        alert('Invalid credentials');
    }
});