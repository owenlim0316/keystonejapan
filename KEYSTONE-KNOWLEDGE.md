# Keystone group: shared knowledge and standing rules

Version: 19 November 2026. Maintained by Kaito (Keystone Digital AI Labs). This file is the single source of truth that every Keystone repository, document and assistant must follow. If anything here conflicts with older content, this file wins.

## 1. Language and law
- All written content (chat, documents, websites, code comments, commit messages) is in British English (en-GB). No exceptions.
- Legal and compliance content is governed by Malaysian law (including the Personal Data Protection Act 2010).
- A Bahasa Malaysia version may be offered on request; the English version prevails.

## 2. People
- Founder and President: Lim Chi Loon (known as Owen Lim). In legal and official documents always use the legal name **Lim Chi Loon**.
- Data protection officer: Lim Chi Loon.

## 3. Entities
| Entity | Registration | Role |
|---|---|---|
| Keystone Intelligence Global | SSM 202603209774; IANA PEN 67460 | IP and trademark vault. Controls use of the "Keystone Insights" name for every group entity. |
| Keystone Digital Sdn. Bhd. | SSM 202601031998 (1694093-U); IANA PEN 67360 | Malaysian operator. Subject to Keystone Intelligence Global on use of the name, but with much greater freedom as a Malaysian company. |
| Keystone Insights Corp. | Delaware C-Corp, file 10778512; LEI 254900MUEU3Z26I2OM74 (renew by 13 October 2027); IANA PEN 67359 | US subsidiary of Keystone Digital Sdn. Bhd. and Keystone Intelligence Global. No discretion over the name. |

- "Sdn. Bhd." means Sendirian Berhad (private limited). Do not use "Keystone Technologies Sdn. Bhd." or "Keystone Digital Central Berhad"; both are wrong.
- Official address (Keystone Digital Sdn. Bhd.): Level 22, Suite 015, Menara Merdeka 118, 50118 Kuala Lumpur, Malaysia.

## 4. Commercial policy
- Keystone acts as gatekeeper for US entities entering Southeast Asia (for example, setting up a regional base).
- Deposit required before work starts: **at least 50%** for US entities; **25%** for Malaysian entities.

## 5. Domains and contacts
- keystoneinsights.us: primary Keystone Insights Corp site (search engines rank this).
- keystoneinsights.org: standby copy, canonicalises to .us.
- keystoneinsights.xyz: Keystone Intelligence Global (DNS at Alibaba Cloud, site on Vercel).
- keystonedigital.com.my: Keystone Digital Sdn. Bhd.
- Founder emails use `owenlim@` (no dot), except owen.lim@keystonedigital.com.my for Keystone Digital legal contact. Public phone: +1 302 339 0133.

## 6. Website and crawler standard
- Allow good search and LLM crawlers (Google, Bing, Baidu, Sogou, 360, and reputable AI crawlers); block malicious bots.
- Keep webhook and API paths out of search (`X-Robots-Tag: noindex, nofollow`, disallowed in robots.txt).
- Ship robots.txt, sitemap.xml, llms.txt, a shared security.txt, README.md and SECURITY.md, plus security headers (HSTS, nosniff and similar), proper titles, meta and hreflang.
- Never publish secrets, personal data or screenshots of private accounts in a repository.

## 7. Domain knowledge references
- E-invoice: IRBM (LHDN) e-Invoice Guideline v4.8, published 30 August 2026 under section 134A of the Income Tax Act 1967; API mechanics follow the MyInvois SDK (sdk.myinvois.hasil.gov.my). Sandbox by default; production only with the founder's approval.
- Export: MATRADE study record. Key correction: a **preferential** certificate of origin supports tariff concessions under an FTA or preference scheme; a **non-preferential** certificate does not confer preferential treatment. Time-sensitive customs, permit and programme rules must be verified against current official sources (customs.gov.my, miti.gov.my, matrade.gov.my).

## 8. Change rules
- Inspect before changing. Confirm before DNS, billing, access or security changes.
- Use only standard (non-contributor) Meta Muse models. Seedance video is switched off.
