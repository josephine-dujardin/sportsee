/**
 * @module UserDataModel
 */

// import { getUserActivity,getUserAverageSessions, getUserInfos, getUserPerformance, } from "./Api";
import { getUserActivity,getUserAverageSessions, getUserInfos, getUserPerformance, } from "./Mock";

/**
 * Represents a user data model.
 * @constructor
 * @param {number} id - The user ID.
 */
class UserDataModel {
  constructor(id) {
    this.id = id;
  }

  /**
   * Returns the user's activity data.
   * @async
   * @function
   * @returns {Promise<Object>} - The user's activity data.
   */
  async getActivityData() {
    return await getUserActivity(this.id);
  }

  /**
   * Returns the user's performance data.
   * @async
   * @function
   * @returns {Promise<Object>} - The user's performance data.
   */
  async getPerformanceData() {
    return await getUserPerformance(this.id);
  }

  /**
   * Returns the user's average sessions data.
   * @async
   * @function
   * @returns {Promise<Object>} - The user's average sessions data.
   */
  async getAverageSessionsData() {
    return await getUserAverageSessions(this.id);
  }

  /**
   * Returns the user's main data.
   * @async
   * @function
   * @returns {Promise<Object>} - The user's main data.
   */
  async getMainData() {
    return await getUserInfos(this.id);
  }
}

/**
 * Returns the data based on the specified type and user ID.
 * @async
 * @function
 * @param {string} type - The type of data to return.
 * @param {number} id - The user ID.
 * @returns {Promise<Object>} - The data based on the specified type and user ID.
 */
export const getData = async (type, id) => {
  let data = [];
  let user = new UserDataModel(id);

  switch (type) {
    case "USER_ACTIVITY":
      data = await user.getActivityData();
      break;
    case "USER_PERFORMANCE":
      data = await user.getPerformanceData();
      break;
    case "USER_AVERAGE_SESSIONS":
      data = await user.getAverageSessionsData();
      break;
    case "USER_MAIN_DATA":
      data = await user.getMainData();
      break;
    default:
  }

  return data;
};
