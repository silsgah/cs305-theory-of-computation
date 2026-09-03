# Study Guide & Chapter Summary: Theory of Computation
**Textbook Reference:** Michael Sipser, *Introduction to the Theory of Computation*, 3rd Edition (Cengage Learning)  
**Target Course:** GIMPA School of Technology — Level 300 Undergraduate (CS 305 / SOT 305)

---

## Part 1: Automata and Languages

### Chapter 0: Mathematical Preliminaries
- **Sets & Sequences:** Subsets, power sets $\mathcal{P}(A)$, Cartesian products $A \times B$, sequences, tuples.
- **Relations & Functions:** Binary relations, equivalence relations (reflexive, symmetric, transitive), partitions, functions $f: A \to B$, domain, range, bijections.
- **Graphs & Trees:** Directed/undirected graphs, paths, cycles, trees, root, degree.
- **Strings & Languages:**
  - Alphabet $\Sigma$: Finite set of symbols (e.g., $\{0,1\}$).
  - String: Finite sequence of symbols from $\Sigma$. Length $|w|$. Empty string $\varepsilon$.
  - Kleene Star $\Sigma^*$: Set of all finite strings over $\Sigma$.
  - Language $L$: Any subset $L \subseteq \Sigma^*$.
- **Proof Techniques:**
  1. *Direct Proof*: Logical deduction from axioms/hypotheses to conclusion.
  2. *Proof by Construction*: Demonstrating existence by explicitly constructing the object.
  3. *Proof by Contradiction*: Assuming $\neg P$ and deriving a logical impossibility ($Q \wedge \neg Q$).
  4. *Mathematical Induction*: Base case $P(0)$ and inductive step $\forall k, P(k) \implies P(k+1)$.

---

### Chapter 1: Regular Languages
- **Deterministic Finite Automata (DFA):**
  - Formal 5-tuple definition: $M = (Q, \Sigma, \delta, q_0, F)$
    - $Q$: Finite set of states.
    - $\Sigma$: Alphabet.
    - $\delta: Q \times \Sigma \to Q$: Transition function.
    - $q_0 \in Q$: Start state.
    - $F \subseteq Q$: Set of accept states.
- **Nondeterministic Finite Automata (NFA):**
  - Transition function $\delta: Q \times (\Sigma \cup \{\varepsilon\}) \to \mathcal{P}(Q)$.
  - **DFA & NFA Equivalence:** Every NFA can be converted to an equivalent DFA using the **Subset Construction** (Power Set Construction) algorithm. State space becomes $\mathcal{P}(Q)$ with size up to $2^{|Q|}$.
- **Regular Expressions (Regex):**
  - Operators: Union ($R_1 \cup R_2$), Concatenation ($R_1 \circ R_2$), Kleene Star ($R^*$).
  - **Equivalence:** A language is regular if and only if some finite automaton accepts it $\iff$ some regular expression describes it (proven via Generalized NFAs / GNFAs).
- **The Pumping Lemma for Regular Languages:**
  - *Theorem:* If $L$ is a regular language, there exists a pumping length $p \ge 1$ such that any string $s \in L$ with $|s| \ge p$ can be divided into 3 pieces $s = xyz$ satisfying:
    1. For each $i \ge 0$, $xy^iz \in L$.
    2. $|y| > 0$.
    3. $|xy| \le p$.
  - *Proof Template for Non-Regularity:*
    1. Assume $L$ is regular to derive a contradiction. Let $p$ be the pumping length.
    2. Choose a specific string $s \in L$ where $|s| \ge p$ (e.g., $s = 0^p 1^p$ for $L = \{0^n 1^n \mid n \ge 0\}$).
    3. Consider all possible decompositions $s = xyz$ satisfying $|xy| \le p$ and $|y| > 0$.
    4. Find an integer $i$ (e.g., $i = 0$ or $i = 2$) such that $xy^iz \notin L$.
    5. Conclude $L$ is not regular.

---

### Chapter 2: Context-Free Languages
- **Context-Free Grammars (CFG):**
  - Formal 4-tuple: $G = (V, \Sigma, R, S)$
    - $V$: Variables (non-terminals).
    - $\Sigma$: Terminals ($V \cap \Sigma = \emptyset$).
    - $R$: Rules of the form $A \to w$, where $A \in V$ and $w \in (V \cup \Sigma)^*$.
    - $S \in V$: Start variable.
  - **Parse Trees & Ambiguity:** A grammar is ambiguous if there exists a string $w \in L(G)$ with two or more distinct leftmost derivations (or distinct parse trees).
- **Chomsky Normal Form (CNF):**
  - Every rule is of the form $A \to BC$ or $A \to a$ (plus $S \to \varepsilon$ if $\varepsilon \in L$).
- **Pushdown Automata (PDA):**
  - Finite automaton equipped with an unbounded stack (LIFO memory).
  - Transition function: $\delta: Q \times (\Sigma \cup \{\varepsilon\}) \times (\Gamma \cup \{\varepsilon\}) \to \mathcal{P}(Q \times (\Gamma \cup \{\varepsilon\}))$, where $\Gamma$ is the stack alphabet.
  - **Equivalence:** A language is context-free $\iff$ accepted by some PDA.
- **Deterministic Context-Free Languages (DCFLs - 3rd Edition Addition):**
  - Deterministic Pushdown Automata (DPDA) and LL/LR grammar parsing foundations.
- **Pumping Lemma for Context-Free Languages:**
  - If $L$ is a CFL, there exists pumping length $p$ such that any $s \in L$ with $|s| \ge p$ can be written $s = uvxyz$ with:
    1. $uv^ixy^iz \in L$ for all $i \ge 0$.
    2. $|vy| > 0$.
    3. $|vxy| \le p$.

---

## Part 2: Computability Theory

### Chapter 3: The Church–Turing Thesis
- **Turing Machines (TM):**
  - Infinite tape divided into cells, head moves Left ($L$) or Right ($R$).
  - Formal 7-tuple: $M = (Q, \Sigma, \Gamma, \delta, q_0, q_{\text{accept}}, q_{\text{reject}})$
    - $\delta: Q \times \Gamma \to Q \times \Gamma \times \{L, R\}$.
    - $\Sigma \subset \Gamma$: Input alphabet (blank symbol $\sqcup \in \Gamma \setminus \Sigma$).
- **TM Variants (All Equivalent in Power):**
  - Multi-tape TMs.
  - Nondeterministic TMs (NTMs).
  - Enumerators.
- **The Church–Turing Thesis:**
  - The intuitive notion of an algorithm is mathematically equivalent to what can be performed by a Turing machine.

---

### Chapter 4: Decidability
- **Decidable vs. Recognizable Languages:**
  - *Turing-decidable (Recursive):* Machine halts on **all** inputs (either accepts or rejects).
  - *Turing-recognizable (Recursively Enumerable):* Machine accepts strings in $L$, but may loop infinitely on strings not in $L$.
- **Decidable Problems for Automata:**
  - $A_{\text{DFA}} = \{\langle B, w \rangle \mid \text{DFA } B \text{ accepts string } w\}$ is decidable.
  - $E_{\text{DFA}} = \{\langle B \rangle \mid B \text{ is a DFA and } L(B) = \emptyset\}$ is decidable.
  - $EQ_{\text{DFA}} = \{\langle A, B \rangle \mid A, B \text{ are DFAs and } L(A) = L(B)\}$ is decidable.
  - $A_{\text{CFG}}$ and $E_{\text{CFG}}$ are decidable.
- **Undecidability of the Halting Problem:**
  - $A_{\text{TM}} = \{\langle M, w \rangle \mid M \text{ is a TM and } M \text{ accepts } w\}$.
  - **Theorem:** $A_{\text{TM}}$ is undecidable (proven by Cantor's **Diagonalization Method**).

---

### Chapter 5: Reductions & Undecidability
- **Reductibility Concept:** If problem $A$ reduces to problem $B$ ($A \le B$), solving $B$ allows solving $A$. If $A$ is undecidable, then $B$ must also be undecidable.
- **Undecidable TM Problems:**
  - $HALT_{\text{TM}} = \{\langle M, w \rangle \mid M \text{ halts on } w\}$.
  - $E_{\text{TM}} = \{\langle M \rangle \mid L(M) = \emptyset\}$.
  - $REGULAR_{\text{TM}} = \{\langle M \rangle \mid L(M) \text{ is a regular language}\}$.
  - Rice's Theorem: Any non-trivial semantic property of TMs is undecidable.
- **Mapping Reductions ($\le_m$):**
  - Computable function $f: \Sigma^* \to \Sigma^*$ such that $w \in A \iff f(w) \in B$.

---

## Part 3: Complexity Theory

### Chapter 7: Time Complexity
- **Measuring Complexity:**
  - Worst-case running time $t(n) = \max_{|w|=n} (\text{steps taken on } w)$.
  - Asymptotic Big-$O$ notation: $f(n) = \mathcal{O}(g(n))$.
- **Class $\mathbf{P}$ (Polynomial Time):**
  - $\mathbf{P} = \bigcup_{k} \text{TIME}(n^k)$. Problems solvable deterministically in polynomial time (e.g., PATH, RELPRIME).
- **Class $\mathbf{NP}$ (Nondeterministic Polynomial Time):**
  - $\mathbf{NP} = \bigcup_{k} \text{NTIME}(n^k)$. Problems verifiable deterministically in polynomial time using a certificate/proof.
- **$\mathbf{NP}$-Completeness:**
  - A language $B$ is $\mathbf{NP}$-complete if:
    1. $B \in \mathbf{NP}$.
    2. Every $A \in \mathbf{NP}$ is polynomial-time reducible to $B$ ($A \le_P B$).
  - **Cook–Levin Theorem:** $SAT = \{\langle \phi \rangle \mid \phi \text{ is a satisfiable Boolean formula}\}$ is $\mathbf{NP}$-complete.
  - Standard NP-complete problems: $3SAT$, $CLIQUE$, $VERTEX\text{-}COVER$, $HAMPATH$, $SUBSET\text{-}SUM$.
