---
title: Nintex the bad & the ugly 
path: /nintex-bad-ugly
date: 2020-03-11
summary: Nintex offers potentially a lot - but my experience is that its at it creates at least as many problems as solutions
tags: ['nintex', 'review','office365']
---

![background](./images/blog_bg_3.jpg)

1. Nintex has poor scalability, which by itself is not the worst news; Nintex solutions are not intended for business-critical applications. But when compared to the combination of Power automate AND  Azure functions with control of performance and pricing, the problem becomes obvious. [Azure function and PowerApps togther](https://powerapps.microsoft.com/en-us/blog/create-business-apps-using-powerapps-and-azure-functions/)
1. Not governable, users can and will do as they want - which is a valid criticism of any of the no-code solutions. But for Nintex there is no way of applying governance from within the Nintex tool _and_ what uses up the licenses. By contrast, it is possible to create modular components which a no-code developer could reuse. [Governance Considerations](https://docs.microsoft.com/en-us/power-platform/admin/governance-considerations) 
1. Not testable, no meaningful Dev Ops, -  power apps have testing built-in, and azure functions can use all the testing tools that any other piece of code could use. [How to create environments](https://docs.microsoft.com/en-us/power-platform/admin/create-environment) AND [proper development processes that use no-code](https://powerapps.microsoft.com/en-us/blog/powerapps-for-pros-develop-faster-with-low-code/)
1. Mobility is only 'responsive' for Nintex forms. The workflow design space is beyond terrible, just horrid - as opposed to the deep integration and mobility 'profiles' in the power platform. It is possible to even create apps from a mobile device, which I would not recommend, but it is possible.
1. Relatively little 'connector' integration opportunities - Dynamics, compared to the vast range within the power platform, and you can create connectors [Create connectors - this is pretty technical](https://docs.microsoft.com/en-us/azure/azure-functions/app-service-export-api-to-powerapps-and-flow "https://docs.microsoft.com/en-us/azure/azure-functions/app-service-export-api-to-powerapps-and-flow").
1. Nintex represents a poor investment and this despite Nintex claim to have flexible in pricing.[Nintex pricing](https://www.nintex.com/resources/pricing/) By contrast, the power platform and its integration with Azure ensures that you only pay for what you use.
1. Teams integration [Nintex's teams integration](https://www.nintex.com/blog/microsoft-teams-nintex-better-together/) which looks pretty OK right ? WRONG it's a single page that's IT you want to do stuff with Teams from the power platform. Compare that with what is possible in Microsoft, and even the documentation is better: [Microsoft Teams integration](https://flow.microsoft.com/en-us/connectors/shared_teams/microsoft-teams/)

## Best arguments against Nintex

1. Tempo/roadmap of releases from Nintex is not a thing this is from 2017! [2017 Nintex Product road map - this is the most up to date I could find](https://www.nintex.com/blog/whats-new-introducing-nintex-product-roadmap/ "https://www.nintex.com/blog/whats-new-introducing-nintex-product-roadmap/") compare with power platform 
1. Getting Nintex capable developers is EXPENSIVE because there are so few of them. Power platform people are numerous, or can be trained or can be engaged in a variety of ways:  to do 'micro-jobs', or to write reusable modules in a variety of codebases, or even write Azure Functions. Can be written a wide range of ways so you can pick and choose what makes sense cost/performance-wise. Just look on job boards how many Nintex jobs are there out there? It won't be any or many, compare with office 365 / power platform jobs.
1. Nintex support is pretty minimal, its a Nintex discussion board. Office 365 has several massive communities, many of which have nothing to do with Microsoft. Just do the youtube test compare videos about the power platform with Nintex.
1. Nintex is just Nintex and despite having 'connectors' to various other solutions, what there is - is all Nintex, which is a considerable limitation. 
1. Think about the money invested by Nintex into their product and that it's a single vendor who could be bought-out or go under. Consider the example of FarmVille the game worth billions on Facebook, till they switched off access to the API. Compare with Microsoft where Office 365 and the power platform is central to their offering, so you have a much more secure investment.

## Update 2020 May 11

Covid has led Nintex to providw free training which could help with the shortage of staff to help with Nintex deployments
Nintex seems to have a bot offering that is new since I wrote the above, it has its own pricing model.


