# Personal Budget API - Portfolio Project
## Overview
This API that allows clients to create and manage a personal budget. Using Envelope Budgeting principles. It allows users to manage budget envelopes and track the balance of each envelope and follows best REST practices.

## Functionality
- You can create different envelopes and add an amount representing a budget.
- You can take a look at your balances in each envelope.
- You can update each envelope with the amount spent.
- You cannot spend beyound your budget.


## Endpoints
- Get all envelopes : **/envelopes/**

- Get one envelope : **/envelopes/:envelopedId/**

- Create an envelope : **/envelopes/**
The request body must have *body.id, body.name, body.amount*. A *body.balance* which is initially equal to *body.amount* is automatically added for tracking balance.

- Update an envelope : **/envelopes/:envelopeId/**
The request body must have *body.amount* which represents the amount spent.

- Delete an envelope : **/envelopes/:envelopeId/**


## Issues
- You can only update for expenditure but cannot change the envelope `amount` i.e. budget or the name of the envelope
