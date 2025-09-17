// SEO Audit utilities for LeadSnipper
export interface SEOAuditResult {
  score: number;
  issues: SEOIssue[];
  recommendations: string[];
  passedChecks: string[];
}

export interface SEOIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: string;
  impact: 'high' | 'medium' | 'low';
}

// SEO audit checklist
export const seoChecklist = {
  // Technical SEO
  technical: [
    'Page has a title tag',
    'Title tag is between 30-60 characters',
    'Page has a meta description',
    'Meta description is between 120-160 characters',
    'Page has canonical URL',
    'Page has proper heading structure (H1, H2, etc.)',
    'Images have alt attributes',
    'Page loads in under 3 seconds',
    'Page is mobile-friendly',
    'HTTPS is enabled',
    'No broken links',
    'Proper robots.txt file',
    'XML sitemap exists',
  ],
  
  // Content SEO
  content: [
    'Page has unique, valuable content',
    'Content includes target keywords naturally',
    'Proper keyword density (1-3%)',
    'Content is over 300 words',
    'Internal linking strategy',
    'External links to authoritative sources',
    'Content freshness and updates',
  ],
  
  // On-page SEO
  onPage: [
    'URL is SEO-friendly',
    'Page has proper schema markup',
    'Open Graph tags are present',
    'Twitter Card tags are present',
    'Favicon is present',
    'Page has breadcrumbs (if applicable)',
    'Proper use of semantic HTML',
  ],
  
  // Performance
  performance: [
    'Core Web Vitals are good',
    'Images are optimized',
    'CSS and JS are minified',
    'Gzip compression enabled',
    'Browser caching configured',
    'CDN usage (if applicable)',
  ],
};

// Audit a page's SEO
export function auditPageSEO(pageContent: string, url: string): SEOAuditResult {
  const issues: SEOIssue[] = [];
  const passedChecks: string[] = [];
  let score = 100;

  // Check title tag
  const titleMatch = pageContent.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (!titleMatch) {
    issues.push({
      type: 'error',
      message: 'Missing title tag',
      impact: 'high',
    });
    score -= 15;
  } else {
    const title = titleMatch[1];
    passedChecks.push('Page has a title tag');
    
    if (title.length < 30 || title.length > 60) {
      issues.push({
        type: 'warning',
        message: `Title length is ${title.length} characters. Recommended: 30-60 characters`,
        impact: 'medium',
      });
      score -= 5;
    } else {
      passedChecks.push('Title tag length is optimal');
    }
  }

  // Check meta description
  const descMatch = pageContent.match(/<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"']+)["\'][^>]*>/i);
  if (!descMatch) {
    issues.push({
      type: 'error',
      message: 'Missing meta description',
      impact: 'high',
    });
    score -= 10;
  } else {
    const description = descMatch[1];
    passedChecks.push('Page has a meta description');
    
    if (description.length < 120 || description.length > 160) {
      issues.push({
        type: 'warning',
        message: `Meta description length is ${description.length} characters. Recommended: 120-160 characters`,
        impact: 'medium',
      });
      score -= 3;
    } else {
      passedChecks.push('Meta description length is optimal');
    }
  }

  // Check canonical URL
  const canonicalMatch = pageContent.match(/<link[^>]*rel=["\']canonical["\'][^>]*href=["\']([^"']+)["\'][^>]*>/i);
  if (!canonicalMatch) {
    issues.push({
      type: 'warning',
      message: 'Missing canonical URL',
      impact: 'medium',
    });
    score -= 5;
  } else {
    passedChecks.push('Page has canonical URL');
  }

  // Check Open Graph tags
  const ogTitleMatch = pageContent.match(/<meta[^>]*property=["\']og:title["\'][^>]*>/i);
  const ogDescMatch = pageContent.match(/<meta[^>]*property=["\']og:description["\'][^>]*>/i);
  const ogImageMatch = pageContent.match(/<meta[^>]*property=["\']og:image["\'][^>]*>/i);
  
  if (!ogTitleMatch || !ogDescMatch || !ogImageMatch) {
    issues.push({
      type: 'warning',
      message: 'Incomplete Open Graph tags',
      impact: 'medium',
    });
    score -= 5;
  } else {
    passedChecks.push('Open Graph tags are present');
  }

  // Check Twitter Card tags
  const twitterCardMatch = pageContent.match(/<meta[^>]*name=["\']twitter:card["\'][^>]*>/i);
  if (!twitterCardMatch) {
    issues.push({
      type: 'info',
      message: 'Missing Twitter Card tags',
      impact: 'low',
    });
    score -= 2;
  } else {
    passedChecks.push('Twitter Card tags are present');
  }

  // Check heading structure
  const h1Matches = pageContent.match(/<h1[^>]*>/gi);
  if (!h1Matches || h1Matches.length === 0) {
    issues.push({
      type: 'error',
      message: 'Missing H1 tag',
      impact: 'high',
    });
    score -= 10;
  } else if (h1Matches.length > 1) {
    issues.push({
      type: 'warning',
      message: 'Multiple H1 tags found',
      impact: 'medium',
    });
    score -= 5;
  } else {
    passedChecks.push('Proper H1 tag structure');
  }

  // Check images without alt attributes
  const imgMatches = pageContent.match(/<img[^>]*>/gi);
  if (imgMatches) {
    const imagesWithoutAlt = imgMatches.filter(img => !img.includes('alt='));
    if (imagesWithoutAlt.length > 0) {
      issues.push({
        type: 'warning',
        message: `${imagesWithoutAlt.length} images missing alt attributes`,
        impact: 'medium',
      });
      score -= imagesWithoutAlt.length * 2;
    } else {
      passedChecks.push('All images have alt attributes');
    }
  }

  // Check structured data
  const structuredDataMatch = pageContent.match(/<script[^>]*type=["\']application\/ld\+json["\'][^>]*>/i);
  if (!structuredDataMatch) {
    issues.push({
      type: 'info',
      message: 'No structured data found',
      impact: 'low',
    });
    score -= 3;
  } else {
    passedChecks.push('Structured data is present');
  }

  // Generate recommendations
  const recommendations = generateRecommendations(issues);

  return {
    score: Math.max(0, score),
    issues,
    recommendations,
    passedChecks,
  };
}

function generateRecommendations(issues: SEOIssue[]): string[] {
  const recommendations: string[] = [];
  
  issues.forEach(issue => {
    switch (issue.message) {
      case 'Missing title tag':
        recommendations.push('Add a unique, descriptive title tag to your page');
        break;
      case 'Missing meta description':
        recommendations.push('Add a compelling meta description that summarizes your page content');
        break;
      case 'Missing canonical URL':
        recommendations.push('Add a canonical URL to prevent duplicate content issues');
        break;
      case 'Incomplete Open Graph tags':
        recommendations.push('Add complete Open Graph tags for better social media sharing');
        break;
      case 'Missing H1 tag':
        recommendations.push('Add a single, descriptive H1 tag to your page');
        break;
      default:
        if (issue.message.includes('alt attributes')) {
          recommendations.push('Add descriptive alt attributes to all images for accessibility and SEO');
        }
        break;
    }
  });

  // Add general recommendations
  recommendations.push(
    'Ensure your content is unique, valuable, and regularly updated',
    'Optimize page loading speed and Core Web Vitals',
    'Build high-quality backlinks from authoritative sources',
    'Monitor your SEO performance with Google Search Console',
    'Keep your content fresh and relevant to your target audience'
  );

  return [...new Set(recommendations)]; // Remove duplicates
}

// SEO score interpretation
export function interpretSEOScore(score: number): {
  grade: string;
  color: string;
  description: string;
} {
  if (score >= 90) {
    return {
      grade: 'A+',
      color: 'green',
      description: 'Excellent SEO optimization',
    };
  } else if (score >= 80) {
    return {
      grade: 'A',
      color: 'green',
      description: 'Very good SEO optimization',
    };
  } else if (score >= 70) {
    return {
      grade: 'B',
      color: 'yellow',
      description: 'Good SEO optimization with room for improvement',
    };
  } else if (score >= 60) {
    return {
      grade: 'C',
      color: 'orange',
      description: 'Fair SEO optimization, needs attention',
    };
  } else {
    return {
      grade: 'F',
      color: 'red',
      description: 'Poor SEO optimization, requires immediate attention',
    };
  }
}
