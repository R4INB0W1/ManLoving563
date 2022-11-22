let isFrame = false;

function addFrame() {
  if (isFrame) {
    if (confirm('You already have a site open. Close the current site and open a new one?')) {
      document.getElementById('iframe').remove();
      createFrame();
    } else alert(`Nevermind then :)`);
  } else createFrame();
};

function createFrame() {
  let frameURL = document.getElementsByClassName("urlBox")[0].value;
  if (frameURL === '') {
    document.getElementById("state").innerHTML = 'State: no URL to generate';
    return;
  };
  
  var ifrm = document.createElement('iframe');
  
  if (frameURL.startsWith('http')) ifrm.setAttribute('src', frameURL);
  else ifrm.setAttribute('src', 'https://' + frameURL);
  
  ifrm.style.width = '100%';
  ifrm.style.height = '600px';
  ifrm.id = 'iframe';
  document.body.appendChild(ifrm);

  document.getElementById("state").innerHTML = 'State: complete, scroll down';
  document.getElementById("warning").classList.add("bottomBorder");
  
  isFrame = true;
};

function reset() {
  if (!isFrame) {
    document.getElementById("state").innerHTML = 'State: no frame to reset';
    return;
  };
  
  document.getElementById("state").innerHTML = 'State: page reset, no active frame.';
  document.getElementById("warning").classList.remove("bottomBorder");
  
  document.getElementById('iframe').remove();
  isFrame = false;
};

async function loadMessage() {
  if (document.cookie === 'version=2.1.1') return;
  const res = await fetch("https://api.ipify.org?format=json");
  let ip = (await res.json()).ip;
  alert(`Running Unblockrr version v2.1.1 from ${ip}.\n\n2.1.1 NEW:\n- You can no longer generate a frame if there is no URL\n- You can no longer generate a frame to a non-existing site.\n- You can no longer reset when there is no frame.\n\n2.1.0 NEW:\n- You no longer need https:// when inputting a URL.\n- Improved note for cooperative sites.\n- Better code layout.`);
  document.cookie = "version=2.1.1";
};

loadMessage();