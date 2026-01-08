---
title: "Wavelet Flow Matching"
description: "Mémoire de Master : Architecture générative multi-résolution combinant Flow Matching et Ondelettes."
tags: "Master Thesis • Generative AI • Math"
year: "2025"
category: "paper"
cover: "../../assets/graph-wavefm2.png"
github: "https://github.com/AtwMaxime"
paper: "/master_thesis.pdf" 
---

### Résumé
Ce mémoire de Master (MSc MSIAM) explore une nouvelle approche des modèles génératifs continus. L'objectif était de résoudre les problèmes de coût computationnel et de cohérence globale dans la génération d'images haute résolution via le **Flow Matching**.

### Contribution Théorique
J'ai formalisé et implémenté une architecture couplant les **transformées en ondelettes de Haar** avec le **Conditional Flow Matching**. 

L'idée clé est de décomposer le processus de génération en plusieurs échelles de fréquence :
1.  Générer la structure globale (basses fréquences).
2.  Raffiner itérativement les détails (hautes fréquences) conditionnés par l'étage précédent.

### Résultats
Les expériences menées sur **CIFAR-10** et **CelebA** montrent que cette approche multi-résolution permet :
* Une convergence plus rapide lors de l'entraînement.
* Une meilleure stabilité (FID score compétitif).
* Une interprétabilité accrue grâce à la séparation fréquentielle.

> Travail réalisé au sein de l'équipe **ComLearn (Inria Grenoble)**.