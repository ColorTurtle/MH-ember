Ember.TEMPLATES.aboutItem=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h,i="",j=this.escapeExpression;return e.buffer.push("<h3>"),g={},h={},e.buffer.push(j(c._triageMustache.call(b,"title",{hash:{},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e}))),e.buffer.push("</h3>\n"),h={unescaped:b},g={unescaped:"STRING"},f=c._triageMustache.call(b,"summary",{hash:{unescaped:"true"},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e}),(f||0===f)&&e.buffer.push(f),i}),Ember.TEMPLATES.aboutUs=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h,i,j="";return b.buffer.push("\n      "),f={},h={},i={hash:{},inverse:m.noop,fn:m.program(2,g,b),contexts:[a,a],types:["STRING","ID"],hashContexts:h,hashTypes:f,data:b},d=c["link-to"]||a["link-to"],e=d?d.call(a,"aboutItem","",i):n.call(a,"link-to","aboutItem","",i),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n      "),j}function g(a,b){var d,e,f="";return b.buffer.push("<li>"),d={},e={},b.buffer.push(l(c._triageMustache.call(a,"linkTitle",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push('<span class="glyphicon glyphicon-chevron-right"></span></li>'),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k="",l=this.escapeExpression,m=this,n=c.helperMissing;return e.buffer.push('<div class="col-sm-7 right-content">\n  '),i={},j={},e.buffer.push(l(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:j,hashTypes:i,data:e}))),e.buffer.push('\n</div>\n<div class="col-sm-5 left-content">\n    <ul class="sub-nav">\n      '),i={},j={},h=c.each.call(b,{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[],types:[],hashContexts:j,hashTypes:i,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push("\n    </ul>\n</div>"),k}),Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("About Us")}function g(a,b){b.buffer.push("Services")}function h(a,b){b.buffer.push('About Us<span class="glyphicon glyphicon-chevron-right"></span>')}function i(a,b){b.buffer.push('Services<span class="glyphicon glyphicon-chevron-right"></span>')}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var j,k,l,m,n,o="",p=c.helperMissing,q=this.escapeExpression,r=this;return e.buffer.push('<div class="hp-header">\n    '),l={},m={},n={hash:{},contexts:[b],types:["ID"],hashContexts:m,hashTypes:l,data:e},e.buffer.push(q((j=c.outlet||b.outlet,j?j.call(b,"hpHeader",n):p.call(b,"outlet","hpHeader",n)))),e.buffer.push('\n</div>\n<div class="navigation">\n    <div class="container">\n        <ul class="nav-options pull-right cleaner-list">\n            <li>'),l={},m={},n={hash:{},inverse:r.noop,fn:r.program(1,f,e),contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e},j=c["link-to"]||b["link-to"],k=j?j.call(b,"aboutUs",n):p.call(b,"link-to","aboutUs",n),(k||0===k)&&e.buffer.push(k),e.buffer.push("</li>\n            <li>"),l={},m={},n={hash:{},inverse:r.noop,fn:r.program(3,g,e),contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e},j=c["link-to"]||b["link-to"],k=j?j.call(b,"services",n):p.call(b,"link-to","services",n),(k||0===k)&&e.buffer.push(k),e.buffer.push('</li>\n            <li><a href="#partners">Partners</a></li>\n            <li><button class="btn--contact" data-toggle="modal" data-target="#myModal">Contact</button></li>\n            <li class=\'btn-login\'><a href="https://cwp.morningstar.com/CRMWebPortal/CWPHome.aspx?ProductCode=CWP">Client Login</a></li>\n        </ul>\n        <div class="dropdown menu-large nav-mobile pull-right">\n            <button class="dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown"><span class="fa fa-navicon"></span></button>\n            <ul class="dropdown-menu megamenu row" role="menu" aria-labeledby="dropdownMenu1">\n                <li role="presentation">'),m={role:b,tabindex:b},l={role:"STRING",tabindex:"STRING"},n={hash:{role:"menuitem",tabindex:"-1"},inverse:r.noop,fn:r.program(5,h,e),contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e},j=c["link-to"]||b["link-to"],k=j?j.call(b,"aboutUs",n):p.call(b,"link-to","aboutUs",n),(k||0===k)&&e.buffer.push(k),e.buffer.push('</li>\n                <li role="presentation">'),m={role:b,tabindex:b},l={role:"STRING",tabindex:"STRING"},n={hash:{role:"menuitem",tabindex:"-1"},inverse:r.noop,fn:r.program(7,i,e),contexts:[b],types:["STRING"],hashContexts:m,hashTypes:l,data:e},j=c["link-to"]||b["link-to"],k=j?j.call(b,"services",n):p.call(b,"link-to","services",n),(k||0===k)&&e.buffer.push(k),e.buffer.push('</li>\n                <li role="presentation"><a role="menuitem" tabindex="-1" href="#partners">Partners<span class="glyphicon glyphicon-chevron-right"></span></a></li>\n                <li><button class="btn--contact" data-toggle="modal" data-target="#myModal">Contact<span class="glyphicon glyphicon-chevron-right"></span></button></li>\n                <li role="presentation"><a role="menuitem" tabindex="-1" href="https://cwp.morningstar.com/CRMWebPortal/CWPHome.aspx?ProductCode=CWP">Client Login<span class="glyphicon glyphicon-chevron-right"></span></a></li>\n            </ul>\n        </div>\n        <a href="#">\n            <img src="images/625b20a4.mh-logo.png" class="logo">\n        </a>\n    </div>\n</div>\n'),l={},m={},n={hash:{},contexts:[b],types:["ID"],hashContexts:m,hashTypes:l,data:e},e.buffer.push(q((j=c.outlet||b.outlet,j?j.call(b,"mobile",n):p.call(b,"outlet","mobile",n)))),e.buffer.push('\n<div class="secondary-header section">\n    <div class="container">\n        <div class="row">\n            '),l={},m={},n={hash:{},contexts:[b],types:["ID"],hashContexts:m,hashTypes:l,data:e},e.buffer.push(q((j=c.outlet||b.outlet,j?j.call(b,"content",n):p.call(b,"outlet","content",n)))),e.buffer.push('\n        </div>\n    </div>\n</div>\n<div class="our-team section">\n    <div class="container">\n        <a id="partners"></a>\n        <h2>Our Team</h2>\n        <div class="partner-bio row">\n            <div class="col-sm-6 left-align">\n                <div class="bio-contact-box">\n                    <div class="headshot">\n                        <img src="images/a78b34a4.mary-headshot.jpg">\n                    </div>\n                    <div class="bio-contact-info">\n                        <span class=\'text-allcaps\'>Mary Mori-Huston</span>\n                        <span class="text-italic">Managing Partner</span><br>\n                        <div class="desktop-only">\n                            <span>Phone: +1 305 856 9303</span>\n                            <span>Fax: +1 305 373 4249</span>\n                        </div>\n                        <div class="mobile-only">\n                            <a href="tel:+1-305-856-9303"><span>P: +1 305 856 9303</span></a>\n                            <span>F: +1 305 373 4249</span>\n                        </div>\n                        <span><a href="mailto:mary.mori@morihuston.com?subject=I found your contact information on your website and I\'d love to chat">mary.mori@morihuston.com</a></span>\n                    </div>\n                </div>\n            </div>\n            <div class="bio-copy col-sm-6">\n                <p>Mary Mori-Huston is a co-founder and managing partner at Mori Huston Partners LLC.</p>\n                <p>Mrs. Mori-Huston has more than 24 years of experience in banking and in the investment advisory business. She started her career with Bankers Trust Company (now Deutsche Bank) as a Relationship Manager for the Latin American region. After 10 years with that institution she joined Lehman Brothers, where she was a Financial Consultant. In 1998 she joined Dresdner Bank in the position of Investment Consultant, and was a voting member of the Global Investment Strategy Team. In the year 2005 she moved with UBS to Zurich, Switzerland and assumed the position of Senior Client Advisor.</p>\n                <p>Mary graduated from Florida International University with a dual major in International Business and Finance and with a degree in International Bank Management.</p>\n            </div>\n        </div>\n        <div class="partner-bio row">\n            <div class="col-sm-6 left-align">\n                <div class="bio-contact-box">\n                    <div class="headshot">\n                        <img src="images/3700e9ad.robert-headshot.jpg">\n                    </div>\n                    <div class="bio-contact-info">\n                        <span class=\'text-allcaps\'>Robert Mori</span>\n                        <span class="text-italic">Managing Partner</span><br>\n                        <div class="desktop-only">\n                            <span>Phone: +1 305 856 9304</span>\n                            <span>Fax: +1 305 373 4249</span>\n                        </div>\n                        <div class="mobile-only">\n                            <a href="tel:+1-305-856-9304"><span class="contact">P: +1 305 856 9304</span></a>\n                            <span class="contact">F: +1 305 373 4249</span>\n                        </div>\n                        <span><a href="mailto:robert.mori@morihuston.com?subject=I found your contact information on your website and I\'d love to chat">robert.mori@morihuston.com</a></span>\n                    </div>\n                </div>\n            </div>\n            <div class="bio-copy col-sm-6">\n                <p>Robert Mori is a co-founder and managing partner at Mori Huston Partners LLC.</p>\n                <p>In 1998 Robert  joined the Allianz/ Dresdner Group where he worked as an investment advisor and corporate fixed income analyst in their Hamburg, Bogotá and Miami offices, before advancing to become the Head of Product Development and Quantitative Asset Allocation for Allianz/Dresdner Private Banking The Americas. In 2005, Robert moved to Europe to become the Global Head of Structured Products for Dresdner Bank’s private and corporate client business. In 2008 he became the Head of Investment Products and Investment Advisory Services for Dresdner Bank Switzerland. In addition, he was a member of the Global Investment Policy Committee for Dresdner Bank Group.</p>\n                <p>Robert graduated from the Vienna University of Economics and Business with an advanced degree in International Business Administration. He also holds the Chartered Financial Analyst (CFA) and the Chartered Alternative Investment Analyst (CAIA) designations.</p>\n            </div>\n        </div>\n        <div class="partner-bio row">\n            <div class="col-sm-6 left-align">\n                <div class="bio-contact-box">\n                    <div class="headshot">\n                        <img src="images/6334a7a4.maria-headshot.jpg">\n                    </div>\n                    <div class="bio-contact-info">\n                        <span class=\'text-allcaps\'>Maria Elena Hernandex</span>\n                        <span class="text-italic">Executive Director</span><br>\n                        <div class="desktop-only">\n                            <span>Phone: +1 305 856 9305</span>\n                            <span>Fax: +1 305 373 4249</span>\n                        </div>\n                        <div class="mobile-only">\n                            <a href="tel:+1-305-856-9305"><span>P: +1 305 856 9305</span></a>\n                            <span>F: +1 305 373 4249</span>\n                        </div>\n                        <span><a href="mailto:maria.hernandez@morihuston.com?subject=I found your contact information on your website and I\'d love to chat">maria.hernandez@morihuston.com</a></span>\n                    </div>\n                </div>\n            </div>\n            <div class="bio-copy col-sm-6">\n                <p>Mrs Hernandez has more than 25 years of experience in banking and wealth management services. She started her career with Panamerican Bank (today Bank of America). She has been at Bankers Trust Co. (today Deutsche Bank) for 13 years as Service Executive/Account Manager for the Latin America market.  Mrs. Hernandez has also been at Citibank International as a Relationship Officer for the Chilean market and recently at SunTrust Bank as Client Advisor for international and US clients.</p>\n                <p>Maria Elena holds a Certificate of Humanities/Translation and Interpretation from the Universidad Femenina del Sagrado Corazon (UNIFE) Lima, Peru.</p>\n            </div>\n        </div>\n    </div>\n</div>\n<div class="footer">\n    <div class="container">\n        <p>Mori Huston Partners LLC 1450 Brickwell Avenue, Suite 2106, Miami FL 33131</p>\n        '),e.buffer.push('\n        <div id="translator_4576"><noscript>Javascript is disable - <a href="http://www.webestools.com/">http://www.webestools.com/</a> - <a href="http://www.webestools.com/translator-buttons-web-page-translation-google-translate-website-widget-online-html-translator.html">Translation Buttons Generator</a></noscript></div><script type="text/javascript" src="http://services.webestools.com/translator/4576-1-yynnnnnnn.js"></script>\n    </div>\n</div>\n<!-- Modal -->\n<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n  <div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n        <h4 class="modal-title" id="myModalLabel">Fill Out our Form and we\'ll get back to you!</h4>\n      </div>\n      <div class="modal-body">\n        ...\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n        '),e.buffer.push("\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"),o}),Ember.TEMPLATES.contact=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h,i,j="";return b.buffer.push("\n      "),f={},h={},i={hash:{},inverse:m.noop,fn:m.program(2,g,b),contexts:[a,a],types:["STRING","ID"],hashContexts:h,hashTypes:f,data:b},d=c["link-to"]||a["link-to"],e=d?d.call(a,"contactItem","",i):n.call(a,"link-to","contactItem","",i),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n      "),j}function g(a,b){var d,e,f="";return b.buffer.push("<li>"),d={},e={},b.buffer.push(l(c._triageMustache.call(a,"linkTitle",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push('<span class="glyphicon glyphicon-chevron-right"></span></li>'),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k="",l=this.escapeExpression,m=this,n=c.helperMissing;return e.buffer.push('<div class="col-sm-7 right-content">\n  '),i={},j={},e.buffer.push(l(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:j,hashTypes:i,data:e}))),e.buffer.push('\n</div>\n<div class="col-sm-5 left-content">\n    <ul class="sub-nav">\n      '),i={},j={},h=c.each.call(b,{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[],types:[],hashContexts:j,hashTypes:i,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push("\n    </ul>\n</div>"),k}),Ember.TEMPLATES.contactItem=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h,i="",j=this.escapeExpression;return e.buffer.push("<h3>"),g={},h={},e.buffer.push(j(c._triageMustache.call(b,"title",{hash:{},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e}))),e.buffer.push("</h3>\n"),h={unescaped:b},g={unescaped:"STRING"},f=c._triageMustache.call(b,"summary",{hash:{unescaped:"true"},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e}),(f||0===f)&&e.buffer.push(f),i}),Ember.TEMPLATES.hpHeader=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div class="hp-header-bg">\n	<div class="hp-header-text">\n	    <h2 class="hp-title">MoriHuston Partners</h2>\n	    <span class="hp-tagline">A Business Approach To Investing</span>\n	</div>\n</div>')}),Ember.TEMPLATES.hpHeaderMobile=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div class="hp-header-mobile">\n    <img src="images/5ecb65a4.deskphoto-mobile.jpg">\n    <div class="hp-header-text">\n        <span class="hp-tagline">A Business Approach To Investing</span>\n    </div>\n</div>\n')}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push('<span>View Our Services</span><span class="glyphicon glyphicon-chevron-right"></span>')}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j,k,l="",m=this,n=c.helperMissing;return e.buffer.push('<div class="col-sm-5 left-content">\n    <p class="text-quote">We offer wealth management services for individuals, families and institutions. We strive for excellence in service and highly customize our offering to each particular client situation. Our team of provides experienced leadership and independent thought. Our position as an independent firm is key.</p>\n</div>\n<div class="col-sm-7 right-content">\n    <h3>Join us in investing for the long run.</h3>\n    <p>We take a business approach to investing. Being entrepreneurs ourselves we have a business mentality when investing our client’s assets. We don’t just buy and sell stocks and bonds. When investing in stocks we think of it as buying an ownership in a business. Similarly, we buy bonds as if we would be providing a loan. In all investment concerns we try to protect our downside by applying a margin of safety. We focus on value and embrace volatility as it provides us with opportunities to buy the businesses we like at discounted prices. This business and value approach to managing assets provides our clients with a more intuitive and long term investment perspective.</p>\n    <button class="cta-btn">\n        '),i={},j={},k={hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b],types:["STRING"],hashContexts:j,hashTypes:i,data:e},g=c["link-to"]||b["link-to"],h=g?g.call(b,"services",k):n.call(b,"link-to","services",k),(h||0===h)&&e.buffer.push(h),e.buffer.push("\n    </button>\n</div>\n"),l}),Ember.TEMPLATES.service=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h,i="",j=this.escapeExpression;return e.buffer.push("<h3>"),g={},h={},e.buffer.push(j(c._triageMustache.call(b,"title",{hash:{},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e}))),e.buffer.push("</h3>\n"),h={unescaped:b},g={unescaped:"STRING"},f=c._triageMustache.call(b,"summary",{hash:{unescaped:"true"},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e}),(f||0===f)&&e.buffer.push(f),i}),Ember.TEMPLATES.services=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h,i,j="";return b.buffer.push("\n      "),f={},h={},i={hash:{},inverse:m.noop,fn:m.program(2,g,b),contexts:[a,a],types:["STRING","ID"],hashContexts:h,hashTypes:f,data:b},d=c["link-to"]||a["link-to"],e=d?d.call(a,"service","",i):n.call(a,"link-to","service","",i),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n      "),j}function g(a,b){var d,e,f="";return b.buffer.push("<li>"),d={},e={},b.buffer.push(l(c._triageMustache.call(a,"linkTitle",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push('<span class="glyphicon glyphicon-chevron-right"></span></li>'),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k="",l=this.escapeExpression,m=this,n=c.helperMissing;return e.buffer.push('<div class="col-sm-7 right-content">\n  '),i={},j={},e.buffer.push(l(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:j,hashTypes:i,data:e}))),e.buffer.push('\n</div>\n<div class="col-sm-5 left-content">\n    <ul class="sub-nav">\n      '),i={},j={},h=c.each.call(b,{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[],types:[],hashContexts:j,hashTypes:i,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push("\n    </ul>\n</div>\n\n\n"),e.buffer.push("\n"),k});