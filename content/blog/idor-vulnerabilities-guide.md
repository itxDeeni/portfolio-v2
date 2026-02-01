---
title: A Practical Guide to Finding IDOR Vulnerabilities
date: 2024-01-15
description: Learn how to identify and exploit Insecure Direct Object Reference vulnerabilities in modern APIs. From basic concepts to automated testing.
tags: [Security, API, OWASP, IDOR]
---

IDOR (Insecure Direct Object Reference) vulnerabilities are among the most common and impactful API security issues. They occur when an application exposes internal implementation objects to users without proper authorization checks.

## What is IDOR?

When you access a resource like `/api/users/123/orders`, the `123` is a direct object reference. If the application doesn't verify that *you* should have access to user 123's orders, that's an IDOR vulnerability.

## Common Patterns

### 1. Sequential IDs
```
GET /api/invoices/1001
GET /api/invoices/1002  # Can I access someone else's invoice?
```

### 2. Predictable UUIDs
Some "random" UUIDs aren't random at all. Check if they follow patterns.

### 3. Parameter Pollution
```
GET /api/profile?user_id=123&user_id=456
```

## Automated Testing

This is why I built [IDOR-Scan](https://github.com/itxDeeni/idor-scan) - to automate the tedious process of swapping user contexts and comparing responses.

## Prevention

1. Always verify authorization server-side
2. Use indirect references (mapped IDs)
3. Implement proper access control checks
4. Log and monitor access patterns
