var codeVerification = "";

export async function getUser(userId, userPass) {
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

export async function check(digit) {
    codeVerification += "" + digit;

    if (codeVerification.length === 4) {
        return { passwordCharactersNumber: true, code: codeVerification };
    } else {
        return { ppasswordCharactersNumber: false };
    }
}

export function clearCodeVerification() {
    codeVerification = "";
}