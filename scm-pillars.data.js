/* =========================================================================
   Supply Chain Management — Session I, Deck II: the four pillars
   Source: /Users/patel/Desktop/Altera/SCM/Decks/SCMSessionIDeckII.pdf
   Concise build: 16 items (14 MCQ + 2 match), quiz + map only.
   ========================================================================= */

const CONFIG={
  quizEyebrow:'Supply Chain for Managers · the four pillars',
  quizTitle:'The quick paper',
  quizIntro:'16 questions on why a promise fails even when the product exists. Click a section to drill it.',
  mapTitle:'The Four Pillars Map',
  examDayPlan:[
   '<b>Never call it a delivery failure until you have checked all four pillars.</b> Late arrival is usually the last symptom, not the cause.',
   '<b>Order ≠ capacity.</b> What was asked for and what can be made in the window are different numbers.',
   '<b>Inventory ≠ availability.</b> Count only what the customer can actually use.',
   '<b>Enthusiasm ≠ agreed forecast.</b> A moving demand number moves every downstream decision.',
   '<b>Value lands only at the right place, in the right condition, at the promised time.</b>']
};

const TOPICS=[
 {id:'plan', name:'Demand & Supply Planning', kick:'forecast drift · agreed numbers', hot:true},
 {id:'make', name:'Sourcing & Manufacturing', kick:'inputs · capacity · quantity, quality, time'},
 {id:'inv',  name:'Warehousing & Inventory',  kick:'owned vs customer-ready', hot:true},
 {id:'dist', name:'Distribution & Logistics', kick:'place · condition · promised time'},
 {id:'sys',  name:'Diagnosing the Chain',     kick:'root cause · weakest pillar'},
];

const caseA={cl:'Case · three parts',h:'The corporate breakfast order',
 body:'A caterer agrees to deliver breakfast boxes to an office by <b>9:00 a.m.</b> The admin team first says <b>40 staff</b>, then forwards it to two more floors and revises to <b>95</b> the evening before. The kitchen can assemble <b>70 boxes an hour</b> and starts at <b>7:30</b>. In the store room it holds <b>110 bread rolls</b>, of which <b>30</b> are from two days ago. Each box needs one roll. The delivery app has the old building wing saved.'};

const QUIZ=[
 /* ---------- Demand & supply planning ---------- */
 {t:'plan',tag:'concept',diff:'easy',
  q:'A host keeps hearing "we\'ll also come" on a group chat, and the headcount climbs every hour. What is the core supply chain problem?',
  opts:['There is no agreed forecast, so every sourcing and production decision rests on a moving number',
        'The supplier\'s production capacity is too low for an event of this size, so the host must switch vendors',
        'The host has not negotiated a low enough price with the vendor',
        'The delivery partner has not been told the headcount, so routing is wrong'],
  why:'<b>Poor demand visibility changes every supply decision.</b> Until demand is pinned to an agreed number, the raw material order, the production plan and the delivery plan are all guesses.<div class="work">Enthusiasm ≠ agreed forecast\nmoving demand → wrong input order → wrong batch → wrong dispatch</div>Capacity may turn out to be a problem, but it only becomes visible once demand is fixed. Low capacity is a downstream effect, not the root issue.<br><br>In a case, ask "what number is everyone planning to?" before you blame any one function.'},

 {t:'plan',tag:'calc',diff:'medium',
  given:['Plan basis: 2 units per guest','Guests: 15 → 32 → 38'],
  q:'A planner sizes an order at 2 units per guest. The guest count moves from 15 to 32 to 38. By how much has the requirement grown since the first plan, and what does it say about the first purchase order?',
  opts:['From 30 to 76 units, about 2.5×, so the first raw-material order was sized for a different event',
        'From 15 to 38 units, about 2.5×, so the order only needs another 23 units added on top of the original buy',
        'From 30 to 76 units, about 2.5×, but the first order is fine as long as capacity can flex up',
        'From 64 to 76 units, about 19%, which is within a normal forecasting tolerance band'],
  why:'<b>Convert people into units before comparing.</b> Demand in the plan is units, not guests.<div class="work">first plan  15 × 2 = 30\nlatest      38 × 2 = 76\ngrowth      76 ÷ 30 = 2.53×</div>The 15 → 38 option forgets the per-guest multiplier. The 64 → 76 option compares against the <i>middle</i> revision, which hides how wrong the original buy was. Flexing capacity does nothing if the inputs were bought for 30.<br><br>Always measure forecast error against the number that triggered the commitments.'},

 {t:'plan',tag:'apply',diff:'medium',trap:true,
  q:'A customer says, "Price doesn\'t matter, it just has to arrive before the match." The vendor expedites inputs at a higher cost. Which reading is correct?',
  opts:['Time has been traded for cost; that is a legitimate choice only if it is made deliberately and agreed',
        'Cost is irrelevant to supply chain decisions once the customer has stated a firm deadline for delivery',
        'The vendor has failed, because a good supply chain should never pay to expedite inputs',
        'The trade-off is pointless, since a faster supplier cannot change the delivery outcome'],
  why:'<b>Supply chain decisions are trade-offs between service, time and cost.</b> Paying more to pull inputs in faster is a valid lever when the deadline is worth more than the premium.<div class="work">expedite → ↑ cost, ↓ lead time\nrational only if value of on-time > premium paid</div>The trap is "cost is irrelevant". Customers who say so in a crisis are often the same ones who drive across town to save ₹2 a litre the next day. Cost still matters; it was just outweighed this time.<br><br>Name the trade-off explicitly: what you protected, what you gave up.'},

 /* ---------- Sourcing & manufacturing ---------- */
 {t:'make',tag:'apply',diff:'easy',
  q:'A bakery has ovens, staff and fillings ready, but its flour delivery has not arrived. A customer asks, "How can a bakery run out of flour?" What does this illustrate?',
  opts:['Production depends on every input; one missing raw material stops the whole line',
        'The bakery has a capacity problem and should hire more staff for the shift',
        'The customer\'s demand forecast was wrong, so the bakery could not have planned for it',
        'Inventory and availability are different, because the flour is in stock but unusable'],
  why:'<b>The sourcing pillar asks whether every input will be there at the right quantity, quality and time.</b> Readiness is only as good as the scarcest input.<div class="work">ovens ✓  staff ✓  fillings ✓  flour ✗\n→ output = 0</div>It is not a capacity problem, because the people and equipment are idle and waiting. It is not inventory-versus-availability, because the flour is not on the premises at all.<br><br>Ask "can you source <i>and</i> produce it?", not just "can you make it?"'},

 {t:'make',tag:'calc',diff:'medium',trap:true,
  given:['Order: 150 units','Capacity: 45 units/hour','Window before dispatch: 2.5 hours'],
  q:'A vendor accepts an order for 150 units. The line makes 45 units an hour, and there are 2.5 hours before the dispatch cut-off. What should the vendor have said when the order was placed?',
  opts:['About 112 units can be ready by dispatch; the other 38 need a later slot or a second line',
        'All 150 can be ready, because the order was accepted and is now firmly booked in the system',
        'About 60 units can be ready, because capacity is tied to the original forecast only',
        'About 135 units can be ready, which rounds to the full 150 within normal tolerance'],
  why:'<b>An order is a request; capacity is what the line can actually make in the window.</b><div class="work">45 × 2.5 = 112.5 → 112 units\nshortfall = 150 − 112 = 38</div>"Accepted, so it will happen" is the trap. Saying yes to 150 does not create 150. The 135 figure assumes three full hours. A shortfall of 38 is not a rounding error; it is a quarter of the order.<br><br>Promise against capacity, then negotiate the gap upfront rather than at the door.'},

 {t:'make',tag:'concept',diff:'easy',cols:['Pillar question','Pillar'],
  q:'Match each diagnostic question to the pillar that owns it.',
  match:[['Can we source the inputs and make the required quantity, quality and time?','Sourcing & manufacturing'],
         ['What number are we all planning to, and is it agreed?','Demand & supply planning'],
         ['How much of what we hold can the customer actually use?','Warehousing & inventory'],
         ['Will it reach the right place, in the right condition, at the promised time?','Distribution & logistics']],
  why:'The four pillars run in sequence: <b>plan → source and make → hold → deliver</b>. Each owns a different question, and a failure in any one shows up to the customer as the same thing: it did not arrive.'},

 /* ---------- Warehousing & inventory ---------- */
 {t:'inv',tag:'concept',diff:'easy',trap:true,
  q:'Which statement correctly separates inventory from availability?',
  opts:['Inventory is what the business owns; availability is what the customer can actually use or buy',
        'Inventory is what the customer can buy; availability is what the business has on its books',
        'They are the same number, because anything in the store room can be sold to the customer on demand',
        'Availability is inventory minus whatever has already been dispatched on the same day'],
  why:'<b>Inventory is ownership; availability is usability.</b> Stale, damaged, held or reserved stock sits in inventory but is not available.<div class="work">available = inventory − (stale + damaged + held + reserved)</div>The second option is the exact reversal. The last option subtracts the wrong thing: dispatched goods have already left inventory.<br><br>When someone says "it\'s all available", ask "customer-ready?"'},

 {t:'inv',tag:'calc',diff:'medium',
  given:['Stock on record: 240','Expired: 25','Damaged: 15','Reserved for another order: 40'],
  q:'A dark store shows 240 units of a product. 25 are past expiry, 15 are damaged and 40 are reserved for a confirmed order. How many can it promise to a new customer?',
  opts:['160 units',
        '200 units',
        '240 units',
        '175 units'],
  why:'<b>Subtract everything that cannot go to this customer.</b><div class="work">240 − 25 − 15 − 40 = 160</div>200 forgets the reservation; it is real stock, but it is already promised. 240 is the book number. 175 forgets the damaged units and miscounts.<br><br>Promises are made on customer-ready availability, never on the stock figure.'},

 {t:'inv',tag:'apply',diff:'medium',
  q:'A supplier has 50 units: 35 fresh and 15 made yesterday. The customer needs 50 within the hour for a sensitive client. What is the best move?',
  opts:['Ship the 35 fresh now and send 15 fresh units as soon as they are made, telling the customer upfront',
        'Ship all 50 now, because the order quantity is met and the customer did not specify freshness',
        'Hold the whole order until 50 fresh units are ready, so the customer gets one single, complete delivery',
        'Ship the 15 older units first, so older stock is cleared before it becomes unsellable'],
  why:'<b>Only customer-ready stock should go out, and a known split is better than a silent quality failure.</b><div class="work">customer-ready now = 35\nshortfall = 15 → produce + second dispatch</div>Shipping all 50 "meets the quantity" but breaks the quality part of the promise. Holding everything sacrifices time for neatness. Sending the old stock first is FIFO logic applied where the customer will feel it.<br><br>Right quantity, right quality, right time. Hitting one does not excuse missing another.'},

 /* ---------- Distribution & logistics ---------- */
 {t:'dist',tag:'concept',diff:'easy',
  q:'According to the distribution pillar, when does a product create value for the customer?',
  opts:['When it reaches the correct place, in the correct condition, at the promised time',
        'When it has been produced to specification and has passed the final quality check',
        'When the rider has picked it up and the order shows "dispatched" in the system',
        'When it is stored in the warehouse closest to the customer\'s delivery address'],
  why:'<b>A product has no value to the customer until it reaches them right.</b> Place, condition and time are all part of the promise.<div class="work">value = right place × right condition × promised time\nany one = 0 → customer value = 0</div>"Dispatched" is a milestone for the business, not the customer. Production and storage are upstream pillars.<br><br>Measure the promise where the customer is, not where the system logs it.'},

 {t:'dist',tag:'apply',diff:'medium',trap:true,
  q:'A rider reaches the address in the app on time, but it is the wrong building because the saved address was outdated. The food is ready and hot. How should the failure be classified?',
  opts:['A last-mile information failure: the physical flow worked, but the data driving it was wrong',
        'A production failure, because the product did not reach the customer at the time it was promised',
        'A rider performance failure, because the rider should have known the right building',
        'A demand planning failure, because the customer did not forecast their own address'],
  why:'<b>Logistics runs on information as much as on vehicles.</b> A correct product sent to a wrong address is a failure of the data flow, not the goods flow.<div class="work">product ready ✓   rider on time ✓   address data ✗\n→ customer outcome: not delivered</div>Blaming the rider is the trap. They followed the instruction they were given. The fix is address validation at order capture, not rider training.<br><br>"The product is ready, the customer is still hungry" is almost always a last-mile data or handover issue.'},

 {t:'dist',tag:'calc',diff:'medium',
  given:['Promised: 100 units by 6:00 p.m.','Arrived 6:20 p.m.: 70 units','Arrived 8:00 p.m.: 30 units'],
  q:'Measured against the promise, what share of the order was delivered on time and in full?',
  opts:['0%, because no unit arrived by 6:00 p.m., and the order was only complete at 8:00 p.m.',
        '70%, because 70 of the 100 units arrived reasonably close to the promised time, within half an hour',
        '100%, because every unit eventually reached the customer on the same evening',
        '30%, because only the second batch was correctly counted against the full order'],
  why:'<b>On-time-in-full needs both halves, measured against the agreed promise.</b><div class="work">by 6:00 p.m.   delivered = 0\nin full        only at 8:00 p.m. (late)\nOTIF           = 0%</div>"Reasonably close" is not a measure; the customer\'s reality was 6:20 and 8:00, not the plan\'s 6:00. 100% counts eventual delivery, which no host waiting for guests would accept.<br><br>The gap between plan and customer experience is the number that matters.'},

 /* ---------- Diagnosing the chain ---------- */
 {t:'sys',tag:'case',diff:'medium',scene:caseA,
  q:'<b>Part 1.</b> Using the case figures, how many boxes can the kitchen assemble by an 8:30 dispatch, and how many usable rolls does it have?',
  opts:['70 boxes by dispatch; 80 usable rolls, so capacity rather than rolls is the binding limit',
        '95 boxes by dispatch; 110 usable rolls, so the full order can be met completely and on time',
        '70 boxes by dispatch; 110 usable rolls, so only the delivery address needs fixing',
        '95 boxes by dispatch; 80 usable rolls, so the rolls are the only binding limit'],
  why:'<b>Check capacity and availability separately, then take the tighter one.</b><div class="work">capacity  7:30 → 8:30 = 1 hr × 70 = 70 boxes\nrolls     110 − 30 stale = 80 usable\nbinding   min(95, 70, 80) = 70</div>Options with 95 boxes assume the order equals the output. Options with 110 rolls count stale stock as available.<br><br>The deliverable is the minimum across pillars, never the order quantity.'},

 {t:'sys',tag:'case',diff:'hard',scene:caseA,
  q:'<b>Part 2.</b> The boxes arrive late at the wrong wing and short of the order. The client calls it "a delivery failure". What is the best diagnosis?',
  opts:['A chain failure: an unagreed forecast, a capacity gap, stale stock and bad address data all contributed',
        'A delivery failure, because the customer only ever experienced the late, short and misrouted arrival',
        'A capacity failure alone, because a faster kitchen would have fixed every other problem further down the chain',
        'A forecasting failure alone, because the admin team changed the headcount the night before'],
  why:'<b>The customer sees one flop; the cause is spread across pillars.</b><div class="work">plan     40 → 95, never agreed\nmake     70/hr vs 95 needed\nhold     30 of 110 rolls stale\ndeliver  outdated wing in the app</div>Calling it "delivery" blames the last pillar to touch the customer. Single-cause answers fix one pillar and leave three to fail next time.<br><br>If even one pillar fails, the customer experiences a flop. Diagnose all four before you fix one.'},

 {t:'sys',tag:'concept',diff:'easy',cols:['Symptom','What it really is'],
  q:'Match each symptom to the gap behind it.',
  match:[['"But I ordered 300!" (line makes 200 in the window)','Order ≠ capacity'],
         ['"All 300 are in stock!" (50 are past expiry)','Inventory ≠ availability'],
         ['"Ten more are joining, make it 40!"','Enthusiasm ≠ agreed forecast'],
         ['"The plan said 4:00, we got it at 4:50"','Plan ≠ customer reality'],
         ['"The rider is at the old office address"','Right product, wrong place']],
  why:'Each line is a different pillar failing in disguise. Learn to hear the <b>≠</b> behind the complaint: it tells you which function to fix, rather than which one shouted last.'},

 {t:'sys',tag:'apply',diff:'medium',
  q:'A manager asks a supplier only, "Can you make 500 units?" Why is that the wrong question?',
  opts:['It ignores whether inputs, capacity, availability and delivery can meet the full quantity, quality and time',
        'It is too specific; the manager should ask about total annual capacity instead',
        'It should be addressed to the logistics partner, who decides whether the order is feasible',
        'It is the right question, because production is the only one of the four pillars that a supplier actually controls'],
  why:'<b>Making the product is easy; making the promise work is supply chain.</b><div class="work">wrong   "can you make it?"\nright   "can you source, make, hold and deliver\n         500 of the right quality by the date?"</div>A supplier can truthfully say yes to production and still fail on inputs, stock quality or dispatch. The logistics partner owns only one pillar.<br><br>Ask about the promise, not the product.'},
];

const CMAP=[
 {h:'★ The four pillars',
  note:'If even one fails, the customer experiences a flop.',
  rows:[
   ['1 · Sourcing & manufacturing','Can we source inputs and produce the right <b>quantity, quality, time</b>?','one missing input → zero output'],
   ['2 · Demand & supply planning','Is there an <b>agreed forecast</b>?','moving demand moves every supply decision'],
   ['3 · Warehousing & inventory','What is <b>customer-ready</b>, not just owned?','inventory ≠ availability'],
   ['4 · Distribution & logistics','Right <b>place</b>, right <b>condition</b>, <b>promised time</b>','no value until it reaches the customer']]},
 {h:'★ The five ≠ gaps',
  note:'Hear the gap behind the complaint.',
  rows:[
   ['Enthusiasm ≠ forecast','headcount keeps climbing',''],
   ['Order ≠ capacity','units/hr × hours = max output','45 × 2.5 = <b>112</b>'],
   ['Inventory ≠ availability','stock − stale − damaged − held − reserved','240 − 80 = <b>160</b>'],
   ['Plan ≠ reality','measure at the customer, not at dispatch','OTIF needs both halves'],
   ['Right product ≠ right place','last-mile data failure','fix address capture, not the rider']]},
 {h:'Exam-day habits',
  note:'One line each.',
  rows:[
   ['Deliverable','= min(order, capacity, available stock)'],
   ['Trade-offs','name what you protected and what you gave up (time vs cost)'],
   ['Diagnosis','never stop at "delivery failure"; walk all four pillars'],
   ['Splits','a known split beats a silent quality failure']]},
];
