# Redirect Map — WordPress → Edge (draft)
Finalize at domain cutover. Verify each new slug against the live built site
first (slugs come from feed episode titles). Format: Cloudflare `_redirects`.

## Episode companion posts → new episode pages (VERIFY slugs)
/aeo-fundamentals/episode-2-2-advanced-schema-stacks-and-harmonization/  /episodes/s2e2-advanced-schema-stacks-and-harmonization/  301
/aeo-fundamentals/episode-2-3-conversation-patterns-and-follow-up-funnels/  /episodes/s2e3-conversation-patterns-and-follow-up-funnels/  301
/aeo-fundamentals/episode-2-4-rag-aware-content-patterns/  /episodes/s2e4-rag-aware-content-patterns/  301
/aeo-fundamentals/episode-2-5-multimodal-evidence-design-for-llms-aeo-decoded/  /episodes/s2e5-multimodal-evidence-design-for-llms/  301
/aeo-fundamentals/episode-2-7-script-resilience-engineering-for-aeo/  /episodes/s2e7-resilience-engineering-for-aeo/  301

## Season 1 stub posts → new episode pages (VERIFY slugs)
/aeo-fundamentals/from-seo-to-aeo-why-your-content-needs-to-speak-ai/  /episodes/s1e1-from-seo-to-aeo-why-your-content-needs-to-speak-ai/  301
/aeo-fundamentals/episode-2-question-based-content/  /episodes/s1e2-question-based-content-the-secret-sauce-of-aeo/  301
/aeo-fundamentals/episode-1-3-structured-data-making-your-content-ai-friendly/  /episodes/s1e3-structured-data-making-your-content-ai-friendly/  301
/aeo-fundamentals/episode-1-4-entity-optimization-becoming-a-subject-authority/  /episodes/s1e4-entity-optimization-becoming-a-subject-authority/  301
/aeo-fundamentals/episode-1-5-context-and-intent-understanding-what-users-really-want/  /episodes/s1e5-context-and-intent-understanding-what-users-really-want/  301
/aeo-fundamentals/episode-6-conversation-design-creating-content-for-dialogue-not-just-display/  /episodes/s1e6-conversation-design-creating-content-for-dialogue-not-just/  301
/aeo-fundamentals/episode-1-7-multimodal-optimization-beyond-text-in-ai-search/  /episodes/s1e7-multimodal-optimization-beyond-text-in-ai-search/  301
/aeo-fundamentals/episode-1-8-aeo-analytics-measuring-success-in-the-age-of-ai-search/  /episodes/s1e8-aeo-analytics-measuring-success-in-the-age-of-ai-search/  301
/aeo-fundamentals/episode-1-9-the-faq-formula-structuring-content-for-maximum-ai-visibility/  /episodes/s1e9-the-faq-formula-structuring-content-for-maximum-ai/  301
/aeo-fundamentals/episode-1-10-measuring-aeo-success-beyond-traditional-metrics/  /episodes/s1e10-measuring-aeo-success-beyond-traditional-metrics/  301

## Pulled Season 3 post → the explanation (intentional)
/podcast-episodes-and-show-notes/episode-3-1-building-your-aeo-tech-stack/  /the-reset/  301

## Pages
/about/  /about/  (same URL — no redirect needed)
/contact/  /about/  301
/blog/  /episodes/  301
/aeo-decoded-resources/  /  301
/ai-tools-and-prompt-engineering/4-research%e2%80%91backed-prompting-techniques-to-master-any-llm/  /  301

## Catch-all (last rule)
/aeo-fundamentals/*  /episodes/  301
