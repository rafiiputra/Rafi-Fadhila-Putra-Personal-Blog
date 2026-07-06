<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Professional Working Experience</title>
    <style>
        /* ==========================================================================
           1. CORE VARIABLES, RESET & BASE STYLES
           ========================================================================== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }
        html {
            scroll-behavior: smooth;
        }
        body {
            color: #e2e8f0;
            line-height: 1.6;
            overflow-x: hidden;
            background: #09090b;
        }
        /* ==========================================================================
           2. HEADER NAVIGATION ARCHITECTURE
           ========================================================================== */
        header {
            background: rgba(9, 9, 11, 0.9);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(255, 85, 0, 0.15);
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
        }
        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        .logo {
            font-size: 22px;
            font-weight: 800;
            background: linear-gradient(45deg, #ff4500, #ff8c00);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .nav-links {
            list-style: none;
            display: flex;
            align-items: center;
        }
        .nav-links li {
            margin-left: 25px;
        }
        .nav-links a {
            text-decoration: none;
            color: #9ca3af;
            font-weight: 600;
            transition: all 0.3s ease;
            cursor: pointer;
        }
        .nav-links a:hover {
            color: #ff5500;
        }
        .order-nav-btn {
            color: #ff5500 !important;
            font-weight: 700 !important;
            border: 1px solid rgba(255, 85, 0, 0.3);
            padding: 6px 14px;
            border-radius: 4px;
            background: rgba(255, 85, 0, 0.05);
        }
        .order-nav-btn:hover {
            background: #ff5500 !important;
            color: #ffffff !important;
        }
        /* ==========================================================================
           3. HERO INTERFACE ELEMENTS
           ========================================================================== */
        .hero {
            position: relative;
            overflow: hidden;
            text-align: center;
            padding: 180px 20px 120px;
            border-bottom: 1px solid rgba(255, 68, 0, 0.15);
            background: radial-gradient(circle at 50% 50%, rgba(255, 77, 0, 0.08), transparent 60%);
        }
        .hero h1 {
            font-size: 56px;
            font-weight: 900;
            color: #ffffff;
            letter-spacing: 1px;
            margin-bottom: 15px;
        }
        .hero p {
            font-size: 20px;
            max-width: 600px;
            margin: 0 auto 35px;
            color: #9ca3af;
        }
        /* Buttons Framework */
        .btn {
            display: inline-block;
            background: transparent;
            color: #ff5500;
            padding: 14px 35px;
            text-decoration: none;
            border-radius: 6px; 
            font-weight: 700;
            letter-spacing: 1px;
            border: 2px solid #ff5500;
            transition: all 0.3s ease;
            cursor: pointer;
        }
        .btn:hover {
            color: #ffffff;
            background: #ff5500;
            box-shadow: 0 0 20px rgba(255, 85, 0, 0.4);
            transform: translateY(-2px);
        }
        /* Typography & Section Wrappers */
        .section-title {
            text-align: center;
            font-size: 36px;
            font-weight: 800;
            color: #ffffff;
            margin-bottom: 10px;
        }
        .section-subtitle {
            text-align: center;
            color: #71717a;
            font-size: 15px;
            margin-bottom: 45px;
        }
        /* About Me Slider System */
        .about-section {
            max-width: 1000px;
            margin: 100px auto 40px;
            padding: 0 20px;
            scroll-margin-top: 100px;
        }
        .slider-viewport {
            position: relative;
            background: #18181b;
            border: 1px solid rgba(255, 85, 0, 0.2);
            border-left: 4px solid #ff5500;
            border-radius: 8px;
            overflow: hidden;
            width: 100%;
        }
        .slider-track {
            display: flex;
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            width: 200%;
        }
        .about-slide {
            width: 50%;
            flex-shrink: 0;
            padding: 45px 50px;
        }
        .about-slide p {
            font-size: 16px;
            line-height: 1.8;
            color: #e2e8f0;
            margin-bottom: 16px;
        }
        .about-slide p:last-child {
            margin-bottom: 0;
        }
        .about-slide strong {
            color: #ff8c00;
            font-weight: 600;
        }
        .slider-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 10px 15px 10px;
        }
        .slider-arrow {
            background: #18181b;
            color: #ff5500;
            border: 1px solid rgba(255, 85, 0, 0.3);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            transition: all 0.3s ease;
        }
        .slider-arrow:hover {
            background: #ff5500;
            color: #ffffff;
        }
        .slider-dots {
            display: flex;
            gap: 10px;
        }
        .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.2);
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .dot.active {
            background: #ff5500;
            transform: scale(1.1);
        }
        /* Tools Section */
        .tools-section {
            max-width: 1200px;
            margin: 100px auto 40px;
            padding: 0 20px;
            scroll-margin-top: 100px;
        }
        .tools-category {
            margin-bottom: 50px;
        }
        .category-title {
            font-size: 22px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 20px;
            padding-left: 12px;
            border-left: 3px solid #ff5500;
        }
        .tools-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
        }
        .tool-card {
            background: #18181b;
            border: 1px solid rgba(255, 255, 255, 0.05);
            padding: 25px;
            border-radius: 8px;
            transition: all 0.3s ease;
        }
        .tool-card:hover {
            transform: translateY(-4px);
            border-color: rgba(255, 85, 0, 0.3);
        }
        .tool-card h4 {
            font-size: 17px;
            color: #ff8c00;
            font-weight: 700;
            margin-bottom: 10px;
        }
        .tool-card p {
            color: #9ca3af;
            font-size: 14px;
            line-height: 1.6;
        }
        /* Brands Layout System */
        .brands-section {
            max-width: 1200px;
            margin: 100px auto 40px;
            padding: 0 20px;
            scroll-margin-top: 100px; 
        }
        .brands-slider-container {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-top: 20px;
        }
        .brands-viewport {
            overflow: hidden;
            width: 100%;
        }
        .brands-track {
            display: flex;
            gap: 20px;
            transition: transform 0.4s ease;
        }
        .brand-card {
            flex: 0 0 calc(25% - 15px);
            min-width: 250px;
            background: #18181b;
            border: 1px solid rgba(255, 85, 0, 0.15);
            border-top: 3px solid #ff5500;
            padding: 30px;
            border-radius: 8px;
            text-align: center;
            font-weight: 700;
            color: #ffffff;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .brand-card:hover {
            transform: translateY(-5px);
            border-color: #ff5500;
            box-shadow: 0 8px 25px rgba(255, 85, 0, 0.15);
        }
        .brands-arrow {
            background: #18181b;
            color: #ff5500;
            border: 1px solid rgba(255, 85, 0, 0.3);
            width: 45px;
            height: 45px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 18px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.3s ease;
        }
        .brands-arrow:hover:not(:disabled) {
            background: #ff5500;
            color: #ffffff;
        }
        .brands-arrow:disabled {
            opacity: 0.3;
            cursor: not-allowed;
        }
        .brands-progress-container {
            width: 100%;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            margin-top: 25px;
            border-radius: 2px;
            overflow: hidden;
        }
        .brands-progress-bar {
            height: 100%;
            width: 0%;
            background: #ff5500;
            transition: width 0.3s ease;
        }
        /* Contact Section */
        .contact-section {
            max-width: 800px;
            margin: 100px auto 60px;
            padding: 0 20px;
            text-align: center;
            scroll-margin-top: 100px;
        }
        .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 20px;
            margin-top: 40px;
        }
        .contact-card {
            background: #18181b;
            border: 1px solid rgba(255, 255, 255, 0.05);
            padding: 25px;
            border-radius: 8px;
            text-decoration: none;
            color: inherit;
            transition: all 0.3s ease;
        }
        .contact-card:hover {
            border-color: #ff5500;
            transform: translateY(-2px);
        }
        .contact-card h4 {
            color: #ff8c00;
            font-size: 16px;
            margin-bottom: 8px;
            font-weight: 700;
        }
        .contact-card p {
            color: #ffffff;
            font-size: 14px;
            word-break: break-all;
        }
        /* Modals Overlay Settings */
        .modal-overlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex; justify-content: center; align-items: center;
            opacity: 0; pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 2000;
        }
        .modal-overlay.active {
            opacity: 1; pointer-events: auto;
        }
        .modal-container {
            background: #18181b;
            border: 1px solid #ff5500;
            padding: 30px; max-width: 500px; width: 90%;
            border-radius: 8px; position: relative;
        }
        .modal-close-btn {
            position: absolute; top: 15px; right: 20px;
            background: none; border: none; color: #ff5500;
            font-size: 24px; cursor: pointer;
        }
        .modal-title { color: #fff; margin-bottom: 15px; font-size: 22px; }
        .modal-body { color: #9ca3af; font-size: 15px; }
        
        /* Campaign Section Core Spaces Addon */
        .campaign-projects-section {
            max-width: 1200px;
            margin: 100px auto 40px;
            padding: 0 20px;
            scroll-margin-top: 100px;
        }
        .carousel-container {
            position: relative;
            width: 100%;
            overflow: hidden;
            padding: 40px 0;
        }
        .campaign-slider-wrapper {
            width: 100%;
            overflow: hidden;
            perspective: 1200px;
        }
        .campaign-slider {
            display: flex;
            gap: 30px;
            width: max-content;
            will-change: transform;
        }
        .campaign-card {
            width: 340px;
            background-color: #18181b; 
            border: 1px solid #27272a;
            border-radius: 16px;
            padding: 30px;
            display: flex;
            flex-direction: column;
            user-select: none;
            transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s, box-shadow 0.3s;
        }
        /* 📐 3D Angled Matrix Perspective */
        .card-angle-left { transform: rotateY(10deg) scale(0.96); }
        .card-angle-straight { transform: rotateY(0deg) scale(0.98); }
        .card-angle-right { transform: rotateY(-10deg) scale(0.96); }

        .campaign-card:hover {
            transform: rotateY(0deg) scale(1.03) translateY(-10px) !important;
            border-color: #ff5500; 
            box-shadow: 0 15px 35px rgba(255, 85, 0, 0.2);
            cursor: pointer;
        }
        .card-badge {
            align-self: flex-start;
            background-color: rgba(255, 85, 0, 0.1);
            color: #ff5500;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 20px;
            letter-spacing: 0.5px;
        }
        .card-title {
            font-size: 1.25rem;
            color: #ffffff;
            margin-bottom: 12px;
            font-weight: bold;
            line-height: 1.4;
        }
        .card-desc {
            font-size: 0.95rem;
            color: #9ca3af;
            line-height: 1.6;
            margin-bottom: 25px;
            flex-grow: 1;
        }
        .card-metrics {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .metric-tag {
            background-color: #27272a;
            color: #e4e4e7;
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 0.85rem;
        }
        footer {
            background-color: #09090b;
            border-top: 1px solid rgba(255, 85, 0, 0.1);
            color: #71717a;
            text-align: center;
            padding: 40px 20px;
            margin-top: 100px;
        }
    </style>
</head>
<body>
    <header>
        <div class="nav-container">
            <div class="logo">Portfolio Professional Digital Marketing</div>
            <ul class="nav-links">
                <li><a href="#about">About Me</a></li>
                <li><a href="#tools">Tools</a></li>
                <li><a href="#projects">Brands</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#order-details" class="order-nav-btn" id="navOrderLink">Order</a></li>
            </ul>
        </div>
    </header>

    <section class="hero">
        <h1>Professional Working Experience</h1>
        <p>Let's work together, together we achieve more.</p>
        <a href="#order-details" class="btn">Explore more</a>
    </section>

    <section id="about" class="about-section">
        <h2 class="section-title">About me</h2>
        <p class="section-subtitle">Use controls or swipe left/right to browse my profiles</p>
        <div class="slider-nav">
            <button class="slider-arrow" id="prevBtn" onclick="moveSlide(-1)">&#10094;</button>
            <div class="slider-dots">
                <span class="dot active" onclick="setSlide(0)"></span>
                <span class="dot" onclick="setSlide(1)"></span>
            </div>
            <button class="slider-arrow" id="nextBtn" onclick="moveSlide(1)">&#10095;</button>
        </div>
        <div class="slider-viewport" id="sliderViewport">
            <div class="slider-track" id="sliderTrack">
                <div class="about-slide">
                    <p>I am a <strong>Bachelor of International Business Management Minor in Entrepreneurship at Universiti Utara Malaysia</strong> with a strong passion for digital Advertising, Marketing Analytics, and Business Growth.</p>
                    <p>My academic journey has strengthened my understanding of how businesses create value, adapt to changing market conditions, and leverage innovation to achieve sustainable growth. Throughout my studies, I discovered a strong interest in digital marketing, particularly in how data and technology can influence consumer behavior and support strategic business decisions.</p>
                </div>
                <div class="about-slide">
                    <p>My passion lies in <strong>Digital Advertising, Marketing Analytics, and Business Growth</strong> because these fields combine creativity with analytical thinking to deliver measurable business outcomes. I am fascinated by the ability of digital advertising to reach the right audience with the right message at the right time while continuously optimizing campaigns through data-driven insights.</p>
                    <p>As I continue developing my career, I aspire to contribute to organizations by creating customer-centric and performance-driven marketing strategies that help brands grow in an increasingly competitive digital landscape. My goal is to combine strategic thinking and data-driven decision-making to deliver measurable results.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="tools" class="tools-section">
        <h2 class="section-title">Tools & Expert Platforms</h2>
        <p class="section-subtitle">A breakdown of my software proficiency and multi-platform dynamic capabilities</p>
        
        <div class="tools-category">
            <div class="category-title">Advertising Platforms</div>
            <div class="tools-grid">
                <div class="tool-card">
                    <h4>Meta Ads Manager</h4>
                    <p>Monitored and optimized advertising campaigns Facebook & Instagram, Conversion rate optimization, A/B testing, dan retargeting audience.</p>
                </div>
                <div class="tool-card">
                    <h4>Google Ads</h4>
                    <p>Managed Search, Display, Shopping, YouTube, dan Performance Max to expance audience reach.</p>
                </div>
                <div class="tool-card">
                    <h4>TikTok Ads Manager</h4>
                    <p>Optimize ad campaign through video creative engaging by filteting and focusing audience behavior to maximize ROAS.</p>
                </div>
                <div class="tool-card">
                    <h4>Shopee & Tokopedia Ads</h4>
                    <p>Drive marketplace GMV and organic visibility by optimizing sponsored product placements, strategic keyword bidding, and listing conversion funnels.</p>
                </div>
            </div>
        </div>

        <div class="tools-category">
            <div class="category-title">Analytics & Tracking</div>
            <div class="tools-grid">
                <div class="tool-card">
                    <h4>Google Analytics 4 (GA4)</h4>
                    <p>Analyze website traffic, user behavior, user journeys, and conversion funnels accurately.</p>
                </div>
                <div class="tool-card">
                    <h4>Google Tag Manager (GTM)</h4>
                    <p>Implement tracking codes, custom event tracking, and pixel analytics without modifying the website's core code.</p>
                </div>
                <div class="tool-card">
                    <h4>Meta Pixel & Conversion API</h4>
                    <p>Track user actions on the website originating from Meta ads to customize retargeting audiences.</p>
                </div>
                <div class="tool-card">
                    <h4>Google Search Console</h4>
                    <p>Monitor website organic search performance, indexing status, keyword rankings, and technical SEO health.</p>
                </div>
            </div>
        </div>

        <div class="tools-category">
            <div class="category-title">Artificial Intelligence</div>
            <div class="tools-grid">
                <div class="tool-card">
                    <h4>ChatGPT</h4>
                    <p>Generate marketing ad copy, brainstorm creative campaign ideas, and write data analysis scripts.</p>
                </div>
                <div class="tool-card">
                    <h4>Gemini</h4>
                    <p>Conduct multi-modal research, process large data files, and refine cross-channel marketing strategies.</p>
                </div>
                <div class="tool-card">
                    <h4>Claude</h4>
                    <p>Analyze long-form project briefs, craft long-form copy, and write clean website code.</p>
                </div>
                <div class="tool-card">
                    <h4>Perplexity</h4>
                    <p>Perform real-time market research, track competitor strategies, and source live web data.</p>
                </div>
            </div>
        </div>

        <div class="tools-category">
            <div class="category-title">SEO & Keyword Research</div>
            <div class="tools-grid">
                <div class="tool-card">
                    <h4>Ahrefs & SEMrush</h4>
                    <p>Research competitor, analyze backlink, monitor performance SEO, research keyword global organic.</p>
                </div>
                <div class="tool-card">
                    <h4>Google Keyword Planner</h4>
                    <p>Optimize marketplace sponsored ads and high-intent keyword targets to accelerate performance growth and conversion rates.</p>
                </div>
            </div>
        </div>

        <div class="tools-category">
            <div class="category-title">Data Optimization & Visualization</div>
            <div class="tools-grid">
                <div class="tool-card">
                    <h4>Looker Studio</h4>
                    <p>Build automated, interactive dashboards that integrate cross-channel marketing data sources into centralized performance views.</p>
                </div>
                <div class="tool-card">
                    <h4>Microsoft Excel</h4>
                    <p>Perform deep-dive, large-scale data analysis using Pivot Tables, advanced macro formulas, and predictive forecasting models.</p>
                </div>
                <div class="tool-card">
                    <h4>Google Sheets</h4>
                    <p>Facilitate real-time collaboration for media planning reports, granular budget tracking, and live client data synchronization.</p>
                </div>
            </div>
        </div>

        <div class="tools-category">
            <div class="category-title">CRM, Automation & Management</div>
            <div class="tools-grid">
                <div class="tool-card">
                    <h4>HubSpot & Mailchimp</h4>
                    <p>Automation marketing email, audience segmentation, lead nurturing pipeline, dan CRM leads management.</p>
                </div>
                <div class="tool-card">
                    <h4>Notion</h4>
                    <p>Centralization workspace, measurable strategy ad copy content and strategic planning.</p>
                </div>
                <div class="tool-card">
                    <h4>Asana</h4>
                    <p>Manage operational task lists, map out project timelines, and coordinate critical deadlines across cross-functional teams.</p>
                </div>
            </div>
        </div>

        <div class="tools-category">
            <div class="category-title">Creative, Design & Presentation</div>
            <div class="tools-grid">
                <div class="tool-card">
                    <h4>Canva & CapCut</h4>
                    <p>Produce high-converting visual ad assets, creative promotional materials, and interactive short-form video edits for TikTok and Instagram Reels.</p>
                </div>
                <div class="tool-card">
                    <h4>Google Slides</h4>
                    <p>Develop professional digital marketing strategy pitch decks and comprehensive monthly client performance reports.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="projects" class="brands-section">
        <h2 class="section-title">Brands Experience</h2>
        <p class="section-subtitle">Use arrows or swipe to navigate. Click on any brand to view campaign details.</p>
        <div class="brands-slider-container">
            <button class="brands-arrow left" id="brandPrev" onclick="moveBrandSlide(-1)">&#10094;</button>
            <div class="brands-viewport" id="brandsViewport">
                <div class="brands-track" id="brandsTrack">
                    <div class="brand-card" onclick="openModal('Noni Abon', 'Planned and executed paid social media advertising campaigns for Noni Abon across TikTok and Instagram to increase brand awareness, generate qualified leads, and drive marketplace purchases through performance-driven campaign optimization.')">Noni Abon</div>
                    <div class="brand-card" onclick="openModal('Ajwa Delight', 'Analyzed keyword performance across Tokopedia and Shopee advertising campaigns to identify high-converting products, optimize marketplace advertising efficiency, and maximize purchase volume through data-driven campaign management.')">Ajwa Delight</div>
                    <div class="brand-card" onclick="openModal('Patty Pals', 'Built a structured November to December 2025 content calendar aligned with seasonal promotions, leveraged product performance analysis to identify OG Burger as the top-selling menu item to drive sales')">Patty Pals</div>
                    <div class="brand-card" onclick="openModal('Sozo Skin Clinic', 'Analyze campaign performance to identify conversion bottlenecks, optimize brand search campaigns, and improve advertising effectiveness without increasing CPC.')">Sozo Skin Clinic</div>
                    <div class="brand-card" onclick="openModal('DCBPays', 'Identified budget allocation and campaign delivery constraints, providing data-driven recommendations to improve impression share, campaign continuity, and overall advertising performance at scale.')">DCBPays</div>
                    <div class="brand-card" onclick="openModal('Carlo Car', 'Analyzed Meta Ads campaign performance to evaluate budget allocation, audience reach, cost efficiency, and engagement metrics across multiple automotive campaigns.')">Carlo Car</div>
                    <div class="brand-card" onclick="openModal('Aldora Sports', 'Increased audience engagement and brand visibility through a Reels-focused content strategy leveraging educational fitness content, product showcases, trending audio, and community-driven challenges.')">Aldora Sports</div>
                    <div class="brand-card" onclick="openModal('Kencana Murti 2', 'Increased brand awareness, profile visits, website traffic, and follower growth through a short-term Instagram Boost campaign by optimizing reach and engagement.')">Kencana Murti 2</div>
                </div>
            </div>
            <button class="brands-arrow right" id="brandNext" onclick="moveBrandSlide(1)">&#10095;</button>
        </div>
        <div class="brands-progress-container">
            <div class="brands-progress-bar" id="brandProgressBar"></div>
        </div>
    </section>

    <section id="order-details" class="campaign-projects-section">
        <div class="section-header">
            <h2 class="section-title">Campaign Type Projects</h2>
            <p class="section-subtitle">Comprehensive digital marketing frameworks built to scale GMV, maximize ROAS, and optimize customer journeys.</p>
        </div>
        
        <div class="carousel-container">
            <div class="campaign-slider-wrapper" id="campaignWrapper">
                <div class="campaign-slider" id="campaignSlider">
                    
                    <div class="campaign-card card-angle-left">
                        <div class="card-badge">Marketplace</div>
                        <h3 class="card-title">Sponsored Product & Keyword Optimization</h3>
                        <p class="card-desc">Advanced strategic bidding setups tailored for e-commerce platforms like Shopee and Tokopedia. Focuses on maximizing high-intent keyword traffic to boost store visibility, capture market share, and directly scale overall store GMV.</p>
                        <div class="card-metrics">
                            <span class="metric-tag">🚀 GMV Scale</span>
                            <span class="metric-tag">🎯 High ROAS</span>
                        </div>
                    </div>
    
                    <div class="campaign-card card-angle-straight">
                        <div class="card-badge">Paid Social</div>
                        <h3 class="card-title">Meta Ads Retargeting & Custom Audiences</h3>
                        <p class="card-desc">End-to-end configuration of Meta Pixel, custom events, and lookalike audience tracking systems. Designed to monitor off-site customer behavior from paid ads to deploy sharp, personalized hyper-targeted retargeting funnels.</p>
                        <div class="card-metrics">
                            <span class="metric-tag">📊 Pixel Analytics</span>
                            <span class="metric-tag">🔁 Retargeting</span>
                        </div>
                    </div>
    
                    <div class="campaign-card card-angle-right">
                        <div class="card-badge">Analytics</div>
                        <h3 class="card-title">Advanced GA4 & Conversion Funnel Auditing</h3>
                        <p class="card-desc">Accurate tracking infrastructure implementation built to trace the entire web user journey. Analyzes cross-channel marketing traffic sources and isolates leakages in conversion funnels without altering core backend system code.</p>
                        <div class="card-metrics">
                            <span class="metric-tag">📈 UX Mapping</span>
                            <span class="metric-tag">⚙️ Custom Events</span>
                        </div>
                    </div>
    
                    <div class="campaign-card card-angle-left">
                        <div class="card-badge">Organic Growth</div>
                        <h3 class="card-title">Organic Search Performance & Technical SEO Health</h3>
                        <p class="card-desc">Deep-dive technical monitoring of website indexing health, keyword rankings, and organic web traffic growth trends. Focuses on structural health configurations to achieve search engine ranking consistency.</p>
                        <div class="card-metrics">
                            <span class="metric-tag">🔍 Indexing</span>
                            <span class="metric-tag">🔝 Rank Engine</span>
                        </div>
                    </div>
    
                    <div class="campaign-card card-angle-right">
                        <div class="card-badge">Data Automation</div>
                        <h3 class="card-title">Interactive Centralized Marketing Dashboards</h3>
                        <p class="card-desc">Automated performance tracking spreadsheets and real-time Looker Studio boards using macro formulas, multi-channel data integration, and forecasting models for transparent media planning and budget visibility.</p>
                        <div class="card-metrics">
                            <span class="metric-tag">📊 Live Synced</span>
                            <span class="metric-tag">💡 Forecasting</span>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
    </section>

    <section id="portfolio" class="contact-section">
        <h2 class="section-title">Summary Portfolio and Resume</h2>
        <p class="section-subtitle">View portfolio resources and download formal updates below</p>
        <div class="contact-grid">
            <a href="https://drive.google.com/file/d/1LxNAZjNygKWqKSyvkg24a42xHU0VDma9/view?usp=sharing" target="_blank" class="contact-card">
                <h4>Canva Portfolio</h4>
                <p>Click Button</p>
            </a>
            <a href="https://drive.google.com/file/d/1ShpLOoP1WZEijS03B53Au76ZvDoWhjP-/view?usp=sharing" target="_blank" class="contact-card">
                <h4>Resume</h4>
                <p>Click Button</p>
            </a>
        </div>
    </section>

    <section id="contact" class="contact-section">
        <h2 class="section-title">Let's Connect</h2>
        <p class="section-subtitle">Reach out through any professional network channel below</p>
        <div class="contact-grid">
            <a href="https://www.linkedin.com/in/rafifadhilaputra/" target="_blank" class="contact-card">
                <h4>LinkedIn</h4>
                <p>Click Button</p>
            </a>
            <a href="mailto:rafifadhilaputra@gmail.com" class="contact-card">
                <h4>Email</h4>
                <p>Click Button</p>
            </a>
            <a href="https://wa.me/6281388180032" target="_blank" class="contact-card">
                <h4>WhatsApp</h4>
                <p>Click Button</p>
            </a>
        </div>
    </section>

    <footer>
        <p>&copy; 2026 Portfolio Professional Digital Marketing. All rights reserved.</p>
    </footer>

    <div class="modal-overlay" id="modalOverlay" onclick="closeModalOutside(event)">
        <div class="modal-container">
            <button class="modal-close-btn" onclick="closeModal()">&times;</button>
            <h3 class="modal-title" id="modalTitle">Brand Name</h3>
            <div class="modal-body" id="modalBody">
                Explanation text goes here.
            </div>
        </div>
    </div>

    <script>
        /* --- ABOUT SLIDER LOOP --- */
        let currentSlide = 0;
        const sliderTrack = document.getElementById('sliderTrack');
        const dots = document.querySelectorAll('.dot');
        
        function updateSlidePosition() {
            if(sliderTrack) {
                sliderTrack.style.transform = `translateX(-${currentSlide * 50}%)`;
                dots.forEach((dot, idx) => {
                    dot.classList.toggle('active', idx === currentSlide);
                });
            }
        }
        function moveSlide(direction) {
            currentSlide += direction;
            if (currentSlide < 0) currentSlide = 1;
            if (currentSlide > 1) currentSlide = 0;
            updateSlidePosition();
        }
        function setSlide(index) {
            currentSlide = index;
            updateSlidePosition();
        }

        /* --- BRANDS HORIZONTAL CAROUSEL LOGIC --- */
        let currentBrandIndex = 0;
        const brandTrack = document.getElementById('brandsTrack');
        const brandViewport = document.getElementById('brandsViewport');
        const brandProgressBar = document.getElementById('brandProgressBar');
        const btnPrev = document.getElementById('brandPrev');
        const btnNext = document.getElementById('brandNext');

        function getBrandSliderMetrics() {
            const firstCard = brandTrack ? brandTrack.querySelector('.brand-card') : null;
            if (!firstCard || !brandViewport) return { cardWidth: 0, maxScroll: 0, maxIndex: 0 };
            const gap = parseInt(window.getComputedStyle(brandTrack).gap) || 0;
            const cardWidth = firstCard.offsetWidth + gap;
            const maxScroll = brandTrack.scrollWidth - brandViewport.offsetWidth;
            const maxIndex = Math.max(0, Math.ceil(maxScroll / cardWidth));
            return { cardWidth, maxScroll, maxIndex };
        }

        function moveBrandSlide(direction) {
            const { cardWidth, maxScroll, maxIndex } = getBrandSliderMetrics();
            if (maxScroll <= 0) return;
            currentBrandIndex += direction;
            if (currentBrandIndex < 0) currentBrandIndex = 0;
            if (currentBrandIndex > maxIndex) currentBrandIndex = maxIndex;
            
            let targetX = currentBrandIndex * cardWidth;
            if (targetX > maxScroll) targetX = maxScroll;
            brandTrack.style.transform = `translateX(-${targetX}px)`;
            
            if(brandProgressBar) {
                const progressPercent = (targetX / maxScroll) * 100;
                brandProgressBar.style.width = `${progressPercent}%`;
            }
            if(btnPrev) btnPrev.disabled = currentBrandIndex === 0;
            if(btnNext) btnNext.disabled = targetX >= maxScroll;
        }

        /* --- SEAMLESS INFINITE AUTO-SWIPER CAROUSEL (CAMPAIGN) --- */
        document.addEventListener("DOMContentLoaded", () => {
            const slider = document.getElementById('campaignSlider');
            const wrapper = document.getElementById('campaignWrapper');
            if(!slider || !wrapper) return;
            
            // 1. Kloning item untuk membuat efek infinite loop tanpa batas patah
            const cards = Array.from(slider.children);
            cards.forEach(card => {
                const clone = card.cloneNode(true);
                slider.appendChild(clone);
            });

            let speed = 0.8; 
            let currentX = 0;
            let isHovered = false;

            const getResetPoint = () => {
                const gap = parseInt(window.getComputedStyle(slider).gap) || 0;
                return (cards[0].offsetWidth + gap) * cards.length;
            };

            wrapper.addEventListener('mouseenter', () => isHovered = true);
            wrapper.addEventListener('mouseleave', () => isHovered = false);

            function renderLoop() {
                if (!isHovered) {
                    currentX -= speed;
                    if (Math.abs(currentX) >= getResetPoint()) {
                        currentX = 0;
                    }
                    slider.style.transform = `translateX(${currentX}px)`;
                }
                requestAnimationFrame(renderLoop);
            }
            requestAnimationFrame(renderLoop);
        });

        /* --- NAV LINK INTERACTIVE SMOOTH SCROLL --- */
        const navOrderLink = document.getElementById('navOrderLink');
        if(navOrderLink) {
            navOrderLink.addEventListener('click', function(e) {
                e.preventDefault(); 
                const targetSec = document.getElementById('order-details');
                if(targetSec) {
                    targetSec.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }

        /* --- CONTROL INFRASTRUCTURE MODALS --- */
        const modalOverlay = document.getElementById('modalOverlay');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');

        function openModal(title, description) {
            if(modalTitle && modalBody && modalOverlay) {
                modalTitle.innerText = title;
                modalBody.innerText = description;
                modalOverlay.classList.add('active');
            }
        }
        function closeModal() {
            if(modalOverlay) modalOverlay.classList.remove('active');
        }
        function closeModalOutside(event) {
            if (event.target === modalOverlay) {
                closeModal();
            }
        }
    </script>
</body>
</html>

<!-- Project Available Section -->
<section id="order-details" class="contact-section">
    <h2 class="section-title">Project Available</h2>
    <p class="section-subtitle">Scroll down to see more projects</p>
    <!-- Vertical Scroll Viewport -->
    <div class="project-vertical-viewport" id="projectVerticalViewport" style="max-height: 420px; overflow-y: auto; padding: 10px; border: 1px solid rgba(255, 85, 0, 0.15); border-radius: 8px; background: #18181b; scroll-behavior: smooth;">
        <div class="contact-grid" style="margin-top: 0;">
            <a href="https://www.linkedin.com/in/rafifadhilaputra/" target="_blank" class="contact-card">
                <h4>Ads Management</h4>
                <p>Click Button</p>
            </a>
            <a href="mailto:rafifadhilaputra@gmail.com" class="contact-card">
                <h4>Search Engine Marketing</h4>
                <p>Click Button</p>
            </a>
            <a href="mailto:rafifadhilaputra@gmail.com" target="_blank" class="contact-card">
                <h4>Creative Campaign</h4>
                <p>Click Button</p>
            </a>
            <a href="mailto:rafifadhilaputra@gmail.com" target="_blank" class="contact-card">
                <h4>Data Analytics</h4>
                <p>Click Button</p>
            </a>
            <a href="mailto:rafifadhilaputra@gmail.com" target="_blank" class="contact-card">
                <h4>WordPress Developer</h4>
                <p>Click Button</p>
            </a>
            <a href="mailto:rafifadhilaputra@gmail.com" target="_blank" class="contact-card">
                <h4>Social Media Marketing</h4>
                <p>Click Button</p>
            </a>
            <a href="mailto:rafifadhilaputra@gmail.com" target="_blank" class="contact-card">
                <h4>Copywriting</h4>
                <p>Click Button</p>
            </a>
            <a href="mailto:rafifadhilaputra@gmail.com" target="_blank" class="contact-card">
                <h4>Content Planner</h4>
                <p>Click Button</p>
            </a>
            <a href="mailto:rafifadhilaputra@gmail.com" target="_blank" class="contact-card">
                <h4>OmniChannel</h4>
                <p>Click Button</p>
            </a>
            <a href="mailto:rafifadhilaputra@gmail.com" target="_blank" class="contact-card">
                <h4>Data Analytics</h4>
                <p>Click Button</p>
            </a>
            <a href="mailto:rafifadhilaputra@gmail.com" target="_blank" class="contact-card">
                <h4>Resume Optimization</h4>
                <p>Click Button</p>
            </a>
            <a href="mailto:rafifadhilaputra@gmail.com" target="_blank" class="contact-card">
                <h4>LinkedIn Optimization</h4>
                <p>Click Button</p>
            </a>
        </div>
    </div>
</section>

<footer>
    &copy; 2026 Rafi Fadhila Putra Websites. All Rights Reserved
