/**
 * Fetch User Infos
 * @param {string} id
 * @returns {object}
 */

export const getUserInfos = async (id) => {
    try {
        const res =
            await fetch(`http://localhost:3000/user/${id}`)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        throw console.log("Sorry something went wrong")
                    }
                })
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

/**
* Fetch User Activity
* @param {string} id
* @returns {Array}
*/
export const getUserActivity = async (id) => {
    try {
        const res =
            await fetch(`http://localhost:3000/user/${id}/activity`)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        throw console.log("Sorry something went wrong")
                    }
                })
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

/**
 * Fetch User Performance
 * @param {string} id
 * @returns {object}
 */

export const getUserPerformance = async (id) => {
    try {
        const res =
            await fetch(`http://localhost:3000/user/${id}/performance`)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        throw console.log("Sorry something went wrong")
                    }
                })
        return res.data;
    } catch (e) {
        console.log(e);
    }
};
/**
 * Fetch User Average Session
 * @param {string} id
 * @returns {object}
 */

export const getUserAverageSessions = async (id) => {
    try {
        const res =
            await fetch(`http://localhost:3000/user/${id}/average-sessions`)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        throw console.log("Sorry something went wrong")
                    }
                })
        return res.data;
    } catch (e) {
        console.log(e);
    }
}; 