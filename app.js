/**
 * CS 305: Theory of Computation — Interactive Portal Engine
 * Institution: GIMPA School of Technology
 */

// 15-Week Detailed Schedule Data (faithful to computationTheory.tex)
const scheduleData = [
  {
    week: 1,
    unit: "automata",
    title: "Preliminaries & Foundations of Computation Models",
    sipser: "Chapter 0",
    milestone: { text: "Diagnostic Math Review", type: "quiz" },
    summary: "Alphabets, strings, formal languages, sets, functions, and proof techniques (induction, contradiction, construction).",
    spotlight: {
      tag: "Chomsky Hierarchy in Modern AI",
      summary: "Why finite-state tokenizers cannot parse arbitrary recursive syntax, and how token alphabets bound LLM vocabulary.",
      detail: "In 2026 AI architectures, language models operate over discrete token vocabularies (e.g., Byte-Pair Encoding). Even trillion-parameter transformer models without recurrence or external scratchpad memory are fundamentally bounded in their ability to recognize arbitrarily deep Dyck languages (nested parenthesis matching). Understanding the Chomsky hierarchy explains why transformer layers alone cannot compute arbitrary recursive functions without autoregressive chain-of-thought generation."
    },
    readings: "Sipser Ch. 0 (Sets, Relations, Functions, Proofs, Strings & Languages). Review proof by contradiction and induction."
  },
  {
    week: 2,
    unit: "automata",
    title: "Deterministic Finite Automata (DFA)",
    sipser: "Section 1.1",
    milestone: { text: "Problem Set 1 Assigned", type: "assign" },
    summary: "Formal 5-tuple definition of DFAs, state transition diagrams, language acceptance, and regular language closure under union.",
    spotlight: {
      tag: "High-Speed Packet Filtering (Snort/Zeek)",
      summary: "How network firewalls and compiler lexical analyzers match millions of streaming signatures in O(n) linear time.",
      detail: "Modern network intrusion detection systems (such as Snort and Zeek) inspect 40 Gbps backbone traffic in real time. They compile hundreds of malicious byte signatures into a single unified deterministic finite automaton (Aho-Corasick DFA). Because a DFA processes exactly one character per state transition, the firewall inspects packets in strictly linear time O(n) independent of the number of active rules."
    },
    readings: "Sipser 1.1. Practice designing DFAs on AutomatonSimulator.com for binary divisibility and substring tracking."
  },
  {
    week: 3,
    unit: "automata",
    title: "Nondeterministic Finite Automata (NFA) & Equivalence",
    sipser: "Section 1.2",
    milestone: { text: "Problem Set 1 Due", type: "due" },
    summary: "NFA 5-tuple, epsilon transitions, subset (powerset) construction theorem, and DFA-NFA equivalence.",
    spotlight: {
      tag: "NFA State Explosion in Search Engines",
      summary: "How search indexing tools and grep simulate multiple search branches concurrently without exponential blowout.",
      detail: "While converting an N-state NFA to a DFA can theoretically yield up to 2^N states, modern search utilities (such as ripgrep and hyperscan) execute NFAs by maintaining a bitset of active states on the fly. This lazy powerset evaluation avoids state space explosion while achieving near-DFA runtime speeds."
    },
    readings: "Sipser 1.2. Complete the Subset Construction algorithm proof and trace an epsilon-NFA conversion step by step."
  },
  {
    week: 4,
    unit: "automata",
    title: "Regular Expressions & Generalized NFAs (GNFA)",
    sipser: "Section 1.3",
    milestone: { text: "Quiz 1 (In-Class)", type: "quiz" },
    summary: "Regular operations, regex syntax, Kleene's Theorem, and converting DFA to RegEx via GNFA state ripping.",
    spotlight: {
      tag: "Catastrophic ReDoS Cloud Outages",
      summary: "How exponential backtracking in non-DFA regex engines crashed Cloudflare's global edge network in 2019.",
      detail: "In July 2019, Cloudflare suffered a global outage that took down major internet traffic for 27 minutes. The root cause was a catastrophic Regular Expression Denial of Service (ReDoS) vulnerability in a WAF rule: `.*.*=.*`. Non-DFA regex engines that rely on backtracking have worst-case exponential time O(2^n). Sipser's theorem proves that any regex can be executed via a DFA in guaranteed O(n) time, preventing CPU exhaustion."
    },
    readings: "Sipser 1.3. GNFA state-elimination algorithm. Review regular expression operator precedence."
  },
  {
    week: 5,
    unit: "automata",
    title: "Nonregular Languages & The Pumping Lemma",
    sipser: "Section 1.4",
    milestone: { text: "Problem Set 2 Assigned", type: "assign" },
    summary: "Limits of finite memory, Pigeonhole Principle, Pumping Lemma for regular languages, and formal non-regularity proofs.",
    spotlight: {
      tag: "Memory Bounds of Finite State Systems",
      summary: "Why a DFA with 1 billion states can count to 1 billion, but can never verify an unbounded matched bracket pair 0^n 1^n.",
      detail: "Finite automata have strictly finite memory encoded into their state set Q. While an embedded IoT microcontroller can easily track up to 10^9 distinct counter values using register states, it mathematically cannot verify balanced nested parentheses of arbitrary length. The Pumping Lemma formally establishes that finite states must eventually repeat on sufficiently long strings."
    },
    readings: "Sipser 1.4. Master the 4-step adversarial game strategy for Pumping Lemma proofs."
  },
  {
    week: 6,
    unit: "automata",
    title: "Context-Free Grammars (CFG) & Parsing",
    sipser: "Section 2.1",
    milestone: { text: "Problem Set 2 Due", type: "due" },
    summary: "CFG 4-tuple, derivations, parse trees, ambiguity in grammars, Chomsky Normal Form (CNF), and CYK parsing.",
    spotlight: {
      tag: "Grammar-Guided LLM JSON Generation",
      summary: "How modern inference libraries (Outlines, Guidance, llama.cpp) force LLMs to output 100% syntactically valid JSON/SQL.",
      detail: "Modern AI production pipelines cannot tolerate hallucinated JSON formatting. State-of-the-art structured generation frameworks (such as Outlines and Guidance) compile a JSON Schema into a Context-Free Grammar parser. At each generation step, the parser masks the LLM's next-token probability distribution, zeroing out any token that does not correspond to a valid CFG derivation."
    },
    readings: "Sipser 2.1. Practice grammar conversions to Chomsky Normal Form (CNF) and leftmost derivation trees."
  },
  {
    week: 7,
    unit: "automata",
    title: "Pushdown Automata (PDA) & Stack Memory",
    sipser: "Section 2.2",
    milestone: { text: "Midterm Review Session", type: "quiz" },
    summary: "PDA formal definition, transition function with stack operations, and equivalence between PDAs and CFGs.",
    spotlight: {
      tag: "Compiler ASTs & Program Call Stacks",
      summary: "Why stack memory (LIFO) is the strict minimum mathematical requirement for function recursion and expression evaluation.",
      detail: "Programming languages (C, Rust, Python) require stack frames to track recursive function invocations and evaluate nested arithmetic expressions. A finite state machine cannot evaluate `(2 + (3 * (4 - 1)))`, but a pushdown automaton easily balances the operands by pushing and popping the operator precedence stack."
    },
    readings: "Sipser 2.2. Design PDAs for palindrome languages and matched parenthesis verification."
  },
  {
    week: 8,
    unit: "automata",
    title: "Midterm Exam & Non-Context-Free Languages",
    sipser: "Section 2.3",
    milestone: { text: "Midterm Examination (Week 8)", type: "exam" },
    summary: "The Pumping Lemma for Context-Free Languages (uvxyz decomposition) and comprehensive midterm evaluation.",
    spotlight: {
      tag: "Transformer Depth Bounds on Dyck Languages",
      summary: "Why fixed-depth attention transformers struggle with deep nested hierarchies without recurrent scratchpads.",
      detail: "Recent theoretical work in machine learning proves that fixed-depth Transformer models (without chain-of-thought) belong to the complexity circuit class TC^0, which cannot even compute arbitrary Dyck-k languages when the nesting depth exceeds the model layer capacity. The CFL pumping lemma provides the exact mathematical benchmark used in empirical AI research."
    },
    readings: "Sipser 2.3. CFL Pumping Lemma examples (a^n b^n c^n, ww). Midterm examination review."
  },
  {
    week: 9,
    unit: "computability",
    title: "The Turing Machine (TM) Model",
    sipser: "Sections 3.1–3.2",
    milestone: { text: "Problem Set 3 Assigned", type: "assign" },
    summary: "7-tuple TM definition, unbounded tape head, configurations, transitions, and TM variants (multi-tape, nondeterministic).",
    spotlight: {
      tag: "Chain-of-Thought LLMs as Turing Machines",
      summary: "Why an autoregressive LLM equipped with an external scratchpad context buffer becomes computationally Turing-complete.",
      detail: "A single forward pass of a transformer is a feedforward circuit of bounded depth. However, when the model generates intermediate 'Chain-of-Thought' tokens back into its context window, the context acts as an unbounded read/write tape. Researchers have formally proven that autoregressive transformers with scratchpads simulate universal Turing machines."
    },
    readings: "Sipser 3.1 & 3.2. Trace TM configuration sequences on AutomatonSimulator.com and JFLAP."
  },
  {
    week: 10,
    unit: "computability",
    title: "The Church–Turing Thesis & Physical Computation",
    sipser: "Section 3.3",
    milestone: { text: "Problem Set 3 Due", type: "due" },
    summary: "The formal definition of an algorithm, Hilbert's Tenth Problem, and equivalence across all algorithmic models (Lambda calculus, RAM).",
    spotlight: {
      tag: "Physical Limits & Quantum Computation",
      summary: "Why quantum computers and biological DNA computers do not violate the Church–Turing thesis of computability.",
      detail: "While quantum computers (operating in class BQP) can solve specific problems exponentially faster than classical computers (such as Shor's algorithm for factoring), they cannot compute any function that is uncomputable by a classical Turing machine. The boundary between computable and uncomputable remains absolute across physics."
    },
    readings: "Sipser 3.3. Read historical context on Alan Turing, Alonzo Church, and Kurt Gödel's incompleteness theorems."
  },
  {
    week: 11,
    unit: "computability",
    title: "Decidability & Algorithmic Solvability",
    sipser: "Section 4.1",
    milestone: { text: "Quiz 2 (In-Class)", type: "quiz" },
    summary: "Decidable languages vs recognizable languages, decision procedures for regular and context-free language properties.",
    spotlight: {
      tag: "Automated Software Verification & Static Analysis",
      summary: "How aerospace and automotive static analyzers (Astrée, Infer) prove memory safety without violating decidability bounds.",
      detail: "Static analysis engines in mission-critical software (such as NASA flight controllers and autonomous driving) prove the absence of null-pointer exceptions and arithmetic overflows. They achieve this by sound abstract interpretation, proving correctness for restricted decidable language subsets."
    },
    readings: "Sipser 4.1. Prove decidability of A_DFA, E_DFA, EQ_DFA, and A_CFG."
  },
  {
    week: 12,
    unit: "computability",
    title: "Undecidability, The Halting Problem & Reductions",
    sipser: "Sections 4.2 & 5.1",
    milestone: { text: "Problem Set 4 Assigned", type: "assign" },
    summary: "Cantor's diagonalization, undecidability of A_TM, the Halting Problem, mapping reductions (<=m), and Rice's Theorem.",
    spotlight: {
      tag: "Smart Contract Gas & Infallible Anti-Virus Limits",
      summary: "Two real-world manifestations of Turing's Halting Problem: Ethereum gas economics and Rice's Theorem in malware detection.",
      detail: "(1) Why does Ethereum charge Gas for every opcode execution? Because the EVM is Turing-complete; without execution metering, a smart contract with an infinite loop would halt the entire global blockchain (the Halting Problem).\n(2) Why can't any cybersecurity company build a 100% accurate anti-virus engine? By Rice's Theorem, any non-trivial semantic property of a program (including 'is this binary malicious') is mathematically undecidable."
    },
    readings: "Sipser 4.2 & 5.1. Cantor diagonalization proof and mapping reductions from A_TM to HALT_TM."
  },
  {
    week: 13,
    unit: "complexity",
    title: "Time Complexity & The Class P",
    sipser: "Sections 7.1–7.2",
    milestone: { text: "Problem Set 4 Due", type: "due" },
    summary: "Asymptotic Big-O notation, time-bounded Turing machines, definition of class P, and polynomial-time algorithms.",
    spotlight: {
      tag: "Polynomial vs Exponential at Production Scale",
      summary: "Why O(n^k) algorithms scale gracefully to billions of users while O(2^n) algorithms exhaust the universe's energy.",
      detail: "For an input of size n = 100, an O(n^3) algorithm completes in 1 million operations (microseconds). An exponential O(2^n) algorithm requires 1.26 * 10^30 operations — exceeding the total computational capacity of all servers on Earth combined. The class P represents the formal mathematical frontier of feasible computation."
    },
    readings: "Sipser 7.1 & 7.2. Review BFS pathfinding, 2SAT in P, and polynomial time relationships."
  },
  {
    week: 14,
    unit: "complexity",
    title: "The Class NP & NP-Completeness (Cook–Levin)",
    sipser: "Sections 7.3–7.4",
    milestone: { text: "Term Project Demos (Week 14)", type: "assign" },
    summary: "Nondeterministic polynomial time, polynomial verifiers, Cook–Levin Theorem, 3SAT, CLIQUE, and VERTEX-COVER reductions.",
    spotlight: {
      tag: "Post-Quantum Cryptography & Industrial SAT Solvers",
      summary: "How modern SAT/SMT solvers (Z3) solve 1M-variable NP-hard problems, and why lattice crypto resists quantum attacks.",
      detail: "Although 3SAT is NP-complete, modern CDCL (Conflict-Driven Clause Learning) SAT solvers routinely solve industrial instances with millions of boolean variables to verify silicon microchips. Furthermore, post-quantum lattice cryptography (Kyber/Dilithium) bases its security on the conjectured worst-case hardness of lattice vector problems in NP."
    },
    readings: "Sipser 7.3 & 7.4. Polynomial-time reduction steps: 3SAT <=P CLIQUE <=P VERTEX-COVER."
  },
  {
    week: 15,
    unit: "complexity",
    title: "Course Synthesis, Millennium Prize & The Quantum Horizon",
    sipser: "Course Review",
    milestone: { text: "Final Examination (Week 15)", type: "exam" },
    summary: "Comprehensive synthesis of the Chomsky hierarchy, Turing decidability, P vs NP Clay Millennium Prize, and intro to BQP.",
    spotlight: {
      tag: "The P vs NP Millennium Frontier",
      summary: "Why solving P vs NP carries a $1,000,000 Clay Millennium Prize, and what a proof of P = NP would mean for human civilization.",
      detail: "If P = NP were proven constructively, every problem whose solution can be checked quickly could also be solved quickly: all modern asymmetric cryptography (RSA, ECC) would instantly collapse, but optimal protein folding, automated theorem proving, and global scheduling would become trivial. The consensus of theoretical computer scientists is that P != NP."
    },
    readings: "Comprehensive review of Modules 1–4. Sipser Chapter 7 & course study guide."
  }
];

// Document Ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderTimeline(scheduleData);
  initFilters();
  initSearch();
  initModal();
});

// Theme Management
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('cs305-theme') || 'dark';
  
  document.body.setAttribute('data-theme', savedTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('cs305-theme', newTheme);
  });
}

// Render Timeline
function renderTimeline(data) {
  const container = document.getElementById('timeline-cards');
  if (!container) return;

  if (data.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--text-muted);">
        <p style="font-size: 1.1rem; margin-bottom: 8px;">No matching weeks found.</p>
        <p style="font-size: 0.85rem;">Try adjusting your search terms or filter selection.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = data.map(item => `
    <div class="week-card" data-week="${item.week}" data-unit="${item.unit}">
      <div class="week-summary">
        <div class="week-badge">
          <span class="week-num">W${item.week}</span>
          <span class="week-tag">${item.unit.toUpperCase()}</span>
        </div>

        <div class="week-content-preview">
          <h4>${item.title}</h4>
          <div class="week-meta-preview">
            <span class="sipser-ref">📖 ${item.sipser}</span>
            <span class="spotlight-tag-pill">⚡ ${item.spotlight.tag}</span>
          </div>
        </div>

        <div class="week-milestone-box">
          <span class="milestone-badge ${item.milestone.type}">${item.milestone.text}</span>
          <span class="week-toggle-icon">▼</span>
        </div>
      </div>

      <div class="week-details-drawer">
        <div class="details-grid">
          <div class="details-box">
            <h5>Weekly Topics & Objectives</h5>
            <p>${item.summary}</p>
          </div>
          <div class="details-box">
            <h5>Required Sipser Reading</h5>
            <p>${item.readings}</p>
          </div>
          <div class="details-box">
            <h5>Modern Technology Spotlight</h5>
            <p>${item.spotlight.summary}</p>
            <button class="btn btn-sm btn-outline case-study-btn" 
                    data-title="${item.spotlight.tag}" 
                    data-detail="${encodeURIComponent(item.spotlight.detail)}"
                    style="margin-top: 10px;">
              Read Deep-Dive Analysis &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Attach card toggle listeners
  document.querySelectorAll('.week-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't toggle card expansion if clicking the modal button
      if (e.target.closest('.case-study-btn')) return;
      card.classList.toggle('expanded');
    });
  });

  // Attach Case Study Modal buttons
  document.querySelectorAll('.case-study-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const title = btn.getAttribute('data-title');
      const detail = decodeURIComponent(btn.getAttribute('data-detail'));
      openModal(title, detail);
    });
  });

  // Re-trigger MathJax typesetting if available
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}

// Filter Schedule
function initFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      applyFilterAndSearch();
    });
  });
}

// Search Schedule
function initSearch() {
  const searchInput = document.getElementById('schedule-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', () => {
    applyFilterAndSearch();
  });
}

function applyFilterAndSearch() {
  const activeBtn = document.querySelector('.filter-btn.active');
  const filter = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
  const query = (document.getElementById('schedule-search')?.value || '').toLowerCase().trim();

  let filtered = scheduleData;

  // Filter by category
  if (filter !== 'all') {
    filtered = filtered.filter(item => item.unit === filter);
  }

  // Filter by query
  if (query) {
    filtered = filtered.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query) ||
      item.sipser.toLowerCase().includes(query) ||
      item.spotlight.tag.toLowerCase().includes(query) ||
      item.spotlight.summary.toLowerCase().includes(query) ||
      item.readings.toLowerCase().includes(query)
    );
  }

  renderTimeline(filtered);
}

// Modal Handlers
function initModal() {
  const modalOverlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');

  if (!modalOverlay || !closeBtn) return;

  closeBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

function openModal(title, detail) {
  const overlay = document.getElementById('modal-overlay');
  const titleEl = document.getElementById('modal-title');
  const bodyEl = document.getElementById('modal-body');

  if (!overlay || !titleEl || !bodyEl) return;

  titleEl.textContent = title;
  bodyEl.innerHTML = `
    <p style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
      ${detail.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>')}
    </p>
    <div style="margin-top: 24px; padding: 16px; background: rgba(0, 180, 216, 0.08); border-left: 3px solid var(--cyan); border-radius: 4px;">
      <h6 style="color: var(--cyan); text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.06em; margin-bottom: 4px;">Theory to Systems Bridge</h6>
      <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0;">
        This real-world case study is part of the CS 305 curriculum, connecting formal mathematical proofs to modern software architecture and systems engineering.
      </p>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}
