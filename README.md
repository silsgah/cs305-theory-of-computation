# CS 305: Theory of Computation

[![GitHub Pages](https://img.shields.io/badge/Course%20Portal-Live%20on%20GitHub%20Pages-00b4d8?style=for-the-badge&logo=github)](https://silsgah.github.io/cs305-theory-of-computation/)
[![Institution](https://img.shields.io/badge/Institution-GIMPA%20School%20of%20Technology-002b49?style=for-the-badge)](https://gimpa.edu.gh/)
[![Level](https://img.shields.io/badge/Level-300%20Undergraduate-1e73be?style=for-the-badge)](https://silsgah.github.io/cs305-theory-of-computation/)
[![License](https://img.shields.io/badge/License-Educational-green?style=for-the-badge)](LICENSE)

> **Ghana Institute of Management and Public Administration (GIMPA)**  
> **School of Technology | Department of Computer Science**  
> **Course Code:** CS 305 / SOT 305  
> **Credits:** 3 Credit Hours | **Duration:** 15 Weeks  
> **Primary Textbook:** Michael Sipser, *Introduction to the Theory of Computation*, 3rd International Edition (Cengage Learning)

---

## 🌐 Interactive Course Website & Syllabus
Visit the official interactive course portal hosted on GitHub Pages:  
👉 **[https://silsgah.github.io/cs305-theory-of-computation/](https://silsgah.github.io/cs305-theory-of-computation/)**

The interactive website features:
- **Searchable & Filterable 15-Week Schedule**: Browse lectures, textbook readings, homework assignments, and exams.
- **Modern Technology Spotlights**: Case study deep dives connecting automata and complexity theory to:
  - *LLM Grammar-Guided JSON Decoding* (Outlines, Guidance)
  - *Cloudflare Catastrophic ReDoS Outage Analysis* (Regex exponential backtracking)
  - *Ethereum Smart Contract Gas Mechanics* (The Halting Problem in blockchain)
  - *Infallible Anti-Virus Detection Impossibility* (Rice's Theorem)
  - *Industrial SMT Solvers & Post-Quantum Cryptography* (Z3, Kyber lattices, Cook–Levin Theorem)
- **Proof Mastery Guide**: Interactive adversarial game strategy for the Pumping Lemma.
- **Simulator Lab Integration**: Direct links to browser-based DFA/NFA/PDA and Turing Machine visualizers.

---

## 📚 Course Materials & Repository Structure

```text
.
├── index.html                                        # GitHub Pages course portal
├── style.css                                         # Design system & responsive layout
├── app.js                                            # Interactive schedule & case study modal engine
├── computationTheory.pdf                             # Official 15-week complete syllabus (PDF)
├── computationTheory.tex                             # LaTeX source for syllabus
├── Automaton_Simulator_Lab_Manual.pdf                # Hands-on automaton simulation lab manual
├── Automaton_Simulator_Lab_Manual.tex                # LaTeX source for lab manual
├── course_study_guide.md                             # Comprehensive chapter-by-chapter study notes
│
├── slides/                                           # Official Lecture Slide Decks (Beamer PDFs)
│   ├── Module1_Automata_and_Formal_Languages.pdf     # DFAs, NFAs, Regex, Pumping Lemma
│   ├── Module2_Context_Free_Languages_and_Parsing.pdf# CFGs, PDAs, Ambiguity, CNF
│   ├── Module3_Turing_Machines_and_Undecidability.pdf# Turing Machines, Halting Problem, Reductions
│   └── Module4_Computational_Complexity_and_NP.pdf   # Classes P, NP, Cook-Levin, NP-Completeness
│
└── assignments/                                      # Student Homework Problem Sets (Clean, No Solutions)
    ├── Problem_Set_1.pdf                             # Regular Languages & Automata
    ├── Problem_Set_2.pdf                             # Context-Free Languages & Pushdown Automata
    ├── Problem_Set_3.pdf                             # Turing Machines & Decidability
    └── Problem_Set_4.pdf                             # Undecidability & NP-Completeness
```

---

## 🗓️ 15-Week Curriculum Overview

| Week | Unit | Core Topic | Sipser Reading | Modern Case Study Spotlight | Deliverable |
|:---:|:---:|:---|:---:|:---|:---:|
| **1** | Automata | Preliminaries & Computation Models | Ch. 0 | Chomsky Hierarchy in LLM Tokenization | Diagnostic Review |
| **2** | Automata | Deterministic Finite Automata (DFA) | 1.1 | Snort/Zeek Firewall Streaming Match in $O(n)$ | **Problem Set 1 Assigned** |
| **3** | Automata | Nondeterministic Automata & Equivalence | 1.2 | NFA State Explosion in Search Engines | **Problem Set 1 Due** |
| **4** | Automata | Regular Expressions & GNFA Conversion | 1.3 | Catastrophic ReDoS Cloudflare Outage | **Quiz 1 (In-Class)** |
| **5** | Automata | Nonregular Languages & Pumping Lemma | 1.4 | Memory Bounds of Finite State Systems | **Problem Set 2 Assigned** |
| **6** | Automata | Context-Free Grammars (CFG) & Parsing | 2.1 | Grammar-Guided LLM JSON/SQL Decoding | **Problem Set 2 Due** |
| **7** | Automata | Pushdown Automata (PDA) & Stack Memory | 2.2 | Compiler ASTs & Program Call Stacks | Midterm Review |
| **8** | Automata | CFL Pumping Lemma & Midterm | 2.3 | Transformer Limits on Dyck Parentheses | **Midterm Examination** |
| **9** | Computability | Turing Machines (TM) & Tape Architecture | 3.1–3.2 | Chain-of-Thought LLMs as Turing Machines | **Problem Set 3 Assigned** |
| **10** | Computability | The Church–Turing Thesis | 3.3 | Physical Limits & Quantum Computation | **Problem Set 3 Due** |
| **11** | Computability | Decidability of Formal Languages | 4.1 | Automated Software Static Analysis (Infer) | **Quiz 2 (In-Class)** |
| **12** | Computability | Undecidability & The Halting Problem | 4.2, 5.1 | Ethereum Gas Limits & Anti-Virus Bounds | **Problem Set 4 Assigned** |
| **13** | Complexity | Time Complexity & The Class P | 7.1–7.2 | Polynomial vs Exponential at Web Scale | **Problem Set 4 Due** |
| **14** | Complexity | The Class NP & Cook–Levin Theorem | 7.3–7.4 | Post-Quantum Lattice Crypto & Z3 Solvers | **Term Project Demos** |
| **15** | Complexity | P vs NP Millennium Prize & Synthesis | Review | The Frontier of Theoretical Computer Science | **Final Examination** |

---

## 🛠️ Recommended Software Simulators

1. **Automaton Simulator**: [https://automatonsimulator.com](https://automatonsimulator.com)  
   *Browser-based interactive simulation of DFAs, NFAs, PDAs, and Turing Machines.*
2. **JFLAP**: [https://www.jflap.org](https://www.jflap.org)  
   *The classic Java workbench for formal languages, grammar transformations, and multi-tape TMs.*
3. **Python `automata-lib`**:
   ```bash
   pip install automata-lib
   ```
   *Programmatic construction, minimization, and testing of finite automata in Python.*

---

## ⚖️ Grading Policy

- **Homework Problem Sets (4):** 30% (7.5% each)
- **In-Class Quizzes (2):** 10% (5% each)
- **Midterm Examination:** 20%
- **Applied Term Project:** 10%
- **Final Examination:** 30%
- **Total:** 100%

---

## 🔒 Academic Integrity Notice

All problem sets, quizzes, and project deliverables must reflect each student's independent intellectual work. In accordance with GIMPA School of Technology academic regulations:
- Assignment solutions and answer keys are strictly withheld from public repositories.
- Unauthorized distribution, copying, or plagiarism of problem set solutions is strictly prohibited.

---

&copy; 2026 GIMPA School of Technology · Department of Computer Science
