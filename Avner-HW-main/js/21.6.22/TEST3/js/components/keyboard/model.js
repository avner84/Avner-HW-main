var codeVerification = "";
var counter = 0;

async function getUser(userId, userPass) {
    var requestOptions = {
        method: "GET",
    };

    return fetch(
            `https://mira-webschool-80ba75.appdrag.site/api/auth/getUser\n\n?id=${userId}&pass=${userPass}`,
            requestOptions
        )
        .then((response) => response.json())
        .then((result) => {
            return result;
        })
        .catch(() => {
            return false;
        });
}

export async function check(digit, userId) {
    codeVerification += "" + digit;

    if (codeVerification.length == 4) {
        //לעדכן את הקונטרולר אם יש 4 ספרות בקוד או שאין, ושהוא יגיד שאם יש אז להפעיל פוקנציה נוספת במודל שקוראת לגט-יוזר ומחזירה אם הצליח ואם לא אז גם מספר של כשלונות
        var obj = await getUser(userId, codeVerification);

        if (obj.Table.length == 0) {

            console.log("bad");
            counter++;

            return { matchingPassword: false, severalAttempts: counter };


        } else if (obj.Table.length > 0) {

            //במקרה שהסיסמה נכונה
            console.log("good");

            return { matchingPassword: true };
        }



        // if (codeVerification == "5555") {
        //     setTimeout(function() {
        //         alert("SUCCESS");
        //     }, 10);

        // } else {
        //     counter++;
        //     if (counter < 3) {

        //         setTimeout(function() {
        //             clearCheck();
        //             alert(`Incorrect code!
        //             You have ${3 - counter} more attempts`);
        //         }, 10)

        //     } else {

        //         setTimeout(function() {
        //             alert(`Too many wrong attempts.
        //         Police on the way.`);
        //         }, 10)

        //     }
        // }
    } else {
        return { matchingPassword: false, severalAttempts: counter };
    }
}

export function clearCodeVerification() {
    codeVerification = "";
}