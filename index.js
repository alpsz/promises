/*
 
    $.ajax({
        success:function(){
            $.ajax({
                success:function(){
                    $.ajax({
                        success:function(){

                        }
                    })
                }
            })
        }
    })



 */
/*

    promise1.then().then().then().catch();

*/





var userLoggedIn = true;

function checkUserLoggedIn(){
        var promise = new Promise((resolve,reject) => {

        // Wait for 1 second
        setTimeout(()=>{
            // Promise is resolved
            if(userLoggedIn){
                resolve("User logged in.");
            }else{
                // Reject
                reject("User not logged in.");
            }
        },1000);

    });
    return promise;
}

setTimeout(() => {
    userLoggedIn = false;
}, 500);

checkUserLoggedIn().then( (SuccessMsg)  => {
    console.log(SuccessMsg);
}).catch( (RejectMsg) => { console.log(RejectMsg); });

// checkUserLoggedIn().then(fetchUserFeed).then(fetchUserFriends).then(fetchUserMessages).catch(()=>{})