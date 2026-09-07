const BUILD = "v3.12";
    window.__mpPanelCache = window.__mpPanelCache || {};
    /* Live party feed — fill githubBase (raw URL prefix) to pull daily JSON.
       Files expected: party-polls.json and party-offerings-2026.json
       Leave githubBase empty to use bundled data/ files, then fallback to the baked-in profiles. */
    const LIVE_FEED = {
      githubBase: "https://raw.githubusercontent.com/FlavourThink/nz-politics-workers-collection/main",
      pollsFile: "data/polls.json",
      offeringsFile: "data/party-offerings-2026.json",
      proposedFile: "data/party-offerings-proposed.json",
      latestFile: "data/latest.json"
    };
    window.__liveFeedMeta = { polls: "bundled", offerings: "bundled", asAt: null };

    const BADGE_DATA = {};
    const BADGE_ATLAS = {"superannuation":{"x":0,"y":0,"c":0,"r":0,"i":0},"treaty-rights":{"x":96,"y":0,"c":1,"r":0,"i":1},"cannabis-reform":{"x":192,"y":0,"c":2,"r":0,"i":2},"progressive-tax":{"x":288,"y":0,"c":3,"r":0,"i":3},"womens-rights":{"x":384,"y":0,"c":4,"r":0,"i":4},"identity-freedom":{"x":480,"y":0,"c":5,"r":0,"i":5},"nuclear-free":{"x":576,"y":0,"c":6,"r":0,"i":6},"digital-privacy":{"x":672,"y":0,"c":7,"r":0,"i":7},"water-rights":{"x":768,"y":0,"c":8,"r":0,"i":8},"public-health":{"x":864,"y":0,"c":9,"r":0,"i":9},"anti-discrimination":{"x":0,"y":96,"c":0,"r":1,"i":10},"abortion-rights":{"x":96,"y":96,"c":1,"r":1,"i":11},"marriage-equality":{"x":192,"y":96,"c":2,"r":1,"i":12},"workers-rights":{"x":288,"y":96,"c":3,"r":1,"i":13},"welfare-state":{"x":384,"y":96,"c":4,"r":1,"i":14},"conservation":{"x":480,"y":96,"c":5,"r":1,"i":15},"gay-rights":{"x":576,"y":96,"c":6,"r":1,"i":16},"maori-co-governance":{"x":672,"y":96,"c":7,"r":1,"i":17},"housing":{"x":768,"y":96,"c":8,"r":1,"i":18},"free-market":{"x":864,"y":96,"c":9,"r":1,"i":19},"safe-homes":{"x":0,"y":192,"c":0,"r":2,"i":20},"secular-state":{"x":96,"y":192,"c":1,"r":2,"i":21},"disability-rights":{"x":192,"y":192,"c":2,"r":2,"i":22},"law-and-order":{"x":288,"y":192,"c":3,"r":2,"i":23},"gun-reform":{"x":384,"y":192,"c":4,"r":2,"i":24},"climate-action":{"x":480,"y":192,"c":5,"r":2,"i":25},"free-speech":{"x":576,"y":192,"c":6,"r":2,"i":26},"education-access":{"x":672,"y":192,"c":7,"r":2,"i":27},"child-poverty":{"x":768,"y":192,"c":8,"r":2,"i":28},"open-immigration":{"x":864,"y":192,"c":9,"r":2,"i":29},"end-of-life-choice":{"x":0,"y":288,"c":0,"r":3,"i":30},"capital-gains-tax":{"x":96,"y":288,"c":1,"r":3,"i":31},"wealth-tax":{"x":192,"y":288,"c":2,"r":3,"i":32},"gst-off-food":{"x":288,"y":288,"c":3,"r":3,"i":33},"fast-track-consent":{"x":384,"y":288,"c":4,"r":3,"i":34},"fair-pay-agreements":{"x":480,"y":288,"c":5,"r":3,"i":35},"smokefree":{"x":576,"y":288,"c":6,"r":3,"i":36},"gang-patch-ban":{"x":672,"y":288,"c":7,"r":3,"i":37},"three-strikes":{"x":768,"y":288,"c":8,"r":3,"i":38},"farm-freshwater":{"x":864,"y":288,"c":9,"r":3,"i":39},"oil-and-gas":{"x":0,"y":384,"c":0,"r":4,"i":40},"pharmac-access":{"x":96,"y":384,"c":1,"r":4,"i":41},"mental-health":{"x":192,"y":384,"c":2,"r":4,"i":42},"fees-free":{"x":288,"y":384,"c":3,"r":4,"i":43},"kiwisaver":{"x":384,"y":384,"c":4,"r":4,"i":44},"foreign-buyers":{"x":480,"y":384,"c":5,"r":4,"i":45},"parental-leave":{"x":576,"y":384,"c":6,"r":4,"i":46},"living-wage":{"x":672,"y":384,"c":7,"r":4,"i":47},"grocery-competition":{"x":768,"y":384,"c":8,"r":4,"i":48},"speed-limits":{"x":864,"y":384,"c":9,"r":4,"i":49},"fare-cap":{"x":0,"y":480,"c":0,"r":5,"i":50},"living-wage-study":{"x":96,"y":480,"c":1,"r":5,"i":51},"clean-energy-transition":{"x":192,"y":480,"c":2,"r":5,"i":52},"refugee-support":{"x":288,"y":480,"c":3,"r":5,"i":53},"universal-basic-services":{"x":384,"y":480,"c":4,"r":5,"i":54},"animal-rights":{"x":480,"y":480,"c":5,"r":5,"i":55},"creative-arts-funding":{"x":576,"y":480,"c":6,"r":5,"i":56},"prison-reform":{"x":672,"y":480,"c":7,"r":5,"i":57},"gender-pay-equity":{"x":768,"y":480,"c":8,"r":5,"i":58},"affordable-childcare":{"x":864,"y":480,"c":9,"r":5,"i":59},"sustainable-agriculture":{"x":0,"y":576,"c":0,"r":6,"i":60},"community-housing":{"x":96,"y":576,"c":1,"r":6,"i":61},"youth-employment":{"x":192,"y":576,"c":2,"r":6,"i":62},"digital-equity":{"x":288,"y":576,"c":3,"r":6,"i":63},"free-public-transport":{"x":384,"y":576,"c":4,"r":6,"i":64},"elder-dignity":{"x":480,"y":576,"c":5,"r":6,"i":65},"indigenous-language-revival":{"x":576,"y":576,"c":6,"r":6,"i":66},"ocean-protection":{"x":672,"y":576,"c":7,"r":6,"i":67},"accessible-democracy":{"x":768,"y":576,"c":8,"r":6,"i":68},"anti-corruption":{"x":864,"y":576,"c":9,"r":6,"i":69},"mental-health-access":{"x":0,"y":672,"c":0,"r":7,"i":70},"grocery-watch":{"x":96,"y":672,"c":1,"r":7,"i":71},"oil-and-gas-mining":{"x":192,"y":672,"c":2,"r":7,"i":72},"fees-free-education":{"x":288,"y":672,"c":3,"r":7,"i":73},"defence-spend":{"x":384,"y":672,"c":4,"r":7,"i":74},"youth-academies":{"x":480,"y":672,"c":5,"r":7,"i":75},"social-media-age-limit":{"x":576,"y":672,"c":6,"r":7,"i":76},"maori-wards":{"x":672,"y":672,"c":7,"r":7,"i":77},"school-phone-ban":{"x":768,"y":672,"c":8,"r":7,"i":78}};
    const BADGE_SHEET = { url: "badges-atlas.png", cell: 96 };
    
    function badgeSrc(key) {
      var a = BADGE_ATLAS[key];
      if (a) return BADGE_SHEET.url;
      if (BADGE_DATA[key]) return BADGE_DATA[key];
      return "badges/" + key + ".png";
    }
    function badgeStyle(key) {
      var a = BADGE_ATLAS[key];
      if (!a) return "";
      var cell = BADGE_SHEET.cell || 96;
      return "background-image:url(" + BADGE_SHEET.url + ");background-position:-" + a.x + "px -" + a.y + "px;background-size:" + (10*cell) + "px auto;background-repeat:no-repeat;width:100%;height:100%;";
    }
    function badgeUrl(key) {
      if (BADGE_ATLAS[key]) return BADGE_SHEET.url;
      return "badges/" + key + ".png";
    }
    const BADGE_META = {"superannuation":"Superannuation","treaty-rights":"Treaty Rights","cannabis-reform":"Cannabis Reform","progressive-tax":"Progressive Tax","womens-rights":"Women's Rights","identity-freedom":"Identity Freedom","nuclear-free":"Nuclear Free","digital-privacy":"Digital Privacy","water-rights":"Water Rights","public-health":"Public Health","anti-discrimination":"Anti-Discrimination","abortion-rights":"Abortion Rights","marriage-equality":"Marriage Equality","workers-rights":"Workers' Rights","welfare-state":"Welfare State","conservation":"Conservation","gay-rights":"Gay Rights","maori-co-governance":"Māori Co-Governance","housing":"Housing","free-market":"Free Market","safe-homes":"Safe Homes","secular-state":"Secular State","disability-rights":"Disability Rights","law-and-order":"Law & Order","gun-reform":"Gun Reform","climate-action":"Climate Action","free-speech":"Free Speech","education-access":"Education Access","child-poverty":"Child Poverty","open-immigration":"Open Immigration","end-of-life-choice":"End of Life Choice","capital-gains-tax":"Capital Gains Tax","wealth-tax":"Wealth Tax","gst-off-food":"GST Off Food","fast-track-consent":"Fast-track Consent","fair-pay-agreements":"Fair Pay Agreements","smokefree":"Smokefree","gang-patch-ban":"Gang Patch Ban","three-strikes":"Three Strikes","farm-freshwater":"Farm Freshwater","oil-and-gas":"Oil and Gas Mining","pharmac-access":"Pharmac Access","mental-health":"Mental Health","fees-free":"Fees Free Education","kiwisaver":"KiwiSaver","foreign-buyers":"Foreign Buyers","parental-leave":"Parental Leave","living-wage":"Living Wage","grocery-competition":"Grocery Watch","speed-limits":"Speed Limits","fare-cap":"Fare Cap","living-wage-study":"Living Wage","clean-energy-transition":"Clean Energy Transition","refugee-support":"Refugee Support","universal-basic-services":"Universal Basic Services","animal-rights":"Animal Rights","creative-arts-funding":"Creative Arts Funding","prison-reform":"Prison Reform","gender-pay-equity":"Gender Pay Equity","affordable-childcare":"Affordable Childcare","sustainable-agriculture":"Sustainable Agriculture","community-housing":"Community Housing","youth-employment":"Youth Employment","digital-equity":"Digital Equity","free-public-transport":"Free Public Transport","elder-dignity":"Elder Dignity","indigenous-language-revival":"Indigenous Language Revival","ocean-protection":"Ocean Protection","accessible-democracy":"Accessible Democracy","anti-corruption":"Anti-Corruption","mental-health-access":"Mental Health Access","grocery-watch":"Grocery Watch","oil-and-gas-mining":"Oil and Gas Mining","fees-free-education":"Fees Free Education","defence-spend":"Defence Spend","youth-academies":"Youth Academies","social-media-age-limit":"Social Media Age-Limit","maori-wards":"Māori Wards","school-phone-ban":"School Phone Ban"};
    const BADGE_NOTE = {"abortion-rights":"Whether abortion stays a health matter decided by the person and their clinician, or is tightened again.","accessible-democracy":"Making voting and Parliament easier to reach \u2014 seats, enrolment, language, and who gets a say.","affordable-childcare":"Cost and hours of early childhood care so parents can work or study.","animal-rights":"Farm, companion, and wild animal welfare rules, and how tightly they are enforced.","anti-corruption":"Transparency, lobbying rules, and holding public money and contracts to account.","anti-discrimination":"Human Rights Act protections covering sex, race, disability, sexuality, and belief.","cannabis-reform":"Legalising, decriminalising, or keeping cannabis as a criminal offence.","capital-gains-tax":"A tax on profit when assets such as rental property or shares are sold.","child-poverty":"Measures aimed at fewer children in hardship \u2014 income, housing, food, and health.","clean-energy-transition":"Shifting power and fuel off coal and gas toward renewables.","climate-action":"Emissions targets, pricing, and whether New Zealand stays on its climate path.","community-housing":"State, community, and emergency housing supply versus private-market only.","conservation":"Protection of native bush, birds, and public conservation land.","creative-arts-funding":"Public money for arts, screen, music, and marae or community culture.","digital-equity":"Whether every household can actually get and afford decent internet.","digital-privacy":"How much the state and firms can collect and keep about people online.","disability-rights":"Access, support, and pay for disabled people and their carers.","education-access":"Who can get a decent school and tertiary place without being shut out by cost.","elder-dignity":"Superannuation, aged care, and how older people are treated in public services.","end-of-life-choice":"The End of Life Choice Act \u2014 assisted dying with safeguards, or repeal.","fair-pay-agreements":"Sector-wide pay deals. Labour passed them; the current coalition repealed them.","fare-cap":"A cap on weekly public-transport fares so cost does not lock people out.","farm-freshwater":"Rules on farm run-off, wetlands, and who sets freshwater standards.","fast-track-consent":"Speeding up consents for infrastructure, housing, and mining.","fees-free":"First-year or wider fees-free tertiary study.","fees-free-education":"First-year or wider fees-free tertiary study.","foreign-buyers":"Whether overseas buyers can purchase existing New Zealand homes.","free-market":"Less state direction of prices, tax, and regulation; more private provision.","free-public-transport":"Zero or near-zero fares on buses, trains, and ferries.","free-speech":"How far law should limit speech, including hate-speech and protest rules.","gang-patch-ban":"Banning gang insignia in public, as passed in the current term.","gay-rights":"Legal equality for same-sex relationships and related protections.","gender-pay-equity":"Pay-equity claims in female-dominated work. Some claims were paused in 2024\u201325.","grocery-competition":"Watching supermarket power and whether grocery prices can be forced down.","grocery-watch":"Watching supermarket power and whether grocery prices can be forced down.","gst-off-food":"Taking GST off basic food. NZ First campaigned on this.","gun-reform":"Firearms law after 2019 \u2014 buy-backs, licences, and later easing or tightening.","housing":"Building, renting, and buying a home at a price people can actually meet.","identity-freedom":"Gender, sexuality, and identity recognition in law and public services.","indigenous-language-revival":"Te reo M\u0101ori in schools, broadcasting, and the public service.","kiwisaver":"Retirement saving settings \u2014 compulsion, contribution rates, and kick-start help.","law-and-order":"Policing, sentencing, and whether the answer is more prison or more prevention.","living-wage":"Lifting the wage floor toward a living wage rather than the legal minimum only.","living-wage-study":"Lifting the wage floor toward a living wage rather than the legal minimum only.","maori-co-governance":"Shared decision-making with iwi over water, land, or public services.","marriage-equality":"The 2013 marriage law. Some members voted yes, some no, some later changed.","mental-health":"Funding and access for mental-health care.","mental-health-access":"Whether people can actually get mental-health care when they need it.","nuclear-free":"The nuclear-free law of the 1980s, still a core New Zealand stance.","ocean-protection":"Marine reserves, fishing limits, and seabed or oil activity at sea.","oil-and-gas":"New oil and gas exploration and mining on land or offshore.","oil-and-gas-mining":"New oil and gas exploration and mining on land or offshore.","open-immigration":"How many people can move here, and on what terms.","parental-leave":"Paid leave when a child arrives, and who can take it.","pharmac-access":"Whether Pharmac funds more medicines, faster.","prison-reform":"Reducing imprisonment and improving conditions, versus building more prison space.","progressive-tax":"Higher rates on higher incomes, versus flattening tax.","public-health":"Hospitals, GPs, and whether care stays public-first.","refugee-support":"The refugee quota and how people are settled once they arrive.","safe-homes":"Family-violence law and whether homes are treated as a safety issue.","secular-state":"Keeping church and state apart in law and schools.","smokefree":"The smokefree-generation law. Labour and the Greens passed it; the coalition changed it.","speed-limits":"Default speed limits on local and state roads, and who sets them.","superannuation":"NZ Super age, rate, and whether it stays universal.","sustainable-agriculture":"Farming rules that cut emissions and protect soil and water.","three-strikes":"Repeat-offender sentencing. Repealed, then brought back this term.","treaty-rights":"Honouring Te Tiriti in law, courts, and public institutions.","universal-basic-services":"Guaranteeing core services \u2014 health, housing, transport \u2014 as a right.","water-rights":"Who owns and governs drinking water and waterways.","wealth-tax":"A tax on net wealth. A Green Party flagship; National, ACT, and NZ First oppose it.","welfare-state":"Benefits, Working for Families, and how hard the state makes it to get help.","womens-rights":"Equality law, pay, safety, and reproductive rights.","workers-rights":"Unions, holidays, 90-day trials, and bargaining power at work.","youth-employment":"First jobs, apprenticeships, and the unemployment rate for under-25s.","defence-spend":"Whether New Zealand lifts defence spending and ties itself closer to Australia and Five Eyes.","youth-academies":"Military-style academies for serious youth offending — boot camp to supporters, a dead end to critics.","social-media-age-limit":"Banning under-16s from social media, or making platforms keep them off.","maori-wards":"Whether councils keep Māori wards without a local poll, or must put them to a vote.","school-phone-ban":"Phones away for the school day. Classroom rule, national fight."};


    const BADGE_EXTRA = {
      luxon: [{key:"school-phone-ban",stance:"up"},{key:"social-media-age-limit",stance:"up"},{key:"youth-academies",stance:"up"},{key:"maori-wards",stance:"up"},{key:"defence-spend",stance:"up"}],
      stanford: [{key:"school-phone-ban",stance:"up"},{key:"social-media-age-limit",stance:"up"},{key:"youth-academies",stance:"up"},{key:"maori-wards",stance:"up"},{key:"defence-spend",stance:"up"}],
      bishop: [{key:"school-phone-ban",stance:"up"},{key:"youth-academies",stance:"up"},{key:"maori-wards",stance:"up"},{key:"defence-spend",stance:"up"}],
      willis: [{key:"school-phone-ban",stance:"up"},{key:"youth-academies",stance:"up"},{key:"maori-wards",stance:"up"},{key:"defence-spend",stance:"up"}],
      collins: [{key:"school-phone-ban",stance:"up"},{key:"social-media-age-limit",stance:"up"},{key:"youth-academies",stance:"up"},{key:"maori-wards",stance:"up"},{key:"defence-spend",stance:"up"}],
      brownlee: [{key:"school-phone-ban",stance:"up"},{key:"youth-academies",stance:"up"},{key:"maori-wards",stance:"up"},{key:"defence-spend",stance:"up"}],
      seymour: [{key:"school-phone-ban",stance:"up"},{key:"social-media-age-limit",stance:"down"},{key:"youth-academies",stance:"up"},{key:"maori-wards",stance:"up"},{key:"defence-spend",stance:"up"}],
      vanvelden: [{key:"school-phone-ban",stance:"up"},{key:"social-media-age-limit",stance:"down"},{key:"youth-academies",stance:"up"},{key:"maori-wards",stance:"up"},{key:"defence-spend",stance:"up"}],
      chhour: [{key:"youth-academies",stance:"up"},{key:"maori-wards",stance:"up"},{key:"school-phone-ban",stance:"up"},{key:"defence-spend",stance:"up"}],
      mckee: [{key:"youth-academies",stance:"up"},{key:"maori-wards",stance:"up"},{key:"school-phone-ban",stance:"up"},{key:"defence-spend",stance:"up"}],
      peters: [{key:"school-phone-ban",stance:"up"},{key:"youth-academies",stance:"up"},{key:"maori-wards",stance:"up"},{key:"defence-spend",stance:"up"}],
      jones: [{key:"school-phone-ban",stance:"up"},{key:"youth-academies",stance:"up"},{key:"maori-wards",stance:"up"},{key:"defence-spend",stance:"up"}],
      costello: [{key:"school-phone-ban",stance:"up"},{key:"youth-academies",stance:"up"},{key:"maori-wards",stance:"up"},{key:"defence-spend",stance:"up"}],
      hipkins: [{key:"social-media-age-limit",stance:"up"},{key:"youth-academies",stance:"down"},{key:"maori-wards",stance:"down"},{key:"defence-spend",stance:"up"}],
      sepuloni: [{key:"social-media-age-limit",stance:"up"},{key:"youth-academies",stance:"down"},{key:"maori-wards",stance:"down"}],
      mcanulty: [{key:"youth-academies",stance:"down"},{key:"maori-wards",stance:"down"},{key:"defence-spend",stance:"up"}],
      jackson: [{key:"youth-academies",stance:"down"},{key:"maori-wards",stance:"down"}],
      ardern: [{key:"youth-academies",stance:"down"},{key:"maori-wards",stance:"down"},{key:"defence-spend",stance:"up"}],
      davidson: [{key:"school-phone-ban",stance:"down"},{key:"social-media-age-limit",stance:"up"},{key:"youth-academies",stance:"down"},{key:"maori-wards",stance:"down"},{key:"defence-spend",stance:"down"}],
      swarbrick: [{key:"school-phone-ban",stance:"down"},{key:"social-media-age-limit",stance:"up"},{key:"youth-academies",stance:"down"},{key:"maori-wards",stance:"down"},{key:"defence-spend",stance:"down"}],
      genter: [{key:"school-phone-ban",stance:"down"},{key:"social-media-age-limit",stance:"up"},{key:"youth-academies",stance:"down"},{key:"maori-wards",stance:"down"},{key:"defence-spend",stance:"down"}],
      menendez: [{key:"youth-academies",stance:"down"},{key:"maori-wards",stance:"down"},{key:"defence-spend",stance:"down"}],
      waititi: [{key:"youth-academies",stance:"down"},{key:"maori-wards",stance:"down"},{key:"defence-spend",stance:"down"}],
      maipi: [{key:"youth-academies",stance:"down"},{key:"maori-wards",stance:"down"},{key:"defence-spend",stance:"down"}],
      ngarewa: [{key:"youth-academies",stance:"down"},{key:"maori-wards",stance:"down"},{key:"defence-spend",stance:"down"}],
      wong: [{key:"school-phone-ban",stance:"up"},{key:"social-media-age-limit",stance:"up"},{key:"youth-academies",stance:"down"},{key:"maori-wards",stance:"down"},{key:"defence-spend",stance:"up"}],
      eb: [{key:"school-phone-ban",stance:"up"},{key:"youth-academies",stance:"down"},{key:"maori-wards",stance:"down"}],
      hammond: [{key:"school-phone-ban",stance:"up"},{key:"youth-academies",stance:"down"},{key:"maori-wards",stance:"down"}],
      key: [{key:"defence-spend",stance:"up"}],
      english: [{key:"defence-spend",stance:"up"}],
      bolger: [{key:"defence-spend",stance:"up"}],
      muldoon: [{key:"defence-spend",stance:"up"}],
      lange: [{key:"defence-spend",stance:"down"}]
    };

    var SKILL_CONSTELLATION = [
      {id:"start", g:"start", n:"Start", x:200, y:28, d:"Every member begins here."},

      {id:"path-school", g:"school", n:"School", x:56, y:78, d:"The schooling path."},
      {id:"school-state", g:"school", n:"State school", x:56, y:118, d:"State secondary."},
      {id:"school-private", g:"school", n:"Private school", x:56, y:158, d:"Private or integrated college."},
      {id:"school-kura", g:"school", n:"Kura", x:56, y:198, d:"Kura kaupapa or immersion."},
      {id:"uni", g:"school", n:"University", x:56, y:238, d:"Enrolled at a university."},
      {id:"uni-law", g:"school", n:"Law", x:56, y:278, d:"Law degree or papers."},
      {id:"uni-commerce", g:"school", n:"Commerce", x:56, y:318, d:"Commerce, business, or economics."},
      {id:"uni-arts", g:"school", n:"Arts", x:56, y:358, d:"Arts, politics, or communications."},
      {id:"uni-teaching", g:"school", n:"Teaching", x:56, y:398, d:"Teaching college or diploma."},
      {id:"uni-incomplete", g:"school", n:"Did not finish", x:56, y:438, d:"Started university and did not finish."},
      {id:"trade-path", g:"school", n:"Trade", x:56, y:478, d:"Work, trade, or farm instead of a degree."},

      {id:"path-work", g:"work", n:"Career", x:152, y:78, d:"The work path."},
      {id:"work-corporate", g:"work", n:"Private sector", x:152, y:118, d:"Corporate ladder or chief executive."},
      {id:"work-public", g:"work", n:"Public service", x:152, y:158, d:"Treasury, ministry, or public service."},
      {id:"work-staffer", g:"work", n:"Political staff", x:152, y:198, d:"Political staff before the House."},
      {id:"work-business", g:"work", n:"Business", x:152, y:238, d:"Small business or consultancy."},
      {id:"work-farm", g:"work", n:"Farm", x:152, y:278, d:"Farming before politics."},
      {id:"work-police", g:"work", n:"Police", x:152, y:318, d:"Police or security."},
      {id:"work-union", g:"work", n:"Union", x:152, y:358, d:"Union organising."},
      {id:"work-iwi", g:"work", n:"Iwi", x:152, y:398, d:"Iwi or hapū governance."},
      {id:"work-advocacy", g:"work", n:"Advocacy", x:152, y:438, d:"Refuge, housing, or community advocacy."},
      {id:"work-teacher", g:"work", n:"Teacher", x:152, y:478, d:"Taught before the House."},
      {id:"work-law", g:"work", n:"Lawyer", x:152, y:518, d:"Practised law."},
      {id:"work-media", g:"work", n:"Media", x:152, y:558, d:"Journalism, radio, or broadcasting."},

      {id:"path-house", g:"house", n:"Parliament", x:248, y:78, d:"The parliamentary path."},
      {id:"house-electorate", g:"house", n:"Electorate", x:248, y:118, d:"Won an electorate seat."},
      {id:"house-list", g:"house", n:"List", x:248, y:158, d:"Entered on a party list."},
      {id:"house-minister", g:"house", n:"Minister", x:248, y:198, d:"Sat at the Cabinet table."},
      {id:"house-leader", g:"house", n:"Leader", x:248, y:238, d:"Led a party."},
      {id:"house-speaker", g:"house", n:"Speaker", x:248, y:278, d:"Sat in the Speaker's chair."},
      {id:"house-deputy", g:"house", n:"Deputy PM", x:248, y:318, d:"Deputy Prime Minister."},
      {id:"house-pm", g:"house", n:"PM", x:248, y:358, d:"Prime Minister."},

      {id:"path-craft", g:"craft", n:"Practice", x:344, y:78, d:"The other-skills path."},
      {id:"craft-tereo", g:"craft", n:"Te reo", x:344, y:118, d:"Public te reo as a working language."},
      {id:"craft-sport", g:"craft", n:"Sport", x:344, y:158, d:"High-level sport or national colours."},
      {id:"craft-author", g:"craft", n:"Author", x:344, y:198, d:"Published a book."},
      {id:"craft-finance", g:"craft", n:"Finance", x:344, y:238, d:"Budget or markets brief."},
      {id:"craft-diplomat", g:"craft", n:"Diplomat", x:344, y:278, d:"Foreign affairs or postings."},
      {id:"craft-organiser", g:"craft", n:"Campaign", x:344, y:318, d:"Campaigns, hikoi, or party machine."}
    ];
    var SKILL_EDGES = [
      ["start","path-school"],["start","path-work"],["start","path-house"],["start","path-craft"],
      ["path-school","school-state"],["school-state","school-private"],["school-private","school-kura"],
      ["school-kura","uni"],["uni","uni-law"],["uni-law","uni-commerce"],["uni-commerce","uni-arts"],
      ["uni-arts","uni-teaching"],["uni-teaching","uni-incomplete"],["uni-incomplete","trade-path"],
      ["path-work","work-corporate"],["work-corporate","work-public"],["work-public","work-staffer"],
      ["work-staffer","work-business"],["work-business","work-farm"],["work-farm","work-police"],
      ["work-police","work-union"],["work-union","work-iwi"],["work-iwi","work-advocacy"],
      ["work-advocacy","work-teacher"],["work-teacher","work-law"],["work-law","work-media"],
      ["path-house","house-electorate"],["house-electorate","house-list"],["house-list","house-minister"],
      ["house-minister","house-leader"],["house-leader","house-speaker"],["house-speaker","house-deputy"],
      ["house-deputy","house-pm"],
      ["path-craft","craft-tereo"],["craft-tereo","craft-sport"],["craft-sport","craft-author"],
      ["craft-author","craft-finance"],["craft-finance","craft-diplomat"],["craft-diplomat","craft-organiser"]
    ];
    var SKILL_UNLOCKS = {
      luxon: ["school-private","school-state","uni","uni-commerce","work-corporate","house-electorate","house-leader","house-pm","craft-finance"],
      hipkins: ["school-state","uni","uni-arts","work-staffer","house-electorate","house-minister","house-leader","house-pm","craft-organiser"],
      seymour: ["school-private","school-state","uni","uni-law","uni-arts","work-staffer","house-electorate","house-leader","house-deputy","house-minister"],
      willis: ["school-state","uni","uni-law","work-public","work-staffer","house-list","house-minister","craft-finance"],
      stanford: ["school-state","uni","work-corporate","house-electorate","house-minister"],
      bishop: ["school-private","school-state","uni","uni-law","work-staffer","house-electorate","house-minister","craft-organiser"],
      collins: ["school-state","uni","uni-law","work-business","house-electorate","house-leader","house-minister"],
      brownlee: ["school-private","school-state","trade-path","work-teacher","house-electorate","house-minister","house-speaker"],
      peters: ["school-state","uni","uni-law","uni-arts","work-public","work-law","house-electorate","house-list","house-leader","house-deputy","house-minister","craft-diplomat"],
      jones: ["school-state","uni","uni-law","work-public","house-list","house-minister","craft-diplomat","craft-organiser"],
      costello: ["school-private","school-state","trade-path","work-police","work-business","work-media","house-list","house-minister"],
      vanvelden: ["school-state","uni","uni-commerce","work-staffer","house-electorate","house-minister","house-leader"],
      chhour: ["school-state","trade-path","work-business","work-advocacy","house-list","house-minister"],
      mckee: ["school-state","trade-path","work-business","house-list","house-minister","house-leader","craft-sport"],
      davidson: ["school-state","uni","work-advocacy","house-list","house-leader","house-minister","craft-organiser","craft-tereo"],
      swarbrick: ["school-private","school-state","uni","uni-arts","uni-incomplete","work-media","work-advocacy","house-electorate","house-leader","craft-organiser"],
      genter: ["school-state","uni","work-public","house-list","house-minister"],
      menendez: ["school-state","work-advocacy","house-list","craft-organiser"],
      waititi: ["school-kura","school-state","work-iwi","work-media","house-electorate","house-leader","craft-tereo","craft-organiser"],
      maipi: ["school-kura","uni","work-advocacy","house-electorate","craft-tereo","craft-author","craft-organiser"],
      ngarewa: ["school-state","work-iwi","house-electorate","house-leader","craft-tereo","craft-organiser"],
      sepuloni: ["school-state","uni","uni-arts","uni-teaching","work-teacher","work-advocacy","house-electorate","house-minister","house-deputy"],
      jackson: ["school-state","work-union","work-media","house-list","house-minister","craft-organiser","craft-tereo"],
      mcanulty: ["school-state","uni","uni-arts","work-staffer","house-electorate","house-minister","craft-organiser"],
      ardern: ["school-state","uni","uni-arts","work-staffer","house-electorate","house-leader","house-pm","house-minister","craft-organiser"],
      key: ["school-state","uni","uni-commerce","work-corporate","house-electorate","house-leader","house-pm","craft-finance"],
      english: ["school-private","school-state","uni","uni-commerce","uni-arts","work-farm","house-electorate","house-leader","house-pm","house-minister","craft-finance"],
      clark: ["school-state","uni","uni-arts","work-public","house-electorate","house-leader","house-pm","craft-diplomat"],
      lange: ["school-state","uni","uni-law","work-law","house-electorate","house-leader","house-pm"],
      palmer: ["school-state","uni","uni-law","work-public","house-electorate","house-pm","house-deputy","house-minister"],
      moore: ["school-state","trade-path","work-union","work-staffer","house-electorate","house-pm","house-leader","craft-diplomat","craft-organiser"],
      bolger: ["school-state","trade-path","work-farm","house-electorate","house-leader","house-pm"],
      shipley: ["school-state","uni-teaching","work-farm","house-electorate","house-leader","house-pm","house-minister"],
      muldoon: ["school-state","trade-path","work-business","house-electorate","house-leader","house-pm","house-minister","craft-finance"],
      wong: ["school-state","uni","uni-law","uni-arts","work-corporate","work-business","house-leader"],
      eb: ["school-state","work-media","work-farm","house-leader"],
      hammond: ["school-state","uni","uni-arts","work-public","craft-author","craft-organiser"]
    };

    var SKILL_FUN = {
      start:"Spawn point",
      "path-school":"Homework path",
      "school-state":"State school DLC",
      "school-private":"Blazer DLC",
      "school-kura":"Kura kid",
      uni:"Student loan arc",
      "uni-law":"Law school survivor",
      "uni-commerce":"Commerce bro",
      "uni-arts":"Arts degree (still valid)",
      "uni-teaching":"Teacher college",
      "uni-incomplete":"Left at the pub",
      "trade-path":"Got a real job first",
      "path-work":"Payslip path",
      "work-corporate":"Corner office escapee",
      "work-public":"Wellington building",
      "work-staffer":"Carried the bags",
      "work-business":"Small-business arc",
      "work-farm":"Mud on the boots",
      "work-police":"Ex-police",
      "work-union":"Union hall",
      "work-iwi":"Marae circuit",
      "work-advocacy":"Protest clipboard",
      "work-teacher":"Marked the essays",
      "work-law":"Billable hours",
      "work-media":"Talkback graduate",
      "path-house":"The Beehive path",
      "house-electorate":"Won a patch",
      "house-list":"List luck",
      "house-minister":"Ministerial car",
      "house-leader":"The 6pm stand-up",
      "house-speaker":"The chair",
      "house-deputy":"Deputy energy",
      "house-pm":"Ninth floor",
      "path-craft":"Side quests",
      "craft-tereo":"Te reo unlocked",
      "craft-sport":"Club champs",
      "craft-author":"Wrote the book",
      "craft-finance":"Spreadsheet wizard",
      "craft-diplomat":"Lounge pass",
      "craft-organiser":"Hikoi stamina"
    };
    var SKILL_FUN_D = {
      start:"Everyone respawns here. No XP yet. Just a lanyard.",
      "path-school":"What they sat through before the House sat them.",
      "school-state":"Assembly, bus, fish and chips after the bell.",
      "school-private":"The blazer did some of the talking.",
      "school-kura":"The language came first. English queued.",
      uni:"The loan is still in the room.",
      "uni-law":"Can smell a standing order from the doorway.",
      "uni-commerce":"Knows what a balance sheet is, or performs knowing.",
      "uni-arts":"Can write the speech. Someone else numbers it.",
      "uni-teaching":"Used to mark other people's homework. Now marks the Budget.",
      "uni-incomplete":"The degree is unfinished. The opinions are not.",
      "trade-path":"Did the job before they did the press release.",
      "path-work":"The bit before anyone called them Minister.",
      "work-corporate":"Left a real salary. Still mentions it.",
      "work-public":"Knows which lift in the Beehive is a trap.",
      "work-staffer":"Carried the bags. Now someone carries theirs.",
      "work-business":"GST returns as character development.",
      "work-farm":"Mud first, microphone second.",
      "work-police":"Has seen a Friday night. Still talks like one.",
      "work-union":"The hall taught the volume.",
      "work-iwi":"The marae was the first select committee.",
      "work-advocacy":"Clipboard, hi-vis, then a seat.",
      "work-teacher":"The class was practice for question time.",
      "work-law":"Used to bill in six-minute units. Now bills the country.",
      "work-media":"The voice arrived before the vote.",
      "path-house":"Where the XP actually drops.",
      "house-electorate":"Someone at the gate still uses their first name.",
      "house-list":"The algorithm of party lists smiled.",
      "house-minister":"The car has a flag. The inbox has a climate.",
      "house-leader":"The stand-up is the job. The job is the stand-up.",
      "house-speaker":"Gets to say 'order' and mean it.",
      "house-deputy":"Holds the umbrella. Sometimes the map.",
      "house-pm":"Ninth floor. The lift remembers.",
      "path-craft":"Optional, except when it is the whole brand.",
      "craft-tereo":"The language is not a prop. They treat it that way on a good day.",
      "craft-sport":"Still mentions the club.",
      "craft-author":"There is a book. There is a launch. There are leftovers.",
      "craft-finance":"Can make a graph look like a moral.",
      "craft-diplomat":"Has eaten the same chicken in three capitals.",
      "craft-organiser":"Can fill a street and then a speaking list."
    };
    if (typeof window.__skillMode === "undefined") window.__skillMode = "classic";
    var SKILL_GATES = ["start","path-school","path-work","path-house","path-craft"];
    function skillTreeHtml(mp, esc) {
      var comedy = false;
      var have = {};
      SKILL_GATES.forEach(function(id){ have[id] = true; });
      ((SKILL_UNLOCKS[mp.id] || SKILL_UNLOCKS[mp.baseId] || [])).forEach(function(id){ have[id] = true; });
      function on(id){ return !!have[id]; }
      var unlocked = 0, total = 0;
      SKILL_CONSTELLATION.forEach(function(n) {
        if (n.id.indexOf("path-") === 0 || n.id === "start") return;
        total++;
        if (on(n.id)) unlocked++;
      });
      var lines = SKILL_EDGES.map(function(pair, idx) {
        var a = SKILL_CONSTELLATION.filter(function(n){ return n.id === pair[0]; })[0];
        var b = SKILL_CONSTELLATION.filter(function(n){ return n.id === pair[1]; })[0];
        if (!a || !b) return "";
        var g = (b.g === "start") ? a.g : b.g;
        var lit = on(a.id) && on(b.id);
        var ax = Math.round(a.x * 1.12 + 8), bx = Math.round(b.x * 1.12 + 8);
        return "<line data-edge=\"" + pair[0] + "|" + pair[1] + "\" x1=\"" + ax + "\" y1=\"" + a.y + "\" x2=\"" + bx + "\" y2=\"" + b.y +
          "\" class=\"skill-line skill-line-" + g + (lit ? " is-on" : "") + "\" />";
      }).join("");
      var stars = SKILL_CONSTELLATION.map(function(n) {
        var lit = on(n.id);
        var r = n.id === "start" ? 12 : (n.id.indexOf("path-") === 0 ? 10 : 8);
        var label = comedy ? (SKILL_FUN[n.id] || n.n) : n.n;
        var sx = Math.round(n.x * 1.12 + 8);
        var sy = n.y;
        var tx = n.id === "start" ? sx : (sx + 12);
        var ty = n.id === "start" ? (sy + 22) : (sy + 4);
        var anchor = n.id === "start" ? "middle" : "start";
        return "<g class=\"skill-star skill-star-" + n.g + (lit ? " is-on" : "") +
          "\" data-skill=\"" + n.id + "\" data-on=\"" + (lit ? "1" : "0") + "\">" +
          "<circle cx=\"" + sx + "\" cy=\"" + sy + "\" r=\"" + r + "\" />" +
          "<text x=\"" + tx + "\" y=\"" + ty + "\" text-anchor=\"" + anchor + "\">" + esc(label) + "</text></g>";
      }).join("");
      return "<div class=\"detail-section skill-tree-wrap\" id=\"skillTreeSection\">" +
        "<div class=\"skill-toolbar\">" +
          "<h3>" + (comedy ? "Skill tree (comedy)" : "Skill tree v1") + "</h3>" +
          "<div class=\"skill-toolbar-actions\">" +
            "<button type=\"button\" class=\"skill-mode-btn" + (comedy ? " is-on" : "") + "\" data-skill-mode=\"comedy\">Comedy</button>" +
            "<button type=\"button\" class=\"skill-mode-btn" + (!comedy ? " is-on" : "") + "\" data-skill-mode=\"classic\">Classic v1</button>" +
          "</div></div>" +
        "<p class=\"placeholder-note\">" +
          (comedy
            ? "Tap a node. " + unlocked + " of " + total + " side-quests unlocked."
            : "Qualifications and roles. Tap a node. " + unlocked + " of " + total + " skills on the record.") +
        "</p>" +
        "<div class=\"skill-sky\">" +
          "<svg viewBox=\"0 0 460 584\" role=\"img\" aria-label=\"Skill constellation\">" +
            lines + stars +
          "</svg></div>" +
        "<div class=\"skill-caption\" id=\"skillCaption\" hidden></div></div>";
    }

    const SPRITE_SHEET = { url: "busts-atlas.png", file: "busts-atlas.png", cell: 128, cols: 9, rows: 8 };
    const SPRITE_ATLAS = {"arena-williams":{"x":0,"y":0,"c":0,"r":0,"i":0},"ayesha-verrall":{"x":128,"y":0,"c":1,"r":0,"i":1},"barbara-edmonds":{"x":256,"y":0,"c":2,"r":0,"i":2},"bill-english":{"x":384,"y":0,"c":3,"r":0,"i":3},"brooke-van-velden":{"x":512,"y":0,"c":4,"r":0,"i":4},"cameron-brewer":{"x":640,"y":0,"c":5,"r":0,"i":5},"camilla-belich":{"x":768,"y":0,"c":6,"r":0,"i":6},"carmel-sepuloni":{"x":896,"y":0,"c":7,"r":0,"i":7},"casey-costello":{"x":1024,"y":0,"c":8,"r":0,"i":8},"catherine-wedd":{"x":0,"y":128,"c":0,"r":1,"i":9},"chloe-swarbrick":{"x":128,"y":128,"c":1,"r":1,"i":10},"chris-bishop":{"x":256,"y":128,"c":2,"r":1,"i":11},"chris-hipkins":{"x":384,"y":128,"c":3,"r":1,"i":12},"christopher-luxon":{"x":512,"y":128,"c":4,"r":1,"i":13},"clerk":{"x":640,"y":128,"c":5,"r":1,"i":14},"cushla-tangaere-manuel":{"x":768,"y":128,"c":6,"r":1,"i":15},"damien-oconnor":{"x":896,"y":128,"c":7,"r":1,"i":16},"dan-bidois":{"x":1024,"y":128,"c":8,"r":1,"i":17},"daniel-eb":{"x":0,"y":256,"c":0,"r":2,"i":18},"david-seymour":{"x":128,"y":256,"c":1,"r":2,"i":19},"debbie-ngarewa-packer":{"x":256,"y":256,"c":2,"r":2,"i":20},"deborah-russell":{"x":384,"y":256,"c":3,"r":2,"i":21},"erica-stanford":{"x":512,"y":256,"c":4,"r":2,"i":22},"francisco-hernandez":{"x":640,"y":256,"c":5,"r":2,"i":23},"gerry-brownlee":{"x":768,"y":256,"c":6,"r":2,"i":24},"ginny-andersen":{"x":896,"y":256,"c":7,"r":2,"i":25},"greg-oconnor":{"x":1024,"y":256,"c":8,"r":2,"i":26},"hana-rawhiti-maipi-clarke":{"x":0,"y":384,"c":0,"r":3,"i":27},"huhana-lyndon":{"x":128,"y":384,"c":1,"r":3,"i":28},"jacinda-ardern":{"x":256,"y":384,"c":2,"r":3,"i":29},"jenny-salesa":{"x":384,"y":384,"c":3,"r":3,"i":30},"jessica-hammond":{"x":512,"y":384,"c":4,"r":3,"i":31},"jo-luxton":{"x":640,"y":384,"c":5,"r":3,"i":32},"john-key":{"x":768,"y":384,"c":6,"r":3,"i":33},"judith-collins":{"x":896,"y":384,"c":7,"r":3,"i":34},"julie-anne-genter":{"x":1024,"y":384,"c":8,"r":3,"i":35},"karen-chhour":{"x":0,"y":512,"c":0,"r":4,"i":36},"katie-nimon":{"x":128,"y":512,"c":1,"r":4,"i":37},"kieran-mcanulty":{"x":256,"y":512,"c":2,"r":4,"i":38},"lan-pham":{"x":384,"y":512,"c":3,"r":4,"i":39},"lawrence-xu-nan":{"x":512,"y":512,"c":4,"r":4,"i":40},"louise-upston":{"x":640,"y":512,"c":5,"r":4,"i":41},"marama-davidson":{"x":768,"y":512,"c":6,"r":4,"i":42},"mark-mitchell":{"x":896,"y":512,"c":7,"r":4,"i":43},"matt-doocey":{"x":1024,"y":512,"c":8,"r":4,"i":44},"megan-woods":{"x":0,"y":640,"c":0,"r":5,"i":45},"mike-davidson":{"x":128,"y":640,"c":1,"r":5,"i":46},"nicola-grigg":{"x":256,"y":640,"c":2,"r":5,"i":47},"nicola-willis":{"x":384,"y":640,"c":3,"r":5,"i":48},"nicole-mckee":{"x":512,"y":640,"c":4,"r":5,"i":49},"paul-goldsmith":{"x":640,"y":640,"c":5,"r":5,"i":50},"penny-simmonds":{"x":768,"y":640,"c":6,"r":5,"i":51},"priyanca-radhakrishnan":{"x":896,"y":640,"c":7,"r":5,"i":52},"qiulae-wong":{"x":1024,"y":640,"c":8,"r":5,"i":53},"rachel-brooking":{"x":0,"y":768,"c":0,"r":6,"i":54},"rawiri-waititi":{"x":128,"y":768,"c":1,"r":6,"i":55},"ricardo-menendez-march":{"x":256,"y":768,"c":2,"r":6,"i":56},"shane-jones":{"x":384,"y":768,"c":3,"r":6,"i":57},"simeon-brown":{"x":512,"y":768,"c":4,"r":6,"i":58},"simon-court":{"x":640,"y":768,"c":5,"r":6,"i":59},"simon-watts":{"x":768,"y":768,"c":6,"r":6,"i":60},"steve-abel":{"x":896,"y":768,"c":7,"r":6,"i":61},"suze-redmayne":{"x":1024,"y":768,"c":8,"r":6,"i":62},"tama-potaka":{"x":0,"y":896,"c":0,"r":7,"i":63},"tamatha-paul":{"x":128,"y":896,"c":1,"r":7,"i":64},"teanau-tuiono":{"x":256,"y":896,"c":2,"r":7,"i":65},"todd-mcclay":{"x":384,"y":896,"c":3,"r":7,"i":66},"tom-rutherford":{"x":512,"y":896,"c":4,"r":7,"i":67},"tracey-mclellan":{"x":640,"y":896,"c":5,"r":7,"i":68},"willie-jackson":{"x":768,"y":896,"c":6,"r":7,"i":69},"willow-jean-prime":{"x":896,"y":896,"c":7,"r":7,"i":70},"winston-peters":{"x":1024,"y":896,"c":8,"r":7,"i":71}};
    
    const SPRITE_ALIAS = {
      luxon:"christopher-luxon", hipkins:"chris-hipkins", seymour:"david-seymour",
      peters:"winston-peters", brownlee:"gerry-brownlee", collins:"judith-collins",
      jones:"shane-jones", davidson:"marama-davidson", sepuloni:"carmel-sepuloni",
      waititi:"rawiri-waititi", willis:"nicola-willis", vanvelden:"brooke-van-velden",
      "van-velden":"brooke-van-velden", swarbrick:"chloe-swarbrick",
      maipi:"hana-rawhiti-maipi-clarke", jackson:"willie-jackson",
      ngarewa:"debbie-ngarewa-packer", mckee:"nicole-mckee", costello:"casey-costello",
      menendez:"ricardo-menendez-march", wong:"qiulae-wong", eb:"daniel-eb",
      hammond:"jessica-hammond", bishop:"chris-bishop", stanford:"erica-stanford",
      chhour:"karen-chhour", mcanulty:"kieran-mcanulty", genter:"julie-anne-genter",
      ardern:"jacinda-ardern", english:"bill-english", key:"john-key"
    };
    const SPRITE_DATA = new Proxy({}, { get: function(_, id) { return spriteUrl(String(id)); } });
    function spritePos(id) {
      var raw = String(id || "");
      if (SPRITE_ATLAS[raw]) return SPRITE_ATLAS[raw];
      var k = raw.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      if (SPRITE_ATLAS[k]) return SPRITE_ATLAS[k];
      if (SPRITE_ALIAS[k] && SPRITE_ATLAS[SPRITE_ALIAS[k]]) return SPRITE_ATLAS[SPRITE_ALIAS[k]];
      var keys = Object.keys(SPRITE_ATLAS);
      for (var i = 0; i < keys.length; i++) {
        if (keys[i].split("-").pop() === k) return SPRITE_ATLAS[keys[i]];
      }
      return null;
    }
    function spriteUrl(id) { return spritePos(id) ? SPRITE_SHEET.url : ""; }
    function spriteStyle(id, size) {
      var a = spritePos(id); size = size || SPRITE_SHEET.cell;
      if (!a) return "";
      var s = size / SPRITE_SHEET.cell;
      return "background-image:url(" + SPRITE_SHEET.url + ");" +
        "background-repeat:no-repeat;background-size:" +
        (SPRITE_SHEET.cols * SPRITE_SHEET.cell * s) + "px " +
        (SPRITE_SHEET.rows * SPRITE_SHEET.cell * s) + "px;" +
        "background-position:-" + (a.x * s) + "px -" + (a.y * s) + "px;";
    }
    function spriteMarkup(id, size, cls) {
      size = size || 44;
      var st = spriteStyle(id, size);
      if (!st) return "<span class=\"" + (cls || "sprite") + " sprite-empty\"></span>";
      return "<span class=\"" + (cls || "sprite") + " sprite-atlas\" style=\"width:" + size + "px;height:" + size + "px;" + st + "\"></span>";
    }


    const eras = [
      { id: "1930s", start: 1930, end: 1939, label: "1930s",
        note: "The Depression sets the rules. Relief work and soup kitchens are ordinary. Married women are expected to leave paid jobs. Same-sex relations between men are a crime. The welfare state is only just being built. Capital punishment is in force. Māori land and urban life are managed under assimilation.",
        formativeSeen: ["Depression unemployment as a normal adult risk","Married women pushed out of paid work","Homosexuality a criminal offence","First Labour Government building the welfare state","Death penalty in force","Assimilationist Māori policy","Censorship of books and film"] },
      { id: "1940s", start: 1940, end: 1949, label: "1940s",
        note: "Same-sex relations between men are a crime. Divorce requires proving fault (adultery, desertion). Married women are pushed out of jobs. Māori are expected to assimilate. The nuclear family is the only respectable model. Contraception advice is restricted and morally policed. Capital punishment is still on the books.",
        formativeSeen: ["Homosexuality a criminal offence","Fault-based divorce only","Married women pushed from paid work","Assimilationist Māori policy","Nuclear family as sole respectable model","Restricted contraception advice","Death penalty still legal"] },
      { id: "1950s", start: 1950, end: 1959, label: "1950s",
        note: "Same-sex relations between men are still a crime. Divorce still fault-based and shaming. Women belong in the home after marriage. Māori urbanisation is managed as assimilation. Full employment hides deep social rigidity. Mental illness and disability are heavily institutionalised. Censorship boards tightly control books and film.",
        formativeSeen: ["Homosexuality still criminal","Fault-based divorce","Post-marriage work for women discouraged","Assimilation and urban drift for Māori","Conservative social consensus at its peak","Institutionalisation of disability and mental illness","Strict censorship of media"] },
      { id: "1960s", start: 1960, end: 1969, label: "1960s",
        note: "Same-sex relations between men are still illegal. Divorce still requires fault. Equal pay is a campaign, not a fact. Abortion is tightly restricted. Youth culture appears; the law barely moves. The last executions take place (1957 had been the final ones, but the penalty remains until 1961 for murder). Pacific migration grows while discrimination is still routine and largely unregulated. Vietnam War protests reach the street. Decimal currency arrives in 1967.",
        formativeSeen: ["Homosexuality still illegal","Fault-based divorce","Equal-pay campaigns begin","Abortion tightly restricted","Parliament remains socially conservative","Death penalty abolished for murder 1961","Pacific migration with little anti-discrimination law"] },
      { id: "1970s", start: 1970, end: 1979, label: "1970s",
        note: "Same-sex relations between men are still illegal. Divorce still fault-based until the decade ends. Equal pay fights continue. Abortion stays restricted. Land March 1975 and Dawn Raids mark a hard edge on race. Domestic violence is still treated as a private matter. The Human Rights Commission is created (1977) but its reach is narrow.",
        formativeSeen: ["Homosexual Law Reform still years away","Fault-based divorce until 1980","Equal pay still contested","Abortion restricted","Land March 1975; Dawn Raids","Domestic violence still privatised","Human Rights Commission Act 1977"] },
      { id: "1980s", start: 1980, end: 1989, label: "1980s",
        note: "No-fault divorce arrives (Family Proceedings Act 1980). Homosexual Law Reform 1986 ends criminalisation — barely. Gay marriage is unthinkable. Women enter senior roles slowly. Treaty claims gain legal force. Sexual assault within marriage is finally criminalised (1985). Anti-nuclear policy becomes a defining national stance.",
        formativeSeen: ["No-fault divorce 1980","Homosexual Law Reform Act 1986","Gay marriage still unthinkable","Women rare in senior roles","Waitangi Tribunal strengthened","Marital sexual assault criminalised 1985","Nuclear-free New Zealand"] },
      { id: "1990s", start: 1990, end: 1999, label: "1990s",
        note: "Bill of Rights Act 1990. Human Rights Act 1993 bans discrimination on sexual orientation, sex, race, disability and more. Same-sex relations are legal; same-sex marriage is not. Treaty settlements become mainstream. Climate is still fringe. Domestic violence legislation tightens. MMP (1996) changes who can get into Parliament.",
        formativeSeen: ["NZ Bill of Rights Act 1990","Human Rights Act 1993 (incl. sexual orientation)","Gay marriage still absent","Treaty settlements enter mainstream","Climate still marginal in policy","Stronger domestic violence law","MMP from 1996"] },
      { id: "2000s", start: 2000, end: 2009, label: "2000s",
        note: "Prostitution Reform Act 2003. Civil unions arrive (2004); full marriage equality does not. Abortion remains restricted. Same-sex parenting is contested. Gender identity is still a fringe fight. Paid parental leave expands. Section 59 'anti-smacking' debate signals a new culture-war front.",
        formativeSeen: ["Prostitution Reform Act 2003","Civil Union Act 2004","Marriage equality still future","Abortion still restricted","Gender identity still fringe","Paid parental leave expands","Section 59 / anti-smacking debate"] },
      { id: "2010s", start: 2010, end: 2019, label: "2010s",
        note: "Marriage equality passes (2013). Abortion reform is still unfinished. Gender identity and race politics move to the centre of the culture war. Social media becomes the main political arena. Paid parental leave and flexible work normalise for many. The first major climate legislation package lands, still contested.",
        formativeSeen: ["Marriage equality 2013","Abortion reform still pending","Gender and race as culture-war fronts","Social media as primary arena","Parental leave and flexible work expand","Early climate legislation packages"] },
      { id: "2020s", start: 2020, end: 2029, label: "2020s",
        note: "Abortion is decriminalised (2020). Conversion practices banned (2022). Marriage equality is settled law. Gender identity and co-governance become the live fights. The culture war is the main stage. Hate-speech and free-speech arguments intensify. Climate targets are written into law while delivery lags.",
        formativeSeen: ["Abortion decriminalised 2020","Conversion practices ban 2022","Marriage equality settled","Gender identity and co-governance contested","Culture war as the main political stage","Hate speech vs free speech debates","Climate targets legislated"] }
    ];

    const ERA_SPOTLIGHT = {
  "1940s": {
    "reforms": [
      {
        "year": "1945",
        "items": [
          "Labour continues post-war social security framework"
        ]
      },
      {
        "year": "1949",
        "items": [
          "National wins office under Sidney Holland — long conservative period begins"
        ]
      }
    ],
    "byDecadesEnd": [
      "Homosexuality remains a criminal offence",
      "Divorce still requires proof of fault (adultery, desertion, etc.)",
      "Married women are still expected to leave paid work",
      "Death penalty still on the books",
      "Assimilation is still the dominant official expectation for Māori",
      "Gay marriage and civil unions are unthinkable in mainstream politics"
    ]
  },
  "1950s": {
    "reforms": [
      {
        "year": "1951",
        "items": [
          "Waterfront dispute — industrial confrontation hardens politics"
        ]
      },
      {
        "year": "1950s",
        "items": [
          "Full-employment welfare state settles as the public consensus"
        ]
      }
    ],
    "byDecadesEnd": [
      "Homosexuality still criminal",
      "Fault-based divorce still the only route out of marriage",
      "No comprehensive anti-discrimination law for race or sex in employment",
      "Abortion remains tightly restricted and heavily stigmatised",
      "Institutionalisation remains the default for many disabled people",
      "Same-sex relationships have no legal recognition of any kind"
    ]
  },
  "1960s": {
    "reforms": [
      {
        "year": "1961",
        "items": [
          "Death penalty abolished for murder"
        ]
      },
      {
        "year": "1960s",
        "items": [
          "Vietnam War protests grow on campuses and in city streets",
          "Equal-pay campaigns grow; statute still lags social change"
        ]
      },
      {
        "year": "1967",
        "items": [
          "Decimal currency introduced — dollars and cents replace pounds, shillings and pence"
        ]
      }
    ],
    "byDecadesEnd": [
      "Homosexuality still illegal",
      "Divorce still fault-based",
      "Abortion still tightly restricted",
      "No Human Rights Commission framework yet",
      "Gay marriage unthinkable",
      "Pacific migrants face routine discrimination with little legal protection"
    ]
  },
  "1970s": {
    "reforms": [
      {
        "year": "1972",
        "items": [
          "Equal Pay Act"
        ]
      },
      {
        "year": "1975",
        "items": [
          "Waitangi Tribunal established",
          "Māori Land March / Te Rōpū o te Matakite"
        ]
      },
      {
        "year": "1974",
        "items": [
          "Christchurch hosts the British Commonwealth Games"
        ]
      },
      {
        "year": "1970s",
        "items": [
          "Dawn Raids target Pacific overstayers"
        ]
      },
      {
        "year": "1977",
        "items": [
          "Human Rights Commission Act"
        ]
      }
    ],
    "byDecadesEnd": [
      "Homosexuality still a crime until the mid-1980s",
      "Abortion remains highly restricted despite growing campaign pressure",
      "Marriage remains opposite-sex only with no civil-union alternative",
      "No legal recognition of same-sex partnerships",
      "Nuclear-ship visits still occur — nuclear-free law not yet passed"
    ]
  },
  "1980s": {
    "reforms": [
      {
        "year": "1980",
        "items": [
          "Family Proceedings Act — no-fault divorce framework"
        ]
      },
      {
        "year": "1981",
        "items": [
          "Springbok Tour protests divide the country"
        ]
      },
      {
        "year": "1985",
        "items": [
          "Sexual assault within marriage criminalised",
          "Rainbow Warrior bombed in Auckland by French agents"
        ]
      },
      {
        "year": "1986",
        "items": [
          "Homosexual Law Reform Act"
        ]
      },
      {
        "year": "1987",
        "items": [
          "New Zealand Nuclear Free Zone, Disarmament, and Arms Control Act",
          "Sharemarket crash hits New Zealand hard"
        ]
      }
    ],
    "byDecadesEnd": [
      "Same-sex marriage still unthinkable in mainstream politics",
      "Civil unions do not exist yet",
      "Abortion law still restrictive (Crimes Act framework)",
      "No hate-speech regime of the later 2010s–20s shape",
      "Gender identity not a mainstream legislative subject"
    ]
  },
  "1990s": {
    "reforms": [
      {
        "year": "1990",
        "items": [
          "New Zealand Bill of Rights Act"
        ]
      },
      {
        "year": "1993",
        "items": [
          "Human Rights Act consolidates discrimination grounds"
        ]
      },
      {
        "year": "1995",
        "items": [
          "Cave Creek viewing platform collapse, Paparoa National Park"
        ]
      },
      {
        "year": "1997",
        "items": [
          "Kyoto Protocol era — climate talks become part of NZ public debate"
        ]
      },
      {
        "year": "1996",
        "items": [
          "First MMP election — multi-party Parliament becomes normal"
        ]
      }
    ],
    "byDecadesEnd": [
      "Same-sex marriage still not available",
      "Civil unions still years away (2004)",
      "Abortion still regulated under older criminal framework",
      "Assisted dying / end-of-life choice not on the near-term legislative agenda"
    ]
  },
  "2000s": {
    "reforms": [
      {
        "year": "2003",
        "items": [
          "Prostitution Reform Act"
        ]
      },
      {
        "year": "2004",
        "items": [
          "Civil Union Act"
        ]
      },
      {
        "year": "2005",
        "items": [
          "Relationships (Statutory References) Act — wider legal recognition of civil unions"
        ]
      }
    ],
    "byDecadesEnd": [
      "Marriage itself remains opposite-sex only until 2013",
      "Abortion still not decriminalised",
      "End of Life Choice not yet law",
      "Conversion-practice bans still unthinkable as statute"
    ]
  },
  "2010s": {
    "reforms": [
      {
        "year": "2013",
        "items": [
          "Marriage Amendment Act — marriage equality"
        ]
      },
      {
        "year": "2018–19",
        "items": [
          "End of Life Choice Bill advances through Parliament (Seymour)"
        ]
      },
      {
        "year": "2019",
        "items": [
          "End of Life Choice Act passed (subject to 2020 referendum)"
        ]
      }
    ],
    "byDecadesEnd": [
      "Abortion still formally under the pre-2020 criminal framework until 2020 reform",
      "Conversion practices not yet banned by statute",
      "Co-governance and gender-identity law remain live, unsettled culture-war fronts"
    ]
  },
  "2020s": {
    "reforms": [
      {
        "year": "2020",
        "items": [
          "Abortion Legislation Act — decriminalisation"
        ]
      },
      {
        "year": "2020",
        "items": [
          "End of Life Choice referendum succeeds; Act in force from 2021"
        ]
      },
      {
        "year": "2022",
        "items": [
          "Conversion Practices Prohibition Legislation Act"
        ]
      }
    ],
    "byDecadesEnd": [
      "Culture-war disputes over co-governance, free speech, and gender policy remain unsettled",
      "Climate targets exist in law while delivery and cost remain contested",
      "Housing affordability remains unresolved as a structural problem"
    ]
  }
};


    let mps = [
      { id: "peters", rank: 1, name: "Winston Peters", party: "NZ First", birthYear: 1945,
        servedFrom: 1978,
        partyHistory: [{ party: "National", from: 1978, to: 1993 }, { party: "NZ First", from: 1993, to: null }], electorate: "List", role: "Minister of Foreign Affairs", formative: "1960–1970", notes: "Longest-serving current MP.",
        sprite: SPRITE_DATA["winston-peters"],
        badges: [{key:"law-and-order",stance:"up"},{key:"free-speech",stance:"up"},{key:"nuclear-free",stance:"up"},{key:"gay-rights",stance:"down"},{key:"marriage-equality",stance:"down"},{key:"gst-off-food",stance:"up"},{key:"gang-patch-ban",stance:"up"},{key:"three-strikes",stance:"up"},{key:"foreign-buyers",stance:"up"},{key:"elder-dignity",stance:"up"},{key:"refugee-support",stance:"down"},{key:"wealth-tax",stance:"down"},{key:"capital-gains-tax",stance:"down"}],
        positions: [
          { theme: "LGBT equality (Homosexual Law Reform / marriage)", thumb: "down", evidence: "Voted against Homosexual Law Reform 1986; opposed / sought referendum on same-sex marriage 2013; recent gender-definition bill." },
          { theme: "Treaty / Māori seats", thumb: "mixed", evidence: "Has called for abolition of Māori seats; also emphasises lifelong work for Māori." }
        ]
      },
      { id: "brownlee", rank: 5, name: "Gerry Brownlee", party: "National", birthYear: 1956,
        servedFrom: 1996, electorate: "List (Speaker)", role: "Speaker", formative: "1971–1981", notes: "Came of age at end of post-war consensus.",
        sprite: SPRITE_DATA["gerry-brownlee"],
        badges: ["free-market", "law-and-order", "nuclear-free",{key:"three-strikes",stance:"up"},{key:"gang-patch-ban",stance:"up"},{key:"speed-limits",stance:"up"},{key:"fast-track-consent",stance:"up"}],
        positions: [
          { theme: "Public record on formative-era social themes", thumb: "mixed", evidence: "Limited high-profile conscience votes on the core formative list items in readily available sources; more research needed." }
        ]
      },
      { id: "collins", rank: 4, name: "Judith Collins", party: "National", birthYear: 1959,
        servedFrom: 2002, electorate: "Papakura", role: "Former Attorney-General", formative: "1974–1984", notes: "Entered adulthood just before 1980s reforms.",
        sprite: SPRITE_DATA["judith-collins"],
        badges: [{key:"law-and-order",stance:"up"},{key:"free-market",stance:"up"},{key:"gun-reform",stance:"up"},{key:"marriage-equality",stance:"up"},{key:"marriage-equality",stance:"down"},{key:"abortion-rights",stance:"up"},{key:"three-strikes",stance:"up"},{key:"gang-patch-ban",stance:"up"},{key:"prison-reform",stance:"down"},{key:"smokefree",stance:"down"}],
        positions: [
          { theme: "Same-sex marriage / civil unions", thumb: "up", evidence: "Voted against civil unions 2004 (wanted full equality or nothing); later voted for Marriage (Definition of Marriage) Amendment Act 2013." },
          { theme: "Abortion law reform", thumb: "up", evidence: "Voted for Abortion Legislation Act 2019 that removed abortion from the Crimes Act." }
        ]
      },
      { id: "jones", rank: 2, name: "Shane Jones", party: "NZ First", birthYear: 1959,
        servedFrom: 2005,
        partyHistory: [{ party: "Labour", from: 2005, to: 2014 }, { party: "NZ First", from: 2017, to: null }], electorate: "List", role: "Minister Oceans & Fisheries", formative: "1974–1984", notes: "Entered adulthood around Homosexual Law Reform and restructuring.",
        sprite: SPRITE_DATA["shane-jones"],
        badges: ["law-and-order", "free-market", "nuclear-free",{key:"fast-track-consent",stance:"up"},{key:"oil-and-gas",stance:"up"},{key:"gang-patch-ban",stance:"up"},{key:"farm-freshwater",stance:"down"},{key:"clean-energy-transition",stance:"down"}],
        positions: [
          { theme: "Public record on formative-era social themes", thumb: "mixed", evidence: "More research needed on specific conscience votes matching the formative list." }
        ]
      },
      { id: "luxon", rank: 1, name: "Christopher Luxon", party: "National", birthYear: 1970,
        servedFrom: 2020, electorate: "Botany", role: "Prime Minister", isPm: true, formative: "1985–1995", notes: "Formative years during Rogernomics and early climate awareness.",
        sprite: SPRITE_DATA["christopher-luxon"],
        badges: ["free-market", "law-and-order", "housing",{key:"three-strikes",stance:"up"},{key:"gang-patch-ban",stance:"up"},{key:"fast-track-consent",stance:"up"},{key:"speed-limits",stance:"up"},{key:"grocery-competition",stance:"up"},{key:"oil-and-gas",stance:"up"},{key:"smokefree",stance:"down"},{key:"capital-gains-tax",stance:"down"},{key:"wealth-tax",stance:"down"},{key:"fair-pay-agreements",stance:"down"},{key:"gst-off-food",stance:"down"}],
        positions: [
          { theme: "Abortion", thumb: "down", evidence: "Has described himself as pro-life and compared abortion to murder; said National would not change the 2020 law while he is PM." },
          { theme: "Climate / resource orthodoxy", thumb: "mixed", evidence: "Government reversed offshore oil & gas exploration ban and adjusted methane targets; still maintains some climate framework." }
        ]
      },
      { id: "davidson", rank: 1, name: "Marama Davidson", party: "Green", birthYear: 1973,
        servedFrom: 2015, electorate: "List", role: "Green Co-leader", formative: "1988–1998", notes: "Grew up during Māori language revitalisation.",
        sprite: SPRITE_DATA["marama-davidson"],
        badges: ["treaty-rights", "climate-action", "gay-rights", "womens-rights", "identity-freedom", "housing",{key:"wealth-tax",stance:"up"},{key:"capital-gains-tax",stance:"up"},{key:"fare-cap",stance:"up"},{key:"free-public-transport",stance:"up"},{key:"mental-health-access",stance:"up"},{key:"refugee-support",stance:"up"},{key:"prison-reform",stance:"up"},{key:"gender-pay-equity",stance:"up"},{key:"universal-basic-services",stance:"up"}],
        positions: [
          { theme: "Climate urgency & progressive social change", thumb: "up", evidence: "Consistent Green positions supporting strong climate action and progressive social reforms." }
        ]
      },
      { id: "sepuloni", rank: 2, name: "Carmel Sepuloni", party: "Labour", birthYear: 1977,
        servedFrom: 2008, electorate: "Kelston", role: "Former Deputy PM", formative: "1992–2002", notes: "Formed under MMP and post-Homosexual Law Reform norms.",
        sprite: SPRITE_DATA["carmel-sepuloni"],
        badges: ["welfare-state", "womens-rights", "anti-discrimination", "safe-homes",{key:"living-wage",stance:"up"},{key:"affordable-childcare",stance:"up"},{key:"parental-leave",stance:"up"},{key:"gender-pay-equity",stance:"up"},{key:"fair-pay-agreements",stance:"up"},{key:"elder-dignity",stance:"up"}],
        positions: [
          { theme: "Public record on formative-era social themes", thumb: "mixed", evidence: "Labour record generally progressive on the listed themes; individual conscience votes need more specific sourcing." }
        ]
      },
      { id: "hipkins", rank: 1, name: "Chris Hipkins", party: "Labour", birthYear: 1978,
        servedFrom: 2008, electorate: "Remutaka", role: "Leader of the Opposition", isPm: false, formative: "1993–2003", notes: "Came of age under MMP and early internet.",
        sprite: SPRITE_DATA["chris-hipkins"],
        badges: ["welfare-state", "workers-rights", "marriage-equality", "abortion-rights", "climate-action",{key:"fair-pay-agreements",stance:"up"},{key:"smokefree",stance:"up"},{key:"fees-free",stance:"up"},{key:"living-wage",stance:"up"},{key:"mental-health",stance:"up"},{key:"pharmac-access",stance:"up"},{key:"affordable-childcare",stance:"up"},{key:"wealth-tax",stance:"down"},{key:"capital-gains-tax",stance:"down"}],
        positions: [
          { theme: "Public record on formative-era social themes", thumb: "mixed", evidence: "Labour record generally progressive; more specific vote sourcing recommended for precision." }
        ]
      },
      { id: "waititi", rank: 1, name: "Rawiri Waititi", party: "Te Pāti Māori", birthYear: 1980,
        servedFrom: 2020, electorate: "Waiariki", role: "Co-leader", formative: "1995–2005", notes: "Formative years during rise of Māori political assertion under MMP.",
        sprite: SPRITE_DATA["rawiri-waititi"],
        badges: ["treaty-rights", "anti-discrimination", "housing", "identity-freedom",{key:"indigenous-language-revival",stance:"up"},{key:"community-housing",stance:"up"},{key:"capital-gains-tax",stance:"up"},{key:"wealth-tax",stance:"up"},{key:"prison-reform",stance:"up"},{key:"foreign-buyers",stance:"up"}],
        positions: [
          { theme: "Treaty / Māori rights", thumb: "up", evidence: "Strong public advocacy for Māori rights and Treaty-centred politics." }
        ]
      },
      { id: "willis", rank: 2, name: "Nicola Willis", party: "National", birthYear: 1981,
        servedFrom: 2018, electorate: "List", role: "Minister of Finance", formative: "1996–2006", notes: "Came of age after civil unions.",
        sprite: SPRITE_DATA["nicola-willis"],
        badges: ["free-market", "housing", "law-and-order",{key:"grocery-competition",stance:"up"},{key:"kiwisaver",stance:"up"},{key:"fast-track-consent",stance:"up"},{key:"capital-gains-tax",stance:"down"},{key:"wealth-tax",stance:"down"},{key:"fair-pay-agreements",stance:"down"},{key:"living-wage",stance:"down"}],
        positions: [
          { theme: "Public record on formative-era social themes", thumb: "mixed", evidence: "More research needed on specific conscience votes." }
        ]
      },
      { id: "seymour", rank: 1, name: "David Seymour", party: "ACT", birthYear: 1983,
        servedFrom: 2014, electorate: "Epsom", role: "Deputy PM / Regulation", formative: "1998–2008", notes: "Formative years after civil unions and during rise of digital media.",
        sprite: SPRITE_DATA["david-seymour"],
        badges: ["free-market", "free-speech", "secular-state", "end-of-life-choice",{key:"three-strikes",stance:"up"},{key:"gang-patch-ban",stance:"up"},{key:"fast-track-consent",stance:"up"},{key:"anti-corruption",stance:"up"},{key:"capital-gains-tax",stance:"down"},{key:"wealth-tax",stance:"down"},{key:"fair-pay-agreements",stance:"down"},{key:"smokefree",stance:"down"},{key:"gst-off-food",stance:"down"}],
        positions: [
          { theme: "End-of-life choice / personal autonomy", thumb: "up", evidence: "Author and long-time champion of the End of Life Choice Act; classical-liberal framing of individual choice." }
        ]
      },
      { id: "vanvelden", rank: 2, name: "Brooke van Velden", party: "ACT", birthYear: 1992,
        servedFrom: 2020, electorate: "Tāmaki", role: "Minister Internal Affairs", formative: "2007–2017", notes: "Came of age after major social liberalisation.",
        sprite: SPRITE_DATA["brooke-van-velden"],
        badges: ["free-market", "free-speech",{key:"fair-pay-agreements",stance:"down"},{key:"living-wage",stance:"down"},{key:"gender-pay-equity",stance:"down"},{key:"fast-track-consent",stance:"up"}],
        positions: [
          { theme: "Public record on formative-era social themes", thumb: "mixed", evidence: "Younger cohort; more research needed on specific positions matching the list." }
        ]
      },
      { id: "swarbrick", rank: 2, name: "Chlöe Swarbrick", party: "Green", birthYear: 1994,
        servedFrom: 2017, electorate: "Auckland Central", role: "Green Co-leader", formative: "2009–2019", notes: "Socialised after marriage equality and during intensified climate discourse.",
        sprite: SPRITE_DATA["chloe-swarbrick"],
        badges: ["climate-action", "housing", "gay-rights", "abortion-rights", "identity-freedom",{key:"wealth-tax",stance:"up"},{key:"capital-gains-tax",stance:"up"},{key:"clean-energy-transition",stance:"up"},{key:"ocean-protection",stance:"up"},{key:"animal-rights",stance:"up"},{key:"fare-cap",stance:"up"},{key:"smokefree",stance:"up"},{key:"pharmac-access",stance:"up"}],
        positions: [
          { theme: "Climate urgency", thumb: "up", evidence: "Consistent, high-profile advocacy for treating climate as emergency and for progressive social positions." },
          { theme: "LGBT / progressive social reform", thumb: "up", evidence: "Green Party positions and personal record align with post-2013 equality framework." }
        ]
      },
      { id: "maipi", rank: 3, name: "Hana-Rāwhiti Maipi-Clarke", party: "Te Pāti Māori", birthYear: 2002,
        servedFrom: 2023, electorate: "Hauraki-Waikato", role: "MP", formative: "2017–2027", notes: "Youngest current MP. Consciousness formed after major social reforms.",
        sprite: SPRITE_DATA["hana-rawhiti-maipi-clarke"],
        badges: ["treaty-rights", "climate-action", "identity-freedom", "gay-rights",{key:"indigenous-language-revival",stance:"up"},{key:"accessible-democracy",stance:"up"},{key:"ocean-protection",stance:"up"},{key:"community-housing",stance:"up"}],
        positions: [
          { theme: "Public record", thumb: "mixed", evidence: "Very recent entry to Parliament; limited long voting record yet." }
        ]
      },
      { id: "jackson", rank: 3, name: "Willie Jackson", party: "Labour", birthYear: 1961,
        servedFrom: 1999,
        partyHistory: [{ party: "Alliance", from: 1999, to: 2002 }, { party: "Labour", from: 2017, to: null }], electorate: "List", role: "Spokesperson Māori Development", formative: "1976–1986", notes: "Former Minister; urban Māori advocate and broadcaster.",
        sprite: SPRITE_DATA["willie-jackson"],
        badges: ["treaty-rights", "workers-rights", "welfare-state", "anti-discrimination",{key:"indigenous-language-revival",stance:"up"},{key:"fair-pay-agreements",stance:"up"},{key:"living-wage",stance:"up"},{key:"creative-arts-funding",stance:"up"}],
        positions: [
          { theme: "Treaty / Māori rights", thumb: "up", evidence: "Long public record supporting Māori development and Treaty-centred policy." }
        ]
      },
      { id: "ngarewa", rank: 2, name: "Debbie Ngarewa-Packer", party: "Te Pāti Māori", birthYear: 1966,
        servedFrom: 2020, electorate: "Te Tai Hauāuru", role: "Co-leader", formative: "1981–1991", notes: "Co-leader of Te Pāti Māori; iwi leader (Ngāti Ruanui).",
        sprite: SPRITE_DATA["debbie-ngarewa-packer"],
        badges: ["treaty-rights", "womens-rights", "anti-discrimination", "climate-action",{key:"indigenous-language-revival",stance:"up"},{key:"ocean-protection",stance:"up"},{key:"community-housing",stance:"up"},{key:"sustainable-agriculture",stance:"up"}],
        positions: [
          { theme: "Treaty / Māori rights", thumb: "up", evidence: "Strong advocacy for Māori rights, co-governance and Treaty obligations." }
        ]
      },
      { id: "mckee", rank: 3, name: "Nicole McKee", party: "ACT", birthYear: 1971,
        servedFrom: 2020, electorate: "List", role: "Minister for Courts / Deputy Leader", formative: "1986–1996", notes: "Firearms policy background; Minister for Courts.",
        sprite: SPRITE_DATA["nicole-mckee"],
        badges: ["free-market", "free-speech", "law-and-order",{key:"three-strikes",stance:"up"},{key:"gang-patch-ban",stance:"up"},{key:"prison-reform",stance:"down"}],
        positions: [
          { theme: "Public record on formative-era social themes", thumb: "mixed", evidence: "More research needed on specific conscience votes matching the formative list." }
        ]
      },
      { id: "costello", rank: 3, name: "Casey Costello", party: "NZ First", birthYear: 1966,
        servedFrom: 2023, electorate: "List", role: "Minister of Customs / Seniors", formative: "1981–1991", notes: "Former police officer; Minister of Customs and Seniors.",
        sprite: SPRITE_DATA["casey-costello"],
        badges: ["law-and-order", "free-speech",{key:"gang-patch-ban",stance:"up"},{key:"smokefree",stance:"down"},{key:"three-strikes",stance:"up"}],
        positions: [
          { theme: "Public record on formative-era social themes", thumb: "mixed", evidence: "Recent entry; limited long voting record on the core formative list items." }
        ]
      },
      { id: "menendez", rank: 3, name: "Ricardo Menéndez March", party: "Green", birthYear: 1987,
        servedFrom: 2020, electorate: "List", role: "MP", formative: "2002–2012", notes: "Mexican-born; migrant advocacy background.",
        sprite: SPRITE_DATA["ricardo-menendez-march"],
        badges: ["open-immigration", "gay-rights", "climate-action", "welfare-state", "identity-freedom",{key:"refugee-support",stance:"up"},{key:"universal-basic-services",stance:"up"},{key:"wealth-tax",stance:"up"},{key:"mental-health-access",stance:"up"},{key:"accessible-democracy",stance:"up"}],
        positions: [
          { theme: "Climate urgency & progressive social change", thumb: "up", evidence: "Consistent Green positions on climate, migration and progressive social policy." }
        ]
      },
      { id: "wong", rank: 1, name: "Qiulae Wong", party: "TOP", birthYear: 1988,
        servedFrom: 2023, electorate: "Mt Albert (cand.)", role: "Leader", formative: "2003–2013", notes: "Leader of the Opportunity Party (TOP); business background.",
        sprite: SPRITE_DATA["qiulae-wong"],
        badges: ["climate-action", "housing", "free-market", "anti-discrimination",{key:"capital-gains-tax",stance:"up"},{key:"clean-energy-transition",stance:"up"},{key:"digital-equity",stance:"up"},{key:"anti-corruption",stance:"up"}],
        positions: [
          { theme: "Public record on formative-era social themes", thumb: "mixed", evidence: "Party not yet in Parliament; limited formal voting record." }
        ]
      },
      { id: "eb", rank: 2, name: "Daniel Eb", party: "TOP", birthYear: 1985,
        servedFrom: 2023, electorate: "Kaipara ki Mahurangi (cand.)", role: "Deputy Leader", formative: "2000–2010", notes: "Deputy leader; agriculture / food systems focus.",
        sprite: SPRITE_DATA["daniel-eb"],
        badges: ["climate-action", "housing", "free-market",{key:"capital-gains-tax",stance:"up"},{key:"clean-energy-transition",stance:"up"},{key:"youth-employment",stance:"up"}],
        positions: [
          { theme: "Public record on formative-era social themes", thumb: "mixed", evidence: "Party not yet in Parliament; limited formal voting record." }
        ]
      },
      { id: "hammond", rank: 3, name: "Jessica Hammond", party: "TOP", birthYear: 1979,
        servedFrom: 2020, electorate: "Wellington North (cand.)", role: "List candidate", formative: "1994–2004", notes: "Long-time TOP candidate; public servant and writer.",
        sprite: SPRITE_DATA["jessica-hammond"],
        badges: ["climate-action", "housing", "welfare-state",{key:"capital-gains-tax",stance:"up"},{key:"community-housing",stance:"up"},{key:"digital-equity",stance:"up"}],
        positions: [
          { theme: "Public record on formative-era social themes", thumb: "mixed", evidence: "Party not yet in Parliament; limited formal voting record." }
        ]
      },
      { id: "bishop", rank: 3, name: "Chris Bishop", party: "National", birthYear: 1982,
        servedFrom: 2014, electorate: "Hutt South", role: "Senior Minister", formative: "1997–2007", notes: "Ranked #3 on National list; senior Cabinet minister.",
        sprite: SPRITE_DATA["chris-bishop"],
        badges: ["free-market", "housing", "law-and-order",{key:"fast-track-consent",stance:"up"},{key:"speed-limits",stance:"up"},{key:"three-strikes",stance:"up"},{key:"community-housing",stance:"up"},{key:"fair-pay-agreements",stance:"down"}],
        positions: [{ theme: "Public record on formative-era social themes", thumb: "mixed", evidence: "More research needed on specific conscience votes." }]
      },
      { id: "stanford", rank: 5, name: "Erica Stanford", party: "National", birthYear: 1978,
        servedFrom: 2017, electorate: "East Coast Bays", role: "Minister of Education", formative: "1993–2003", notes: "Ranked high on National list; Education portfolio.",
        sprite: SPRITE_DATA["erica-stanford"],
        badges: ["free-market", "housing",{key:"digital-equity",stance:"up"},{key:"youth-employment",stance:"up"},{key:"fees-free",stance:"down"}],
        positions: [{ theme: "Public record on formative-era social themes", thumb: "mixed", evidence: "More research needed on specific conscience votes." }]
      },
      { id: "chhour", rank: 4, name: "Karen Chhour", party: "ACT", birthYear: 1983,
        servedFrom: 2020, electorate: "List", role: "Minister for Children", formative: "1998–2008", notes: "ACT MP; Minister for Children.",
        sprite: SPRITE_DATA["karen-chhour"],
        badges: ["law-and-order", "safe-homes", "free-market",{key:"three-strikes",stance:"up"},{key:"gang-patch-ban",stance:"up"},{key:"affordable-childcare",stance:"up"},{key:"prison-reform",stance:"down"}],
        positions: [{ theme: "Public record on formative-era social themes", thumb: "mixed", evidence: "More research needed on specific conscience votes." }]
      },
      { id: "mcanulty", rank: 4, name: "Kieran McAnulty", party: "Labour", birthYear: 1985,
        servedFrom: 2017, electorate: "List", role: "Senior MP", formative: "2000–2010", notes: "Senior Labour MP; former minister.",
        sprite: SPRITE_DATA["kieran-mcanulty"],
        badges: ["welfare-state", "workers-rights", "housing",{key:"living-wage",stance:"up"},{key:"community-housing",stance:"up"},{key:"fair-pay-agreements",stance:"up"},{key:"farm-freshwater",stance:"up"}],
        positions: [{ theme: "Public record on formative-era social themes", thumb: "mixed", evidence: "More research needed on specific conscience votes." }]
      },
      { id: "genter", rank: 4, name: "Julie Anne Genter", party: "Green", birthYear: 1979,
        servedFrom: 2011, electorate: "List", role: "MP", formative: "1994–2004", notes: "Long-serving Green MP; former minister.",
        sprite: SPRITE_DATA["julie-anne-genter"],
        badges: ["climate-action", "housing", "womens-rights", "anti-discrimination",{key:"speed-limits",stance:"up"},{key:"fare-cap",stance:"up"},{key:"free-public-transport",stance:"up"},{key:"clean-energy-transition",stance:"up"},{key:"gender-pay-equity",stance:"up"}],
        positions: [{ theme: "Public record on formative-era social themes", thumb: "mixed", evidence: "Consistent Green progressive record." }]
      },
      { id: "ardern", rank: 1, name: "Jacinda Ardern", party: "Labour", birthYear: 1980,
        servedFrom: 2008, electorate: "Former (Mount Albert)", role: "Former Prime Minister (2017–2023)", formative: "1995–2005", notes: "Youngest NZ female PM; led through Christchurch mosque attacks and COVID.",
        prior: true,
        badges: [{key:"gay-rights",stance:"up"},{key:"marriage-equality",stance:"up"},{key:"abortion-rights",stance:"up"},{key:"climate-action",stance:"up"},{key:"welfare-state",stance:"up"},{key:"gun-reform",stance:"up"},{key:"identity-freedom",stance:"up"},{key:"anti-discrimination",stance:"up"},{key:"smokefree",stance:"up"},{key:"mental-health",stance:"up"},{key:"fair-pay-agreements",stance:"up"},{key:"affordable-childcare",stance:"up"},{key:"child-poverty",stance:"up"},{key:"wealth-tax",stance:"down"},{key:"capital-gains-tax",stance:"down"}],
        positions: [
          { theme: "Marriage equality / LGBT rights", thumb: "up", evidence: "Strong public support for marriage equality; progressive social agenda throughout premiership." },
          { theme: "Gun reform (post-Christchurch)", thumb: "up", evidence: "Led rapid Arms Amendment Acts 2019 after the mosque attacks." },
          { theme: "Abortion law reform", thumb: "up", evidence: "Supported Abortion Legislation Act 2020 removing abortion from Crimes Act." },
          { theme: "Climate action", thumb: "up", evidence: "Zero Carbon Act; declared climate emergency." }
        ]
      },
      { id: "english", rank: 1, name: "Bill English", party: "National", birthYear: 1961,
        servedFrom: 1990, electorate: "Former (Clutha-Southland / List)", role: "Former Prime Minister (2016–2017)", formative: "1976–1986", notes: "Long-serving Finance Minister then short premiership; known for social investment approach.",
        prior: true,
        badges: [{key:"free-market",stance:"up"},{key:"law-and-order",stance:"up"},{key:"welfare-state",stance:"up"},{key:"housing",stance:"up"},{key:"marriage-equality",stance:"down"},{key:"kiwisaver",stance:"up"},{key:"capital-gains-tax",stance:"down"},{key:"community-housing",stance:"up"}],
        positions: [
          { theme: "Same-sex marriage", thumb: "down", evidence: "Voted against Marriage (Definition of Marriage) Amendment Act 2013." },
          { theme: "Welfare / social investment", thumb: "up", evidence: "Championed social investment approach while Finance Minister and PM." },
          { theme: "Economic management", thumb: "up", evidence: "Long tenure as Finance Minister through GFC recovery." }
        ]
      },
      { id: "key", rank: 1, name: "John Key", party: "National", birthYear: 1961,
        servedFrom: 2002, electorate: "Former (Helensville)", role: "Former Prime Minister (2008–2016)", formative: "1976–1986", notes: "Led National to three election victories; centrist pragmatic style.",
        prior: true,
        badges: [{key:"free-market",stance:"up"},{key:"law-and-order",stance:"up"},{key:"marriage-equality",stance:"up"},{key:"nuclear-free",stance:"up"},{key:"open-immigration",stance:"up"},{key:"kiwisaver",stance:"up"},{key:"foreign-buyers",stance:"down"},{key:"capital-gains-tax",stance:"down"},{key:"anti-corruption",stance:"up"}],
        positions: [
          { theme: "Same-sex marriage", thumb: "up", evidence: "Voted for Marriage (Definition of Marriage) Amendment Act 2013; publicly supportive." },
          { theme: "Nuclear-free policy", thumb: "up", evidence: "Maintained NZ nuclear-free status throughout premiership." },
          { theme: "Economic & tax policy", thumb: "up", evidence: "Tax cuts, partial asset sales, strong growth narrative post-GFC." }
        ]
      }

    ,
      { id: "muldoon", rank: 1, name: "Robert Muldoon", party: "National", birthYear: 1921,
        servedFrom: 1960, electorate: "Former (Tamaki)", role: "Former Prime Minister (1975–1984)", formative: "1936–1946",
        notes: "National MP for Tamaki from 1960; PM 1975–1984. Known for Think Big energy projects, wage/price freezes, and a confrontational public style. Defeated by Lange’s Labour in 1984.",
        prior: true,
        isPm: true,
        badges: [{key:"law-and-order",stance:"up"},{key:"free-market",stance:"down"},{key:"nuclear-free",stance:"down"},{key:"workers-rights",stance:"down"},{key:"welfare-state",stance:"up"},{key:"elder-dignity",stance:"up"},{key:"foreign-buyers",stance:"up"}],
        positions: [
          { theme: "Economic intervention & Think Big", thumb: "down", evidence: "Favoured state-led energy projects and wage/price controls rather than market liberalisation." },
          { theme: "Law and order / strong executive", thumb: "up", evidence: "Emphasised firm policing and a highly personalised premiership style." },
          { theme: "Nuclear / ANZUS alignment", thumb: "down", evidence: "Opposed the nuclear-free trajectory that later defined NZ foreign policy." }
        ]
      },
      { id: "lange", rank: 1, name: "David Lange", party: "Labour", birthYear: 1942,
        servedFrom: 1977, electorate: "Former (Mangere)", role: "Former Prime Minister (1984–1989)", formative: "1957–1967",
        notes: "Labour MP for Mangere from 1977; PM 1984–1989. Championed nuclear-free New Zealand and oversaw major economic liberalisation (Rogernomics). Resigned during internal party conflict in 1989.",
        prior: true,
        isPm: true,
        badges: [{key:"nuclear-free",stance:"up"},{key:"gay-rights",stance:"up"},{key:"free-market",stance:"up"},{key:"anti-discrimination",stance:"up"},{key:"workers-rights",stance:"down"},{key:"anti-corruption",stance:"up"},{key:"accessible-democracy",stance:"up"}],
        positions: [
          { theme: "Nuclear-free New Zealand", thumb: "up", evidence: "Fourth Labour Government cemented NZ’s nuclear-free stance under Lange." },
          { theme: "Rogernomics / market reform", thumb: "up", evidence: "His government oversaw rapid liberalisation of the economy (associated with Roger Douglas)." },
          { theme: "Homosexual Law Reform era", thumb: "up", evidence: "1986 reform passed during the Lange years, shifting criminal law on same-sex relations between men." }
        ]
      },
      { id: "palmer", rank: 1, name: "Geoffrey Palmer", party: "Labour", birthYear: 1942,
        servedFrom: 1979, electorate: "Former (Christchurch Central)", role: "Former Prime Minister (1989–1990)", formative: "1957–1967",
        notes: "Labour MP from 1979; PM 1989–1990 after Lange. Constitutional reformer and academic lawyer; short premiership as Labour support collapsed before the 1990 election.",
        prior: true,
        isPm: true,
        badges: [{key:"nuclear-free",stance:"up"},{key:"workers-rights",stance:"up"},{key:"free-market",stance:"up"},{key:"anti-discrimination",stance:"up"},{key:"anti-corruption",stance:"up"},{key:"accessible-democracy",stance:"up"}],
        positions: [
          { theme: "Constitutional process & transparency", thumb: "up", evidence: "Academic lawyer-PM focused on process, bill of rights advocacy, and cleaner government." },
          { theme: "Continuity of Labour reform agenda", thumb: "up", evidence: "Brief premiership maintained Labour’s late-1980s policy direction amid caucus turmoil." }
        ]
      },
      { id: "moore", rank: 1, name: "Mike Moore", party: "Labour", birthYear: 1949,
        servedFrom: 1972, electorate: "Former (Christchurch North / List)", role: "Former Prime Minister (1990)", formative: "1964–1974",
        notes: "Labour MP from 1972; PM for about eight weeks in 1990. Later Director-General of the World Trade Organization (1999–2002).",
        prior: true,
        isPm: true,
        badges: [{key:"free-market",stance:"up"},{key:"open-immigration",stance:"up"},{key:"workers-rights",stance:"up"},{key:"welfare-state",stance:"up"},{key:"youth-employment",stance:"up"},{key:"anti-corruption",stance:"up"}],
        positions: [
          { theme: "Trade & open economy", thumb: "up", evidence: "Trade-focused Labour figure; later led the WTO, reflecting long-run openness stance." },
          { theme: "Short caretaker premiership (1990)", thumb: "up", evidence: "Took Labour leadership for weeks before the 1990 National landslide." }
        ]
      },
      { id: "bolger", rank: 1, name: "Jim Bolger", party: "National", birthYear: 1935,
        servedFrom: 1972, electorate: "Former (King Country)", role: "Former Prime Minister (1990–1997)", formative: "1950–1960",
        notes: "National MP from 1972; PM 1990–1997. Oversaw 1990s economic restructuring and the shift to MMP after the 1993 referendum. Replaced by Shipley in a 1997 caucus coup.",
        prior: true,
        isPm: true,
        badges: [{key:"free-market",stance:"up"},{key:"nuclear-free",stance:"up"},{key:"law-and-order",stance:"up"},{key:"welfare-state",stance:"down"},{key:"treaty-rights",stance:"down"},{key:"kiwisaver",stance:"down"},{key:"capital-gains-tax",stance:"down"}],
        positions: [
          { theme: "1990s economic restructuring", thumb: "up", evidence: "National government continued market-oriented reform and public-sector change." },
          { theme: "MMP introduction", thumb: "up", evidence: "Oversaw the shift to MMP after the 1993 referendum." },
          { theme: "Treaty settlement politics", thumb: "down", evidence: "Fiscal envelope approach was highly contested by many Māori leaders." }
        ]
      },
      { id: "shipley", rank: 1, name: "Jenny Shipley", party: "National", birthYear: 1952,
        servedFrom: 1987, electorate: "Former (Rakaia)", role: "Former Prime Minister (1997–1999)", formative: "1967–1977",
        notes: "National MP from 1987; PM 1997–1999 — New Zealand’s first woman Prime Minister. Lost the 1999 election to Helen Clark’s Labour.",
        prior: true,
        isPm: true,
        badges: [{key:"free-market",stance:"up"},{key:"welfare-state",stance:"down"},{key:"law-and-order",stance:"up"},{key:"womens-rights",stance:"up"},{key:"capital-gains-tax",stance:"down"},{key:"living-wage",stance:"down"}],
        positions: [
          { theme: "First woman PM — National continuity", thumb: "up", evidence: "Succeeded Bolger in 1997; maintained National’s centre-right programme until 1999." },
          { theme: "Welfare & market settings", thumb: "down", evidence: "Associated with tighter welfare settings and market-friendly economic framing." }
        ]
      },
      { id: "clark", rank: 1, name: "Helen Clark", party: "Labour", birthYear: 1950,
        servedFrom: 1981, electorate: "Former (Mount Albert)", role: "Former Prime Minister (1999–2008)", formative: "1965–1975",
        notes: "Labour MP for Mount Albert from 1981; PM 1999–2008 (three terms). Policies included Working for Families, civil unions, and a long period of relative economic stability. Later UNDP Administrator.",
        prior: true,
        isPm: true,
        badges: [{key:"welfare-state",stance:"up"},{key:"gay-rights",stance:"up"},{key:"marriage-equality",stance:"up"},{key:"nuclear-free",stance:"up"},{key:"workers-rights",stance:"up"},{key:"progressive-tax",stance:"up"},{key:"public-health",stance:"up"},{key:"kiwisaver",stance:"up"},{key:"anti-corruption",stance:"up"},{key:"creative-arts-funding",stance:"up"}],
        positions: [
          { theme: "Social policy & Working for Families", thumb: "up", evidence: "Three-term Labour PM expanded family support and maintained a centre-left social agenda." },
          { theme: "Civil unions / progressive social law", thumb: "up", evidence: "Civil Union Act 2004 marked a major step on relationship recognition." },
          { theme: "Nuclear-free continuity", thumb: "up", evidence: "Kept NZ’s nuclear-free policy as bipartisan consensus by the 2000s." }
        ]
      }
    ];


    const POLL_ANCHORS = [
      { d: "2023-10-14", lab: "Oct 23" },
      { d: "2025-11-01", lab: "Nov 25" },
      { d: "2026-01-15", lab: "Jan 26" },
      { d: "2026-03-15", lab: "Mar 26" },
      { d: "2026-05-15", lab: "May 26" },
      { d: "2026-06-15", lab: "Jun 26" },
      { d: "2026-07-15", lab: "Jul 26" },
      { d: "2026-08-20", lab: "Aug 26" },
      { d: "2026-11-07", lab: "Nov 26" }
    ];
    const POLL_MONTHS = POLL_ANCHORS.map(function(a) { return a.lab; });
    const PARTY_PROFILES = {
      "National": {
        short: "NAT",
        asAt: "1–3 Sep 2026 · Curia",
        current: 29.0,
        forecast: 29.0,
        series: [38.1, 33.0, 32.0, 31.5, 30.5, 30.0, 31.0, 29.7, 29.0],
        promises: [
          { h: "Tax", items: ["No new taxes if re-elected", "GST rise ruled out"] },
          { h: "Housing", items: ["Faster consents and more land supply"] },
          { h: "Law and order", items: ["Tougher sentences for sexual offending — no good-character discount"] },
          { h: "Government", items: ["Keep the National–ACT–NZ First programme"] }
        ],
        cycles: [
          { year: 2005, seats: 48, inGov: false, items: [
            { p: "Win government", landed: 0 },
            { p: "Personal tax cuts", landed: null, d: "Out of office." },
            { p: "Tougher sentencing", landed: null, d: "Out of office." }
          ]},
          { year: 2008, seats: 58, inGov: true, items: [
            { p: "Personal tax cuts in Budget 2009–10", landed: 1 },
            { p: "National cycleway", landed: 1, d: "Nga Haerenga network started." },
            { p: "RMA reform", landed: 0, d: "Partial tweaks; no full rewrite." }
          ]},
          { year: 2011, seats: 59, inGov: true, items: [
            { p: "Sell down three power companies", landed: 1 },
            { p: "Part-sale of Air NZ", landed: 1 },
            { p: "Balanced books this term", landed: 0, d: "Surplus slipped to 2014/15." }
          ]},
          { year: 2014, seats: 60, inGov: true, items: [
            { p: "2014/15 operating surplus", landed: 1 },
            { p: "KiwiSaver / tax settings held", landed: 1 },
            { p: "Housing affordability turnaround", landed: 0, d: "Prices kept rising." }
          ]},
          { year: 2017, seats: 56, inGov: false, items: [
            { p: "A fourth term", landed: 0 },
            { p: "Keep tax settings", landed: null },
            { p: "Housing supply drive", landed: null }
          ]},
          { year: 2020, seats: 33, inGov: false, items: [
            { p: "Return to government", landed: 0 },
            { p: "No wealth tax", landed: null },
            { p: "Infrastructure spend", landed: null }
          ]},
          { year: 2023, seats: 48, inGov: true, items: [
            { p: "Raise income-tax thresholds", landed: 1, d: "Passed 2024." },
            { p: "Restore interest deductibility for rentals", landed: 1 },
            { p: "Meet specialist wait-time targets", landed: 0, d: "Targets still missed on several measures." }
          ]}
        ]
      },
      "Labour": {
        short: "LAB",
        current: 25.9,
        forecast: 26.2,
        series: [26.9, 30.0, 31.0, 32.0, 32.5, 32.0, 31.5, 30.8, 31.2],
        promises: [
          { h: "Transport", items: ["$20 weekly public-transport fare cap from July 2027"] },
          { h: "Health", items: ["Three free GP visits a year", "Free prescriptions from July 2027"] },
          { h: "Tax", items: ["28% tax on profit from selling investment property, ring-fenced for health"] },
          { h: "Economy", items: ["NZ Future Fund", "Surplus target 2029/30"] }
        ],
        cycles: [
          { year: 2005, seats: 50, inGov: true, items: [
            { p: "Interest-free student loans (2006)", landed: 1 },
            { p: "Working for Families kept", landed: 1 },
            { p: "KiwiSaver launch path", landed: 1, d: "KiwiSaver began 2007." }
          ]},
          { year: 2008, seats: 43, inGov: false, items: [
            { p: "A fourth term", landed: 0 },
            { p: "Hold tax credits", landed: null },
            { p: "Emissions trading path", landed: null }
          ]},
          { year: 2011, seats: 34, inGov: false, items: [
            { p: "Return to government", landed: 0 },
            { p: "Capital gains tax", landed: null },
            { p: "Jobs summit agenda", landed: null }
          ]},
          { year: 2014, seats: 32, inGov: false, items: [
            { p: "Return to government", landed: 0 },
            { p: "Best Start / family package", landed: null },
            { p: "KiwiBuild precursor", landed: null }
          ]},
          { year: 2017, seats: 46, inGov: true, items: [
            { p: "KiwiBuild 100,000 homes", landed: 0, d: "~2,500 built; target dropped 2019." },
            { p: "Fees-free first year of tertiary", landed: 1 },
            { p: "Child-poverty reduction targets in law", landed: 1, d: "Targets legislated; results mixed." }
          ]},
          { year: 2020, seats: 65, inGov: true, items: [
            { p: "KiwiBuild 100,000 still", landed: 0, d: "Still ~2.5% of the original number." },
            { p: "COVID public-health response", landed: 1 },
            { p: "Keep fees-free year 1", landed: 1 }
          ]},
          { year: 2023, seats: 34, inGov: false, items: [
            { p: "A third term", landed: 0 },
            { p: "No wealth tax", landed: null },
            { p: "Cost-of-living package", landed: null }
          ]}
        ]
      },
      "Green": {
        short: "GRN",
        current: 13.9,
        forecast: 13.5,
        series: [11.6, 11.0, 11.2, 12.0, 12.5, 13.0, 11.5, 10.8, 11.0],
        promises: [
          { h: "Tax", items: ["Tax wealth, capital and inheritance to fund public services"] },
          { h: "Housing and climate", items: ["Green Budget spend on public housing and decarbonisation"] },
          { h: "Welfare", items: ["Income guarantee to replace core benefits"] },
          { h: "Te Tiriti", items: ["Te Tiriti-based partnership across government"] }
        ],
        cycles: [
          { year: 2005, seats: 6, inGov: false, items: [
            { p: "Cabinet climate role", landed: null },
            { p: "GE restrictions", landed: null },
            { p: "Clean rivers standard", landed: null }
          ]},
          { year: 2008, seats: 9, inGov: false, items: [
            { p: "Cabinet climate role", landed: null },
            { p: "Public transport spend", landed: null },
            { p: "Child-poverty package", landed: null }
          ]},
          { year: 2011, seats: 14, inGov: false, items: [
            { p: "Cabinet climate role", landed: null },
            { p: "Mining on schedule-4 land ban", landed: null },
            { p: "Capital gains tax", landed: null }
          ]},
          { year: 2014, seats: 14, inGov: false, items: [
            { p: "Cabinet climate role", landed: null },
            { p: "Dirty Rivers clean-up", landed: null },
            { p: "Warm Up NZ continuation", landed: null }
          ]},
          { year: 2017, seats: 8, inGov: true, items: [
            { p: "Zero Carbon Act", landed: 1, d: "Passed 2019." },
            { p: "Ban new offshore oil and gas", landed: 1 },
            { p: "Wealth tax", landed: 0, d: "Not in the C&S deal; did not pass." }
          ]},
          { year: 2020, seats: 10, inGov: true, items: [
            { p: "Keep climate-budget machinery", landed: 1 },
            { p: "Clean Car Discount", landed: 1 },
            { p: "Wealth tax", landed: 0 }
          ]},
          { year: 2023, seats: 15, inGov: false, items: [
            { p: "Wealth tax in government", landed: null },
            { p: "Public housing build", landed: null },
            { p: "Income guarantee", landed: null }
          ]}
        ]
      },
      "ACT": {
        short: "ACT",
        current: 10.5,
        forecast: 10.2,
        series: [8.6, 8.2, 8.0, 7.8, 7.5, 7.2, 7.8, 7.8, 7.6],
        promises: [
          { h: "Tax", items: ["Flatter income tax with a 28% top rate aligned to company tax", "No new taxes"] },
          { h: "Spending", items: ["Faster path to surplus via spending cuts"] },
          { h: "Children", items: ["Working with Children Card and tighter vetting"] },
          { h: "State", items: ["Cut regulation and public-service headcount"] }
        ],
        cycles: [
          { year: 2005, seats: 2, inGov: false, items: [
            { p: "Flatter tax", landed: null },
            { p: "Hold Epsom", landed: 1 },
            { p: "Cut departments", landed: null }
          ]},
          { year: 2008, seats: 5, inGov: true, items: [
            { p: "Hold Epsom and back National", landed: 1 },
            { p: "3-strikes law", landed: 1, d: "Sentencing and Parole Reform Act 2010." },
            { p: "28% aligned tax rates", landed: 0 }
          ]},
          { year: 2011, seats: 1, inGov: true, items: [
            { p: "Hold Epsom", landed: 1 },
            { p: "Support National on confidence", landed: 1 },
            { p: "Asset-sale programme as written by ACT", landed: 0 }
          ]},
          { year: 2014, seats: 1, inGov: true, items: [
            { p: "Hold Epsom", landed: 1 },
            { p: "Support National", landed: 1 },
            { p: "Partnership schools kept", landed: 1 }
          ]},
          { year: 2017, seats: 1, inGov: false, items: [
            { p: "Hold Epsom", landed: 1 },
            { p: "Tax rewrite", landed: null },
            { p: "Partnership schools expansion", landed: null }
          ]},
          { year: 2020, seats: 10, inGov: false, items: [
            { p: "Repeal 2019 firearms law", landed: null },
            { p: "Regulatory cut", landed: null },
            { p: "Cross 5%", landed: 1, d: "7.6% and 10 seats." }
          ]},
          { year: 2023, seats: 11, inGov: true, items: [
            { p: "Treaty Principles Bill in ACT form", landed: 0, d: "Introduced; not enacted as drafted." },
            { p: "Charter / partnership schools path", landed: 1 },
            { p: "Firearms-law rewrite", landed: 0 }
          ]}
        ]
      },
      "NZ First": {
        short: "NZF",
        current: 8.4,
        forecast: 11.0,
        series: [6.1, 8.5, 9.0, 9.5, 10.5, 11.0, 11.2, 10.8, 11.0],
        promises: [
          { h: "Tax", items: ["First $14,000 of income tax-free by 2027", "Index tax brackets", "Oppose a capital-gains tax"] },
          { h: "Democracy", items: ["Restrict the general-election vote to citizens"] },
          { h: "Regions", items: ["SuperGold and regional-development focus"] }
        ],
        cycles: [
          { year: 2005, seats: 7, inGov: true, items: [
            { p: "Confidence deal with Labour", landed: 1 },
            { p: "SuperGold card", landed: 1 },
            { p: "Hold Tauranga", landed: 1 }
          ]},
          { year: 2008, seats: 0, inGov: false, items: [
            { p: "Stay in Parliament", landed: 0, d: "4.1%; Peters lost Tauranga." },
            { p: "Keep SuperGold", landed: null },
            { p: "Foreign-ownership limits", landed: null }
          ]},
          { year: 2011, seats: 8, inGov: false, items: [
            { p: "Return to the House", landed: 1 },
            { p: "Hold 5%", landed: 1 },
            { p: "Cabinet posts", landed: null }
          ]},
          { year: 2014, seats: 11, inGov: false, items: [
            { p: "Hold the threshold", landed: 1 },
            { p: "Regional rail", landed: null },
            { p: "Cabinet posts", landed: null }
          ]},
          { year: 2017, seats: 9, inGov: true, items: [
            { p: "Provincial Growth Fund", landed: 1 },
            { p: "Waka Kotahi / regional roads spend", landed: 1 },
            { p: "Halt the TPPA as campaigned", landed: 0, d: "CPTPP later signed." }
          ]},
          { year: 2020, seats: 0, inGov: false, items: [
            { p: "Stay in Parliament", landed: 0, d: "2.6% — 0 seats." },
            { p: "Keep the PGF", landed: null },
            { p: "Regional voice in cabinet", landed: null }
          ]},
          { year: 2023, seats: 8, inGov: true, items: [
            { p: "Coalition with National", landed: 1 },
            { p: "Regional development portfolio", landed: 1 },
            { p: "Stop Three Waters as designed", landed: 1 }
          ]}
        ]
      },
      "Te Pāti Māori": {
        short: "TPM",
        current: 2.0,
        forecast: 2.1,
        series: [3.1, 2.4, 2.2, 2.0, 2.0, 1.9, 2.1, 2.3, 2.4],
        promises: [
          { h: "Tax", items: ["Tax-free first $30,000 and higher top rates", "Wealth, vacant-house and land-banking taxes"] },
          { h: "Housing", items: ["5% stamp duty on most residential sales (first-home carve-out)"] },
          { h: "Justice", items: ["Abolish prisons by 2040 in favour of community responses"] }
        ],
        cycles: [
          { year: 2005, seats: 4, inGov: false, items: [
            { p: "Win Māori electorates", landed: 1 },
            { p: "Cabinet posts", landed: null },
            { p: "Foreshore and seabed repeal", landed: null }
          ]},
          { year: 2008, seats: 5, inGov: true, items: [
            { p: "Support National on confidence", landed: 1 },
            { p: "Whānau Ora", landed: 1 },
            { p: "Foreshore and Seabed repeal path", landed: 1, d: "Marine and Coastal Area Act 2011." }
          ]},
          { year: 2011, seats: 3, inGov: true, items: [
            { p: "Keep the National deal", landed: 1 },
            { p: "Whānau Ora continued", landed: 1 },
            { p: "Hold Māori seats", landed: 1 }
          ]},
          { year: 2014, seats: 2, inGov: true, items: [
            { p: "Keep the National deal", landed: 1 },
            { p: "Hold two seats", landed: 1 },
            { p: "Whānau Ora continued", landed: 1 }
          ]},
          { year: 2017, seats: 0, inGov: false, items: [
            { p: "Stay in the House", landed: 0 },
            { p: "Hold Waiariki", landed: 0 },
            { p: "Hold the party-vote floor", landed: 0 }
          ]},
          { year: 2020, seats: 2, inGov: false, items: [
            { p: "Return via Waiariki", landed: 1 },
            { p: "Second seat", landed: 1 },
            { p: "Tax-free threshold", landed: null }
          ]},
          { year: 2023, seats: 6, inGov: false, items: [
            { p: "Win more Māori electorates", landed: 1, d: "6 electorate seats." },
            { p: "GST off food", landed: 0 },
            { p: "Tax-free first $30k", landed: 0 }
          ]}
        ]
      },
      "TOP": {
        short: "TOP",
        current: 4.5,
        forecast: 4.8,
        series: [2.2, 3.0, 3.5, 4.0, 4.5, 5.0, 5.4, 5.7, 6.0],
        promises: [
          { h: "Tax and housing", items: ["Evidence-based tax and housing settings"] },
          { h: "Parliament", items: ["Cross the 5% threshold", "Negotiate first with whichever party leads the party vote"] },
          { h: "Education and climate", items: ["Opportunity-focused education and climate policy"] }
        ],
        cycles: [
          { year: 2005, skipped: true },
          { year: 2008, skipped: true },
          { year: 2011, skipped: true },
          { year: 2014, skipped: true },
          { year: 2017, seats: 0, inGov: false, items: [
            { p: "Win a seat (first election)", landed: 0, d: "Founded 2016. 2.44%." },
            { p: "Evidence-based tax shift", landed: 0 },
            { p: "Cross 5%", landed: 0 }
          ]},
          { year: 2020, seats: 0, inGov: false, items: [
            { p: "Win a seat", landed: 0, d: "1.5%." },
            { p: "Cross 5%", landed: 0 },
            { p: "Housing tax shift", landed: 0 }
          ]},
          { year: 2023, seats: 0, inGov: false, items: [
            { p: "Win a seat", landed: 0, d: "2.22%." },
            { p: "Cross 5%", landed: 0 },
            { p: "Negotiate from Parliament", landed: 0 }
          ]}
        ]
      }
    };

    const partyColour = { "National": "var(--national)", "Labour": "var(--labour)", "Green": "var(--green)", "ACT": "var(--act)", "NZ First": "var(--nzfirst)", "Te Pāti Māori": "var(--tpm)", "TOP": "var(--top)", "Alliance": "#c62828" };

    
    var MOMENT_LINKS = [
      { id:"luxon", has:"accommodation allowance", url:"https://www.rnz.co.nz/news/politics/510614/pm-christopher-luxon-says-he-will-pay-back-his-accommodation-allowance" },
      { id:"swarbrick", has:"OK, boomer", url:"https://www.rnz.co.nz/news/political/402998/ok-boomer-chloe-swarbrick-claps-back-at-heckler-in-parliament" },
      { id:"maipi", has:"500 ancestors", url:"https://www.rnz.co.nz/news/political/533897/treaty-principles-bill-haka-highlights-tensions-between-maori-tikanga-and-rules-of-parliament" },
      { id:"maipi", has:"haka again", url:"https://www.rnz.co.nz/news/political/533795/watch-haka-interrupts-vote-for-the-treaty-principles-bill" },
      { id:"brownlee", has:"Treaty Principles haka", url:"https://www.rnz.co.nz/news/political/533897/treaty-principles-bill-haka-highlights-tensions-between-maori-tikanga-and-rules-of-parliament" },
      { id:"waititi", has:"haka", url:"https://www.rnz.co.nz/news/political/533795/watch-haka-interrupts-vote-for-the-treaty-principles-bill" },
      { id:"collins", has:"Oravida", url:"https://www.rnz.co.nz/news/political/246801/collins-under-fire-over-oravida" },
      { id:"ardern", has:"enough in the tank", url:"https://www.beehive.govt.nz/speech/prime-minister-jacinda-ardern-announces-resignation" },
      { id:"ardern", has:"They are us", url:"https://www.beehive.govt.nz/speech/ministerial-statements-mosque-terror-attacks-christchurch" },
      { id:"hipkins", has:"trying to do too much", url:"https://www.rnz.co.nz/news/political/484218/prime-minister-chris-hipkins-announces-policy-reset" },
      { id:"genter", has:"Privileges", url:"https://www.rnz.co.nz/news/political/516430/green-mp-julie-anne-genter-referred-to-privileges-committee" },
      { id:"chhour", has:"7AA", url:"https://www.rnz.co.nz/news/political/525430/oranga-tamariki-section-7aa-repeal-passes-final-reading" },

      { id:"costello", has:"heated tobacco", url:"https://www.rnz.co.nz/news/political/509048/government-repeals-smokefree-legislation" },
      { id:"lange", has:"uranium", url:"https://nzhistory.govt.nz/politics/nuclear-free-new-zealand/oxford-union-debate" },
      { id:"lange", has:"Nuclear-free law", url:"https://nzhistory.govt.nz/politics/nuclear-free-new-zealand/nuclear-free-zone" }
    ];
    function momentHref(mp, item) {
      var body = (item && item.text) || "";
      if (item && item.url) return item.url;
      for (var i = 0; i < MOMENT_LINKS.length; i++) {
        var L = MOMENT_LINKS[i];
        if (L.id === mp.id && body.indexOf(L.has) !== -1) return L.url;
      }
      return "";
    }

    var MP_MOMENTS = {"peters":[{kind:"outrageous",text:"Jun 2026. Campaigning again, Peters still sells NZ First as the only adult in a House he calls extreme. \"We are the only party that can counter-balance the present spectrum of extremists in parliament.\" That is how he asks for the balance-of-power vote, one more time."},{kind:"burn",text:"Jun 2026. Closing a Hastings meeting he reached for the Churchill borrow. \"If you give us the tools, we will finish the job.\" The tools, in his telling, are seats and a hand on the coalition document."},{kind:"outrageous",text:"Oct 2017. After election night he made Labour and National wait days. Then: \"It's time for a cup of tea.\" He backed Ardern. The pause is now part of how MMP governments get born."},{kind:"burn",text:"Jan 2017. At R\u0101tana, Gareth Morgan called him an Uncle Tom. Peters smiled, then: \"Son, I've been coming here for four decades while you were riding a motorbike around Mongolia.\" The marae laughed. Morgan did not land the hit."},{kind:"outrageous",text:"Nov 2011. After Key's teacup with John Banks was recorded, Peters offered Key tea of his own \u2014 \"in a takeaway cup.\" He rode Teagate back over the 5 percent line."},{kind:"burn",text:"2008. The Owen Glenn donation story helped end the Clark\u2013NZ First arrangement. Peters said he had done nothing wrong and that the coverage was a smear. He spent the next term outside the House."},{kind:"outrageous",text:"Jul 2004. On immigration he said New Zealanders were \"being dragged into the status of an Asian colony\" and should be \"placed first in their own country.\" The line defined a decade of NZ First campaigns \u2014 and the protests that met them."},{kind:"silly",text:"1990s\u2013present. Winebox, the hat, the races, the pause. Cartoonists have used the same brief for thirty years because the act has not changed."}],"brownlee":[{kind:"outrageous",text:"2024\u201326. As Speaker he has ejected MPs and closed the House. Opposition benches call it heavy-handed. He calls it order. The Speaker's job became part of the political fight, not above it."},{kind:"outrageous",text:"Nov 2024. After the Treaty Principles haka he named Te P\u0101ti M\u0101ori MPs and cleared the public gallery. The clip of the haka travelled; so did the clip of the Speaker ending it."},{kind:"silly",text:"Got stuck in a Parliament lift and had to be extracted by staff. A small story that attached itself to a large man and would not drop off."},{kind:"outrageous",text:"2011\u201316. As earthquake recovery minister he ran CERA. Whole central-city blocks came down. Survivors still argue about the speed, the tone, and who got a say."},{kind:"burn",text:"In the House he cuts speakers off mid-sentence. \"Nonsense\" is the usual verdict. Select committees under him have the same temperature."},{kind:"object",text:"High-vis and demolition were the public picture of the rebuild years. The hard hat did as much work as the press release."}],"collins":[{kind:"outrageous",text:"2020\u201321 and again in 2023. She led National twice after internal spills. Each time the party was already on fire. Leadership, for her, has been a rescue job more than a coronation."},{kind:"burn",text:"Late-night posts that name opponents and do not offer a soft landing. The feed is part of the brand; so is the backlash in the morning."},{kind:"outrageous",text:"2014. Oravida. A ministerial trip to China and a bottle of milk became a conflict-of-interest story she never fully shook. Opponents still say the word when they want her on the back foot."},{kind:"object",text:"2009\u201311. As Police Minister she backed crushing boy-racer cars. \"Crusher Collins\" was coined as a slur. She kept the name. It is still how a lot of the country files her."},{kind:"silly",text:"Pearls and a punchline. Interviewers now brace for both. The look is as designed as the line."},{kind:"burn",text:"Will quote a critic back at them, word for word. The clip is the punishment."}],"jones":[{kind:"outrageous",text:"2024\u201326. Fast-track consenting and mining comments put conservation groups on the street as a matter of course. He treats the protest as proof he is over the Wellington veto."},{kind:"burn",text:"Called opponents \"bottom feeders\" while defending regional spending. The insult is still replayed whenever the Provincial Growth Fund comes up."},{kind:"outrageous",text:"2017\u201320. The Provincial Growth Fund: cheques, high-vis, the local paper. Critics called it pork. He called it catching the regions up. Both descriptions stuck."},{kind:"burn",text:"Regular broadsides at \"Wellington\" and what he labels woke officialdom. The regions are the audience; the capital is the villain."},{kind:"silly",text:"Talks like a talkback host who wandered into Cabinet and declined to leave. The adjectives do overtime. Hansard needs a lie-down."},{kind:"outrageous",text:"Forestry fights \u2014 pine, native, and who gets the land \u2014 have put him on the wrong side of picket lines more than once."}],"luxon":[{kind:"outrageous",text:"Apr 2026. After months of leadership talk he called a caucus confidence vote in himself. He won. The talk did not vanish. It is now part of how his premiership is written."},{kind:"burn",text:"2024. After a year of property questions he stopped dodging the income. \"Let's be clear, I'm wealthy.\" The sentence landed because the denial had lasted so long."},{kind:"outrageous",text:"1 Mar 2024. First he said he was \"well within the rules\" to claim $52,000 a year to stay in his own mortgage-free Wellington flat. Hours later, after the story ran: \"It's clear that the issue of my accommodation allowance is becoming a distraction.\" He repaid it. The U-turn was the story."},{kind:"silly",text:"2023 campaign. Two-minute noodles as the everyman story while seven investment properties sat on the public record. The contrast wrote itself; opponents did not have to."},{kind:"burn",text:"2023\u201326. \"Get New Zealand back on track.\" Delivery numbers \u2014 hospitals, ferries, crime \u2014 have been the stick used against the slogan."},{kind:"outrageous",text:"Jun 2023. On Q+A, Jack Tame walked him through the capital-gain maths on those houses on national television. Luxon did not enjoy the arithmetic. The clip did not help."},{kind:"outrageous",text:"Environmental groups keep a running list of coalition rollbacks issued under his name. He calls it fixing the basics. They call it a war on nature."}],"davidson":[{kind:"outrageous",text:"2024\u201326. Regular on hikoi against the coalition's Treaty and M\u0101ori-policy changes. Coalition MPs call it street politics in a co-leader's diary. She treats the march as the job."},{kind:"outrageous",text:"Mar 2023. Pride speech: she blamed \"cis white men\" for violence. Weeks of protest, petitions, and a police complaint followed. She did not give critics the apology they wanted. The clip is still the first thing opponents play."},{kind:"burn",text:"Names ministers at the stand-up and ends the answer. No fade-out, no both-sides nod."},{kind:"outrageous",text:"Palestine protests and Green foreign-policy lines have split even friendly audiences. The party has had to live with both the march and the mailbox."},{kind:"silly",text:"Will leave a hikoi and walk into question time as if that is rostered. For her, it is."},{kind:"burn",text:"Treats \"that's not how we do things here\" as the start of the argument, not the end of it."}],"sepuloni":[{kind:"outrageous",text:"2017\u201323. Welfare minister through benefit-sanction fights. Advocacy groups said the settings punished the poor. Talkback said she was soft. The portfolio produced heat; she produced as little circus as she could."},{kind:"burn",text:"Answers MSD questions as if she has already heard the talking point \u2014 because she has, every sitting week."},{kind:"outrageous",text:"Held Social Development while child-poverty numbers were the weekly political weapon. Every release was a press conference waiting to happen."},{kind:"silly",text:"Kept a low-circus profile in a portfolio that usually produces one. Unusual discipline in a House that rewards volume."},{kind:"outrageous",text:"Pacific and Auckland issues put her in the frame whenever housing and gangs hit the bulletin. The electorate and the portfolio never sat quietly together."}],"hipkins":[{kind:"silly",text:"2023\u201325. Peters still calls him \"sausage-roll eater\" across the House. The pastry outlived the premiership."},{kind:"outrageous",text:"Oct 2023. Lost the election after a year as PM. The London coronation trip was already being written as a last lap. Labour has been rebuilding under him since."},{kind:"silly",text:"May 2023. King Charles and Rishi Sunak both presented him with sausage rolls. \"They were exceptionally good,\" he said. Two were left. British papers ran the tray. New Zealand ran the metaphor."},{kind:"outrageous",text:"Feb 2023. The \"reset.\" He parked hate-speech law, the RNZ\u2013TVNZ merger and other Ardern-era projects. \"The government had been trying to do too much, too fast.\" Allies called it focus. The left called it a retreat."},{kind:"burn",text:"2023. \"Bread and butter.\" The phrase was the slogan of the year as PM \u2014 and the stick used against him when butter prices kept climbing."},{kind:"object",text:"Tractor photo-ops during the rural charm offensive. Comms wanted regions. Comments wanted to know why the leader was on a tractor. Farmers were not uniformly charmed."},{kind:"silly",text:"Answers to \"Chippy.\" He has never successfully killed the nickname. He stopped trying."}],"waititi":[{kind:"outrageous",text:"Nov 2024. Walked out with Te P\u0101ti M\u0101ori after the Treaty bill haka. Speaker clashes followed. The party treated the walkout as tikanga; the Speaker treated it as disorder."},{kind:"burn",text:"Tells the House it is a marae that forgot its tikanga. The sentence is both a rebuke and a theory of the building."},{kind:"outrageous",text:"\"Abolish the colonial system\" lines are catnip for talkback and a rallying cry on the marae. He does not sand them down for the six o'clock."},{kind:"object",text:"Hat, taonga, taiaha energy in a chamber that still dresses like a bank. Dress-code rows followed, which was part of the point."},{kind:"silly",text:"The fit is treated as a press release. That was the idea."},{kind:"outrageous",text:"Co-governance arguments under his watch drew the largest hikoi in a generation. He was at the front of it."}],"willis":[{kind:"outrageous",text:"2024\u201326. Tax cuts paid for with spending cuts. School-lunch quality and the cancelled Cook Strait ferries became the face of her Budgets. She calls it responsibility. Opponents call it the receipt."},{kind:"outrageous",text:"Cancelled Labour's iRex ferries. Hipkins still uses the line in the House. The Strait is now a running political argument, not just a shipping one."},{kind:"burn",text:"Delivers the numbers in a tone that sounds like a marking schedule. The calm is the bit that winds people up."},{kind:"object",text:"The Budget lock-up is her stage. Leaks and \"fiscal hole\" rows are the interval act."},{kind:"outrageous",text:"Mar 2024. Peters publicly undercut a $5.6 billion \"fiscal hole\" claim about her tax plan. Coalition weather, live."},{kind:"burn",text:"Landlords and renters both claim she is working for the other one. That is the usual verdict on a housing finance minister."}],"seymour":[{kind:"outrageous",text:"Aug 2026. After Parliament killed the Treaty Principles Bill he said what it stood for would live on as \"equal legal rights in a democratic society.\" Opponents heard the same bill under a new heading."},{kind:"burn",text:"Apr 2025. After more than 300,000 submissions: \"There are no good arguments against people being equal, and more people making bad arguments does not improve them.\" The hikoi heard the opposite moral."},{kind:"outrageous",text:"Apr 2025. The House voted the bill down 112\u201311. He told MPs New Zealanders should have \"the same rights and duties.\" Only ACT walked through the aye lobby."},{kind:"outrageous",text:"Nov 2024. First reading. Town halls packed. A hikoi at the gates. The bill became the year's defining fight even though it was never going to pass."},{kind:"outrageous",text:"2019\u201320. End of Life Choice Act. Years of protest outside Parliament; a referendum he won. The act is the long game he actually finished."},{kind:"burn",text:"Frames identity politics as a side quest. Half the internet treats that framing as the whole point of him."},{kind:"silly",text:"The smile-and-whiteboard brand. Designed for the clip, not for Hansard."}],"vanvelden":[{kind:"outrageous",text:"2024. Repealed Fair Pay Agreements. Unions called it a gift to employers. She called it getting the government out of the way. Picket signs put her next to Seymour."},{kind:"burn",text:"Sells 90-day trials as ordinary flexibility. Workers' groups hear a firing button. Both descriptions of the same clause."},{kind:"outrageous",text:"Workplace-relations rollbacks put her on the street in the first year of the coalition. The portfolio is quiet in the House and loud outside it."},{kind:"silly",text:"The calmest voice in the loudest fights. That is a strategy, not an accident."},{kind:"outrageous",text:"Employment-law changes were among the first coalition bills to draw a crowd on the forecourt."}],"swarbrick":[{kind:"outrageous",text:"2024. As Green co-leader she had to discipline Julie Anne Genter on camera after Privileges. The party that runs on tone had to police its own."},{kind:"outrageous",text:"Climate and Gaza positions have put her on both march routes and complaint forms. She treats that as the job."},{kind:"burn",text:"5 Nov 2019. Heckled in the House during the Zero Carbon speech. \"OK, boomer.\" Then on Facebook: responding \"in perfect jest\u2026 makes some people very mad.\" The two words left the building and have not come home."},{kind:"outrageous",text:"Same speech: \"We are in a climate crisis, if we don't get this right, nothing else matters.\" The heckle was about her age. The line was about the date on the bill."},{kind:"outrageous",text:"2020. Public face of the cannabis referendum. The country voted no. The argument did not end. She still gets asked about it first."},{kind:"object",text:"Early skateboard campaigns. Still the image opponents reach for when they want her young."},{kind:"silly",text:"Supermarket-apple interviews that somehow become policy clips. The grocery aisle is a set."}],"maipi":[{kind:"burn",text:"Dec 2024. John Campbell asked if she would do the haka again. \"Again and again. Just for that Bill. Not a haka every time.\" The distinction mattered to her. It did not slow the replay."},{kind:"outrageous",text:"Dec 2024. To people who said they were afraid of her: \"There's nothing to fear from me. There's nothing to fear from us.\" Age was supposed to be the story. She declined."},{kind:"outrageous",text:"Nov 2024. After the clip went global: \"It wasn't even about me. It was about those 500 ancestors who signed that Treaty.\" She called herself introverted \"99 percent of the time\" \u2014 then stopped the House."},{kind:"outrageous",text:"14 Nov 2024. Led Ka Mate on the floor, tore a copy of the Treaty Principles Bill, and told the government in a pao it was a guest in the house. The Speaker named MPs. The clip went worldwide within days."},{kind:"burn",text:"On the Treaty fight: \"It does not say you govern over us.\" That is the whole argument, in one sentence."},{kind:"silly",text:"School-assembly energy in a room that had not met it. The House learned the volume the hard way."}],"jackson":[{kind:"outrageous",text:"Apr 2025. On the Treaty bill he told the House it is \"not about racial privilege or racial superiority.\" He has spent a career saying that into a microphone that wanted a simpler fight."},{kind:"outrageous",text:"Radio-era remarks still get dropped into the news cycle when opponents need him off-balance. The archive is a weapon."},{kind:"burn",text:"Never left the talkback cadence. \"Bro\" is greeting and warning. The House has not trained it out of him."},{kind:"outrageous",text:"As a minister he picked fights with media regulators and his own side. Loyalty, for him, is not the same as quiet."},{kind:"silly",text:"Sounds mid-argument with a producer even when there is no producer. That is the radio still running."},{kind:"outrageous",text:"M\u0101ori\u2013Labour tensions under his watch became public more than once. He has held every corner of that triangle: party, iwi politics, the mic."}],"ngarewa":[{kind:"outrageous",text:"Nov 2024. Co-leader through the hikoi against the Treaty bill. Coalition pressers looked smaller beside that crowd. She did not pretend otherwise."},{kind:"burn",text:"Names the minister, ends the stand-up. No encore. The short answer is the point."},{kind:"outrageous",text:"Has accused the government of attacking tino rangatiratanga in language the Beehive calls inflammatory. She does not file a quieter version."},{kind:"outrageous",text:"Taranaki oil, conservation and iwi fights follow her home. The electorate is the argument."},{kind:"silly",text:"Looks as if she has somewhere better to be. Often she does."}],"mckee":[{kind:"outrageous",text:"2024\u201326. Firearms minister after March 2019. Every easing of those rules draws a memorial-day backlash. Every tightening draws a range-day one. There is no quiet version of the job."},{kind:"burn",text:"\"Law-abiding shooters\" is the phrase that splits the country on cue. Supporters hear farmers and clubs. Critics hear a rewind."},{kind:"object",text:"Speaks like someone who has held the firearm. That is the argument she is making: the law should start from the range, not the press release."},{kind:"outrageous",text:"Gun-register and club fights put her on both protest emails. The portfolio answers to two publics that do not share a sentence."},{kind:"silly",text:"Range-day vocabulary in a building of lanyards. The mismatch is visible on camera."}],"costello":[{kind:"outrageous",text:"2025. The Chief Archivist found she breached the Public Records Act over a tobacco paper. She said she did not know who wrote it \"or even who left it on her desk.\" The mystery was the story. Health groups did not buy the gap."},{kind:"outrageous",text:"2024. Rebuked by the Chief Ombudsman and ordered to apologise to RNZ and a public-health professor over OIA delays. Official Information became part of the tobacco fight."},{kind:"outrageous",text:"2024. Halved excise on heated tobacco products. Treasury put a nine-figure cost on it. Philip Morris is the main importer. She said the products help people quit. Health officials said the evidence was thin."},{kind:"outrageous",text:"Feb 2024. Repealed Labour's smokefree-generation law under urgency. She called it an \"untested regime\" of prohibition. Cancer and public-health groups called it a gift to the industry."},{kind:"burn",text:"Denied tobacco-industry links while leaked lobbying notes showed the industry had targeted NZ First years earlier. She brushed the notes off. Opponents did not."},{kind:"object",text:"Put dairies and cigarette law back on the six o'clock. A portfolio that was supposed to be winding down became a weekly row."}],"menendez":[{kind:"outrageous",text:"Came from housing protest into the House. Landlords' groups treat him as the opposition inside the building. He has not tried to soften that."},{kind:"burn",text:"Leads with rent and benefit numbers, not a metaphor. The question is usually the number."},{kind:"outrageous",text:"Immigration and welfare lines put him on talkback speed-dial. The calls are not friendly."},{kind:"silly",text:"Still campaigns as if the march starts at 5pm. Sometimes it does."},{kind:"outrageous",text:"Green hard-left brand makes him a regular in coalition attack ads. He treats that as confirmation."}],"wong":[{kind:"silly",text:"Nov 2025. Named Opportunity leader after the party advertised the job. Most voters still need the pronunciation guide. The Seek ad is now part of the origin story."},{kind:"burn",text:"On taking the job: \"New Zealand needs a tax reset.\" Land-value tax, a citizen's income, and a flatter income tax are the reset. Property groups noticed before she won a seat."},{kind:"outrageous",text:"A former KPMG climate consultant leading a party that says it believes in markets and regulation. Both left and right claim she is the other side. That is the centre-party problem in one sentence."},{kind:"burn",text:"\"We believe in the free market, but it works only where you've got competition and the right amount of regulation.\" The sentence is the pitch. The fight is over what \"right amount\" means."},{kind:"silly",text:"Standing in Mt Albert, a seat decided by a handful of votes last time. That is a statement, not a safety play."}],"eb":[{kind:"silly",text:"Mar 2026. Named Opportunity deputy. Farmers Weekly readers already knew the byline. Wellington is catching up."},{kind:"burn",text:"\"After almost 10 years working towards a more just, resilient and nature-positive food system\u2026 our national-level settings need to change.\" That is why a rural commentator walked into a party that still has no seats."},{kind:"outrageous",text:"Pushes that food-system line in a sector that hears it as a threat or a sermon, depending on the shed. There is no neutral audience for the phrase."},{kind:"burn",text:"Has written that doubling export value is the wrong national goal. Industry bodies noticed. Export New Zealand did not applaud."},{kind:"outrageous",text:"Standing in Kaipara ki Mahurangi \u2014 a conservative rural seat \u2014 for a party polling around the 5 percent line. The electorate and the party brand pull in different directions."}],"hammond":[{kind:"silly",text:"2017\u201326. Four elections for Opportunity. Still better known for the policy PDF than the protest. Persistence is the story until a seat arrives."},{kind:"burn",text:"Tax and housing explainers delivered as if the graph should have been enough. Third parties live on that hope."},{kind:"outrageous",text:"Loud ideas, no seat, every campaign treated as a novelty act by the two-tick machine. The 5 percent threshold is the antagonist."},{kind:"object",text:"The whiteboard is the brand. There is no tractor, no haka, no noodles. There is a slide."},{kind:"silly",text:"Wellington North again. Same hills, same pamphlet, another cycle."}],"bishop":[{kind:"outrageous",text:"2024\u201326. Fast-track consenting. Opposition and iwi called it a corruption risk. He called it building again. Every contested mine, highway and housing project now has his fingerprints or his denial."},{kind:"burn",text:"\"Getting things built\" \u2014 the sentence that means someone's view, or someone's hearing, is about to change."},{kind:"outrageous",text:"RMA rewrite. Environmental groups keep a folder with his name on it. Process, in his telling, is the villain. Process would like a word."},{kind:"object",text:"Hard-hat tours next to every contested project. The hat is doing some of the arguing."},{kind:"outrageous",text:"Three Waters repeal was sold as ending co-governance by stealth. Councils and iwi did not all applaud. Water is now a running coalition argument again."}],"stanford":[{kind:"object",text:"2024. Forced schools to bag phones during the day. Parents split before the newsletter landed. Students formed a committee. The pouch became a national symbol."},{kind:"outrageous",text:"Curriculum rewrite and te reo settings put her in the culture-war week, every week. Education is no longer a quiet portfolio."},{kind:"burn",text:"Treats classroom phones as a distraction to remove, not manage. Teachers forwarded the release. Students did not."},{kind:"outrageous",text:"Teacher unions have picketed the pace and the tone. The fight is as much about who writes the timetable as what is on it."},{kind:"silly",text:"The laminated-rule energy is now a known brand. Organised-mum minister, national scale."}],"chhour":[{kind:"outrageous",text:"Aug 2024. On repealing section 7AA \u2014 the Treaty clause in child protection \u2014 she said: \"Every decision I'm making\u2026 is around the care and the safety of our young people. And I'll never apologise for that.\" Iwi and M\u0101ori providers marched. She did not walk it back."},{kind:"outrageous",text:"Aug 2024. Called Oranga Tamariki \"the cash cow for community service providers who say they will provide services, and then don't.\" The PSA told her to take it back. She did not."},{kind:"burn",text:"Uses her own years in state care as the warrant for the change. Supporters hear courage. Critics hear a wrecking ball with a biography."},{kind:"outrageous",text:"Military-style youth academies. Supporters called it discipline. Critics called it a boot camp with a press release. The pilot is now a standing argument about Oranga Tamariki."},{kind:"outrageous",text:"School-lunch remarks about M\u0101ori children not being fed at home were called race-baiting. Seymour called the critics race-obsessed. The lunch tray became another Treaty-adjacent fight."}],"mcanulty":[{kind:"outrageous",text:"Aug 2026. On Premier House spending: \"What is Christopher Luxon hiding?\" and \"This is taxpayer money, not Christopher Luxon's personal bank account.\" Labour's campaign chair using the lodge the way National once used the allowance."},{kind:"silly",text:"Wairarapa-bloke-in-a-suit. Practised. Effective. Sometimes a bit much. The accent does some of the work; the numbers have to do the rest."},{kind:"burn",text:"Needles Wellington from a Labour regional seat. The joke is that he is in Wellington while he does it."},{kind:"outrageous",text:"Local-government and Three Waters fights put him on both council steps and talkback. The regions are the constituency and the material."},{kind:"burn",text:"Takes the joke and the portfolio. The grin usually means the other guy walked into it."}],"genter":[{kind:"outrageous",text:"May 2024. After Privileges she said she should have walked away from the florist row and that she was \"cooperating fully\" with the Greens' process. The party that polices tone had a file on one of its own."},{kind:"outrageous",text:"May 2024. Crossed the House and confronted National's Matt Doocey. Speaker Brownlee sent her to Privileges. Her own co-leaders called the behaviour \"completely unacceptable.\" The clip ended a week and started a committee."},{kind:"outrageous",text:"May 2024. Newtown florist Laura Newcombe said Genter filmed her in the shop during a row about a cycleway and that it felt like a \"massive imbalance of power.\" Genter said she had gone in for flowers and should have left."},{kind:"object",text:"Nov 2021 and 2018. Cycled to hospital to give birth \u2014 twice. \"My partner and I cycled because there wasn't enough room in the car for the support crew\u2026 but it also put me in the best possible mood.\" Global headlines. Half the country cheered. Half called it a stunt."},{kind:"outrageous",text:"Cycleway politics in Wellington have made her a regular at angry public meetings. The kerb is never just a kerb."},{kind:"burn",text:"Argues an intersection as if it were a moral question. For her, it is."}],"ardern":[{kind:"burn",text:"Jan 2023. Resignation day: \"I know what this job takes, and I know that I no longer have enough in the tank to do it justice. It is that simple.\" Allies called it honest. Opponents called it walking off. Both used the sentence."},{kind:"outrageous",text:"Same speech: \"I am not leaving because it was hard. Had that been the case I probably would have departed two months into the job.\" She set the election date as she left."},{kind:"outrageous",text:"Feb 2022. Occupation of Parliament grounds. The most bitter street politics in a generation happened on her watch. Anti-mandate convoys treated her as the villain in chief. The rhetoric went well past the rulebook."},{kind:"outrageous",text:"15 Mar 2019. After the mosque attacks: \"They are us.\" Quote of the year. Later used against her as a brand \u2014 kindness as merch, kindness as a target."},{kind:"outrageous",text:"2019 memorial: \"Let that be the legacy of the 15th of March: to be the nation we believe ourselves to be.\" The line travelled. So did the argument about whether the country met it."},{kind:"silly",text:"2018. Took her baby into the United Nations chamber. The photograph ate the internet. Every side of politics still uses the crop they prefer."}],"english":[{kind:"outrageous",text:"2017. Lost after a handful of seats. Peters' cup-of-tea wait finished him. Nine years of National ended in a pause he did not control."},{kind:"burn",text:"Dry as a Treasury paper. The dryness was the point. He would not give you a slogan if a number existed."},{kind:"outrageous",text:"2002. On Clark's Paintergate he called her conduct \"a sordid tale of lies, deceit and convenient forgetfulness.\" Opposition English was sharper than Prime Minister English was loud."},{kind:"object",text:"The Budget was the personality. If there was a fiscal hole, he brought a torch."},{kind:"silly",text:"Dipton-to-Beehive. The accent did some of the work. The numbers did the rest."}],"key":[{kind:"outrageous",text:"Apr 2015. Ponytail. A Parnell waitress said he had pulled her hair more than once, including after she said stop. Office statement: actions were \"intended to be light-hearted.\" To cameras, asked if it was appropriate: \"In that context, you'd say yes. But if you look at it now, no.\" He apologised. The story stayed."},{kind:"silly",text:"Nov 2011. Teacup with John Banks in a Newmarket caf\u00e9. The microphone was still live. \"Radioactive tea.\" The recording did more for Winston Peters than for Key."},{kind:"outrageous",text:"Asset-sales protests were the soundtrack of his first term. Partial privatisation passed. The crowd did not go home."},{kind:"outrageous",text:"GCSB and Kim Dotcom. Privacy campaigners filled the street. The file is still the one opponents open when they talk about his government and surveillance."},{kind:"silly",text:"Flag referendum. The country laughed the alternative flags off the stage. He wanted a new one. He did not get it."},{kind:"object",text:"Selfie-stick Prime Minister. The brand was the point until housing and the ponytail caught up with the smile."}],"muldoon":[{kind:"outrageous",text:"Jun 1984. Schnapps election. Called a snap poll after a long night. Lost the country and opened the door to Rogernomics. The night out became the origin story of the next decade."},{kind:"burn",text:"Could end a journalist with one line and ask why the room went quiet. The scowl was the brand. Cartoonists retired other faces."},{kind:"object",text:"Think Big: dams, cars, state-backed industry. Monument and punchline. The projects outlived the government; so did the debt argument."},{kind:"outrageous",text:"Wage and price freezes. The public felt the hand on the tiller and did not thank him. Control was the method and the complaint."},{kind:"silly",text:"Rob's Mob. A fan club as a political machine \u2014 and a warning about what a personal following looks like in this country."},{kind:"outrageous",text:"Ran the place like a talkback shift that never ended. He would have been feral on today's feed. He already was on yesterday's."}],"lange":[{kind:"burn",text:"1 Mar 1985. Oxford Union. An interjector leaned in. \"I'm going to give it to you if you hold your breath just for a moment\u2026 I can smell the uranium on it as you lean towards me.\" Still the line. Often slightly misquoted. Still the high score."},{kind:"outrageous",text:"Same night he said New Zealand would \"form no part of a nuclear alliance.\" Washington heard it. So did the country. ANZUS cracked later."},{kind:"outrageous",text:"1987. Nuclear-free law. France, the United States, and the old defence file all had views. New Zealand mostly kept the law."},{kind:"outrageous",text:"Rogernomics on his watch. Allies split. Queen Street filled. He later fell out with Roger Douglas in public. The jokes held the door while the Cabinet paper went through."},{kind:"silly",text:"The joke was the delivery system. People remember the laugh and forget the paper. That was useful, until it was not."},{kind:"outrageous",text:"Resigned after the fight inside Labour became the story. The wit survived the premiership. The government did not."}],"palmer":[{kind:"silly",text:"Wrote Unbridled Power, then got the job and tried to put a bridle on it. The book outlived the term."},{kind:"outrageous",text:"Constitutional reformer in a country that wanted a scrap, not a white paper. MMP and the Bill of Rights sit in his long shadow. The premiership does not."},{kind:"object",text:"The statute book was the personality. If there was a process, he brought a red pen."},{kind:"burn",text:"Corrected the process while the fire was still going. Politics refused to behave like a bill. He noticed."},{kind:"silly",text:"Short tenure, long syllabus. Students still meet him before they meet Lange."}],"moore":[{kind:"silly",text:"1990. Prime Minister for 59 days. The term is the joke and the fact. He knew, and used it."},{kind:"outrageous",text:"Drew the short straw after Lange and Palmer. The 1990 defeat was already loaded. He had to take the loss with the title."},{kind:"burn",text:"History filed him under speedrun. That file is not unfair."},{kind:"silly",text:"The cameo premiership. He laughed first, which was the only available move."}],"bolger":[{kind:"outrageous",text:"1996. Campaigned against MMP, then had to govern under it with Winston Peters at the table. The conversion was public. Slightly sheepish."},{kind:"outrageous",text:"1991\u201393. Ruthanasia. Benefit cuts and the Employment Contracts Act. Protests were the term, not a sideshow. The Decent Society slogan did not survive the cuts."},{kind:"burn",text:"Promised a \"Decent Society.\" What people remembered was the bill at the end of the week."},{kind:"outrageous",text:"1997. Rolled by Jenny Shipley from inside Cabinet. He smiled for the camera. She had the numbers."},{kind:"silly",text:"Farmer PM. The jumper did some of the speeches. The woolshed did some of the rest."}],"shipley":[{kind:"outrageous",text:"1998. NZ First walked out. The coalition died on television. She had to finish the 1990s project without the partner who made MMP work."},{kind:"burn",text:"1997. Replaced Bolger from inside Cabinet. Coldest hit of the decade. First woman Prime Minister \u2014 and the coverage could not decide whether to clap or inspect the curtains."},{kind:"outrageous",text:"Took the job in a party that was already on fire. The spill was a management technique. It did not put the fire out."},{kind:"silly",text:"\"Mother of the nation\" branding landed with a thud. The country did not take the title."},{kind:"outrageous",text:"1999. Lost to Clark. The 1990s National project ended on her watch."}],"clark":[{kind:"outrageous",text:"2002. Paintergate. Charity works signed in her name had been painted by someone else. \"It was election year, I was the leader of the opposition and I was as busy as a one-armed wallpaper hanger.\" Talkback never let go."},{kind:"outrageous",text:"2002. Corngate. A book, a campaign, and a fight with the Greens about genetically engineered corn. The word stuck. So did the mistrust on the left."},{kind:"burn",text:"Could stop a question with a pause and a stare. Interviewers still flinch in the replay. Contempt, without raising her voice."},{kind:"outrageous",text:"2007. Anti-smacking law. Family First packed the street. She passed it anyway. The row outlived the clause."},{kind:"silly",text:"Tramping PM. The bush was the brand before wellness was a shop. The pack did some of the politics."},{kind:"outrageous",text:"Afghanistan and the SAS. The left never fully forgave the quiet. Nine years taught the country how to argue with a long Prime Minister."}]};

    function getGeneration(year) {
      year = +year;
      var list = window.GEN_INFO || [];
      for (var i = 0; i < list.length; i++) {
        if (year >= list[i].start && year < list[i].end) return list[i].id;
      }
      if (year < 1928) return "greatest";
      if (year < 1946) return "silent";
      if (year < 1965) return "boomer";
      if (year < 1981) return "genx";
      if (year < 1997) return "millennial";
      if (year < 2013) return "genz";
      if (year < 2025) return "genalpha";
      if (year < 2040) return "genbeta";
      return "gengamma";
    }
    var GEN_INFO = [
      { id: "greatest", label: "Greatest Generation", start: 1901, end: 1928, housePct: 0, voterPct: 1 },
      { id: "silent", label: "Silent Generation", start: 1928, end: 1946, housePct: 3, voterPct: 4 },
      { id: "boomer", label: "Baby Boomers", start: 1946, end: 1965, housePct: 38, voterPct: 22 },
      { id: "genx", label: "Generation X", start: 1965, end: 1981, housePct: 48, voterPct: 24 },
      { id: "millennial", label: "Millennial", start: 1981, end: 1997, housePct: 10, voterPct: 26 },
      { id: "genz", label: "Generation Z", start: 1997, end: 2013, housePct: 1, voterPct: 18 },
      { id: "genalpha", label: "Generation Alpha", start: 2013, end: 2025, housePct: 0, voterPct: 0 },
      { id: "genbeta", label: "Generation Beta", start: 2025, end: 2040, housePct: 0, voterPct: 0 },
      { id: "gengamma", label: "Generation Gamma", start: 2040, end: 2055, housePct: 0, voterPct: 0 }
    ];
    (function fillGenFilter(){
      var sel = document.getElementById("genFilter");
      if (!sel) return;
      var keep = sel.value || "all";
      sel.innerHTML = '<option value="all">All generations</option>';
      GEN_INFO.forEach(function(g){
        var o = document.createElement("option");
        o.value = g.id;
        o.textContent = g.label + " (" + g.start + "–" + (g.end - 1) + ")";
        sel.appendChild(o);
      });
      sel.value = keep;
    })();
    function genInfoById(id) {
      for (var i = 0; i < GEN_INFO.length; i++) if (GEN_INFO[i].id === id) return GEN_INFO[i];
      return null;
    }
    function genShortLabel(id) {
      var map = { greatest:"Greatest", silent:"Silent", boomer:"Boomers", genx:"Gen X", millennial:"Millennial", genz:"Gen Z", genalpha:"Alpha", genbeta:"Beta", gengamma:"Gamma", gendelta:"Delta", lost:"Lost" };
      var g = genInfoById(id);
      return (g && (map[g.id] || g.label)) || "Gen";
    }
    function genChipHtml(id, opts) {
      var g = genInfoById(id);
      if (!g) return "";
      opts = opts || {};
      var short = ({ greatest: "Greatest", silent: "Silent", boomer: "Boomers", genx: "Gen X", millennial: "Millennial", genz: "Gen Z", genalpha: "Alpha", genbeta: "Beta", gengamma: "Gamma", gendelta: "Delta", lost: "Lost" })[g.id] || g.label;
      var name = opts.compact ? short : g.label;
      var pct = opts.compact ? "" : (
        '<span class="gen-pcts">' +
          '<span class="gen-pct" title="Share of all 123 sitting MPs">' + g.housePct + '% House</span>' +
          '<span class="gen-pct gen-pct-voters" title="Share of New Zealanders aged 18+, this birth window, approx 2026">' + g.voterPct + '% voters</span>' +
        '</span>'
      );
      return '<button type="button" class="gen-win-label' + (opts.compact ? " gen-win-label-compact" : "") + '" data-gen="' + g.id + '">' +
        name + pct + '</button>';
    }

    const timelineEl = document.getElementById("timeline");
    const minYear = 1901;
    const _nowY = new Date().getFullYear();
    const _currentDecadeStart = Math.floor(_nowY / 10) * 10;
    const maxYear = 2055; // Greatest (1901) through Generation Gamma (2054)
    const totalYears = maxYear - minYear;
    // Governing party by period (PM's party / lead party). Colours axis number strip.
    mps = mps.filter(function(m) { return m && m.id; });
    const GOVERNMENTS = [
      { start: 1901.00, end: 1906.46, party: "liberal", label: "Liberal (Seddon)" },
      { start: 1906.46, end: 1906.61, party: "liberal", label: "Liberal (Hall-Jones)" },
      { start: 1906.61, end: 1912.53, party: "liberal", label: "Liberal (Ward)" },
      { start: 1912.53, end: 1912.54, party: "liberal", label: "Liberal (Mackenzie)" },
      { start: 1912.54, end: 1928.93, party: "national", label: "Reform (Massey / Bell / Coates)" },
      { start: 1928.93, end: 1935.93, party: "national", label: "United / Coalition" },
      { start: 1935.91, end: 1949.95, party: "labour", label: "Labour" },
      { start: 1949.95, end: 1957.95, party: "national", label: "National" },
      { start: 1957.95, end: 1960.95, party: "labour", label: "Labour" },
      { start: 1960.95, end: 1972.93, party: "national", label: "National" },
      { start: 1972.93, end: 1975.95, party: "labour", label: "Labour" },
      { start: 1975.95, end: 1984.55, party: "national", label: "National" },
      { start: 1984.55, end: 1990.85, party: "labour", label: "Labour" },
      { start: 1990.85, end: 1999.90, party: "national", label: "National" },
      { start: 1999.90, end: 2008.90, party: "labour", label: "Labour" },
      { start: 2008.90, end: 2017.80, party: "national", label: "National" },
      { start: 2017.80, end: 2023.90, party: "labour", label: "Labour" },
      { start: 2023.90, end: 2026.85, party: "national", label: "National-led (to 2026 election)" }
    ];

    const PRIME_MINISTERS = [
      { mpId: "seddon", start: 1901.00, end: 1906.46, name: "Richard Seddon" },
      { mpId: "halljones", start: 1906.46, end: 1906.61, name: "William Hall-Jones" },
      { mpId: "ward1", start: 1906.61, end: 1912.53, name: "Joseph Ward" },
      { mpId: "mackenzie", start: 1912.53, end: 1912.54, name: "Thomas Mackenzie" },
      { mpId: "massey", start: 1912.54, end: 1925.36, name: "William Massey" },
      { mpId: "bell", start: 1925.37, end: 1925.41, name: "Francis Bell" },
      { mpId: "coates", start: 1925.41, end: 1928.93, name: "Gordon Coates" },
      { mpId: "ward", start: 1928.93, end: 1930.40, name: "Joseph Ward" },
      { mpId: "forbes", start: 1930.40, end: 1935.93, name: "George Forbes" },
      { mpId: "savage", start: 1935.93, end: 1940.24, name: "Michael Savage" },
      { mpId: "fraser", start: 1940.25, end: 1949.95, name: "Peter Fraser" },
      { mpId: "holland", start: 1949.95, end: 1957.72, name: "Sidney Holland" },
      { mpId: "holyoake", start: 1957.72, end: 1957.95, name: "Keith Holyoake" },
      { mpId: "nash", start: 1957.95, end: 1960.95, name: "Walter Nash" },
      { mpId: "holyoake2", start: 1960.95, end: 1972.10, name: "Keith Holyoake" },
      { mpId: "marshall", start: 1972.10, end: 1972.93, name: "Jack Marshall" },
      { mpId: "kirk", start: 1972.93, end: 1974.66, name: "Norman Kirk" },
      { mpId: "rowling", start: 1974.68, end: 1975.95, name: "Bill Rowling" },
      { mpId: "muldoon", start: 1975.95, end: 1984.55, name: "Robert Muldoon" },
      { mpId: "lange", start: 1984.55, end: 1989.6, name: "David Lange" },
      { mpId: "palmer", start: 1989.6, end: 1990.7, name: "Geoffrey Palmer" },
      { mpId: "moore", start: 1990.7, end: 1990.85, name: "Mike Moore" },
      { mpId: "bolger", start: 1990.85, end: 1997.9, name: "Jim Bolger" },
      { mpId: "shipley", start: 1997.9, end: 1999.9, name: "Jenny Shipley" },
      { mpId: "clark", start: 1999.9, end: 2008.9, name: "Helen Clark" },
      { mpId: "key", start: 2008.9, end: 2016.95, name: "John Key" },
      { mpId: "english", start: 2016.95, end: 2017.8, name: "Bill English" },
      { mpId: "ardern", start: 2017.8, end: 2023.08, name: "Jacinda Ardern" },
      { mpId: "hipkins", start: 2023.08, end: 2023.9, name: "Chris Hipkins" },
      { mpId: "luxon", start: 2023.9, end: 2026.85, name: "Christopher Luxon" }
    ];


    // Support/coalition partners beside the lead governing party (thin strip under gov colour)
    const COALITIONS = [
      { start: 1996, end: 1998, color: "var(--nzfirst)", label: "NZ First (with National)" },
      { start: 1999, end: 2002, color: "var(--green)", label: "Alliance / left support with Labour" },
      { start: 2002, end: 2008, color: "var(--nzfirst)", label: "NZ First / United Future support with Labour" },
      { start: 2008, end: 2011, color: "var(--act)", label: "ACT + Māori Party + UF with National" },
      { start: 2011, end: 2017, color: "var(--act)", label: "ACT + Māori Party + UF with National" },
      { start: 2017, end: 2020, color: "var(--nzfirst)", label: "NZ First + Green with Labour" },
      { start: 2020, end: 2023, color: "var(--green)", label: "Green cooperation with Labour majority" },
      { start: 2023, end: 2026.85, color: "var(--act)", label: "ACT + NZ First with National" }
    ];
    // Multi-partner segments (second thin dashes) for 2023+ and 2008+
    const COALITIONS_SECONDARY = [
      { start: 2008, end: 2017, color: "var(--tpm)", label: "Māori Party confidence & supply" },
      { start: 2017, end: 2020, color: "var(--green)", label: "Green confidence & supply" },
      { start: 2023, end: 2026.85, color: "var(--nzfirst)", label: "NZ First coalition" }
    ];


    
    function getFilteredMps() {
      const party = document.getElementById("partyFilter").value;
      const gen = document.getElementById("genFilter").value;
      const showPrior = document.getElementById("priorToggle").checked;
      let filtered = mps.slice();
      if (!showPrior) filtered = filtered.filter(m => !m.prior);
      if (party !== "all") filtered = filtered.filter(m => m.party === party);
      if (gen !== "all") filtered = filtered.filter(m => getGeneration(m.birthYear) === gen);
      return filtered;
    }

    
    function animateServedToBorn() {
      // 1) Fade out white party-link lines
      const layers = Array.from(document.querySelectorAll(".party-link-layer"));
      layers.forEach(el => {
        el.classList.add("is-fading");
        el.querySelectorAll("path").forEach(p => p.classList.remove("is-visible"));
      });

      setTimeout(() => {
        layers.forEach(el => el.remove());

        // 2) Remove extra party cards
        const extras = Array.from(document.querySelectorAll(".mp-node")).filter(node => {
          const cid = node.dataset.cardId || "";
          const idx = cid.includes("::") ? parseInt(cid.split("::")[1], 10) : 0;
          return idx > 0;
        });
        extras.forEach(node => {
          node.style.transition = "opacity 0.25s ease, transform 0.25s ease";
          node.style.opacity = "0";
          node.style.transform = "scale(0.85)";
        });

        setTimeout(() => {
          extras.forEach(node => node.remove());
          // 3) Slide remaining cards to Born positions
          positionMode = "born";
          animatePositionMode();
        }, extras.length ? 260 : 0);
      }, 360);
    }

    function animatePositionMode() {
      // Always honour Prior / party / generation filters
      const filtered = expandMpCards(getFilteredMps());
      const nodes = Array.from(document.querySelectorAll(".mp-node"));
      const laneHeight = (positionMode === "served") ? 108 : 94;
      const startTop = 96;

      if (!nodes.length) {
        applyFilters(true);
        return;
      }

      const sorted = sortCardsForLanes(filtered);
      const placed = assignLanes(sorted);
      const laneByCard = {};
      placed.forEach(({ mp, lane }) => { laneByCard[mp.cardId] = { lane: lane, mp: mp }; });

      const filteredCardIds = new Set(filtered.map(m => m.cardId));
      nodes.forEach(node => {
        const cid = node.dataset.cardId || (node.dataset.id + "::0");
        if (!filteredCardIds.has(cid)) {
          node.remove();
          return;
        }
        const info = laneByCard[cid];
        if (!info) return;
        node.style.left = yearToX(positionYear(info.mp)) + "%";
        node.style.top = (startTop + info.lane * laneHeight) + "px";
        const meta = node.querySelector(".meta");
        if (meta) {
          if (positionMode === "served") {
            meta.textContent = "Served from " + (info.mp.servedFrom || "—");
          } else {
            meta.innerHTML = "<span class=\"cake\" aria-hidden=\"true\">🎂</span> <span class=\"byear\">" + info.mp.birthYear + "</span>";
          }
        }
      });

      const maxLane = placed.reduce((m, p) => Math.max(m, p.lane), 0);
      timelineEl.style.height = (startTop + maxLane * laneHeight + 84 + 16 + 36) + "px";

      clearTimeout(window._modeLayoutTimer);
      window._modeLayoutTimer = setTimeout(() => applyFilters(true), 1320);
    }

    function yearToX(year) { return ((year - minYear) / totalYears) * 100; }
    function positionYear(mp) {
      if (positionMode === "served") {
        const y = mp.servedFrom || mp.birthYear;
        return Math.max(minYear, Math.min(maxYear, y));
      }
      return mp.birthYear;
    }

    function expandMpCards(list) {
      const out = [];
      const pmStartById = {};
      (typeof PRIME_MINISTERS !== "undefined" ? PRIME_MINISTERS : []).forEach(function(t) {
        pmStartById[t.mpId] = t.start;
      });

      list.forEach(function(mp) {
        function pushCard(opts) {
          out.push({
            id: mp.id,
            baseId: mp.id,
            cardId: opts.cardId,
            rank: mp.rank,
            name: mp.name,
            party: opts.party,
            birthYear: mp.birthYear,
            servedFrom: opts.servedFrom,
            partyTo: opts.partyTo != null ? opts.partyTo : null,
            partyIndex: opts.partyIndex,
            partyCount: opts.partyCount,
            electorate: mp.electorate,
            role: opts.role != null ? opts.role : mp.role,
            formative: mp.formative,
            notes: mp.notes,
            sprite: mp.sprite,
            badges: mp.badges,
            positions: mp.positions,
            prior: !!mp.prior,
            isPm: !!opts.isPm,
            pmFrom: opts.pmFrom != null ? opts.pmFrom : null,
            pmTo: opts.pmTo != null ? opts.pmTo : null
          });
        }

        var firstServed = mp.servedFrom || mp.birthYear;
        var pmStart = pmStartById[mp.id];
        var wasPm = pmStart != null || mp.isPm || (mp.role && /prime\s*minister/i.test(mp.role));

        // Served mode: party-change history OR PM career (first MP seat → PM)
        if (positionMode === "served") {
          if (mp.partyHistory && mp.partyHistory.length > 1) {
            mp.partyHistory.forEach(function(h, i) {
              pushCard({
                cardId: mp.id + "::" + i,
                party: h.party,
                servedFrom: h.from,
                partyTo: h.to,
                partyIndex: i,
                partyCount: mp.partyHistory.length,
                isPm: false,
                role: mp.role
              });
            });
            return;
          }

          // PM dual card: standard when first elected, gold when became PM
          if (wasPm && pmStart != null && pmStart > firstServed + 0.05) {
            var pmEnd = null;
            (PRIME_MINISTERS || []).forEach(function(t) {
              if (t.mpId === mp.id) pmEnd = t.end;
            });
            pushCard({
              cardId: mp.id + "::0",
              party: mp.party,
              servedFrom: firstServed,
              partyIndex: 0,
              partyCount: 2,
              isPm: false,
              role: "Member of Parliament",
              pmFrom: null,
              pmTo: null
            });
            pushCard({
              cardId: mp.id + "::1",
              party: mp.party,
              servedFrom: pmStart,
              partyIndex: 1,
              partyCount: 2,
              isPm: true,
              role: mp.role && /prime\s*minister/i.test(mp.role) ? mp.role : "Prime Minister",
              pmFrom: pmStart,
              pmTo: pmEnd
            });
            return;
          }
        }

        // Born mode or single-card Served without dual PM track:
        // never gold in Born (they were not PMs at birth); gold only on Served PM card
        pushCard({
          cardId: mp.id + "::0",
          party: mp.party,
          servedFrom: firstServed,
          partyIndex: 0,
          partyCount: 1,
          isPm: false,
          role: mp.role
        });
      });
      return out;
    }

    const CARD_SPAN_YEARS = 11;

    function assignLanes(list) {
      const lanes = [];
      const result = [];
      list.forEach(function(mp) {
        const py = positionYear(mp);
        let lane = 0;
        while (true) {
          if (!lanes[lane]) {
            lanes[lane] = [];
            break;
          }
          const conflict = lanes[lane].some(function(y) {
            return Math.abs(y - py) < CARD_SPAN_YEARS;
          });
          if (!conflict) break;
          lane++;
        }
        lanes[lane].push(py);
        result.push({ mp: mp, lane: lane });
      });
      return result;
    }

    function sortCardsForLanes(expanded) {
      return expanded.slice().sort(function(a, b) {
        if (!!a.isPm !== !!b.isPm) return a.isPm ? -1 : 1;
        var ra = (a.rank != null ? a.rank : 99);
        var rb = (b.rank != null ? b.rank : 99);
        if (ra !== rb) return ra - rb;
        var dy = positionYear(a) - positionYear(b);
        if (dy) return dy;
        return (a.partyIndex || 0) - (b.partyIndex || 0);
      });
    }

    let selectedId = null;
    let positionMode = "born"; // "born" | "served"

    function renderTimeline(filtered) {
      timelineEl.innerHTML = "";
      // Sticky decade descriptions — pin to top of timeline viewport while scrolling
      const eraLayer = document.createElement("div");
      eraLayer.className = "era-sticky-layer";
      eraLayer.style.width = "100%";
      eraLayer.style.minWidth = "2400px";
      eraLayer.style.position = "sticky";
      eraLayer.style.top = "0";
      /* v1.29: decade labels removed from main page; sticky layer holds coloured date bar only */
      timelineEl.appendChild(eraLayer);

      /* party wash behind cards removed */
      // Year axes — top lives inside sticky era layer; bottom on timeline
      function makeAxis(cls) {
        const axis = document.createElement("div");
        axis.className = "axis " + cls;
        // Party-in-power background behind year numbers
        GOVERNMENTS.forEach(g => {
          const from = Math.max(g.start, minYear);
          const to = Math.min(g.end, maxYear);
          if (to <= from) return;
          const band = document.createElement("div");
          band.className = "gov-band " + g.party;
          band.style.left = yearToX(from) + "%";
          band.style.width = (yearToX(to) - yearToX(from)) + "%";
          var pms = (PRIME_MINISTERS || []).filter(function(pm) {
            return pm.start < to && pm.end > from;
          }).map(function(pm) { return pm.name; });
          band.title = g.label + " · " + (pms.length ? pms.join(", ") : "") + " · " + Math.floor(from) + "–" + Math.floor(to);
          axis.appendChild(band);
        });
        // Thin coalition / support-partner strip along the bottom of the axis
        const cstrip = document.createElement("div");
        cstrip.className = "coalition-strip";
        function addCoalSegs(list, yOffsetPx) {
          list.forEach(c => {
            const from = Math.max(c.start, minYear);
            const to = Math.min(c.end, maxYear);
            if (to <= from) return;
            const seg = document.createElement("div");
            seg.className = "coalition-seg";
            seg.style.left = yearToX(from) + "%";
            seg.style.width = (yearToX(to) - yearToX(from)) + "%";
            seg.style.background = c.color;
            if (yOffsetPx) {
              seg.style.top = yOffsetPx + "px";
              seg.style.height = "2px";
            }
            seg.title = c.label;
            cstrip.appendChild(seg);
          });
        }
        addCoalSegs(COALITIONS, 0);
        addCoalSegs(COALITIONS_SECONDARY, 3);
        axis.appendChild(cstrip);

        (PRIME_MINISTERS || []).forEach(function(term) {
          var y0 = term.start;
          if (y0 < minYear || y0 > maxYear) return;
          var mark = document.createElement("div");
          mark.className = "pm-handover";
          mark.style.left = yearToX(y0) + "%";
          mark.title = "PM from " + (term.name || "") + " (" + Math.floor(y0) + ")";
          axis.appendChild(mark);
        });

        var tip = document.createElement("div");
        tip.className = "axis-pm-tip";
        axis.appendChild(tip);
        axis.addEventListener("mousemove", function(ev) {
          var rect = axis.getBoundingClientRect();
          if (!rect.width) return;
          var pct = (ev.clientX - rect.left) / rect.width;
          var year = minYear + pct * (maxYear - minYear);
          var sitting = null;
          (PRIME_MINISTERS || []).forEach(function(term) {
            if (year >= term.start && year < term.end) sitting = term;
          });
          if (sitting) {
            tip.textContent = sitting.name;
            tip.style.display = "block";
            tip.style.left = (pct * 100) + "%";
          } else {
            tip.style.display = "none";
          }
        });
        axis.addEventListener("mouseleave", function() {
          tip.style.display = "none";
        });

        for (let y = 1910; y <= maxYear; y += 10) {
          const tick = document.createElement("div");
          tick.className = "tick";
          tick.style.left = yearToX(y) + "%";
          tick.innerHTML = `<label>${y}</label>`;
          axis.appendChild(tick);
        }
        axis.querySelectorAll("img, .pm-axis-marker").forEach(function(n){ n.remove(); });
        return axis;
      }
      // top axis attached after era layer is created (see below)
      // Everything below zooms together: descriptions, date axes, guides, cards
      const zoomLayer = document.createElement("div");
      zoomLayer.className = "timeline-zoom-layer";
      zoomLayer.id = "timelineZoomLayer";

      // Move era descriptions into zoom layer so they scale with cards
      if (eraLayer.parentNode) eraLayer.parentNode.removeChild(eraLayer);
      zoomLayer.appendChild(eraLayer);

      const topAxis = makeAxis("top");
      eraLayer.appendChild(topAxis);
      var topHost = document.getElementById("topAxisBar");
      if (topHost) {
        topHost.innerHTML = "";
        var pinned = makeAxis("top");
        pinned.style.position = "relative";
        pinned.style.top = "0";
        pinned.style.height = "36px";
        pinned.style.width = "100%";
        pinned.style.minWidth = "2400px";
        topHost.appendChild(pinned);
        var tl = document.getElementById("timeline");
        if (tl) pinned.style.width = Math.max(tl.scrollWidth || 0, 2400) + "px";
      }

      // Decade vertical guide lines — touch top date strip and bottom date strip
      for (let y = 1910; y <= maxYear; y += 10) {
        const line = document.createElement("div");
        line.className = "decade-line";
        line.style.left = yearToX(y) + "%";
        zoomLayer.appendChild(line);
      }

      var GEN_WINDOWS = GEN_INFO;
      var genLayer = document.createElement("div");
      genLayer.className = "gen-windows";
      genLayer.id = "genWindows";
      GEN_WINDOWS.forEach(function(g) {
        var box = document.createElement("div");
        box.className = "gen-win";
        box.setAttribute("data-gen", g.id);
        box.style.left = yearToX(g.start) + "%";
        var winEnd = Math.min(g.end + 0.01, maxYear);
        if (winEnd <= g.start) winEnd = Math.min(g.start + 1, maxYear);
        box.style.width = Math.max(0, yearToX(winEnd) - yearToX(Math.max(g.start, minYear))) + "%";
        box.style.left = yearToX(Math.max(g.start, minYear)) + "%";
        box.innerHTML = genChipHtml(g.id);
        genLayer.appendChild(box);
      });
      zoomLayer.appendChild(genLayer);

      const MMP_START = 1996;
      const mmpBanner = document.createElement("div");
      mmpBanner.className = "mmp-banner";
      mmpBanner.style.left = yearToX(MMP_START) + "%";
      mmpBanner.title = "MMP begins — first election 1996";
      mmpBanner.setAttribute("aria-hidden", "true");
      const mmpText = document.createElement("span");
      mmpText.className = "mmp-banner-text";
      mmpText.textContent = Array.from({length: 24}, function(){ return "MMP"; }).join("          ");
      mmpBanner.appendChild(mmpText);
      zoomLayer.appendChild(mmpBanner);


      const expanded = expandMpCards(filtered);
      const sorted = sortCardsForLanes(expanded);
      const placed = assignLanes(sorted);

      // Taller cards because of the sprite
      const laneHeight = (positionMode === "served") ? 108 : 94;  // card height 84px + min 5px gap + buffer
      const startTop = 96; // below sticky era+axis strip

      placed.forEach(({ mp, lane }) => {
        const node = document.createElement("div");
        const isPm = !!mp.isPm;
        var genKey = genIdFromYear(mp.birthYear);
        node.className = "mp-node biz-mini" + (mp.prior ? " prior" : "") + (isPm ? " pm" : "") + (selectedId === mp.baseId || selectedId === mp.id ? " selected" : "") + (genKey ? (" gen-" + genKey) : "");
        node.dataset.id = mp.baseId || mp.id;
        node.dataset.baseId = mp.baseId || mp.id;
        node.dataset.cardId = mp.cardId;
        node.setAttribute("data-id", mp.baseId || mp.id);
        node.setAttribute("data-base-id", mp.baseId || mp.id);
        const x = yearToX(positionYear(mp));
        node.style.left = x + '%';  // Born: birth year · Served: first entered Parliament
        node.style.top = (startTop + lane * laneHeight) + "px";
        node.innerHTML = `
          <div class="gen-wash" aria-hidden="true"></div>
          <span class="biz-slit biz-slit-tl"></span>
          <span class="biz-slit biz-slit-tr"></span>
          <span class="biz-slit biz-slit-bl"></span>
          <span class="biz-slit biz-slit-br"></span>
          <div class="birth-edge" title="Left edge = birth year"></div>
          <div class="party-bar" style="background:${partyColour[mp.party] || '#666'}"></div>
          ${isPm ? '<span class="pm-seal" title="Prime Minister"><svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="20" rx="7" ry="1.6" fill="currentColor"/><path d="M6.5 20v-2.2c0-.2 1.6-1.1 5.5-1.1s5.5.9 5.5 1.1V20" fill="none" stroke="currentColor" stroke-width="1.3"/><ellipse cx="12" cy="16.6" rx="6" ry="1.3" fill="none" stroke="currentColor" stroke-width="1.3"/><ellipse cx="12" cy="13.8" rx="5" ry="1.2" fill="none" stroke="currentColor" stroke-width="1.3"/><ellipse cx="12" cy="11.2" rx="3.8" ry="1.1" fill="none" stroke="currentColor" stroke-width="1.3"/><ellipse cx="12" cy="8.8" rx="2.6" ry="1" fill="none" stroke="currentColor" stroke-width="1.3"/><ellipse cx="12" cy="6.6" rx="1.6" ry=".8" fill="currentColor"/></svg><span class="pm-letters">PM</span></span>' : ""}
          ${spriteMarkup(mp.id || mp.baseId, 44, "sprite")}
          <div class="card-copy">
            <div class="name">${mp.name}</div>
            <div class="meta">${(function(){
              if (positionMode !== "served") return "<span class=\"cake\" aria-hidden=\"true\">🎂</span><span class=\"byear\">" + mp.birthYear + "</span>";
              if (mp.isPm && mp.pmFrom != null) {
                var a = Math.floor(mp.pmFrom);
                var b = (mp.pmTo != null && mp.pmTo < 2030) ? Math.floor(mp.pmTo) : "present";
                return a + " – " + b;
              }
              var y = typeof mp.servedFrom === "number" ? Math.floor(mp.servedFrom) : (mp.servedFrom || "—");
              return "In House " + y;
            })()}</div>
            <div class="card-foot"><span class="formative-label">${mp.party}</span><span class="rank">#${mp.rank || "–"}</span></div>
          </div>
        `;
        (function(cardMp, el) {
          // Same open path for every card (prior + current). Expand = CSS hover/hold only.
          el.style.pointerEvents = "auto";
          el.style.cursor = "pointer";
          el.style.touchAction = "manipulation";

          function openDetails(e) {
            if (e) {
              try {
                var t = e.target;
                if (t && t.closest && t.closest(".party-badge-btn, .card-party-badge, .legend-party")) {
                  return;
                }
                e.preventDefault();
                e.stopPropagation();
              } catch (ignore) {}
            }
            var id = (cardMp && (cardMp.baseId || cardMp.id)) || "";
            var full = null;
            for (var i = 0; i < mps.length; i++) {
              if (mps[i] && (mps[i].id === id || mps[i].baseId === id)) { full = mps[i]; break; }
            }
            if (!full) full = cardMp;
            openPanel(full);
          }

          // Desktop + synthetic mobile click
          el.addEventListener("click", openDetails, false);

          // Explicit mobile tap (does not require 300ms click)
          var touchMoved = false;
          el.addEventListener("touchstart", function() { touchMoved = false; }, { passive: true });
          el.addEventListener("touchmove", function() { touchMoved = true; }, { passive: true });
          el.addEventListener("touchend", function(e) {
            if (touchMoved) return;
            openDetails(e);
          }, { passive: false });
        })(mp, node);

        zoomLayer.appendChild(node);
      });

      // Keep bottom date line UNDER all MP cards
      const cardW = 168;
      const cardH = 84;
      const padBelow = 48;
      const maxLane = placed.reduce((m, p) => Math.max(m, p.lane), 0);
      const contentBottom = startTop + maxLane * laneHeight + cardH + padBelow;
      // Stretch chart so after zoom its visual bottom meets the footer date bar
      var baseW = Math.max(timelineEl.scrollWidth || 0, 2400);
      zoomLayer.dataset.baseWidth = String(baseW);
      zoomLayer.dataset.baseHeight = String(contentBottom);
      zoomLayer.style.width = baseW + "px";
      zoomLayer.style.minWidth = baseW + "px";
      zoomLayer.style.height = contentBottom + "px";
      var zNow = (window.__timelineView && window.__timelineView.zoom) || 1;
      timelineEl.style.width = Math.round(baseW * zNow) + "px";
      timelineEl.style.minWidth = Math.round(baseW * zNow) + "px";
      timelineEl.style.height = Math.round(contentBottom * zNow) + "px";
      var stretchedH = contentBottom;
      timelineEl.appendChild(zoomLayer);

      // Bottom date axis stuck to footer band — horizontal zoom matches cards
      const bottomHost = document.getElementById("bottomAxisBar");
      if (bottomHost) {
        bottomHost.innerHTML = "";
        bottomHost.style.display = "none";
      }

      // Curved white links between sequential party cards (under cards, touching edges)
      const linkSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      linkSvg.setAttribute("class", "party-link-layer");
      linkSvg.setAttribute("width", "100%");
      linkSvg.style.height = stretchedH + "px";
      zoomLayer.insertBefore(linkSvg, zoomLayer.firstChild);
      requestAnimationFrame(() => {
        linkSvg.querySelectorAll("path").forEach(p => p.classList.add("is-visible"));
      });
      if (window.__timelineView && window.__timelineView.reapply) {
        requestAnimationFrame(() => window.__timelineView.reapply());
      }

      const byBase = {};
      placed.forEach(({ mp }) => {
        if (!mp.partyCount || mp.partyCount < 2) return;
        if (!byBase[mp.baseId]) byBase[mp.baseId] = [];
        byBase[mp.baseId].push(mp);
      });
      Object.keys(byBase).forEach(baseId => {
        const arr = byBase[baseId].sort((a, b) => a.partyIndex - b.partyIndex);
        for (let i = 0; i < arr.length - 1; i++) {
          const elA = zoomLayer.querySelector('[data-card-id="' + arr[i].cardId + '"]');
          const elB = zoomLayer.querySelector('[data-card-id="' + arr[i + 1].cardId + '"]');
          if (!elA || !elB) continue;
          const x1 = elA.offsetLeft + elA.offsetWidth;
          const y1 = elA.offsetTop + elA.offsetHeight / 2;
          const x2 = elB.offsetLeft;
          const y2 = elB.offsetTop + elB.offsetHeight / 2;
          const dx = Math.max(40, Math.abs(x2 - x1) / 2);
          const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
          path.setAttribute("d", "M " + x1 + " " + y1 + " C " + (x1 + dx) + " " + y1 + ", " + (x2 - dx) + " " + y2 + ", " + x2 + " " + y2);
          linkSvg.appendChild(path);
        }
      });
    }

    const panel = document.getElementById("panel");
    const backdrop = document.getElementById("backdrop");
    const panelContent = document.getElementById("panelContent");

    
    function visibleCardsSorted() {
      var nodes = Array.from(document.querySelectorAll(".mp-node"));
      var items = [];
      var seen = {};
      nodes.forEach(function(n) {
        var id = n.getAttribute("data-base-id") || n.getAttribute("data-id");
        if (!id || seen[id]) return;
        seen[id] = true;
        var full = null;
        for (var i = 0; i < mps.length; i++) {
          if (mps[i] && mps[i].id === id) { full = mps[i]; break; }
        }
        if (!full) return;
        items.push({
          mp: full,
          x: parseFloat(n.style.left) || yearToX(positionYear(full))
        });
      });
      items.sort(function(a, b) { return a.x - b.x; });
      return items;
    }

    function neighbourMp(current, dir) {
      var list = visibleCardsSorted();
      if (!list.length) return null;
      var idx = -1;
      for (var i = 0; i < list.length; i++) {
        if (list[i].mp.id === current.id || list[i].mp.id === current.baseId) { idx = i; break; }
      }
      if (idx < 0) {
        var y = positionYear(current);
        var x = yearToX(y);
        if (dir < 0) {
          for (var j = list.length - 1; j >= 0; j--) {
            if (list[j].x < x - 0.01) return list[j].mp;
          }
          return list[0].mp;
        }
        for (var k = 0; k < list.length; k++) {
          if (list[k].x > x + 0.01) return list[k].mp;
        }
        return list[list.length - 1].mp;
      }
      var next = idx + dir;
      if (next < 0 || next >= list.length) return null;
      return list[next].mp;
    }


    function parseDay(d) {
      var p = String(d || "").split("-");
      return Date.UTC(+p[0], (+p[1] || 1) - 1, +p[2] || 1);
    }
    function shortLab(d) {
      var dt = new Date(parseDay(d));
      var m = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][dt.getUTCMonth()];
      return m + " " + String(dt.getUTCFullYear()).slice(2);
    }
    function profilePoints(profile) {
      if (profile.points && profile.points.length) {
        return profile.points.map(function(pt) {
          return { t: parseDay(pt.d), d: pt.d, v: Number(pt.v) };
        }).filter(function(pt) { return isFinite(pt.t) && isFinite(pt.v); })
          .sort(function(a, b) { return a.t - b.t; });
      }
      var vals = (profile.series || []).map(Number);
      return POLL_ANCHORS.map(function(a, i) {
        if (vals[i] == null || !isFinite(vals[i])) return null;
        return { t: parseDay(a.d), d: a.d, v: vals[i] };
      }).filter(Boolean);
    }
    function monthlyTrack(points) {
      if (!points.length) return [];
      var start = new Date(points[0].t);
      var end = new Date(points[points.length - 1].t);
      var months = [];
      var y = start.getUTCFullYear(), m = start.getUTCMonth();
      var endY = end.getUTCFullYear(), endM = end.getUTCMonth();
      while (y < endY || (y === endY && m <= endM)) {
        months.push(Date.UTC(y, m, 1));
        m += 1;
        if (m > 11) { m = 0; y += 1; }
      }
      if (!months.length) return points.slice();
      return months.map(function(t) {
        var i = 0;
        while (i < points.length - 1 && points[i + 1].t < t) i += 1;
        var a = points[i], b = points[Math.min(i + 1, points.length - 1)];
        if (b.t === a.t) return { t: t, v: a.v };
        var u = (t - a.t) / (b.t - a.t);
        u = Math.max(0, Math.min(1, u));
        return { t: t, v: a.v + (b.v - a.v) * u };
      });
    }
    function seedMonthlyPoints(profile) {
      if (!profile) return;
      if (profile.points && profile.points.length >= 3) return;
      var cur = Number(profile.current);
      var fc = Number(profile.forecast);
      if (!isFinite(cur)) cur = Number((profile.series || []).slice(-2, -1)[0]);
      if (!isFinite(fc)) fc = cur;
      if (!isFinite(cur)) return;
      var months = ["2026-03-01","2026-04-01","2026-05-01","2026-06-01","2026-07-01","2026-08-01","2026-09-01","2026-10-01","2026-11-07"];
      profile.points = months.map(function(d, i) {
        var u = i / (months.length - 1);
        return { d: d, v: Math.round((cur + (fc - cur) * u) * 10) / 10 };
      });
    }
    function pollChartSvg(party, profile) {
      var hex = {
        "National": "#00529f",
        "Labour": "#d82a20",
        "Green": "#298c47",
        "ACT": "#f4c400",
        "NZ First": "#7b8cff",
        "Te Pāti Māori": "#8b1e1e",
        "TOP": "#2a9bb5"
      };
      var color = hex[party] || "#8ab4f8";
      seedMonthlyPoints(profile);
      var raw = [];
      try { raw = profilePoints(profile) || []; } catch (e) { raw = []; }
      if (raw.length < 2) {
        var cur = Number(profile && profile.current);
        var fc = Number(profile && profile.forecast);
        if (!isFinite(cur)) cur = 20;
        if (!isFinite(fc)) fc = cur;
        raw = [
          { t: Date.UTC(2026, 2, 1), v: cur },
          { t: Date.UTC(2026, 5, 1), v: (cur + fc) / 2 },
          { t: Date.UTC(2026, 10, 7), v: fc }
        ];
      }
      var months = [];
      var start = Date.UTC(2026, 2, 1);
      var end = Date.UTC(2026, 10, 7);
      var y = 2026, m = 2;
      while (Date.UTC(y, m, 1) <= end) {
        months.push(Date.UTC(y, m, 1));
        m += 1;
        if (m > 11) { m = 0; y += 1; }
      }
      months.push(end);
      function atT(t) {
        var a = raw[0], b = raw[raw.length - 1];
        for (var i = 0; i < raw.length - 1; i++) {
          if (raw[i].t <= t && raw[i + 1].t >= t) { a = raw[i]; b = raw[i + 1]; break; }
          if (raw[i].t <= t) a = raw[i];
        }
        if (!b || b.t === a.t) return a.v;
        var u = (t - a.t) / (b.t - a.t);
        return a.v + (b.v - a.v) * Math.max(0, Math.min(1, u));
      }
      var now = Date.UTC(2026, 8, 1);
      var vals = months.map(atT);
      var lo = Math.min.apply(null, vals);
      var hi = Math.max.apply(null, vals);
      if (!isFinite(lo) || !isFinite(hi)) { lo = 0; hi = 40; }
      if (hi - lo < 3) { var mid = (hi + lo) / 2; lo = mid - 2; hi = mid + 2; }
      lo = Math.max(0, lo - 1);
      hi = hi + 1;
      var w = 320, h = 200, padL = 30, padR = 12, padT = 12, padB = 28;
      function xAt(t) { return padL + ((t - start) / (end - start)) * (w - padL - padR); }
      function yAt(v) { return padT + (1 - (v - lo) / (hi - lo)) * (h - padT - padB); }
      var hist = [], fut = [];
      months.forEach(function(t) {
        var pt = xAt(t).toFixed(1) + "," + yAt(atT(t)).toFixed(1);
        if (t <= now) hist.push(pt);
        if (t >= now) fut.push(pt);
      });
      if (hist.length && fut.length && hist[hist.length - 1] !== fut[0]) fut.unshift(hist[hist.length - 1]);
      var yMarks = [lo, (lo + hi) / 2, hi];
      var grid = yMarks.map(function(v) {
        return '<line x1="' + padL + '" y1="' + yAt(v).toFixed(1) + '" x2="' + (w - padR) + '" y2="' + yAt(v).toFixed(1) + '" stroke="#445" />';
      }).join("");
      var ticks = "";
      return '<svg class="poll-chart" viewBox="0 0 ' + w + " " + h + '" width="100%" height="168" role="img" aria-label="Party vote track to November 2026">' +
        '<rect x="0" y="0" width="' + w + '" height="' + h + '" fill="#1b1f27" rx="8" />' +
        grid +
        (hist.length ? '<polyline fill="none" stroke="' + color + '" stroke-width="2.6" points="' + hist.join(" ") + '" />' : "") +
        (fut.length ? '<polyline fill="none" stroke="' + color + '" stroke-width="2.4" stroke-dasharray="5 4" points="' + fut.join(" ") + '" />' : "") +
        '<circle cx="' + xAt(end).toFixed(1) + '" cy="' + yAt(atT(end)).toFixed(1) + '" r="4.5" fill="none" stroke="' + color + '" stroke-width="2.2" />' +
        ticks +
        "</svg>";
    }

    function resolvePartyName(party) {
      var s = String(party || "").replace(/\s+/g, " ").trim();
      var aliases = {
        "NZF": "NZ First", "NZFirst": "NZ First", "New Zealand First": "NZ First",
        "Greens": "Green", "The Greens": "Green", "Green Party": "Green",
        "Te Pati Maori": "Te Pāti Māori", "Te Pati Māori": "Te Pāti Māori", "TPM": "Te Pāti Māori",
        "Nat": "National", "Nats": "National", "Lab": "Labour"
      };
      if (aliases[s]) s = aliases[s];
      var bag = PARTY_PROFILES || {};
      if (bag[s]) return s;
      var keys = Object.keys(bag);
      for (var i = 0; i < keys.length; i++) {
        if (keys[i].toLowerCase() === s.toLowerCase()) return keys[i];
      }
      return s;
    }
    function openPartyPanel(party, fromMp) {
      window.openPartyPanel = openPartyPanel;
      window.__mapScrollEnabled = false;
      try { resetPanelScroll(); } catch (e) {}
      party = resolvePartyName(party);
      if (window.atlasPush) window.atlasPush("party", { party: party });
      var profile = (PARTY_PROFILES && PARTY_PROFILES[party]) || null;
      panel.classList.add("open");
      backdrop.classList.add("open");
      panel.style.transform = "translateX(0)";
      panel.style.visibility = "visible";
      document.documentElement.classList.add("overlay-open");
      var stickTitle = panel.querySelector(".float-titlebar .ft-title") || document.getElementById("panelStickTitle");
      if (stickTitle) stickTitle.textContent = (party ? party + " Party" : "Party");
      var tn = document.getElementById("mpTitleName");
      if (tn) { tn.hidden = false; tn.textContent = party ? (party + " Party") : "Party"; }
      var tb = document.getElementById("mpTitlebar");
      if (tb) tb.classList.add("party-mode");
      panel.classList.add("party-mode");
      var _p=document.getElementById("panelPrev"), _n=document.getElementById("panelNext");
      if (_p) _p.disabled = true; if (_n) _n.disabled = true;
      try {
        document.body.appendChild(backdrop);
        document.body.appendChild(panel);
      } catch (e) {}
      panel.style.cssText += ";position:fixed;top:0;right:0;bottom:0;height:100%;max-height:100dvh;z-index:5001;transform:translateX(0);visibility:visible;display:flex;flex-direction:column;overflow:hidden;";

      backdrop.style.cssText += ";position:fixed;inset:0;top:0;z-index:5000;opacity:1;pointer-events:auto;";
      if (!profile) {
        panelContent.innerHTML = "<h2 class=\"keep-title\">" + String(party || "Party") + "</h2><p>No 2026 briefing stored for this party yet.</p>";
        return;
      }
      var promises = (profile.promises || []).map(function(block) {
        if (typeof block === "string") return "<li>" + block + "</li>";
        var lis = (block.items || []).map(function(it) { return "<li>" + it + "</li>"; }).join("");
        return '<h4 class="promise-head">' + block.h + '</h4><ul class="promise-list">' + lis + "</ul>";
      }).join("");
      var rows = (profile.cycles || []).filter(function(c) { return !c.skipped; }).slice().sort(function(a, b) { return b.year - a.year; });
      var scoredItems = [];
      rows.forEach(function(c) {
        (c.items || []).forEach(function(it) {
          if (it.landed === 0 || it.landed === 1) scoredItems.push(it);
        });
      });
      var yes = scoredItems.filter(function(it) { return it.landed === 1; }).length;
      var no = scoredItems.filter(function(it) { return it.landed === 0; }).length;
      var tot = yes + no;
      var yesPct = tot ? Math.round(100 * yes / tot) : 0;
      var noPct = tot ? 100 - yesPct : 0;
      var cycleHtml = '<div class="cycle-stack">' + rows.map(function(c) {
        var office = c.inGov ? "In office" : (c.seats === 0 ? "0 seats" : "Out");
        var items = (c.items || []).map(function(it, i) {
          var mark = it.landed === 1 ? "✓" : it.landed === 0 ? "✕" : "–";
          var cls = it.landed === 1 ? "yes" : it.landed === 0 ? "no" : "na";
          var q = it.d ? ('<button type="button" class="promise-q" aria-expanded="false" aria-label="Details">?</button><div class="promise-detail">' + it.d + "</div>") : "";
          return '<li class="promise-line"><span class="' + cls + ' result-tag" aria-label="' +
            (it.landed === 1 ? "Done" : it.landed === 0 ? "Not done" : "Not scored") + '">' + mark +
            "</span><span>" + it.p + q + "</span></li>";
        }).join("");
        return '<section class="cycle-year"><h4>' + c.year +
          ' <span>' + office + "</span></h4><ul class=\"promise-list\">" + items + "</ul></section>";
      }).join("") + "</div>";
      panelContent.innerHTML =
        (fromMp ? '<button type="button" class="party-back" id="partyBackBtn">← ' + fromMp.name + '</button>' : '') +
        '<p class="poll-now">' + (isFinite(Number(profile.current)) ? Number(profile.current).toFixed(1) : "—") + '% <small>party vote · ' + (profile.asAt || (window.__liveFeedMeta && window.__liveFeedMeta.asAt) || "bundled late Aug 2026") + '</small></p>' +
        '<p class="poll-legend">Track to election day (7 Nov 2026): <strong>' + (isFinite(Number(profile.forecast)) ? Number(profile.forecast).toFixed(1) : "—") + '%</strong></p>' +
        '<div id="partyPollMount">' + (function(){ try { seedMonthlyPoints(profile); var svg = pollChartSvg(party, profile) || '<p class="poll-legend">No poll track for this party yet.</p>'; return svg + '<div class="poll-months"><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span></div><p class="poll-legend">Solid = last six months. Dotted = track to 7 Nov 2026. Hollow point is the projection, not a poll.</p>'; } catch (err) { console.error('poll chart', err); return '<p class="poll-legend">Poll track could not be drawn.</p>'; } })() + '</div>' +
        '<div class="detail-section"><h3>Tracking the Promises: The 2026 Election</h3><p class="poll-legend">Current offerings for this election. Not a record of delivery.</p>' + promises + '</div>' +
        '<div class="detail-section"><h3>Last 7 elections (2005–2023)</h3>' + cycleHtml + '</div>';
      resetPanelScroll();
      Array.prototype.forEach.call(panelContent.querySelectorAll(".promise-q"), function(btn) {
        btn.addEventListener("click", function(ev) {
          ev.preventDefault();
          ev.stopPropagation();
          var det = btn.nextElementSibling;
          var open = btn.getAttribute("aria-expanded") === "true";
          btn.setAttribute("aria-expanded", open ? "false" : "true");
          if (det && det.classList.contains("promise-detail")) det.classList.toggle("open", !open);
        });
      });
      var back = document.getElementById("partyBackBtn");
      if (back && fromMp) {
        back.addEventListener("click", function(ev) {
          ev.preventDefault();
          openPanel(fromMp);
        });
      }
    }

    function resetPanelScroll() {
      panel.scrollTop = 0;
      if (panelContent) panelContent.scrollTop = 0;
      var pages = document.querySelector(".panel-tab-pages");
      if (pages) pages.scrollTop = 0;
      requestAnimationFrame(function() {
        panel.scrollTop = 0;
        if (panelContent) panelContent.scrollTop = 0;
        if (pages) pages.scrollTop = 0;
      });
    }
    function openPanel(mp, navDir) {
      var htmlOnlyEarly = !!window.__mpHtmlOnly;
      if (!htmlOnlyEarly) {
        window.__mapScrollEnabled = false;
        resetPanelScroll();
        if (window.atlasPush) window.atlasPush("mp", { id: mp && mp.id });
      }
      if (!mp || !mp.id) {
        console.warn("openPanel: missing mp", mp);
        try {
          var live = document.getElementById("a11yLive");
          if (live) live.textContent = "Could not open that member.";
        } catch (e) {}
        window.__mapScrollEnabled = true;
        return;
      }
      // Prefer master record (badges/positions for prior PMs)
      for (var _i = 0; _i < mps.length; _i++) {
        if (!mps[_i] || !mps[_i].id) continue;
        if (mps[_i].id === mp.id || mps[_i].id === mp.baseId || mps[_i].baseId === mp.id) {
          mp = mps[_i];
          break;
        }
      }
      if (!mp || !mp.id) {
        console.warn("openPanel: unresolved mp");
        window.__mapScrollEnabled = true;
        return;
      }
      var htmlOnly = !!window.__mpHtmlOnly;
      window.__mpHtmlOnly = false;
      if (!htmlOnly) selectedId = mp.id;

      var dir = Number(navDir) || 0;
      if (htmlOnly) dir = 0;
      if (dir && panel.classList.contains("open") && !window.__panelNavLock) {
        window.__panelNavLock = true;
        var outClass = dir > 0 ? "slide-out-left" : "slide-out-right";
        var inClass = dir > 0 ? "slide-in-right" : "slide-in-left";
        panelContent.classList.remove("slide-out-left","slide-out-right","slide-in-left","slide-in-right","slide-rest");
        panelContent.classList.add(outClass);
        setTimeout(function() {
          panelContent.classList.remove(outClass);
          panelContent.classList.add(inClass);
          openPanel(mp, 0);
          requestAnimationFrame(function() {
            requestAnimationFrame(function() {
              panelContent.classList.remove(inClass);
              panelContent.classList.add("slide-rest");
              setTimeout(function() {
                panelContent.classList.remove("slide-rest");
                window.__panelNavLock = false;
              }, 120);
            });
          });
        }, 80);
        return;
      }

      function esc(s) {
        return String(s == null ? "" : s)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;");
      }

      if (!htmlOnly) {
      // Force panel visible (class + inline in case CSS fails)
      panel.classList.add("open");
      backdrop.classList.add("open");
      panel.style.transform = "translateX(0)";
      panel.style.visibility = "visible";
      document.documentElement.classList.add("overlay-open");
      var tn = document.getElementById("mpTitleName");
      if (tn) { tn.hidden = false; tn.textContent = "MP Details"; }
      var tb = document.getElementById("mpTitlebar");
      if (tb) tb.classList.remove("party-mode");
      try {
        document.body.appendChild(backdrop);
        document.body.appendChild(panel);
      } catch (e) {}
      panel.style.cssText += ";position:fixed;top:0;right:0;bottom:0;height:100%;max-height:100dvh;z-index:5001;transform:translateX(0);visibility:visible;display:flex;flex-direction:column;overflow:hidden;";
      backdrop.style.cssText += ";position:fixed;inset:0;top:0;z-index:5000;opacity:1;pointer-events:auto;";
      if (typeof ignoreBackdropUntil !== "undefined") {
        ignoreBackdropUntil = Date.now() + 800;
      }
      panelContent.classList.remove("mp-carousel");
      panelContent.style.transform = "";
      panelContent.style.opacity = "";
      panelContent.style.transition = "none";
      }

      try {
        const gen = getGeneration(mp.birthYear);
        const formStart = mp.birthYear + 15;
        const formEnd = mp.birthYear + 25;
        const matchedEras = (eras || []).filter(e => e.start <= formEnd && e.end >= formStart);
        const erasForPanel = matchedEras.length ? matchedEras : (eras && eras[0] ? [eras[0]] : []);
        const erasHtml = erasForPanel.map(era => {
          const seenList = (era.formativeSeen || []).map(item => "<li>" + esc(item) + "</li>").join("");
          return "<div class=\"era-context\" style=\"margin-bottom:0.75rem\"><strong>" + esc(era.label) + "</strong><br>" +
            esc(era.note) + "<ul class=\"formative-list\">" + seenList + "</ul></div>";
        }).join("");

        const rawBadges = (mp.badges || []).concat(
          (typeof BADGE_EXTRA !== "undefined" && (BADGE_EXTRA[mp.id] || BADGE_EXTRA[mp.baseId])) || []
        );
        const badgeMap = {};
        rawBadges.forEach(function(b) {
          if (typeof b === "string") {
            badgeMap[b] = badgeMap[b] || { up: false, down: false };
            badgeMap[b].up = true;
          } else if (b && b.key) {
            badgeMap[b.key] = badgeMap[b.key] || { up: false, down: false };
            if (b.stance === "down") badgeMap[b.key].down = true;
            else badgeMap[b.key].up = true;
          }
        });
        const badgeEntries = Object.entries(badgeMap);
        var badgesHtml = "";
        if (badgeEntries.length) {
          badgeEntries.sort(function(a, b) {
            var la = ((BADGE_META && BADGE_META[a[0]]) || a[0]).toLowerCase();
            var lb = ((BADGE_META && BADGE_META[b[0]]) || b[0]).toLowerCase();
            return la < lb ? -1 : la > lb ? 1 : 0;
          });
          function badgeBtn(pair, kind) {
            var k = pair[0], st = pair[1];
            var label = (BADGE_META && BADGE_META[k]) || k;
            var a = BADGE_ATLAS && BADGE_ATLAS[k];
            var opposed = kind === "down";
            var title = opposed ? (label + " — opposed") : (label + " — supported");
            var cls = "badge-slot" + (opposed ? " opposed" : "");
            var imgs = a
              ? ("<span class=\"pos badge-spr\" style=\"--c:" + a.c + ";--r:" + a.r + "\" role=\"img\" aria-label=\"" + esc(title) + "\"></span>")
              : ("<img class=\"pos\" src=\"badges/" + k + ".png\" alt=\"" + esc(title) + "\">");
            if (opposed) imgs += "<span class=\"neg-slash\" aria-hidden=\"true\"></span>";
            return "<button type=\"button\" class=\"" + cls + "\" data-badge=\"" + k + "\" data-up=\"" + (opposed ? "0" : "1") + "\" data-down=\"" + (opposed ? "1" : "0") + "\" aria-pressed=\"false\" title=\"" + esc(title) + ". Click for explanation\">" + imgs + "</button>";
          }
          var mixed = [];
          badgeEntries.forEach(function(p) {
            if (p[1] && p[1].up) mixed.push({ pair: p, kind: "up" });
            if (p[1] && p[1].down) mixed.push({ pair: p, kind: "down" });
          });
          mixed.sort(function(a, b) {
            var la = (((BADGE_META && BADGE_META[a.pair[0]]) || a.pair[0])).toLowerCase();
            var lb = (((BADGE_META && BADGE_META[b.pair[0]]) || b.pair[0])).toLowerCase();
            if (la === lb) return a.kind < b.kind ? -1 : a.kind > b.kind ? 1 : 0;
            return la < lb ? -1 : 1;
          });
          var allHtml = mixed.map(function(item){ return badgeBtn(item.pair, item.kind); }).join("");
          badgesHtml = "<div class=\"detail-badges badge-combined\">" + (allHtml || "<p class=\"poll-legend\">None listed.</p>") + "</div>";
          badgesHtml += "<div class=\"badge-explain\" id=\"badgeExplain\" hidden></div>";
        }

        var badgesSection = "<div class=\"detail-section\" id=\"badgesSection\">" +
          (badgesHtml || "<p class=\"placeholder-note\">No policy badges recorded for this member yet.</p>") +
          "</div>";

        var positionsHtml = "";

        var momentItems = MP_MOMENTS[mp.id] || MP_MOMENTS[mp.baseId] || [];
        var kindMeta = {
          outrageous: { label: "Headline", cls: "headline" },
          burn: { label: "Quote", cls: "quote" },
          silly: { label: "Quirk", cls: "quirk" },
          object: { label: "Object", cls: "object" }
        };
        function splitMomentText(text) {
          var s = String(text || "");
          var m = s.match(/^((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s+\d{4}|\d{4}(?:[–\-]\d{2,4})?|\d{4}s(?:[–\-]present)?)\.\s*/);
          if (m) return { date: m[1], body: s.slice(m[0].length) };
          return { date: "", body: s };
        }
        var momentsHtml = "<div class=\"detail-section\" id=\"momentsSection\"><h3>On the record</h3>";
        if (momentItems.length) {
          momentsHtml += "<ul class=\"moments-list\">" + momentItems.map(function(item) {
            var meta = kindMeta[item.kind] || kindMeta.silly;
            if (item.kind === "burn" && item.text.indexOf('"') === -1) meta = { label: "Note", cls: "quirk" };
            var bits = splitMomentText(item.text);
            var href = "";
            var body = esc(bits.body);
            if (href) {
              body = "<a class=\"moment-link\" href=\"" + esc(href) + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + body + "</a>";
            }
            return "<li class=\"moment-" + meta.cls + "\">" +
              "<div class=\"moment-meta\">" +
                (bits.date ? "<span class=\"moment-date\">" + esc(bits.date) + "</span>" : "<span></span>") +
                "<span class=\"moment-kind\">" + esc(href ? "Article" : meta.label) + "</span>" +
              "</div><p>" + body + "</p></li>";
          }).join("") + "</ul>";
        } else {
          momentsHtml += "<p class=\"placeholder-note\">No public file on this member yet.</p>";
        }
        momentsHtml += "<p class=\"placeholder-note\">Newest first.</p></div>";
        var isPm = !!(mp.isPm || (mp.role && /prime\s*minister/i.test(mp.role)));
        var activeTab = window.__mpPanelTab || "badges";
        if (activeTab === "record" || activeTab === "formative" || activeTab === "skill") activeTab = "profile";
        function tabBtn(id, label) {
          return "<button type=\"button\" class=\"panel-tab\" role=\"tab\" id=\"tab-" + id + "\" data-tab=\"" + id + "\" aria-selected=\"" + (activeTab === id ? "true" : "false") + "\" aria-controls=\"page-" + id + "\">" + label + "</button>";
        }
        var __builtMpHtml =
          (function(){
            var genId = genIdFromYear(mp.birthYear) || "";
            var partyCol = partyColour[mp.party] || "#5c4630";
            var houseLine = mp.servedFrom ? ("House from " + mp.servedFrom) : "House years not listed";
            var rankLine = (mp.rank != null && mp.rank !== "") ? ("#" + mp.rank) : "";
            var seatLine = mp.electorate ? mp.electorate : "List";
            var pmLine = (mp.isPm && (mp.pmFrom || mp.pmTo)) ? ("PM " + (mp.pmFrom || "") + (mp.pmTo ? "–" + mp.pmTo : "–")) : (mp.role || "");
            return "<div class=\"card-holder\"><div class=\"biz-card\" style=\"--card-party:" + partyCol + "\">" +
              "<div class=\"biz-slit biz-slit-tl\"></div><div class=\"biz-slit biz-slit-tr\"></div>" +
              "<div class=\"biz-slit biz-slit-bl\"></div><div class=\"biz-slit biz-slit-br\"></div>" +
              "<p class=\"biz-org\">New Zealand Parliament</p>" +
              "<div class=\"panel-top\">" +
                "<div class=\"panel-sprite-col\">" +
                  spriteMarkup(mp.id || mp.baseId, 56, "panel-sprite sprite") +
                "</div>" +
                "<div class=\"panel-top-text\">" +
                  "<p class=\"biz-name\" id=\"bizCardName\">" + esc(mp.name) + "</p>" +
                  "<p class=\"biz-role\">" + esc(pmLine || mp.role || mp.party || "") + "</p>" +
                  "<p class=\"biz-meta\">" + esc(mp.party || "") + (rankLine ? " " + esc(rankLine) : "") + ". " + esc(seatLine) + "</p>" +
                  "<p class=\"biz-dates\">Born " + esc(mp.birthYear) + " · " + esc(houseLine) + "</p>" +
                  "<div class=\"panel-chip-row\">" +
                    "<button type=\"button\" class=\"party-badge-btn panel-tab-like panel-gen-btn\" id=\"panelGenChip\" data-gen=\"" + esc(genId) + "\">" + esc(genShortLabel(genId)) + "</button>" +
                    "<button type=\"button\" class=\"party-badge-btn panel-tab-like\" id=\"openPartyPanelBtn\" data-party=\"" + esc(mp.party) + "\">" +
                      "<span class=\"swatch\" style=\"background:" + partyCol + "\"></span>" +
                      esc(mp.party) + "</button>" +
                    "<button type=\"button\" class=\"hansard-icon-btn\" id=\"mpHansardBtn\" title=\"Open Hansard\" aria-label=\"Hansard\" onclick=\"event.preventDefault();event.stopPropagation();window.openHansardFor && window.openHansardFor(\"" + String(mp.name).replace(/"/g,"") + "\");\">Hansard</button>" +
                  "</div>" +
                "</div>" +
              "</div>" +
            "</div></div>";
          })() +
          "<div class=\"folder-stack\"><div class=\"folder-body\"><div class=\"folder-sheet\" id=\"folderSheet\">" +
            "<div class=\"detail-section\" id=\"badgesSection\">" + (badgesHtml || "<p class=\"placeholder-note\">No policy badges recorded for this member yet.</p>") + "</div>" +
          "<div class=\"panel-tab-pages\">" +
          "<div class=\"panel-tab-page\" id=\"page-profile\" role=\"tabpanel\">" +
            "<div class=\"detail-section\"><h3>Statistics</h3><ul class=\"stats-list\">" +
            "<li><span>First entered Parliament</span><strong>" + esc(mp.servedFrom || "—") + "</strong></li>" +
            "<li><span>Years since entry (to 2026)</span><strong>" + (mp.servedFrom ? (2026 - mp.servedFrom) : "—") + "</strong></li>" +
            "<li><span>Party</span><strong>" + esc(mp.party || "—") + "</strong></li>" +
            "<li><span>Electorate / list</span><strong>" + esc(mp.electorate || "—") + "</strong></li>" +
            "<li><span>Party rank (list)</span><strong>" + (mp.rank != null ? mp.rank : "—") + "</strong></li>" +
            "<li><span>Role</span><strong>" + esc(mp.role || "—") + "</strong></li>" +
            "<li><span>Status</span><strong>" + (mp.prior ? "Prior member" : "Current / sitting set") + "</strong></li>" +
            (isPm ? "<li><span>Prime Minister</span><strong>Yes</strong></li>" : "") +
          "</ul>" +
          "<p style=\"margin-top:0.45rem\">Formative window (ages ≈15–25): <strong>" + esc(mp.formative || "—") + "</strong></p></div>" +
          "<div class=\"detail-section\"><h3>Notes</h3><p>" + esc(mp.notes || "—") + "</p></div>" +
          "<div class=\"detail-section\"><h3>In the news whilst " + esc((mp.name || "").split(" ")[0] || "they") + " was a young adult</h3>" +
            erasHtml +
            "<p class=\"placeholder-note\">What was on the national bulletin when " + esc((mp.name || "").split(" ")[0] || "they") + " was about 15–25. The decades move with their birth year." +
            (erasForPanel.length > 1 ? " Those years span more than one decade — both are shown." : "") +
          "</p></div>" +
          "</div>" +
          "</div></div></div></div>";
        window.__mpPanelCache = window.__mpPanelCache || {};
        window.__mpPanelCache[mp.id] = __builtMpHtml;
        if (htmlOnly) return;
        panelContent.innerHTML = __builtMpHtml;

        var sheet = panelContent.querySelector("#folderSheet") || panelContent.querySelector(".folder-sheet");
        var hint = panelContent.querySelector(".folder-scroll-hint");
        if (!hint && panelContent.querySelector(".folder-body")) {
          hint = document.createElement("div");
          hint.className = "folder-scroll-hint";
          hint.innerHTML = "<span>More</span><span class=\"chev\">▾</span>";
          panelContent.querySelector(".folder-body").appendChild(hint);
        }
        function updateFolderHint() {
          if (!sheet || !hint) return;
          var extra = sheet.scrollHeight - sheet.clientHeight > 12;
          var atEnd = sheet.scrollTop + sheet.clientHeight >= sheet.scrollHeight - 8;
          hint.classList.toggle("show", extra && !atEnd);
        }
        if (sheet) {
          sheet.addEventListener("scroll", updateFolderHint, { passive: true });
          requestAnimationFrame(updateFolderHint);
          setTimeout(updateFolderHint, 80);
        }
        var tabRoot = panelContent.querySelector(".panel-tabs");
        if (tabRoot) {
          tabRoot.addEventListener("click", function(ev) {
            var btn = ev.target.closest(".panel-tab");
            if (!btn) return;
            var id = btn.getAttribute("data-tab");
            window.__mpPanelTab = id;
            panelContent.querySelectorAll(".panel-tab").forEach(function(b) {
              b.setAttribute("aria-selected", b === btn ? "true" : "false");
            });
            panelContent.querySelectorAll(".panel-tab-page").forEach(function(pg) {
              if (pg.id === "page-" + id) pg.removeAttribute("hidden");
              else pg.setAttribute("hidden", "");
            });
            try {
              var sheetEl = panelContent.querySelector("#folderSheet") || panelContent.querySelector(".folder-sheet");
              if (sheetEl) sheetEl.scrollTop = 0;
              var pages = panelContent.querySelector(".panel-tab-pages");
              if (pages) pages.scrollTop = 0;
              resetPanelScroll();
              if (typeof updateFolderHint === "function") setTimeout(updateFolderHint, 30);
            } catch (e2) {}
          });
        }



        function bindSkillSky() {
          var sky = panelContent.querySelector(".skill-sky");
          var cap = document.getElementById("skillCaption");
          if (!sky || !cap) return;
          var comedy = false;
          sky.addEventListener("click", function(ev) {
            var g = ev.target.closest(".skill-star");
            sky.querySelectorAll(".skill-star.is-picked").forEach(function(n){ n.classList.remove("is-picked"); });
            sky.querySelectorAll(".skill-line.is-hot").forEach(function(n){ n.classList.remove("is-hot"); });
            if (!g) { cap.hidden = true; cap.innerHTML = ""; return; }
            g.classList.add("is-picked");
            var id = g.getAttribute("data-skill");
            var node = SKILL_CONSTELLATION.filter(function(n){ return n.id === id; })[0];
            if (!node) return;
            var lit = g.getAttribute("data-on") === "1";
            var title = comedy ? (SKILL_FUN[id] || node.n) : node.n;
            var blurb = comedy ? (SKILL_FUN_D[id] || node.d) : node.d;
            cap.hidden = false;
            cap.innerHTML = "<strong>" + title + (lit ? " — unlocked" : " — still locked") + "</strong>" + blurb;
            SKILL_EDGES.forEach(function(pair) {
              if (pair[0] === id || pair[1] === id) {
                var line = sky.querySelector('[data-edge="' + pair[0] + '|' + pair[1] + '"]');
                if (line) line.classList.add("is-hot");
              }
            });
          });
        }
        bindSkillSky();
        panelContent.querySelectorAll("[data-skill-mode]").forEach(function(btn) {
          btn.addEventListener("click", function(ev) {
            ev.preventDefault();
            window.__skillMode = btn.getAttribute("data-skill-mode") || "comedy";
            window.__mpPanelTab = "skill";
            openPanel(mp);
          });
        });

        var skillBtn = document.getElementById("openSkillTreeBtn");
        if (skillBtn) {
          skillBtn.addEventListener("click", function(ev) {
            ev.preventDefault();
            ev.stopPropagation();
            window.__mpPanelTab = "skill";
            panelContent.querySelectorAll(".panel-tab").forEach(function(b) {
              b.setAttribute("aria-selected", b.getAttribute("data-tab") === "skill" ? "true" : "false");
            });
            panelContent.querySelectorAll(".panel-tab-page").forEach(function(pg) {
              if (pg.id === "page-skill") pg.removeAttribute("hidden");
              else pg.setAttribute("hidden", "");
            });
            try {
              var pages = panelContent.querySelector(".panel-tab-pages");
              if (pages) pages.scrollTop = 0;
            } catch (eS) {}
          });
        }

        var partyBtn = document.getElementById("openPartyPanelBtn");
        if (partyBtn) {
          partyBtn.addEventListener("click", function(ev) {
            ev.preventDefault();
            ev.stopPropagation();
            openPartyPanel(mp.party, mp);
          });
        }

        var prevBtn = document.getElementById("panelPrev");
        var nextBtn = document.getElementById("panelNext");
        if (prevBtn) {
          var prevMp = neighbourMp(mp, -1);
          prevBtn.disabled = !prevMp;
          prevBtn.addEventListener("click", function(ev) {
            ev.preventDefault();
            ev.stopPropagation();
            var nmp = neighbourMp(mp, -1);
            if (nmp) openPanel(nmp);
          });
        }
        if (nextBtn) {
          var nextMp = neighbourMp(mp, 1);
          nextBtn.disabled = !nextMp;
          nextBtn.addEventListener("click", function(ev) {
            ev.preventDefault();
            ev.stopPropagation();
            var nmp = neighbourMp(mp, 1);
            if (nmp) openPanel(nmp);
          });
        }
        (function bindPanelSwipe(cur) {
          var host = document.getElementById("panel");
          var root = panelContent;
          if (!host || !root) return;
          if (host._swipeKill) host._swipeKill();
          function isPhoneUi() {
            try {
              if (window.matchMedia("(max-width: 720px)").matches) return true;
              if (window.matchMedia("(pointer: coarse)").matches && window.innerWidth < 1024) return true;
            } catch (e) {}
            return window.innerWidth <= 720;
          }
          if (!isPhoneUi()) {
            root.classList.remove("swipe-root", "is-dragging");
            root.style.transform = "";
            root.style.opacity = "";
            return;
          }
          root.classList.add("swipe-root");
          root.style.transform = "";
          root.style.opacity = "";
          function cachedPanel(m) {
            if (!m || !m.id) return "";
            window.__mpPanelCache = window.__mpPanelCache || {};
            return window.__mpPanelCache[m.id] || "";
          }
          function preloadPanel(m) {
            if (!m || !m.id) return;
            if (cachedPanel(m)) return;
            window.__mpHtmlOnly = true;
            try { openPanel(m); } catch (ePre) { window.__mpHtmlOnly = false; }
            window.__mpHtmlOnly = false;
          }
          function peekCard(m) {
            if (!m) return "<div class=\"swipe-end\">End of list</div>";
            var hit = cachedPanel(m);
            if (hit) return hit;

            if (!m) return "<div class=\"swipe-end\">End of list</div>";
            var col = (typeof partyColour !== "undefined" && partyColour[m.party]) ? partyColour[m.party] : "#5c4630";
            var genId = (typeof getGeneration === "function") ? getGeneration(m.birthYear) : "";
            var genTxt = (typeof genShortLabel === "function") ? genShortLabel(genId) : (genId || "");
            var seat = m.electorate || m.list || "List";
            var rank = m.rank != null ? "#" + m.rank : "";
            var house = m.servedFrom ? ("In House " + Math.floor(m.servedFrom)) : "";
            return "<div class=\"swipe-preview\">" +
              "<div class=\"card-holder\"><div class=\"biz-card\" style=\"--card-party:" + col + "\">" +
              "<div class=\"biz-slit biz-slit-tl\"></div><div class=\"biz-slit biz-slit-tr\"></div>" +
              "<div class=\"biz-slit biz-slit-bl\"></div><div class=\"biz-slit biz-slit-br\"></div>" +
              "<p class=\"biz-org\">New Zealand Parliament</p>" +
              "<div class=\"panel-top\">" +
                "<div class=\"panel-sprite-col\">" + spriteMarkup(m.id || m.baseId, 56, "panel-sprite sprite") + "</div>" +
                "<div class=\"panel-top-text\">" +
                  "<p class=\"biz-name\">" + esc(m.name) + "</p>" +
                  "<p class=\"biz-role\">" + esc(m.role || m.party || "") + "</p>" +
                  "<p class=\"biz-meta\">" + esc(m.party || "") + (rank ? " " + esc(rank) : "") + ". " + esc(seat) + "</p>" +
                  "<p class=\"biz-dates\">Born " + esc(m.birthYear) + (house ? " · " + esc(house) : "") + "</p>" +
                  "<div class=\"panel-chip-row\">" +
                    "<span class=\"party-badge-btn panel-tab-like panel-gen-btn\">" + esc(genTxt) + "</span>" +
                    "<span class=\"party-badge-btn panel-tab-like\"><span class=\"swatch\" style=\"background:" + col + "\"></span>" + esc(m.party || "") + "</span>" +
                    "<span class=\"hansard-icon-btn\">Hansard</span>" +
                  "</div>" +
                "</div></div></div></div>" +
              "<div class=\"folder-stack swipe-folder-preview\">" +
              "<div class=\"folder-body\"><div class=\"folder-sheet\">" + peekBadgeSkeleton(m) + "</div></div></div></div>";
          }
          function peekBadgeSkeleton(m) {
            var ups = 0, downs = 0;
            var map = (m && m.badges) ? m.badges : null;
            if (map) {
              Object.keys(map).forEach(function(k) {
                var b = map[k];
                if (!b) return;
                if (b.up || b === "up" || b === true) ups++;
                if (b.down || b === "down") downs++;
              });
            }
            if (ups < 4) ups = 4;
            if (downs < 4) downs = 4;
            function slots(n) {
              var html = "";
              for (var i = 0; i < n; i++) {
                html += "<div class=\"badge-slot badge-loading\" aria-hidden=\"true\"><span class=\"badge-spinner\"></span></div>";
              }
              return html;
            }
            var n = Math.max(8, ups + downs);
            return "<div class=\"detail-badges badge-combined peek-badges\">" + slots(n) + "</div>";
          }
          var prev = neighbourMp(cur, -1);
          var next = neighbourMp(cur, 1);
          preloadPanel(prev);
          preloadPanel(next);
          var track = document.createElement("div");
          track.className = "swipe-track";
          var sPrev = document.createElement("div");
          sPrev.className = "swipe-slide";
          sPrev.innerHTML = peekCard(prev);
          var sCur = document.createElement("div");
          sCur.className = "swipe-slide is-current";
          while (root.firstChild) sCur.appendChild(root.firstChild);
          var sNext = document.createElement("div");
          sNext.className = "swipe-slide";
          sNext.innerHTML = peekCard(next);
          track.appendChild(sPrev);
          track.appendChild(sCur);
          track.appendChild(sNext);
          root.appendChild(track);
          var GAP = 0;
          var PEEK = 0;
          function viewW() {
            var box = root.getBoundingClientRect();
            var w = box.width || root.clientWidth || host.clientWidth;
            if (!(w > 0)) w = window.innerWidth || 320;
            return Math.max(1, Math.floor(w));
          }
          function slideW() {
            return Math.max(1, viewW() - (PEEK * 2));
          }
          function sizeSlides() {
            var w = slideW();
            [sPrev, sCur, sNext].forEach(function(s) {
              s.style.flex = "0 0 " + w + "px";
              s.style.width = w + "px";
              s.style.minWidth = w + "px";
              s.style.maxWidth = w + "px";
            });
          }
          function baseX() { return -slideW(); }
          function applyX(x, anim) {
            track.style.transition = anim ? "transform 0.28s cubic-bezier(0.22, 0.8, 0.24, 1)" : "none";
            track.style.transform = "translate3d(" + x + "px,0,0)";
          }
          function lockPlaceholderSize() {
            var card = sCur.querySelector(".card-holder");
            var folders = sCur.querySelector(".folder-stack");
            var sprite = sCur.querySelector(".panel-sprite");
            var h = sCur.offsetHeight || root.clientHeight || 0;
            [sPrev, sNext].forEach(function(slide) {
              if (!slide) return;
              if (h) {
                slide.style.height = h + "px";
                slide.style.minHeight = h + "px";
              }
              var c = slide.querySelector(".card-holder");
              var f = slide.querySelector(".folder-stack");
              var img = slide.querySelector(".panel-sprite");
              var body = slide.querySelector(".folder-body");
              var sheet = slide.querySelector(".folder-sheet");
              if (c && card) {
                var bc = c.querySelector(".biz-card");
                var srcBc = card.querySelector(".biz-card");
                var ch = 178;
                if (srcBc) ch = Math.round(srcBc.getBoundingClientRect().height || srcBc.offsetHeight || 178);
                if (bc) {
                  bc.style.height = ch + "px";
                  bc.style.minHeight = ch + "px";
                  bc.style.maxHeight = ch + "px";
                  bc.style.boxSizing = "border-box";
                }
              }
              if (f && folders) {
                f.style.height = folders.offsetHeight + "px";
                f.style.minHeight = folders.offsetHeight + "px";
              }
              if (body && folders) {
                var fh = folders.querySelector(".folder-body");
                if (fh) {
                  body.style.height = fh.offsetHeight + "px";
                  body.style.minHeight = fh.offsetHeight + "px";
                }
              }
              if (sheet && folders) {
                var sh = folders.querySelector(".folder-sheet");
                if (sh) {
                  sheet.style.minHeight = sh.offsetHeight + "px";
                  sheet.style.height = sh.offsetHeight + "px";
                }
              }
              if (img && sprite) {
                var sw = sprite.offsetWidth || 84;
                var sh2 = sprite.offsetHeight || 84;
                img.style.width = sw + "px";
                img.style.height = sh2 + "px";
                img.style.minWidth = sw + "px";
                img.style.minHeight = sh2 + "px";
              }
            });
          }
          sizeSlides();
          applyX(baseX(), false);
          lockPlaceholderSize();
          requestAnimationFrame(function() {
            sizeSlides();
            applyX(baseX(), false);
            lockPlaceholderSize();
          });
          setTimeout(lockPlaceholderSize, 60);
          var x0 = null, y0 = null, dx = 0, axis = null, live = false;
          function start(ev) {
            if (window.__panelNavLock) return;
            if (ev.target && ev.target.closest && ev.target.closest("button, a, input, textarea, select, .panel-tab")) return;
            var pt = ev.touches ? ev.touches[0] : ev;
            if (!pt) return;
            x0 = pt.clientX; y0 = pt.clientY; dx = 0; axis = null; live = true;
            sizeSlides();
            applyX(baseX(), false);
            lockPlaceholderSize();
          }
          function move(ev) {
            if (!live || x0 == null) return;
            var pt = ev.touches ? ev.touches[0] : ev;
            if (!pt) return;
            var adx = pt.clientX - x0, ady = pt.clientY - y0;
            if (axis == null && (Math.abs(adx) > 6 || Math.abs(ady) > 6)) {
              axis = Math.abs(adx) > Math.abs(ady) * 1.1 ? "x" : "y";
            }
            if (axis !== "x") return;
            if (ev.cancelable) ev.preventDefault();
            root.classList.add("is-dragging");
            var ahead = neighbourMp(cur, adx < 0 ? 1 : -1);
            if (!ahead) adx *= 0.16;
            dx = adx;
            applyX(baseX() + dx, false);
          }
          function end() {
            if (!live) return;
            live = false;
            if (axis !== "x" || x0 == null) {
              root.classList.remove("is-dragging");
              applyX(baseX(), true);
              x0 = null; axis = null;
              return;
            }
            var w = slideW();
            var dir = dx < 0 ? 1 : -1;
            var nmp = neighbourMp(cur, dir);
            if (nmp && Math.abs(dx) > Math.min(40, w * 0.1)) {
              window.__panelNavLock = true;
              applyX(dir > 0 ? baseX() - w : PEEK, true);
              var settled = false;
              function finish() {
                if (settled) return;
                settled = true;
                track.removeEventListener("transitionend", finish);
                openPanel(nmp);
                window.__panelNavLock = false;
              }
              track.addEventListener("transitionend", finish);
              setTimeout(finish, 320);
            } else {
              applyX(baseX(), true);
              setTimeout(function() { root.classList.remove("is-dragging"); }, 280);
            }
            x0 = null; axis = null;
          }
          host.addEventListener("touchstart", start, { passive: true });
          host.addEventListener("touchmove", move, { passive: false });
          host.addEventListener("touchend", end);
          host.addEventListener("touchcancel", end);
          host.addEventListener("pointerdown", start);
          host.addEventListener("pointermove", move);
          host.addEventListener("pointerup", end);
          host.addEventListener("pointercancel", end);
          host._swipeKill = function() {
            host.removeEventListener("touchstart", start);
            host.removeEventListener("touchmove", move);
            host.removeEventListener("touchend", end);
            host.removeEventListener("touchcancel", end);
            host.removeEventListener("pointerdown", start);
            host.removeEventListener("pointermove", move);
            host.removeEventListener("pointerup", end);
            host.removeEventListener("pointercancel", end);
          };
        })(mp)

        resetPanelScroll();

      } catch (err) {
        console.error("openPanel content failed", err, mp && mp.id);
        panelContent.innerHTML =
          "<div class=\"panel-top\"><div class=\"panel-top-text\"><h2>" + (mp.name || "Member") + "</h2>" +
          "<div class=\"panel-sub\">" + (mp.party || "") + " · " + (mp.role || "") + "</div></div></div>" +
          "<div class=\"detail-section\" id=\"badgesSection\"><h3>Policy badges</h3>" +
          "<p class=\"placeholder-note\">Could not render full details. See notes.</p></div>" +
          "<div class=\"detail-section\"><h3>Notes</h3><p>" + (mp.notes || "—") + "</p></div>";
      }

      setTimeout(function() {
        try { applyFilters(true); } catch (err2) { console.error("openPanel re-render", err2); }
      }, 50);
    }

        if (!window.__panelWheelBound) {
      window.__panelWheelBound = true;
      document.addEventListener("wheel", function(e) {
        var panel = document.getElementById("panel");
        if (!panel || !panel.classList.contains("open")) return;
        var box = document.getElementById("panelContent") || panel;
        if (!box.contains(e.target) && e.target !== panel && !panel.contains(e.target)) return;
        e.stopPropagation();
        var next = box.scrollTop + e.deltaY;
        var max = Math.max(0, box.scrollHeight - box.clientHeight);
        if (max > 2) {
          box.scrollTop = Math.max(0, Math.min(max, next));
          e.preventDefault();
        }
      }, { passive: false, capture: true });
    }

    function closePanel() {
      window.__mapScrollEnabled = true;
      try {
        var blurb = document.getElementById("badgeExplain");
        if (blurb) {
          blurb.classList.remove("open");
          blurb.style.display = "none";
          blurb.innerHTML = "";
        }
        if (window.__badgeBlurbOff) {
          document.removeEventListener("pointerdown", window.__badgeBlurbOff, true);
          window.__badgeBlurbOff = null;
        }
      } catch (e) {}
      selectedId = null;
      document.documentElement.classList.remove("overlay-open");
      panel.classList.remove("open");
      panel.classList.remove("party-mode");
      backdrop.classList.remove("open");
      panel.style.transform = "";
      panel.style.visibility = "";
      backdrop.style.opacity = "";
      backdrop.style.pointerEvents = "";
      applyFilters(true);
      if (window.atlasBack) window.atlasBack();
    }
    window.__atlasPopping = false;
    window.atlasPush = function(kind, extra) {
      if (window.__atlasPopping) return;
      try {
        var st = { atlas: true, kind: kind };
        if (extra) Object.keys(extra).forEach(function(k){ st[k] = extra[k]; });
        history.pushState(st, "", location.pathname + location.search);
      } catch (e) {}
    };
    window.atlasBack = function() {
      if (window.__atlasPopping) return;
      try {
        if (history.state && history.state.atlas) {
          window.__atlasPopping = true;
          history.back();
          setTimeout(function(){ window.__atlasPopping = false; }, 50);
        }
      } catch (e) { window.__atlasPopping = false; }
    };
    window.atlasHideTop = function() {
      var hansard = document.getElementById("hansardPage");
      if (hansard && hansard.classList.contains("open")) {
        hansard.classList.remove("open"); hansard.style.display = "";
        return "hansard";
      }
      var donate = document.getElementById("donatePage");
      if (donate && donate.classList.contains("open")) {
        donate.classList.remove("open");
        return "donate";
      }
      var feat = document.getElementById("featurePage");
      if (feat && feat.classList.contains("open")) {
        feat.classList.remove("open");
        return "feature";
      }
      var rel = document.getElementById("releaseLog");
      if (rel && rel.classList.contains("open")) {
        rel.classList.remove("open");
        return "release";
      }
      var era = document.getElementById("eraDetail");
      if (era && era.classList.contains("open")) {
        era.classList.remove("open");
        return "era";
      }
      var menu = document.getElementById("mobileMenu");
      if (menu && menu.classList.contains("open")) {
        menu.classList.remove("open");
        return "menu";
      }
      var pan = document.getElementById("panel");
      if (pan && pan.classList.contains("open")) {
        window.__mapScrollEnabled = true;
        selectedId = null;
        document.documentElement.classList.remove("overlay-open");
        pan.classList.remove("open");
        var bd = document.getElementById("backdrop");
        if (bd) {
          bd.classList.remove("open");
          bd.style.opacity = "";
          bd.style.pointerEvents = "";
        }
        pan.style.transform = "";
        pan.style.visibility = "";
        try { applyFilters(true); } catch (e) {}
        return "panel";
      }
      return null;
    };
    window.addEventListener("popstate", function() {
      window.__atlasPopping = true;
      window.atlasHideTop();
      window.__atlasPopping = false;
    });
    document.getElementById("closePanel").addEventListener("click", closePanel);
    var ignoreBackdropUntil = 0;
    backdrop.addEventListener("click", function(e) {
      if (Date.now() < ignoreBackdropUntil) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      closePanel();
    });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closePanel(); });


    function fillChamberCast() {}
    function applyFilters(keepSelection) {
      try {
      const party = document.getElementById("partyFilter").value;
      const gen = document.getElementById("genFilter").value;
      const showPrior = document.getElementById("priorToggle").checked;
      let filtered = mps.slice();
      if (!showPrior) filtered = filtered.filter(m => !m.prior);
      if (party !== "all") filtered = filtered.filter(m => m.party === party);
      if (gen !== "all") filtered = filtered.filter(m => getGeneration(m.birthYear) === gen);
      if (!keepSelection) selectedId = null;
      var wrapKeep = document.querySelector(".timeline-wrap");
      var slKeep = wrapKeep ? wrapKeep.scrollLeft : 0;
      var stKeep = wrapKeep ? wrapKeep.scrollTop : 0;
      renderTimeline(filtered);
      if (wrapKeep && window.__didCenterForty) {
        wrapKeep.scrollLeft = slKeep;
        wrapKeep.scrollTop = stKeep;
      }
      if (!window.__didCenterForty) {
        window.__didCenterForty = true;
        requestAnimationFrame(function() {
          pinHeaderSpace();
          scrollToBirthYear(new Date().getFullYear() - 40);
        });
      }
        if (window.syncFilterBadge) window.syncFilterBadge();
      } catch (err) {
        console.error("applyFilters", err);
      }
    }

    document.getElementById("partyFilter").addEventListener("change", () => applyFilters(false));
    document.getElementById("genFilter").addEventListener("change", () => applyFilters(false));
    
    const modeToggle = document.getElementById("modeToggle");
    if (modeToggle) {
      modeToggle.addEventListener("click", () => {
        const viewSnap = window.__timelineView ? window.__timelineView.getSnapshot() : null;
        const goingToBorn = positionMode === "served";
        positionMode = goingToBorn ? "born" : "served";
        document.body.classList.toggle("view-served", positionMode === "served");
        document.body.classList.toggle("view-born", positionMode === "born");
        modeToggle.classList.toggle("served", positionMode === "served");
        if (window.syncFilterBadge) window.syncFilterBadge();
        modeToggle.setAttribute("aria-pressed", positionMode === "served" ? "true" : "false");
        const bornLbl = document.getElementById("modeLabelBorn");
        const servedLbl = document.getElementById("modeLabelServed");
        if (bornLbl) bornLbl.classList.toggle("on", positionMode === "born");
        if (servedLbl) servedLbl.classList.toggle("on", positionMode === "served");
        const restore = () => {
          if (viewSnap && window.__timelineView) {
            requestAnimationFrame(() => window.__timelineView.restore(viewSnap));
          }
        };
        try {
          if (goingToBorn) {
            animateServedToBorn();
            setTimeout(restore, 1400);
          } else {
            animatePositionMode();
            setTimeout(restore, 1400);
          }
        } catch (err) {
          console.error(err);
          applyFilters(true);
          restore();
        }
      });
    }

    document.getElementById("priorToggle").addEventListener("change", () => applyFilters(true));
    

    const RELEASE_DATE = "22 Aug 2026";
    const RELEASE_LOG = [
      {
        version: "v3.12",
        date: "8 Sep 2026",
        items: [
          { type: "upgraded", text: "Party panel: no duplicate title, no Hansard button, title bar reads Party name + Party" },
          { type: "upgraded", text: "CSS and JS split out so GitHub can take the files through the connector" }
        ]
      },
      {
        version: "v3.11",
        date: "8 Sep 2026",
        items: [
          { type: "fixed", text: "MP cards read busts-atlas.png using short-id aliases (luxon → christopher-luxon)" },
          { type: "upgraded", text: "News reel default 30 px/s; hold to pause; menu On/Off toggle" },
          { type: "fixed", text: "Poll month labels and legend sit under the graph, not over it" }
        ]
      },
      {
        version: "v3.10",
        date: "8 Sep 2026",
        items: [
          { type: "upgraded", text: "News reel speed slider in the menu, default 50 px/s (50–100)" },
          { type: "fixed", text: "Hansard calendar centred in its window" },
          { type: "fixed", text: "MP badges forced to four columns" },
          { type: "fixed", text: "Removed the blue block behind In the news whilst … was a young adult" },
          { type: "fixed", text: "Party poll graph always mounts and refreshes from the latest Curia (1–3 Sep 2026)" }
        ]
      },
      {
        version: "v3.09",
        date: "8 Sep 2026",
        items: [
          { type: "fixed", text: "Bust atlas, badge atlas, and header image are files — no longer base64 in index.html" }
        ]
      },
      {
        version: "v3.08",
        date: "8 Sep 2026",
        items: [
          { type: "fixed", text: "Promise reel fills and scrolls again" },
          { type: "upgraded", text: "Hansard calendar is centred in its window" },
          { type: "upgraded", text: "MP tabs removed; badges are 4 columns with statistics directly underneath" }
        ]
      },
      {
        version: "v3.07",
        date: "8 Sep 2026",
        items: [
          { type: "fixed", text: "Hansard calendar is always a 6-week grid so the picker does not change height" },
          { type: "upgraded", text: "Promise reel sits on the bottom edge of the header, just above the date bar" }
        ]
      },
      {
        version: "v3.06",
        date: "8 Sep 2026",
        items: [
          { type: "upgraded", text: "Hansard votes use plain titles (bill + reading). Click for a short note, then jump to that section." },
          { type: "feature", text: "GitHub connected as FlavourThink; site files aimed at FlavourThink/nz-politics" }
        ]
      },
      {
        version: "v3.05",
        date: "8 Sep 2026",
        items: [
          { type: "upgraded", text: "Hansard calendar drops the sitting-status paragraph; Saturday and Sunday are hatched red" },
          { type: "feature", text: "Scrolling promise reel under the header: one policy each from Labour, Greens, National and so on, with occasional polling figures" }
        ]
      },
      {
        version: "v3.04",
        date: "8 Sep 2026",
        items: [
          { type: "feature", text: "All MP busts sit on one sprite sheet; each MP stores x/y cell coordinates" },
          { type: "feature", text: "Hansard day view lists bill votes and readings parsed from the sitting text" },
          { type: "upgraded", text: "Timeline cards use the business-card corner style; generation colours stay" }
        ]
      },
      {
        version: "v3.03",
        date: "8 Sep 2026",
        items: [
          { type: "upgraded", text: "Skills tab removed from MP panels" },
          { type: "upgraded", text: "Previous / next MP buttons removed on phone and desktop" },
          { type: "upgraded", text: "For and Against headings removed; badges sit in one A-Z list" }
        ]
      },
      {
        version: "v3.02",
        date: "7 Sep 2026",
        items: [
          { type: "upgraded", text: "Pinch zoom-out caps at 150% of the original frame" }
        ]
      },
      {
        version: "v3.01",
        date: "7 Sep 2026",
        items: [
          { type: "fixed", text: "Zoom scales the view only; year positions stay locked so MPs stay on their years" }
        ]
      },
      {
        version: "v3.00",
        date: "7 Sep 2026",
        items: [
          { type: "fixed", text: "Pinch zoom-out no longer loses the cards; zoom-in returns to the original frame" }
        ]
      },
      {
        version: "v2.99",
        date: "7 Sep 2026",
        items: [
          { type: "upgraded", text: "Phone filters sit in the floor band above the date bar, not over the Speaker" }
        ]
      },
      {
        version: "v2.98",
        date: "7 Sep 2026",
        items: [
          { type: "upgraded", text: "No neighbour sliver at rest; the open MP panel fills the width" }
        ]
      },
      {
        version: "v2.97",
        date: "7 Sep 2026",
        items: [
          { type: "fixed", text: "Closed MP panel no longer covers the timeline on phones" }
        ]
      },
      {
        version: "v2.96",
        date: "7 Sep 2026",
        items: [
          { type: "fixed", text: "Phone MP panel is full-width and no longer shifted off the left of the screen" },
          { type: "fixed", text: "Removed the More chip that sat on top of badges and the skill tree" },
          { type: "fixed", text: "Skill tree labels are no longer stretched or clipped" }
        ]
      },
      {
        version: "v2.95",
        date: "7 Sep 2026",
        items: [
          { type: "upgraded", text: "Phone MP panel is centred on screen" },
          { type: "upgraded", text: "Badges tab is now Achievements; Years is inside Profile; Record tab removed" },
          { type: "upgraded", text: "Skill tree labels use more horizontal space" }
        ]
      },
      {
        version: "v2.94",
        date: "6 Sep 2026",
        items: [
          { type: "fixed", text: "Right-hand 5px sliver of the next MP panel is visible, matching the left" }
        ]
      },
      {
        version: "v2.93",
        date: "6 Sep 2026",
        items: [
          { type: "upgraded", text: "Business card list line is now Party #rank. Region" }
        ]
      },
      {
        version: "v2.92",
        date: "6 Sep 2026",
        items: [
          { type: "upgraded", text: "Left and right MP panels are preloaded into memory before swipe" },
          { type: "upgraded", text: "New Zealand Parliament is centred on the business card" }
        ]
      },
      {
        version: "v2.91",
        date: "6 Sep 2026",
        items: [
          { type: "upgraded", text: "New Zealand Parliament is justified across the business card" },
          { type: "upgraded", text: "Swipe placeholders preload For / Against with a loading spinner on each badge" }
        ]
      },
      {
        version: "v2.90",
        date: "6 Sep 2026",
        items: [
          { type: "upgraded", text: "Bust has 5px padding left and right; card buttons stay on the bottom text row" }
        ]
      },
      {
        version: "v2.89",
        date: "6 Sep 2026",
        items: [
          { type: "upgraded", text: "Card buttons line up with the text column; the bust lines up with the top of the name" }
        ]
      },
      {
        version: "v2.88",
        date: "6 Sep 2026",
        items: [
          { type: "upgraded", text: "Business cards are 178px; generation, party and Hansard stay on one bottom row" }
        ]
      },
      {
        version: "v2.87",
        date: "6 Sep 2026",
        items: [
          { type: "upgraded", text: "MP business cards and swipe placeholders are 178px tall" }
        ]
      },
      {
        version: "v2.86",
        date: "6 Sep 2026",
        items: [
          { type: "upgraded", text: "Every MP business card, including swipe placeholders, is 178px — Gerry Brownlee’s loaded card height" }
        ]
      },
      {
        version: "v2.85",
        date: "6 Sep 2026",
        items: [
          { type: "upgraded", text: "Swipe is mobile only; prev/next buttons are desktop only" },
          { type: "fixed", text: "Placeholder business card is locked to the loaded card height" }
        ]
      },
      {
        version: "v2.84",
        date: "6 Sep 2026",
        items: [
          { type: "fixed", text: "Swipe placeholders use the same card and folder layout and sizes as the loaded MP" }
        ]
      },
      {
        version: "v2.83",
        date: "5 Sep 2026",
        items: [
          { type: "fixed", text: "MP Details is centred between the prev and next buttons" },
          { type: "fixed", text: "5px of the neighbouring card and manila folder now shows on both sides" }
        ]
      },
      {
        version: "v2.82",
        date: "5 Sep 2026",
        items: [
          { type: "upgraded", text: "5px of the neighbouring MP card and folders shows on each side" },
          { type: "upgraded", text: "Title bar reads MP Details, centred between the prev and next buttons" },
          { type: "upgraded", text: "New Zealand Parliament line is 3pt smaller" }
        ]
      },
      {
        version: "v2.81",
        date: "5 Sep 2026",
        items: [
          { type: "upgraded", text: "MP panel fills the phone; neighbouring members stay hidden until you swipe" }
        ]
      },
      {
        version: "v2.80",
        date: "5 Sep 2026",
        items: [
          { type: "fixed", text: "MP panel fits the phone width; inner cards and folders no longer overflow sideways" }
        ]
      },
      {
        version: "v2.79",
        date: "5 Sep 2026",
        items: [
          { type: "upgraded", text: "Swipe gap is 0px; the panel eases into its rest place before the next member loads" }
        ]
      },
      {
        version: "v2.78",
        date: "5 Sep 2026",
        items: [
          { type: "upgraded", text: "Swipe drags the current panel and the next one together, 20px apart" },
          { type: "fixed", text: "Hansard calendar states the last sitting on file; 4–5 Sep 2026 were not House sitting days" }
        ]
      },
      {
        version: "v2.77",
        date: "5 Sep 2026",
        items: [
          { type: "upgraded", text: "Business card line “New Zealand Parliament” is smaller, one line, faded" },
          { type: "upgraded", text: "Swipe paints the next member immediately instead of waiting on a slide" }
        ]
      },
      {
        version: "v2.76",
        date: "5 Sep 2026",
        items: [
          { type: "fixed", text: "Opening an MP panel shows only that member — the peek carousel no longer flashes neighbours" },
          { type: "fixed", text: "Swipe drags the open panel with the finger; arrows open the neighbour directly" }
        ]
      },
      {
        version: "v2.75",
        date: "5 Sep 2026",
        items: [
          { type: "fixed", text: "Timeline failed to load: a quote error in the carousel peek card stopped the whole script" }
        ]
      },
      {
        version: "v2.74",
        date: "5 Sep 2026",
        items: [
          { type: "upgraded", text: "MP panel swipe uses a CSS scroll-snap carousel (CSS-Tricks pattern)" },
          { type: "upgraded", text: "Arrows smooth-scroll to the neighbouring slide, then load that member" }
        ]
      },
      {
        version: "v2.73",
        date: "5 Sep 2026",
        items: [
          { type: "fixed", text: "MP name on the business card was hidden by an old h2 rule; it is visible now" },
          { type: "upgraded", text: "Swipe follows the finger, then eases the rest of the way" }
        ]
      },
      {
        version: "v2.72",
        date: "5 Sep 2026",
        items: [
          { type: "fixed", text: "Name is only on the panel business card; title bar is arrows and close" },
          { type: "upgraded", text: "Next/previous MP slides like a carousel" }
        ]
      },
      {
        version: "v2.71",
        date: "5 Sep 2026",
        items: [
          { type: "fixed", text: "MP name is on the panel business card again" },
          { type: "upgraded", text: "Timeline cards: photo left, name / year / party+rank stacked" },
          { type: "upgraded", text: "Swipe left or right on an MP panel to move through the list; arrows still work" }
        ]
      },
      {
        version: "v2.70",
        date: "5 Sep 2026",
        items: [
          { type: "fixed", text: "Business card no longer prints the MP name; name stays in the title bar" },
          { type: "upgraded", text: "Timeline MP cards use the same slit-and-stripe card language, generation colour kept" }
        ]
      },
      {
        version: "v2.69",
        date: "5 Sep 2026",
        items: [
          { type: "fixed", text: "MP name lives on the business card only; title bar keeps prev / next / close" },
          { type: "fixed", text: "Card chips share one height and shrink to their label" },
          { type: "upgraded", text: "Folder shows a More hint while there is content below the fold" }
        ]
      },
      {
        version: "v2.68",
        date: "5 Sep 2026",
        items: [
          { type: "upgraded", text: "MP business card redesigned: Parliament line, role, seat, born/House dates, list number" },
          { type: "fixed", text: "Folder document sheet scrolls; header card and tabs stay put" }
        ]
      },
      {
        version: "v2.67",
        date: "5 Sep 2026",
        items: [
          { type: "upgraded", text: "MP panel header sits in a business-card holder with corner slits" },
          { type: "upgraded", text: "Panel tabs read as manila folders with a document sheet inside" }
        ]
      },
      {
        version: "v2.66",
        date: "4 Sep 2026",
        items: [
          { type: "fixed", text: "Matt Doocey bust redrawn from 2023 official likeness: bald, speaker-frame proportions" }
        ]
      },
      {
        version: "v2.65",
        date: "4 Sep 2026",
        items: [
          { type: "fixed", text: "Donate can be opened more than once" },
          { type: "upgraded", text: "Shared title bar on donate (title + close)" },
          { type: "fixed", text: "Donate sits in the centre of the screen at the top z-index" }
        ]
      },
      {
        version: "v2.64",
        date: "4 Sep 2026",
        items: [
          { type: "fixed", text: "Donate card opens above the header and date bar" },
          { type: "fixed", text: "Paul Goldsmith bust scaled to the speaker frame" },
          { type: "fixed", text: "Louise Upston and Catherine Wedd now have different busts" }
        ]
      },
      {
        version: "v2.63",
        date: "4 Sep 2026",
        items: [
          { type: "upgraded", text: "Policy badges sit as For (2 columns) and Against (2 columns) with no Policy badges heading" },
          { type: "fixed", text: "MP panel accepts mouse and trackpad scroll" },
          { type: "upgraded", text: "Timeline decades now include Vietnam protests, decimal currency, Commonwealth Games, Dawn Raids, Springbok Tour, Rainbow Warrior, 1987 crash, Cave Creek and Kyoto-era climate talks" }
        ]
      },
      {
        version: "v2.62",
        date: "4 Sep 2026",
        items: [
          { type: "fixed", text: "Donate pop-up sits above the header image" },
          { type: "upgraded", text: "Header chamber image zooms out 20% and still fills left to right on large screens" },
          { type: "fixed", text: "Speaker-framed busts redrawn for Verrall, Grigg, Doocey, Andersen, O’Connor and Edmonds" }
        ]
      },
      {
        version: "v2.61",
        date: "4 Sep 2026",
        items: [
          { type: "upgraded", text: "MP panel badges back to four columns" },
          { type: "fixed", text: "MP panel body scrolls under a title bar that holds previous / next" }
        ]
      },
      {
        version: "v2.60",
        date: "4 Sep 2026",
        items: [
          { type: "fixed", text: "Paul Goldsmith bust redrawn so the full chest-up portrait shows" },
          { type: "upgraded", text: "Suze Redmayne and Dr Tracey McLellan Hansard busts added" }
        ]
      },
      {
        version: "v2.59",
        date: "4 Sep 2026",
        items: [
          { type: "fixed", text: "ALL CAPS names such as RICARDO MENÉNDEZ MARCH are treated as the speaker" }
        ]
      },
      {
        version: "v2.58",
        date: "4 Sep 2026",
        items: [
          { type: "fixed", text: "Hansard sections keep speech follow-on lines so a sitting no longer looks half-cut" }
        ]
      },
      {
        version: "v2.57",
        date: "4 Sep 2026",
        items: [
          { type: "fixed", text: "A chosen Hansard section now draws its full speeches, not a short excerpt" }
        ]
      },
      {
        version: "v2.56",
        date: "4 Sep 2026",
        items: [
          { type: "upgraded", text: "MP policy badges sit in two vertical stacks: voted for and voted against" },
          { type: "fixed", text: "Hansard calendar title uses the same dialog heading as the other pop-ups" }
        ]
      },
      {
        version: "v2.55",
        date: "4 Sep 2026",
        items: [
          { type: "upgraded", text: "A sitting first asks which Hansard section to open, then draws only that section" }
        ]
      },
      {
        version: "v2.54",
        date: "4 Sep 2026",
        items: [
          { type: "upgraded", text: "Hansard section nav is a sticky dropdown plus previous/next heading buttons that follow the current heading as you scroll" }
        ]
      },
      {
        version: "v2.53",
        date: "4 Sep 2026",
        items: [
          { type: "fixed", text: "Footer party buttons open a titled briefing with poll and promises" },
          { type: "fixed", text: "Party panel title is visible again" },
          { type: "upgraded", text: "Hansard heading pager stays on screen while the sitting title stays at the top" },
          { type: "fixed", text: "More space between the Hansard title and the calendar" },
          { type: "fixed", text: "Site title stays fixed when the filter opens or closes" }
        ]
      },
      {
        version: "v2.52",
        date: "4 Sep 2026",
        items: [
          { type: "upgraded", text: "Release log can mark work as Upgraded" },
          { type: "feature", text: "Feature requests store as GitHub issues on FlavourThink/nz-politics-workers-collection" },
          { type: "fixed", text: "Bottom party buttons open the party briefing with data" },
          { type: "feature", text: "Hansard heading pagination (previous / next heading)" },
          { type: "fixed", text: "Opening a panel no longer hides the header or date range" },
          { type: "upgraded", text: "MP panel prev/next controls are labelled and larger" },
          { type: "fixed", text: "Generation chip matches the party button and sits beside the birthday cake" }
        ]
      },
      {
        version: "v2.51",
        date: "4 Sep 2026",
        items: [
          { type: "fixed", text: "Party buttons open a filled briefing; NZ First names are aliased" },
          { type: "fixed", text: "NZ First graph line is a visible indigo on the dark chart" },
          { type: "fixed", text: "Header lock uses the whole header rectangle, left and right" },
          { type: "fixed", text: "Mouse wheel scrolls the timeline again after leaving the header" },
          { type: "fixed", text: "Hansard calendar no longer flashes a loading pop-up" },
          { type: "feature", text: "Hansard sittings have section skip links and back to top" }
        ]
      },
      {
        version: "v2.50",
        date: "4 Sep 2026",
        items: [
          { type: "fixed", text: "Edge-scrolling the timeline pauses while the cursor is over the header or any panel" }
        ]
      },
      {
        version: "v2.49",
        date: "4 Sep 2026",
        items: [
          { type: "fixed", text: "NZ First poll graph uses the same deep blue as the party button" },
          { type: "fixed", text: "Generation buttons sit 5px below the date range" }
        ]
      },
      {
        version: "v2.48",
        date: "4 Sep 2026",
        items: [
          { type: "fixed", text: "Hansard busts (including Ginny Andersen) sit on the same 128px cream frame as the Speaker" },
          { type: "fixed", text: "Hansard title bar flushes to the top of the card and includes a back-to-calendar control" },
          { type: "fixed", text: "Choosing Hansard from the menu closes the menu first" }
        ]
      },
      {
        version: "v2.47",
        date: "4 Sep 2026",
        items: [
          { type: "fixed", text: "Hansard title bar sticks to the top of the Hansard card only" },
          { type: "fixed", text: "Hamburger menu opens over the header, not in the timeline" }
        ]
      },
      {
        version: "v2.46",
        date: "4 Sep 2026",
        items: [
          { type: "fixed", text: "Willow-Jean Prime bust rebuilt to the same sprite card rule as the Speaker" },
          { type: "fixed", text: "Mike Davidson Green list MP bust added for Hansard" },
          { type: "fixed", text: "Stray Hansard title bar no longer shows on page load" },
          { type: "fixed", text: "Hansard title bar appears once the sitting is scrolled" },
          { type: "fixed", text: "Open filters sit beside the site title instead of covering it" }
        ]
      },
      {
        version: "v2.45",
        date: "4 Sep 2026",
        items: [
          { type: "fixed", text: "Willow-Jean Prime, Deborah Russell, Katie Nimon and Catherine Wedd busts in the shared chibi style" },
          { type: "fixed", text: "Hansard sitting view shows a top title bar with close once you scroll" },
          { type: "fixed", text: "Hamburger menu drops in place of the button instead of down the timeline" }
        ]
      },
      {
        version: "v2.44",
        date: "4 Sep 2026",
        items: [
          { type: "fixed", text: "Hansard portraits only match an exact unique name — no more shared Marama faces" },
          { type: "fixed", text: "Panel title lives in a top title bar; duplicate heading removed from the body" },
          { type: "fixed", text: "Site title sits 5px from the top-left of the window" },
          { type: "fixed", text: "Served cards show the date range; header crop shows more of the Speaker and PM" },
          { type: "fixed", text: "Hansard calendar has no title bar" }
        ]
      },
      {
        version: "v2.43",
        date: "4 Sep 2026",
        items: [
          { type: "feature", text: "Sticky title bar with close appears when a panel close button scrolls off screen" },
          { type: "feature", text: "Hansard busts open that MP panel when a card exists" },
          { type: "feature", text: "Hansard sittings picker is a calendar; recorded days are highlighted" }
        ]
      },
      {
        version: "v2.42",
        date: "4 Sep 2026",
        items: [
          { type: "fixed", text: "Timeline wrap pinned under a capped header so the chart cannot disappear" }
        ]
      },
      {
        version: "v2.41",
        date: "4 Sep 2026",
        items: [
          { type: "fixed", text: "Filter icon is sliders (lines with knobs)" },
          { type: "fixed", text: "Title stays top-left when filters open" },
          { type: "fixed", text: "Header image always spans the window width" }
        ]
      },
      {
        version: "v2.40",
        date: "4 Sep 2026",
        items: [
          { type: "feature", text: "Mobile filter button left of the hamburger; green badge when a filter is active" }
        ]
      },
      {
        version: "v2.39",
        date: "4 Sep 2026",
        items: [
          { type: "fixed", text: "Edge auto-scroll off on phones; mouse-only and stops on mouseup" },
          { type: "fixed", text: "Reset restores party, generation, prior PMs and Born mode without jumping the map" },
          { type: "fixed", text: "Footer party buttons use the same overlay panel as MP party links" }
        ]
      },
      {
        version: "v2.38",
        date: "4 Sep 2026",
        items: [
          { type: "fixed", text: "Filter box padding reduced and dropped toward the date line" },
          { type: "fixed", text: "Header chamber image zoom cut from 170% to 120%" },
          { type: "fixed", text: "Overlays move to document.body and park the header behind them" },
          { type: "fixed", text: "Hansard consecutive lines join into one paragraph per speaker" }
        ]
      },
      {
        version: "v2.37",
        date: "3 Sep 2026",
        items: [
          { type: "fixed", text: "Party dock buttons equal width and height" },
          { type: "fixed", text: "MP and party panels forced above the header" },
          { type: "fixed", text: "Hansard shows one bust for consecutive lines by the same speaker" }
        ]
      },
      {
        version: "v2.36",
        date: "3 Sep 2026",
        items: [
          { type: "fixed", text: "Bottom date bar removed" },
          { type: "fixed", text: "MP and party panels sit over the header" },
          { type: "feature", text: "Phone back button steps through overlays to the timeline" }
        ]
      },
      {
        version: "v2.35",
        date: "3 Sep 2026",
        items: [
          { type: "fixed", text: "Top and bottom date ranges restored and pinned on mobile; they follow scroll and zoom" }
        ]
      },
      {
        version: "v2.34",
        date: "3 Sep 2026",
        items: [
          { type: "feature", text: "MP badges split into Voted for / Voted against" },
          { type: "fixed", text: "Mobile: timeline scrolls vertically inside the wrap; date rows zoom with the chart" },
          { type: "feature", text: "Mobile filter grid: parties+generations | born-served + prior/reset, at the bottom of the header" }
        ]
      },
      {
        version: "v2.33",
        date: "3 Sep 2026",
        items: [
          { type: "feature", text: "Chamber busts added for Luxton, Doocey, Tangaere-Manuel and other missing 54th names" },
          { type: "feature", text: "Busts stored in SPRITE_DATA and artifacts/nz-politics-timeline/busts/" }
        ]
      },
      {
        version: "v2.32",
        date: "3 Sep 2026",
        items: [
          { type: "fixed", text: "Generation filter rebuilt from GEN_INFO (Greatest through Gamma)" },
          { type: "fixed", text: "Hansard sitting view reads speech + text lines and shows up to 2500 rows" }
        ]
      },
      {
        version: "v2.31",
        date: "3 Sep 2026",
        items: [
          { type: "feature", text: "Chibi busts for Goldsmith and other frequent Hansard speakers without art" },
          { type: "feature", text: "Hansard window re-fetches the index and sitting files on every open" },
          { type: "fixed", text: "Future sittings attach a bust by last-name match against the sprite set" }
        ]
      },
      {
        version: "v2.30",
        date: "3 Sep 2026",
        items: [
          { type: "fixed", text: "Watts, Upston, Bidois, O'Connor and Clerk redrawn as cream-background chibi busts to match the timeline sprites" }
        ]
      },
      {
        version: "v2.29",
        date: "3 Sep 2026",
        items: [
          { type: "fixed", text: "Watts and Upston portraits resolve by last-name alias" },
          { type: "feature", text: "Portraits for Dan Bidois, Greg O'Connor and the Clerk" },
          { type: "feature", text: "Party colour bar under each Hansard face" }
        ]
      },
      {
        version: "v2.28",
        date: "3 Sep 2026",
        items: [
          { type: "feature", text: "Pixel portraits for 14 frequent Hansard speakers who had no card art" },
          { type: "fixed", text: "Hansard days use Wed 02/Sep/26; up to 100 speeches per sitting" }
        ]
      },
      {
        version: "v2.27",
        date: "3 Sep 2026",
        items: [
          { type: "fixed", text: "Rollback to v2.23 after v2.26 hid the timeline. No layout changes in this build." }
        ]
      },
      {
        version: "v2.23",
        date: "3 Sep 2026",
        items: [
          { type: "fixed", text: "Panel H buttons call Hansard directly" },
          { type: "fixed", text: "Hansard rows parse speaker names from the sitting file and attach portraits" }
        ]
      },
      {
        version: "v2.22",
        date: "3 Sep 2026",
        items: [
          { type: "fixed", text: "Hansard H button opens the sitting list; portraits match speaker names" },
          { type: "fixed", text: "Skill tree has no sky fill; labels are larger" },
          { type: "fixed", text: "Generation chips sit 5px under the date bar" },
          { type: "fixed", text: "Hover the Speaker or PM in the header for their name" }
        ]
      },
      {
        version: "v2.21",
        date: "3 Sep 2026",
        items: [
          { type: "feature", text: "Hansard speeches show the member portrait; popup has a top-right close" },
          { type: "feature", text: "Hansard icon on MP and party panels" },
          { type: "fixed", text: "Removed the black strip between the date bar and generation colours" },
          { type: "fixed", text: "Party dock buttons are flat, uppercase, corporate" },
          { type: "fixed", text: "Comedy skill tree removed; branch names updated" }
        ]
      },
      {
        version: "v2.20",
        date: "3 Sep 2026",
        items: [
          { type: "fixed", text: "Rolled back to v2.18 then reapplied only the safe fixes — MP panels unchanged" },
          { type: "fixed", text: "Greatest, Beta and Gamma have House / voter stats and a notes page" },
          { type: "fixed", text: "Generation bands meet the timeline; 1910 and 1990 are labelled" },
          { type: "feature", text: "Hamburger Hansard reads sittings as speaker-and-text, not raw JSON" }
        ]
      },
      {
        version: "v2.18",
        date: "3 Sep 2026",
        items: [
          { type: "fixed", text: "MP and party panels sit under the title / Donate row and above the chamber and map" }
        ]
      },
      {
        version: "v2.17",
        date: "3 Sep 2026",
        items: [
          { type: "fixed", text: "Removed the born-mode hint line" },
          { type: "fixed", text: "Coloured date bar stays under the header while the map scrolls" },
          { type: "fixed", text: "Party dock buttons are filled with each party colour at 98%" }
        ]
      },
      {
        version: "v2.16",
        date: "3 Sep 2026",
        items: [
          { type: "fixed", text: "Party graphs draw a March–November 2026 track with a visible line" },
          { type: "fixed", text: "Header height stops under the filters; Speaker and PM stay centred and visible" }
        ]
      },
      {
        version: "v2.15",
        date: "3 Sep 2026",
        items: [
          { type: "fixed", text: "Header stays fixed at the top of the window" },
          { type: "fixed", text: "Timeline wrapper scrolls left/right again so year−40 can sit in the middle" },
          { type: "fixed", text: "Mouse at the left or right edge pans the timeline" }
        ]
      },
      {
        version: "v2.14",
        date: "3 Sep 2026",
        items: [
          { type: "fixed", text: "Opens with (current year − 40) in the middle of the window" },
          { type: "fixed", text: "Header stays on screen full width; Speaker and PM stay centred" },
          { type: "fixed", text: "Mouse at the screen edges scrolls the page" },
          { type: "fixed", text: "Party dock has extra padding at the top" }
        ]
      },
      {
        version: "v2.13",
        date: "3 Sep 2026",
        items: [
          { type: "fixed", text: "Brownlee / Luxon names only appear on hover of each figure" },
          { type: "fixed", text: "One page scrollbar — timeline no longer has its own scroller" },
          { type: "fixed", text: "Party buttons stay fixed to the bottom of the window and share the width evenly" }
        ]
      },
      {
        version: "v2.12",
        date: "3 Sep 2026",
        items: [
          { type: "fixed", text: "Party poll graphs drawn again with a monthly track through November 2026" },
          { type: "fixed", text: "Beta meets Gamma — no empty year between them" },
          { type: "fixed", text: "Generation % is regular weight in light mode, bold in dark mode" },
          { type: "fixed", text: "Filters stack under the title in a tight pill; Donate / Light / Menu stay top-right with the title" }
        ]
      },
      {
        version: "v2.11",
        date: "3 Sep 2026",
        items: [
          { type: "fixed", text: "Date line and governments run from 1901 (Seddon) through Gamma 2054" },
          { type: "fixed", text: "Generation Gamma window is coloured" },
          { type: "fixed", text: "Light mode: birth years and generation labels are black" },
          { type: "fixed", text: "Hamburger is the 3-bar control in donate blue" },
          { type: "feature", text: "Filters sit in the title row; party buttons dock to the bottom of the screen" },
          { type: "fixed", text: "Removed the sitting-MPs hint line" }
        ]
      },
      {
        version: "v2.10",
        date: "3 Sep 2026",
        items: [
          { type: "fixed", text: "Timeline renders again (broken chamber function had stopped the whole script)" },
          { type: "fixed", text: "Title background is a pill around the logo and name only" },
          { type: "fixed", text: "Donate, theme and menu share the donate button style and work again" }
        ]
      },
      {
        version: "v2.09",
        date: "3 Sep 2026",
        items: [
          { type: "fixed", text: "Brownlee sits in the chamber throne itself, not a second chair" },
          { type: "fixed", text: "Standing PM is the existing Luxon card likeness, composited into the room" }
        ]
      },
      {
        version: "v2.08",
        date: "3 Sep 2026",
        items: [
          { type: "fixed", text: "Beta and Gamma windows use the chart colours on the timeline" },
          { type: "fixed", text: "Date line party colour and PM names run from 1920 (Massey) not 1928" },
          { type: "fixed", text: "Header seat is Brownlee (blink). Standing figure is Luxon in formal dress, not Hipkins" },
          { type: "fixed", text: "Title and menu stay pinned to the top of the screen" }
        ]
      },
      {
        version: "v2.07",
        date: "3 Sep 2026",
        items: [
          { type: "feature", text: "Generation colours match the attached birth-year chart" },
          { type: "feature", text: "Header is a pixel-art chamber: Speaker sits the chair, PM stands to the side, filters sit on the wood panels" }
        ]
      },
      {
        version: "v2.06",
        date: "1 Sep 2026",
        items: [
          { type: "fixed", text: "On the record links removed" },
          { type: "fixed", text: "Party poll graph guarded so a bad series cannot blank the panel" },
          { type: "fixed", text: "Bottom date bar matches the top and spans the map; PM faces stay off" },
          { type: "fixed", text: "Cards kept inside the map; lane gap widened so they do not overlap" },
          { type: "fixed", text: "Rank numbers restored to the previous in-card style" },
          { type: "fixed", text: "Generation Alpha is navy; Generation Beta added after it; Millennial has no s" }
        ]
      },
      {
        version: "v2.05",
        date: "1 Sep 2026",
        items: [
          { type: "feature", text: "Party rank sits in a hanging circle on each MP card — white number on a darker inner disc" }
        ]
      },
      {
        version: "v2.04",
        date: "1 Sep 2026",
        items: [
          { type: "fixed", text: "On-the-record links now match the story, not a nearby headline" },
          { type: "feature", text: "Comedy skill tree is the default; Classic v1 kept behind a toggle" },
          { type: "feature", text: "Skill tree: tap a star to pick it, light the path, and read the note" }
        ]
      },
      {
        version: "v2.03",
        date: "1 Sep 2026",
        items: [
          { type: "fixed", text: "PM faces removed from the timeline date bar" },
          { type: "fixed", text: "Greatest Generation added (to 1927); Muldoon 1921 no longer filed as Silent" },
          { type: "feature", text: "On the record items link out to source articles where we have them" }
        ]
      },
      {
        version: "v2.02",
        date: "1 Sep 2026",
        items: [
          { type: "fixed", text: "MP panel header cleaned: portrait, name, one subtitle, chip row" },
          { type: "fixed", text: "Prev/next sit on the portrait; party stays as a chip; tabs shortened" }
        ]
      },
      {
        version: "v2.01",
        date: "1 Sep 2026",
        items: [
          { type: "fixed", text: "Skill tree: four coloured columns from one shared Start node" },
          { type: "fixed", text: "Skill labels made larger; each path keeps its own colour" }
        ]
      },
      {
        version: "v2.00",
        date: "1 Sep 2026",
        items: [
          { type: "feature", text: "Skill tree rebuilt as one Skyrim-style constellation shared by every MP" },
          { type: "fixed", text: "Like skills collapsed to one node; lit stars are that member's public record" }
        ]
      },
      {
        version: "v1.99",
        date: "1 Sep 2026",
        items: [
          { type: "feature", text: "Skill tree on each MP panel — schooling, work, House, other skills" },
          { type: "feature", text: "Skill tree button added to the panel header" }
        ]
      },
      {
        version: "v1.98",
        date: "1 Sep 2026",
        items: [
          { type: "fixed", text: "New policy badges resized to 160×160 to match the rest of the set" }
        ]
      },
      {
        version: "v1.97",
        date: "1 Sep 2026",
        items: [
          { type: "feature", text: "Five new policy badges: School Phone Ban, Social Media Age-Limit, Youth Academies, Māori Wards, Defence Spend" },
          { type: "feature", text: "New badges assigned for and against from public positions this term" }
        ]
      },
      {
        version: "v1.96",
        date: "1 Sep 2026",
        items: [
          { type: "fixed", text: "MP panel: prev/next above the portrait; generation chip and birth year under the name" },
          { type: "fixed", text: "Generation and party buttons use the same shape as the tabs" }
        ]
      },
      {
        version: "v1.95",
        date: "1 Sep 2026",
        items: [
          { type: "fixed", text: "Badge popup now renders on top of the page so the note is visible" }
        ]
      },
      {
        version: "v1.94",
        date: "1 Sep 2026",
        items: [
          { type: "fixed", text: "Policy badges fill more of their button" },
          { type: "feature", text: "Badge notes open as a popup; click again or anywhere else to close" }
        ]
      },
      {
        version: "v1.93",
        date: "1 Sep 2026",
        items: [
          { type: "fixed", text: "Growing-up tab heading now reads In the news whilst [first name] was a young adult" }
        ]
      },
      {
        version: "v1.92",
        date: "1 Sep 2026",
        items: [
          { type: "feature", text: "Badges is the first MP tab; generation chip and birth year sit beside the party button" },
          { type: "fixed", text: "Tab headings stay put; only the tab body scrolls" }
        ]
      },
      {
        version: "v1.91",
        date: "1 Sep 2026",
        items: [
          { type: "feature", text: "MP panel split into Profile, Badges, Growing up, and On the record tabs" },
          { type: "fixed", text: "On the record items now show date + Headline / Quote / Quirk / Object chips" }
        ]
      },
      {
        version: "v1.90",
        date: "1 Sep 2026",
        items: [
          { type: "fixed", text: "On-the-record blurbs expanded into takeaway bullets: date, context, why it stuck, quote" }
        ]
      },
      {
        version: "v1.89",
        date: "1 Sep 2026",
        items: [
          { type: "fixed", text: "On-the-record file now dated, newest first, with quoted lines on most items" }
        ]
      },
      {
        version: "v1.88",
        date: "1 Sep 2026",
        items: [
          { type: "fixed", text: "Strange / silly file rewritten as headline incidents with a short reporter blurb on each" }
        ]
      },
      {
        version: "v1.87",
        date: "1 Sep 2026",
        items: [
          { type: "fixed", text: "Timeline now starts in 1928, at the start of the Silent Generation" },
          { type: "fixed", text: "1930s added to the formative “what was normal” notes so Silent-era childhoods are covered" },
          { type: "fixed", text: "Strange / silly notes are now quotes or one-sentence actions, not group-chat rewrite" }
        ]
      },
      {
        version: "v1.86",
        date: "1 Sep 2026",
        items: [
          { type: "fixed", text: "Generation windows now follow NZ-used bands: Silent 1928–1945, Baby Boomers 1946–1964, Generation X 1965–1980, Millennials 1981–1996, Generation Z 1997–2012, Generation Alpha from 2013" },
          { type: "fixed", text: "Birth year on MP cards is white" },
          { type: "fixed", text: "Generation chips sit slightly darker than their band" }
        ]
      },
      {
        version: "v1.85",
        date: "31 Aug 2026",
        items: [
          { type: "fixed", text: "MP cards sit 80% toward their generation window colour so they match the band behind them" }
        ]
      },
      {
        version: "v1.84",
        date: "31 Aug 2026",
        items: [
          { type: "fixed", text: "MP cards are 5% darker than their generation colour, not lighter" }
        ]
      },
      {
        version: "v1.83",
        date: "31 Aug 2026",
        items: [
          { type: "feature", text: "Strange / silly / outrageous notes rewritten in Gen X–Millennial voice, about ten public examples per member" }
        ]
      },
      {
        version: "v1.82",
        date: "31 Aug 2026",
        items: [
          { type: "fixed", text: "Dark mode is the default view" },
          { type: "fixed", text: "MP card backgrounds are the generation colour mixed 10% toward white" }
        ]
      },
      {
        version: "v1.81",
        date: "31 Aug 2026",
        items: [
          { type: "feature", text: "MP panels carry a Strange, silly, and on the record section for public circus moments, burns, and object/vehicle episodes" }
        ]
      },
      {
        version: "v1.80",
        date: "31 Aug 2026",
        items: [
          { type: "fixed", text: "Statistics lists Generation on the left and a compact gen chip (name only) on the right" }
        ]
      },
      {
        version: "v1.79",
        date: "31 Aug 2026",
        items: [
          { type: "feature", text: "Generation chips show % of Parliament and % of NZ voters in that age bracket" },
          { type: "feature", text: "MP panel uses the same generation chip as the timeline; tap it for the full gen note" }
        ]
      },
      {
        version: "v1.78",
        date: "31 Aug 2026",
        items: [
          { type: "feature", text: "Vertical MMP banner at 1996, text rotated 270° behind the cards, stopping at the top and bottom timelines" }
        ]
      },
      {
        version: "v1.77",
        date: "31 Aug 2026",
        items: [
          { type: "fixed", text: "Gen Z windows are lime green; Gen Alpha is yellow" },
          { type: "feature", text: "PM cards carry a small gold Beehive seal" }
        ]
      },
      {
        version: "v1.76",
        date: "31 Aug 2026",
        items: [
          { type: "fixed", text: "Removed the Votes & stance block from MP panels" },
          { type: "feature", text: "Click a policy badge to open its explanation under the grid; click again to close" }
        ]
      },
      {
        version: "v1.75",
        date: "31 Aug 2026",
        items: [
          { type: "feature", text: "Swapped oil and gas, fees-free, parental leave, and grocery watch pins for the new circular art" },
          { type: "fixed", text: "Policy badges sit in a tight 4-column equal-size grid on every MP panel" },
          { type: "fixed", text: "Votes & stance starts directly under the badge grid with no leftover gap" }
        ]
      },
      {
        version: "v1.74",
        date: "30 Aug 2026",
        items: [
          { type: "feature", text: "Replaced the 20 trial pins with the supplied layer-policy badges, labelled from the banner text" },
          { type: "feature", text: "Added the extra layer-badge set (clean energy, refugee support, UBS, and the rest)" },
          { type: "feature", text: "Hung the new pins on sitting MPs and recent PMs from public votes and stated positions" }
        ]
      },
      {
        version: "v1.73",
        date: "30 Aug 2026",
        items: [
          { type: "fixed", text: "Served mode no longer tints a border around MP portraits" },
          { type: "fixed", text: "Gen Alpha is amber-gold so it no longer matches Gen X teal" },
          { type: "feature", text: "Twenty new stance badges added to the pin set" }
        ]
      },
      {
        version: "v1.72",
        date: "30 Aug 2026",
        items: [
          { type: "fixed", text: "Born mode keeps a simple blue 3px left bar" },
          { type: "feature", text: "On Served the white pad around the portrait fades into that MP's generation-button colour over the card slide" }
        ]
      },
      {
        version: "v1.71",
        date: "30 Aug 2026",
        items: [
          { type: "fixed", text: "Left bar is a 50% darker mix of that MP card's Born background" },
          { type: "feature", text: "On Served the bar fades to the Born wash colour over the same 1.26s slide; Born reverses it" }
        ]
      },
      {
        version: "v1.70",
        date: "30 Aug 2026",
        items: [
          { type: "fixed", text: "Left birth bar stays the original 3px blue on Born" },
          { type: "feature", text: "On Served the same bar fades from blue into that MP's generation colour" }
        ]
      },
      {
        version: "v1.69",
        date: "30 Aug 2026",
        items: [
          { type: "fixed", text: "Birthday cake on born cards is 10% larger" },
          { type: "fixed", text: "Timeline year labels stay white in light and dark mode" },
          { type: "feature", text: "Served cards no longer use a generation dot — the left bar fades from blue into that MP's generation colour" }
        ]
      },
      {
        version: "v1.68",
        date: "29 Aug 2026",
        items: [
          { type: "fixed", text: "Generation window labels stay white in light and dark mode" },
          { type: "feature", text: "Born cards show a birthday cake and the year only" },
          { type: "feature", text: "Party panel pulls Promises since … from party-offerings-proposed.json" }
        ]
      },
      {
        version: "v1.67",
        date: "29 Aug 2026",
        items: [
          { type: "feature", text: "Promises heading is Tracking the Promises: The 2026 Election" },
          { type: "feature", text: "Party graph keeps a solid six-month line and a dotted prediction through November; every month is labelled" },
          { type: "feature", text: "Last 7 elections lists latest first" },
          { type: "fixed", text: "Ticks and crosses on that list are thicker" }
        ]
      },
      {
        version: "v1.66",
        date: "29 Aug 2026",
        items: [
          { type: "feature", text: "Party graphs show only the last six months through 7 Nov 2026" },
          { type: "feature", text: "Bundled data/party-offerings-2026.json for all seven parties — copy onto the workers repo to go live" }
        ]
      },
      {
        version: "v1.65",
        date: "29 Aug 2026",
        items: [
          { type: "feature", text: "Party graphs load daily from FlavourThink/nz-politics-workers-collection data/polls.json" },
          { type: "feature", text: "Worker poll rows (Wikipedia scrape) mapped onto NAT/LAB/GRN/ACT/NZ First/TPM/TOP and drawn month-by-month" },
          { type: "fixed", text: "2026 offerings still use the bundled On the paper list — the workers repo has no manifesto job yet" }
        ]
      },
      {
        version: "v1.64",
        date: "29 Aug 2026",
        items: [
          { type: "fixed", text: "MP and party panels keep their own mouse-wheel / trackpad scroll while the map is locked" },
          { type: "fixed", text: "Party poll line is drawn month-by-month from the 2023 result to Nov 2026 so the axis no longer jumps Oct 23 → Nov 25" },
          { type: "feature", text: "Party page heading is now On the paper for 7 November 2026" },
          { type: "feature", text: "Optional daily JSON feed (GitHub raw or local data/) for polls and 2026 offerings" }
        ]
      },
      {
        version: "v1.63",
        date: "29 Aug 2026",
        items: [
          { type: "fixed", text: "Script died after load: mps was const then reassigned. Filters painted, timeline and clicks never bound." },
          { type: "fixed", text: "Kept v1.61 layout. mps is let; empty slots stripped; PM-marker and panel lookups skip missing records." }
        ]
      },
      {
        version: "v1.62",
        date: "29 Aug 2026",
        items: [
          { type: "fixed", text: "Removed empty slot in mps[] before Ardern that made .id throw in makeAxis, openDetails, and openPanel" },
          { type: "fixed", text: "All MP lookups skip holes; Prior PM cards can open again" }
        ]
      },
      {
        version: "v1.61",
        date: "29 Aug 2026",
        items: [
          { type: "fixed", text: "Gen Z ends 2025; Gen Alpha occupies 2025–2040 so Z is not stretched across empty decades" },
          { type: "fixed", text: "Prior control labelled Prior PMs; capture-phase click + error logging for cards" },
          { type: "feature", text: "Skip link, focus rings, reduced-motion, live region (NZ web quality / WCAG-oriented)" },
          { type: "fixed", text: "Timeline bands and MP cards are solid, not translucent" }
        ]
      },
      {
        version: "v1.60",
        date: "29 Aug 2026",
        items: [
          { type: "fixed", text: "Party stripes behind MP cards removed; axis timeline bands back to the earlier darker strength" },
          { type: "feature", text: "Theme control is ☀ / ☽ — header on desktop, hamburger on phones" }
        ]
      },
      {
        version: "v1.59",
        date: "29 Aug 2026",
        items: [
          { type: "fixed", text: "Light mode: brighter green ticks, red crosses, and gold section titles" }
        ]
      },
      {
        version: "v1.58",
        date: "29 Aug 2026",
        items: [
          { type: "fixed", text: "Beehive logo uses currentColor so it shows in light mode" },
          { type: "fixed", text: "Timeline party and generation bands are more solid" },
          { type: "fixed", text: "Generation labels use white text in light mode" }
        ]
      },
      {
        version: "v1.57",
        date: "29 Aug 2026",
        items: [
          { type: "fixed", text: "Light mode uses a cooler mid-grey canvas so party and generation colours are not washed out" }
        ]
      },
      {
        version: "v1.56",
        date: "29 Aug 2026",
        items: [
          { type: "feature", text: "Hamburger Light / Dark toggle; light is the default, choice is stored on the device" }
        ]
      },
      {
        version: "v1.55",
        date: "28 Aug 2026",
        items: [
          { type: "fixed", text: "Generation popup uses the same section titles, body size, list indent and gaps as the opened MP card" }
        ]
      },
      {
        version: "v1.54",
        date: "28 Aug 2026",
        items: [
          { type: "feature", text: "Type scale standardised from the opened MP card: title 1.15rem, section 0.78rem, body 0.84rem, caption 0.7rem, same list indent and gaps" }
        ]
      },
      {
        version: "v1.53",
        date: "28 Aug 2026",
        items: [
          { type: "feature", text: "Generation notes include House share, how many are on the map, birth-year span, party mix, and PM cards" }
        ]
      },
      {
        version: "v1.52",
        date: "28 Aug 2026",
        items: [
          { type: "fixed", text: "Diagonal scroll uses one rounded scrollTo per frame so the view does not stutter on two axes" },
          { type: "feature", text: "Generation titles open a short brief and a common-traits list" }
        ]
      },
      {
        version: "v1.51",
        date: "28 Aug 2026",
        items: [
          { type: "feature", text: "Hamburger stays visible on desktop and mobile" },
          { type: "fixed", text: "Donate sits in the header on desktop and only in the menu on phones" }
        ]
      },
      {
        version: "v1.50",
        date: "28 Aug 2026",
        items: [
          { type: "feature", text: "Menu: request a feature — pending on-device until approved in a build, then listed with votes" },
          { type: "feature", text: "Document head filled for search and share (description, Open Graph, Twitter, JSON-LD)" }
        ]
      },
      {
        version: "v1.49",
        date: "28 Aug 2026",
        items: [
          { type: "fixed", text: "Alliance party bar is red (Willie Jackson’s 1999–2002 card was rendering black)" },
          { type: "fixed", text: "PM gold shimmer kept in Served mode (generation class had overwritten the fill)" },
          { type: "fixed", text: "Birth-year edge is a full-height bar again, not a bottom dot" },
          { type: "fixed", text: "Reset button is 2rem on desktop and mobile" }
        ]
      },
      {
        version: "v1.48",
        date: "27 Aug 2026",
        items: [
          { type: "feature", text: "Polling graphs scale to each party’s own range and draw taller" },
          { type: "fixed", text: "Opening a panel scrolls that panel to the top" }
        ]
      },
      {
        version: "v1.47",
        date: "27 Aug 2026",
        items: [
          { type: "fixed", text: "Party colour bar locked to the top of each MP card" },
          { type: "fixed", text: "Served-mode generation dot is 11px and vertically centred on the name" },
          { type: "fixed", text: "Last 7 elections uses ✓ / ✕, drops the % total, and matches This election list type" }
        ]
      },
      {
        version: "v1.46",
        date: "27 Aug 2026",
        items: [
          { type: "feature", text: "Generation windows stay visible in Served mode" },
          { type: "feature", text: "Generation wash on each card shrinks to a dot by the name in Served, expands again in Born" },
          { type: "fixed", text: "Edge / mouse scroll pauses while a panel is open" }
        ]
      },
      {
        version: "v1.45",
        date: "27 Aug 2026",
        items: [
          { type: "fixed", text: "Edge-scroll bound on page load — it had been nested inside the Reset button" }
        ]
      },
      {
        version: "v1.44",
        date: "27 Aug 2026",
        items: [
          { type: "fixed", text: "PM gold shimmer cut to half brightness" },
          { type: "feature", text: "Move the pointer to a window edge to scroll the timeline" }
        ]
      },
      {
        version: "v1.43",
        date: "27 Aug 2026",
        items: [
          { type: "feature", text: "One heading scale site-wide: h1 title, h2 name, h3 section (blue), h4 topic/year (gold)" }
        ]
      },
      {
        version: "v1.42",
        date: "27 Aug 2026",
        items: [
          { type: "feature", text: "This election promises are grouped under topic headers (Tax, Health, Housing, and so on)" }
        ]
      },
      {
        version: "v1.41",
        date: "27 Aug 2026",
        items: [
          { type: "fixed", text: "Footer date bar uses the same width, margin and scroll as the header bar (no extra zoom scale)" },
          { type: "feature", text: "Seven cycles show three flagship promises; extra notes sit behind a tap-to-toggle ?" }
        ]
      },
      {
        version: "v1.40",
        date: "27 Aug 2026",
        items: [
          { type: "feature", text: "Party page splits This election (7 Nov 2026) from Last 7 elections (2005–2023)" },
          { type: "fixed", text: "History is a plain Done / Not done table plus a single achieved-vs-not total; TOP has no pre-2016 rows" }
        ]
      },
      {
        version: "v1.39",
        date: "27 Aug 2026",
        items: [
          { type: "fixed", text: "TOP no longer has fake 2014 rows or invented success % — founded 2016, 0 seats in 2017/20/23" },
          { type: "fixed", text: "Cycle scores are now computed: toward = in government after that election; achieved = delivered ÷ promised on one documented metric" }
        ]
      },
      {
        version: "v1.38",
        date: "27 Aug 2026",
        items: [
          { type: "fixed", text: "Legend click never bound on load — handler had been nested inside the Reset button" },
          { type: "feature", text: "Party briefing lists promises from 2014–2026 with toward % and achieved %" }
        ]
      },
      {
        version: "v1.37",
        date: "27 Aug 2026",
        items: [
          { type: "fixed", text: "MP cards again show party as plain text, not a badge" },
          { type: "fixed", text: "Legend chips look clickable (border, hover ring, ›) and open the party briefing" }
        ]
      },
      {
        version: "v1.36",
        date: "27 Aug 2026",
        items: [
          { type: "feature", text: "Same party badge on each MP card; click opens the 2026 party briefing" },
          { type: "feature", text: "Header legend parties are buttons that open the same briefing" }
        ]
      },
      {
        version: "v1.35",
        date: "27 Aug 2026",
        items: [
          { type: "fixed", text: "Government colour bands now change on the same dates as a change of governing party; white ticks still mark every new PM, including same-party handovers" },
          { type: "feature", text: "Party badge on the MP panel opens a 2026 briefing: promises, current poll %, monthly trend, election-day projection" }
        ]
      },
      {
        version: "v1.34",
        date: "27 Aug 2026",
        items: [
          { type: "feature", text: "PM handover list now runs the full chart: Savage → Fraser → Holland → Holyoake → Nash → Holyoake → Marshall → Kirk → Rowling → Muldoon and on" },
          { type: "feature", text: "Each generation title shows that cohort’s share of the whole sitting House (all 123 MPs, not only cards on the map)" }
        ]
      },
      {
        version: "v1.33",
        date: "27 Aug 2026",
        items: [
          { type: "feature", text: "Cards dropped below generation titles so labels stay readable" },
          { type: "feature", text: "Each generation title has its own unused colour; Born-mode cards use the same tint" }
        ]
      },
      {
        version: "v1.32",
        date: "27 Aug 2026",
        items: [
          { type: "fixed", text: "PM hover on coloured bar — axis had pointer-events:none and overflow:hidden clipping the tip" },
          { type: "fixed", text: "Government colour and current coalitions end at the 2026 election, not 2030; chart still runs to 2040" },
          { type: "feature", text: "Born mode shows boxed generation windows (Silent → Gen Z) on the timeline" }
        ]
      },
      {
        version: "v1.31",
        date: "27 Aug 2026",
        items: [
          { type: "feature", text: "Detail panel ‹ › buttons jump to the nearest MP left or right on the current Born/Served map" },
          { type: "feature", text: "White handover ticks on the coloured timeline when a new PM takes office; hover shows sitting PM name" }
        ]
      },
      {
        version: "v1.30",
        date: "27 Aug 2026",
        items: [
          { type: "feature", text: "Born + year emphasised on cards; left-edge marker shows birth year alignment" },
          { type: "feature", text: "Filter note: currently sitting MPs plus top 5 per party; Born-mode left-edge explainer" },
          { type: "feature", text: "Te Pāti Māori colour changed to dark crimson (#8B1A1A)" }
        ]
      },
      {
        version: "v1.29",
        date: "27 Aug 2026",
        items: [
          { type: "feature", text: "Removed decade date-range labels; coloured gov bars sit under the filter (sticky)" },
          { type: "feature", text: "Year numbers inside the coloured bars are bold; party colour wash at 5% behind MP cards" },
          { type: "feature", text: "Pacifier emoji on the card Born date line" }
        ]
      },
      {
        version: "v1.28",
        date: "27 Aug 2026",
        items: [
          { type: "fixed", text: "Reworded era copy that used “gay sex” to “same-sex relations”" },
          { type: "feature", text: "Removed decade description text from the main timeline (labels only; full notes stay in decade popup)" }
        ]
      },
      {
        version: "v1.27",
        date: "27 Aug 2026",
        items: [
          { type: "fixed", text: "Rolled back to v1.05 codebase (pre birth-grid / sitting-roster experiments)" },
          { type: "feature", text: "Restored original timeline layout, filters, prior MPs, and v1.05 click/panel behaviour" }
        ]
      },
      {
        version: "v1.05",
        date: "23 Aug 2026",
        items: [
          { type: "fixed", text: "MP cards back under timeline descriptions (z-index 10–15; sticky era 25)" },
          { type: "fixed", text: "Sticky era-bands no longer steal clicks (pointer-events none)" },
          { type: "fixed", text: "Card tap/click opens #panel (expand remains hover/hold only)" }
        ]
      },
      {
        version: "v1.04",
        date: "23 Aug 2026",
        items: [
          { type: "fixed", text: "Prior/top-lane cards were under sticky era layer (z 25) with clickable era-bands — cards now z-index 30+" },
          { type: "fixed", text: "One identical el.onclick open path for every mp-node (prior and current)" }
        ]
      },
      {
        version: "v1.03",
        date: "23 Aug 2026",
        items: [
          { type: "fixed", text: "openPanel opens #panel immediately then fills content — prior PMs (e.g. Helen Clark) no longer fail silently" },
          { type: "fixed", text: "HTML-escaped notes/evidence; safer badge/stance rendering for all members" }
        ]
      },
      {
        version: "v1.02",
        date: "23 Aug 2026",
        items: [
          { type: "fixed", text: "detail-panel ghost-close blocked for 600ms after open (prior cards were opening then instantly closing)" },
          { type: "fixed", text: "openPanel try/catch always shows panel; document capture-phase click/touch opens any mp-node" }
        ]
      },
      {
        version: "v1.01",
        date: "23 Aug 2026",
        items: [
          { type: "fixed", text: "Prior MP cards open detail panel via timeline event delegation (click + touch)" },
          { type: "fixed", text: "openPanel always loads master mps[] record so prior badgesSection + Votes & stance appear" },
          { type: "feature", text: "badgesSection always rendered; scrolls into view when a card opens" }
        ]
      },
      {
        version: "v1.00",
        date: "23 Aug 2026",
        items: [
          { type: "feature", text: "Prior PMs (Muldoon–Clark) now have policy badges + Votes & stance detail like sitting MPs" },
          { type: "feature", text: "Detail panel always shows Votes & stance and Policy badges sections for every member" }
        ]
      },
      {
        version: "v0.99",
        date: "23 Aug 2026",
        items: [
          { type: "fixed", text: "Prior MP cards open like current MPs — shared click/touch handler, child pointer-events none" },
          { type: "fixed", text: "openPanel shows details before re-layout so prior cards cannot fail silently" }
        ]
      },
      {
        version: "v0.98",
        date: "23 Aug 2026",
        items: [
          { type: "fixed", text: "Muldoon, Palmer, Bolger portraits re-generated in simple chibi/RPG sprite style matching other MPs" },
          { type: "fixed", text: "Mobile card open via Pointer Events + touch-action: manipulation (prior and all cards)" }
        ]
      },
      {
        version: "v0.97",
        date: "23 Aug 2026",
        items: [
          { type: "feature", text: "Prior PM portraits regenerated in chibi/pixel avatar style matching sitting MPs (128×128)" },
          { type: "feature", text: "Statistics block on every MP detail panel (birth, entry, years, party, rank, role, prior)" },
          { type: "fixed", text: "Prior cards fully clickable (onclick, capture click, keyboard, touch)" }
        ]
      },
      {
        version: "v0.96",
        date: "23 Aug 2026",
        items: [
          { type: "fixed", text: "Prior cards clickable (onclick + capture click, prior z-index)" },
          { type: "feature", text: "Historical PM portraits from real photos (Muldoon–Clark), card-sized JPEG sprites" },
          { type: "feature", text: "Richer biographical notes for all prior PMs from 1975" }
        ]
      },
      {
        version: "v0.95",
        date: "23 Aug 2026",
        items: [
          { type: "fixed", text: "Born mode: PM cards use standard background (no gold shimmer until Served-mode PM card)" }
        ]
      },
      {
        version: "v0.94",
        date: "23 Aug 2026",
        items: [
          { type: "feature", text: "Designed prior-PM cards from 1975: Muldoon, Lange, Palmer, Moore, Bolger, Shipley, Clark" },
          { type: "feature", text: "PRIME_MINISTERS + axis portraits extended from 1975; dual Served cards + shimmer when PM" }
        ]
      },
      {
        version: "v0.93",
        date: "23 Aug 2026",
        items: [
          { type: "feature", text: "Lane packing: PM cards top rows, then ranks 1–4; no overlap (push down)" },
          { type: "fixed", text: "PM cards open on click/tap (capture phase + touch)" }
        ]
      },
      {
        version: "v0.92",
        date: "23 Aug 2026",
        items: [
          { type: "fixed", text: "Prior PM cards open again on click/tap" },
          { type: "fixed", text: "PM card meta shows term range (e.g. 2017 – 2023) instead of “PM from ####”" }
        ]
      },
      {
        version: "v0.91",
        date: "22 Aug 2026",
        items: [
          { type: "feature", text: "PMs get two Served-mode cards: standard at first election, gold shimmer at PM start, joined by white curve" }
        ]
      },
      {
        version: "v0.90",
        date: "22 Aug 2026",
        items: [
          { type: "fixed", text: "Removed ~1MB duplicate opposed-badge images; opposed state via CSS grey + red slash" },
          { type: "feature", text: "Streamlined badge rendering and shared focus styles" },
          { type: "fixed", text: "applyFilters error boundary so a render fault cannot blank the app silently" }
        ]
      },
      {
        version: "v0.89",
        date: "22 Aug 2026",
        items: [
          { type: "fixed", text: "Restored data display from v0.86 (removed heavy touch rewrites that blanked the timeline)" },
          { type: "fixed", text: "PM shimmer slowed 80% (16s)" },
          { type: "feature", text: "Mini PM portraits on date axes with click-to-open" },
          { type: "fixed", text: "Safer card open when resolving baseId" }
        ]
      },
      {
        version: "v0.86",
        date: "22 Aug 2026",
        items: [
          { type: "feature", text: "Trial: Prime Minister cards use animated gold shimmer background (Luxon, Ardern, Key, English, Hipkins)" }
        ]
      },
      {
        version: "v0.85",
        date: "22 Aug 2026",
        items: [
          { type: "fixed", text: "Max zoom-out limited to 300% (scale ≥ 1/3)" },
          { type: "fixed", text: "Vertical guides meet bottom date axis with no gap" },
          { type: "feature", text: "Card slide ease-in-out: slow start, accelerate, ease into place" },
          { type: "feature", text: "Party-link curves fade in and out instead of popping" }
        ]
      },
      {
        version: "v0.84",
        date: "22 Aug 2026",
        items: [
          { type: "fixed", text: "Bottom date axis sticks to footer; chart stretches so zoomed content meets it" },
          { type: "fixed", text: "Bottom axis horizontal scale matches card zoom" },
          { type: "fixed", text: "Born/Served toggle preserves zoom level and scroll position" }
        ]
      },
      {
        version: "v0.83",
        date: "22 Aug 2026",
        items: [
          { type: "feature", text: "Decade descriptions, top/bottom date axes, and vertical guides zoom with MP cards" },
          { type: "fixed", text: "Vertical decade lines span from top date strip to bottom date strip at every zoom" }
        ]
      },
      {
        version: "v0.82",
        date: "22 Aug 2026",
        items: [
          { type: "feature", text: "Top date axis stays with decade descriptions; bottom date axis fixed to footer (not affected by zoom)" },
          { type: "feature", text: "Zoom scales cards/links only; min zoom 0.2× (500% out), max 1× original" },
          { type: "fixed", text: "Card slide duration slowed 20% (1.26s)" }
        ]
      },
      {
        version: "v0.81",
        date: "22 Aug 2026",
        items: [
          { type: "feature", text: "Served→Born: remove link lines, then extra party cards, then slide remaining cards" },
          { type: "fixed", text: "Zoomed-out timeline pins bottom date axis to the footer (no gap)" }
        ]
      },
      {
        version: "v0.80",
        date: "22 Aug 2026",
        items: [
          { type: "fixed", text: "Zoom in caps at original card size (1×); zoom out caps at full timeline width fit" },
          { type: "fixed", text: "Multi-party cards only in Served mode; Born mode shows one card per MP" }
        ]
      },
      {
        version: "v0.79",
        date: "22 Aug 2026",
        items: [
          { type: "feature", text: "Pinch-zoom (and ctrl/meta + wheel) on the timeline" },
          { type: "fixed", text: "Party-link curves touch card edges (measured from live card boxes)" },
          { type: "fixed", text: "Party-link curves render underneath MP cards" }
        ]
      },
      {
        version: "v0.78",
        date: "22 Aug 2026",
        items: [
          { type: "fixed", text: "Rebuilt party-change cards without breaking timeline (duplicate const bug in prior attempt)" },
          { type: "feature", text: "Party switchers get one card per affiliation with curved white mid-side links" }
        ]
      },
      {
        version: "v0.77",
        date: "22 Aug 2026",
        items: [
          { type: "fixed", text: "Born/Served toggle works correctly while Prior filter is on (uses same filtered set)" },
          { type: "feature", text: "Thin coalition/support-partner colour strip under the government party axis" }
        ]
      },
      {
        version: "v0.76",
        date: "22 Aug 2026",
        items: [
          { type: "fixed", text: "Timeline height grows with lane count so the bottom date line always sits under all MP cards (Born and Served)" }
        ]
      },
      {
        version: "v0.75",
        date: "22 Aug 2026",
        items: [
          { type: "fixed", text: "Born/Served toggle padding balanced (Born left halved; matching pad on Served right)" },
          { type: "fixed", text: "Lane packing uses active position year so Served mode cards (e.g. Davidson / Seymour) no longer overlap" },
          { type: "feature", text: "Mode change animates both horizontal and vertical lane moves" }
        ]
      },
      {
        version: "v0.74",
        date: "22 Aug 2026",
        items: [
          { type: "fixed", text: "Restored timeline visibility after broken maxYear scope in prior v0.74 attempt" },
          { type: "feature", text: "Born/Served slide slower and smoother (~1.05s)" },
          { type: "feature", text: "Timeline maxYear dynamically extends through end of next future decade" }
        ]
      },
      {
        version: "v0.73",
        date: "22 Aug 2026",
        items: [
          { type: "fixed", text: "Timeline axes, decade lines, and party-in-power colours extended through 2030 (aligned with decade descriptors)" },
          { type: "feature", text: "Born / Served slide toggle — positions by birth year or first entry to Parliament" },
          { type: "feature", text: "MP cards animate horizontally when switching Born ↔ Served" }
        ]
      },
      {
        version: "v0.72",
        date: "22 Aug 2026",
        items: [
          { type: "feature", text: "Year-number axis strip coloured by party in power (Labour red / National blue)" }
        ]
      },
      {
        version: "v0.71",
        date: "22 Aug 2026",
        items: [
          { type: "fixed", text: "Expanded MP cards no longer float above sticky decade headers / menus (z-index stack corrected)" },
          { type: "feature", text: "Decade popup: year headings with bulleted law reforms" },
          { type: "feature", text: "Decade popup: “By decade’s end” section for what was still unchanged or unthinkable" }
        ]
      },
      {
        version: "v0.70",
        date: "22 Aug 2026",
        items: [
          { type: "feature", text: "Beehive logo redesigned as recognisable stepped circular Executive Wing" },
          { type: "feature", text: "Decade segments clickable with accent border highlight (no scale)" },
          { type: "feature", text: "Decade detail popup with politics, society, law, and extra markers" }
        ]
      },
      {
        version: "v0.69",
        date: "22 Aug 2026",
        items: [
          { type: "feature", text: "Footer credit: Designed by FlavourThink Ltd. Copyright © 2026" },
          { type: "feature", text: "Beehive / NZ Parliament icon logo before title in rounded square" },
          { type: "feature", text: "MP cards scale to 125% on hover / hold" },
          { type: "fixed", text: "Disabled context menu on long-press / right-click of MP cards" },
          { type: "fixed", text: "Release log close (×) control clarified top-right" }
        ]
      },
      {
        version: "v0.68",
        date: "22 Aug 2026",
        items: [
          { type: "feature", text: "Version & release log button in hamburger menu" },
          { type: "feature", text: "Donate button top-right on desktop" },
          { type: "feature", text: "Hamburger pinned top-right on mobile" },
          { type: "feature", text: "MP cards scale 20% on hover / touch-hold with swift animation" },
          { type: "feature", text: "Initial view centres on MPs born ~40 years ago" },
          { type: "fixed", text: "Footer taller, cleaner, distinctly darker background" }
        ]
      },
      {
        version: "v0.67",
        date: "17 Aug 2026",
        items: [
          { type: "feature", text: "Clickable version chip showing latest version and release date" },
          { type: "feature", text: "In-app release log (Feature / Fixed) for every version from the baseline" }
        ]
      },
      {
        version: "v0.66",
        date: "16 Aug 2026",
        items: [
          { type: "feature", text: "Phone hamburger menu with Donate" },
          { type: "feature", text: "Donate info page (site funded entirely by donations)" },
          { type: "feature", text: "Donation button linked to configurable DONATE_URL" },
          { type: "fixed", text: "Reset button wraps to next line on narrow phone screens" }
        ]
      },
      {
        version: "v0.65",
        date: "16 Aug 2026",
        items: [
          { type: "feature", text: "Era note font size set to 0.7rem" }
        ]
      },
      {
        version: "v0.64",
        date: "16 Aug 2026",
        items: [
          { type: "feature", text: "Decade description fonts increased by ~1pt" }
        ]
      },
      {
        version: "v0.63",
        date: "16 Aug 2026",
        items: [
          { type: "fixed", text: "End of Life Choice badge scaled to match other pin sizes" }
        ]
      },
      {
        version: "v0.62",
        date: "16 Aug 2026",
        items: [
          { type: "feature", text: "Opposed badges: greyed-out pins with red strike-through for votes against" },
          { type: "feature", text: "Expanded card shows colour and/or opposed badges by stance" }
        ]
      },
      {
        version: "v0.61",
        date: "16 Aug 2026",
        items: [
          { type: "feature", text: "Detail card shows every decade overlapping formative years (ages ≈15–25)" },
          { type: "fixed", text: "Removed “Recorded positions relative to later liberalising changes” section" }
        ]
      },
      {
        version: "v0.60",
        date: "16 Aug 2026",
        items: [
          { type: "feature", text: "End of Life Choice badge artwork updated (black background stripped)" }
        ]
      },
      {
        version: "v0.59",
        date: "16 Aug 2026",
        items: [
          { type: "feature", text: "End of Life Choice badge on David Seymour (bill sponsor)" },
          { type: "fixed", text: "Terminology: “rape” reworded to “sexual assault” in era notes" }
        ]
      },
      {
        version: "v0.58",
        date: "16 Aug 2026",
        items: [
          { type: "feature", text: "End of Life Choice enamel badge + opposed variant added" }
        ]
      },
      {
        version: "v0.57",
        date: "16 Aug 2026",
        items: [
          { type: "fixed", text: "Restored full atlas build after workspace file loss" },
          { type: "feature", text: "Timeline span, axes, decade bars, and 30 enamel badges restored" }
        ]
      },
      {
        version: "v0.56",
        date: "16 Aug 2026",
        items: [
          { type: "fixed", text: "Timeline, axes, and vertical bars extended through 2026 (no longer stop at 2010)" }
        ]
      },
      {
        version: "v0.55",
        date: "16 Aug 2026",
        items: [
          { type: "feature", text: "Baseline locked: generational atlas, enamel badges, prior toggle, lane layout" }
        ]
      }
    ];

    function renderReleaseLog() {
      const body = document.getElementById("releaseLogBody");
      body.innerHTML = RELEASE_LOG.map((entry, i) => {
        const items = entry.items.map(it => {
          const tag = it.type === "fixed"
            ? '<span class="rel-tag fixed">Fixed</span>'
            : it.type === "upgraded"
            ? '<span class="rel-tag upgraded">Upgraded</span>'
            : '<span class="rel-tag feature">Feature added</span>';
          return `<li>${tag}${it.text}</li>`;
        }).join("");
        const cur = i === 0 ? " current" : "";
        return `<div class="rel-entry${cur}">
          <div class="rel-head">
            <span class="rel-ver">${entry.version}</span>
            <span class="rel-date">${entry.date}</span>
          </div>
          <ul>${items}</ul>
        </div>`;
      }).join("");
    }

    
    function openEraDetail(era) {
      if (window.atlasPush) window.atlasPush("era");
      document.querySelectorAll(".era-band.active").forEach(el => el.classList.remove("active"));
      const active = document.querySelector('.era-band[data-era-id="' + era.id + '"]');
      if (active) active.classList.add("active");

      const spot = (typeof ERA_SPOTLIGHT !== "undefined" && ERA_SPOTLIGHT[era.id]) || {};
      document.getElementById("eraDetailTitle").textContent = era.label;
      document.getElementById("eraDetailYears").textContent =
        era.start + "–" + era.end + " · formative climate for people coming of age in this decade";

      const reforms = spot.reforms || [];
      let reformsHtml = "";
      if (reforms.length) {
        reformsHtml = reforms.map(r => {
          const items = (r.items || []).map(i => "<li>" + i + "</li>").join("");
          return `<h3 class="era-year">${r.year}</h3><ul>${items}</ul>`;
        }).join("");
      } else {
        reformsHtml = "<p>No structured reform list for this decade yet.</p>";
      }

      const byEnd = (spot.byDecadesEnd || []).map(x => "<li>" + x + "</li>").join("");
      const byEndHtml = byEnd
        ? `<h3 class="era-by-end">By decade’s end</h3><ul class="by-end-list">${byEnd}</ul>`
        : "";

      document.getElementById("eraDetailBody").innerHTML = `
        <p class="era-lead">${era.note}</p>
        <h3>Law reforms &amp; markers</h3>
        ${reformsHtml}
        ${byEndHtml}
        <p style="margin-top:0.85rem;font-size:0.78rem;opacity:0.85">Mainstream conditions of the time — not a personal biography of any MP.</p>
      `;
      document.getElementById("eraDetail").classList.add("open");
    }
    function closeEraDetail() {
      document.getElementById("eraDetail").classList.remove("open");
      document.querySelectorAll(".era-band.active").forEach(el => el.classList.remove("active"));
      if (window.atlasBack) window.atlasBack();
    }

    function openReleaseLog() {
      renderReleaseLog();
      document.getElementById("releaseLog").classList.add("open");
      if (window.atlasPush) window.atlasPush("release");
    }
    function closeReleaseLog() {
      document.getElementById("releaseLog").classList.remove("open");
      if (window.atlasBack) window.atlasBack();
    }

    document.getElementById("versionChip").addEventListener("click", openReleaseLog);
    const closeEraBtn = document.getElementById("closeEraDetail");
    if (closeEraBtn) closeEraBtn.addEventListener("click", closeEraDetail);
    const eraDetailEl = document.getElementById("eraDetail");
    if (eraDetailEl) eraDetailEl.addEventListener("click", (e) => { if (e.target.id === "eraDetail") closeEraDetail(); });

    document.getElementById("closeReleaseLog").addEventListener("click", closeReleaseLog);
    document.getElementById("releaseLog").addEventListener("click", (e) => {
      if (e.target.id === "releaseLog") closeReleaseLog();
    });
    // sync chip from constants
    document.getElementById("versionLabel").textContent = BUILD;
    document.getElementById("versionDate").textContent = "· " + RELEASE_DATE;

    // --- Mobile hamburger + donate ---
    // Set your live donation link here (Ko-fi, PayPal.me, Stripe Payment Link, etc.)
    const DONATE_URL = "https://ko-fi.com/"; // TODO: replace with your real donation URL

    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const menuBackdrop = document.getElementById("menuBackdrop");
    const menuClose = document.getElementById("menuClose");
    const menuDonateBtn = document.getElementById("menuDonateBtn");
    const donatePage = document.getElementById("donatePage");
    const closeDonate = document.getElementById("closeDonate");
    const donateDismiss = document.getElementById("donateDismiss");
    const donatePrimaryBtn = document.getElementById("donatePrimaryBtn");

    function openMenu() {
      mobileMenu.classList.add("open");
      menuBackdrop.classList.add("open");
      document.body.classList.add("menu-open");
      hamburgerBtn.setAttribute("aria-expanded", "true");
      try {
        document.body.appendChild(menuBackdrop);
        document.body.appendChild(mobileMenu);
        mobileMenu.style.position = "fixed";
        mobileMenu.style.top = "5px";
        mobileMenu.style.right = "5px";
        mobileMenu.style.zIndex = "600";
      } catch (e) {}
    }
    function closeMenu() {
      mobileMenu.classList.remove("open");
      document.body.classList.remove("menu-open");
      menuBackdrop.classList.remove("open");
      hamburgerBtn.setAttribute("aria-expanded", "false");
    }
    function openDonatePage() {
      closeMenu();
      try { document.body.appendChild(donatePage); } catch (e) {}
      donatePage.classList.add("open");
      document.documentElement.classList.add("overlay-open");
      if (window.atlasPush) window.atlasPush("donate");
      if (DONATE_URL && DONATE_URL !== "https://ko-fi.com/") {
        donatePrimaryBtn.href = DONATE_URL;
        donatePrimaryBtn.textContent = "Donate now";
      } else if (DONATE_URL) {
        donatePrimaryBtn.href = DONATE_URL;
      }
    }
    function closeDonatePage() {
      if (donatePage) donatePage.classList.remove("open");
      document.documentElement.classList.remove("overlay-open");
      try { if (window.atlasBack) window.atlasBack(); } catch (e) {}
    }

    hamburgerBtn.addEventListener("click", () => {
      if (mobileMenu.classList.contains("open")) closeMenu();
      else openMenu();
    });
    menuClose.addEventListener("click", closeMenu);
    menuBackdrop.addEventListener("click", closeMenu);
    menuDonateBtn.addEventListener("click", openDonatePage);
    const desktopDonateBtn = document.getElementById("desktopDonateBtn");
    if (desktopDonateBtn) desktopDonateBtn.addEventListener("click", openDonatePage);
    const menuVersionBtn = document.getElementById("menuVersionBtn");
    if (menuVersionBtn) menuVersionBtn.addEventListener("click", () => { closeMenu(); openReleaseLog(); });

    closeDonate.addEventListener("click", closeDonatePage);
    donateDismiss.addEventListener("click", closeDonatePage);
    donatePage.addEventListener("click", (e) => {
      if (e.target === donatePage) closeDonatePage();
    });
    donatePrimaryBtn.addEventListener("click", (e) => {
      if (!DONATE_URL || DONATE_URL === "#") {
        e.preventDefault();
        alert("Donation link not configured yet. Set DONATE_URL in the page script.");
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { closeMenu(); closeDonatePage(); closeReleaseLog(); closeEraDetail(); closeFeaturePage(); closeGenDetail(); }
    });


    (function setupFilterToggle(){
      var btn = document.getElementById("filterToggleBtn");
      var badge = document.getElementById("filterBadge");
      function isActive() {
        var p = document.getElementById("partyFilter");
        var g = document.getElementById("genFilter");
        var prior = document.getElementById("priorToggle");
        return (p && p.value !== "all") || (g && g.value !== "all") || (prior && prior.checked) || positionMode === "served";
      }
      window.syncFilterBadge = function() {
        if (!badge) return;
        if (isActive()) badge.removeAttribute("hidden");
        else badge.setAttribute("hidden", "");
      };
      if (btn) {
        btn.addEventListener("click", function(ev){
          ev.preventDefault();
          ev.stopPropagation();
          document.body.classList.toggle("filters-open");
          btn.setAttribute("aria-expanded", document.body.classList.contains("filters-open") ? "true" : "false");
          if (window.pinHeaderSpace) pinHeaderSpace();
        });
      }
      window.syncFilterBadge();
    })();

    
    (function hideHansardStickBoot(){
      var s = document.getElementById("hansardStick");
      if (s) { s.classList.remove("on"); s.style.display = "none"; }
    })();
    (function floatTitlebars(){
      function attach(scroller, closeBtn, titleEl, closeFn) {
        if (!scroller) return;
        var bar = document.createElement("div");
        bar.className = "float-titlebar";
        bar.innerHTML = '<span class="ft-title"></span><button type="button" class="ft-close" aria-label="Close">×</button>';
        scroller.insertBefore(bar, scroller.firstChild);
        var tEl = bar.querySelector(".ft-title");
        bar.querySelector(".ft-close").addEventListener("click", function(){
          if (closeFn) closeFn();
          else if (closeBtn) closeBtn.click();
        });
        function sync() {
          var title = "";
          if (typeof titleEl === "function") title = titleEl() || "";
          else if (titleEl) title = titleEl.textContent || "";
          tEl.textContent = title;
          var isHansardPicker = scroller.classList.contains("hansard-card") && (!document.getElementById("hansardRead") || document.getElementById("hansardRead").hidden);
          bar.classList.toggle("on", !isHansardPicker);
        }
        scroller.addEventListener("scroll", sync, { passive: true });
        window.addEventListener("resize", sync);
        sync();
        return sync;
      }
      window.attachFloatTitle = attach;
      var panel = document.getElementById("panel");
      var pc = document.getElementById("panelContent");
      if (pc) attach(pc, document.getElementById("closePanel"), function(){
        var h = pc.querySelector("h2");
        return h ? h.textContent : "Details";
      }, function(){ if (window.closePanel) closePanel(); else document.getElementById("closePanel").click(); });
      var donateCard = document.querySelector("#donatePage .donate-card");
      if (donateCard) attach(donateCard, document.getElementById("closeDonate"), document.getElementById("donateTitle"));
      var feat = document.querySelector("#featurePage .donate-card");
      if (feat) attach(feat, document.getElementById("closeFeature"), document.getElementById("featureTitle"));
      var rel = document.querySelector(".release-log-card");
      if (rel) attach(rel, document.getElementById("closeReleaseLog") || document.querySelector(".close-rel"), document.getElementById("releaseLogTitle"));
      var era = document.querySelector(".era-detail-card");
      if (era) attach(era, document.getElementById("closeEraDetail"), document.getElementById("eraDetailTitle"));
    })();

    document.getElementById("resetFilters").addEventListener("click", function(ev) {
      if (ev) { ev.preventDefault(); ev.stopPropagation(); }
      window.__mapScrollEnabled = false;
      document.getElementById("partyFilter").value = "all";
      document.getElementById("genFilter").value = "all";
      var prior = document.getElementById("priorToggle");
      if (prior) prior.checked = false;
      positionMode = "born";
      document.body.classList.remove("view-served");
      document.body.classList.add("view-born");
      var mode = document.getElementById("modeToggle");
      if (mode) mode.setAttribute("aria-pressed", "false");
      var lb = document.getElementById("modeLabelBorn");
      var ls = document.getElementById("modeLabelServed");
      if (lb) lb.classList.add("on");
      if (ls) ls.classList.remove("on");
  
    document.querySelectorAll(".legend-party").forEach(function(btn){
      btn.addEventListener("click", function(ev){
        ev.preventDefault();
        ev.stopPropagation();
        var name = btn.getAttribute("data-party");
        if (name && window.openPartyPanel) window.openPartyPanel(name);
      }, true);
    });

    applyFilters(false);
      setTimeout(function(){ window.__mapScrollEnabled = true; }, 400);
    });

    document.body.classList.toggle("view-served", positionMode === "served");
    document.body.classList.toggle("view-born", positionMode !== "served");

    window.__mapScrollEnabled = true;
    
    const FEATURE_BOARD = [
      { id: "edge-scroll", title: "Edge-of-window scrolling", detail: "Move the pointer to a screen edge to pan the timeline.", votes: 6 },
      { id: "party-briefing", title: "Party briefing from the legend", detail: "Open 2026 offers and the last seven elections from a legend chip.", votes: 9 },
      { id: "gen-dot", title: "Generation wash → dot in Served", detail: "Born fills the card; Served keeps a generation dot by the name.", votes: 4 }
    ];
    const FEAT_VOTE_KEY = "pga-feat-votes";
    const FEAT_PEND_KEY = "pga-feat-pending";
    function featVotes() {
      try { return JSON.parse(localStorage.getItem(FEAT_VOTE_KEY) || "{}"); } catch (e) { return {}; }
    }
    function featPending() {
      try { return JSON.parse(localStorage.getItem(FEAT_PEND_KEY) || "[]"); } catch (e) { return []; }
    }
    function renderFeatureBoard() {
      var voted = featVotes();
      var approved = document.getElementById("featApproved");
      var pendingBox = document.getElementById("featPending");
      if (approved) {
        approved.innerHTML = FEATURE_BOARD.map(function(f) {
          var on = !!voted[f.id];
          var n = f.votes + (on ? 1 : 0);
          return '<li><button type="button" class="feat-vote' + (on ? " on" : "") + '" data-feat="' + f.id + '">▲ ' + n +
            '</button><div class="feat-copy"><strong>' + f.title + "</strong><span>" + f.detail + "</span></div></li>";
        }).join("");
      }
      if (pendingBox) {
        var pend = featPending();
        pendingBox.innerHTML = pend.length
          ? pend.map(function(f) {
              return '<li><button type="button" class="feat-vote" disabled>Pending</button><div class="feat-copy"><strong>' +
                f.title + "</strong><span>" + f.detail + "</span></div></li>";
            }).join("")
          : '<li class="poll-legend">Nothing waiting on this device.</li>';
      }
    }
    function openFeaturePage() {
      closeMenu();
      renderFeatureBoard();
      var page = document.getElementById("featurePage");
      if (page) page.classList.add("open");
    }
    function closeFeaturePage() {
      var page = document.getElementById("featurePage");
      if (page) page.classList.remove("open");
    }
    document.addEventListener("click", function(ev) {
      var btn = ev.target && ev.target.closest && ev.target.closest(".feat-vote");
      if (!btn || btn.disabled) return;
      var id = btn.getAttribute("data-feat");
      if (!id) return;
      var voted = featVotes();
      if (voted[id]) delete voted[id];
      else voted[id] = 1;
      try { localStorage.setItem(FEAT_VOTE_KEY, JSON.stringify(voted)); } catch (e) {}
      renderFeatureBoard();
    });
    var featForm = document.getElementById("featureForm");
    if (featForm) {
      featForm.addEventListener("submit", function(ev) {
        ev.preventDefault();
        var title = (document.getElementById("featTitle").value || "").trim();
        var detail = (document.getElementById("featDetail").value || "").trim();
        if (!title || !detail) return;
        var pend = featPending();
        pend.push({ title: title, detail: detail, at: Date.now() });
        try { localStorage.setItem(FEAT_PEND_KEY, JSON.stringify(pend)); } catch (e) {}
        featForm.reset();
        var thanks = document.getElementById("featThanks");
        if (thanks) thanks.hidden = false;
        renderFeatureBoard();
        var gh = "https://github.com/FlavourThink/nz-politics-workers-collection/issues/new?labels=feature-request&title=" +
          encodeURIComponent(title) + "&body=" + encodeURIComponent(detail + "\n\n— sent from Parliament Atlas " + (window.BUILD || ""));
        window.open(gh, "_blank", "noopener");
      });
    }
    var menuFeatureBtn = document.getElementById("menuFeatureBtn");
    function loadGithubFeatures() {
      var box = document.getElementById("featGithubList");
      if (!box) return;
      var url = "https://api.github.com/repos/FlavourThink/nz-politics-workers-collection/issues?state=open&labels=feature-request&per_page=20";
      fetch(url, { headers: { Accept: "application/vnd.github+json" } }).then(function(r){ return r.json(); }).then(function(rows){
        if (!Array.isArray(rows) || !rows.length) {
          box.innerHTML = '<li class="poll-legend">No open <code>feature-request</code> issues yet. Use “Open a GitHub request”.</li>';
          return;
        }
        box.innerHTML = rows.map(function(it){
          return '<li><a href="' + it.html_url + '" target="_blank" rel="noopener">#' + it.number + " " + it.title + "</a></li>";
        }).join("");
      }).catch(function(){
        box.innerHTML = '<li class="poll-legend">Could not read GitHub right now. Open the repo issues page instead.</li>';
      });
    }
    var _openFeat = openFeaturePage;
    openFeaturePage = function(){ _openFeat(); loadGithubFeatures(); };
    if (menuFeatureBtn) menuFeatureBtn.addEventListener("click", openFeaturePage);


    document.addEventListener("click", function(ev){
      var t = ev.target;
      if (!t) return;
      if (t.id === "mpHansardBtn" || t.id === "partyHansardBtn" || (t.closest && t.closest(".hansard-icon-btn"))) {
        ev.preventDefault();
        var filter = "";
        var h2 = document.querySelector("#panelContent h2");
        if (t.id === "mpHansardBtn" && h2) filter = h2.textContent.replace(/[‹›]/g,"").trim();
        if (t.id === "partyHansardBtn" && h2) filter = "";
        if (window.openHansardFor) window.openHansardFor(filter);
      }
    });

    window.fmtHansardDay = function(iso) {
      var p = String(iso || "").split("-");
      if (p.length < 3) return iso;
      var dt = new Date(Date.UTC(+p[0], (+p[1] || 1) - 1, +p[2] || 1));
      var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
      var mons = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      var dd = ("0" + dt.getUTCDate()).slice(-2);
      var yy = String(dt.getUTCFullYear()).slice(-2);
      return days[dt.getUTCDay()] + " " + dd + "/" + mons[dt.getUTCMonth()] + "/" + yy;
    };
    window.hansardFace = function(who) {
      var raw = String(who || "");
      var s = raw.toLowerCase().replace(/o'/g, "o").replace(/ū/g, "u").replace(/ā/g, "a").replace(/ē/g, "e").replace(/ī/g, "i").replace(/ō/g, "o");
      s = s.replace(/[^a-z\s\-]/g, " ").replace(/\s+/g, " ").trim();
      s = s.replace(/^(hon|rt hon|dr|mr|mrs|ms|the|sir)\s+/g, "");
      var HEX = { National:"#00529F", Labour:"#d82a20", Green:"#098137", ACT:"#e6c200", "NZ First":"#7b8cff", "Te Pāti Māori":"#9b1b1b", Clerk:"#6b7280", Speaker:"#c9a227" };
      var ALIAS = {
        "simon watts":["simon-watts","National"],
        "louise upston":["louise-upston","National"],
        "dan bidois":["dan-bidois","National"],
        "daniel bidois":["dan-bidois","National"],
        "greg oconnor":["greg-oconnor","Labour"],
        "greg o connor":["greg-oconnor","Labour"],
        "paul goldsmith":["paul-goldsmith","National"],
        "suze redmayne":["suze-redmayne","National"],
        "susan redmayne":["suze-redmayne","National"],
        "tracey mclellan":["tracey-mclellan","Labour"],
        "tracy mclellan":["tracey-mclellan","Labour"],
        "rachel brooking":["rachel-brooking","Labour"],
        "arena williams":["arena-williams","Labour"],
        "lan pham":["lan-pham","Green"],
        "mark mitchell":["mark-mitchell","National"],
        "willow jean prime":["willow-jean-prime","Labour"],
        "simeon brown":["simeon-brown","National"],
        "steve abel":["steve-abel","Green"],
        "camilla belich":["camilla-belich","Labour"],
        "tamatha paul":["tamatha-paul","Green"],
        "tama potaka":["tama-potaka","National"],
        "simon court":["simon-court","ACT"],
        "lawrence xu nan":["lawrence-xu-nan","Green"],
        "lawrence xunan":["lawrence-xu-nan","Green"],
        "xu nan":["lawrence-xu-nan","Green"],
        "cameron brewer":["cameron-brewer","National"],
        "ayesha verrall":["ayesha-verrall","Labour"],
        "huhana lyndon":["huhana-lyndon","Te Pāti Māori"],
        "barbara edmonds":["barbara-edmonds","Labour"],
        "ginny andersen":["ginny-andersen","Labour"],
        "megan woods":["megan-woods","Labour"],
        "nicola grigg":["nicola-grigg","National"],
        "francisco hernandez":["francisco-hernandez","Green"],
        "penny simmonds":["penny-simmonds","National"],
        "todd mcclay":["todd-mcclay","National"],
        "christopher luxon":["christopher-luxon","National"],
        "chris luxon":["christopher-luxon","National"],
        "nicola willis":["nicola-willis","National"],
        "chris bishop":["chris-bishop","National"],
        "chris hipkins":["chris-hipkins","Labour"],
        "winston peters":["winston-peters","NZ First"],
        "david seymour":["david-seymour","ACT"],
        "jo luxton":["jo-luxton","Labour"],
        "matt doocey":["matt-doocey","National"],
        "cushla tangaere manuel":["cushla-tangaere-manuel","Labour"],
        "tangaere manuel":["cushla-tangaere-manuel","Labour"],
        "teanau tuiono":["teanau-tuiono","Green"],
        "damien oconnor":["damien-oconnor","Labour"],
        "damien o connor":["damien-oconnor","Labour"],
        "jenny salesa":["jenny-salesa","Labour"],
        "tom rutherford":["tom-rutherford","National"],
        "priyanca radhakrishnan":["priyanca-radhakrishnan","Labour"],
        "clerk":["clerk","Clerk"],
        "mike davidson":["mike-davidson","Green"],
        "michael davidson":["mike-davidson","Green"],
        "michael john davidson":["mike-davidson","Green"],
        "deborah russell":["deborah-russell","Labour"],
        "dr deborah russell":["deborah-russell","Labour"],
        "katie nimon":["katie-nimon","National"],
        "catherine wedd":["catherine-wedd","National"],
        "willow jean prime":["willow-jean-prime","Labour"],
        "willow-jean prime":["willow-jean-prime","Labour"],
        "speaker":["gerry-brownlee","Speaker"],
        "assistant speaker":["gerry-brownlee","Speaker"],
        "deputy speaker":["gerry-brownlee","Speaker"],
        "chairperson":["gerry-brownlee","Speaker"]
      };
      var key = "", party = "";
      if (ALIAS[s]) { key = ALIAS[s][0]; party = ALIAS[s][1]; }
      var last = s.split(" ").pop();
      function uniqueLast(token) {
        if (!token || token.length < 3) return "";
        var hits = [];
        Object.keys(ALIAS).forEach(function(a){
          if (a.split(" ").pop() === token) hits.push(ALIAS[a][0]);
        });
        if (SPRITE_DATA) Object.keys(SPRITE_DATA).forEach(function(k){
          if (k.split("-").pop() === token) hits.push(k);
        });
        var listU = window.mps || mps || [];
        for (var ui = 0; ui < listU.length; ui++) {
          var nm = String(listU[ui].name || "").toLowerCase().split(" ").pop();
          if (nm === token) hits.push(listU[ui].id);
        }
        hits = hits.filter(function(v, i, a){ return a.indexOf(v) === i; });
        return hits.length === 1 ? hits[0] : "";
      }
      if (!key && ALIAS[s]) { key = ALIAS[s][0]; party = ALIAS[s][1]; }
      if (!key) key = uniqueLast(last);
      if (!key) {
        var list = window.mps || mps || [];
        for (var i = 0; i < list.length; i++) {
          var n = String(list[i].name || "").toLowerCase().replace(/[^a-z\s\-]/g, " ").replace(/\s+/g, " ").trim();
          if (s === n) { key = list[i].id; party = list[i].party || party; break; }
        }
      }
      var src = (key && SPRITE_DATA && SPRITE_DATA[key]) || "";
      if (!src && key) {
        var list2 = window.mps || mps || [];
        for (var j = 0; j < list2.length; j++) {
          if (list2[j].id === key && (list2[j].sprite || list2[j].img)) { src = list2[j].sprite || list2[j].img; break; }
        }
      }
      var mpId = "";
      var list3 = window.mps || mps || [];
      for (var u = 0; u < list3.length; u++) {
        if (key && (list3[u].id === key || list3[u].id === key.replace(/-/g,""))) { mpId = list3[u].id; break; }
        var ln = String(list3[u].name||"").toLowerCase();
        if (s && (ln === s || ln.indexOf(s) !== -1 || s.indexOf(ln) !== -1)) { mpId = list3[u].id; break; }
      }
      return { src: src, party: party, color: HEX[party] || "#6b7280", id: mpId || key || "" };
    };
    window.portraitForHansard = function(who) {
      var f = window.hansardFace(who);
      return f && f.src || "";
    };

    function extractHansardVotes(doc) {
      function sectionBlob(sec) {
        var bits = [sec.heading || ""];
        (sec.items || []).forEach(function(it) {
          if (!it) return;
          if (it.text) bits.push(String(it.text));
          if (it.heading) bits.push(String(it.heading));
        });
        if (sec.text) bits.push(String(sec.text));
        if (sec.plain) bits.push(String(sec.plain));
        return bits.join("\n");
      }
      function prettyQuestion(raw) {
        var q = String(raw || "").replace(/\s+/g, " ").replace(/^the /i, "").replace(/\.$/, "").trim();
        var read = q.match(/^(.*bill)\s+be now read a (first|second|third) time/i);
        if (read) return read[1].replace(/\b\w/g, function(c){ return c.toUpperCase(); }).replace(/\s+Bill/i, " Bill") + " — " + read[2].toLowerCase() + " reading";
        if (/report be adopted/i.test(q)) return "Committee report adopted";
        if (/clauses? .*(agreed|stand part)/i.test(q)) return "Bill clauses agreed";
        if (/estimates of appropriation/i.test(q)) return "Budget estimates agreed";
        if (/referred to the .+ committee/i.test(q)) return q.charAt(0).toUpperCase() + q.slice(1);
        return q.charAt(0).toUpperCase() + q.slice(1);
      }
      function explain(v) {
        var bits = [];
        if (v.reading) {
          if (/first/.test(v.reading)) bits.push("First reading: the bill is introduced and sent on. It is not yet law.");
          else if (/second/.test(v.reading)) bits.push("Second reading: the House debates the idea of the bill.");
          else if (/third/.test(v.reading)) bits.push("Third reading: last House vote. If it passes here it goes for Royal assent.");
        }
        if (v.result === "Passed") bits.push("The motion carried. Ayes beat Noes (or no one called a party vote).");
        if (v.result === "Failed") bits.push("The motion did not carry. Noes beat Ayes.");
        if (v.ayes || v.noes) bits.push("Party vote: Ayes " + v.ayes + ", Noes " + v.noes + ".");
        if (v.heading) bits.push("From the sitting section “" + v.heading + "”.");
        return bits.join(" ");
      }
      var out = [];
      var sections = doc.sections || [];
      if (!sections.length && doc.plain_text) sections = [{ heading: "Full sitting text", items: [], plain: String(doc.plain_text) }];
      sections.forEach(function(sec, si) {
        var text = sectionBlob(sec);
        var heading = (sec.heading && sec.heading !== "Body") ? sec.heading : "";
        var re = /A party vote was called for on the question,\s*That ([^\n]{8,240}?)(?:\.|\n)/gi;
        var m;
        var found = false;
        while ((m = re.exec(text))) {
          found = true;
          var rest = text.slice(m.index, m.index + 800);
          var ayes = rest.match(/Ayes\s+(\d+)/i);
          var noes = rest.match(/Noes\s+(\d+)/i);
          var agreed = /Motion agreed to/i.test(rest);
          var failed = /Motion not agreed to|Motion negatived/i.test(rest);
          var reading = rest.match(/Bill read a (first|second|third) time/i);
          var result = failed ? "Failed" : (agreed || reading ? "Passed" : "Voted");
          var v = {
            section: si,
            heading: heading,
            question: prettyQuestion(m[1]),
            raw: m[1].replace(/\s+/g, " ").trim(),
            ayes: ayes ? ayes[1] : "",
            noes: noes ? noes[1] : "",
            result: result,
            reading: reading ? (reading[1].toLowerCase() + " reading") : ""
          };
          v.note = explain(v);
          out.push(v);
        }
        if (!found) {
          var simple = text.match(/Bill read a (first|second|third) time/gi) || [];
          simple.forEach(function(s) {
            var stage = (s.match(/first|second|third/i) || [""])[0].toLowerCase();
            var title = heading || prettyQuestion(s);
            var v = {
              section: si,
              heading: heading,
              question: title + (heading ? " — " + stage + " reading" : ""),
              raw: s,
              ayes: "",
              noes: "",
              result: "Passed",
              reading: stage + " reading"
            };
            v.note = explain(v);
            out.push(v);
          });
        }
      });
      var seen = {};
      return out.filter(function(v) {
        var k = v.result + "|" + v.question;
        if (seen[k]) return false;
        seen[k] = 1;
        return true;
      });
    }
    function hansardVotesHtml(doc) {
      var votes = extractHansardVotes(doc);
      window.__hansardVotes = votes;
      if (!votes.length) return "";
      var html = "<div class='hansard-votes'><h4>Votes and readings</h4><p class='vote-hint'>These are motions the House voted on in this sitting. Tap one for a short plain-English note, then jump to that part of the record.</p><ul>";
      votes.forEach(function(v, i) {
        html += "<li><button type='button' class='vote-jump' data-vote='" + i + "' data-sec='" + v.section + "'>";
        html += "<strong class='vote-" + v.result.toLowerCase() + "'>" + v.result + "</strong> ";
        html += "<span class='vote-q'>" + String(v.question).replace(/</g, "") + "</span>";
        if (v.ayes || v.noes) html += " <span class='vote-tally'>Ayes " + v.ayes + " · Noes " + v.noes + "</span>";
        if (v.reading) html += " <em>" + v.reading + "</em>";
        html += "</button></li>";
      });
      html += "</ul></div>";
      return html;
    }

    window.openHansardFor = function(filterName) {
      window.__hansardFilter = filterName || "";
      if (window.openHansardPage) window.openHansardPage();
    };
    (function(){
      var btn = document.getElementById("menuHansardBtn");
      var page = document.getElementById("hansardPage");
      var list = document.getElementById("hansardList");
      var read = document.getElementById("hansardRead");
      var close = document.getElementById("hansardClose");
      var INDEX = "https://raw.githubusercontent.com/FlavourThink/nz-hansard-scraper/main/data/hansard_index.json";
      var DAYS = "https://raw.githubusercontent.com/FlavourThink/nz-hansard-scraper/main/data/days/";
      function showList() {
        if (read) { read.hidden = true; read.innerHTML = ""; }
        if (list) list.hidden = false;
        var st = document.getElementById("hansardStick");
        if (st) { st.classList.remove("on"); st.setAttribute("hidden", ""); }
        document.body.classList.remove("hansard-reading");
      }
      function openPage() {
        window.openHansardPage = openPage;
        if (page) {
          page.classList.add("open");
          page.style.display = "flex";
          page.style.zIndex = "190";
        }
        if (window.atlasPush) window.atlasPush("hansard");
        
        var stick = document.getElementById("hansardStick");
        var card = page.querySelector(".hansard-card");
        function syncHansardStick() {
          if (!stick) return;
          var reading = !!(read && !read.hidden);
          var scrolled = false;
          if (card && card.scrollTop > 16) scrolled = true;
          if (page && page.scrollTop > 16) scrolled = true;
          var closeEl = document.getElementById("hansardClose");
          if (closeEl) {
            var cr = closeEl.getBoundingClientRect();
            if (cr.bottom < 8) scrolled = true;
          }
          var show = reading;
          stick.classList.toggle("on", show);
          if (show) stick.removeAttribute("hidden");
          else stick.setAttribute("hidden", "");
          document.body.classList.toggle("hansard-reading", reading);
          if (!reading) { stick.classList.remove("on"); stick.setAttribute("hidden", ""); }
          var h = read ? read.querySelector("h3") : null;
          var tt = stick.querySelector(".ft-title");
          if (tt) tt.textContent = h ? h.textContent : "Hansard";
        }
        if (card && !card._stickBound) {
          card.addEventListener("scroll", syncHansardStick, { passive: true });
          card._stickBound = true;
        }
        if (page && !page._stickBound) {
          page.addEventListener("scroll", syncHansardStick, { passive: true });
          page._stickBound = true;
        }
        var bk = document.getElementById("hansardStickBack");
        if (bk && !bk._bound) {
          bk.addEventListener("click", function(ev){ ev.preventDefault(); ev.stopPropagation(); showList(); });
          bk._bound = true;
        }
        var sc = document.getElementById("hansardStickClose");
        if (sc && !sc._bound) {
          sc.addEventListener("click", function(){
            var hp = document.getElementById("hansardPage");
            if (hp) { hp.classList.remove("open"); hp.style.display = ""; }
            document.getElementById("hansardStick").classList.remove("on");
            if (window.atlasBack) window.atlasBack();
          });
          sc._bound = true;
        }
        syncHansardStick();

        if (!list) return;
        list.innerHTML = "<p>Checking Hansard for new sittings…</p>";
        fetch(INDEX + "?t=" + Date.now(), {cache:"no-store"}).then(function(r){ return r.json(); }).then(function(data){
          var days = data.days || {};
          var ok = Object.keys(days).filter(function(d){ return days[d] && days[d].status === "ok"; }).sort().reverse();
          if (!ok.length) { list.innerHTML = "<p>No sitting files yet.</p>"; return; }
          window.__hansardDays = ok;
          var latest = ok[0];
          var view = latest ? new Date(latest + "T00:00:00") : new Date();
          function paintCal() {
            var have = {};
            ok.forEach(function(d){ have[d] = true; });
            var y = view.getFullYear(), m = view.getMonth();
            var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            var first = new Date(y, m, 1);
            var start = (first.getDay() + 6) % 7;
            var dim = new Date(y, m + 1, 0).getDate();
            var cells = "";
            for (var i = 0; i < start; i++) cells += "<span class=\"cal-cell empty\"></span>";
            for (var d = 1; d <= dim; d++) {
              var iso = y + "-" + String(m + 1).padStart(2,"0") + "-" + String(d).padStart(2,"0");
              var wk = new Date(y, m, d).getDay();
              var weekend = (wk === 0 || wk === 6) ? " weekend" : "";
              if (have[iso]) cells += "<button type=\"button\" class=\"cal-cell has-day\" data-hansard-day=\"" + iso + "\">" + d + "</button>";
              else cells += "<span class=\"cal-cell" + weekend + "\">" + d + "</span>";
            }
            var used = start + dim;
            while (used < 42) { cells += "<span class=\"cal-cell empty\"></span>"; used++; }
            list.innerHTML = "<div class=\"hansard-cal\"><div class=\"cal-nav\"><button type=\"button\" id=\"calPrev\" aria-label=\"Previous month\">‹</button><h3 class=\"cal-month\">" + months[m] + " " + y + "</h3><button type=\"button\" id=\"calNext\" aria-label=\"Next month\">›</button></div><div class=\"cal-dow\"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div><div class=\"cal-grid\">" + cells + "</div></div>";
            var pv = document.getElementById("calPrev");
            var nx = document.getElementById("calNext");
            if (pv) pv.onclick = function(){ view.setMonth(view.getMonth() - 1); paintCal(); };
            if (nx) nx.onclick = function(){ view.setMonth(view.getMonth() + 1); paintCal(); };
          }
          paintCal();
        }).catch(function(){ list.innerHTML = "<p>Could not reach the Hansard index.</p>"; });
      }
      function openDay(day) {
        if (!read) return;
        var cache = window.__hansardDoc || (window.__hansardDoc = {});
        function sectionList(doc) {
          var out = [];
          (doc.sections || []).forEach(function(sec, i) {
            var heading = (sec.heading && sec.heading !== "Body") ? sec.heading : ("Part " + (i + 1));
            var n = (sec.items || []).length;
            if (!n && sec.text) n = 1;
            out.push({ i: i, heading: heading, n: n, sec: sec });
          });
          if (!out.length && doc.plain_text) {
            out.push({ i: 0, heading: "Full sitting text", n: 1, sec: { heading: "Full sitting text", items: [], plain: String(doc.plain_text) } });
          }
          return out;
        }
        function renderPicker(doc) {
          list.hidden = true;
          read.hidden = false;
          var parts = sectionList(doc);
          var html = "<p><button type=\"button\" id=\"hansardBack\">← Sittings</button></p>";
          html += "<h3 id=\"hansardTop\">" + (window.fmtHansardDay ? window.fmtHansardDay(day) : day) + "</h3>";
          html += hansardVotesHtml(doc);
          if (doc.title) html += "<p class=\"poll-legend\">" + doc.title + "</p>";
          html += "<p class=\"poll-legend\">Choose one section to open. Only that part is drawn.</p>";
          html += "<div class=\"hansard-pick\">";
          if (!parts.length) html += "<p>No headed sections in this file.</p>";
          parts.forEach(function(p) {
            html += "<button type=\"button\" class=\"hansard-pick-btn\" data-sec=\"" + p.i + "\">" + p.heading + " <small>" + p.n + "</small></button>";
          });
          html += "</div>";
          read.innerHTML = html;
        }
        function renderSection(doc, idx) {
          var parts = sectionList(doc);
          var pick = parts[idx] || parts[0];
          if (!pick) { renderPicker(doc); return; }
          var toc = parts.map(function(p, i) { return { id: "hs" + i, t: p.heading, i: i }; });
          var html = "<p><button type=\"button\" id=\"hansardBack\">← Sittings</button> <button type=\"button\" id=\"hansardPickAgain\">← Sections</button></p>";
          html += "<h3 id=\"hansardTop\">" + (window.fmtHansardDay ? window.fmtHansardDay(day) : day) + "</h3>";
          html += '<div class="hansard-toc" id="hansardTocBar">';
          html += '<select id="hansardHeadSelect" aria-label="Sitting section">';
          toc.forEach(function(s) {
            html += '<option value="' + s.i + '"' + (s.i === pick.i ? " selected" : "") + ">" + s.t.replace(/</g, "") + "</option>";
          });
          html += "</select>";
          html += '<button type="button" class="hansard-head-btn" id="hansardHeadPrev" aria-label="Previous heading">↑</button>';
          html += '<button type="button" class="hansard-head-btn" id="hansardHeadNext" aria-label="Next heading">↓</button>';
          html += "</div>";
          html += "<h4 id=\"hs" + pick.i + "\">" + pick.heading + "</h4>";
          var n = 0;
          var para = null;
          function flushPara() {
            if (!para || !para.parts.length) { para = null; return; }
            var who = para.who;
            var text = para.parts.join(" ");
            var face = window.hansardFace ? window.hansardFace(who) : { src: "", color: "#6b7280" };
            var inner = face.id && spritePos(face.id)
              ? spriteMarkup(face.id, 36, "hansard-face sprite")
              : ("<span class=\"hansard-face hansard-face-empty\">" + String(who || "?").replace(/^(Hon |Rt Hon |Dr )/i, "").split(" ").map(function(w) { return w.charAt(0); }).join("").slice(0, 2) + "</span>");
            var faceBtn = face.id
              ? ("<button type=\"button\" class=\"hansard-open-mp\" data-mp=\"" + face.id + "\" style=\"border:0;background:none;padding:0;cursor:pointer\">" + inner + "</button>")
              : inner;
            html += "<div class=\"hansard-row\"><div class=\"hansard-face-wrap\" style=\"border-bottom:4px solid " + (face.color || "#6b7280") + "\">" + faceBtn + "</div><p><strong>" + who + "</strong> — " + text + "</p></div>";
            para = null;
          }
          var sec = pick.sec || {};
          function isBoiler(s) {
            return /HOUSE OF REPRESENTATIVES Page/i.test(s)
              || /^Subject to Revision/i.test(s)
              || /^(Monday|Tuesday|Wednesday|Thursday|Friday),\s+\d/i.test(s);
          }
          function isPortfolioLabel(who) {
            var w = String(who || "").replace(/\s+/g, " ").trim();
            if (!w) return true;
            if (/BILL$/i.test(w)) return true;
            if (/^(FINANCE|HOUSING|JUSTICE|EDUCATION|HEALTH|ENERGY|TRANSPORT|DEFENCE)$/i.test(w)) return true;
            if (/^(Consumer Affairs|Commerce and Consumer Affairs|Media and Communications|Commerce|Communications)$/i.test(w)) return true;
            return false;
          }
          function pullSpeaker(text) {
            text = String(text || "").replace(/\s+/g, " ").trim();
            if (!text) return null;
            var m = text.match(/^((?:Hon |Rt Hon |Dr |Mr |Mrs |Ms |Madam |ASSISTANT SPEAKER|DEPUTY SPEAKER|SPEAKER|CHAIRPERSON|CHAIR)[\sA-Za-z\-'āēīōūĀĒĪŌŪ]*)(?:\s*\([^)]{0,90}\))*\s*(?:\(\s*\d{1,2}:\d{2}\s*\))?\s*:\s*/);
            if (m) return { who: m[1].replace(/\s+/g, " ").trim(), rest: text.slice(m[0].length).trim() };
            m = text.match(/^([A-ZĀĒĪŌŪÁÉÍÓÚ][A-ZĀĒĪŌŪÁÉÍÓÚa-z\-'']*(?:\s+(?:Mac)?[A-ZĀĒĪŌŪÁÉÍÓÚ][A-ZĀĒĪŌŪÁÉÍÓÚa-z\-'']*){1,4})(?:\s*\([^)]{0,90}\))*\s*(?:\(\s*\d{1,2}:\d{2}\s*\))?\s*(?::| to the )/);
            if (m && !isPortfolioLabel(m[1])) {
              var rest = text.slice(m[0].length).trim();
              if (/^to the /i.test(text.slice(m[1].length))) rest = text.slice(text.toLowerCase().indexOf(" to the ") + 1).trim();
              return { who: m[1].replace(/\s+/g, " ").trim(), rest: rest };
            }
            m = text.match(/^([A-ZĀĒĪŌŪÁÉÍÓÚ][A-ZĀĒĪŌŪÁÉÍÓÚ\-'']+(?:\s+(?:Mac)?[A-ZĀĒĪŌŪÁÉÍÓÚ][A-ZĀĒĪŌŪÁÉÍÓÚ\-'']+){1,4})\s*:/);
            if (m && !isPortfolioLabel(m[1])) return { who: m[1].replace(/\s+/g, " ").trim(), rest: text.slice(m[0].length).trim() };
            return null;
          }
          function addLine(who, text) {
            text = String(text || "").replace(/\s+/g, " ").trim();
            if (!text) return;
            n += 1;
            var label = who || "House";
            var whoKey = String(label).toLowerCase().replace(/^(hon |rt hon |dr |mr |mrs |ms )/, "").trim();
            if (para && para.key === whoKey) para.parts.push(text);
            else { flushPara(); para = { who: label, key: whoKey, parts: [text] }; }
          }
          (sec.items || []).forEach(function(it) {
            if (!it) return;
            var who = (it.speaker || it.name || "").replace(/\s+/g, " ").trim();
            var text = String(it.text || "");
            if (isPortfolioLabel(who)) who = (para && para.who && para.who !== "House") ? para.who : "";
            if (isBoiler(text) && !who) return;
            if (who) {
              if (text) addLine(who, text);
              else {
                flushPara();
                para = { who: who, key: who.toLowerCase().replace(/^(hon |rt hon |dr |mr |mrs |ms )/, "").trim(), parts: [] };
              }
              return;
            }
            var pulled = pullSpeaker(text);
            if (pulled) addLine(pulled.who, pulled.rest || text);
            else if (para && para.who && para.who !== "House") addLine(para.who, text);
            else addLine("House", text);
          });
          flushPara();
          if (sec.plain) html += "<p>" + String(sec.plain).replace(/\n+/g, "</p><p>") + "</p>";
          if (!n && !sec.plain) html += "<p class=\"poll-legend\">This section has no spoken rows in the file.</p>";
          read.innerHTML = html;
          var card = document.querySelector(".hansard-card");
          if (card) card.scrollTop = 0;
          var sel = document.getElementById("hansardHeadSelect");
          function go(i) {
            var next = Math.max(0, Math.min(parts.length - 1, i));
            renderSection(doc, next);
          }
          if (sel) sel.addEventListener("change", function() { go(Number(sel.value) || 0); });
          var hp = document.getElementById("hansardHeadPrev");
          var hn = document.getElementById("hansardHeadNext");
          if (hp) hp.addEventListener("click", function() { go(pick.i - 1); });
          if (hn) hn.addEventListener("click", function() { go(pick.i + 1); });
          var again = document.getElementById("hansardPickAgain");
          if (again) again.addEventListener("click", function() { renderPicker(doc); });
        }
        function useDoc(doc) {
          cache[day] = doc;
          window.__hansardOpenSection = function(i){ renderSection(doc, i); };
          renderPicker(doc);
        }
        if (cache[day]) { useDoc(cache[day]); return; }
        fetch(DAYS + day + ".json?t=" + Date.now(), { cache: "no-store" }).then(function(r) { return r.json(); }).then(useDoc)
        .catch(function(){ read.hidden = false; list.hidden = true; read.innerHTML = "<p><button type=\"button\" id=\"hansardBack\">← Sittings</button></p><p>That sitting could not be read.</p>"; });
      }
      window.openHansardPage = openPage;
      if (btn) btn.addEventListener("click", function(){
        try { if (typeof closeMenu === "function") closeMenu(); } catch (e) {}
        document.body.classList.remove("menu-open");
        var mm = document.getElementById("mobileMenu");
        var mb = document.getElementById("menuBackdrop");
        if (mm) mm.classList.remove("open");
        if (mb) mb.classList.remove("open");
        openPage();
      });
      if (close) close.addEventListener("click", function(){ if (page) { page.classList.remove("open"); page.style.display = ""; } if (window.atlasBack) window.atlasBack(); });
      if (page) page.addEventListener("click", function(e){
        if (e.target === page) page.classList.remove("open");
        if (e.target && e.target.id === "hansardBack") showList();
        var voteBtn = e.target && e.target.closest && e.target.closest(".vote-jump");
        if (voteBtn) {
          var vi = Number(voteBtn.getAttribute("data-vote") || -1);
          var vote = (window.__hansardVotes || [])[vi];
          var oldTip = document.getElementById("voteTip");
          if (oldTip) oldTip.remove();
          if (vote) {
            var tip = document.createElement("div");
            tip.id = "voteTip";
            tip.className = "vote-tip";
            tip.innerHTML = "<strong>" + String(vote.question).replace(/</g, "") + "</strong><p>" + String(vote.note || "").replace(/</g, "") + "</p><button type='button' class='vote-tip-go'>Open that section</button>";
            voteBtn.parentNode.appendChild(tip);
            var go = tip.querySelector(".vote-tip-go");
            if (go) go.onclick = function(ev) {
              ev.preventDefault();
              ev.stopPropagation();
              tip.remove();
              if (window.__hansardOpenSection) window.__hansardOpenSection(Number(voteBtn.getAttribute("data-sec") || 0));
            };
          }
          return;
        }
        var pickBtn = e.target && e.target.closest && e.target.closest(".hansard-pick-btn");
        if (pickBtn && window.__hansardOpenSection) window.__hansardOpenSection(Number(pickBtn.getAttribute("data-sec") || 0));
        var day = e.target && e.target.getAttribute && e.target.getAttribute("data-hansard-day");
        if (day) openDay(day);
      });
    })();

    var closeFeature = document.getElementById("closeFeature");
    if (closeFeature) closeFeature.addEventListener("click", closeFeaturePage);

    
    const GEN_PROFILES = {
      silent: {
        years: "Born 1928–1945",
        blurb: "In this atlas this band is the oldest sitting cohort: childhood in post-war New Zealand, working life through the last decades of high union density and the first years of Rogernomics.",
        traits: [
          "Duty and institutions first — church, party, union, or the public service as a career",
          "Frugal with debt; home ownership treated as the default adult step",
          "Prefer face-to-face briefing and a written record over a feed",
          "Loyalty to an employer or a party measured in decades, not cycles",
          "Skeptical of rapid cultural language shifts; more comfortable with hierarchy"
        ]
      },
      boomer: {
        years: "Born 1946–1964",
        blurb: "The largest share of the current House. Came of age through the 1980s reforms, the 1987 crash, and the first MMP campaign.",
        traits: [
          "Expect work to reward long hours with security and a mortgage",
          "First generation to treat university as mass, not elite",
          "Comfortable with television politics and talkback; later adopters of social media",
          "Split between those who gained from asset sales and those who remember the factory closing",
          "Still the reference generation for “normal” family and career timing in NZ debate"
        ]
      },
      genx: {
        years: "Born 1965–1980",
        blurb: "Latchkey childhoods, student loans, and the Global Financial Crisis as a first proper recession. Smaller than Boomers in this House.",
        traits: [
          "Low trust in parties and corporates; humour as a default defence",
          "Digital immigrants — email-native, not TikTok-native",
          "Delayed or abandoned the Boomer house-and-kids timetable",
          "Pragmatic over ideological; will switch parties more readily",
          "Thin patience for process that does not show a result"
        ]
      },
      millennial: {
        years: "Born 1981–1996",
        blurb: "A small slice of the 54th Parliament. School and first jobs in the smartphone era; adult life framed by housing costs and climate politics.",
        traits: [
          "Rent and student debt as the normal start, not a short phase",
          "Organise online first; party machines feel slow",
          "Identity and climate language is everyday, not optional",
          "Expect workplaces and parties to state values in public",
          "Less tied to a single employer or a single media brand"
        ]
      },
      genz: {
        years: "Born 1997–2012",
        blurb: "A thin slice of the current House. Phones at primary school, COVID in the classroom, and the 2024 haka as a first political memory for their peers.",
        traits: [
          "Short-form video as the default public square",
          "Climate and mental health spoken about as baseline, not niche",
          "Low tolerance for hypocrisy between a party’s feed and its votes",
          "Friend groups and fandoms often outrank traditional memberships",
          "Still forming a voting habit — turnout and party loyalty are unsettled"
        ]
      },
      genalpha: {
        years: "Born 2013–2024",
        blurb: "Not in this House. Childhood after Gen Z — phones, AI tools, and climate policy as wallpaper, not a novelty.",
        traits: [
          "First votes from about 2031",
          "Screens and generated media from the start of school",
          "Climate and housing framed as inherited conditions",
          "No electoral record yet",
          "0% of this House · 0% of voters in 2026"
        ]
      },
      greatest: {
        years: "Born 1901–1927",
        blurb: "The oldest band on this map. No sitting MP in the 54th Parliament was born this early. A thin slice of New Zealanders in this birth window is still alive.",
        traits: [
          "Childhood through the Depression and the Second World War",
          "Worked under first-past-the-post and the last years of high union density",
          "0% of this House",
          "About 1% of voters still in this age bracket",
          "Shown so the date line has a real start, not an empty grey"
        ]
      },
      genbeta: {
        years: "Born 2025–2039",
        blurb: "Not born yet, or still in early childhood. No votes, no MPs.",
        traits: [
          "0% of this House",
          "0% of voters",
          "Will not vote until the 2040s",
          "Kept on the map so later decades are not painted as Gen Alpha forever"
        ]
      },
      gengamma: {
        years: "Born 2040–2054",
        blurb: "A future cohort. Nothing in the record yet.",
        traits: [
          "0% of this House",
          "0% of voters",
          "Beyond this election cycle",
          "Placeholder so the colour band has a name"
        ]
      }
    };
    function genIdFromYear(y) {
      if (y < 1928) return "greatest";
      if (y < 1946) return "silent";
      if (y < 1965) return "boomer";
      if (y < 1981) return "genx";
      if (y < 1997) return "millennial";
      if (y < 2013) return "genz";
      if (y < 2025) return "genalpha";
      if (y < 2040) return "genbeta";
      return "gengamma";
    }
    function genStats(id) {
      var sitting = mps.filter(function(m) { return !m.prior && m.birthYear; });
      var inGen = sitting.filter(function(m) { return genIdFromYear(m.birthYear) === id; });
      var house = 123;
      var win = { greatest: 0, silent: 3, boomer: 38, genx: 48, millennial: 10, genz: 1, genalpha: 0, genbeta: 0, gengamma: 0 };
      var houseN = Math.round((win[id] || 0) / 100 * house);
      var byParty = {};
      inGen.forEach(function(m) {
        byParty[m.party] = (byParty[m.party] || 0) + 1;
      });
      var partyLine = Object.keys(byParty).sort(function(a, b) { return byParty[b] - byParty[a]; })
        .map(function(p) { return p + " " + byParty[p]; }).join(" · ") || "None on this map";
      var years = inGen.map(function(m) { return m.birthYear; }).sort(function(a, b) { return a - b; });
      var pms = inGen.filter(function(m) {
        return m.isPm || (m.role && /Prime Minister|\bPM\b/i.test(m.role));
      });
      var info = genInfoById(id);
      return {
        listed: inGen.length,
        housePct: win[id] || 0,
        voterPct: info ? info.voterPct : 0,
        houseN: houseN,
        partyLine: partyLine,
        oldest: years[0] || null,
        youngest: years.length ? years[years.length - 1] : null,
        pmNames: pms.map(function(m) { return m.name; })
      };
    }
    function openGenDetail(id) {
      var p = GEN_PROFILES[id];
      var page = document.getElementById("genDetail");
      if (!p || !page) return;
      var names = { greatest: "Greatest Generation", silent: "Silent Generation", boomer: "Baby Boomers", genx: "Generation X", millennial: "Millennial", genz: "Generation Z", genalpha: "Generation Alpha", genbeta: "Generation Beta", gengamma: "Generation Gamma" };
      var s = genStats(id);
      document.getElementById("genDetailTitle").textContent = names[id] || id;
      document.getElementById("genDetailYears").textContent = p.years;
      var stats = "<div class=\"detail-section\"><h3>This House</h3><ul class=\"gen-trait-list\">" +
        "<li><strong>" + s.housePct + "%</strong> of Parliament now (~" + s.houseN + " of 123 sitting MPs)</li>" +
        "<li><strong>" + s.voterPct + "%</strong> of NZ voters are in this age bracket <span class=\"placeholder-note\">(18+, this birth window, approx 2026)</span></li>" +
        "<li><strong>" + s.listed + "</strong> of that cohort " + (s.listed === 1 ? "is" : "are") + " on this map</li>" +
        (s.oldest ? "<li>Birth years on the map: " + s.oldest + "–" + s.youngest + "</li>" : "<li>No sitting member of this band is on the map</li>") +
        "<li>Party mix on the map: " + s.partyLine + "</li>" +
        (s.pmNames.length ? "<li>PM cards in this band: " + s.pmNames.join(", ") + "</li>" : "") +
        "</ul></div>";
      document.getElementById("genDetailBody").innerHTML =
        "<p>" + p.blurb + "</p>" + stats +
        "<div class=\"detail-section\"><h3>Common traits</h3><ul class=\"gen-trait-list\">" +
        p.traits.map(function(t) { return "<li>" + t + "</li>"; }).join("") +
        "</ul><p class=\"poll-legend\">Traits are cohort notes, not a test of any one MP. House % is the full 54th Parliament; the map is sitting MPs plus top 5 per party.</p></div>";
      page.classList.add("open");
      window.__mapScrollEnabled = false;
    }
    function closeGenDetail() {
      var page = document.getElementById("genDetail");
      if (page) page.classList.remove("open");
      window.__mapScrollEnabled = true;
    }
    document.addEventListener("click", function(ev) {
      var btn = ev.target && ev.target.closest && ev.target.closest(".gen-win-label");
      if (!btn) return;
      ev.preventDefault();
      ev.stopPropagation();
      openGenDetail(btn.getAttribute("data-gen"));
    }, true);
    var closeGenBtn = document.getElementById("closeGenDetail");
    if (closeGenBtn) closeGenBtn.addEventListener("click", closeGenDetail);

    
    function applyTheme(theme) {
      theme = theme === "dark" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", theme);
      try { localStorage.setItem("pga-theme", theme); } catch (e) {}
      var meta = document.getElementById("themeColorMeta");
      if (meta) meta.setAttribute("content", theme === "dark" ? "#0f1115" : "#d8dde4");
      var icon = theme === "dark" ? "☀" : "☽";
      var label = theme === "dark" ? "Switch to light" : "Switch to dark";
      ["themeToggleHeader", "themeToggleMenu"].forEach(function(id) {
        var btn = document.getElementById(id);
        if (!btn) return;
        btn.textContent = icon;
        btn.setAttribute("aria-label", label);
        btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      });
    }
    applyTheme((function(){
      try { return localStorage.getItem("pga-theme") || "dark"; } catch (e) { return "dark"; }
    })());
    function flipTheme() {
      var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
    }
    var themeHeader = document.getElementById("themeToggleHeader");
    var themeMenu = document.getElementById("themeToggleMenu");
    if (themeHeader) themeHeader.addEventListener("click", flipTheme);
    if (themeMenu) themeMenu.addEventListener("click", flipTheme);

    
    window.addEventListener("error", function(ev) {
      try { console.error("Atlas error", ev.message, ev.filename, ev.lineno); } catch (e) {}
    });
    window.addEventListener("unhandledrejection", function(ev) {
      try { console.error("Atlas promise", ev.reason); } catch (e) {}
    });
    document.addEventListener("click", function(ev) {
      try {
        var card = ev.target && ev.target.closest && ev.target.closest(".mp-node");
        if (!card) return;
        if (ev.target.closest && ev.target.closest(".party-badge-btn, .legend-party")) return;
        var id = card.getAttribute("data-base-id") || card.getAttribute("data-id") || card.dataset.id;
        if (!id) {
          console.warn("card click missing id", card);
          return;
        }
        var full = null;
        for (var i = 0; i < mps.length; i++) {
          if (mps[i] && (mps[i].id === id || mps[i].baseId === id)) { full = mps[i]; break; }
        }
        if (!full) {
          console.warn("card click no mp for", id);
          return;
        }
        ev.preventDefault();
        openPanel(full);
      } catch (err) {
        console.error("card click", err);
      }
    }, true);

        (function edgeScroll() {
      var wrap = document.querySelector(".timeline-wrap");
      if (!wrap) return;
      var fine = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      if (!fine) return;
      var zone = 48;
      var vx = 0, vy = 0, raf = 0;
      function stop() { vx = 0; vy = 0; }
      function tick() {
        if (!window.__mapScrollEnabled) { stop(); raf = 0; return; }
        if (vx || vy) {
          wrap.scrollLeft += vx;
          wrap.scrollTop += vy;
          raf = requestAnimationFrame(tick);
        } else raf = 0;
      }
      function overChrome(e) {
        var x = e.clientX, y = e.clientY;
        function inRect(node) {
          if (!node) return false;
          var r = node.getBoundingClientRect();
          return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
        }
        if (inRect(document.querySelector("header.chamber-header, header"))) return true;
        if (inRect(document.querySelector(".detail-panel.open"))) return true;
        if (inRect(document.querySelector(".donate-page.open"))) return true;
        if (inRect(document.querySelector(".mobile-menu.open"))) return true;
        var hp = document.getElementById("hansardPage");
        if (hp && hp.classList.contains("open") && inRect(hp)) return true;
        if (document.documentElement.classList.contains("overlay-open")) return true;
        if (document.body.classList.contains("menu-open")) return true;
        return false;
      }
      function onMove(e) {
        if (e.pointerType && e.pointerType !== "mouse") { stop(); return; }
        if (!window.__mapScrollEnabled || document.documentElement.classList.contains("overlay-open") || overChrome(e)) { stop(); return; }
        var w = window.innerWidth, h = window.innerHeight;
        vx = 0; vy = 0;
        if (e.clientX < zone) vx = -12 * (1 - e.clientX / zone);
        else if (e.clientX > w - zone) vx = 12 * (1 - (w - e.clientX) / zone);
        if (e.clientY < zone) vy = -10 * (1 - e.clientY / zone);
        else if (e.clientY > h - zone) vy = 10 * (1 - (h - e.clientY) / zone);
        if ((vx || vy) && !raf) raf = requestAnimationFrame(tick);
      }
      document.addEventListener("mousemove", onMove, { passive: true });
      document.addEventListener("mouseleave", stop);
      document.addEventListener("mouseup", stop);
      window.addEventListener("blur", stop);
      wrap.addEventListener("mouseenter", function(){
        if (!document.documentElement.classList.contains("overlay-open")) window.__mapScrollEnabled = true;
      });
      wrap.addEventListener("wheel", function(e){
        if (e.ctrlKey || e.metaKey) return;
        if (document.documentElement.classList.contains("overlay-open")) return;
        // keep vertical wheel on the wrap even if a parent wants it
        wrap.scrollTop += e.deltaY;
        wrap.scrollLeft += e.deltaX;
        if (e.deltaY || e.deltaX) e.preventDefault();
      }, { passive: false });
    })();

    applyFilters(false);

    window.openPartyPanel = openPartyPanel;
    function handlePartyLaunch(ev) {
      var btn = ev.target && ev.target.closest && ev.target.closest(".legend-party, #openPartyPanelBtn");
      if (!btn) return;
      var party = btn.getAttribute("data-party");
      if (!party) return;
      ev.preventDefault();
      ev.stopPropagation();
      openPartyPanel(party, null);
    }
    window.openPartyPanel = openPartyPanel;
    document.addEventListener("click", handlePartyLaunch, true);
    var legendRoot = document.getElementById("partyLegend");
    if (legendRoot) {
      legendRoot.style.pointerEvents = "auto";
      legendRoot.addEventListener("click", handlePartyLaunch);
      Array.prototype.forEach.call(legendRoot.querySelectorAll(".legend-party"), function(b) {
        b.addEventListener("click", handlePartyLaunch);
      });
    }
    applyFilters(false);


    function scrollToBirthYear(year) {
      var wrap = document.querySelector(".timeline-wrap");
      var timeline = document.getElementById("timeline") || document.querySelector(".timeline");
      if (!wrap || !timeline) return;
      var pct = yearToX(year) / 100;
      var wide = Math.max(wrap.scrollWidth, timeline.scrollWidth, timeline.offsetWidth, 2400);
      var left = Math.max(0, wide * pct - wrap.clientWidth / 2);
      wrap.scrollLeft = left;
      var bar = document.getElementById("bottomAxisBar");
      if (bar) bar.scrollLeft = left;
    }
    function pinHeaderSpace() {
      var head = document.querySelector("header.chamber-header");
      var brand = document.querySelector(".brand-pill");
      var actions = document.querySelector(".header-actions");
      var titleH = 48;
      if (brand || actions) {
        titleH = Math.max(
          brand ? brand.getBoundingClientRect().height : 0,
          actions ? actions.getBoundingClientRect().height : 0,
          44
        );
      }
      document.documentElement.style.setProperty("--title-row-h", Math.round(titleH) + "px");
      if (head) {
        var hh = head.offsetHeight || 120;
        var cap = Math.round(window.innerHeight * 0.38);
        if (cap < 96) cap = 96;
        if (hh > cap) hh = cap;
        document.body.style.paddingTop = hh + "px";
        document.documentElement.style.scrollPaddingTop = hh + "px";
        document.documentElement.style.setProperty("--header-h", hh + "px");
        var topBar = document.getElementById("topAxisBar");
        if (topBar) topBar.style.top = hh + "px";
      }
    }
    window.addEventListener("resize", pinHeaderSpace);
    pinHeaderSpace();
    function centerNowMinusForty() {
      scrollToBirthYear(new Date().getFullYear() - 40);
    }
    requestAnimationFrame(function() {
      pinHeaderSpace();
      centerNowMinusForty();
      requestAnimationFrame(centerNowMinusForty);
    });
    window.addEventListener("load", centerNowMinusForty);


    // Pinch / ctrl-wheel zoom on the timeline
    (function setupTimelineZoom() {
      const wrap = document.querySelector(".timeline-wrap");
      if (!wrap) return;
      let zoom = 1;
      let pinch0 = null;

      function zoomTarget() {
        return document.getElementById("timelineZoomLayer") || timelineEl;
      }

      function unscaledWidth() {
        var target = zoomTarget();
        var stored = target && parseFloat(target.dataset.baseWidth);
        if (stored > 100) return stored;
        return 2400;
      }

      function minZoom() {
        const fit = (wrap.clientWidth || 1) / unscaledWidth();
        return Math.min(1, Math.max(1/1.5, fit)); // max 150% zoom-out
      }

      function syncBottomAxis() {
        const wrapEl = document.querySelector(".timeline-wrap");
        const sl = wrapEl ? wrapEl.scrollLeft : 0;
        const z = zoom || 1;
        const baseW = unscaledWidth();
        function pinAxis(host, h) {
          if (!host) return;
          host.style.display = "block";
          const axis = host.querySelector(".axis");
          if (!axis) return;
          axis.style.width = baseW + "px";
          axis.style.minWidth = baseW + "px";
          axis.style.transformOrigin = "0 0";
          axis.style.transform = "scale(" + z + ", 1)";
          host.scrollLeft = sl;
          if (h) host.style.height = h;
        }
        pinAxis(document.getElementById("topAxisBar"), "36px");
        pinAxis(document.getElementById("bottomAxisBar"), "40px");
      }

      function layoutZoomBox() {
        const target = zoomTarget();
        if (!target) return;
        const baseW = unscaledWidth();
        const baseH = parseFloat(target.dataset.baseHeight) || 900;
        target.style.transformOrigin = "0 0";
        target.style.transform = "scale(" + zoom + ")";
        target.style.width = baseW + "px";
        target.style.minWidth = baseW + "px";
        target.style.height = baseH + "px";
        if (timelineEl) {
          const visW = Math.round(baseW * zoom);
          const visH = Math.round(baseH * zoom);
          timelineEl.style.width = visW + "px";
          timelineEl.style.minWidth = visW + "px";
          timelineEl.style.height = visH + "px";
        }
      }

      function clampScroll() {
        const maxL = Math.max(0, wrap.scrollWidth - wrap.clientWidth);
        const maxT = Math.max(0, wrap.scrollHeight - wrap.clientHeight);
        if (wrap.scrollLeft > maxL) wrap.scrollLeft = maxL;
        if (wrap.scrollLeft < 0) wrap.scrollLeft = 0;
        if (wrap.scrollTop > maxT) wrap.scrollTop = maxT;
        if (wrap.scrollTop < 0) wrap.scrollTop = 0;
      }

      function applyZoom(newZoom, cx, cy, keepScroll) {
        const zMin = minZoom();
        const zMax = 1;
        const prev = zoom;
        zoom = Math.max(zMin, Math.min(zMax, newZoom));
        window.__timelineView.zoom = zoom;
        const rect = wrap.getBoundingClientRect();
        if (!keepScroll && Math.abs(zoom - prev) > 0.0001) {
          const ox = (cx != null ? cx : rect.left + rect.width / 2) - rect.left + wrap.scrollLeft;
          const oy = (cy != null ? cy : rect.top + rect.height / 2) - rect.top + wrap.scrollTop;
          const ratio = zoom / (prev || 1);
          layoutZoomBox();
          wrap.scrollLeft = ox * ratio - (cx != null ? (cx - rect.left) : rect.width / 2);
          wrap.scrollTop = oy * ratio - (cy != null ? (cy - rect.top) : rect.height / 2);
        } else {
          layoutZoomBox();
        }
        clampScroll();
        syncBottomAxis();
      }

      window.__timelineView = {
        zoom: 1,
        getSnapshot: function() {
          return { zoom: zoom, left: wrap.scrollLeft, top: wrap.scrollTop };
        },
        restore: function(snap) {
          if (!snap) return;
          zoom = snap.zoom || 1;
          window.__timelineView.zoom = zoom;
          applyZoom(zoom, null, null, true);
          wrap.scrollLeft = snap.left || 0;
          wrap.scrollTop = snap.top || 0;
          syncBottomAxis();
        },
        reapply: function() {
          applyZoom(zoom, null, null, true);
        }
      };

      wrap.addEventListener("wheel", (e) => {
        if (!e.ctrlKey && !e.metaKey) return;
        e.preventDefault();
        applyZoom(zoom * (e.deltaY < 0 ? 1.06 : 1 / 1.06), e.clientX, e.clientY);
      }, { passive: false });

      wrap.addEventListener("touchstart", (e) => {
        if (e.touches.length === 2) {
          const dx = e.touches[0].clientX - e.touches[1].clientX;
          const dy = e.touches[0].clientY - e.touches[1].clientY;
          pinch0 = {
            dist: Math.hypot(dx, dy) || 1,
            zoom: zoom,
            cx: (e.touches[0].clientX + e.touches[1].clientX) / 2,
            cy: (e.touches[0].clientY + e.touches[1].clientY) / 2
          };
        }
      }, { passive: true });

      wrap.addEventListener("touchmove", (e) => {
        if (e.touches.length === 2 && pinch0) {
          e.preventDefault();
          const dx = e.touches[0].clientX - e.touches[1].clientX;
          const dy = e.touches[0].clientY - e.touches[1].clientY;
          applyZoom(pinch0.zoom * ((Math.hypot(dx, dy) || 1) / pinch0.dist),
            (e.touches[0].clientX + e.touches[1].clientX) / 2,
            (e.touches[0].clientY + e.touches[1].clientY) / 2);
        }
      }, { passive: false });

      wrap.addEventListener("touchend", (e) => {
        if (e.touches.length < 2) pinch0 = null;
      });

      wrap.addEventListener("scroll", syncBottomAxis, { passive: true });
      window.addEventListener("resize", () => {
        if (zoom < minZoom()) applyZoom(minZoom(), null, null, true);
        else applyZoom(zoom, null, null, true);
      });
    })();

    
    
    
    // (card opens via identical el.onclick on every mp-node)




    function mergeLiveParty(name, src) {
      if (!src || !PARTY_PROFILES[name]) return;
      var dest = PARTY_PROFILES[name];
      if (src.current != null) dest.current = Number(src.current);
      if (src.forecast != null) dest.forecast = Number(src.forecast);
      if (src.asAt) dest.asAt = src.asAt;
      if (src.points && src.points.length) dest.points = src.points;
      if (src.series && src.series.length) dest.series = src.series;
      if (src.promises && src.promises.length) dest.promises = src.promises;
    }
    function ingestFeed(kind, data) {
      if (!data) return;
      if (data.asAt) window.__liveFeedMeta.asAt = data.asAt;
      if (data.updatedAt) window.__liveFeedMeta.asAt = String(data.updatedAt).slice(0, 10);
      window.__liveFeedMeta[kind] = data.source || "live";
      if (kind === "polls" && Array.isArray(data.polls)) {
        ingestWorkerPolls(data);
        return;
      }
      if (kind === "proposed") {
        ingestProposedOfferings(data);
        return;
      }
      var bag = data.parties || data;
      Object.keys(bag).forEach(function(name) {
        if (name === "asAt" || name === "source" || name === "election" || name === "polls" || name === "updatedAt" || name === "heading") return;
        mergeLiveParty(name, bag[name]);
      });
    }
    function ingestProposedOfferings(data) {
      var bag = (data && data.parties) || data || {};
      Object.keys(bag).forEach(function(name) {
        var dest = PARTY_PROFILES[name];
        if (!dest) return;
        var src = bag[name] || {};
        var blocks = (src.promises || []).filter(function(b) {
          return b && /^Promises since\b/i.test(String(b.h || ""));
        });
        if (!blocks.length) return;
        dest.promises = (dest.promises || []).filter(function(b) {
          return !/^Promises since\b/i.test(String(b.h || ""));
        }).concat(blocks);
      });
      window.__liveFeedMeta.proposed = data.source || "proposed";
      if (data.asAt) window.__liveFeedMeta.proposedAt = String(data.asAt).slice(0, 10);
    }
    function parsePollDate(row) {
      var s = [row.firm, row.dates, row.date].filter(Boolean).join(" ");
      var m = s.match(/(\d{1,2})\s*[–-]\s*(\d{1,2}\s+)?([A-Za-z]{3,9})\s+(\d{4})/) ||
              s.match(/(\d{1,2})\s+([A-Za-z]{3,9})\s+(\d{4})/);
      if (!m) return null;
      var months = {jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};
      var mon = (m[3] || m[2] || "").slice(0,3).toLowerCase();
      var year = +(m[4] || m[3]);
      var day = +(m[2] && /\d/.test(m[2]) ? m[2] : m[1]);
      if (months[mon] == null || !year) return null;
      var iso = year + "-" + String(months[mon] + 1).padStart(2, "0") + "-" + String(day || 1).padStart(2, "0");
      return { t: parseDay(iso), d: iso };
    }
    function extractPartyVotes(nums) {
      if (!nums || !nums.length) return null;
      var i = 0;
      while (i < nums.length && (nums[i] > 80 || nums[i] <= 1.05)) i++;
      var slice = nums.slice(i);
      if (slice.length < 6) return null;
      var keys = ["National", "Labour", "Green", "ACT", "NZ First", "Te Pāti Māori", "TOP"];
      var out = {};
      keys.forEach(function(k, idx) {
        var v = Number(slice[idx]);
        if (isFinite(v) && v >= 0.2 && v <= 55) out[k] = v;
      });
      return Object.keys(out).length >= 4 ? out : null;
    }
    function ingestWorkerPolls(data) {
      var rows = data.polls || [];
      var byParty = {};
      Object.keys(PARTY_PROFILES).forEach(function(name) { byParty[name] = []; });
      var election = {
        "National": 38.1, "Labour": 26.9, "Green": 11.6, "ACT": 8.6,
        "NZ First": 6.1, "Te Pāti Māori": 3.1, "TOP": 2.2
      };
      Object.keys(election).forEach(function(name) {
        if (byParty[name]) byParty[name].push({ d: "2023-10-14", v: election[name] });
      });
      rows.forEach(function(row) {
        var when = parsePollDate(row);
        var votes = extractPartyVotes(row.rawNumbers || row.numbers || []);
        if (!when || !votes) return;
        Object.keys(votes).forEach(function(name) {
          if (!byParty[name]) return;
          byParty[name].push({ d: when.d, v: votes[name] });
        });
      });
      var asAt = data.updatedAt ? String(data.updatedAt).slice(0, 10) : null;
      Object.keys(byParty).forEach(function(name) {
        var pts = byParty[name].slice().sort(function(a, b) { return a.d < b.d ? -1 : a.d > b.d ? 1 : 0; });
        if (pts.length < 2) return;
        var last = pts[pts.length - 1];
        var prev = pts.length > 2 ? pts[pts.length - 2] : pts[0];
        mergeLiveParty(name, {
          asAt: asAt,
          current: last.v,
          forecast: last.v,
          points: pts
        });
      });
      window.__liveFeedMeta.polls = data.source || "FlavourThink workers";
      window.__liveFeedMeta.asAt = asAt;
      window.__liveFeedMeta.pollCount = rows.length;
      Object.keys(PARTY_PROFILES).forEach(function(name) { seedMonthlyPoints(PARTY_PROFILES[name]); });
    }
    function loadLiveFeeds() {
      var bases = [];
      if (LIVE_FEED.githubBase) bases.push(LIVE_FEED.githubBase.replace(/\/$/, "") + "/");
      bases.push("");
      function tryFetch(file, kind) {
        var chain = Promise.reject();
        bases.forEach(function(base) {
          chain = chain.catch(function() {
            return fetch(base + file, { cache: "no-store" }).then(function(r) {
              if (!r.ok) throw new Error(file + " " + r.status);
              return r.json();
            });
          });
        });
        return chain.then(function(data) { ingestFeed(kind, data); }).catch(function(err) {
          console.warn("live feed", kind, err && err.message || err);
        });
      }
      return Promise.all([
        tryFetch(LIVE_FEED.pollsFile, "polls"),
        tryFetch(LIVE_FEED.offeringsFile, "offerings"),
        tryFetch(LIVE_FEED.proposedFile, "proposed")
      ]);
    }
    loadLiveFeeds().then(function() {
      try {
        var mount = document.getElementById("partyPollMount");
        var title = document.getElementById("mpTitleName");
        var party = title && title.textContent;
        if (mount && party && PARTY_PROFILES[party]) {
          seedMonthlyPoints(PARTY_PROFILES[party]);
          mount.innerHTML = pollChartSvg(party, PARTY_PROFILES[party]);
        }
        if (window.applyReelSpeed) window.applyReelSpeed();
      } catch (e) { console.warn("live graph refresh", e); }
    });

    (function bindPanelWheel() {
      var el = document.getElementById("panel");
      if (!el) return;
      el.addEventListener("wheel", function(e) {
        e.stopPropagation();
      }, { passive: true });
      el.addEventListener("touchmove", function(e) {
        e.stopPropagation();
      }, { passive: true });
    })();
    window.__mapScrollEnabled = true;

    function buildPromiseReel() {
      var track = document.getElementById("promiseReelTrack");
      var bag = (typeof PARTY_PROFILES !== "undefined") ? PARTY_PROFILES : {};
      if (!track) return;
      var order = ["Labour", "Green", "National", "ACT", "NZ First", "Te Pāti Māori", "TOP"];
      var tint = {
        National: "var(--national)", Labour: "var(--labour)", Green: "var(--green)",
        ACT: "var(--act)", "NZ First": "var(--nzfirst)", "Te Pāti Māori": "var(--tpm)", TOP: "var(--top)"
      };
      var queues = {};
      order.forEach(function(name) {
        var items = [];
        var p = bag[name];
        if (p && Array.isArray(p.promises)) {
          p.promises.forEach(function(block) {
            var head = block.h ? (block.h + ": ") : "";
            (block.items || []).forEach(function(it) { items.push(head + it); });
          });
        }
        queues[name] = items;
      });
      var seq = [];
      var max = 0;
      order.forEach(function(n) { max = Math.max(max, (queues[n] || []).length); });
      if (max < 1) max = 1;
      for (var i = 0; i < max; i++) {
        order.forEach(function(name) {
          var list = queues[name] || [];
          var text = list.length ? list[i % list.length] : "2026 programme";
          seq.push({ kind: "promise", party: name, text: text });
          if ((seq.length % 5) === 0) {
            var poll = bag[name];
            if (poll && poll.current != null) {
              seq.push({ kind: "poll", party: name, text: "Polling " + Number(poll.current).toFixed(1) + "%" });
            }
          }
        });
      }
      function itemHtml(it) {
        var bg = tint[it.party] || "var(--accent)";
        var label = it.party === "Green" ? "Greens" : it.party;
        return "<span class='reel-item " + it.kind + "' style='background:color-mix(in srgb," + bg + " 22%, transparent)'>" +
          "<span class='reel-party'>" + label + "</span>" +
          "<span class='reel-copy'>" + String(it.text).replace(/</g, "") + "</span></span>";
      }
      var html = seq.map(itemHtml).join("");
      track.innerHTML = html + html;
      window.applyReelSpeed();
    }
    window.applyReelSpeed = function(px) {
      var track = document.getElementById("promiseReelTrack");
      var slider = document.getElementById("reelSpeed");
      var label = document.getElementById("reelSpeedVal");
      var stored = parseFloat(localStorage.getItem("atlasReelPx") || "30");
      if (!isFinite(stored)) stored = 30;
      var speed = px != null ? Number(px) : (slider ? Number(slider.value) : stored);
      if (!isFinite(speed)) speed = 30;
      speed = Math.max(30, Math.min(100, speed));
      try { localStorage.setItem("atlasReelPx", String(speed)); } catch (e) {}
      if (slider) slider.value = String(Math.round(speed));
      if (label) label.textContent = Math.round(speed) + " px/s";
      if (!track || !track.scrollWidth) {
        if (track) track.style.animation = "reel-scroll 40s linear infinite";
        return;
      }
      var dist = Math.max(1, track.scrollWidth / 2);
      var sec = dist / speed;
      track.style.animation = "reel-scroll " + sec.toFixed(2) + "s linear infinite";
    };
    (function bindReelSlider() {
      var slider = document.getElementById("reelSpeed");
      var stored = parseFloat(localStorage.getItem("atlasReelPx") || "30");
      if (!isFinite(stored)) stored = 30;
      if (slider) {
        slider.value = String(Math.round(stored));
        slider.addEventListener("input", function() { window.applyReelSpeed(slider.value); });
      }
      window.applyReelSpeed(stored);
      var reel = document.getElementById("promiseReel");
      var track = document.getElementById("promiseReelTrack");
      function pauseReel() { if (track) track.style.animationPlayState = "paused"; }
      function playReel() { if (track) track.style.animationPlayState = "running"; }
      if (reel && track) {
        reel.addEventListener("pointerdown", function(ev) { ev.preventDefault(); pauseReel(); });
        window.addEventListener("pointerup", playReel);
        window.addEventListener("pointercancel", playReel);
        reel.addEventListener("pointerleave", playReel);
      }
      var tog = document.getElementById("reelToggle");
      var show = localStorage.getItem("atlasReelOn") !== "0";
      function applyReelVis() {
        document.documentElement.classList.toggle("reel-off", !show);
        if (tog) {
          tog.classList.toggle("on", show);
          tog.textContent = show ? "On" : "Off";
          tog.setAttribute("aria-pressed", show ? "true" : "false");
        }
        try { localStorage.setItem("atlasReelOn", show ? "1" : "0"); } catch (e) {}
      }
      if (tog) tog.addEventListener("click", function() { show = !show; applyReelVis(); });
      applyReelVis();
    })();
    try { buildPromiseReel(); } catch (e) { console.warn("reel", e); }

    fillChamberCast();
    applyFilters(false);
    pinHeaderSpace();
    centerNowMinusForty();
