/* globals $ */
/* eslint-env node, dirigible */

const PATH = "/profile";
const HTML_LINK = "../../profile/update.html";

//exports.getMenuItem = function() {
//	return {  
//      "name": "Profile",
//      "path": PATH,
//      "link": HTML_LINK
//   };
//};

exports.getSidebarItem = function() {
	return {  
      "name": "Profile",
      "path": PATH,
      "link": HTML_LINK,
      "category": "Security",
      "order": 504
   };
};
