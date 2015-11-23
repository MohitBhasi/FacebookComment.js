/*
Author:MOHIT BHASI
Gets the name of all the people who have commented on a facebook post.
Ensure to load all the comments of the post first.
*/

//Magic,do not touch.

function remove_duplicates(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) 
        obj[arr[i]] = true;
    arr = [];
    for (var key in obj) 
        arr.push(key);
    return arr;
}
function getName()
{
	var node=document.getElementsByClassName(" UFICommentActorName");
	var i =0,names=[];
	for (i=0;i<node.length;i++)
	{  
	   var f=0;
	   var str=node[i].innerHTML;
	   str = str.replace(/<\/?span[^>]*>/g,"");
	   names.push(str);
	}
	remove_duplicates(names);
	return names;
	//or display the names using : console.log(names);
}
