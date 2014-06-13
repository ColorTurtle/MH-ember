Ember.TEMPLATES.aboutItem=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h,i,j="",k=this.escapeExpression,l=c.helperMissing;return e.buffer.push("<h3>"),g={},h={},e.buffer.push(k(c._triageMustache.call(b,"title",{hash:{},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e}))),e.buffer.push("</h3>\n"),g={},h={},i={hash:{},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e},e.buffer.push(k((f=c["format-markdown"]||b["format-markdown"],f?f.call(b,"summary",i):l.call(b,"format-markdown","summary",i)))),j}),Ember.TEMPLATES.aboutUs=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h,i,j="";return b.buffer.push("\n      "),f={},h={},i={hash:{},inverse:m.noop,fn:m.program(2,g,b),contexts:[a,a],types:["STRING","ID"],hashContexts:h,hashTypes:f,data:b},d=c["link-to"]||a["link-to"],e=d?d.call(a,"aboutItem","",i):n.call(a,"link-to","aboutItem","",i),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n      "),j}function g(a,b){var d,e,f="";return b.buffer.push("<li>"),d={},e={},b.buffer.push(l(c._triageMustache.call(a,"linkTitle",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push('<span class="glyphicon glyphicon-chevron-right"></span></li>'),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k="",l=this.escapeExpression,m=this,n=c.helperMissing;return e.buffer.push('<div class="col-sm-6 left-content">\n    <ul class="sub-nav">\n      '),i={},j={},h=c.each.call(b,{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[],types:[],hashContexts:j,hashTypes:i,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push('\n    </ul>\n</div>\n<div class="col-sm-6 right-content">\n  '),i={},j={},e.buffer.push(l(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:j,hashTypes:i,data:e}))),e.buffer.push("\n</div>"),k}),Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("About Us")}function g(a,b){b.buffer.push("Services")}function h(a,b){b.buffer.push("Contact")}function i(a,b){b.buffer.push('About Us<span class="glyphicon glyphicon-chevron-right"></span>')}function j(a,b){b.buffer.push('Services<span class="glyphicon glyphicon-chevron-right"></span>')}function k(a,b){b.buffer.push('Contact<span class="glyphicon glyphicon-chevron-right"></span>')}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var l,m,n,o,p,q="",r=c.helperMissing,s=this.escapeExpression,t=this;return e.buffer.push('<div class="hp-header">\n    '),n={},o={},p={hash:{},contexts:[b],types:["ID"],hashContexts:o,hashTypes:n,data:e},e.buffer.push(s((l=c.outlet||b.outlet,l?l.call(b,"hpHeader",p):r.call(b,"outlet","hpHeader",p)))),e.buffer.push('\n</div>\n<div class="navigation">\n    <div class="container">\n        <ul class="nav-options pull-right cleaner-list">\n            <li>'),n={},o={},p={hash:{},inverse:t.noop,fn:t.program(1,f,e),contexts:[b],types:["STRING"],hashContexts:o,hashTypes:n,data:e},l=c["link-to"]||b["link-to"],m=l?l.call(b,"aboutUs",p):r.call(b,"link-to","aboutUs",p),(m||0===m)&&e.buffer.push(m),e.buffer.push("</li>\n            <li>"),n={},o={},p={hash:{},inverse:t.noop,fn:t.program(3,g,e),contexts:[b],types:["STRING"],hashContexts:o,hashTypes:n,data:e},l=c["link-to"]||b["link-to"],m=l?l.call(b,"services",p):r.call(b,"link-to","services",p),(m||0===m)&&e.buffer.push(m),e.buffer.push('</li>\n            <li><a href="#partners">Partners</a></li>\n            <li>'),n={},o={},p={hash:{},inverse:t.noop,fn:t.program(5,h,e),contexts:[b],types:["STRING"],hashContexts:o,hashTypes:n,data:e},l=c["link-to"]||b["link-to"],m=l?l.call(b,"contact",p):r.call(b,"link-to","contact",p),(m||0===m)&&e.buffer.push(m),e.buffer.push('</li>\n            <li class=\'btn-login\'><a href="https://cwp.morningstar.com/CRMWebPortal/CWPHome.aspx?ProductCode=CWP">Client Login</a></li>\n        </ul>\n        <div class="dropdown nav-mobile pull-right">\n            <span class="glyphicon glyphicon-th-list dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown"></span>\n            <ul class="cleaner-list dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">\n                <li role="presentation">'),o={role:b,tabindex:b},n={role:"STRING",tabindex:"STRING"},p={hash:{role:"menuitem",tabindex:"-1"},inverse:t.noop,fn:t.program(7,i,e),contexts:[b],types:["STRING"],hashContexts:o,hashTypes:n,data:e},l=c["link-to"]||b["link-to"],m=l?l.call(b,"aboutUs",p):r.call(b,"link-to","aboutUs",p),(m||0===m)&&e.buffer.push(m),e.buffer.push('</li>\n                <li role="presentation">'),o={role:b,tabindex:b},n={role:"STRING",tabindex:"STRING"},p={hash:{role:"menuitem",tabindex:"-1"},inverse:t.noop,fn:t.program(9,j,e),contexts:[b],types:["STRING"],hashContexts:o,hashTypes:n,data:e},l=c["link-to"]||b["link-to"],m=l?l.call(b,"services",p):r.call(b,"link-to","services",p),(m||0===m)&&e.buffer.push(m),e.buffer.push('</li>\n                <li role="presentation"><a role="menuitem" tabindex="-1" href="#partners">Partners<span class="glyphicon glyphicon-chevron-right"></span></a></li>\n                <li role="presentation">'),o={role:b,tabindex:b},n={role:"STRING",tabindex:"STRING"},p={hash:{role:"menuitem",tabindex:"-1"},inverse:t.noop,fn:t.program(11,k,e),contexts:[b],types:["STRING"],hashContexts:o,hashTypes:n,data:e},l=c["link-to"]||b["link-to"],m=l?l.call(b,"contact",p):r.call(b,"link-to","contact",p),(m||0===m)&&e.buffer.push(m),e.buffer.push('</li>\n                <li role="presentation"><a role="menuitem" tabindex="-1" href="https://cwp.morningstar.com/CRMWebPortal/CWPHome.aspx?ProductCode=CWP">Client Login<span class="glyphicon glyphicon-chevron-right"></span></a></li>\n            </ul>\n        </div>\n        <a href="#">\n            <img src="images/3034baf1.mh-logo.png" class="logo">\n        </a>\n    </div>\n</div>\n'),n={},o={},p={hash:{},contexts:[b],types:["ID"],hashContexts:o,hashTypes:n,data:e},e.buffer.push(s((l=c.outlet||b.outlet,l?l.call(b,"mobile",p):r.call(b,"outlet","mobile",p)))),e.buffer.push('\n<div class="secondary-header section">\n    <div class="container">\n        <div class="row">\n            '),n={},o={},p={hash:{},contexts:[b],types:["ID"],hashContexts:o,hashTypes:n,data:e},e.buffer.push(s((l=c.outlet||b.outlet,l?l.call(b,"content",p):r.call(b,"outlet","content",p)))),e.buffer.push('\n        </div>\n    </div>\n</div>\n<div class="our-team section">\n    <div class="container">\n        <a id="partners"></a>\n        <h2>Our Team</h2>\n        <div class="partner-bio row">\n            <div class="col-sm-6 left-align">\n                <div class="bio-contact-box">\n                    <div class="headshot">\n                        <img src="images/6a824001.mary-headshot.jpg">\n                    </div>\n                    <div class="bio-contact-info">\n                        <span class=\'text-allcaps\'>Mary Mori-Huston</span>\n                        <span class="text-italic">Managing Partner</span><br>\n                        <span>Phone: +1 305 856 9303</span>\n                        <span>Fax: +1 305 373 4249</span>\n                        <span><a href="mailto:mary.mori@morihuston.com?subject=I found your contact information on your website and I\'d love to chat">mary.mori@morihuston.com</a></span>\n                    </div>\n                </div>\n            </div>\n            <div class="bio-copy col-sm-6">\n                <p>Mary Mori-Huston is a co-founder and managing partner at Mori Huston Partners LLC.</p>\n                <p>Mrs. Mori-Huston has more than 24 years of experience in banking and in the investment advisory business. She started her career with Bankers Trust Company (now Deutsche Bank) as a Relationship Manager for the Latin American region. After 10 years with that institution she joined Lehman Brothers, where she was a Financial Consultant. In 1998 she joined Dresdner Bank in the position of Investment Consultant, and was a voting member of the Global Investment Strategy Team. In the year 2005 she moved with UBS to Zurich, Switzerland and assumed the position of Senior Client Advisor.</p>\n                <p>Mary graduated from Florida International University with a dual major in International Business and Finance and with a degree in International Bank Management.</p>\n            </div>\n        </div>\n        <div class="partner-bio row">\n            <div class="col-sm-6 left-align">\n                <div class="bio-contact-box">\n                    <div class="headshot">\n                        <img src="images/95fa3acd.robert-headshot.jpg">\n                    </div>\n                    <div class="bio-contact-info">\n                        <span class=\'text-allcaps\'>Robert Mori</span>\n                        <span class="text-italic">Managing Partner</span><br>\n                        <span>Phone: +1 305 856 9304</span>\n                        <span>Fax: +1 305 373 4249</span>\n                        <span><a href="mailto:robert.mori@morihuston.com?subject=I found your contact information on your website and I\'d love to chat">robert.mori@morihuston.com</a></span>\n                    </div>\n                </div>\n            </div>\n            <div class="bio-copy col-sm-6">\n                <p>Robert Mori is a co-founder and managing partner at Mori Huston Partners LLC.</p>\n                <p>In 1998 Robert  joined the Allianz/ Dresdner Group where he worked as an investment advisor and corporate fixed income analyst in their Hamburg, Bogotá and Miami offices, before advancing to become the Head of Product Development and Quantitative Asset Allocation for Allianz/Dresdner Private Banking The Americas. In 2005, Robert moved to Europe to become the Global Head of Structured Products for Dresdner Bank’s private and corporate client business. In 2008 he became the Head of Investment Products and Investment Advisory Services for Dresdner Bank Switzerland. In addition, he was a member of the Global Investment Policy Committee for Dresdner Bank Group.</p>\n                <p>Robert graduated from the Vienna University of Economics and Business with an advanced degree in International Business Administration. He also holds the Chartered Financial Analyst (CFA) and the Chartered Alternative Investment Analyst (CAIA) designations.</p>\n            </div>\n        </div>\n        <div class="partner-bio row">\n            <div class="col-sm-6 left-align">\n                <div class="bio-contact-box">\n                    <div class="headshot">\n                        <img src="images/9c906eaa.maria-headshot.jpg">\n                    </div>\n                    <div class="bio-contact-info">\n                        <span class=\'text-allcaps\'>Maria Elena Hernandex</span>\n                        <span class="text-italic">Executive Director</span><br>\n                        <span>Phone: +1 305 856 9304</span>\n                        <span>Fax: +1 305 373 4249</span>\n                        <span><a href="mailto:maria.hernandez@morihuston.com?subject=I found your contact information on your website and I\'d love to chat">maria.hernandez@morihuston.com</a></span>\n                    </div>\n                </div>\n            </div>\n            <div class="bio-copy col-sm-6">\n                <p>Mrs Hernandez has more than 25 years of experience in banking and wealth management services. She started her career with Panamerican Bank (today Bank of America). She has been at Bankers Trust Co. (today Deutsche Bank) for 13 years as Service Executive/Account Manager for the Latin America market.  Mrs. Hernandez has also been at Citibank International as a Relationship Officer for the Chilean market and recently at SunTrust Bank as Client Advisor for international and US clients.</p>\n                <p>Maria Elena holds a Certificate of Humanities/Translation and Interpretation from the Universidad Femenina del Sagrado Corazon (UNIFE) Lima, Peru.</p>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="footer">\n    <div class="container">\n        <p>Mori Huston Partners LLC 1450 Brickwell Avenue, Suite 2106, Miami FL 33131</p>\n    </div>\n</div>\n\n'),q}),Ember.TEMPLATES.contact=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div class="col-sm-6 left-content">\n    <ul class="sub-nav about-us">\n      <a  class="js-sub-nav" href="#about"><li>Contact 1<span class="glyphicon glyphicon-chevron-right"></span></li></a>\n      <a  class="js-sub-nav" href="#about/clients"><li>Contact 2<span class="glyphicon glyphicon-chevron-right"></span></li></a>\n  </ul>\n</div>\n<div class="col-sm-6 right-content">\n  <h3>This is the Contact Page!</h3>\n      <p><em>Mori Huston Partners is a unique investment management firm.</em> As an Independent Investment Adviser, we offer highly customized, independent and transparent wealth and asset management services for families, individuals and institutions.</p>\n      <p>Our <em>boutique and entrepreneurial</em> nature allows us to always be a step ahead. As true innovators we use our expertise and enterprise to source exciting new investment opportunities, but it is our agility which allows us to move quickly to gain the advantage.</p>\n      <p>Our position as an <em>independent</em> firm is key. We are not associated to any financial institution. This guarantees decision making that only serves the needs and goals of our clients. Moreover we have a legal fiduciary responsibility to our clients and are held to higher standards by the regulators than bankers and brokers.</p>\n      <p>Mori Huston Partners maintains a <em>high degree of confidentiality</em> for its clients, and isolates the client from an ever changing industry by providing stability to the relationship.</p>\n      <p>Our <em>services</em> range from discretionary portfolio management to non-discretionary investment advice. We service individual accounts or an entire family of accounts at different financial institutions on a consolidated basis.</p>\n</div>\n')}),Ember.TEMPLATES.hpHeader=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<img src="images/a87ad962.deskphoto.jpg">\n<div class="hp-header-text">\n    <h2 class="hp-title">MoriHuston Partners</h2>\n    <span class="hp-tagline">A Business Approach To Investing</span>\n</div>')}),Ember.TEMPLATES.hpHeaderMobile=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div class="hp-header-mobile">\n    <img src="images/5ecb65a4.deskphoto-mobile.jpg">\n    <div class="hp-header-text">\n        <span class="hp-tagline">A Business Approach To Investing</span>\n    </div>\n</div>\n')}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push('<span>View Our Services</span><span class="glyphicon glyphicon-chevron-right"></span>')}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j,k,l="",m=this,n=c.helperMissing;return e.buffer.push('<div class="col-sm-6 left-content">\n    <p class="text-quote">We offer wealth management services for individuals, families and institutions. We strive for excellence in service and highly customize our offering to each particular client situation. Our team of provides experienced leadership and independent thought. Our position as an independent firm is key.</p>\n</div>\n<div class="col-sm-6 right-content">\n    <h3>Join us in investing for the long run.</h3>\n    <p>We take a business approach to investing. Being entrepreneurs ourselves we have a business mentality when investing our client’s assets. We don’t just buy and sell stocks and bonds. When investing in stocks we think of it as buying an ownership in a business. Similarly, we buy bonds as if we would be providing a loan. In all investment concerns we try to protect our downside by applying a margin of safety. We focus on value and embrace volatility as it provides us with opportunities to buy the businesses we like at discounted prices. This business and value approach to managing assets provides our clients with a more intuitive and long term investment perspective.</p>\n    <button class="cta-btn">\n        '),i={},j={},k={hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b],types:["STRING"],hashContexts:j,hashTypes:i,data:e},g=c["link-to"]||b["link-to"],h=g?g.call(b,"services",k):n.call(b,"link-to","services",k),(h||0===h)&&e.buffer.push(h),e.buffer.push("\n    </button>\n</div>\n"),l}),Ember.TEMPLATES.service=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h,i,j="",k=this.escapeExpression,l=c.helperMissing;return e.buffer.push("<h3>"),g={},h={},e.buffer.push(k(c._triageMustache.call(b,"title",{hash:{},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e}))),e.buffer.push("</h3>\n"),g={},h={},i={hash:{},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e},e.buffer.push(k((f=c["format-markdown"]||b["format-markdown"],f?f.call(b,"summary",i):l.call(b,"format-markdown","summary",i)))),j}),Ember.TEMPLATES.services=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h,i,j="";return b.buffer.push("\n      "),f={},h={},i={hash:{},inverse:m.noop,fn:m.program(2,g,b),contexts:[a,a],types:["STRING","ID"],hashContexts:h,hashTypes:f,data:b},d=c["link-to"]||a["link-to"],e=d?d.call(a,"service","",i):n.call(a,"link-to","service","",i),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n      "),j}function g(a,b){var d,e,f="";return b.buffer.push("<li>"),d={},e={},b.buffer.push(l(c._triageMustache.call(a,"linkTitle",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push('<span class="glyphicon glyphicon-chevron-right"></span></li>'),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k="",l=this.escapeExpression,m=this,n=c.helperMissing;return e.buffer.push('<div class="col-sm-6 left-content">\n    <ul class="sub-nav">\n      '),i={},j={},h=c.each.call(b,{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[],types:[],hashContexts:j,hashTypes:i,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push('\n    </ul>\n</div>\n<div class="col-sm-6 right-content">\n  '),i={},j={},e.buffer.push(l(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:j,hashTypes:i,data:e}))),e.buffer.push("\n</div>\n\n\n"),e.buffer.push("\n"),k});