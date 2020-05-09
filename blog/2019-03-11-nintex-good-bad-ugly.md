---
title: Nintex the bad the ugly the good I guess
path: /nintex-good-bad-ugly
date: 2019-03-11
summary: Nintex offers potentially a lot - but my experience is that its at it creates at least as many problems as solutions
tags: ['nintex', 'review']
---

![background](./images/blog_bg_3.jpg)

## Arguments against Nintex
1. Nintex has poor scalability (I'm leaving a bit of wiggle room here, as I've not so much experience with its cloud offering) - On the other hand Power automate has azure functions and using those together means you have azure function performance and pricing control with power platforms user-friendliness, combined.  [Azure function and PowerApps togther](https://powerapps.microsoft.com/en-us/blog/create-business-apps-using-powerapps-and-azure-functions/)
1. Not governable, users just do exactly what they want, no real way of controlling what gets built AND what uses up the licenses - power platform _can_ be made modular and have a look here, though the power platform if left to the tender mercies of users, can go very wrong too: [Governance](https://docs.microsoft.com/en-us/power-platform/admin/governance-considerations 
1. Not testable, no meaningful Dev Ops , -  power apps have testing that users can use, and azure functions are properly testable. [How to creating environments](https://docs.microsoft.com/en-us/power-platform/admin/create-environment) AND [proper development processes that use no-code](https://powerapps.microsoft.com/en-us/blog/powerapps-for-pros-develop-faster-with-low-code/)
1. Mobility is only 'responsive' for Nintex forms, the design space IS A EFFING NIGHTMARE, just horrid - as apposed to deep integration and mobility 'profiles' and you _can_ create apps from a mobile device, which I would not recommend but it is possible.
1. Relatively little ‘connector’ integration opportunities - Dynamics, compared to the vast range within the power plaform and you can create your own connectors [https://docs.microsoft.com/en-us/azure/azure-functions/app-service-export-api-to-powerapps-and-flow](https://docs.microsoft.com/en-us/azure/azure-functions/app-service-export-api-to-powerapps-and-flow "https://docs.microsoft.com/en-us/azure/azure-functions/app-service-export-api-to-powerapps-and-flow").
1. Nintex to me represents a bad business model, despite Nintex claiming to have flexibility in pricing [https://www.nintex.com/resources/pricing/](https://www.nintex.com/resources/pricing/ "https://www.nintex.com/resources/pricing/")- the power platform and its integration with Azure means you can pay for only what you use.
1. Teams integration [https://www.nintex.com/blog/microsoft-teams-nintex-better-together/](https://www.nintex.com/blog/microsoft-teams-nintex-better-together/ "https://www.nintex.com/blog/microsoft-teams-nintex-better-together/") looks pretty good right ? WRONG it's a single page that’s IT you want to do stuff with Teams from the power platform THERE IS SO MUCH MORE AND ITS MUCH BETTER DOCUMENTED !!! [https://flow.microsoft.com/en-us/connectors/shared_teams/microsoft-teams/](https://flow.microsoft.com/en-us/connectors/shared_teams/microsoft-teams/ "https://flow.microsoft.com/en-us/connectors/shared_teams/microsoft-teams/") oh AND its got AI BOT integration. Nintex is adding nothing, except an extra support headache.

## Best arguments against Nintex

1. Tempo/roadmap of releases from Nintex is not a thing this is from 2017! [https://www.nintex.com/blog/whats-new-introducing-nintex-product-roadmap/](https://www.nintex.com/blog/whats-new-introducing-nintex-product-roadmap/ "https://www.nintex.com/blog/whats-new-introducing-nintex-product-roadmap/") compare with power platform
2. Getting Nintex capable developers is EXPENSIVE - there are lots of ways of engaging power platform people to work micro-jobs, azure functions can be written a wide range of ways so you can pick and choose what makes sense cost/performance-wise. Just look on a job boards how many nNntex jobs are out there? it won’t be any or many, compare with office 365 / power platform jobs.
3. Support is pretty minimal, its basically a Nintex discussion board. Office 365 has a number of massive communities, do the youtube test compare videos about the power platform with Nintex
4. Nintex is just Nintex, it does have ‘connectors’ to salesforce for example - it doesn’t have dynamics! and deep integration with the whole Azure platform
5. Think about the money invested by Nintex into their product and that it's a single vendor who could be bought out or go under AND all that code would be wasted….don’t think it could happen? ask about FarmVille the game worth Billions on Facebook, till FB switched off the API. Whereas think about Microsoft Office 365 and the power platform is central to their offering, so you have a much more secure investment.

## Best argument for Nintex

Nintex works with external users (i.e.. people not in your tenant) where power platform doesn’t WELL that was true but…its not anymore .[https://powerapps.microsoft.com/en-us/blog/introducing-powerapps-portals-powerful-low-code-websites-for-external-users/](https://powerapps.microsoft.com/en-us/blog/introducing-powerapps-portals-powerful-low-code-websites-for-external-users/ "https://powerapps.microsoft.com/en-us/blog/introducing-powerapps-portals-powerful-low-code-websites-for-external-users/")
