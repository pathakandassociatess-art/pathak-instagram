// Photo credits for Indian court & topic photos (Wikimedia Commons). Required by their licences.
// Loaded by every slide HTML; prints a small credit on each slide's photo.
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
  "hc-patna.jpg":            "Patna High Court · Photo: AbhinavAnkur / Wikimedia Commons, CC BY-SA 4.0",
  "police-station.jpg":      "Police station · Photo: Prasanth 05 / Wikimedia Commons, CC BY-SA 4.0",
  "police-station-2.jpg":    "Burtala Police Station, Kolkata · Photo: Indrajit Das / Wikimedia Commons, CC BY-SA 4.0",
  "evm.jpg":                 "Electronic Voting Machine · Photo: Shagil Kannur / Wikimedia Commons, CC BY-SA 4.0",
  "polling-station.jpg":     "Polling station · Photo: GeoEvan (polgeonow.com) / Wikimedia Commons, CC BY 4.0",
  "train.jpg":               "Indian Railways · Photo: Ash7876 / Wikimedia Commons, CC BY 4.0",
  "rail-station.jpg":        "Indian Railways · Photo: Shubhamrathod15 / Wikimedia Commons, CC BY-SA 4.0",
  "smog.jpg":                "Delhi air pollution · Photo: Prami.ap90 / Wikimedia Commons, CC BY-SA 4.0",
  "parliament.jpg":          "Parliament of India · Photo: Pinakpani / Wikimedia Commons, CC BY-SA 4.0",
  "patna-gandhi-maidan.jpg": "Gandhi Maidan, Patna · Photo: Shubham14318 / Wikimedia Commons, CC BY-SA 4.0",
  "farm-bihar.jpg":          "Paddy fields near Buxar, Bihar · Photo: Ajay Pratap / Wikimedia Commons, CC BY-SA 4.0"
};
window.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.slide').forEach(function(s){
    var ph = s.querySelector('.photo'); if(!ph) return;
    var m = getComputedStyle(ph).backgroundImage.match(/(?:india|topics)\/([^"')]+)/); if(!m) return;
    var t = window.PHOTO_CREDITS[m[1]]; if(!t) return;
    var d = document.createElement('div'); d.className = 'credit'; d.textContent = t;
    d.style.cssText = 'position:absolute;right:20px;bottom:12px;z-index:9;font:500 13px Inter,"Helvetica Neue",Arial,sans-serif;color:rgba(255,255,255,.85);text-shadow:0 1px 3px rgba(0,0,0,.8);letter-spacing:.2px';
    (ph.closest('.photowrap') || ph).appendChild(d);
  });
});
