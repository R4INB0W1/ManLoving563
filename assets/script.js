let isFrame = false;

function generateBookmarklet() {
  if (isFrame) {
    if (confirm('You already have a site open. Close the current site and open a new one?')) {
      document.getElementById('iframe').remove();
      genF();
    } else alert(`Nevermind then :)`);
  } else genF();
}

function genF() {
  var ifrm = document.createElement('iframe');
  ifrm.setAttribute('src', document.getElementById("code-textarea").value);
  ifrm.style.width = '100%';
  ifrm.style.height = '600px';
  ifrm.id = "iframe";
  document.body.appendChild(ifrm);

  document.getElementById("state").innerHTML = 'State: complete, scroll down';
  document.getElementById("warning").classList.add("center-div");
  
  isFrame = true;
}

function reset() {
  document.getElementById("state").innerHTML = 'State: page reset, no active frame.';
  document.getElementById("warning").classList.remove("center-div");
  isFrame = false;
}

async function DDOSwarn() {
  if (document.cookie === 'viewed=true') return;
  const res = await fetch("https://api.ipify.org?format=json");
  let ip = (await res.json()).ip
  alert(`Welcome to Unblockrr!\n\nTo prevent abuse, your IP address (` + ip + `) has been securly logged.\n\nIf you're just here to unblock, click ok!`);
  document.cookie = "viewed=true";
};

DDOSwarn();
