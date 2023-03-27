/**
 * @async
 * @function getUserInfos
 * @param {string} id - The user's id
 * @returns {Promise<object>} User information
 * @throws {console.log} If the data was not successfully recovered
 */
export const getUserInfos = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/user/${id}`).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw console.log("getUserInfos's data was not call");
            }
        });
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

/**
 * @async
 * @function getUserActivity
 * @param {string} id - The user's id
 * @returns {Promise<object>} The user's activity
 * @throws {console.log} If the data was not successfully recovered
 */
export const getUserActivity = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/user/${id}/activity`).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw console.log("getUserActivity's data was not call");
            }
        });
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

/**
 * @async
 * @function getUserPerformance
 * @param {string} id - The user's id
 * @returns {Promise<object>} User performance
 * @throws {console.log} If the data was not successfully recovered
 */
export const getUserPerformance = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/user/${id}/performance`).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw console.log("getUserPerformance's data was not call");
            }
        });
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

/**
 * @async
 * @function getUserAverageSessions
 * @param {string} id - The user's id
 * @returns {Promise<object>} Average user sessions
 * @throws {console.log} If the data was not successfully recovered
 */
export const getUserAverageSessions = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/user/${id}/average-sessions`).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw console.log("getUserAverageSessions's data was not call");
            }
        });
        return res.data;
    } catch (e) {
        console.log(e);
    }
};
