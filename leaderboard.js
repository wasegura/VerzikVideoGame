let leaderboardref = firebase.database().ref("leaderboard");

leaderboardref.remove();

leaderboardref.on('value', ss=>{
  $("ul").html('');
  let lbdata = ss.val();
  let uids = Object.keys(lbdata);
  let sortable = [];
  uids.map(uid=>{
    sortable.push(lbdata[uid]);
  });
  sortable.sort((a,b)=>a.score - b.score >= 0 ? -1: 1);
  sortable.map(playerObj=>{
    $("ul").append(`<li>${playerObj.name}: ${playerObj.score}</li>`);
  })
});

for (let i = 0; i < 5; i++){
  let pretendPlayer = {name: `Player${i}`, score: i};
  let newRef = leaderboardref.push();
  newRef.set(pretendPlayer);
}
