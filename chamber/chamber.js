(function () {
  "use strict";
  var SAVE_KEY = "pga-chamber-run";
  var BOARD_KEY = "pga-chamber-board";
  var MAX_NAME = 8;

  var MOVEBOOK = {
    brief: { id: "brief", name: "Brief the House", note: "Sway the room", fx: "koru", target: "foe", power: 18 },
    doorstop: { id: "doorstop", name: "Doorstop", note: "A short clip for the six o'clock", fx: "lens", target: "foe", power: 22 },
    paper: { id: "paper", name: "Table a paper", note: "Steady your own standing", fx: "paper", target: "self", power: 16 },
    walk: { id: "walk", name: "Corridor walk", note: "Reset the temperature", fx: "flash", target: "self", power: 12 },
    select: { id: "select", name: "Select committee", note: "Slow grind on the brief", fx: "koru", target: "foe", power: 14 },
    adjourn: { id: "adjourn", name: "Call the adjournment", note: "Buy a breath", fx: "flash", target: "self", power: 20 }
  };

  var ENCOUNTERS = [
    { id: "scandal", kind: "media", line: "A gallery sketch is circulating.", foe: "Headline heat" },
    { id: "cooler", kind: "poll", line: "Water-cooler talk with a wandering whip.", foe: "Whisper mill" },
    { id: "conspiracy", kind: "media", line: "A late blog has a theory.", foe: "Conspiracy brief" },
    { id: "focus", kind: "poll", line: "A focus group just wrapped.", foe: "Focus group" },
    { id: "gallery", kind: "media", line: "Someone in the public gallery stood up.", foe: "Gallery murmur" },
    { id: "leak", kind: "media", line: "A paper found its way to a reporter.", foe: "Overnight leak" }
  ];

  var FLOORS = [
    { id: "lobby", name: "Parliament House — Members' Lobby" },
    { id: "beehive", name: "The Beehive — Banquet Hall corridor" },
    { id: "chamber", name: "Debating Chamber anteroom" }
  ];

  var state = {
    screen: "title",
    name: "",
    mpId: "",
    score: 0,
    round: 0,
    floor: 0,
    trust: 100,
    foe: 0,
    foeMax: 0,
    encounter: null,
    busy: false,
    px: 18,
    py: 62
  };

  function $(id) { return document.getElementById(id); }
  function roster() {
    var list = (window.mps || []).filter(function (m) { return m && m.id && !m.priorOnly; });
    if (list.length > 24) list = list.slice(0, 24);
    if (!list.length) list = [{ id: "luxon", name: "Christopher Luxon", party: "National" }];
    return list;
  }
  function mpById(id) {
    return roster().find(function (m) { return m.id === id; }) || roster()[0];
  }
  function movesFor(mp) {
    var bag = [MOVEBOOK.brief, MOVEBOOK.doorstop, MOVEBOOK.paper, MOVEBOOK.walk];
    if (mp && /Green|Te Pāti/i.test(mp.party || "")) bag[2] = MOVEBOOK.select;
    if (mp && /ACT|National/i.test(mp.party || "")) bag[3] = MOVEBOOK.adjourn;
    return bag;
  }
  function loadRun() {
    try { return JSON.parse(localStorage.getItem(SAVE_KEY) || "null"); } catch (e) { return null; }
  }
  function saveRun() {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); } catch (e) {}
  }
  function clearRun() { try { localStorage.removeItem(SAVE_KEY); } catch (e) {} }
  function board() {
    try { return JSON.parse(localStorage.getItem(BOARD_KEY) || "[]"); } catch (e) { return []; }
  }
  function postScore() {
    var rows = board();
    rows.push({
      name: (state.name || "ANON").slice(0, MAX_NAME).toUpperCase(),
      mp: (mpById(state.mpId).name || "").split(" ").pop(),
      score: state.score,
      rounds: state.round,
      at: Date.now()
    });
    rows.sort(function (a, b) { return b.score - a.score; });
    rows = rows.slice(0, 20);
    try { localStorage.setItem(BOARD_KEY, JSON.stringify(rows)); } catch (e) {}
    return rows;
  }

  function show(name) {
    state.screen = name;
    ["chamberTitle", "chamberOverworld", "chamberBattle", "chamberBoard"].forEach(function (id) {
      var el = $(id);
      if (el) el.classList.toggle("on", id === "chamber" + name.charAt(0).toUpperCase() + name.slice(1) ||
        (name === "title" && id === "chamberTitle") ||
        (name === "overworld" && id === "chamberOverworld") ||
        (name === "battle" && id === "chamberBattle") ||
        (name === "board" && id === "chamberBoard"));
    });
  }

  function fillSelect() {
    var sel = $("chamberMp");
    if (!sel) return;
    sel.innerHTML = roster().map(function (m) {
      return "<option value=\"" + m.id + "\">" + m.name + "</option>";
    }).join("");
  }

  function spriteStyle(id) {
    var atlas = window.SPRITE_ATLAS || window.SPRITE_POS || {};
    var pos = atlas[id] || atlas[(id || "").replace(/^hon-/, "")] || null;
    if (pos && typeof pos.x === "number") {
      return "background-image:url('busts-atlas.png');background-size:1152px 1024px;background-position:-" + pos.x + "px -" + pos.y + "px;background-repeat:no-repeat;";
    }
    return "background:#2a2a2a";
  }

  function enterChamber() {
    document.body.classList.add("chamber-on");
    fillSelect();
    var saved = loadRun();
    $("chamberContinue").hidden = !(saved && saved.trust > 0 && saved.name);
    show("title");
    if (window.atlasPush) window.atlasPush("chamber");
  }
  function leaveChamber() {
    document.body.classList.remove("chamber-on");
    show("title");
  }

  function startNew() {
    var name = ($("chamberName").value || "").replace(/[^a-z0-9]/gi, "").slice(0, MAX_NAME).toUpperCase();
    if (name.length < 2) { $("chamberName").focus(); return; }
    state = {
      screen: "overworld", name: name, mpId: $("chamberMp").value,
      score: 0, round: 0, floor: 0, trust: 100, foe: 0, foeMax: 0,
      encounter: null, busy: false, px: 18, py: 62
    };
    saveRun();
    renderOverworld();
    show("overworld");
  }
  function continueRun() {
    var saved = loadRun();
    if (!saved || saved.trust <= 0) return;
    state = saved;
    renderOverworld();
    show(saved.screen === "battle" ? "battle" : "overworld");
    if (state.screen === "battle") renderBattle();
  }

  function renderOverworld() {
    $("chamberFloorName").textContent = FLOORS[state.floor % FLOORS.length].name;
    $("chamberScoreHud").textContent = "Standing " + state.score;
    $("chamberRoundHud").textContent = "Sitting " + (state.round + 1);
    var player = $("chamberPlayer");
    player.style.left = state.px + "%";
    player.style.top = state.py + "%";
    player.style.backgroundImage = "none";
    player.setAttribute("style", player.getAttribute("style") + ";" + spriteStyle(state.mpId));
    var spots = $("chamberHall").querySelectorAll(".chamber-hotspot");
    spots.forEach(function (el, i) {
      el.style.left = (28 + i * 26) + "%";
      el.style.top = (30 + (i % 2) * 28) + "%";
    });
  }

  function bumpPlayer(dir) {
    if (state.screen !== "overworld") return;
    if (dir === "left") state.px = Math.max(6, state.px - 8);
    if (dir === "right") state.px = Math.min(82, state.px + 8);
    if (dir === "up") state.py = Math.max(18, state.py - 8);
    if (dir === "down") state.py = Math.min(72, state.py + 8);
    renderOverworld();
    saveRun();
  }

  function beginEncounter() {
    var enc = ENCOUNTERS[Math.floor(Math.random() * ENCOUNTERS.length)];
    state.round += 1;
    state.floor = Math.min(FLOORS.length - 1, Math.floor((state.round - 1) / 3));
    var heat = Math.round(36 + state.round * 7);
    state.encounter = enc;
    state.foeMax = heat;
    state.foe = heat;
    state.busy = false;
    saveRun();
    renderBattle();
    show("battle");
    logLine(enc.line + " The " + enc.kind + " brief is open.");
  }

  function logLine(t) { $("chamberLog").textContent = t; }

  function renderBattle() {
    var mp = mpById(state.mpId);
    $("chamberHeroName").textContent = mp.name;
    $("chamberHeroBust").setAttribute("style", spriteStyle(mp.id));
    $("chamberHeroBar").style.width = Math.max(0, state.trust) + "%";
    $("chamberFoeName").textContent = state.encounter ? state.encounter.foe : "Brief";
    $("chamberFoeBar").style.width = (state.foeMax ? (100 * state.foe / state.foeMax) : 0) + "%";
    var box = $("chamberMoves");
    box.innerHTML = "";
    movesFor(mp).forEach(function (mv) {
      var b = document.createElement("button");
      b.type = "button";
      b.innerHTML = mv.name + "<small>" + mv.note + "</small>";
      b.addEventListener("click", function () { playMove(mv); });
      box.appendChild(b);
    });
  }

  function playFx(kind) {
    var fx = $("chamberFx");
    fx.className = "chamber-fx " + kind;
    setTimeout(function () { fx.className = "chamber-fx"; }, 720);
  }

  function playMove(mv) {
    if (state.busy || state.screen !== "battle") return;
    state.busy = true;
    playFx(mv.fx);
    var miss = Math.random() < Math.min(0.28, 0.06 + state.round * 0.015);
    setTimeout(function () {
      if (miss) {
        logLine(mv.name + " does not land. The room has moved on.");
      } else if (mv.target === "self") {
        state.trust = Math.min(100, state.trust + mv.power);
        logLine(mv.name + " steadies your standing.");
      } else {
        var dmg = mv.power + Math.round(Math.random() * 6) - Math.floor(state.round / 4);
        state.foe = Math.max(0, state.foe - Math.max(6, dmg));
        state.score += Math.max(6, dmg);
        logLine(mv.name + " takes " + Math.max(6, dmg) + " off the brief.");
      }
      renderBattle();
      if (state.foe <= 0) {
        state.score += 25 + state.round * 4;
        logLine("The brief cools. You keep the floor.");
        setTimeout(function () {
          state.busy = false;
          renderOverworld();
          show("overworld");
          saveRun();
        }, 900);
        return;
      }
      setTimeout(foeTurn, 700);
    }, 480);
  }

  function foeTurn() {
    var hit = 8 + state.round * 2 + Math.round(Math.random() * 8);
    state.trust = Math.max(0, state.trust - hit);
    logLine("The " + (state.encounter && state.encounter.kind) + " brief pushes back (" + hit + ").");
    renderBattle();
    saveRun();
    if (state.trust <= 0) {
      logLine("You lose the room. This sitting is over.");
      setTimeout(endRun, 1100);
      return;
    }
    state.busy = false;
  }

  function endRun() {
    var rows = postScore();
    clearRun();
    renderBoard(rows);
    show("board");
  }

  function renderBoard(rows) {
    rows = rows || board();
    var tb = $("chamberBoardBody");
    tb.innerHTML = rows.map(function (r, i) {
      return "<tr><td>" + (i + 1) + "</td><td>" + r.name + "</td><td>" + r.mp + "</td><td>" + r.score + "</td><td>" + r.rounds + "</td></tr>";
    }).join("") || "<tr><td colspan='5'>No sittings yet.</td></tr>";
  }

  window.openChamber = enterChamber;
  window.closeChamber = leaveChamber;

  document.addEventListener("DOMContentLoaded", function () {
    var menu = $("menuChamberBtn");
    if (menu) menu.addEventListener("click", function () {
      var close = $("menuClose");
      if (close) close.click();
      enterChamber();
    });
    $("chamberStart").addEventListener("click", startNew);
    $("chamberContinue").addEventListener("click", continueRun);
    $("chamberExit").addEventListener("click", leaveChamber);
    $("chamberExit2").addEventListener("click", leaveChamber);
    $("chamberBoardBtn").addEventListener("click", function () { renderBoard(); show("board"); });
    $("chamberBoardBack").addEventListener("click", function () { show("title"); });
    $("chamberHall").querySelectorAll(".chamber-hotspot").forEach(function (el) {
      el.addEventListener("click", beginEncounter);
    });
    document.addEventListener("keydown", function (ev) {
      if (!document.body.classList.contains("chamber-on")) return;
      if (ev.key === "Escape") leaveChamber();
      if (ev.key === "ArrowLeft") bumpPlayer("left");
      if (ev.key === "ArrowRight") bumpPlayer("right");
      if (ev.key === "ArrowUp") bumpPlayer("up");
      if (ev.key === "ArrowDown") bumpPlayer("down");
    });
    var hall = $("chamberHall");
    if (hall) {
      var sx = 0;
      hall.addEventListener("pointerdown", function (e) { sx = e.clientX; });
      hall.addEventListener("pointerup", function (e) {
        var dx = e.clientX - sx;
        if (Math.abs(dx) > 30) bumpPlayer(dx > 0 ? "right" : "left");
      });
    }
  });
})();
