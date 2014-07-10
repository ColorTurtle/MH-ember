App.Router.map(function () {
  // Add your routes here
  this.resource('aboutUs', function(){
  	this.resource('aboutItem', { path: ':aboutItem_id' });
  });
  this.resource('services', function(){
	  this.resource('service', { path: ':service_id' });
  });
  this.resource('contact', function(){
  	this.resource('contactItem', { path: ':contactItem_id'});
  });
});

App.ResetScroll = Ember.Mixin.create({
  activate: function() {
    this._super();
    window.scrollTo(0,0);
  }
});

App.IndexRoute = Ember.Route.extend(App.ResetScroll, {
		activate: function() {
    this._super.apply(this, arguments);
    $('.navigation').removeClass('fixed-nav');
    $('body').removeClass('fixed-nav-cushion');
    $(document).on("scroll", function(){
    	$('.navigation').toggleClass('fixed-nav-home', $(document).scrollTop()>400);
		});

   },

	renderTemplate: function() {
		this.render ('hpHeader', {
			into: 'application',
			outlet: 'hpHeader'
		});
		this.render('index', {
			into: 'application',
			outlet: 'content'
		});
		this.render('hpHeaderMobile', {
			into: 'application',
			outlet: 'mobile'	
		}); 
	}

});

App.ServicesRoute = Ember.Route.extend(App.ResetScroll, {
	model: function() {
		return services;
	},

	activate: function() {
    this._super.apply(this, arguments);
    $('.navigation').removeClass('fixed-nav');
    $('.navigation').addClass('fixed-nav');
    $('body').addClass('fixed-nav-cushion');
   },
	
	renderTemplate: function() {
		this.render ('services', {
			into: 'application',
			outlet: 'content'
		});
		window.scrollTo(0,0);
		
	}
});

App.ServiceRoute = Ember.Route.extend(App.ResetScroll, {
	model: function(params) {
		return services.findBy('id', params.service_id);
	}, 

	activate: function() {
    this._super.apply(this, arguments);
   },


	renderTemplate: function() {
		this.render ('service', {
			into: 'services'
		});
		window.scrollTo(0,0);

	}
});

App.AboutUsRoute = Ember.Route.extend({
	model: function() {
		return abouts;
	},

	activate: function() {
    this._super.apply(this, arguments);
    $('.navigation').removeClass('fixed-nav');
    $('.navigation').addClass('fixed-nav');
    $('body').addClass('fixed-nav-cushion');
   },


	renderTemplate: function() {
		this.render ('aboutUs', {
			into: 'application',
			outlet: 'content'
		});
		window.scrollTo(0,0);
		
	}
});

App.AboutItemRoute = Ember.Route.extend({
	model: function(params) {
		return abouts.findBy('id', params.aboutItem_id);
	}, 

	renderTemplate: function() {
		this.render ('aboutItem', {
			into: 'aboutUs'
		});
		window.scrollTo(0,0);
	}
});

App.ContactRoute = Ember.Route.extend({
	model: function() {
		return contacts;
	},

	renderTemplate: function() {
		this.render ('contact', {
			into: 'application',
			outlet: 'content'
		});
		window.scrollTo(0,0);
	}
});

App.ContactItemRoute = Ember.Route.extend({
	model: function(params) {
		return contacts.findBy('id', params.contactItem_id);
	},

	renderTemplate: function() {
		this.render ('contactItem', {
			into: 'contact'
		});
		window.scrollTo(0,0);
	}
});


// Using markdown to style the 'summary' information
// Service Pages Copy
var services = [{
	id: 'services',
	linkTitle: 'Services',
	title: 'Our core service offering consists of:',
	summary: '<strong>Discretionary Asset Management:</strong>\
	<p>After defining a long-term investment policy, the clients grant Mori Huston Partners the mandate to make the investment decisions on their behalf, without prior consent. The clients are updated regularly on the performance and the composition of the portfolio. Every portfolio is tailor made.</p>\
	<p><strong>Investment Advisory Services:</strong> After defining the client\'s investment objectives and risk profile, we constantly provide unbiased advice on how to achieve the individual investment goals. The ultimate decision on each investment lies with the client. We instruct the banks.</p>  \
	<p><strong>Family Office Services:</strong> To meet the sophisticated needs of families with significant assets, Mori Huston Partners offers value-added services to help:</p>  \
	<ul class="cleaner-list"><li> Coordinate and consolidate all investment activities</li>  \
	<li>Consolidate reporting on all assets and liabilities</li>  \
	<li>Facilitate multigenerational wealth planning</li></ul>'
}, {
	id: 'investment-management',
	linkTitle: 'Investment Management',
	title: 'Our Investment Philosophy:',
	summary: '<ul class="cleaner-list"><li>We seek to understand the client, to align with the client\'s interests, and to keep an independent mind</li><li>Our primary responsibility is the preservation of the client\'s capital, while striving to achieve attractive long-term inflation adjusted returns.</li><li>Asset allocation and risk management is at the heart of our investment process. We look for value and respect the business cycle.</li><li>Our strategy builds on the fact that, in any given market environment, there are undervalued asset classes or sectors which are poised to outperform.</li><li>Active allocation between asset classes and sectors is an important strategy in an environment where no single area is likely to continually dominate, and where returns should be moderate over a protracted period of time.</li><li>When judging any investment on its merits, we focus on its intrinsic value, and always look for a reasonable margin of safety.</li></ul>'
}, {
	id: 'investment-process',
	linkTitle: 'Investment Process',
	title: 'Our client is at the heart of our investment process',
	summary: '<strong>And we mean that literally.</strong>\
	<p>We take the time to listen and understand. We start with a carefully thought through, highly individualized and well-documented long-term investment policy. It will be developed closely with the respective investor to ensure representation, association, and an ability to stick to it over long periods of time. It will also help the client to make the really hard decisions in moments of crisis or exuberance. While the investment policy will provide the guiding light for long-term investment success, it should also be organic and will change as circumstances change.</p>\
	<p><strong>Investment Goals:</strong> Part of the investment policy setting process is a thorough discussion on the financial goals of the client. These goals could be of personal, family, philanthropic, or of other nature. Most of these goals are competing against each other, and it is therefore important to prioritize and dollar-weigh them accordingly.</p>  \
	<p><strong>Risk Preferences:</strong> We seek to find each investor’s individual risk preferences through a risk profiling process which incorporates the latest research in behavioral finance. Traditional finance wants us to be totally rational, but we remain human and don’t act according to theory. Most financial institutions use standard deviation as the unique risk factor driving an investor’s decision under uncertainty. However, this measure suggests that individuals weigh negative returns equally to positive returns, which is far from reality. While standard deviation is certainly helpful as a risk measure, we believe it can only be part of an overall more intuitive and realistic risk management toolkit. </p>  \
	<p><strong>Long Term Policy Allocation:</strong> The long-term allocation policy sets the overall portfolio risk limits, and ensures the realization of long-term investment goals. The decision on the maximum amount of capital allocated to growth (= higher risk) and capital preservation (=lower risk) strategies lies at the heart of this policy setting process.This policy allocation provides the framework within which we actively allocate depending on the attractiveness of each asset class, or instrument (see Active Asset Allocation). </p>  \
	<p><strong>Expectations and Governance:</strong> To us it is of critical importance to engage the client in the investment process. Only this way will we be able to find out how the client really feels about portfolio diversification, volatility, capital loss, specific asset classes or liquidity. Engagement also means offering education on investment issues, and creating realistic risk and return expectations. We want to provide the client with a sense of ownership in the investment process, as we believe strong and informed governance on the client’s part is an essential ingredient for a successful long-term relationship. </p>  \
	<p><strong>Monitoring and Review:</strong> A review of the investment policy and monitoring of the portfolio performance are critical. Portfolios need at a regular checkup to review the policy objectives and their implementation over the previous year. If the objectives are no longer appropriate, then they need to be changed. </p> '
}, {
	id: 'asset-allocation',
	linkTitle: 'Active Asset Allocation',
	title: 'Active Asset Allocation',
	summary: '<p>The investment policy sets the long-term policy allocation. Within this policy framework we are able to implement our <strong>active asset allocation</strong>. In forming return expectations for asset classes we use a combination of risk premium, intrinsic value, and global macroeconomic analysis. Our risk premium analysis is highly influenced by our views on economic growth. We evaluate the long-term growth potential of the global economies, their political risks, and demographic trends as well as structural changes within economies, and for the global economy as a whole. This is especially important in times of seismic shifts in the global political and economic landscape. Combining all these different parts, we get a good view of the intrinsic value of each asset class, and how this compares to the value currently offered in the market place.</p> \
	<p>While diversification is an important aspect in our investment process, <strong>we will only invest in an asset class, if our analysis tells us that the prospective return premiums are sufficient relative to the respective risks.</strong> Finance theory says that higher expected risk means higher expected return. We believe it doesn’t always work that way. What if the equity risk premium over bonds is negative and therefore the available long-term returns from bonds are higher than the ones available from equities. Why should an investor have any substantial investment in equities in such a situation? This is an important part in our investment process as our bets relative to the benchmark can be substantial, if we believe that equity markets are overvalued. We consider this flexibility to be an important factor in our ability to add value, and protect the client’s capital throughout different market environments. <strong>When market prices of various assets, securities, currencies, industries, or countries move away from their intrinsic value, that is the time when we want to take positions in our portfolios.</strong></p>'
}, {
	id: 'investment-selection',
	linkTitle: 'Investment Selection',
	title: 'Manager Selection',
	summary: '<ul class="cleaner-list"> \
	<li>We look for managers who share our investment philosophy and offer long-term added value to our clients.</li>\
	<li>MHP conducts a review on every manager who is added to a client portfolio. We also consider manager analysis of third parties, if they meet our quality criteria. In certain cases we also interview the managers personally.</li>\
	<li>Our methodology focuses on gaining an understanding of the fund\'s investment process, the strategy\'s risk and return drivers, as well as the manager\'s objectives and philosophies. We predominantly apply qualitative criteria as opposed to quantitative criteria.</li>\
	<li>We avoid funds with an excessive use of leverage or difficult to understand ("black box") strategies.</li>\
	<li>Once included on the MHP platform, funds and managers are monitored on a regular basis.</li>\
	</ul> \
	<h3>Instrument Selection</h3> \
	<p>Our equities and bond selection is also driven by our quest for value. We use our own as well as third party research.</p> \
	<p>Equities</p> \
	<ul class="cleaner-list"> \
	<li>We analyze the long-term earnings power of companies, independent of economic cycles.</li> \
	<li>We evaluate a company’s competitive position.</li> \
	<li>We look for attractive industries from a secular as well as cyclical perspective.</li> \
	</ul> \
	<p>Bonds</p> \
	<ul class="cleaner-list"> \
	<li>We evaluate the fiscal position of sovereign issuers, and the ability of corporations to cover their interest payments.</li> \
	<li>We look at relative attractiveness of credit risk premiums paid by comparable issuers.</li> \
	<li>We advice on duration and credit quality exposure, and check the liquidity for each bond.</li> \
	</ul>'
}];

// About Us Pages copy
var abouts = [{
	id: 'about-us',
	linkTitle: 'About Us',
	title: 'Mori Huston Difference',
	summary: '<p><strong>Mori Huston Partners is a unique investment management firm.</strong> As an Independent Investment Adviser, we offer highly customized, independent and transparent wealth and asset management services for families, individuals and institutions.</p>\
	<p>Our <strong>boutique and entrepreneurial</strong> nature allows us to always be a step ahead. As true innovators we use our expertise and enterprise to source exciting new investment opportunities, but it is our agility which allows us to move quickly to gain the advantage.</p>\
	<p>Our position as an <strong>independent</strong> firm is key. We are not associated to any financial institution. This guarantees decision making that only serves the needs and goals of our clients. Moreover we have a legal fiduciary responsibility to our clients and are held to higher standards by the regulators than bankers and brokers.</p>\
	<p>Mori Huston Partners maintains a <strong>high degree of confidentiality</strong> for its clients, and isolates the client from an ever changing industry by providing stability to the relationship.</p>\
	<p>Our <strong>services</strong> range from discretionary portfolio management to non-discretionary investment advice. We service individual accounts or an entire family of accounts at different financial institutions on a consolidated basis.</p>'
}, {
	id: 'our-clients',
	linkTitle: 'Our Clients',
	title: 'Our Clients',
	summary: '<p>Many of our clients are first or second generation entrepreneurs and professionals. Their backgrounds are diverse, yet all share a conviction to preserve and protect their wealth for the long term.</p>\
	<p>We consider it our responsibility to honor that commitment by delivering the very best strategic investment solutions, while respecting the confidential nature of this process.</p>\
	<p>Our clients\' trust is our greatest accolade, and it is our privilege to earn it today and for future generations.</p>'
}, {
	id: 'company-profile',
	linkTitle: 'Company Profile',
	title: 'Company Profile',
	summary: '<p>Mori Huston Partners is a limited liability company (LLC) under the laws of the United States, with its main office in Miami, Florida. The company is a SEC registered Investment Adviser.</p>\
	<p>We act on behalf of our clients through a limited power of attorney. The customer\'s capital lies in an account at a deposit bank. We have established preferred custodial relationships in booking centers around the globe and negotiated special conditions for our clients. We do however work with other institutions, if that is the client\'s preferred choice.</p>'
}, {
	id: 'code-of-ethics',
	linkTitle: 'Code of Ethics',
	title: 'Code of Ethics and Standards of Professional Conduct',
	summary: '<p>A commitment to professional ethics is fundamental to our values. Therefore we have adopted the Code of Ethics and Standards of Professional Conduct of the CFA Institute, which are the ethical benchmarks for investment professionals around the globe.</p>\
	<p>As we believe that ethical leadership begins at the highest levels of an organization, all our partners and other employees must adhere to these Codes and Standards as well as to the additional, detailed policies and procedures to implement them.</p>\
	<a href="images/cfa-english-code.pdf" target="blank">CFA Institue Code of Ethics and Standards of Professional Conduct</a>'
}, {
	id: 'filings-and-disclosures',
	linkTitle: 'Filings & Disclosures',
	title: 'Filings and Disclosures',
	summary: '<ul class="cleaner-list"><li><a href="images/MoriHustonADVFirmBrochureMarch2014.pdf" target="blank">ADV Part 2 Firm Brochure</a></li>\
	<li>Link to SEC website "<a href="http://www.adviserinfo.sec.gov/IAPD/Content/Search/iapd_Search.aspx" target="blank">investment adviser search</a>". Use CRD # 151260 to look up Mori Huston Partners LLC.</li>\
	<li><a href="images/BusinessContinuityPlanDisclosureStatement.pdf" target="blank">Business Continuity Plan Disclosure Statement</a></li>'
}];
// Contact Page Items
var contacts = [{
	id: 'contact-details',
	linkTitle: 'Contact Details',
	title: 'Come By Our Office',
	summary: '<h4>Mori Huston Partners LLC</h4>\
	<p>Main Office:</p>\
	<span class="address-text">1450 Brickell Avenue</span>\
	<span class="address-text">Suite 2160</span>\
	<span class="address-text">Miami, FL 33131</span><br>\
	<p>You can also reach any of our partners through our contact information listed below.</p>'
}, {
	id: 'send-email',
	linkTitle: 'Send E-mail',
	title: 'Send Us An E-mail',
	summary: '<div class="bcf_content"><h2>Contact Us</h2> \
	<button class="btn-login" rel="contactus">Contact Us</button>'
}];

