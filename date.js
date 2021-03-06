/**
 * 返回今天的日期，格式为：YYYY-MM-DD，例如：2017-04-26
 * @return {string} 返回当前的日期，格式为：YYYY-MM-DD
 */
function today() {
  var d = new Date(Date.now());

  return d.toISOString().slice(0, 10);
}

/**
 * 返回昨天的日期，格式为：YYYY-MM-DD，例如：2017-04-26
 * @return {string} 返回昨天的日期，格式为：YYYY-MM-DD
 */
function yesterday() {
  var d = new Date(Date.now() - 24*60*60*1000);

  return d.toISOString().slice(0, 10);
}

/**
 * 返回前天的日期，格式为：YYYY-MM-DD，例如：2017-04-26
 * @return {string} 返回前天的日期，格式为：YYYY-MM-DD
 */
function the_day_before_yesterday() {
  var d = new Date(Date.now() - 2*24*60*60*1000);

  return d.toISOString().slice(0, 10);
}

/**
 * 判断 date 字符串代表的日期，是否是今天，格式为：YYYY-MM-DD
 * @return {bool} 返回布尔类型
 */
function isToday(date) {
  if(date.slice(0, 10) === today()) return true;

  return false;
}

/**
 * 判断 date 字符串代表的日期，是否是昨天，格式为：YYYY-MM-DD
 * @return {bool} 返回布尔类型
 */
function isYesterday(date) {
  if(date.slice(0, 10) === yesterday()) return true;

  return false;
}

/**
 * 判断 date 字符串代表的日期，是否是前天，格式为：YYYY-MM-DD
 * @return {bool} 返回布尔类型
 */
function isThe_day_before_yesterday(date) {
  if(date.slice(0, 10) === the_day_before_yesterday()) return true;

  return false;
}

module.exports.today = today;
module.exports.yesterday = yesterday;
module.exports.the_day_before_yesterday = the_day_before_yesterday;
module.exports.isToday = isToday;
module.exports.isYesterday = isYesterday;
module.exports.isThe_day_before_yesterday = isThe_day_before_yesterday;
