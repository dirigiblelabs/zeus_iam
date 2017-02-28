/* globals $ */
/* eslint-env node, dirigible */

const PATH = "/users";
const HTML_LINK = "../../iam/users.html";

//exports.getMenuItem = function() {
//	return {  
//      "name": "Users",
//      "path": PATH,
//      "link": HTML_LINK
//   };
//};

exports.getSidebarItem = function() {
	return {  
      "name": "Users",
      "path": PATH,
      "link": HTML_LINK,
      "category": "Security",
      "order": 501
   };
};
