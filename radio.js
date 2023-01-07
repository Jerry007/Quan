# Rewrite snippets contain a few rewrite rules and optional MitM hostnames.
# Snippets of configuration will be saved in the "Profiles" subdirectory of "Quantumult X".
# You can link the snippets to the main configuration profile.
# You can check the sample snippets at https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-import-rewrite.snippet
 
 

#let obj = JSON.parse($response.body);


let body = $response.body;
var obj = JSON.parse(body);
obj ={
  "success" : true,
  "data" : {
    "ispremiumexpired" : false,
    "haspremiumhistory" : false,
    "createtime" : "2022-12-04T13:03:33.884Z",
    "lastupdatetime" : "2022-12-04T13:03:33.884Z",
    "premiumexpiretime" : "2024-01-07T08:47:19.014Z",
    "_id" : "638c9aa527ef716669ddc97a",
    "lastsignintime" : "2022-12-04T13:03:33.884Z",
    "__v" : 1,
    "ispremium" : true,
    "email" : "harold70@qq.com",
    "name" : "Harold",
    "status" : "active"
  }
}
$done({body: JSON.stringify(obj)});  

#var body = $response.body.replace(/"ispremiumexpired" : false/g, '"ispremiumexpired" : true').replace(/"ispremium" : false/g, '"ispremium" : true').replace(/"__v" : 0/g, '"__v" : 999');
$done({ body });


