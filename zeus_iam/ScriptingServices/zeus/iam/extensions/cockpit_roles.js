/* globals $ */
/* eslint-env node, dirigible */

const PATH = "/roles";
const HTML_LINK = "../../iam/roles.html";

//exports.getMenuItem = function() {
//	return {  
//      "name": "Roles",
//      "path": PATH,
//      "link": HTML_LINK
//   };
//};

exports.getSidebarItem = function() {
	return {  
      "name": "Roles",
      "path": PATH,
      "link": HTML_LINK,
      "category": "Security",
      "order": 502
   };
};
