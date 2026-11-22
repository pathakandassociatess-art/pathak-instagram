// Photo credits for Indian court photos (Wikimedia Commons). Required by their licences.
// Loaded by every slide HTML; it prints a small credit on each slide for the photo it uses.
window.PHOTO_CREDITS = {
  "sc-dome.jpg":             "Supreme Court of India · Photo: Subhashish Panigrahi / Wikimedia Commons, CC BY-SA 4.0",
  "sc-dome-close.jpg":       "Supreme Court of India · Photo: Subhashish Panigrahi / Wikimedia Commons, CC BY-SA 4.0",
  "sc-courtyard.jpg":        "Supreme Court of India · Photo: Pinakpani / Wikimedia Commons, CC BY-SA 4.0",
  "sc-lawn.jpg":             "Supreme Court of India · Photo: Legaleagle86 / Wikimedia Commons, CC BY-SA 3.0",
  "hc-allahabad.jpg":        "Allahabad High Court · Photo: Vroomtrapit / Wikimedia Commons, CC0",
  "hc-allahabad-inner.jpg":  "Allahabad High Court · Photo: Subhashish Panigrahi / Wikimedia Commons, CC BY-SA 4.0",
  "hc-calcutta.jpg":         "Calcutta High Court · Photo: Avrajyoti Mitra / Wikimedia Commons, CC BY-SA 2.0",
  "hc-calcutta-corridor.jpg":"Calcutta High Court · Photo: Indrajit Das / Wikimedia Commons, CC BY-SA 4.0",
  "hc-bombay.jpg":           "Bombay High Court · Photo: Gnoeee / Wikimedia Commons, CC BY-SA 4.0",
  "hc-madras.jpg":           "Madras High Court · Photo: Sankar 1995 / Wikimedia Commons, CC BY-SA 4.0",
  "hc-patna.jpg":            "Patna High Court · Photo: AbhinavAnkur / Wikimedia Commons, CC BY-SA 4.0"
};
window.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.slide').forEach(function(s){
    var ph = s.querySelector('.photo'); if(!ph) return;
    var m = getComputedStyle(ph).backgroundImage.match(/india\/([^"')]+)/); if(!m) return;
    var t = window.PHOTO_CREDITS[m[1]]; if(!t) return;
    var d = document.createElement('div');
    d.textContent = t;
    d.style.cssText = 'position:absolute;right:46px;bottom:32px;z-index:7;font:500 13px "Helvetica Neue",Arial,sans-serif;color:rgba(245,241,232,.55);letter-spacing:.2px';
    s.appendChild(d);
  });
});
