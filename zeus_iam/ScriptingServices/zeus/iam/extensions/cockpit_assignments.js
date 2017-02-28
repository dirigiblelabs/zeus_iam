/* globals $ */
/* eslint-env node, dirigible */

const PATH = "/assignments";
const HTML_LINK = "../../iam/assign.html";

//exports.getMenuItem = function() {
//	return {  
//      "name": "Assignments",
//      "path": PATH,
//      "link": HTML_LINK
//   };
//};

exports.getSidebarItem = function() {
	return {  
      "name": "Assignments",
      "path": PATH,
      "link": HTML_LINK,
      "category": "Security",
      "order": 503
   };
};
