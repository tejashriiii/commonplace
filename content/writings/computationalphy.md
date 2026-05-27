---
title: When Physics Needed Computers
description: Computational Physics, Scientific Computing, AI in Physics.
posted: 17 March 2026
layout: post.njk
activePage: writings
tags: writings
order: 1
---

*"The purpose of computational physics is to remind physicists of computer science and computer scientists of physics."* — Rubin H. Landau

#### The Problem (and solution):

For most of its history, physics ran on paper. Newton's laws, Maxwell's equations, Schrödinger's wave functions, all derived by hand, expressed in elegant solutions. But when used in the real world, the elegance was lost. Turbulent fluids, interacting particles, all had messy solutions; the gap between knowing *the laws* and predicting *the outcome* was enormous. This is where computers walked in.

Starting in the 1940s and 50s, physicists began using early machines to do what humans couldn't: grind through millions of arithmetic steps without fatigue. One of the earliest major computational breakthroughs was the Monte Carlo method, pioneered at Los Alamos (yes, the nuclear weapons lab), which essentially simulated the scenario thousands of times using random sampling and averaged the results. And it is still used today in everything from nuclear physics to medical radiation planning.

#### Then the Numerical Methods:

New technologies emerged as the hardware improved. To define how things change, differential equations are used, and to analytically solve them, huge continuous equations were turned into tiny computable steps. This gave birth to algorithms like Runge-Kutta, prone to fewer errors than Euler's methods.

#### HPC:

More accuracy meant more computation, one machine wasn't enough. High Performance Computing means working with thousands of processors in parallel, from load balancing to message passing. CERN's computing grid alone runs 1.4 million cores across 170 sites in 42 countries just to process LHC collision data in real time. The research didn't stop at building the Large Hadron Collider, it began there, the later computation of results is equally as important.

#### And Now, ML:

This was a new approach; rather than solving physical equations faster, Machine Learning asks a different question: without explicitly solving the equations, can we learn the relationship between inputs and outputs directly from the data?

The workflow is pretty straightforward: run expensive simulations many times, train a neural network on the results, and then use the model for instant predictions instead of re-running the simulation. Physics-Informed Neural Network (PINNs) is a classic example, baking physical laws directly into the training process so the model can't produce results that violate conservation of energy or fluid dynamics constraints.

At CERN, ML filters 25 GB/s of LHC collision data in milliseconds, deciding whether to save or discard a collision event. AlphaFold cracked protein structure prediction, a fifty-year open problem, by treating it as pattern recognition.

*From pen and paper to instant solutions, the conversation isn't over yet. Quantum computing promises real-time physics simulations that classical computers are inherently bad at; the list goes on.*