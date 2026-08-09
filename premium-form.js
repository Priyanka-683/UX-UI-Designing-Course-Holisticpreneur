document.addEventListener("DOMContentLoaded", () => {


    /* =========================
       ELEMENTS
    ========================= */

    const form =
        document.getElementById("ultraForm");

    const submitBtn =
        document.getElementById("submitBtn");

    const overlay =
        document.getElementById("successOverlay");

    const dateInput =
        document.getElementById("date");


    /* =========================
       PREVENT PAST DATES
    ========================= */

    if (dateInput) {

        const today =
            new Date()
                .toISOString()
                .split("T")[0];

        dateInput.min = today;

    }



    /* =========================
       FORM SUBMISSION
    ========================= */

    form.addEventListener("submit", async (e) => {

        e.preventDefault();


        /* SAVE ORIGINAL BUTTON */

        const originalButton =
            submitBtn.innerHTML;


        /* LOADING */

        submitBtn.innerHTML =
            "Sending Inquiry... ✨";

        submitBtn.disabled = true;


        try {


            /* =========================
               FORMSPREE
            ========================= */

            const response =
                await fetch(
                    "https://formspree.io/f/xanpwdjb",
                    {
                        method: "POST",

                        body:
                            new FormData(form),

                        headers: {
                            "Accept":
                                "application/json"
                        }
                    }
                );


            /* =========================
               SUCCESS
            ========================= */

            if (response.ok) {

                form.reset();

                overlay.style.display =
                    "flex";

                return;

            }


            /* =========================
               ERROR
            ========================= */

            const data =
                await response.json()
                .catch(() => null);


            if (
                data &&
                data.errors &&
                data.errors.length
            ) {

                alert(
                    data.errors[0].message
                );

            } else {

                alert(
                    "Submission failed. Please try again."
                );

            }


        }


        /* =========================
           CONNECTION ERROR
        ========================= */

        catch (error) {

            console.error(
                "Formspree Error:",
                error
            );

            alert(
                "Connection error. Please check your internet connection and try again."
            );

        }


        /* =========================
           RESTORE BUTTON
        ========================= */

        finally {

            submitBtn.innerHTML =
                originalButton;

            submitBtn.disabled =
                false;

        }

    });



    /* =========================
       ENROLLMENT POPUP
    ========================= */

    const names = [
        "Rahul",
        "Pooja",
        "Amit",
        "Sneha",
        "Vikram",
        "Anjali",
        "Arjun",
        "Neha",
        "Kiran",
        "Riya"
    ];


    const cities = [
        "Mumbai",
        "Pune",
        "Delhi",
        "Bangalore",
        "Ahmedabad",
        "Hyderabad",
        "Nashik"
    ];


    const popup =
        document.getElementById(
            "enrollment-popup"
        );


    const message =
        document.getElementById(
            "popup-message"
        );


    const initial =
        document.getElementById(
            "popup-initial"
        );


    function triggerNotification() {


        const randomName =
            names[
                Math.floor(
                    Math.random() *
                    names.length
                )
            ];


        const randomCity =
            cities[
                Math.floor(
                    Math.random() *
                    cities.length
                )
            ];


        initial.innerText =
            randomName.charAt(0);


        message.innerHTML =
            `<strong>${randomName}</strong> from ${randomCity} enrolled recently`;


        popup.classList.add("active");


        setTimeout(() => {

            popup.classList.remove(
                "active"
            );

        }, 6000);

    }


    /* FIRST POPUP */

    setTimeout(
        triggerNotification,
        4000
    );


    /* REPEAT */

    setInterval(
        triggerNotification,
        25000
    );

});