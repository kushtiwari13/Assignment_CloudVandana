function submitForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    if (!firstName || !lastName || !dob || !country || !gender || !profession || !email || !mobile) {
        alert("Please fill in all fields before submitting.");
        return;
    }

    const genderValue = gender.value;
    
    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate mobile number format (10 digits)
    const mobilePattern = /^\d{10}$/;
    if (!mobile.match(mobilePattern)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }


    const popupData = `
        <p><b>First Name:</b> ${firstName}</p>
        <p><b>Last Name:</b> ${lastName}</p>
        <p><b>Date of Birth:</b> ${dob}</p>
        <p><b>Country:</b> ${country}</p>
        <p><b>Gender:</b> ${genderValue}</p>
        <p><b>Profession:</b> ${profession}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mobile Number:</b> ${mobile}</p>
    `;

    document.getElementById("popup-data").innerHTML = popupData;
    document.getElementById("popup").style.display = "block";

    // Add an event listener to the close button in the popup
    document.querySelector('.close').addEventListener('click', function() {
        closePopup();
        resetForm(); // Reset the form when the popup is closed
    });
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
